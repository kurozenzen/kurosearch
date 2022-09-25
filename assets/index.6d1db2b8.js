(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function A(){}function wf(t,e){for(const n in e)t[n]=e[n];return t}function If(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Ll(t){return t()}function $a(){return Object.create(null)}function Ue(t){t.forEach(Ll)}function Tf(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Bs;function hr(t,e){return Bs||(Bs=document.createElement("a")),Bs.href=e,t===Bs.href}function bf(t){return Object.keys(t).length===0}function Ef(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ye(t,e,n){t.$$.on_destroy.push(Ef(e,n))}function Sf(t,e,n,s){if(t){const r=Ml(t,e,n,s);return t[0](r)}}function Ml(t,e,n,s){return t[1]&&s?wf(n.ctx.slice(),t[1](s(e))):n.ctx}function kf(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Af(t,e,n,s,r,i){if(r){const o=Ml(e,n,s,i);t.p(o,r)}}function Cf(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Tt(t){return t==null?"":t}function v(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function Sn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function sn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return document.createTextNode(t)}function F(){return we(" ")}function Xt(){return we("")}function X(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Lr(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Df(t){return Array.from(t.childNodes)}function qe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function cn(t,e){t.value=e==null?"":e}function js(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function La(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ve(t,e,n){t.classList[n?"add":"remove"](e)}function Rf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let Yn;function it(t){Yn=t}function Mr(){if(!Yn)throw new Error("Function called outside component initialization");return Yn}function xl(t){Mr().$$.on_mount.push(t)}function Nf(t){Mr().$$.on_destroy.push(t)}function He(){const t=Mr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Rf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Of(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Mn=[],mn=[],Js=[],ji=[],Pf=Promise.resolve();let qi=!1;function $f(){qi||(qi=!0,Pf.then(Io))}function Xn(t){Js.push(t)}function wE(t){ji.push(t)}const Ii=new Set;let qs=0;function Io(){const t=Yn;do{for(;qs<Mn.length;){const e=Mn[qs];qs++,it(e),Lf(e.$$)}for(it(null),Mn.length=0,qs=0;mn.length;)mn.pop()();for(let e=0;e<Js.length;e+=1){const n=Js[e];Ii.has(n)||(Ii.add(n),n())}Js.length=0}while(Mn.length);for(;ji.length;)ji.pop()();qi=!1,Ii.clear(),it(t)}function Lf(t){if(t.fragment!==null){t.update(),Ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xn)}}const Zs=new Set;let Ot;function Te(){Ot={r:0,c:[],p:Ot}}function be(){Ot.r||Ue(Ot.c),Ot=Ot.p}function T(t,e){t&&t.i&&(Zs.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(Zs.has(t))return;Zs.add(t),Ot.c.push(()=>{Zs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Ma(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Te(),S(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),be())}):e.block.d(1),l.c(),T(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Io()}if(If(t)){const r=Mr();if(t.then(i=>{it(r),s(e.then,1,e.value,i),it(null)},i=>{if(it(r),s(e.catch,2,e.error,i),it(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Mf(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function IE(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function q(t){t&&t.c()}function V(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||Xn(()=>{const c=i.map(Ll).filter(Tf);o?o.push(...c):Ue(c),t.$$.on_mount=[]}),a.forEach(Xn)}function B(t,e){const n=t.$$;n.fragment!==null&&(Ue(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xf(t,e){t.$$.dirty[0]===-1&&(Mn.push(t),$f(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,s,r,i,o,a=[-1]){const c=Yn;it(t);const l=t.$$={fragment:null,ctx:null,props:i,update:A,not_equal:r,bound:$a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:$a(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...g)=>{const p=g.length?g[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=p)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](p),u&&xf(t,h)),d}):[],l.update(),u=!0,Ue(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Df(e.target);l.fragment&&l.fragment.l(h),h.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&T(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Io()}it(c)}class Z{$destroy(){B(this,1),this.$destroy=A}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!bf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const rn=[];function kn(t,e=A){let n;const s=new Set;function r(a){if(Y(t,a)&&(t=a,n)){const c=!rn.length;for(const l of s)l[1](),rn.push(l,t);if(c){for(let l=0;l<rn.length;l+=2)rn[l][0](rn[l+1]);rn.length=0}}}function i(a){r(a(t))}function o(a,c=A){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||A),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Uf=Object.freeze(["search","account","settings","help"]),Ff=t=>Uf.includes(t),Vf=()=>{const{subscribe:t,set:e}=kn("search");return{subscribe:t,navigateTo(n){if(!Ff(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Pt=Vf();function Bf(t){let e,n,s,r,i,o;return{c(){e=sn("svg"),n=sn("g"),s=sn("path"),r=sn("defs"),i=sn("clipPath"),o=sn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){D(a,e,c),v(e,n),v(n,s),v(e,r),v(r,i),v(i,o)},p:A,i:A,o:A,d(a){a&&C(e)}}}class jf extends Z{constructor(e){super(),J(this,e,null,Bf,Y,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ul=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ul(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zf=function(t){const e=Ul(t);return Fl.encodeByteArray(e,!0)},Vl=function(t){return zf(t).replace(/\./g,"")},Hf=function(t){try{return Fl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Bl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qf(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jl(){return typeof indexedDB=="object"}function ql(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Yf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="FirebaseError";class Ge extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xf,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Jf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ge(r,a,s)}}function Jf(t,e){return t.replace(Zf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Zf=/\{\$([^}]+)}/g;function ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(xa(i)&&xa(o)){if(!Jn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function xa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tp(t,e){const n=new np(t,e);return n.subscribe.bind(n)}class np{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ti),r.error===void 0&&(r.error=Ti),r.complete===void 0&&(r.complete=Ti);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ti(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1e3,ip=2,op=4*60*60*1e3,ap=.5;function Ua(t,e=rp,n=ip){const s=e*Math.pow(n,t),r=Math.round(ap*s*(Math.random()-.5)*2);return Math.min(op,s+r)}/**
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
 */function Re(t){return t&&t._delegate?t._delegate:t}class Ke{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lp(t){return t===Rt?void 0:t}function up(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const dp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},fp=te.INFO,pp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=pp[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xr{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let Fa,Va;function yp(){return Fa||(Fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,zi=new WeakMap,Hl=new WeakMap,bi=new WeakMap,To=new WeakMap;function _p(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zl.set(n,t)}).catch(()=>{}),To.set(e,t),e}function wp(t){if(zi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zi.set(t,e)}let Hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ip(t){Hi=t(Hi)}function Tp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ei(this),e,...n);return Hl.set(s,e.sort?e.sort():[e]),wt(s)}:vp().includes(t)?function(...e){return t.apply(Ei(this),e),wt(zl.get(this))}:function(...e){return wt(t.apply(Ei(this),e))}}function bp(t){return typeof t=="function"?Tp(t):(t instanceof IDBTransaction&&wp(t),mp(t,yp())?new Proxy(t,Hi):t)}function wt(t){if(t instanceof IDBRequest)return _p(t);if(bi.has(t))return bi.get(t);const e=bp(t);return e!==t&&(bi.set(t,e),To.set(e,t)),e}const Ei=t=>To.get(t);function Kl(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=wt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(wt(o.result),c.oldVersion,c.newVersion,wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ep=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],Si=new Map;function Ba(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Si.get(e))return Si.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Sp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ep.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Si.set(e,i),i}Ip(t=>({...t,get:(e,n,s)=>Ba(e,n)||t.get(e,n,s),has:(e,n)=>!!Ba(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ap(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ap(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",ja="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new xr("@firebase/app"),Cp="@firebase/app-compat",Dp="@firebase/analytics-compat",Rp="@firebase/analytics",Np="@firebase/app-check-compat",Op="@firebase/app-check",Pp="@firebase/auth",$p="@firebase/auth-compat",Lp="@firebase/database",Mp="@firebase/database-compat",xp="@firebase/functions",Up="@firebase/functions-compat",Fp="@firebase/installations",Vp="@firebase/installations-compat",Bp="@firebase/messaging",jp="@firebase/messaging-compat",qp="@firebase/performance",zp="@firebase/performance-compat",Hp="@firebase/remote-config",Kp="@firebase/remote-config-compat",Gp="@firebase/storage",Wp="@firebase/storage-compat",Qp="@firebase/firestore",Yp="@firebase/firestore-compat",Xp="firebase",Jp="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="[DEFAULT]",Zp={[Ki]:"fire-core",[Cp]:"fire-core-compat",[Rp]:"fire-analytics",[Dp]:"fire-analytics-compat",[Op]:"fire-app-check",[Np]:"fire-app-check-compat",[Pp]:"fire-auth",[$p]:"fire-auth-compat",[Lp]:"fire-rtdb",[Mp]:"fire-rtdb-compat",[xp]:"fire-fn",[Up]:"fire-fn-compat",[Fp]:"fire-iid",[Vp]:"fire-iid-compat",[Bp]:"fire-fcm",[jp]:"fire-fcm-compat",[qp]:"fire-perf",[zp]:"fire-perf-compat",[Hp]:"fire-rc",[Kp]:"fire-rc-compat",[Gp]:"fire-gcs",[Wp]:"fire-gcs-compat",[Qp]:"fire-fst",[Yp]:"fire-fst-compat","fire-js":"fire-js",[Xp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,Gi=new Map;function eg(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tt(t){const e=t.name;if(Gi.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,t);for(const n of dr.values())eg(n,t);return!0}function Zt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new Jt("app","Firebase",tg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=Jp;function sg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});const r=dr.get(s);if(r){if(Jn(t,r.options)&&Jn(n,r.config))return r;throw zt.create("duplicate-app",{appName:s})}const i=new hp(s);for(const a of Gi.values())i.addComponent(a);const o=new ng(t,n,i);return dr.set(s,o),o}function bo(t=Gl){const e=dr.get(t);if(!e)throw zt.create("no-app",{appName:t});return e}function Be(t,e,n){var s;let r=(s=Zp[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}tt(new Ke(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const rg="firebase-heartbeat-database",ig=1,Zn="firebase-heartbeat-store";let ki=null;function Wl(){return ki||(ki=Kl(rg,ig,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),ki}async function og(t){var e;try{return(await Wl()).transaction(Zn).objectStore(Zn).get(Ql(t))}catch(n){if(n instanceof Ge)qt.warn(n.message);else{const s=zt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qt.warn(s.message)}}}async function qa(t,e){var n;try{const r=(await Wl()).transaction(Zn,"readwrite");return await r.objectStore(Zn).put(e,Ql(t)),r.done}catch(s){if(s instanceof Ge)qt.warn(s.message);else{const r=zt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});qt.warn(r.message)}}}function Ql(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ag=1024,cg=30*24*60*60*1e3;class lg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=za(),{heartbeatsToSend:n,unsentEntries:s}=ug(this._heartbeatsCache.heartbeats),r=Vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function za(){return new Date().toISOString().substring(0,10)}function ug(t,e=ag){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ha(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ha(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?ql().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await og(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ha(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){tt(new Ke("platform-logger",e=>new kp(e),"PRIVATE")),tt(new Ke("heartbeat",e=>new lg(e),"PRIVATE")),Be(Ki,ja,t),Be(Ki,ja,"esm2017"),Be("fire-js","")}dg("");function Eo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Yl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fg=Yl,Xl=new Jt("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new xr("@firebase/auth");function er(t,...e){Ka.logLevel<=te.ERROR&&Ka.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,...e){throw So(t,...e)}function Xe(t,...e){return So(t,...e)}function Jl(t,e,n){const s=Object.assign(Object.assign({},fg()),{[e]:n});return new Jt("auth","Firebase",s).create(e,{appName:t.name})}function pg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ze(t,"argument-error"),Jl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function So(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xl.create(t,...e)}function x(t,e,...n){if(!t)throw So(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function ut(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;function at(t){ut(t instanceof Function,"Expected a class definition");let e=Ga.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ga.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e){const n=Zt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Jn(i,e!=null?e:{}))return r;ze(r,"already-initialized")}return n.initialize({options:e})}function mg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yg(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yg()||Bl()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Gf()||Wf()}get(){return vg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new vs(3e4,6e4);function _s(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,s,r={}){return eu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ms(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zl.fetch()(tu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function eu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},wg),e);try{const r=new Tg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jl(t,u,l);ze(t,u)}}catch(r){if(r instanceof Ge)throw r;ze(t,"network-request-failed")}}async function Is(t,e,n,s,r={}){const i=await ws(t,e,n,s,r);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ko(t.config,r):`${t.config.apiScheme}://${r}`}class Tg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),Ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Xe(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function Eg(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sg(t,e=!1){const n=Re(t),s=await n.getIdToken(e),r=Ao(s);x(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:qn(Ai(r.auth_time)),issuedAtTime:qn(Ai(r.iat)),expirationTime:qn(Ai(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ai(t){return Number(t)*1e3}function Ao(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hf(s);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function kg(t){const e=Ao(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ge&&Ag(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ag({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function fr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await es(t,Eg(n,{idToken:s}));x(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ng(i.providerUserInfo):[],a=Rg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Dg(t){const e=Re(t);await fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ng(t){return t.map(e=>{var{providerId:n}=e,s=Eo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e){const n=await eu(t,{},async()=>{const s=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=tu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zl.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Og(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ts;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sg(this,e)}reload(){return Dg(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,bg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:K,isAnonymous:M,providerData:W,stsTokenManager:ie}=n;x(k&&ie,e,"internal-error");const st=ts.fromJSON(this.name,ie);x(typeof k=="string",e,"internal-error"),gt(h,e.name),gt(d,e.name),x(typeof K=="boolean",e,"internal-error"),x(typeof M=="boolean",e,"internal-error"),gt(g,e.name),gt(p,e.name),gt(y,e.name),gt(_,e.name),gt(E,e.name),gt(m,e.name);const le=new Ft({uid:k,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:M,photoURL:p,phoneNumber:g,tenantId:y,stsTokenManager:st,createdAt:E,lastLoginAt:m});return W&&Array.isArray(W)&&(le.providerData=W.map(L=>Object.assign({},L))),_&&(le._redirectEventId=_),le}static async _fromIdTokenResponse(e,n,s=!1){const r=new ts;r.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await fr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=tr(this.userKey,r.apiKey,i),this.fullPersistenceKey=tr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(at(Qa),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||at(Qa);const o=tr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ft._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ou(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ru(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cu(e))return"Blackberry";if(lu(e))return"Webos";if(Co(e))return"Safari";if((e.includes("chrome/")||iu(e))&&!e.includes("edge/"))return"Chrome";if(au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ru(t=De()){return/firefox\//i.test(t)}function Co(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iu(t=De()){return/crios\//i.test(t)}function ou(t=De()){return/iemobile/i.test(t)}function au(t=De()){return/android/i.test(t)}function cu(t=De()){return/blackberry/i.test(t)}function lu(t=De()){return/webos/i.test(t)}function Ur(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pg(t=De()){var e;return Ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $g(){return Qf()&&document.documentMode===10}function uu(t=De()){return Ur(t)||au(t)||lu(t)||cu(t)||/windows phone/i.test(t)||ou(t)}function Lg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xa(this),this.idTokenSubscription=new Xa(this),this.beforeStateQueue=new Mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await fr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Re(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ts(t){return Re(t)}class Xa{constructor(e){this.auth=e,this.observer=null,this.addObserver=tp(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Ug(t,e){return ws(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(t,e){return Is(t,"POST","/v1/accounts:signInWithPassword",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",_s(t,e))}async function Bg(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Do{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ns(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ns(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Fg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vg(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ug(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Bg(e,{idToken:n,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jg="http://localhost";class Ht extends Do{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Eo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ht(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:jg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zg(t){const e=xn(Un(t)).link,n=e?xn(Un(e)).deep_link_id:null,s=xn(Un(t)).deep_link_id;return(s?xn(Un(s)).link:null)||s||n||e||t}class Ro{constructor(e){var n,s,r,i,o,a;const c=xn(Un(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=qg((r=c.mode)!==null&&r!==void 0?r:null);x(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zg(e);try{return new Ro(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return ns._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ro.parseLink(n);return x(s,"argument-error"),ns._fromEmailAndCode(e,s.code,s.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bs extends No{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends bs{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rt.credential(n,s)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends bs{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends bs{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vt.credential(n,s)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t,e){return Is(t,"POST","/v1/accounts:signUp",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pr extends Ge{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new pr(e,n,s,r)}}function du(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,i,e,s):i})}async function Kg(t,e,n=!1){const s=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await es(t,du(r,i,e,t),n);x(o.idToken,r,"internal-error");const a=Ao(o.idToken);x(a,r,"internal-error");const{sub:c}=a;return x(t.uid===c,r,"user-mismatch"),Kt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t,e,n=!1){const s="signIn",r=await du(t,s,e),i=await Kt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Wg(t,e){return fu(Ts(t),e)}async function Qg(t,e,n){const s=Ts(t),r=await Hg(s,{returnSecureToken:!0,email:e,password:n}),i=await Kt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Yg(t,e,n){return Wg(Re(t),An.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e){return Re(t).setPersistence(e)}function pu(t,e,n,s){return Re(t).onAuthStateChanged(e,n,s)}function Jg(t){return Re(t).signOut()}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Zg(){const t=De();return Co(t)||Ur(t)}const em=1e3,tm=10;class mu extends gu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zg()&&Lg(),this.fallbackToPolling=uu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);$g()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,tm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mu.type="LOCAL";const yu=mu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function nm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Fr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await nm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Oo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function rm(t){Je().location.href=t}/**
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
 */function wu(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function im(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function om(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function am(){return wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firebaseLocalStorageDb",cm=1,mr="firebaseLocalStorage",Tu="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function lm(){const t=indexedDB.deleteDatabase(Iu);return new Es(t).toPromise()}function Qi(){const t=indexedDB.open(Iu,cm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(mr,{keyPath:Tu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(mr)?e(s):(s.close(),await lm(),e(await Qi()))})})}async function Za(t,e,n){const s=Vr(t,!0).put({[Tu]:e,value:n});return new Es(s).toPromise()}async function um(t,e){const n=Vr(t,!1).get(e),s=await new Es(n).toPromise();return s===void 0?null:s.value}function ec(t,e){const n=Vr(t,!0).delete(e);return new Es(n).toPromise()}const hm=800,dm=3;class bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance(am()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await im(),!this.activeServiceWorker)return;this.sender=new sm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||om()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await Za(e,gr,"1"),await ec(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Za(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>um(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ec(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Vr(r,!1).getAll();return new Es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bu.type="LOCAL";const fm=bu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Xe("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",pm().appendChild(s)})}function mm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new vs(3e4,6e4);/**
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
 */function Eu(t,e){return e?at(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Do{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ym(t){return fu(t.auth,new Po(t),t.bypassAuthState)}function vm(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Gg(n,new Po(t),t.bypassAuthState)}async function _m(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Kg(n,new Po(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ym;case"linkViaPopup":case"linkViaRedirect":return _m;case"reauthViaPopup":case"reauthViaRedirect":return vm;default:ze(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new vs(2e3,1e4);async function Im(t,e,n){const s=Ts(t);pg(t,e,No);const r=Eu(s,n);return new $t(s,"signInViaPopup",e,r).executeNotNull()}class $t extends Su{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wm.get())};e()}}$t.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="pendingRedirect",nr=new Map;class bm extends Su{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const s=await Em(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Em(t,e){const n=Am(e),s=km(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Sm(t,e){nr.set(t._key(),e)}function km(t){return at(t._redirectPersistence)}function Am(t){return tr(Tm,t.config.apiKey,t.name)}async function Cm(t,e,n=!1){const s=Ts(t),r=Eu(s,e),o=await new bm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=10*60*1e3;class Rm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ku(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(tc(e))}saveEventToCache(e){this.cachedEventUids.add(tc(e)),this.lastProcessedEventTime=Date.now()}}function tc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ku({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ku(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$m=/^https?/;async function Lm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Om(t);for(const n of e)try{if(Mm(n))return}catch{}ze(t,"unauthorized-domain")}function Mm(t){const e=Wi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!$m.test(n))return!1;if(Pm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const xm=new vs(3e4,6e4);function nc(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Um(t){return new Promise((e,n)=>{var s,r,i;function o(){nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nc(),n(Xe(t,"network-request-failed"))},timeout:xm.get()})}if(!((r=(s=Je().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const a=mm("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},gm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sr=null,e})}let sr=null;function Fm(t){return sr=sr||Um(t),sr}/**
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
 */const Vm=new vs(5e3,15e3),Bm="__/auth/iframe",jm="emulator/auth/iframe",qm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hm(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ko(e,jm):`https://${t.config.authDomain}/${Bm}`,s={apiKey:e.apiKey,appName:t.name,v:ys},r=zm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ms(s).slice(1)}`}async function Km(t){const e=await Fm(t),n=Je().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Hm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},Vm.get());function c(){Je().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wm=500,Qm=600,Ym="_blank",Xm="http://localhost";class sc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jm(t,e,n,s=Wm,r=Qm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Gm),{width:s.toString(),height:r.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=iu(l)?Ym:n),ru(l)&&(e=e||Xm,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,p])=>`${d}${g}=${p},`,"");if(Pg(l)&&a!=="_self")return Zm(e||"",a),new sc(null);const h=window.open(e||"",a,u);x(h,t,"popup-blocked");try{h.focus()}catch{}return new sc(h)}function Zm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ey="__/auth/handler",ty="emulator/auth/handler";function rc(t,e,n,s,r,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ys,eventId:r};if(e instanceof No){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof bs){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ny(t)}?${ms(a).slice(1)}`}function ny({config:t}){return t.emulator?ko(t,ty):`https://${t.authDomain}/${ey}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="webStorageSupport";class sy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_u,this._completeRedirectFn=Cm,this._overrideRedirectResult=Sm}async _openPopup(e,n,s,r){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rc(e,n,s,Wi(),r);return Jm(e,o,Oo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),rm(rc(e,n,s,Wi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ut(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Km(e),s=new Rm(e);return n.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ci,{type:Ci},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ci];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uu()||Co()||Ur()}}const ry=sy;var ic="@firebase/auth",oc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ay(t){tt(new Ke("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hu(t)},u=new xg(a,c,l);return mg(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),tt(new Ke("auth-internal",e=>{const n=Ts(e.getProvider("auth").getImmediate());return(s=>new iy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(ic,oc,oy(t)),Be(ic,oc,"esm2017")}/**
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
 */function cy(t=bo()){const e=Zt(t,"auth");return e.isInitialized()?e.getImmediate():gg(t,{popupRedirectResolver:ry,persistence:[fm,yu,_u]})}ay("Browser");const Au="@firebase/installations",$o="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=1e4,Du=`w:${$o}`,Ru="FIS_v2",ly="https://firebaseinstallations.googleapis.com/v1",uy=60*60*1e3,hy="installations",dy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Gt=new Jt(hy,dy,fy);function Nu(t){return t instanceof Ge&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou({projectId:t}){return`${ly}/projects/${t}/installations`}function Pu(t){return{token:t.token,requestStatus:2,expiresIn:gy(t.expiresIn),creationTime:Date.now()}}async function $u(t,e){const s=(await e.json()).error;return Gt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Lu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function py(t,{refreshToken:e}){const n=Lu(t);return n.append("Authorization",my(e)),n}async function Mu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gy(t){return Number(t.replace("s","000"))}function my(t){return`${Ru} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ou(t),r=Lu(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ru,appId:t.appId,sdkVersion:Du},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Mu(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pu(l.authToken)}}else throw await $u("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=/^[cdef][\w-]{21}$/,Yi="";function wy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Iy(t);return _y.test(n)?n:Yi}catch{return Yi}}function Iy(t){return vy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Uu=new Map;function Fu(t,e){const n=Br(t);Vu(n,e),Ty(n,e)}function Vu(t,e){const n=Uu.get(t);if(!!n)for(const s of n)s(e)}function Ty(t,e){const n=by();n&&n.postMessage({key:t,fid:e}),Ey()}let Lt=null;function by(){return!Lt&&"BroadcastChannel"in self&&(Lt=new BroadcastChannel("[Firebase] FID Change"),Lt.onmessage=t=>{Vu(t.data.key,t.data.fid)}),Lt}function Ey(){Uu.size===0&&Lt&&(Lt.close(),Lt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebase-installations-database",ky=1,Wt="firebase-installations-store";let Di=null;function Lo(){return Di||(Di=Kl(Sy,ky,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wt)}}})),Di}async function yr(t,e){const n=Br(t),r=(await Lo()).transaction(Wt,"readwrite"),i=r.objectStore(Wt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Fu(t,e.fid),e}async function Bu(t){const e=Br(t),s=(await Lo()).transaction(Wt,"readwrite");await s.objectStore(Wt).delete(e),await s.done}async function jr(t,e){const n=Br(t),r=(await Lo()).transaction(Wt,"readwrite"),i=r.objectStore(Wt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Fu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){let e;const n=await jr(t.appConfig,s=>{const r=Ay(s),i=Cy(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Yi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ay(t){const e=t||{fid:wy(),registrationStatus:0};return ju(e)}function Cy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Gt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Dy(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ry(t)}:{installationEntry:e}}async function Dy(t,e){try{const n=await yy(t,e);return yr(t.appConfig,n)}catch(n){throw Nu(n)&&n.customData.serverCode===409?await Bu(t.appConfig):await yr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ry(t){let e=await ac(t.appConfig);for(;e.registrationStatus===1;)await xu(100),e=await ac(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Mo(t);return s||n}return e}function ac(t){return jr(t,e=>{if(!e)throw Gt.create("installation-not-found");return ju(e)})}function ju(t){return Ny(t)?{fid:t.fid,registrationStatus:0}:t}function Ny(t){return t.registrationStatus===1&&t.registrationTime+Cu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy({appConfig:t,heartbeatServiceProvider:e},n){const s=Py(t,n),r=py(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Du,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Mu(()=>fetch(s,a));if(c.ok){const l=await c.json();return Pu(l)}else throw await $u("Generate Auth Token",c)}function Py(t,{fid:e}){return`${Ou(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e=!1){let n;const s=await jr(t.appConfig,i=>{if(!qu(i))throw Gt.create("not-registered");const o=i.authToken;if(!e&&My(o))return i;if(o.requestStatus===1)return n=$y(t,e),i;{if(!navigator.onLine)throw Gt.create("app-offline");const a=Uy(i);return n=Ly(t,a),a}});return n?await n:s.authToken}async function $y(t,e){let n=await cc(t.appConfig);for(;n.authToken.requestStatus===1;)await xu(100),n=await cc(t.appConfig);const s=n.authToken;return s.requestStatus===0?xo(t,e):s}function cc(t){return jr(t,e=>{if(!qu(e))throw Gt.create("not-registered");const n=e.authToken;return Fy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ly(t,e){try{const n=await Oy(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await yr(t.appConfig,s),n}catch(n){if(Nu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yr(t.appConfig,s)}throw n}}function qu(t){return t!==void 0&&t.registrationStatus===2}function My(t){return t.requestStatus===2&&!xy(t)}function xy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+uy}function Uy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Fy(t){return t.requestStatus===1&&t.requestTime+Cu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(t){const e=t,{installationEntry:n,registrationPromise:s}=await Mo(e);return s?s.catch(console.error):xo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e=!1){const n=t;return await jy(n),(await xo(n,e)).token}async function jy(t){const{registrationPromise:e}=await Mo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){if(!t||!t.options)throw Ri("App Configuration");if(!t.name)throw Ri("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ri(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ri(t){return Gt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="installations",zy="installations-internal",Hy=t=>{const e=t.getProvider("app").getImmediate(),n=qy(e),s=Zt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ky=t=>{const e=t.getProvider("app").getImmediate(),n=Zt(e,zu).getImmediate();return{getId:()=>Vy(n),getToken:r=>By(n,r)}};function Gy(){tt(new Ke(zu,Hy,"PUBLIC")),tt(new Ke(zy,Ky,"PRIVATE"))}Gy();Be(Au,$o);Be(Au,$o,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="analytics",Wy="firebase_id",Qy="origin",Yy=60*1e3,Xy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new xr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Jy(t,e){const n=document.createElement("script");n.src=`${Hu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Zy(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ev(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Ku(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Le.error(a)}t("config",r,i)}async function tv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Ku(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Le.error(i)}}function nv(t,e,n,s){async function r(i,o,a){try{i==="event"?await tv(t,e,n,o,a):i==="config"?await ev(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Le.error(c)}}return r}function sv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=nv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function rv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Hu))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},je=new Jt("analytics","Analytics",iv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=30,av=1e3;class cv{constructor(e={},n=av){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gu=new cv;function lv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function uv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:lv(s)},i=Xy.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function hv(t,e=Gu,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw je.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw je.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new pv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Yy),Wu({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Wu(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Gu){var i,o;const{appId:a,measurementId:c}=t;try{await dv(s,e)}catch(l){if(c)return Le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await uv(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!fv(u)){if(r.deleteThrottleMetadata(a),c)return Le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ua(n,r.intervalMillis,ov):Ua(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),Le.debug(`Calling attemptFetch again in ${h} millis`),Wu(t,d,s,r)}}function dv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fv(t){if(!(t instanceof Ge)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(){var t;if(jl())try{await ql()}catch(e){return Le.warn(je.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Le.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yv(t,e,n,s,r,i,o){var a;const c=hv(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Le.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Le.error(g)),e.push(c);const l=mv().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);rv()||Jy(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Qy]="firebase",d.update=!0,h!=null&&(d[Wy]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.app=e}_delete(){return delete zn[this.app.options.appId],Promise.resolve()}}let zn={},lc=[];const uc={};let Ni="dataLayer",_v="gtag",hc,Qu,dc=!1;function wv(){const t=[];if(Bl()&&t.push("This is a browser extension environment."),Yf()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=je.create("invalid-analytics-context",{errorInfo:e});Le.warn(n.message)}}function Iv(t,e,n){wv();const s=t.options.appId;if(!s)throw je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw je.create("no-api-key");if(zn[s]!=null)throw je.create("already-exists",{id:s});if(!dc){Zy(Ni);const{wrappedGtag:i,gtagCore:o}=sv(zn,lc,uc,Ni,_v);Qu=i,hc=o,dc=!0}return zn[s]=yv(t,lc,uc,e,hc,Ni,n),new vv(t)}function Tv(t=bo()){t=Re(t);const e=Zt(t,vr);return e.isInitialized()?e.getImmediate():bv(t)}function bv(t,e={}){const n=Zt(t,vr);if(n.isInitialized()){const r=n.getImmediate();if(Jn(e,n.getOptions()))return r;throw je.create("already-initialized")}return n.initialize({options:e})}function Ev(t,e,n,s){t=Re(t),gv(Qu,zn[t.app.options.appId],e,n,s).catch(r=>Le.error(r))}const fc="@firebase/analytics",pc="0.8.0";function Sv(){tt(new Ke(vr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Iv(s,r,n)},"PUBLIC")),tt(new Ke("analytics-internal",t,"PRIVATE")),Be(fc,pc),Be(fc,pc,"esm2017");function t(e){try{const n=e.getProvider(vr).getImmediate();return{logEvent:(s,r,i)=>Ev(n,s,r,i)}}catch(n){throw je.create("interop-component-reg-failed",{reason:n})}}}Sv();var kv="firebase",Av="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(kv,Av,"app");var Cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Uo=Uo||{},U=Cv||self;function _r(){}function qr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ss(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Dv(t){return Object.prototype.hasOwnProperty.call(t,Oi)&&t[Oi]||(t[Oi]=++Rv)}var Oi="closure_uid_"+(1e9*Math.random()>>>0),Rv=0;function Nv(t,e,n){return t.call.apply(t.bind,arguments)}function Ov(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=Nv:Ae=Ov,Ae.apply(null,arguments)}function Hs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Se(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function At(){this.s=this.s,this.o=this.o}var Pv=0;At.prototype.s=!1;At.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Pv!=0)&&Dv(this)};At.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ce(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var $v=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",_r,e),U.removeEventListener("test",_r,e)}catch{}return t}();function wr(t){return/^[\s\xa0]*$/.test(t)}var mc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pi(t,e){return t<e?-1:t>e?1:0}function zr(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Qe(t){return zr().indexOf(t)!=-1}function Vo(t){return Vo[" "](t),t}Vo[" "]=_r;function Lv(t){var e=Uv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Mv=Qe("Opera"),yn=Qe("Trident")||Qe("MSIE"),Xu=Qe("Edge"),Xi=Xu||yn,Ju=Qe("Gecko")&&!(zr().toLowerCase().indexOf("webkit")!=-1&&!Qe("Edge"))&&!(Qe("Trident")||Qe("MSIE"))&&!Qe("Edge"),xv=zr().toLowerCase().indexOf("webkit")!=-1&&!Qe("Edge");function Zu(){var t=U.document;return t?t.documentMode:void 0}var Ir;e:{var $i="",Li=function(){var t=zr();if(Ju)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xu)return/Edge\/([\d\.]+)/.exec(t);if(yn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xv)return/WebKit\/(\S+)/.exec(t);if(Mv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Li&&($i=Li?Li[1]:""),yn){var Mi=Zu();if(Mi!=null&&Mi>parseFloat($i)){Ir=String(Mi);break e}}Ir=$i}var Uv={};function Fv(){return Lv(function(){let t=0;const e=mc(String(Ir)).split("."),n=mc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Pi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Pi(r[2].length==0,i[2].length==0)||Pi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ji;if(U.document&&yn){var yc=Zu();Ji=yc||parseInt(Ir,10)||void 0}else Ji=void 0;var Vv=Ji;function ss(t,e){if(Ce.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ju){e:{try{Vo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Bv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ss.X.h.call(this)}}Se(ss,Ce);var Bv={2:"touch",3:"pen",4:"mouse"};ss.prototype.h=function(){ss.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ks="closure_listenable_"+(1e6*Math.random()|0),jv=0;function qv(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++jv,this.ba=this.ea=!1}function Hr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eh(t){const e={};for(const n in t)e[n]=t[n];return e}const vc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function th(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vc.length;i++)n=vc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Kr(t){this.src=t,this.g={},this.h=0}Kr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=eo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new qv(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Zi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Yu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Hr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var jo="closure_lm_"+(1e6*Math.random()|0),xi={};function nh(t,e,n,s,r){if(s&&s.once)return rh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)nh(t,e[i],n,s,r);return null}return n=Ho(n),t&&t[ks]?t.N(e,n,Ss(s)?!!s.capture:!!s,r):sh(t,e,n,!1,s,r)}function sh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ss(r)?!!r.capture:!!r,a=zo(t);if(a||(t[jo]=a=new Kr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=zv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)$v||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(oh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zv(){function t(n){return e.call(t.src,t.listener,n)}const e=Hv;return t}function rh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rh(t,e[i],n,s,r);return null}return n=Ho(n),t&&t[ks]?t.O(e,n,Ss(s)?!!s.capture:!!s,r):sh(t,e,n,!0,s,r)}function ih(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ih(t,e[i],n,s,r);else s=Ss(s)?!!s.capture:!!s,n=Ho(n),t&&t[ks]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=eo(i,n,s,r),-1<n&&(Hr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eo(e,n,s,r)),(n=-1<t?e[t]:null)&&qo(n))}function qo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ks])Zi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(oh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zo(e))?(Zi(n,t),n.h==0&&(n.src=null,e[jo]=null)):Hr(t)}}}function oh(t){return t in xi?xi[t]:xi[t]="on"+t}function Hv(t,e){if(t.ba)t=!0;else{e=new ss(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qo(t),t=n.call(s,e)}return t}function zo(t){return t=t[jo],t instanceof Kr?t:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(t){return typeof t=="function"?t:(t[Ui]||(t[Ui]=function(e){return t.handleEvent(e)}),t[Ui])}function ye(){At.call(this),this.i=new Kr(this),this.P=this,this.I=null}Se(ye,At);ye.prototype[ks]=!0;ye.prototype.removeEventListener=function(t,e,n,s){ih(this,t,e,n,s)};function Ie(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ce(e,t);else if(e instanceof Ce)e.target=e.target||t;else{var r=e;e=new Ce(s,t),th(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ks(o,s,!0,e)&&r}if(o=e.g=t,r=Ks(o,s,!0,e)&&r,r=Ks(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ks(o,s,!1,e)&&r}ye.prototype.M=function(){if(ye.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hr(n[s]);delete t.g[e],t.h--}}this.I=null};ye.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ks(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Zi(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ko=U.JSON.stringify;function Kv(){var t=lh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gv{constructor(){this.h=this.g=null}add(e,n){const s=ah.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ah=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Wv,t=>t.reset());class Wv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Qv(t){U.setTimeout(()=>{throw t},0)}function ch(t,e){to||Yv(),no||(to(),no=!0),lh.add(t,e)}var to;function Yv(){var t=U.Promise.resolve(void 0);to=function(){t.then(Xv)}}var no=!1,lh=new Gv;function Xv(){for(var t;t=Kv();){try{t.h.call(t.g)}catch(n){Qv(n)}var e=ah;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}no=!1}function Gr(t,e){ye.call(this),this.h=t||1,this.g=e||U,this.j=Ae(this.kb,this),this.l=Date.now()}Se(Gr,ye);R=Gr.prototype;R.ca=!1;R.R=null;R.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(Go(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Go(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}R.M=function(){Gr.X.M.call(this),Go(this),delete this.g};function Wo(t,e,n){if(typeof t=="function")n&&(t=Ae(t,n));else if(t&&typeof t.handleEvent=="function")t=Ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function uh(t){t.g=Wo(()=>{t.g=null,t.i&&(t.i=!1,uh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Jv extends At{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uh(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(t){At.call(this),this.h=t,this.g={}}Se(rs,At);var _c=[];function hh(t,e,n,s){Array.isArray(n)||(n&&(_c[0]=n.toString()),n=_c);for(var r=0;r<n.length;r++){var i=nh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dh(t){Bo(t.g,function(e,n){this.g.hasOwnProperty(n)&&qo(e)},t),t.g={}}rs.prototype.M=function(){rs.X.M.call(this),dh(this)};rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wr(){this.g=!0}Wr.prototype.Aa=function(){this.g=!1};function Zv(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function e_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ln(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+n_(t,n)+(s?" "+s:"")})}function t_(t,e){t.info(function(){return"TIMEOUT: "+e})}Wr.prototype.info=function(){};function n_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ko(n)}catch{return e}}var en={},wc=null;function Qr(){return wc=wc||new ye}en.Oa="serverreachability";function fh(t){Ce.call(this,en.Oa,t)}Se(fh,Ce);function is(t){const e=Qr();Ie(e,new fh(e))}en.STAT_EVENT="statevent";function ph(t,e){Ce.call(this,en.STAT_EVENT,t),this.stat=e}Se(ph,Ce);function Oe(t){const e=Qr();Ie(e,new ph(e,t))}en.Pa="timingevent";function gh(t,e){Ce.call(this,en.Pa,t),this.size=e}Se(gh,Ce);function As(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Yr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},mh={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qo(){}Qo.prototype.h=null;function Ic(t){return t.h||(t.h=t.i())}function yh(){}var Cs={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Yo(){Ce.call(this,"d")}Se(Yo,Ce);function Xo(){Ce.call(this,"c")}Se(Xo,Ce);var so;function Xr(){}Se(Xr,Qo);Xr.prototype.g=function(){return new XMLHttpRequest};Xr.prototype.i=function(){return{}};so=new Xr;function Ds(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new rs(this),this.O=s_,t=Xi?125:void 0,this.T=new Gr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var s_=45e3,ro={},Tr={};R=Ds.prototype;R.setTimeout=function(t){this.O=t};function io(t,e,n){t.K=1,t.v=Zr(ht(e)),t.s=n,t.P=!0,_h(t,null)}function _h(t,e){t.F=Date.now(),Rs(t),t.A=ht(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ah(n.i,"t",s),t.C=0,n=t.l.H,t.h=new vh,t.g=Wh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Jv(Ae(t.Ka,t,t.g),t.N)),hh(t.S,t.g,"readystatechange",t.hb),e=t.H?eh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),is(),Zv(t.j,t.u,t.A,t.m,t.U,t.s)}R.hb=function(t){t=t.target;const e=this.L;e&&ct(t)==3?e.l():this.Ka(t)};R.Ka=function(t){try{if(t==this.g)e:{const u=ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Xi||this.g&&(this.h.h||this.g.fa()||Sc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?is(3):is(2)),Jr(this);var n=this.g.aa();this.Y=n;t:if(wh(this)){var s=Sc(this.g);t="";var r=s.length,i=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Hn(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,e_(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wr(a)){var l=a;break t}}l=null}if(n=l)ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,oo(this,n);else{this.i=!1,this.o=3,Oe(12),Mt(this),Hn(this);break e}}this.P?(Ih(this,u,o),Xi&&this.i&&u==3&&(hh(this.S,this.T,"tick",this.gb),this.T.start())):(ln(this.j,this.m,o,null),oo(this,o)),u==4&&Mt(this),this.i&&!this.I&&(u==4?zh(this.l,this):(this.i=!1,Rs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Oe(12)):(this.o=0,Oe(13)),Mt(this),Hn(this)}}}catch{}finally{}};function wh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ih(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=r_(t,n),r==Tr){e==4&&(t.o=4,Oe(14),s=!1),ln(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ro){t.o=4,Oe(15),ln(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ln(t.j,t.m,r,null),oo(t,r);wh(t)&&r!=Tr&&r!=ro&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Oe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ra(e),e.K=!0,Oe(11))):(ln(t.j,t.m,n,"[Invalid Chunked Response]"),Mt(t),Hn(t))}R.gb=function(){if(this.g){var t=ct(this.g),e=this.g.fa();this.C<e.length&&(Jr(this),Ih(this,t,e),this.i&&t!=4&&Rs(this))}};function r_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Tr:(n=Number(e.substring(n,s)),isNaN(n)?ro:(s+=1,s+n>e.length?Tr:(e=e.substr(s,n),t.C=s+n,e)))}R.cancel=function(){this.I=!0,Mt(this)};function Rs(t){t.V=Date.now()+t.O,Th(t,t.O)}function Th(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=As(Ae(t.fb,t),e)}function Jr(t){t.B&&(U.clearTimeout(t.B),t.B=null)}R.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(t_(this.j,this.A),this.K!=2&&(is(),Oe(17)),Mt(this),this.o=2,Hn(this)):Th(this,this.V-t)};function Hn(t){t.l.G==0||t.I||zh(t.l,t)}function Mt(t){Jr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Go(t.T),dh(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function oo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ao(n.h,t))){if(!t.J&&ao(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Sr(n),ni(n);else break e;sa(n),Oe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=As(Ae(n.bb,n),6e3));if(1>=Rh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else xt(n,11)}else if((t.J||n.g==t)&&Sr(n),!wr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jo(i,i.h),i.h=null))}if(s.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,ae(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gh(s,s.H?s.ka:null,s.V),o.J){Nh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Jr(a),Rs(a)),s.g=o}else jh(s);0<n.i.length&&si(n)}else l[0]!="stop"&&l[0]!="close"||xt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xt(n,7):na(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}is(4)}catch{}}function i_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function o_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function bh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=o_(t),s=i_(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function a_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Vt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vt){this.h=e!==void 0?e:t.h,br(this,t.j),this.s=t.s,this.g=t.g,Er(this,t.m),this.l=t.l,e=t.i;var n=new os;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tc(this,n),this.o=t.o}else t&&(n=String(t).match(Eh))?(this.h=!!e,br(this,n[1]||"",!0),this.s=Fn(n[2]||""),this.g=Fn(n[3]||"",!0),Er(this,n[4]),this.l=Fn(n[5]||"",!0),Tc(this,n[6]||"",!0),this.o=Fn(n[7]||"")):(this.h=!!e,this.i=new os(null,this.h))}Vt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vn(e,bc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vn(e,bc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vn(n,n.charAt(0)=="/"?u_:l_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vn(n,d_)),t.join("")};function ht(t){return new Vt(t)}function br(t,e,n){t.j=n?Fn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Er(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tc(t,e,n){e instanceof os?(t.i=e,f_(t.i,t.h)):(n||(e=Vn(e,h_)),t.i=new os(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Zr(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,c_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function c_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bc=/[#\/\?@]/g,l_=/[#\?:]/g,u_=/[#\?]/g,h_=/[#\?@]/g,d_=/#/g;function os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ct(t){t.g||(t.g=new Map,t.h=0,t.i&&a_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=os.prototype;R.add=function(t,e){Ct(this),this.i=null,t=Cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Sh(t,e){Ct(t),e=Cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kh(t,e){return Ct(t),e=Cn(t,e),t.g.has(e)}R.forEach=function(t,e){Ct(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};R.oa=function(){Ct(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};R.W=function(t){Ct(this);let e=[];if(typeof t=="string")kh(this,t)&&(e=e.concat(this.g.get(Cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Ct(this),this.i=null,t=Cn(this,t),kh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ah(t,e,n){Sh(t,e),0<n.length&&(t.i=null,t.g.set(Cn(t,e),Fo(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function f_(t,e){e&&!t.j&&(Ct(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Sh(this,s),Ah(this,r,n))},t)),t.j=e}var p_=class{constructor(t,e){this.h=t,this.g=e}};function Ch(t){this.l=t||g_,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var g_=10;function Dh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rh(t){return t.h?1:t.g?t.g.size:0}function ao(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jo(t,e){t.g?t.g.add(e):t.h=e}function Nh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ch.prototype.cancel=function(){if(this.i=Oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Oh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fo(t.i)}function Zo(){}Zo.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Zo.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function m_(){this.g=new Zo}function y_(t,e,n){const s=n||"";try{bh(t,function(r,i){let o=r;Ss(r)&&(o=Ko(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function v_(t,e){const n=new Wr;if(U.Image){const s=new Image;s.onload=Hs(Gs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Hs(Gs,n,s,"TestLoadImage: error",!1,e),s.onabort=Hs(Gs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Hs(Gs,n,s,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Gs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ns(t){this.l=t.$b||null,this.j=t.ib||!1}Se(Ns,Qo);Ns.prototype.g=function(){return new ei(this.l,this.j)};Ns.prototype.i=function(t){return function(){return t}}({});function ei(t,e){ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(ei,ye);var ea=0;R=ei.prototype;R.open=function(t,e){if(this.readyState!=ea)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,as(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=ea};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ph(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Ph(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Os(this):as(this),this.readyState==3&&Ph(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,Os(this))};R.Ta=function(t){this.g&&(this.response=t,Os(this))};R.ga=function(){this.g&&Os(this)};function Os(t){t.readyState=4,t.l=null,t.j=null,t.A=null,as(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function as(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var __=U.JSON.parse;function de(t){ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$h,this.K=this.L=!1}Se(de,ye);var $h="",w_=/^https?$/i,I_=["POST","PUT"];R=de.prototype;R.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():so.g(),this.C=this.u?Ic(this.u):Ic(so),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ec(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=U.FormData&&t instanceof U.FormData,!(0<=Yu(I_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xh(this),0<this.B&&((this.K=T_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Wo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ec(this,i)}};function T_(t){return yn&&Fv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.qa=function(){typeof Uo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))};function Ec(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lh(t),ti(t)}function Lh(t){t.D||(t.D=!0,Ie(t,"complete"),Ie(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ie(this,"complete"),Ie(this,"abort"),ti(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ti(this,!0)),de.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?Mh(this):this.eb())};R.eb=function(){Mh(this)};function Mh(t){if(t.h&&typeof Uo<"u"&&(!t.C[1]||ct(t)!=4||t.aa()!=2)){if(t.v&&ct(t)==4)Wo(t.Ha,0,t);else if(Ie(t,"readystatechange"),ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Eh)[1]||null;if(!r&&U.self&&U.self.location){var i=U.self.location.protocol;r=i.substr(0,i.length-1)}s=!w_.test(r?r.toLowerCase():"")}n=s}if(n)Ie(t,"complete"),Ie(t,"success");else{t.m=6;try{var o=2<ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Lh(t)}}finally{ti(t)}}}}function ti(t,e){if(t.g){xh(t);const n=t.g,s=t.C[0]?_r:null;t.g=null,t.C=null,e||Ie(t,"ready");try{n.onreadystatechange=s}catch{}}}function xh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function ct(t){return t.g?t.g.readyState:0}R.aa=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),__(e)}};function Sc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $h:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uh(t){let e="";return Bo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ta(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Uh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fh(t){this.Ca=0,this.i=[],this.j=new Wr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=$n("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=$n("baseRetryDelayMs",5e3,t),this.ab=$n("retryDelaySeedMs",1e4,t),this.Za=$n("forwardChannelMaxRetries",2,t),this.ta=$n("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ch(t&&t.concurrentRequestLimit),this.Fa=new m_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=Fh.prototype;R.ma=8;R.G=1;function na(t){if(Vh(t),t.G==3){var e=t.U++,n=ht(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ps(t,n),e=new Ds(t,t.j,e,void 0),e.K=2,e.v=Zr(ht(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Rs(e)}Kh(t)}function ni(t){t.g&&(ra(t),t.g.cancel(),t.g=null)}function Vh(t){ni(t),t.u&&(U.clearTimeout(t.u),t.u=null),Sr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function si(t){Dh(t.h)||t.m||(t.m=!0,ch(t.Ja,t),t.C=0)}function b_(t,e){return Rh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=As(Ae(t.Ja,t,e),Hh(t,t.C)),t.C++,!0)}R.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ds(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=eh(i),th(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bh(this,r,e),n=ht(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Ps(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Uh(i)))+"&"+e:this.o&&ta(n,this.o,i)),Jo(this.h,r),this.Xa&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,io(r,n,null)):io(r,n,e),this.G=2}}else this.G==3&&(t?kc(this,t):this.i.length==0||Dh(this.h)||kc(this))};function kc(t,e){var n;e?n=e.m:n=t.U++;const s=ht(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),Ps(t,s),t.o&&t.s&&ta(s,t.o,t.s),n=new Ds(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Bh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Jo(t.h,n),io(n,s,e)}function Ps(t,e){t.ia&&Bo(t.ia,function(n,s){ae(e,s,n)}),t.l&&bh({},function(n,s){ae(e,s,n)})}function Bh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ae(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{y_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jh(t){t.g||t.u||(t.Z=1,ch(t.Ia,t),t.A=0)}function sa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=As(Ae(t.Ia,t),Hh(t,t.A)),t.A++,!0)}R.Ia=function(){if(this.u=null,qh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=As(Ae(this.cb,this),t)}};R.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Oe(10),ni(this),qh(this))};function ra(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function qh(t){t.g=new Ds(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ht(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),Ps(t,e),t.o&&t.s&&ta(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zr(ht(e)),n.s=null,n.P=!0,_h(n,t)}R.bb=function(){this.v!=null&&(this.v=null,ni(this),sa(this),Oe(19))};function Sr(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function zh(t,e){var n=null;if(t.g==e){Sr(t),ra(t),t.g=null;var s=2}else if(ao(t.h,e))n=e.D,Nh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Qr(),Ie(s,new gh(s,n)),si(t)}else jh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&b_(t,e)||s==2&&sa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:xt(t,5);break;case 4:xt(t,10);break;case 3:xt(t,6);break;default:xt(t,2)}}}function Hh(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function xt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ae(t.jb,t);n||(n=new Vt("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||br(n,"https"),Zr(n)),v_(n.toString(),s)}else Oe(2);t.G=0,t.l&&t.l.va(e),Kh(t),Vh(t)}R.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Kh(t){if(t.G=0,t.la=[],t.l){const e=Oh(t.h);(e.length!=0||t.i.length!=0)&&(gc(t.la,e),gc(t.la,t.i),t.h.i.length=0,Fo(t.i),t.i.length=0),t.l.ua()}}function Gh(t,e,n){var s=n instanceof Vt?ht(n):new Vt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Er(s,s.m);else{var r=U.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Vt(null,void 0);s&&br(i,s),e&&(i.g=e),r&&Er(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),Ps(t,s),s}function Wh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new de(new Ns({ib:!0})):new de(t.ra),e.L=t.H,e}function Qh(){}R=Qh.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Qa=function(){};function kr(){if(yn&&!(10<=Number(Vv)))throw Error("Environmental error: no available transport.")}kr.prototype.g=function(t,e){return new xe(t,e)};function xe(t,e){ye.call(this),this.g=new Fh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!wr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dn(this)}Se(xe,ye);xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Oe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gh(t,null,t.V),si(t)};xe.prototype.close=function(){na(this.g)};xe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ko(t),t=n);e.i.push(new p_(e.$a++,t)),e.G==3&&si(e)};xe.prototype.M=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,xe.X.M.call(this)};function Yh(t){Yo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Se(Yh,Yo);function Xh(){Xo.call(this),this.status=1}Se(Xh,Xo);function Dn(t){this.g=t}Se(Dn,Qh);Dn.prototype.xa=function(){Ie(this.g,"a")};Dn.prototype.wa=function(t){Ie(this.g,new Yh(t))};Dn.prototype.va=function(t){Ie(this.g,new Xh)};Dn.prototype.ua=function(){Ie(this.g,"b")};kr.prototype.createWebChannel=kr.prototype.g;xe.prototype.send=xe.prototype.u;xe.prototype.open=xe.prototype.m;xe.prototype.close=xe.prototype.close;Yr.NO_ERROR=0;Yr.TIMEOUT=8;Yr.HTTP_ERROR=6;mh.COMPLETE="complete";yh.EventType=Cs;Cs.OPEN="a";Cs.CLOSE="b";Cs.ERROR="c";Cs.MESSAGE="d";ye.prototype.listen=ye.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.Na;de.prototype.getLastErrorCode=de.prototype.Ea;de.prototype.getStatus=de.prototype.aa;de.prototype.getResponseJson=de.prototype.Ra;de.prototype.getResponseText=de.prototype.fa;de.prototype.send=de.prototype.da;var E_=function(){return new kr},S_=function(){return Qr()},Fi=Yr,k_=mh,A_=en,Ac={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},C_=Ns,Ws=yh,D_=de;const Cc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Qt=new xr("@firebase/firestore");function Dc(){return Qt.logLevel}function O(t,...e){if(Qt.logLevel<=te.DEBUG){const n=e.map(ia);Qt.debug(`Firestore (${Rn}): ${t}`,...n)}}function dt(t,...e){if(Qt.logLevel<=te.ERROR){const n=e.map(ia);Qt.error(`Firestore (${Rn}): ${t}`,...n)}}function Rc(t,...e){if(Qt.logLevel<=te.WARN){const n=e.map(ia);Qt.warn(`Firestore (${Rn}): ${t}`,...n)}}function ia(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+t;throw dt(e),new Error(e)}function re(t,e){t||j()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class O_{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new R_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Pe(e)}}class P_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class $_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new P_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new L_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=x_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function vn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new fe(0,0))}static max(){return new H(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&j(),s===void 0?s=e.length-n:s>e.length-n&&j(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends cs{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const U_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends cs{construct(e,n,s){return new ke(e,n,s)}static isValidIdentifier(e){return U_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(n)}static emptyPath(){return new ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ce.fromString(e))}static fromName(e){return new P(ce.fromString(e).popFirst(5))}static empty(){return new P(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ce(e.slice()))}}function F_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new fe(n+1,0):new fe(n,s));return new bt(r,P.empty(),e)}function V_(t){return new bt(t.readTime,t.key,-1)}class bt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new bt(H.min(),P.empty(),-1)}static max(){return new bt(H.max(),P.empty(),-1)}}function B_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==j_)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,s)=>{n(e)})}static reject(e){return new w((n,s)=>{s(e)})}static waitFor(e){return new w((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=w.resolve(!1);for(const s of e)n=n.next(r=>r?w.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new w((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new w((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
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
 */oa.at=-1;class ge{constructor(e,n){this.comparator=e,this.root=n||ve.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qs(this.root,e,this.comparator,!0)}}class Qs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:ve.RED,this.left=r!=null?r:ve.EMPTY,this.right=i!=null?i:ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ve(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ve.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Oc(this.data.getIterator())}getIteratorFrom(e){return new Oc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class Oc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Ze([])}unionWith(e){let n=new pe(ke.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ee(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ee(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const z_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(t){if(re(!!t),typeof t=="string"){let e=0;const n=z_.exec(t);if(re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(t.seconds),nanos:he(t.nanos)}}function he(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _n(t){return typeof t=="string"?Ee.fromBase64String(t):Ee.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function td(t){const e=t.mapValue.fields.__previous_value__;return ed(e)?td(e):e}function ls(t){const e=Et(t.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class us{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}function ri(t){return t==null}function Ar(t){return t===0&&1/t==-1/0}function K_(t){return typeof t=="number"&&Number.isInteger(t)&&!Ar(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ed(t)?4:G_(t)?9007199254740991:10:j()}function nt(t,e){if(t===e)return!0;const n=Yt(t);if(n!==Yt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Et(s.timestampValue),o=Et(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return _n(s.bytesValue).isEqual(_n(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return he(s.geoPointValue.latitude)===he(r.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return he(s.integerValue)===he(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=he(s.doubleValue),o=he(r.doubleValue);return i===o?Ar(i)===Ar(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return vn(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Nc(i)!==Nc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!nt(i[a],o[a])))return!1;return!0}(t,e);default:return j()}}function hs(t,e){return(t.values||[]).find(n=>nt(n,e))!==void 0}function wn(t,e){if(t===e)return 0;const n=Yt(t),s=Yt(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=he(r.integerValue||r.doubleValue),a=he(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pc(t.timestampValue,e.timestampValue);case 4:return Pc(ls(t),ls(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(r,i){const o=_n(r),a=_n(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ne(he(r.latitude),he(i.latitude));return o!==0?o:ne(he(r.longitude),he(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=wn(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ys.mapValue&&i===Ys.mapValue)return 0;if(r===Ys.mapValue)return 1;if(i===Ys.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=wn(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw j()}}function Pc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Et(t),s=Et(e),r=ne(n.seconds,s.seconds);return r!==0?r:ne(n.nanos,s.nanos)}function fn(t){return co(t)}function co(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Et(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_n(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=co(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${co(s.fields[a])}`;return i+"}"}(t.mapValue):j();var e,n}function lo(t){return!!t&&"integerValue"in t}function aa(t){return!!t&&"arrayValue"in t}function $c(t){return!!t&&"nullValue"in t}function Lc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rr(t){return!!t&&"mapValue"in t}function Kn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Kn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function G_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!rr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kn(n)}setAll(e){let n=ke.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Kn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];rr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Nn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Fe(Kn(this.value))}}function nd(t){const e=[];return Nn(t.fields,(n,s)=>{const r=new ke([n]);if(rr(s)){const i=nd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new _e(e,0,H.min(),H.min(),Fe.empty(),0)}static newFoundDocument(e,n,s){return new _e(e,1,n,H.min(),s,0)}static newNoDocument(e,n){return new _e(e,2,n,H.min(),Fe.empty(),0)}static newUnknownDocument(e,n){return new _e(e,3,n,H.min(),Fe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Mc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new W_(t,e,n,s,r,i,o)}function ca(t){const e=z(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+fn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ri(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fn(s)).join(",")),e.ht=n}return e.ht}function Q_(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${fn(s.value)}`;var s}).join(", ")}]`),ri(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>fn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>fn(n)).join(",")),`Target(${e})`}function la(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!sw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!nt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uc(t.startAt,e.startAt)&&Uc(t.endAt,e.endAt)}function uo(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class $e extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new Y_(e,n,s):n==="array-contains"?new Z_(e,s):n==="in"?new ew(e,s):n==="not-in"?new tw(e,s):n==="array-contains-any"?new nw(e,s):new $e(e,n,s)}static lt(e,n,s){return n==="in"?new X_(e,s):new J_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(wn(n,this.value)):n!==null&&Yt(this.value)===Yt(n)&&this.ft(wn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Y_ extends $e{constructor(e,n,s){super(e,n,s),this.key=P.fromName(s.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.ft(n)}}class X_ extends $e{constructor(e,n){super(e,"in",n),this.keys=sd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class J_ extends $e{constructor(e,n){super(e,"not-in",n),this.keys=sd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>P.fromName(s.referenceValue))}class Z_ extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return aa(n)&&hs(n.arrayValue,this.value)}}class ew extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hs(this.value.arrayValue,n)}}class tw extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hs(this.value.arrayValue,n)}}class nw extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!aa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>hs(this.value.arrayValue,s))}}class Cr{constructor(e,n){this.position=e,this.inclusive=n}}class Gn{constructor(e,n="asc"){this.field=e,this.dir=n}}function sw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=P.comparator(P.fromName(o.referenceValue),n.key):s=wn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Uc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function rw(t,e,n,s,r,i,o,a){return new ii(t,e,n,s,r,i,o,a)}function ua(t){return new ii(t)}function Fc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ow(t){for(const e of t.filters)if(e.dt())return e.field;return null}function aw(t){return t.collectionGroup!==null}function ds(t){const e=z(t);if(e._t===null){e._t=[];const n=ow(e),s=iw(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Gn(n)),e._t.push(new Gn(ke.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Gn(ke.keyField(),i))}}}return e._t}function ft(t){const e=z(t);if(!e.wt)if(e.limitType==="F")e.wt=Mc(e.path,e.collectionGroup,ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ds(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gn(i.field,o))}const s=e.endAt?new Cr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Cr(e.startAt.position,e.startAt.inclusive):null;e.wt=Mc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function ho(t,e,n){return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oi(t,e){return la(ft(t),ft(e))&&t.limitType===e.limitType}function rd(t){return`${ca(ft(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${Q_(ft(t))}; limitType=${t.limitType})`}function ha(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):P.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=xc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ds(n),s)||n.endAt&&!function(r,i,o){const a=xc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ds(n),s))}(t,e)}function cw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function id(t){return(e,n)=>{let s=!1;for(const r of ds(t)){const i=lw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function lw(t,e,n){const s=t.field.isKeyField()?P.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?wn(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(e)?"-0":e}}function ad(t){return{integerValue:""+t}}function uw(t,e){return K_(e)?ad(e):od(t,e)}/**
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
 */class ai{constructor(){this._=void 0}}function hw(t,e,n){return t instanceof Dr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof fs?ld(t,e):t instanceof ps?ud(t,e):function(s,r){const i=cd(s,r),o=Vc(i)+Vc(s.yt);return lo(i)&&lo(s.yt)?ad(o):od(s.It,o)}(t,e)}function dw(t,e,n){return t instanceof fs?ld(t,e):t instanceof ps?ud(t,e):n}function cd(t,e){return t instanceof Rr?lo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Dr extends ai{}class fs extends ai{constructor(e){super(),this.elements=e}}function ld(t,e){const n=hd(e);for(const s of t.elements)n.some(r=>nt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ps extends ai{constructor(e){super(),this.elements=e}}function ud(t,e){let n=hd(e);for(const s of t.elements)n=n.filter(r=>!nt(r,s));return{arrayValue:{values:n}}}class Rr extends ai{constructor(e,n){super(),this.It=e,this.yt=n}}function Vc(t){return he(t.integerValue||t.doubleValue)}function hd(t){return aa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof fs&&s instanceof fs||n instanceof ps&&s instanceof ps?vn(n.elements,s.elements,nt):n instanceof Rr&&s instanceof Rr?nt(n.yt,s.yt):n instanceof Dr&&s instanceof Dr}(t.transform,e.transform)}class pw{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ir(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ci{}function dd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new da(t.key,et.none()):new Ms(t.key,t.data,et.none());{const n=t.data,s=Fe.empty();let r=new pe(ke.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new tn(t.key,s,new Ze(r.toArray()),et.none())}}function gw(t,e,n){t instanceof Ms?function(s,r,i){const o=s.value.clone(),a=jc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof tn?function(s,r,i){if(!ir(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=jc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Wn(t,e,n,s){return t instanceof Ms?function(r,i,o,a){if(!ir(r.precondition,i))return o;const c=r.value.clone(),l=qc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof tn?function(r,i,o,a){if(!ir(r.precondition,i))return o;const c=qc(r.fieldTransforms,a,i),l=i.data;return l.setAll(fd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ir(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function mw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=cd(s.transform,r||null);i!=null&&(n===null&&(n=Fe.empty()),n.set(s.field,i))}return n||null}function Bc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vn(n,s,(r,i)=>fw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ms extends ci{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tn extends ci{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jc(t,e,n){const s=new Map;re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,dw(o,a,n[r]))}return s}function qc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,hw(i,o,e))}return s}class da extends ci{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yw extends ci{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Q;function _w(t){switch(t){default:return j();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function pd(t){if(t===void 0)return dt("GRPC error has no .code"),I.UNKNOWN;switch(t){case ue.OK:return I.OK;case ue.CANCELLED:return I.CANCELLED;case ue.UNKNOWN:return I.UNKNOWN;case ue.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ue.INTERNAL:return I.INTERNAL;case ue.UNAVAILABLE:return I.UNAVAILABLE;case ue.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ue.NOT_FOUND:return I.NOT_FOUND;case ue.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ue.ABORTED:return I.ABORTED;case ue.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ue.DATA_LOSS:return I.DATA_LOSS;default:return j()}}(Q=ue||(ue={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ww=new ge(P.comparator);function pt(){return ww}const gd=new ge(P.comparator);function Bn(...t){let e=gd;for(const n of t)e=e.insert(n.key,n);return e}function md(t){let e=gd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ut(){return Qn()}function yd(){return Qn()}function Qn(){return new On(t=>t.toString(),(t,e)=>t.isEqual(e))}const Iw=new ge(P.comparator),Tw=new pe(P.comparator);function G(...t){let e=Tw;for(const n of t)e=e.add(n);return e}const bw=new pe(ne);function vd(){return bw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,n)),new li(H.min(),s,vd(),pt(),G())}}class xs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xs(Ee.EMPTY_BYTE_STRING,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class _d{constructor(e,n){this.targetId=e,this.At=n}}class wd{constructor(e,n,s=Ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class zc{constructor(){this.Rt=0,this.bt=Kc(),this.Pt=Ee.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=G(),n=G(),s=G();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:j()}}),new xs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Kc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ew{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=pt(),this.qt=Hc(),this.Kt=new pe(ne)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(uo(i))if(s===0){const o=new P(i.path);this.jt(n,o,_e.newNoDocument(o,H.min()))}else re(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&uo(a.target)){const c=new P(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,_e.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=G();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new li(e,n,this.Kt,this.Ut,s);return this.Ut=pt(),this.qt=Hc(),this.Kt=new pe(ne),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new zc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new pe(ne),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new zc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Hc(){return new ge(P.comparator)}function Kc(){return new ge(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Aw{constructor(e,n){this.databaseId=e,this.gt=n}}function Nr(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Id(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Cw(t,e){return Nr(t,e.toTimestamp())}function lt(t){return re(!!t),H.fromTimestamp(function(e){const n=Et(e);return new fe(n.seconds,n.nanos)}(t))}function fa(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Td(t){const e=ce.fromString(t);return re(Sd(e)),e}function po(t,e){return fa(t.databaseId,e.path)}function Vi(t,e){const n=Td(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(bd(n))}function go(t,e){return fa(t.databaseId,e)}function Dw(t){const e=Td(t);return e.length===4?ce.emptyPath():bd(e)}function mo(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bd(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gc(t,e,n){return{name:po(t,e),fields:n.value.mapValue.fields}}function Rw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(re(l===void 0||typeof l=="string"),Ee.fromBase64String(l||"")):(re(l===void 0||l instanceof Uint8Array),Ee.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:pd(c.code);return new $(l,c.message||"")}(o);n=new wd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vi(t,s.document.name),i=lt(s.document.updateTime),o=new Fe({mapValue:{fields:s.document.fields}}),a=_e.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new or(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Vi(t,s.document),i=s.readTime?lt(s.readTime):H.min(),o=_e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new or([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Vi(t,s.document),i=s.removedTargetIds||[];n=new or([],i,r,null)}else{if(!("filter"in e))return j();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new vw(r),o=s.targetId;n=new _d(o,i)}}return n}function Nw(t,e){let n;if(e instanceof Ms)n={update:Gc(t,e.key,e.value)};else if(e instanceof da)n={delete:po(t,e.key)};else if(e instanceof tn)n={update:Gc(t,e.key,e.data),updateMask:Bw(e.fieldMask)};else{if(!(e instanceof yw))return j();n={verify:po(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Dr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ps)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rr)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw j()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Cw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:j()}(t,e.precondition)),n}function Ow(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?lt(s.updateTime):lt(r);return i.isEqual(H.min())&&(i=lt(r)),new pw(i,s.transformResults||[])}(n,e))):[]}function Pw(t,e){return{documents:[go(t,e.path)]}}function $w(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=go(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=go(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Lc(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NAN"}};if($c(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Lc(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NOT_NAN"}};if($c(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(h.field),op:Uw(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:on(u.field),direction:xw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ri(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Lw(t){let e=Dw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){re(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Ed(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Gn(un(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ri(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Cr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Cr(d,h)}(n.endAt)),rw(e,r,o,i,a,"F",c,l)}function Mw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ed(t){return t?t.unaryFilter!==void 0?[Vw(t)]:t.fieldFilter!==void 0?[Fw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ed(e)).reduce((e,n)=>e.concat(n)):j():[]}function xw(t){return Sw[t]}function Uw(t){return kw[t]}function on(t){return{fieldPath:t.canonicalString()}}function un(t){return ke.fromServerFormat(t.fieldPath)}function Fw(t){return $e.create(un(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function Vw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=un(t.unaryFilter.field);return $e.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=un(t.unaryFilter.field);return $e.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=un(t.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=un(t.unaryFilter.field);return $e.create(r,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function Bw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&gw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=yd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=dd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,(n,s)=>Bc(n,s))&&vn(this.baseMutations,e.baseMutations,(n,s)=>Bc(n,s))}}class pa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){re(e.mutations.length===s.length);let r=Iw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new pa(e,n,s,r)}}/**
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
 */class qw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jt{constructor(e,n,s,r,i=H.min(),o=H.min(),a=Ee.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.re=e}}function Hw(t){const e=Lw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.Ye=new Gw}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(bt.min())}updateCollectionGroup(e,n,s){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Gw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new pe(ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new pe(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ww{constructor(){this.changes=new On(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?w.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Wn(s.mutation,r,Ze.empty(),fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=Ut();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Bn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ut();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=pt();const o=Qn(),a=Qn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof tn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Wn(u.mutation,l,u.mutation.getFieldMask(),fe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Qw(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Qn();let r=new ge((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ze.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=yd();u.forEach(d=>{if(!i.has(d)){const g=dd(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):w.resolve(Ut());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:md(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(s=>{let r=Bn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Bn();return this.indexManager.getCollectionParents(e,r).next(o=>w.forEach(o,a=>{const c=function(l,u){return new ii(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,_e.newInvalidDocument(l)))});let o=Bn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Wn(l.mutation,c,Ze.empty(),fe.now()),ha(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(_e.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:lt(s.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Hw(s.bundledQuery),readTime:lt(s.readTime)}}(n)),w.resolve()}}/**
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
 */class Jw{constructor(){this.overlays=new ge(P.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ut();return w.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),w.resolve()}getOverlaysForCollection(e,n,s){const r=Ut(),i=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return w.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ut(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ut(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return w.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new qw(n,s));let i=this.es.get(n);i===void 0&&(i=G(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.ns=new pe(me.ss),this.rs=new pe(me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new me(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new me(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new P(new ce([])),s=new me(n,e),r=new me(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new P(new ce([])),s=new me(n,e),r=new me(n,e+1);let i=G();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new me(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class me{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return P.comparator(e.key,n.key)||ne(e._s,n._s)}static os(e,n){return ne(e._s,n._s)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new pe(me.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new me(n,0),r=new me(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new pe(ne);return n.forEach(r=>{const i=new me(r,0),o=new me(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),w.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;P.isDocumentKey(i)||(i=i.child(""));const o=new me(new P(i),0);let a=new pe(ne);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return w.forEach(n.mutations,r=>{const i=new me(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new me(n,0),r=this.gs.firstAfterOrEqual(s);return w.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.Es=e,this.docs=new ge(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return w.resolve(s?s.document.mutableCopy():_e.newInvalidDocument(n))}getEntries(e,n){let s=pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():_e.newInvalidDocument(r))}),w.resolve(s)}getAllFromCollection(e,n,s){let r=pt();const i=new P(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||B_(V_(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,s,r){j()}As(e,n){return w.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new t0(this)}getSize(e){return w.resolve(this.size)}}class t0 extends Ww{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.persistence=e,this.Rs=new On(n=>ca(n),la),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ga,this.targetCount=0,this.vs=In.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new In(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),w.waitFor(i).next(()=>r)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return w.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),w.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return w.resolve(s)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new oa(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new n0(this),this.indexManager=new Kw,this.remoteDocumentCache=function(s){return new e0(s)}(s=>this.referenceDelegate.xs(s)),this.It=new zw(n),this.Ns=new Xw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Zw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new r0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return w.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class r0 extends q_{constructor(e){super(),this.currentSequenceNumber=e}}class ma{constructor(e){this.persistence=e,this.Fs=new ga,this.$s=null}static Bs(e){return new ma(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),w.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,s=>{const r=P.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,H.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ya(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(Fc(n))return w.resolve(null);let s=ft(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ho(n,null,"F"),s=ft(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,ho(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return Fc(n)||r.isEqual(H.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Dc()<=te.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fo(n)),this.Bi(e,o,n,F_(r,-1)))})}Fi(e,n){let s=new pe(id(e));return n.forEach((r,i)=>{ha(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Dc()<=te.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",fo(n)),this.Ni.getDocumentsMatchingQuery(e,n,bt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new ge(ne),this.qi=new On(i=>ca(i),la),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function a0(t,e,n,s){return new o0(t,e,n,s)}async function kd(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function c0(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=w.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(p=>{const y=c.docVersions.get(g);re(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ad(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function l0(t,e){const n=z(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ee.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(p,y,_){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=pt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(u0(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(H.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function u0(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=pt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function h0(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function d0(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,w.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new jt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function yo(t,e,n){const s=z(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ls(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Wc(t,e,n){const s=z(t);let r=H.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=z(a),h=u.qi.get(l);return h!==void 0?w.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,ft(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:H.min(),n?i:G())).next(a=>(f0(s,cw(e),a),{documents:a,Hi:i})))}function f0(t,e,n){let s=H.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Qc{constructor(){this.activeTargetIds=vd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p0{constructor(){this.Lr=new Qc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);O("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw Rc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=m0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new D_;a.listenOnce(k_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fi.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Fi.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(p)>=0?p:I.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(I.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=E_(),o=S_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new C_({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");O("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new y0({Hr:p=>{h?O("Connection","Not sending because WebChannel is closed:",p):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),g=(p,y,_)=>{p.listen(y,E=>{try{_(E)}catch(m){setTimeout(()=>{throw m},0)}})};return g(l,Ws.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),g(l,Ws.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),g(l,Ws.EventType.ERROR,p=>{h||(h=!0,Rc("Connection","WebChannel transport errored:",p),d.io(new $(I.UNAVAILABLE,"The operation could not be completed")))}),g(l,Ws.EventType.MESSAGE,p=>{var y;if(!h){const _=p.data[0];re(!!_);const E=_,m=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(m){O("Connection","WebChannel received error:",m);const k=m.status;let K=function(W){const ie=ue[W];if(ie!==void 0)return pd(ie)}(k),M=m.message;K===void 0&&(K=I.INTERNAL,M="Unknown error status: "+k+" with message "+m.message),h=!0,d.io(new $(K,M)),l.close()}else O("Connection","WebChannel received:",_),d.ro(_)}}),g(o,A_.STAT_EVENT,p=>{p.stat===Ac.PROXY?O("Connection","Detected buffering proxy"):p.stat===Ac.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Bi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return new Aw(t,!0)}class Cd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Cd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new $(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _0 extends Dd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Rw(this.It,e),s=function(r){if(!("targetChange"in r))return H.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?H.min():i.readTime?lt(i.readTime):H.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=mo(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=uo(a)?{documents:Pw(r,a)}:{query:$w(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Id(r,i.resumeToken):i.snapshotVersion.compareTo(H.min())>0&&(o.readTime=Nr(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Mw(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=mo(this.It),n.removeTarget=e,this.Bo(n)}}class w0 extends Dd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Ow(e.writeResults,e.commitTime),s=lt(e.commitTime);return this.listener.Zo(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=mo(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Nw(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(I.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class T0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(dt(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{nn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=z(a);c._u.add(4),await Us(c),c.gu.set("Unknown"),c._u.delete(4),await hi(c)}(this))})}),this.gu=new T0(s,r)}}async function hi(t){if(nn(t))for(const e of t.wu)await e(!0)}async function Us(t){for(const e of t.wu)await e(!1)}function Rd(t,e){const n=z(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wa(n)?_a(n):Pn(n).ko()&&va(n,e))}function Nd(t,e){const n=z(t),s=Pn(n);n.du.delete(e),s.ko()&&Od(n,e),n.du.size===0&&(s.ko()?s.Fo():nn(n)&&n.gu.set("Unknown"))}function va(t,e){t.yu.Ot(e.targetId),Pn(t).zo(e)}function Od(t,e){t.yu.Ot(e),Pn(t).Ho(e)}function _a(t){t.yu=new Ew({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Pn(t).start(),t.gu.uu()}function wa(t){return nn(t)&&!Pn(t).No()&&t.du.size>0}function nn(t){return z(t)._u.size===0}function Pd(t){t.yu=void 0}async function E0(t){t.du.forEach((e,n)=>{va(t,e)})}async function S0(t,e){Pd(t),wa(t)?(t.gu.hu(e),_a(t)):t.gu.set("Unknown")}async function k0(t,e,n){if(t.gu.set("Online"),e instanceof wd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Or(t,s)}else if(e instanceof or?t.yu.Gt(e):e instanceof _d?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(H.min()))try{const s=await Ad(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ee.EMPTY_BYTE_STRING,c.snapshotVersion)),Od(r,a);const l=new jt(c.target,a,1,c.sequenceNumber);va(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Or(t,s)}}async function Or(t,e,n){if(!Ls(e))throw e;t._u.add(1),await Us(t),t.gu.set("Offline"),n||(n=()=>Ad(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await hi(t)})}function $d(t,e){return e().catch(n=>Or(t,n,e))}async function di(t){const e=z(t),n=St(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;A0(e);)try{const r=await h0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,C0(e,r)}catch(r){await Or(e,r)}Ld(e)&&Md(e)}function A0(t){return nn(t)&&t.fu.length<10}function C0(t,e){t.fu.push(e);const n=St(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ld(t){return nn(t)&&!St(t).No()&&t.fu.length>0}function Md(t){St(t).start()}async function D0(t){St(t).eu()}async function R0(t){const e=St(t);for(const n of t.fu)e.Xo(n.mutations)}async function N0(t,e,n){const s=t.fu.shift(),r=pa.from(s,e,n);await $d(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await di(t)}async function O0(t,e){e&&St(t).Yo&&await async function(n,s){if(r=s.code,_w(r)&&r!==I.ABORTED){const i=n.fu.shift();St(n).Oo(),await $d(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await di(n)}var r}(t,e),Ld(t)&&Md(t)}async function Xc(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=nn(n);n._u.add(3),await Us(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await hi(n)}async function P0(t,e){const n=z(t);e?(n._u.delete(2),await hi(n)):e||(n._u.add(2),await Us(n),n.gu.set("Unknown"))}function Pn(t){return t.pu||(t.pu=function(e,n,s){const r=z(e);return r.su(),new _0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:E0.bind(null,t),Zr:S0.bind(null,t),Wo:k0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),wa(t)?_a(t):t.gu.set("Unknown")):(await t.pu.stop(),Pd(t))})),t.pu}function St(t){return t.Iu||(t.Iu=function(e,n,s){const r=z(e);return r.su(),new w0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:D0.bind(null,t),Zr:O0.bind(null,t),tu:R0.bind(null,t),Zo:N0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await di(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ia(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(t,e){if(dt("AsyncQueue",`${e}: ${t}`),Ls(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||P.comparator(n.key,s.key):(n,s)=>P.comparator(n.key,s.key),this.keyedMap=Bn(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Jc{constructor(){this.Tu=new ge(P.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Tn{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Tn(e,n,pn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.Au=void 0,this.listeners=[]}}class L0{constructor(){this.queries=new On(e=>rd(e),oi),this.onlineState="Unknown",this.Ru=new Set}}async function M0(t,e){const n=z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new $0),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ta(o,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&ba(n)}async function x0(t,e){const n=z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function U0(t,e){const n=z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&ba(n)}function F0(t,e,n){const s=z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ba(t){t.Ru.forEach(e=>{e.next()})}class V0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Tn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Tn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.key=e}}class Ud{constructor(e){this.key=e}}class B0{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=G(),this.mutatedKeys=G(),this.Ku=id(e),this.Gu=new pn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new Jc,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=ha(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;d&&g?d.data.isEqual(g.data)?p!==y&&(s.track({type:3,doc:g}),_=!0):this.zu(d,g)||(s.track({type:2,doc:g}),_=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),_=!0):d&&!g&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(g?(o=o.add(g),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return g(h)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Tn(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Jc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=G(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new Ud(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new xd(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=G();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Tn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class j0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class q0{constructor(e){this.key=e,this.ec=!1}}class z0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new On(a=>rd(a),oi),this.ic=new Map,this.rc=new Set,this.oc=new ge(P.comparator),this.uc=new Map,this.cc=new ga,this.ac={},this.hc=new Map,this.lc=In.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function H0(t,e){const n=tI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await d0(n.localStore,ft(e));n.isPrimaryClient&&Rd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await K0(n,e,s,a==="current")}return r}async function K0(t,e,n,s){t.dc=(u,h,d)=>async function(g,p,y,_){let E=p.view.ju(y);E.$i&&(E=await Wc(g.localStore,p.query,!1).then(({documents:K})=>p.view.ju(K,E)));const m=_&&_.targetChanges.get(p.targetId),k=p.view.applyChanges(E,g.isPrimaryClient,m);return el(g,p.targetId,k.Yu),k.snapshot}(t,u,h,d);const r=await Wc(t.localStore,e,!0),i=new B0(e,r.Hi),o=i.ju(r.documents),a=xs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);el(t,n,c.Yu);const l=new j0(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function G0(t,e){const n=z(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!oi(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await yo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nd(n.remoteStore,s.targetId),vo(n,s.targetId)}).catch($s)):(vo(n,s.targetId),await yo(n.localStore,s.targetId,!0))}async function W0(t,e,n){const s=nI(t);try{const r=await function(i,o){const a=z(i),c=fe.now(),l=o.reduce((d,g)=>d.add(g.key),G());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=pt(),p=G();return a.Gi.getEntries(d,l).next(y=>{g=y,g.forEach((_,E)=>{E.isValidDocument()||(p=p.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{u=y;const _=[];for(const E of o){const m=mw(E,u.get(E.key).overlayedDocument);m!=null&&_.push(new tn(E.key,m,nd(m.value.mapValue),et.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:md(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new ge(ne)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Fs(s,r.changes),await di(s.remoteStore)}catch(r){const i=Ta(r,"Failed to persist write");n.reject(i)}}async function Fd(t,e){const n=z(t);try{const s=await l0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?re(o.ec):r.removedDocuments.size>0&&(re(o.ec),o.ec=!1))}),await Fs(n,s,e)}catch(s){await $s(s)}}function Zc(t,e,n){const s=z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&ba(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Q0(t,e,n){const s=z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new ge(P.comparator);o=o.insert(i,_e.newNoDocument(i,H.min()));const a=G().add(i),c=new li(H.min(),new Map,new pe(ne),o,a);await Fd(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Ea(s)}else await yo(s.localStore,e,!1).then(()=>vo(s,e,n)).catch($s)}async function Y0(t,e){const n=z(t),s=e.batch.batchId;try{const r=await c0(n.localStore,e);Bd(n,s,null),Vd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fs(n,r)}catch(r){await $s(r)}}async function X0(t,e,n){const s=z(t);try{const r=await function(i,o){const a=z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(re(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Bd(s,e,n),Vd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fs(s,r)}catch(r){await $s(r)}}function Vd(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Bd(t,e,n){const s=z(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||jd(t,s)})}function jd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Nd(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ea(t))}function el(t,e,n){for(const s of n)s instanceof xd?(t.cc.addReference(s.key,e),J0(t,s)):s instanceof Ud?(O("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||jd(t,s.key)):j()}function J0(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ea(t))}function Ea(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new P(ce.fromString(e)),s=t.lc.next();t.uc.set(s,new q0(n)),t.oc=t.oc.insert(n,s),Rd(t.remoteStore,new jt(ft(ua(n.path)),s,2,oa.at))}}async function Fs(t,e,n){const s=z(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=ya.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(c,h=>w.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>w.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ls(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);l.Ui=l.Ui.insert(h,p)}}}(s.localStore,i))}async function Z0(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await kd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new $(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fs(n,s.ji)}}function eI(t,e){const n=z(t),s=n.uc.get(e);if(s&&s.ec)return G().add(s.key);{let r=G();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function tI(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q0.bind(null,e),e.nc.Wo=U0.bind(null,e.eventManager),e.nc._c=F0.bind(null,e.eventManager),e}function nI(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X0.bind(null,e),e}class sI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ui(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return a0(this.persistence,new i0,e.initialUser,this.It)}gc(e){return new s0(ma.Bs,this.It)}mc(e){return new p0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Z0.bind(null,this.syncEngine),await P0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new L0}createDatastore(e){const n=ui(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new v0(r));var r;return function(i,o,a,c){return new I0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Zc(this.syncEngine,a,0),o=Yc.C()?new Yc:new g0,new b0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new z0(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Us(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Pe.UNAUTHENTICATED,this.clientId=Jh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ta(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function aI(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await kd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function cI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lI(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xc(e.remoteStore,i)),t.onlineComponents=e}async function lI(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await aI(t,new sI)),t.offlineComponents}async function qd(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await cI(t,new rI)),t.onlineComponents}function uI(t){return qd(t).then(e=>e.syncEngine)}async function tl(t){const e=await qd(t),n=e.eventManager;return n.onListen=H0.bind(null,e.syncEngine),n.onUnlisten=G0.bind(null,e.syncEngine),n}const nl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hI(t,e,n,s){if(e===!0&&s===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sl(t){if(!P.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rl(t){if(P.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sa(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new N_;switch(n.type){case"gapi":const s=n.client;return new $_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nl.get(e);n&&(O("ComponentProvider","Removing Datastore"),nl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class fi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class It extends fi{constructor(e,n,s){super(e,n,ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new P(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function dI(t,e,...n){if(t=Re(t),zd("collection","path",e),t instanceof ka){const s=ce.fromString(e,...n);return rl(s),new It(t,null,s)}{if(!(t instanceof Me||t instanceof It))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return rl(s),new It(t.firestore,null,s)}}function Xs(t,e,...n){if(t=Re(t),arguments.length===1&&(e=Jh.R()),zd("doc","path",e),t instanceof ka){const s=ce.fromString(e,...n);return sl(s),new Me(t,null,new P(s))}{if(!(t instanceof Me||t instanceof It))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return sl(s),new Me(t.firestore,t instanceof It?t.converter:null,new P(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Cd(this,"async_queue_retry"),this.jc=()=>{const n=Bi();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Bi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Bi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Bt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Ls(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Ia.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&j()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ol(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class gs extends ka{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new fI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kd(this),this._firestoreClient.terminate()}}function pI(t,e){const n=typeof t=="object"?t:bo(),s=typeof t=="string"?t:e||"(default)";return Zt(n,"firestore").getImmediate({identifier:s})}function Hd(t){return t._firestoreClient||Kd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new H_(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new oI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Ee.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ca{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=/^__.*__$/;class mI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ms(e,this.data,n,this.fieldTransforms)}}function Wd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Da{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Pr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(Wd(this.na)&&gI.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class yI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ui(e)}fa(e,n,s,r=!1){return new Da({na:e,methodName:n,la:s,path:ke.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function vI(t){const e=t._freezeSettings(),n=ui(t._databaseId);return new yI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _I(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);Jd("Data must be an object, but it was:",o,s);const a=Yd(s,o);let c,l;if(i.merge)c=new Ze(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=wI(e,h,n);if(!o.contains(d))throw new $(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);TI(u,d)||u.push(d)}c=new Ze(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mI(new Fe(a),c,l)}function Qd(t,e){if(Xd(t=Re(t)))return Jd("Unsupported field value:",e,t),Yd(t,e);if(t instanceof Gd)return function(n,s){if(!Wd(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Qd(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uw(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=fe.fromDate(n);return{timestampValue:Nr(s.It,r)}}if(n instanceof fe){const r=new fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nr(s.It,r)}}if(n instanceof Ca)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bn)return{bytesValue:Id(s.It,n._byteString)};if(n instanceof Me){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Sa(n)}`)}(t,e)}function Yd(t,e){const n={};return Zh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(t,(s,r)=>{const i=Qd(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Xd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Ca||t instanceof bn||t instanceof Me||t instanceof Gd)}function Jd(t,e,n){if(!Xd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Sa(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function wI(t,e,n){if((e=Re(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return Zd(t,e);throw Pr("Field path arguments must be of type string or ",t,!1,void 0,n)}const II=new RegExp("[~\\*/\\[\\]]");function Zd(t,e,n){if(e.search(II)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function TI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bI extends ef{data(){return super.data()}}function tf(t,e){return typeof e=="string"?Zd(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nf extends ef{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ar extends nf{data(e={}){return super.data(e)}}class EI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new jn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ar(this._firestore,this._userDataWriter,s.key,s,new jn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new jn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new jn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:SI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function AI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{convertValue(e,n="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const s={};return Nn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ca(he(e.latitude),he(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=td(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const n=Et(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ce.fromString(e);re(Sd(s));const r=new us(s.get(1),s.get(3)),i=new P(s.popFirst(5));return r.isEqual(n)||dt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class sf extends CI{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function al(t,e,n){t=gn(t,Me);const s=gn(t.firestore,gs),r=DI(t.converter,e,n);return rf(s,[_I(vI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,et.none())])}function RI(t){return rf(gn(t.firestore,gs),[new da(t._key,et.none())])}function cl(t,...e){var n,s,r;t=Re(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ol(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ol(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Me)l=gn(t.firestore,gs),u=ua(t._key.path),c={next:h=>{e[o]&&e[o](NI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gn(t,fi);l=gn(h.firestore,gs),u=h._query;const d=new sf(l);c={next:g=>{e[o]&&e[o](new EI(l,d,h,g))},error:e[o+1],complete:e[o+2]},kI(t._query)}return function(h,d,g,p){const y=new iI(p),_=new V0(d,y,g);return h.asyncQueue.enqueueAndForget(async()=>M0(await tl(h),_)),()=>{y.Rc(),h.asyncQueue.enqueueAndForget(async()=>x0(await tl(h),_))}}(Hd(l),u,a,c)}function rf(t,e){return function(n,s){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>W0(await uI(n),s,r)),r.promise}(Hd(t),e)}function NI(t,e,n){const s=n.docs.get(e._key),r=new sf(t);return new nf(t,r,e._key,s,new jn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rn=n})(ys),tt(new Ke("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new gs(new O_(n.getProvider("auth-internal")),new M_(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Be(Cc,"3.5.0",t),Be(Cc,"3.5.0","esm2017")})();const OI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},of=sg(OI),Nt=cy(of);Xg(Nt,yu);const Ln=pI(of);Tv();const PI=new rt,$I=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=kn(t);return pu(Nt,s=>{n(s?{loggedIn:!0,user:s}:t)}),{subscribe:e,async signUpWithEmail(s,r){return Qg(Nt,s,r)},async signInWithEmail(s,r){return Yg(Nt,s,r)},async signInWithGoogle(){return Im(Nt,PI)},async signOut(){return Jg(Nt)}}},LI=$I(),ll="/assets/default-user.a40c52dd.png";function MI(t){let e;return{c(){e=b("i"),f(e,"class","codicon codicon-account")},m(n,s){D(n,e,s)},p:A,d(n){n&&C(e)}}}function xI(t){let e,n;return{c(){var s;e=b("img"),f(e,"class","profile-picture svelte-1vc9wq2"),hr(e.src,n=(s=t[0].user.photoURL)!=null?s:ll)||f(e,"src",n),f(e,"alt","Account")},m(s,r){D(s,e,r)},p(s,r){var i;r&1&&!hr(e.src,n=(i=s[0].user.photoURL)!=null?i:ll)&&f(e,"src",n)},d(s){s&&C(e)}}}function UI(t){let e,n,s,r,i,o,a,c,l,u,h,d,g,p,y,_,E,m;o=new jf({});function k(W,ie){return W[0].loggedIn?xI:MI}let K=k(t),M=K(t);return{c(){e=b("header"),n=b("div"),s=b("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=F(),i=b("a"),q(o.$$.fragment),a=F(),c=b("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=F(),u=b("nav"),h=b("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=F(),g=b("button"),g.innerHTML='<i class="codicon codicon-settings-gear"></i>',p=F(),y=b("button"),M.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1vc9wq2"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1vc9wq2"),f(c,"title","Documentation"),f(c,"class","svelte-1vc9wq2"),f(n,"class","svelte-1vc9wq2"),f(h,"title","Search"),f(h,"class","svelte-1vc9wq2"),f(g,"title","Settings"),f(g,"class","svelte-1vc9wq2"),f(y,"title","Account"),f(y,"class","svelte-1vc9wq2"),f(u,"class","svelte-1vc9wq2"),f(e,"role","navigation"),f(e,"class","svelte-1vc9wq2")},m(W,ie){D(W,e,ie),v(e,n),v(n,s),v(n,r),v(n,i),V(o,i,null),v(n,a),v(n,c),v(e,l),v(e,u),v(u,h),v(u,d),v(u,g),v(u,p),v(u,y),M.m(y,null),_=!0,E||(m=[X(c,"click",t[1]),X(h,"click",t[2]),X(g,"click",t[3]),X(y,"click",t[4])],E=!0)},p(W,[ie]){K===(K=k(W))&&M?M.p(W,ie):(M.d(1),M=K(W),M&&(M.c(),M.m(y,null)))},i(W){_||(T(o.$$.fragment,W),_=!0)},o(W){S(o.$$.fragment,W),_=!1},d(W){W&&C(e),B(o),M.d(),E=!1,Ue(m)}}}function FI(t,e,n){let s;return Ye(t,LI,c=>n(0,s=c)),[s,()=>Pt.navigateTo("help"),()=>Pt.navigateTo("search"),()=>Pt.navigateTo("settings"),()=>Pt.navigateTo("account")]}class VI extends Z{constructor(e){super(),J(this,e,FI,UI,Y,{})}}const BI="modulepreload",jI=function(t){return"/"+t},ul={},pi=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=jI(r),r in ul)return;ul[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":BI,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};let Ra="heroku";const af=Object.freeze({heroku:"https://r34-json.herokuapp.com/v2",adaptable:"https://rule34-json-api.adaptable.app/v2",render:"https://json-api.onrender.com/v2",railway:"https://api-service-production-122b.up.railway.app/v2"}),TE=Object.freeze({heroku:"Heroku",adaptable:"Adaptable",render:"Render",railway:"Railway"}),cf=()=>af[Ra],bE=()=>Ra,EE=t=>{if(!(t in af))throw new TypeError(`Attempted to set unexpected backend: ${t}`);Ra=t},Vs=t=>typeof t=="string"&&t!=="",gi=t=>typeof t=="number"&&t>=0;class mi{constructor(e,n,s,r,i,o,a,c,l,u,h,d,g,p,y,_,E,m,k,K,M,W,ie,st,le,L){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=g,this.preview_width=p,this.preview_height=y,this.rating=_,this.sample_height=E,this.sample_width=m,this.score=k,this.source=K,this.status=M,this.tags=W,this.width=ie,this.comments_url=st,this.owner_url=le,this.type=L,Object.freeze(this)}static from(e){return new mi(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const qI=t=>Array.isArray(t)&&t.every(e=>e instanceof mi);class zI{constructor(e,n){if(!gi(e))throw new TypeError("Invalid count passed to Page constructor");if(!qI(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const HI=Object.freeze(["id","score"]),KI=t=>HI.includes(t),cr=Object.freeze(["+","-","~"]),yi=t=>cr.includes(t),lf=t=>{if(!yi(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(cr.indexOf(t)+1)%cr.length;return cr[n]},GI=Object.freeze({"+":"","-":"-","~":""}),WI=t=>{if(!yi(t))throw TypeError("Invalid modifier passed to serializeModifier");return GI[t]};class vi{constructor(e,n){if(!yi(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Vs(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${WI(this.modifier)}${encodeURIComponent(this.name)}`}}const uf=(t,e)=>{if(!hf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!QI(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},hf=t=>{try{return new URL(t),!0}catch{return!1}},QI=t=>t===null||t instanceof AbortController,df=20;let YI=null;const XI=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},JI=async(t,e,n,s)=>{ZI(t,e,n,s);const r=rT(e,n,s),i=await uf(iT(t,r),YI);XI(i);const o=await i.json();return oT(o),new zI(o.count,o.posts.map(a=>mi.from(a)))},ZI=(t,e,n,s)=>{if(!eT(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!tT(e))throw new TypeError("Invalid array of tags passed to getPage");if(!KI(n))throw new TypeError("Invalid sort property passed to getPage");if(!nT(s))throw new TypeError("Invalid minimum score passed to getPage")},eT=t=>typeof t=="number"&&t>=0,tT=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof vi)),nT=t=>typeof t=="number"&&t>=0,sT=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},rT=(t,e,n)=>{const s=sT(t),r=[...hl([...s["+"],...s["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return s["~"].length===0?r:`${r}+( ${hl(s["~"]).join(" ~ ")} )`},hl=t=>t.map(e=>e.serialize()),iT=(t,e)=>{const n=`${cf()}/posts?limit=${df}&pid=${t}`;return e===""?n:`${n}&tags=${e}`},oT=t=>{if(typeof t.count!="number"||!Array.isArray(t.posts))throw new Error("Unexpected response received in getPage")},aT=Object.freeze(["ambiguous","artist","character","copyright","general","metadata","rating","source","supertag"]),ff=t=>aT.includes(t);class $r{constructor(e,n,s,r){if(!yi(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Vs(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!gi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!ff(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}toSearchableTag(){return new vi(this.modifier,this.name)}}class pf{constructor(e,n,s){if(!Vs(e))throw TypeError("Invalid name passed to Tag constructor");if(!gi(n))throw TypeError("Invalid count passed to Tag constructor");if(!ff(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}toActiveTag(e){return new $r(e,this.name,this.count,this.type)}}let cT=null;const lT=async(t,e)=>{const n=e?`*${t}*`:t,s=await uf(`${cf()}/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,cT);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length==0)throw new Error("No tags found");return r.map(i=>new pf(i.name,i.count,uT(i.types)))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},uT=t=>{for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"};class gf{constructor(e,n,s){if(!Vs(e))throw new TypeError("Invalid name passed to Supertag");if(!hT(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const hT=t=>Array.isArray(t)&&t.every(e=>e instanceof vi),dT=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=kn(t);let s,r=null,i=null;return pu(Nt,async o=>{s=o,o?r=cl(Xs(Ln,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=AI(dI(Ln,`users/${o.uid}/supertags`));i==null||i(),i=cl(l,u=>{const h=[];u.forEach(d=>{const g=d.data();h.push(new gf(d.id,g.description,Object.entries(g.tags).map(p=>new vi(p[1],p[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return al(Xs(Ln,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return RI(Xs(Ln,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return al(Xs(Ln,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},_o=dT();function fT(t){let e,n,s,r;return{c(){e=b("button"),n=we(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){D(i,e,o),v(e,n),s||(r=X(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&qe(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:A,o:A,d(i){i&&C(e),s=!1,r()}}}function pT(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=He(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class mf extends Z{constructor(e){super(),J(this,e,pT,fT,Y,{text:0,title:1,disabled:2})}}function _i(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}const gT=Intl.NumberFormat("en",{notation:"compact"}),kt=t=>{if(!gi(t))throw new TypeError("Invalid value passed to formatCount");return gT.format(t)};function En(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const dl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function mT(t){let e,n;return{c(){e=b("i"),f(e,"class",n=`codicon codicon-${dl[t[0]]}`)},m(s,r){D(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${dl[s[0]]}`)&&f(e,"class",n)},i:A,o:A,d(s){s&&C(e)}}}function yT(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class yf extends Z{constructor(e){super(),J(this,e,yT,mT,Y,{type:0})}}const fl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),pl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),gl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function vT(t){let e,n,s,r=En(t[0].name)+"",i,o,a=kt(t[0].count)+"",c,l,u,h,d,g;return n=new yf({props:{type:t[0].type}}),{c(){e=b("li"),q(n.$$.fragment),s=F(),i=we(r),o=we(`
  (`),c=we(a),l=we(")"),f(e,"class",u=Tt(gl[t[0].modifier])+" svelte-u5uy3w"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Ve(e,"no-icon",t[0].type==="general")},m(p,y){D(p,e,y),V(n,e,null),v(e,s),v(e,i),v(e,o),v(e,c),v(e,l),h=!0,d||(g=[X(e,"click",t[2]),X(e,"contextmenu",Lr(t[3]))],d=!0)},p(p,[y]){const _={};y&1&&(_.type=p[0].type),n.$set(_),(!h||y&1)&&r!==(r=En(p[0].name)+"")&&qe(i,r),(!h||y&1)&&a!==(a=kt(p[0].count)+"")&&qe(c,a),(!h||y&1&&u!==(u=Tt(gl[p[0].modifier])+" svelte-u5uy3w"))&&f(e,"class",u),(!h||y&1)&&Ve(e,"no-icon",p[0].type==="general")},i(p){h||(T(n.$$.fragment,p),h=!0)},o(p){S(n.$$.fragment,p),h=!1},d(p){p&&C(e),B(n),d=!1,Ue(g)}}}function _T(t,e,n){let{tag:s}=e;const r=He(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class vf extends Z{constructor(e){super(),J(this,e,_T,vT,Y,{tag:0})}}function ml(t,e,n){const s=t.slice();return s[9]=e[n],s}function yl(t){let e,n;return e=new vf({props:{tag:t[9]}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function wT(t){let e,n,s,r,i,o,a,c,l,u,h,d,g,p,y,_,E,m,k,K,M,W,ie,st,le=t[2],L=[];for(let ee=0;ee<le.length;ee+=1)L[ee]=yl(ml(t,le,ee));const wi=ee=>S(L[ee],1,1,()=>{L[ee]=null});return M=new mf({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),M.$on("click",t[8]),{c(){e=b("dialog"),n=b("h3"),n.textContent="Create Supertag",s=F(),r=b("i"),i=F(),o=b("div"),a=b("label"),a.textContent="Name",c=F(),l=b("input"),u=F(),h=b("div"),d=b("label"),d.textContent="Description",g=F(),p=b("textarea"),y=F(),_=b("div"),E=b("span"),E.textContent="Tags",m=F(),k=b("ol");for(let ee=0;ee<L.length;ee+=1)L[ee].c();K=F(),q(M.$$.fragment),f(r,"tabindex","0"),f(r,"class",Tt("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(p,"type","text"),f(p,"placeholder","Short description"),f(p,"id","supertag-description"),f(p,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(E,"class","svelte-ax50wm"),f(k,"class","svelte-ax50wm"),f(_,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(ee,oe){D(ee,e,oe),v(e,n),v(e,s),v(e,r),v(e,i),v(e,o),v(o,a),v(o,c),v(o,l),cn(l,t[0]),v(e,u),v(e,h),v(h,d),v(h,g),v(h,p),cn(p,t[1]),v(e,y),v(e,_),v(_,E),v(_,m),v(_,k);for(let We=0;We<L.length;We+=1)L[We].m(k,null);v(e,K),V(M,e,null),W=!0,ie||(st=[X(r,"click",t[5]),X(r,"keyup",_i(t[5])),X(l,"input",t[6]),X(p,"input",t[7])],ie=!0)},p(ee,[oe]){if(oe&1&&l.value!==ee[0]&&cn(l,ee[0]),oe&2&&cn(p,ee[1]),oe&4){le=ee[2];let N;for(N=0;N<le.length;N+=1){const se=ml(ee,le,N);L[N]?(L[N].p(se,oe),T(L[N],1)):(L[N]=yl(se),L[N].c(),T(L[N],1),L[N].m(k,null))}for(Te(),N=le.length;N<L.length;N+=1)wi(N);be()}const We={};oe&8&&(We.title=ee[3]?"Click to create supertag":"Enter a valid name to continue"),oe&8&&(We.disabled=!ee[3]),M.$set(We)},i(ee){if(!W){for(let oe=0;oe<le.length;oe+=1)T(L[oe]);T(M.$$.fragment,ee),W=!0}},o(ee){L=L.filter(Boolean);for(let oe=0;oe<L.length;oe+=1)S(L[oe]);S(M.$$.fragment,ee),W=!1},d(ee){ee&&C(e),Sn(L,ee),B(M),ie=!1,Ue(st)}}}function IT(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=He(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new gf(r,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Vs(r))},[r,i,o,s,a,c,l,u,h]}class TT extends Z{constructor(e){super(),J(this,e,IT,wT,Y,{name:0,description:1,tags:2})}}function bT(t){let e,n,s,r;return{c(){e=b("i"),f(e,"title",t[0]),f(e,"class",n=Tt(`codicon codicon-${t[1]}`)+" svelte-ga3rak"),f(e,"tabindex","0"),Ve(e,"active",t[2])},m(i,o){D(i,e,o),s||(r=[X(e,"click",t[3]),X(e,"keyup",_i(t[3])),X(e,"touchend",Lr(t[3]))],s=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=Tt(`codicon codicon-${i[1]}`)+" svelte-ga3rak")&&f(e,"class",n),o&6&&Ve(e,"active",i[2])},i:A,o:A,d(i){i&&C(e),s=!1,Ue(r)}}}function ET(t,e,n){let{title:s=void 0}=e,{icon:r}=e,{active:i}=e;const o=He(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,s=c.title),"icon"in c&&n(1,r=c.icon),"active"in c&&n(2,i=c.active)},[s,r,i,a]}class ST extends Z{constructor(e){super(),J(this,e,ET,bT,Y,{title:0,icon:1,active:2})}}function kT(t){let e,n,s,r,i;return{c(){e=b("i"),f(e,"tabindex","0"),f(e,"class",n=Tt(`codicon codicon-${fl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=pl[t[0]])},m(o,a){D(o,e,a),r||(i=[X(e,"click",t[1]),X(e,"keyup",_i(t[1])),X(e,"touchend",Lr(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=Tt(`codicon codicon-${fl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=pl[o[0]])&&f(e,"title",s)},i:A,o:A,d(o){o&&C(e),r=!1,Ue(i)}}}function AT(t,e,n){let s="+";const r=He();return[s,()=>{n(0,s=lf(s)),r("change",s)}]}class CT extends Z{constructor(e){super(),J(this,e,AT,kT,Y,{})}}function DT(t){let e;return{c(){e=b("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){D(n,e,s)},p:A,i:A,o:A,d(n){n&&C(e)}}}class _f extends Z{constructor(e){super(),J(this,e,null,DT,Y,{})}}function RT(t){let e,n,s,r,i=En(t[0].name)+"",o,a,c,l=kt(t[0].count)+"",u,h,d,g,p;return n=new yf({props:{type:t[0].type}}),{c(){e=b("li"),q(n.$$.fragment),s=F(),r=b("span"),o=we(i),a=F(),c=b("span"),u=we(l),f(r,"class","tag-name svelte-o0l8cd"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-o0l8cd")},m(y,_){D(y,e,_),V(n,e,null),v(e,s),v(e,r),v(r,o),v(e,a),v(e,c),v(c,u),d=!0,g||(p=X(e,"click",t[2]),g=!0)},p(y,[_]){const E={};_&1&&(E.type=y[0].type),n.$set(E),(!d||_&1)&&i!==(i=En(y[0].name)+"")&&qe(o,i),(!d||_&1)&&l!==(l=kt(y[0].count)+"")&&qe(u,l),(!d||_&1&&h!==(h=y[0].name))&&f(e,"title",h)},i(y){d||(T(n.$$.fragment,y),d=!0)},o(y){S(n.$$.fragment,y),d=!1},d(y){y&&C(e),B(n),g=!1,p()}}}function NT(t,e,n){let{tag:s}=e;const r=He(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class OT extends Z{constructor(e){super(),J(this,e,NT,RT,Y,{tag:0})}}function vl(t,e,n){const s=t.slice();return s[18]=e[n],s}function PT(t){let e,n,s,r,i=t[21].message+"",o;return{c(){e=b("div"),n=b("i"),s=F(),r=b("span"),o=we(i),f(n,"class",Tt("codicon codicon-error")+" svelte-1wgi6cm"),f(e,"class","error-container svelte-1wgi6cm")},m(a,c){D(a,e,c),v(e,n),v(e,s),v(e,r),v(r,o)},p(a,c){c&4&&i!==(i=a[21].message+"")&&qe(o,i)},i:A,o:A,d(a){a&&C(e)}}}function $T(t){let e,n,s=t[5],r=[];for(let o=0;o<s.length;o+=1)r[o]=_l(vl(t,s,o));const i=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Xt()},m(o,a){for(let c=0;c<r.length;c+=1)r[c].m(o,a);D(o,e,a),n=!0},p(o,a){if(a&232){s=o[5];let c;for(c=0;c<s.length;c+=1){const l=vl(o,s,c);r[c]?(r[c].p(l,a),T(r[c],1)):(r[c]=_l(l),r[c].c(),T(r[c],1),r[c].m(e.parentNode,e))}for(Te(),c=s.length;c<r.length;c+=1)i(c);be()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)T(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)S(r[a]);n=!1},d(o){Sn(r,o),o&&C(e)}}}function _l(t){let e,n;function s(){return t[14](t[18])}return e=new OT({props:{tag:t[18]}}),e.$on("click",s),{c(){q(e.$$.fragment)},m(r,i){V(e,r,i),n=!0},p(r,i){t=r;const o={};i&32&&(o.tag=t[18]),e.$set(o)},i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function LT(t){let e,n,s;return n=new _f({}),{c(){e=b("div"),q(n.$$.fragment),f(e,"class","hint-container svelte-1wgi6cm")},m(r,i){D(r,e,i),V(n,e,null),s=!0},p:A,i(r){s||(T(n.$$.fragment,r),s=!0)},o(r){S(n.$$.fragment,r),s=!1},d(r){r&&C(e),B(n)}}}function MT(t){let e,n,s,r,i,o,a,c,l,u,h,d,g,p,y,_;o=new CT({}),o.$on("change",t[10]),c=new ST({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[11]);let E={ctx:t,current:null,token:null,hasCatch:!0,pending:LT,then:$T,catch:PT,error:21,blocks:[,,,]};return Ma(g=t[2],E),{c(){e=b("div"),n=b("i"),s=F(),r=b("input"),i=F(),q(o.$$.fragment),a=F(),q(c.$$.fragment),l=F(),u=b("i"),h=F(),d=b("ol"),E.block.c(),f(n,"class","codicon codicon-search spaced svelte-1wgi6cm"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-1wgi6cm"),f(u,"tabindex","0"),f(u,"class","codicon codicon-question spaced svelte-1wgi6cm"),f(d,"class","svelte-1wgi6cm"),Ve(d,"open",t[4]),f(e,"class","searchbar svelte-1wgi6cm"),Ve(e,"open",t[4])},m(m,k){D(m,e,k),v(e,n),v(e,s),v(e,r),cn(r,t[0]),v(e,i),V(o,e,null),v(e,a),V(c,e,null),v(e,l),v(e,u),v(e,h),v(e,d),E.block.m(d,E.anchor=null),E.mount=()=>d,E.anchor=null,p=!0,y||(_=[X(r,"input",t[8]),X(r,"blur",t[9]),X(u,"click",t[12]),X(u,"keyup",_i(t[13])),X(e,"blur",t[15])],y=!0)},p(m,[k]){t=m,k&1&&r.value!==t[0]&&cn(r,t[0]);const K={};k&2&&(K.active=!t[1]),c.$set(K),E.ctx=t,k&4&&g!==(g=t[2])&&Ma(g,E)||Mf(E,t,k),(!p||k&16)&&Ve(d,"open",t[4]),(!p||k&16)&&Ve(e,"open",t[4])},i(m){p||(T(o.$$.fragment,m),T(c.$$.fragment,m),T(E.block),p=!0)},o(m){S(o.$$.fragment,m),S(c.$$.fragment,m);for(let k=0;k<3;k+=1){const K=E.blocks[k];S(K)}p=!1},d(m){m&&C(e),B(o),B(c),E.block.d(),E.token=null,E=null,y=!1,Ue(_)}}}function xT(t,e,n){let s;Ye(t,_o,M=>n(16,s=M));const r=He();let i,o="",a=!0,c="+",l=!1,u=[];async function h(M,W){n(4,l=!0),n(5,u=[...s.supertags.filter(ie=>ie.name.toLowerCase().includes(W.toLowerCase())).map(ie=>new pf(ie.name,Object.keys(ie.tags).length,"supertag")),...await lT(W,M)])}const d=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function g(){o=this.value,n(0,o)}const p=M=>{(!M.relatedTarget||!M.target.parentNode.contains(M.relatedTarget))&&n(4,l=!1)},y=M=>{n(3,c=M.detail)},_=()=>{n(1,a=!a)},E=()=>Pt.navigateTo("help"),m=()=>Pt.navigateTo("help"),k=M=>{r("pick",M.toActiveTag(c)),d()},K=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,u=[]),o!==""&&n(2,i=h(a,o)))},[o,a,i,c,l,u,r,d,g,p,y,_,E,m,k,K]}class UT extends Z{constructor(e){super(),J(this,e,xT,MT,Y,{})}}function FT(){const t=[],{subscribe:e,update:n,set:s}=kn(t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:r=>n(i=>(i.push(new $r("+",r,0,"general")),i)),removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const _t=FT(),VT=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:s}=kn(t);return{subscribe:e,addPage(r){n(i=>({count:r.count,pages:[...i.pages,r.posts],nextPage:i.nextPage+1}))},reset(){s(t)}}},lr=VT();function BT(t){let e,n=En(t[0])+"",s,r,i;return{c(){e=b("li"),s=we(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-e4wl79"),Ve(e,"active",t[2])},m(o,a){D(o,e,a),v(e,s),r||(i=X(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=En(o[0])+"")&&qe(s,n),a&4&&Ve(e,"active",o[2])},i:A,o:A,d(o){o&&C(e),r=!1,i()}}}function jT(t,e,n){let s,r,i;Ye(t,_t,c=>n(3,i=c));let{name:o}=e;const a=()=>r?_t.removeByIndex(s):_t.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class qT extends Z{constructor(e){super(),J(this,e,jT,BT,Y,{name:0})}}function zT(t){let e,n;return{c(){e=b("span"),n=we(t[0])},m(s,r){D(s,e,r),v(e,n)},p(s,r){r&1&&qe(n,s[0])},d(s){s&&C(e)}}}function HT(t){let e,n=t[1].hostname+"",s,r;return{c(){e=b("a"),s=we(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-wfhmk4")},m(i,o){D(i,e,o),v(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&qe(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&C(e)}}}function KT(t){let e,n,s;function r(a,c){return a[1]?HT:zT}let i=r(t),o=i(t);return{c(){e=b("i"),n=F(),o.c(),s=Xt(),f(e,"class","codicon codicon-link")},m(a,c){D(a,e,c),D(a,n,c),o.m(a,c),D(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:A,o:A,d(a){a&&C(e),a&&C(n),o.d(a),a&&C(s)}}}function GT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=hf(r)?new URL(r):null)},[r,s]}class WT extends Z{constructor(e){super(),J(this,e,GT,KT,Y,{source:0})}}function QT(t){let e,n;const s=t[1].default,r=Sf(s,t,t[0],null);return{c(){e=b("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){D(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Af(r,s,i,i[0],n?kf(s,i[0],o,null):Cf(i[0]),null)},i(i){n||(T(r,i),n=!0)},o(i){S(r,i),n=!1},d(i){i&&C(e),r&&r.d(i)}}}function YT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class wo extends Z{constructor(e){super(),J(this,e,YT,QT,Y,{})}}const wl=6e4,Il=t=>{if(!XT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/wl,s=new Date().getTime()/wl-e;if(s<1)return"just now";if(s<60)return an(s,"minute");const r=s/60;if(r<24)return an(r,"hour");const i=r/24;if(i<7)return an(i,"day");if(i<30.5)return an(i/7,"week");if(i<365.25)return an(i/30.5,"month");const o=i/365.25;return an(o,"year")},XT=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",an=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function JT(t){let e,n,s,r=Il(t[0])+"",i;return{c(){e=b("i"),n=F(),s=b("span"),i=we(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){D(o,e,a),D(o,n,a),D(o,s,a),v(s,i)},p(o,[a]){a&1&&r!==(r=Il(o[0])+"")&&qe(i,r)},i:A,o:A,d(o){o&&C(e),o&&C(n),o&&C(s)}}}function ZT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class eb extends Z{constructor(e){super(),J(this,e,ZT,JT,Y,{value:0})}}function tb(t){let e,n,s,r=kt(t[0])+"",i;return{c(){e=b("i"),n=F(),s=b("span"),i=we(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){D(o,e,a),D(o,n,a),D(o,s,a),v(s,i)},p(o,[a]){a&1&&r!==(r=kt(o[0])+"")&&qe(i,r)},i:A,o:A,d(o){o&&C(e),o&&C(n),o&&C(s)}}}function nb(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class sb extends Z{constructor(e){super(),J(this,e,nb,tb,Y,{value:0})}}function Tl(t,e,n){const s=t.slice();return s[1]=e[n],s}function rb(t){let e,n;return e=new eb({props:{value:t[0].created_at}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].created_at),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function ib(t){let e,n;return e=new sb({props:{value:t[0].score}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function bl(t){let e,n;return e=new wo({props:{$$slots:{default:[ob]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&17&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function ob(t){let e,n;return e=new WT({props:{source:t[0].source}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function El(t){let e,n;return e=new qT({props:{name:t[1]}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[1]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function ab(t){let e,n,s,r,i,o,a,c,l;s=new wo({props:{$$slots:{default:[rb]},$$scope:{ctx:t}}}),i=new wo({props:{$$slots:{default:[ib]},$$scope:{ctx:t}}});let u=t[0].source&&bl(t),h=t[0].tags,d=[];for(let p=0;p<h.length;p+=1)d[p]=El(Tl(t,h,p));const g=p=>S(d[p],1,1,()=>{d[p]=null});return{c(){e=b("div"),n=b("div"),q(s.$$.fragment),r=F(),q(i.$$.fragment),o=F(),u&&u.c(),a=F(),c=b("ul");for(let p=0;p<d.length;p+=1)d[p].c();f(n,"class","summary svelte-jhzkkk"),f(c,"class","svelte-jhzkkk"),f(e,"class","details svelte-jhzkkk")},m(p,y){D(p,e,y),v(e,n),V(s,n,null),v(n,r),V(i,n,null),v(n,o),u&&u.m(n,null),v(e,a),v(e,c);for(let _=0;_<d.length;_+=1)d[_].m(c,null);l=!0},p(p,[y]){const _={};y&17&&(_.$$scope={dirty:y,ctx:p}),s.$set(_);const E={};if(y&17&&(E.$$scope={dirty:y,ctx:p}),i.$set(E),p[0].source?u?(u.p(p,y),y&1&&T(u,1)):(u=bl(p),u.c(),T(u,1),u.m(n,null)):u&&(Te(),S(u,1,1,()=>{u=null}),be()),y&1){h=p[0].tags;let m;for(m=0;m<h.length;m+=1){const k=Tl(p,h,m);d[m]?(d[m].p(k,y),T(d[m],1)):(d[m]=El(k),d[m].c(),T(d[m],1),d[m].m(c,null))}for(Te(),m=h.length;m<d.length;m+=1)g(m);be()}},i(p){if(!l){T(s.$$.fragment,p),T(i.$$.fragment,p),T(u);for(let y=0;y<h.length;y+=1)T(d[y]);l=!0}},o(p){S(s.$$.fragment,p),S(i.$$.fragment,p),S(u),d=d.filter(Boolean);for(let y=0;y<d.length;y+=1)S(d[y]);l=!1},d(p){p&&C(e),B(s),B(i),u&&u.d(),Sn(d,p)}}}function cb(t,e,n){let{post:s}=e;return t.$$set=r=>{"post"in r&&n(0,s=r.post)},[s]}class lb extends Z{constructor(e){super(),J(this,e,cb,ab,Y,{post:0})}}const Na=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function ub(t){let e,n,s,r,i,o,a,c;return{c(){e=b("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){D(l,e,u),t[3](e),a||(c=X(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,c()}}}function hb(t,e,n){let{post:s}=e;const r=He();let i;function o(c){mn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Na.observe(i)},[s,i,r,o,a]}class db extends Z{constructor(e){super(),J(this,e,hb,ub,Y,{post:0})}}function fb(t){let e,n,s,r,i,o,a,c;return{c(){e=b("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-19kew7t")},m(l,u){D(l,e,u),t[5](e),a||(c=[X(e,"click",Lr(t[4])),X(e,"touchstart",t[2],{passive:!0}),X(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[5](null),a=!1,Ue(c)}}}function pb(t,e,n){let{post:s}=e;const r=He();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:g}=h.changedTouches.item(0);o={screenX:d,screenY:g}},c=h=>{const{screenX:d,screenY:g}=h.changedTouches.item(0);o.screenX===d&&o.screenY===g&&r("click")};function l(h){Of.call(this,t,h)}function u(h){mn[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Na.observe(i)},[s,i,a,c,l,u]}class gb extends Z{constructor(e){super(),J(this,e,pb,fb,Y,{post:0})}}function mb(t){let e,n,s,r,i,o,a,c;return{c(){e=b("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){D(l,e,u),t[3](e),a||(c=X(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,c()}}}function yb(t,e,n){let{post:s}=e;const r=He();let i;function o(c){mn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Na.observe(i)},[s,i,r,o,a]}class vb extends Z{constructor(e){super(),J(this,e,yb,mb,Y,{post:0})}}function _b(t){let e,n;return e=new vb({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function wb(t){let e,n;return e=new gb({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Ib(t){let e,n;return e=new db({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Sl(t){let e,n;return e=new lb({props:{post:t[0]}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Tb(t){let e,n,s,r,i;const o=[Ib,wb,_b],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&Sl(t);return{c(){e=b("div"),s.c(),r=F(),l&&l.c(),f(e,"class","post svelte-l1b9wk"),f(e,"tabindex","0")},m(u,h){D(u,e,h),a[n].m(e,null),v(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(Te(),S(a[d],1,1,()=>{a[d]=null}),be(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),T(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&T(l,1)):(l=Sl(u),l.c(),T(l,1),l.m(e,null)):l&&(Te(),S(l,1,1,()=>{l=null}),be())},i(u){i||(T(s),T(l),i=!0)},o(u){S(s),S(l),i=!1},d(u){u&&C(e),a[n].d(),l&&l.d()}}}function bb(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class Eb extends Z{constructor(e){super(),J(this,e,bb,Tb,Y,{post:0})}}function kl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Al(t){let e,n;return e=new Eb({props:{post:t[1]}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Sb(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=Al(kl(t,s,o));const i=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){e=b("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){D(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=kl(o,s,c);r[c]?(r[c].p(l,a),T(r[c],1)):(r[c]=Al(l),r[c].c(),T(r[c],1),r[c].m(e,null))}for(Te(),c=s.length;c<r.length;c+=1)i(c);be()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)T(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)S(r[a]);n=!1},d(o){o&&C(e),Sn(r,o)}}}function kb(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class Ab extends Z{constructor(e){super(),J(this,e,kb,Sb,Y,{posts:0})}}function Cb(t){let e;return{c(){e=b("div")},m(n,s){D(n,e,s),t[1](e)},p:A,i:A,o:A,d(n){n&&C(e),t[1](null)}}}function Db(t,e,n){const s=He(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){mn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class Rb extends Z{constructor(e){super(),J(this,e,Db,Cb,Y,{})}}const Nb="/assets/shironeko-x.c28cad00.png";function Ob(t){let e,n,s,r,i;return{c(){e=b("div"),n=b("img"),r=F(),i=b("span"),i.textContent="You have reached the end",hr(n.src,s=Nb)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){D(o,e,a),v(e,n),v(e,r),v(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class Pb extends Z{constructor(e){super(),J(this,e,null,Ob,Y,{})}}const $b="/assets/shironeko-confused.4071d5b2.png";function Lb(t){let e,n,s,r,i;return{c(){e=b("div"),n=b("img"),r=F(),i=b("span"),i.textContent="No results found",hr(n.src,s=$b)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){D(o,e,a),v(e,n),v(e,r),v(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class Mb extends Z{constructor(e){super(),J(this,e,null,Lb,Y,{})}}const xb={sortProperty:"id",minScore:0},Ub=()=>{const{subscribe:t,set:e}=kn(xb);return{subscribe:t,set:e}},ur=Ub();function Cl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Fb(t){let e,n;return e=new Mb({}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p:A,i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Vb(t){let e,n,s=kt(t[0].count)+"",r,i,o,a,c,l,u,h,d,g,p,y,_,E,m,k,K,M,W,ie,st,le=t[0].pages,L=[];for(let N=0;N<le.length;N+=1)L[N]=Dl(Cl(t,le,N));const wi=N=>S(L[N],1,1,()=>{L[N]=null}),ee=[jb,Bb],oe=[];function We(N,se){return N[2]?0:1}return k=We(t),K=oe[k]=ee[k](t),{c(){e=b("div"),n=b("span"),r=we(s),i=we(" results"),o=F(),a=b("select"),c=b("option"),c.textContent="Date",l=b("option"),l.textContent="Score",u=F(),h=b("select"),d=b("option"),d.textContent="Any Score",g=b("option"),g.textContent="Score > 10",p=b("option"),p.textContent="Score > 100",y=b("option"),y.textContent="Score > 1K",_=F(),E=b("ol");for(let N=0;N<L.length;N+=1)L[N].c();m=F(),K.c(),M=Xt(),f(n,"class","svelte-18wioru"),c.__value="id",c.value=c.__value,f(c,"class","svelte-18wioru"),l.__value="score",l.value=l.__value,f(l,"class","svelte-18wioru"),f(a,"title","Sort results by"),f(a,"class","svelte-18wioru"),t[3].sortProperty===void 0&&Xn(()=>t[6].call(a)),d.__value=0,d.value=d.__value,f(d,"class","svelte-18wioru"),g.__value=10,g.value=g.__value,f(g,"class","svelte-18wioru"),p.__value=100,p.value=p.__value,f(p,"class","svelte-18wioru"),y.__value=1e3,y.value=y.__value,f(y,"class","svelte-18wioru"),f(h,"class","svelte-18wioru"),t[3].minScore===void 0&&Xn(()=>t[7].call(h)),f(e,"class","header svelte-18wioru"),f(E,"class","svelte-18wioru")},m(N,se){D(N,e,se),v(e,n),v(n,r),v(n,i),v(e,o),v(e,a),v(a,c),v(a,l),js(a,t[3].sortProperty),v(e,u),v(e,h),v(h,d),v(h,g),v(h,p),v(h,y),js(h,t[3].minScore),D(N,_,se),D(N,E,se);for(let Dt=0;Dt<L.length;Dt+=1)L[Dt].m(E,null);D(N,m,se),oe[k].m(N,se),D(N,M,se),W=!0,ie||(st=[X(a,"change",t[6]),X(h,"change",t[7])],ie=!0)},p(N,se){if((!W||se&1)&&s!==(s=kt(N[0].count)+"")&&qe(r,s),se&8&&js(a,N[3].sortProperty),se&8&&js(h,N[3].minScore),se&1){le=N[0].pages;let Ne;for(Ne=0;Ne<le.length;Ne+=1){const Pa=Cl(N,le,Ne);L[Ne]?(L[Ne].p(Pa,se),T(L[Ne],1)):(L[Ne]=Dl(Pa),L[Ne].c(),T(L[Ne],1),L[Ne].m(E,null))}for(Te(),Ne=le.length;Ne<L.length;Ne+=1)wi(Ne);be()}let Dt=k;k=We(N),k===Dt?oe[k].p(N,se):(Te(),S(oe[Dt],1,1,()=>{oe[Dt]=null}),be(),K=oe[k],K?K.p(N,se):(K=oe[k]=ee[k](N),K.c()),T(K,1),K.m(M.parentNode,M))},i(N){if(!W){for(let se=0;se<le.length;se+=1)T(L[se]);T(K),W=!0}},o(N){L=L.filter(Boolean);for(let se=0;se<L.length;se+=1)S(L[se]);S(K),W=!1},d(N){N&&C(e),N&&C(_),N&&C(E),Sn(L,N),N&&C(m),oe[k].d(N),N&&C(M),ie=!1,Ue(st)}}}function Dl(t){let e,n;return e=new Ab({props:{posts:t[9]}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.posts=s[9]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Bb(t){let e,n;return e=new Pb({}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p:A,i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function jb(t){let e,n;return e=new Rb({}),e.$on("visible",t[8]),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p:A,i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function qb(t){let e,n,s,r;const i=[Vb,Fb],o=[];function a(c,l){return c[0].count?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=Xt()},m(c,l){~e&&o[e].m(c,l),D(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(Te(),S(o[u],1,1,()=>{o[u]=null}),be()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),T(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(T(n),r=!0)},o(c){S(n),r=!1},d(c){~e&&o[e].d(c),c&&C(s)}}}function zb(t,e,n){let s,r,i,o,a;Ye(t,lr,d=>n(0,o=d)),Ye(t,ur,d=>n(3,a=d));const c=He();function l(){a.sortProperty=La(this),ur.set(a)}function u(){a.minScore=La(this),ur.set(a)}const h=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o.count/df),t.$$.dirty&33&&n(2,r=o.pages.length<s),t.$$.dirty&1&&n(1,i=o.count===0)},[o,i,r,a,c,s,l,u,h]}class Hb extends Z{constructor(e){super(),J(this,e,zb,qb,Y,{})}}function Kb(t){let e,n,s;return{c(){e=b("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-87o3ew"),Ve(e,"visible",t[0])},m(r,i){D(r,e,i),n||(s=X(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&Ve(e,"visible",r[0])},i:A,o:A,d(r){r&&C(e),n=!1,s()}}}function Gb(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0),s=a};return xl(()=>{document.addEventListener("scroll",i,{passive:!0})}),Nf(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class Wb extends Z{constructor(e){super(),J(this,e,Gb,Kb,Y,{})}}function Qb(t){let e;return{c(){e=b("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){D(n,e,s)},p:A,i:A,o:A,d(n){n&&C(e)}}}class Yb extends Z{constructor(e){super(),J(this,e,null,Qb,Y,{})}}function Rl(t,e,n){const s=t.slice();return s[15]=e[n],s[17]=n,s}function Nl(t){let e,n,s,r=t[1],i=[];for(let c=0;c<r.length;c+=1)i[c]=Ol(Rl(t,r,c));const o=c=>S(i[c],1,1,()=>{i[c]=null});let a=t[1].length>1&&Pl(t);return{c(){e=b("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=F(),a&&a.c(),f(e,"class","svelte-1sws22c")},m(c,l){D(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);v(e,n),a&&a.m(e,null),s=!0},p(c,l){if(l&2){r=c[1];let u;for(u=0;u<r.length;u+=1){const h=Rl(c,r,u);i[u]?(i[u].p(h,l),T(i[u],1)):(i[u]=Ol(h),i[u].c(),T(i[u],1),i[u].m(e,n))}for(Te(),u=r.length;u<i.length;u+=1)o(u);be()}c[1].length>1?a?a.p(c,l):(a=Pl(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)T(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)S(i[l]);s=!1},d(c){c&&C(e),Sn(i,c),a&&a.d()}}}function Ol(t){let e,n;function s(){return t[5](t[17])}function r(){return t[6](t[15])}return e=new vf({props:{tag:t[15]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){q(e.$$.fragment)},m(i,o){V(e,i,o),n=!0},p(i,o){t=i;const a={};o&2&&(a.tag=t[15]),e.$set(a)},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){B(e,i)}}}function Pl(t){let e,n,s;return{c(){e=b("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1sws22c"></i>',f(e,"class","add-supertag svelte-1sws22c"),f(e,"title","Click to create a new supertag")},m(r,i){D(r,e,i),n||(s=X(e,"click",t[7]),n=!0)},p:A,d(r){r&&C(e),n=!1,s()}}}function $l(t){let e,n;return e=new TT({props:{tags:t[1]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.tags=s[1]),e.$set(i)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Xb(t){let e,n,s,r,i,o,a,c,l,u,h,d,g,p,y;n=new Yb({}),r=new UT({}),r.$on("pick",t[4]);let _=t[1].length&&Nl(t);c=new mf({props:{title:"Click to search with active tags",text:"Search"}}),c.$on("click",t[8]),u=new Hb({}),u.$on("endreached",t[3]),d=new Wb({});let E=t[0]&&$l(t);return{c(){e=b("div"),q(n.$$.fragment),s=F(),q(r.$$.fragment),i=F(),_&&_.c(),o=F(),a=b("div"),q(c.$$.fragment),l=F(),q(u.$$.fragment),h=F(),q(d.$$.fragment),g=F(),E&&E.c(),p=Xt(),f(a,"class","sort-row svelte-1sws22c"),f(e,"class","search-config svelte-1sws22c")},m(m,k){D(m,e,k),V(n,e,null),v(e,s),V(r,e,null),v(e,i),_&&_.m(e,null),v(e,o),v(e,a),V(c,a,null),D(m,l,k),V(u,m,k),D(m,h,k),V(d,m,k),D(m,g,k),E&&E.m(m,k),D(m,p,k),y=!0},p(m,[k]){m[1].length?_?(_.p(m,k),k&2&&T(_,1)):(_=Nl(m),_.c(),T(_,1),_.m(e,o)):_&&(Te(),S(_,1,1,()=>{_=null}),be()),m[0]?E?(E.p(m,k),k&1&&T(E,1)):(E=$l(m),E.c(),T(E,1),E.m(p.parentNode,p)):E&&(Te(),S(E,1,1,()=>{E=null}),be())},i(m){y||(T(n.$$.fragment,m),T(r.$$.fragment,m),T(_),T(c.$$.fragment,m),T(u.$$.fragment,m),T(d.$$.fragment,m),T(E),y=!0)},o(m){S(n.$$.fragment,m),S(r.$$.fragment,m),S(_),S(c.$$.fragment,m),S(u.$$.fragment,m),S(d.$$.fragment,m),S(E),y=!1},d(m){m&&C(e),B(n),B(r),_&&_.d(),B(c),m&&C(l),B(u,m),m&&C(h),B(d,m),m&&C(g),E&&E.d(m),m&&C(p)}}}function Jb(t,e,n){let s,r,i,o;Ye(t,_o,m=>n(11,s=m)),Ye(t,_t,m=>n(1,r=m)),Ye(t,ur,m=>n(12,i=m)),Ye(t,lr,m=>n(13,o=m));let a=!1;const c=async()=>(lr.reset(),l()),l=async()=>{try{const m=u(),k=await JI(o.nextPage,m,i.sortProperty,i.minScore);lr.addPage(k)}catch(m){console.warn(m)}},u=()=>r.flatMap(m=>m.type==="supertag"?s.supertags.find(k=>k.name===m.name).tags:m.toSearchableTag());return[a,r,c,l,m=>_t.addOrReplace(m.detail),m=>_t.removeByIndex(m),m=>_t.addOrReplace(new $r(lf(m.modifier),m.name,m.count,m.type)),()=>{n(0,a=!0)},()=>c(),m=>{_o.addSupertag(m.detail),_t.set([new $r("+",m.detail.name,m.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class Zb extends Z{constructor(e){super(),J(this,e,Jb,Xb,Y,{})}}function eE(t){let e,n;return e=new _f({}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p:A,i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function tE(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=new r(i())),{c(){e&&q(e.$$.fragment),n=Xt()},m(o,a){e&&V(e,o,a),D(o,n,a),s=!0},p(o,a){if(r!==(r=o[0])){if(e){Te();const c=e;S(c.$$.fragment,1,0,()=>{B(c,1)}),be()}r?(e=new r(i()),q(e.$$.fragment),T(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}},i(o){s||(e&&T(e.$$.fragment,o),s=!0)},o(o){e&&S(e.$$.fragment,o),s=!1},d(o){o&&C(n),e&&B(e,o)}}}function nE(t){let e,n,s,r;const i=[tE,eE],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Xt()},m(c,l){o[e].m(c,l),D(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Te(),S(o[u],1,1,()=>{o[u]=null}),be(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),T(n,1),n.m(s.parentNode,s))},i(c){r||(T(n),r=!0)},o(c){S(n),r=!1},d(c){o[e].d(c),c&&C(s)}}}function sE(t,e,n){let{loadComponent:s}=e,r;return xl(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class Oa extends Z{constructor(e){super(),J(this,e,sE,nE,Y,{loadComponent:1})}}function rE(t){let e;return{c(){e=b("p"),e.textContent="You got lost..."},m(n,s){D(n,e,s)},i:A,o:A,d(n){n&&C(e)}}}function iE(t){let e,n;return e=new Oa({props:{loadComponent:dE}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function oE(t){let e,n;return e=new Oa({props:{loadComponent:hE}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function aE(t){let e,n;return e=new Oa({props:{loadComponent:uE}}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function cE(t){let e,n;return e=new Zb({}),{c(){q(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function lE(t){let e,n,s,r;const i=[cE,aE,oE,iE,rE],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=b("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){D(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(Te(),S(o[u],1,1,()=>{o[u]=null}),be(),s=o[n],s||(s=o[n]=i[n](c),s.c()),T(s,1),s.m(e,null))},i(c){r||(T(s),r=!0)},o(c){S(s),r=!1},d(c){c&&C(e),o[n].d()}}}const uE=()=>pi(()=>import("./Account.c254f993.js"),["assets/Account.c254f993.js","assets/Account.1572ce77.css"]),hE=()=>pi(()=>import("./Preferences.69a1b643.js"),["assets/Preferences.69a1b643.js","assets/Preferences.aea2222b.css","assets/ParagraphHeading.c909f164.js","assets/ParagraphHeading.5a89239e.css"]),dE=()=>pi(()=>import("./Help.1ed2e88f.js"),["assets/Help.1ed2e88f.js","assets/Help.9081c352.css","assets/ParagraphHeading.c909f164.js","assets/ParagraphHeading.5a89239e.css"]);function fE(t,e,n){let s;return Ye(t,Pt,r=>n(0,s=r)),[s]}class pE extends Z{constructor(e){super(),J(this,e,fE,lE,Y,{})}}function gE(t){let e;return{c(){e=b("footer"),e.innerHTML=`<div><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-143t5oi"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-143t5oi">\xA9 2022 kurozenzen</span> 
  <div></div>`,f(e,"class","svelte-143t5oi")},m(n,s){D(n,e,s)},p:A,i:A,o:A,d(n){n&&C(e)}}}class mE extends Z{constructor(e){super(),J(this,e,null,gE,Y,{})}}function yE(t){let e,n,s,r,i,o;return e=new VI({}),s=new pE({}),i=new mE({}),{c(){q(e.$$.fragment),n=F(),q(s.$$.fragment),r=F(),q(i.$$.fragment)},m(a,c){V(e,a,c),D(a,n,c),V(s,a,c),D(a,r,c),V(i,a,c),o=!0},p:A,i(a){o||(T(e.$$.fragment,a),T(s.$$.fragment,a),T(i.$$.fragment,a),o=!0)},o(a){S(e.$$.fragment,a),S(s.$$.fragment,a),S(i.$$.fragment,a),o=!1},d(a){B(e,a),a&&C(n),B(s,a),a&&C(r),B(i,a)}}}class vE extends Z{constructor(e){super(),J(this,e,null,yE,Y,{})}}function _E(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:d}=await pi(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",g=>{g.isUpdate?window.location.reload():s==null||s()}),a.register({immediate:e}).then(g=>{i?i("/sw.js",g):r==null||r(g)}).catch(g=>{o==null||o(g)})}}return c=u(),l}new vE({target:document.getElementById("app")});_E();export{fl as $,hr as A,mf as B,LI as C,Xt as D,Ye as E,_o as F,ll as G,kn as H,Sf as I,Af as J,Cf as K,kf as L,gl as M,Xn as N,js as O,La as P,EE as Q,mn as R,Z as S,IE as T,wE as U,bE as V,TE as W,vf as X,$r as Y,qT as Z,Wb as _,f as a,D as b,v as c,qe as d,b as e,En as f,A as g,C as h,J as i,F as j,T as k,X as l,Te as m,Tt as n,_i as o,be as p,S as q,Sn as r,Y as s,we as t,Ue as u,He as v,q as w,V as x,B as y,cn as z};
