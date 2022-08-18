var zh=Object.defineProperty,Hh=Object.defineProperties;var Kh=Object.getOwnPropertyDescriptors;var Zo=Object.getOwnPropertySymbols;var Gh=Object.prototype.hasOwnProperty,Wh=Object.prototype.propertyIsEnumerable;var ea=(t,e,n)=>e in t?zh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ta=(t,e)=>{for(var n in e||(e={}))Gh.call(e,n)&&ea(t,n,e[n]);if(Zo)for(var n of Zo(e))Wh.call(e,n)&&ea(t,n,e[n]);return t},na=(t,e)=>Hh(t,Kh(e));const Qh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Qh();function F(){}function Xh(t){return t&&typeof t=="object"&&typeof t.then=="function"}function tl(t){return t()}function ra(){return Object.create(null)}function ze(t){t.forEach(tl)}function nl(t){return typeof t=="function"}function se(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let kr;function an(t,e){return kr||(kr=document.createElement("a")),kr.href=e,t===kr.href}function Yh(t){return Object.keys(t).length===0}function Jh(t,...e){if(t==null)return F;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qe(t,e,n){t.$$.on_destroy.push(Jh(e,n))}function gt(t){return t==null?"":t}function sa(t,e,n){return t.set(n),e}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function Kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function he(t){return document.createTextNode(t)}function B(){return he(" ")}function fs(){return he("")}function oe(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zh(t){return Array.from(t.childNodes)}function be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ia(t,e){t.value=e==null?"":e}function Xt(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function gi(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Be(t,e,n){t.classList[n?"add":"remove"](e)}function ed(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let jn;function Je(t){jn=t}function gs(){if(!jn)throw new Error("Function called outside component initialization");return jn}function td(t){gs().$$.on_mount.push(t)}function nd(t){gs().$$.on_destroy.push(t)}function _t(){const t=gs();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=ed(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const Dn=[],Zt=[],$r=[],oa=[],rd=Promise.resolve();let pi=!1;function sd(){pi||(pi=!0,rd.then(Ki))}function cn(t){$r.push(t)}const zs=new Set;let Ar=0;function Ki(){const t=jn;do{for(;Ar<Dn.length;){const e=Dn[Ar];Ar++,Je(e),id(e.$$)}for(Je(null),Dn.length=0,Ar=0;Zt.length;)Zt.pop()();for(let e=0;e<$r.length;e+=1){const n=$r[e];zs.has(n)||(zs.add(n),n())}$r.length=0}while(Dn.length);for(;oa.length;)oa.pop()();pi=!1,zs.clear(),Je(t)}function id(t){if(t.fragment!==null){t.update(),ze(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(cn)}}const xr=new Set;let St;function Le(){St={r:0,c:[],p:St}}function Me(){St.r||ze(St.c),St=St.p}function A(t,e){t&&t.i&&(xr.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(xr.has(t))return;xr.add(t),St.c.push(()=>{xr.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function aa(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Le(),N(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Me())}):e.block.d(1),l.c(),A(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Ki()}if(Xh(t)){const s=gs();if(t.then(i=>{Je(s),r(e.then,1,e.value,i),Je(null)},i=>{if(Je(s),r(e.catch,2,e.error,i),Je(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function od(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function re(t){t&&t.c()}function ee(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),r||cn(()=>{const c=i.map(tl).filter(nl);o?o.push(...c):ze(c),t.$$.on_mount=[]}),a.forEach(cn)}function te(t,e){const n=t.$$;n.fragment!==null&&(ze(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ad(t,e){t.$$.dirty[0]===-1&&(Dn.push(t),sd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,r,s,i,o,a=[-1]){const c=jn;Je(t);const l=t.$$={fragment:null,ctx:null,props:i,update:F,not_equal:s,bound:ra(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ra(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...g)=>{const m=g.length?g[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&ad(t,h)),d}):[],l.update(),u=!0,ze(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=Zh(e.target);l.fragment&&l.fragment.l(h),h.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&A(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),Ki()}Je(c)}class ce{$destroy(){te(this,1),this.$destroy=F}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Yh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gt=[];function _n(t,e=F){let n;const r=new Set;function s(a){if(se(t,a)&&(t=a,n)){const c=!Gt.length;for(const l of r)l[1](),Gt.push(l,t);if(c){for(let l=0;l<Gt.length;l+=2)Gt[l][0](Gt[l+1]);Gt.length=0}}}function i(a){s(a(t))}function o(a,c=F){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||F),a(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const cd=Object.freeze(["search","account","settings","help"]),ld=t=>cd.includes(t),ud=()=>{const{subscribe:t,set:e}=_n("search");return{subscribe:t,navigateTo(n){if(!ld(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}};var Rt=ud();function hd(t){let e,n,r,s,i,o;return{c(){e=Kt("svg"),n=Kt("g"),r=Kt("path"),s=Kt("defs"),i=Kt("clipPath"),o=Kt("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){$(a,e,c),p(e,n),p(n,r),p(e,s),p(s,i),p(i,o)},p:F,i:F,o:F,d(a){a&&M(e)}}}class dd extends ce{constructor(e){super(),ae(this,e,null,hd,se,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gd=function(t){const e=rl(t);return sl.encodeByteArray(e,!0)},il=function(t){return gd(t).replace(/\./g,"")},pd=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ol(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function al(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yd(){return _e().indexOf("Electron/")>=0}function ll(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vd(){return _e().indexOf("MSAppHost/")>=0}function _d(){return typeof indexedDB=="object"}function wd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="FirebaseError";class ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ed,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Id(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,r)}}function Id(t,e){return t.replace(Td,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Td=/\{\$([^}]+)}/g;function bd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ca(i)&&ca(o)){if(!Gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ca(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Nn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sd(t,e){const n=new kd(t,e);return n.subscribe.bind(n)}class kd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ad(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hs),s.error===void 0&&(s.error=Hs),s.complete===void 0&&(s.complete=Hs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ad(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hs(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class Mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new md;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rd(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dd(t){return t===Tt?void 0:t}function Rd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Od={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Pd=Z.INFO,Ld={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Md=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ld[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gi{constructor(e){this.name=e,this._logLevel=Pd,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const $d=(t,e)=>e.some(n=>t instanceof n);let la,ua;function xd(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,mi=new WeakMap,hl=new WeakMap,Ks=new WeakMap,Wi=new WeakMap;function Fd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ht(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ul.set(n,t)}).catch(()=>{}),Wi.set(e,t),e}function Vd(t){if(mi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mi.set(t,e)}let yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bd(t){yi=t(yi)}function jd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gs(this),e,...n);return hl.set(r,e.sort?e.sort():[e]),ht(r)}:Ud().includes(t)?function(...e){return t.apply(Gs(this),e),ht(ul.get(this))}:function(...e){return ht(t.apply(Gs(this),e))}}function qd(t){return typeof t=="function"?jd(t):(t instanceof IDBTransaction&&Vd(t),$d(t,xd())?new Proxy(t,yi):t)}function ht(t){if(t instanceof IDBRequest)return Fd(t);if(Ks.has(t))return Ks.get(t);const e=qd(t);return e!==t&&(Ks.set(t,e),Wi.set(e,t)),e}const Gs=t=>Wi.get(t);function zd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ht(o.result),c.oldVersion,c.newVersion,ht(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Hd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],Ws=new Map;function ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ws.get(e))return Ws.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ws.set(e,i),i}Bd(t=>na(ta({},t),{get:(e,n,r)=>ha(e,n)||t.get(e,n,r),has:(e,n)=>!!ha(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vi="@firebase/app",da="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Gi("@firebase/app"),Qd="@firebase/app-compat",Xd="@firebase/analytics-compat",Yd="@firebase/analytics",Jd="@firebase/app-check-compat",Zd="@firebase/app-check",ef="@firebase/auth",tf="@firebase/auth-compat",nf="@firebase/database",rf="@firebase/database-compat",sf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",cf="@firebase/installations-compat",lf="@firebase/messaging",uf="@firebase/messaging-compat",hf="@firebase/performance",df="@firebase/performance-compat",ff="@firebase/remote-config",gf="@firebase/remote-config-compat",pf="@firebase/storage",mf="@firebase/storage-compat",yf="@firebase/firestore",vf="@firebase/firestore-compat",_f="firebase",wf="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="[DEFAULT]",Ef={[vi]:"fire-core",[Qd]:"fire-core-compat",[Yd]:"fire-analytics",[Xd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Jd]:"fire-app-check-compat",[ef]:"fire-auth",[tf]:"fire-auth-compat",[nf]:"fire-rtdb",[rf]:"fire-rtdb-compat",[sf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[cf]:"fire-iid-compat",[lf]:"fire-fcm",[uf]:"fire-fcm-compat",[hf]:"fire-perf",[df]:"fire-perf-compat",[ff]:"fire-rc",[gf]:"fire-rc-compat",[pf]:"fire-gcs",[mf]:"fire-gcs-compat",[yf]:"fire-fst",[vf]:"fire-fst-compat","fire-js":"fire-js",[_f]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,_i=new Map;function If(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(_i.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of Wr.values())If(n,t);return!0}function Qi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new rr("app","Firebase",Tf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=wf;function Sf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:dl,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw xt.create("bad-app-name",{appName:String(r)});const s=Wr.get(r);if(s){if(Gr(t,s.options)&&Gr(n,s.config))return s;throw xt.create("duplicate-app",{appName:r})}const i=new Nd(r);for(const a of _i.values())i.addComponent(a);const o=new bf(t,n,i);return Wr.set(r,o),o}function fl(t=dl){const e=Wr.get(t);if(!e)throw xt.create("no-app",{appName:t});return e}function dt(t,e,n){var r;let s=(r=Ef[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}ln(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kf="firebase-heartbeat-database",Af=1,qn="firebase-heartbeat-store";let Qs=null;function gl(){return Qs||(Qs=zd(kf,Af,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Qs}async function Cf(t){var e;try{return(await gl()).transaction(qn).objectStore(qn).get(pl(t))}catch(n){if(n instanceof ot)$t.warn(n.message);else{const r=xt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});$t.warn(r.message)}}}async function fa(t,e){var n;try{const s=(await gl()).transaction(qn,"readwrite");return await s.objectStore(qn).put(e,pl(t)),s.done}catch(r){if(r instanceof ot)$t.warn(r.message);else{const s=xt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});$t.warn(s.message)}}}function pl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Df=1024,Rf=30*24*60*60*1e3;class Nf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ga();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:n,unsentEntries:r}=Of(this._heartbeatsCache.heartbeats),s=il(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ga(){return new Date().toISOString().substring(0,10)}function Of(t,e=Df){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?wd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pa(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t){ln(new Mt("platform-logger",e=>new Gd(e),"PRIVATE")),ln(new Mt("heartbeat",e=>new Nf(e),"PRIVATE")),dt(vi,da,t),dt(vi,da,"esm2017"),dt("fire-js","")}Lf("");function Xi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ml(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mf=ml,yl=new rr("auth","Firebase",ml());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Gi("@firebase/auth");function Ur(t,...e){ma.logLevel<=Z.ERROR&&ma.error(`Auth (${ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw Yi(t,...e)}function Ge(t,...e){return Yi(t,...e)}function vl(t,e,n){const r=Object.assign(Object.assign({},Mf()),{[e]:n});return new rr("auth","Firebase",r).create(e,{appName:t.name})}function $f(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&je(t,"argument-error"),vl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yl.create(t,...e)}function q(t,e,...n){if(!t)throw Yi(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ur(e),new Error(e)}function nt(t,e){t||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map;function et(t){nt(t instanceof Function,"Expected a class definition");let e=ya.get(t);return e?(nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ya.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t,e){const n=Qi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Gr(i,e!=null?e:{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function Uf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ff(){return va()==="http:"||va()==="https:"}function va(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ff()||al()||"connection"in navigator)?navigator.onLine:!0}function Bf(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.shortDelay=e,this.longDelay=n,nt(n>e,"Short delay should be less than long delay!"),this.isMobile=ol()||cl()}get(){return Vf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e){nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new or(3e4,6e4);function ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,s={}){return wl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),_l.fetch()(El(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function wl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jf),e);try{const s=new zf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Cr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Cr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vl(t,u,l);je(t,u)}}catch(s){if(s instanceof ot)throw s;je(t,"network-request-failed")}}async function lr(t,e,n,r,s={}){const i=await cr(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function El(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ji(t.config,s):`${t.config.apiScheme}://${s}`}class zf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),qf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Kf(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gf(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Zi(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(Xs(s.auth_time)),issuedAtTime:Mn(Xs(s.iat)),expirationTime:Mn(Xs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xs(t){return Number(t)*1e3}function Zi(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Ur("JWT malformed, contained fewer than 3 sections"),null;try{const i=pd(r);return i?JSON.parse(i):(Ur("Failed to decode base64 JWT payload"),null)}catch(i){return Ur("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Wf(t){const e=Zi(t);return q(e,"internal-error"),q(typeof e.exp!="undefined","internal-error"),q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ot&&Qf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zn(t,Kf(n,{idToken:r}));q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zf(i.providerUserInfo):[],a=Jf(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Il(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Yf(t){const e=He(t);await Qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jf(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zf(t){return t.map(e=>{var{providerId:n}=e,r=Xi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e){const n=await wl(t,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=El(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_l.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken!="undefined","internal-error"),q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hn;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zn(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gf(this,e)}reload(){return Yf(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zn(this,Hf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:O,isAnonymous:b,providerData:V,stsTokenManager:S}=n;q(T&&S,e,"internal-error");const P=Hn.fromJSON(this.name,S);q(typeof T=="string",e,"internal-error"),at(h,e.name),at(d,e.name),q(typeof O=="boolean",e,"internal-error"),q(typeof b=="boolean",e,"internal-error"),at(g,e.name),at(m,e.name),at(E,e.name),at(v,e.name),at(C,e.name),at(w,e.name);const H=new Nt({uid:T,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:b,photoURL:m,phoneNumber:g,tenantId:E,stsTokenManager:P,createdAt:C,lastLoginAt:w});return V&&Array.isArray(V)&&(H.providerData=V.map(K=>Object.assign({},K))),v&&(H._redirectEventId=v),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hn;s.updateFromServerResponse(n);const i=new Nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tl.type="NONE";const _a=Tl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(et(_a),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(_a);const o=Fr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Nt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new en(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new en(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cl(e))return"Blackberry";if(Dl(e))return"Webos";if(eo(e))return"Safari";if((e.includes("chrome/")||Sl(e))&&!e.includes("edge/"))return"Chrome";if(Al(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bl(t=_e()){return/firefox\//i.test(t)}function eo(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sl(t=_e()){return/crios\//i.test(t)}function kl(t=_e()){return/iemobile/i.test(t)}function Al(t=_e()){return/android/i.test(t)}function Cl(t=_e()){return/blackberry/i.test(t)}function Dl(t=_e()){return/webos/i.test(t)}function ps(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tg(t=_e()){var e;return ps(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ng(){return ll()&&document.documentMode===10}function Rl(t=_e()){return ps(t)||Al(t)||Dl(t)||Cl(t)||/windows phone/i.test(t)||kl(t)}function rg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e=[]){let n;switch(t){case"Browser":n=wa(_e());break;case"Worker":n=`${wa(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}/**
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
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Qr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ur(t){return He(t)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function og(t,e){return cr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e){return lr(t,"POST","/v1/accounts:signInWithPassword",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e){return lr(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}async function lg(t,e){return lr(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends to{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ag(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cg(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return og(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lg(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e){return lr(t,"POST","/v1/accounts:signInWithIdp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="http://localhost";class Ut extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:ug,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dg(t){const e=Rn(Nn(t)).link,n=e?Rn(Nn(e)).deep_link_id:null,r=Rn(Nn(t)).deep_link_id;return(r?Rn(Nn(r)).link:null)||r||n||e||t}class no{constructor(e){var n,r,s,i,o,a;const c=Rn(Nn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=hg((s=c.mode)!==null&&s!==void 0?s:null);q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dg(e);try{return new no(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return Kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=no.parseLink(n);return q(r,"argument-error"),Kn._fromEmailAndCode(e,r.code,r.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ro{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends hr{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ye.credential(n,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends hr{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends hr{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e){return lr(t,"POST","/v1/accounts:signUp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nt._fromIdTokenResponse(e,r,s),o=Ia(r);return new Ft({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ia(r);return new Ft({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ia(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xr(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(t,i,e,r):i})}async function gg(t,e,n=!1){const r=await zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ft._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await zn(t,Ol(s,i,e,t),n);q(o.idToken,s,"internal-error");const a=Zi(o.idToken);q(a,s,"internal-error");const{sub:c}=a;return q(t.uid===c,s,"user-mismatch"),Ft._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&je(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t,e,n=!1){const r="signIn",s=await Ol(t,r,e),i=await Ft._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mg(t,e){return Pl(ur(t),e)}async function yg(t,e,n){const r=ur(t),s=await fg(r,{returnSecureToken:!0,email:e,password:n}),i=await Ft._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function vg(t,e,n){return mg(He(t),wn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){return He(t).setPersistence(e)}function Ll(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function wg(t){return He(t).signOut()}const Yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){const t=_e();return eo(t)||ps(t)}const Ig=1e3,Tg=10;class $l extends Ml{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Eg()&&rg(),this.fallbackToPolling=Rl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ng()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Tg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$l.type="LOCAL";const xl=$l;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Ml{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ul.type="SESSION";const Fl=Ul;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await bg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=so("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function kg(t){We().location.href=t}/**
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
 */function Vl(){return typeof We().WorkerGlobalScope!="undefined"&&typeof We().importScripts=="function"}async function Ag(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dg(){return Vl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="firebaseLocalStorageDb",Rg=1,Jr="firebaseLocalStorage",jl="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ys(t,e){return t.transaction([Jr],e?"readwrite":"readonly").objectStore(Jr)}function Ng(){const t=indexedDB.deleteDatabase(Bl);return new dr(t).toPromise()}function Ei(){const t=indexedDB.open(Bl,Rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jr,{keyPath:jl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jr)?e(r):(r.close(),await Ng(),e(await Ei()))})})}async function Ta(t,e,n){const r=ys(t,!0).put({[jl]:e,value:n});return new dr(r).toPromise()}async function Og(t,e){const n=ys(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function ba(t,e){const n=ys(t,!0).delete(e);return new dr(n).toPromise()}const Pg=800,Lg=3;class ql{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ei(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Dg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ag(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ei();return await Ta(e,Yr,"1"),await ba(e,Yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ta(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Og(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ba(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ys(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ql.type="LOCAL";const Mg=ql;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$g().appendChild(r)})}function Ug(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new or(3e4,6e4);/**
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
 */function zl(t,e){return e?et(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fg(t){return Pl(t.auth,new io(t),t.bypassAuthState)}function Vg(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),pg(n,new io(t),t.bypassAuthState)}async function Bg(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),gg(n,new io(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fg;case"linkViaPopup":case"linkViaRedirect":return Bg;case"reauthViaPopup":case"reauthViaRedirect":return Vg;default:je(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new or(2e3,1e4);async function qg(t,e,n){const r=ur(t);$f(t,e,ro);const s=zl(r,n);return new kt(r,"signInViaPopup",e,s).executeNotNull()}class kt extends Hl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=so();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jg.get())};e()}}kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="pendingRedirect",Vr=new Map;class Hg extends Hl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const r=await Kg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kg(t,e){const n=Qg(e),r=Wg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gg(t,e){Vr.set(t._key(),e)}function Wg(t){return et(t._redirectPersistence)}function Qg(t){return Fr(zg,t.config.apiKey,t.name)}async function Xg(t,e,n=!1){const r=ur(t),s=zl(r,e),o=await new Hg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=10*60*1e3;class Jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Kl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}saveEventToCache(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}function Sa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,np=/^https?/;async function rp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ep(t);for(const n of e)try{if(sp(n))return}catch{}je(t,"unauthorized-domain")}function sp(t){const e=wi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!np.test(n))return!1;if(tp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ip=new or(3e4,6e4);function ka(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function op(t){return new Promise((e,n)=>{var r,s,i;function o(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),n(Ge(t,"network-request-failed"))},timeout:ip.get()})}if(!((s=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=We().gapi)===null||i===void 0)&&i.load)o();else{const a=Ug("iframefcb");return We()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},xg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Br=null,e})}let Br=null;function ap(t){return Br=Br||op(t),Br}/**
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
 */const cp=new or(5e3,15e3),lp="__/auth/iframe",up="emulator/auth/iframe",hp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fp(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ji(e,up):`https://${t.config.authDomain}/${lp}`,r={apiKey:e.apiKey,appName:t.name,v:ir},s=dp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function gp(t){const e=await ap(t),n=We().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:fp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=We().setTimeout(()=>{i(o)},cp.get());function c(){We().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const pp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mp=500,yp=600,vp="_blank",_p="http://localhost";class Aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wp(t,e,n,r=mp,s=yp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=Sl(l)?vp:n),bl(l)&&(e=e||_p,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(tg(l)&&a!=="_self")return Ep(e||"",a),new Aa(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Aa(h)}function Ep(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ip="__/auth/handler",Tp="emulator/auth/handler";function Ca(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ir,eventId:s};if(e instanceof ro){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof hr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${bp(t)}?${sr(a).slice(1)}`}function bp({config:t}){return t.emulator?Ji(t,Tp):`https://${t.authDomain}/${Ip}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="webStorageSupport";class Sp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fl,this._completeRedirectFn=Xg,this._overrideRedirectResult=Gg}async _openPopup(e,n,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ca(e,n,r,wi(),s);return wp(e,o,so())}async _openRedirect(e,n,r,s){return await this._originValidation(e),kg(Ca(e,n,r,wi(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gp(e),r=new Jg(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ys,{type:Ys},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ys];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rl()||eo()||ps()}}const kp=Sp;var Da="@firebase/auth",Ra="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dp(t){ln(new Mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nl(t)},u=new ig(a,c,l);return Uf(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ln(new Mt("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new Ap(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Da,Ra,Cp(t)),dt(Da,Ra,"esm2017")}/**
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
 */function Rp(t=fl()){const e=Qi(t,"auth");return e.isInitialized()?e.getImmediate():xf(t,{popupRedirectResolver:kp,persistence:[Mg,xl,Fl]})}Dp("Browser");var Np="firebase",Op="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt(Np,Op,"app");var Pp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,oo=oo||{},z=Pp||self;function Zr(){}function Ii(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lp(t){return Object.prototype.hasOwnProperty.call(t,Js)&&t[Js]||(t[Js]=++Mp)}var Js="closure_uid_"+(1e9*Math.random()>>>0),Mp=0;function $p(t,e,n){return t.call.apply(t.bind,arguments)}function xp(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Se(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=$p:Se=xp,Se.apply(null,arguments)}function Dr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function wt(){this.s=this.s,this.o=this.o}var Up=0;wt.prototype.s=!1;wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Up!=0)&&Lp(this)};wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Wl=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Fp(t){e:{var e=Rm;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Na(t){return Array.prototype.concat.apply([],arguments)}function ao(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function es(t){return/^[\s\xa0]*$/.test(t)}var Oa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ne(t,e){return t.indexOf(e)!=-1}function Zs(t,e){return t<e?-1:t>e?1:0}var Oe;e:{var Pa=z.navigator;if(Pa){var La=Pa.userAgent;if(La){Oe=La;break e}}Oe=""}function co(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ql(t){const e={};for(const n in t)e[n]=t[n];return e}var Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xl(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ma.length;i++)n=Ma[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lo(t){return lo[" "](t),t}lo[" "]=Zr;function Vp(t){var e=qp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Bp=Ne(Oe,"Opera"),un=Ne(Oe,"Trident")||Ne(Oe,"MSIE"),Yl=Ne(Oe,"Edge"),Ti=Yl||un,Jl=Ne(Oe,"Gecko")&&!(Ne(Oe.toLowerCase(),"webkit")&&!Ne(Oe,"Edge"))&&!(Ne(Oe,"Trident")||Ne(Oe,"MSIE"))&&!Ne(Oe,"Edge"),jp=Ne(Oe.toLowerCase(),"webkit")&&!Ne(Oe,"Edge");function Zl(){var t=z.document;return t?t.documentMode:void 0}var ts;e:{var ei="",ti=function(){var t=Oe;if(Jl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yl)return/Edge\/([\d\.]+)/.exec(t);if(un)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jp)return/WebKit\/(\S+)/.exec(t);if(Bp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ti&&(ei=ti?ti[1]:""),un){var ni=Zl();if(ni!=null&&ni>parseFloat(ei)){ts=String(ni);break e}}ts=ei}var qp={};function zp(){return Vp(function(){let t=0;const e=Oa(String(ts)).split("."),n=Oa("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Zs(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Zs(s[2].length==0,i[2].length==0)||Zs(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var bi;if(z.document&&un){var $a=Zl();bi=$a||parseInt(ts,10)||void 0}else bi=void 0;var Hp=bi,Kp=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Zr,e),z.removeEventListener("test",Zr,e)}catch{}return t}();function Re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};function Gn(t,e){if(Re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jl){e:{try{lo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Gp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gn.Z.h.call(this)}}Ce(Gn,Re);var Gp={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gr="closure_listenable_"+(1e6*Math.random()|0),Wp=0;function Qp(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++Wp,this.ca=this.fa=!1}function vs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _s(t){this.src=t,this.g={},this.h=0}_s.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ki(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Qp(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Si(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Gl(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(vs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ki(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var uo="closure_lm_"+(1e6*Math.random()|0),ri={};function eu(t,e,n,r,s){if(r&&r.once)return nu(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)eu(t,e[i],n,r,s);return null}return n=go(n),t&&t[gr]?t.N(e,n,fr(r)?!!r.capture:!!r,s):tu(t,e,n,!1,r,s)}function tu(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=fr(s)?!!s.capture:!!s,a=fo(t);if(a||(t[uo]=a=new _s(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Xp(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Kp||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(su(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Xp(){function t(n){return e.call(t.src,t.listener,n)}var e=Yp;return t}function nu(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nu(t,e[i],n,r,s);return null}return n=go(n),t&&t[gr]?t.O(e,n,fr(r)?!!r.capture:!!r,s):tu(t,e,n,!0,r,s)}function ru(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ru(t,e[i],n,r,s);else r=fr(r)?!!r.capture:!!r,n=go(n),t&&t[gr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ki(i,n,r,s),-1<n&&(vs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=fo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ki(e,n,r,s)),(n=-1<t?e[t]:null)&&ho(n))}function ho(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[gr])Si(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(su(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=fo(e))?(Si(n,t),n.h==0&&(n.src=null,e[uo]=null)):vs(t)}}}function su(t){return t in ri?ri[t]:ri[t]="on"+t}function Yp(t,e){if(t.ca)t=!0;else{e=new Gn(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ho(t),t=n.call(r,e)}return t}function fo(t){return t=t[uo],t instanceof _s?t:null}var si="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(t){return typeof t=="function"?t:(t[si]||(t[si]=function(e){return t.handleEvent(e)}),t[si])}function we(){wt.call(this),this.i=new _s(this),this.P=this,this.I=null}Ce(we,wt);we.prototype[gr]=!0;we.prototype.removeEventListener=function(t,e,n,r){ru(this,t,e,n,r)};function ke(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Re(e,t);else if(e instanceof Re)e.target=e.target||t;else{var s=e;e=new Re(r,t),Xl(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Rr(o,r,!0,e)&&s}if(o=e.g=t,s=Rr(o,r,!0,e)&&s,s=Rr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Rr(o,r,!1,e)&&s}we.prototype.M=function(){if(we.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vs(n[r]);delete t.g[e],t.h--}}this.I=null};we.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};we.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Rr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Si(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var po=z.JSON.stringify;function Jp(){var t=ou;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Zp{constructor(){this.h=this.g=null}add(e,n){const r=iu.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var iu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new em,t=>t.reset());class em{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tm(t){z.setTimeout(()=>{throw t},0)}function mo(t,e){Ai||nm(),Ci||(Ai(),Ci=!0),ou.add(t,e)}var Ai;function nm(){var t=z.Promise.resolve(void 0);Ai=function(){t.then(rm)}}var Ci=!1,ou=new Zp;function rm(){for(var t;t=Jp();){try{t.h.call(t.g)}catch(n){tm(n)}var e=iu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ci=!1}function ws(t,e){we.call(this),this.h=t||1,this.g=e||z,this.j=Se(this.kb,this),this.l=Date.now()}Ce(ws,we);D=ws.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(yo(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yo(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){ws.Z.M.call(this),yo(this),delete this.g};function vo(t,e,n){if(typeof t=="function")n&&(t=Se(t,n));else if(t&&typeof t.handleEvent=="function")t=Se(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function au(t){t.g=vo(()=>{t.g=null,t.i&&(t.i=!1,au(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sm extends wt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:au(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(t){wt.call(this),this.h=t,this.g={}}Ce(Wn,wt);var xa=[];function cu(t,e,n,r){Array.isArray(n)||(n&&(xa[0]=n.toString()),n=xa);for(var s=0;s<n.length;s++){var i=eu(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function lu(t){co(t.g,function(e,n){this.g.hasOwnProperty(n)&&ho(e)},t),t.g={}}Wn.prototype.M=function(){Wn.Z.M.call(this),lu(this)};Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Es(){this.g=!0}Es.prototype.Aa=function(){this.g=!1};function im(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function om(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Yt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cm(t,n)+(r?" "+r:"")})}function am(t,e){t.info(function(){return"TIMEOUT: "+e})}Es.prototype.info=function(){};function cm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return po(n)}catch{return e}}var Ht={},Ua=null;function Is(){return Ua=Ua||new we}Ht.Ma="serverreachability";function uu(t){Re.call(this,Ht.Ma,t)}Ce(uu,Re);function Qn(t){const e=Is();ke(e,new uu(e,t))}Ht.STAT_EVENT="statevent";function hu(t,e){Re.call(this,Ht.STAT_EVENT,t),this.stat=e}Ce(hu,Re);function Pe(t){const e=Is();ke(e,new hu(e,t))}Ht.Na="timingevent";function du(t,e){Re.call(this,Ht.Na,t),this.size=e}Ce(du,Re);function pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ts={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function _o(){}_o.prototype.h=null;function Fa(t){return t.h||(t.h=t.i())}function gu(){}var mr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wo(){Re.call(this,"d")}Ce(wo,Re);function Eo(){Re.call(this,"c")}Ce(Eo,Re);var Di;function bs(){}Ce(bs,_o);bs.prototype.g=function(){return new XMLHttpRequest};bs.prototype.i=function(){return{}};Di=new bs;function yr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Wn(this),this.P=lm,t=Ti?125:void 0,this.W=new ws(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new pu}function pu(){this.i=null,this.g="",this.h=!1}var lm=45e3,Ri={},ns={};D=yr.prototype;D.setTimeout=function(t){this.P=t};function Ni(t,e,n){t.K=1,t.v=ks(rt(e)),t.s=n,t.U=!0,mu(t,null)}function mu(t,e){t.F=Date.now(),vr(t),t.A=rt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Tu(n.h,"t",r),t.C=0,n=t.l.H,t.h=new pu,t.g=qu(t.l,n?e:null,!t.s),0<t.O&&(t.L=new sm(Se(t.Ia,t,t.g),t.O)),cu(t.V,t.g,"readystatechange",t.gb),e=t.H?Ql(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qn(1),im(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&tt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=tt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ti||this.g&&(this.h.h||this.g.ga()||qa(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Qn(3):Qn(2)),Ss(this);var n=this.g.ba();this.N=n;t:if(yu(this)){var r=qa(this.g);t="";var s=r.length,i=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){At(this),$n(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,om(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!es(a)){var l=a;break t}}l=null}if(n=l)Yt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Oi(this,n);else{this.i=!1,this.o=3,Pe(12),At(this),$n(this);break e}}this.U?(vu(this,u,o),Ti&&this.i&&u==3&&(cu(this.V,this.W,"tick",this.fb),this.W.start())):(Yt(this.j,this.m,o,null),Oi(this,o)),u==4&&At(this),this.i&&!this.I&&(u==4?Fu(this.l,this):(this.i=!1,vr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),At(this),$n(this)}}}catch{}finally{}};function yu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function vu(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=um(t,n),s==ns){e==4&&(t.o=4,Pe(14),r=!1),Yt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ri){t.o=4,Pe(15),Yt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yt(t.j,t.m,s,null),Oi(t,s);yu(t)&&s!=ns&&s!=Ri&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ro(e),e.L=!0,Pe(11))):(Yt(t.j,t.m,n,"[Invalid Chunked Response]"),At(t),$n(t))}D.fb=function(){if(this.g){var t=tt(this.g),e=this.g.ga();this.C<e.length&&(Ss(this),vu(this,t,e),this.i&&t!=4&&vr(this))}};function um(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ns:(n=Number(e.substring(n,r)),isNaN(n)?Ri:(r+=1,r+n>e.length?ns:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,At(this)};function vr(t){t.Y=Date.now()+t.P,_u(t,t.P)}function _u(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pr(Se(t.eb,t),e)}function Ss(t){t.B&&(z.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(am(this.j,this.A),this.K!=2&&(Qn(3),Pe(17)),At(this),this.o=2,$n(this)):_u(this,this.Y-t)};function $n(t){t.l.G==0||t.I||Fu(t.l,t)}function At(t){Ss(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,yo(t.W),lu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Oi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pi(n.i,t))){if(n.I=t.N,!t.J&&Pi(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)os(n),Ds(n);else break e;Do(n),Pe(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=pr(Se(n.ab,n),6e3));if(1>=ku(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ct(n,11)}else if((t.J||n.g==t)&&os(n),!es(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(Ne(m,"spdy")||Ne(m,"quic")||Ne(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(bo(i,i.h),i.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,le(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ju(r,r.H?r.la:null,r.W),o.J){Au(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ss(a),vr(a)),r.g=o}else xu(r);0<n.l.length&&Rs(n)}else l[0]!="stop"&&l[0]!="close"||Ct(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ct(n,7):Co(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Qn(4)}catch{}}function hm(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ii(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Io(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ii(t)||typeof t=="string")Wl(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ii(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=hm(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function En(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof En)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=En.prototype;D.R=function(){To(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return To(this),this.g.concat()};function To(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Vt(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Vt(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Vt(this.h,t)?this.h[t]:e};D.set=function(t,e){Vt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var wu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function dm(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Bt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Bt){this.g=e!==void 0?e:t.g,rs(this,t.j),this.s=t.s,ss(this,t.i),is(this,t.m),this.l=t.l,e=t.h;var n=new Xn;n.i=e.i,e.g&&(n.g=new En(e.g),n.h=e.h),Va(this,n),this.o=t.o}else t&&(n=String(t).match(wu))?(this.g=!!e,rs(this,n[1]||"",!0),this.s=xn(n[2]||""),ss(this,n[3]||"",!0),is(this,n[4]),this.l=xn(n[5]||"",!0),Va(this,n[6]||"",!0),this.o=xn(n[7]||"")):(this.g=!!e,this.h=new Xn(null,this.g))}Bt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(On(e,Ba,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(On(e,Ba,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(On(n,n.charAt(0)=="/"?ym:mm,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",On(n,_m)),t.join("")};function rt(t){return new Bt(t)}function rs(t,e,n){t.j=n?xn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ss(t,e,n){t.i=n?xn(e,!0):e}function is(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Va(t,e,n){e instanceof Xn?(t.h=e,wm(t.h,t.g)):(n||(e=On(e,vm)),t.h=new Xn(e,t.g))}function le(t,e,n){t.h.set(e,n)}function ks(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fm(t){return t instanceof Bt?rt(t):new Bt(t,void 0)}function gm(t,e,n,r){var s=new Bt(null,void 0);return t&&rs(s,t),e&&ss(s,e),n&&is(s,n),r&&(s.l=r),s}function xn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function On(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pm),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pm(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ba=/[#\/\?@]/g,mm=/[#\?:]/g,ym=/[#\?]/g,vm=/[#\?@]/g,_m=/#/g;function Xn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Et(t){t.g||(t.g=new En,t.h=0,t.i&&dm(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Xn.prototype;D.add=function(t,e){Et(this),this.i=null,t=In(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Eu(t,e){Et(t),e=In(t,e),Vt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Vt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&To(t)))}function Iu(t,e){return Et(t),e=In(t,e),Vt(t.g.h,e)}D.forEach=function(t,e){Et(this),this.g.forEach(function(n,r){Wl(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){Et(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){Et(this);var e=[];if(typeof t=="string")Iu(this,t)&&(e=Na(e,this.g.get(In(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Na(e,t[n])}return e};D.set=function(t,e){return Et(this),this.i=null,t=In(this,t),Iu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Tu(t,e,n){Eu(t,e),0<n.length&&(t.i=null,t.g.set(In(t,e),ao(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function In(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wm(t,e){e&&!t.j&&(Et(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Eu(this,r),Tu(this,s,n))},t)),t.j=e}var Em=class{constructor(t,e){this.h=t,this.g=e}};function bu(t){this.l=t||Im,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Im=10;function Su(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ku(t){return t.h?1:t.g?t.g.size:0}function Pi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bo(t,e){t.g?t.g.add(e):t.h=e}function Au(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bu.prototype.cancel=function(){if(this.i=Cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ao(t.i)}function So(){}So.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};So.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function Tm(){this.g=new So}function bm(t,e,n){const r=n||"";try{Io(t,function(s,i){let o=s;fr(s)&&(o=po(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Sm(t,e){const n=new Es;if(z.Image){const r=new Image;r.onload=Dr(Nr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Dr(Nr,n,r,"TestLoadImage: error",!1,e),r.onabort=Dr(Nr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Dr(Nr,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Nr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function _r(t){this.l=t.$b||null,this.j=t.ib||!1}Ce(_r,_o);_r.prototype.g=function(){return new As(this.l,this.j)};_r.prototype.i=function(t){return function(){return t}}({});function As(t,e){we.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ko,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(As,we);var ko=0;D=As.prototype;D.open=function(t,e){if(this.readyState!=ko)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yn(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=ko};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Du(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Du(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wr(this):Yn(this),this.readyState==3&&Du(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,wr(this))};D.Ta=function(t){this.g&&(this.response=t,wr(this))};D.ha=function(){this.g&&wr(this)};function wr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yn(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var km=z.JSON.parse;function pe(t){we.call(this),this.headers=new En,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ru,this.K=this.L=!1}Ce(pe,we);var Ru="",Am=/^https?$/i,Cm=["POST","PUT"];D=pe.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Di.g(),this.C=this.u?Fa(this.u):Fa(Di),this.g.onreadystatechange=Se(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ja(this,i);return}t=n||"";const s=new En(this.headers);r&&Io(r,function(i,o){s.set(o,i)}),r=Fp(s.T()),n=z.FormData&&t instanceof z.FormData,!(0<=Gl(Cm,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pu(this),0<this.B&&((this.K=Dm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.pa,this)):this.A=vo(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ja(this,i)}};function Dm(t){return un&&zp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Rm(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof oo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function ja(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nu(t),Cs(t)}function Nu(t){t.D||(t.D=!0,ke(t,"complete"),ke(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),Cs(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cs(this,!0)),pe.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Ou(this):this.cb())};D.cb=function(){Ou(this)};function Ou(t){if(t.h&&typeof oo!="undefined"&&(!t.C[1]||tt(t)!=4||t.ba()!=2)){if(t.v&&tt(t)==4)vo(t.Fa,0,t);else if(ke(t,"readystatechange"),tt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(wu)[1]||null;if(!s&&z.self&&z.self.location){var i=z.self.location.protocol;s=i.substr(0,i.length-1)}r=!Am.test(s?s.toLowerCase():"")}n=r}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var o=2<tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Nu(t)}}finally{Cs(t)}}}}function Cs(t,e){if(t.g){Pu(t);const n=t.g,r=t.C[0]?Zr:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function tt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),km(e)}};function qa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ru:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nm(t){let e="";return co(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ao(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Nm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function An(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lu(t){this.za=0,this.l=[],this.h=new Es,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=An("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=An("baseRetryDelayMs",5e3,t),this.$a=An("retryDelaySeedMs",1e4,t),this.Ya=An("forwardChannelMaxRetries",2,t),this.ra=An("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bu(t&&t.concurrentRequestLimit),this.Ca=new Tm,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Lu.prototype;D.ma=8;D.G=1;function Co(t){if(Mu(t),t.G==3){var e=t.V++,n=rt(t.F);le(n,"SID",t.J),le(n,"RID",e),le(n,"TYPE","terminate"),Er(t,n),e=new yr(t,t.h,e,void 0),e.K=2,e.v=ks(rt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=qu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),vr(e)}Bu(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ds(t){t.g&&(Ro(t),t.g.cancel(),t.g=null)}function Mu(t){Ds(t),t.u&&(z.clearTimeout(t.u),t.u=null),os(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ii(t,e){t.l.push(new Em(t.Za++,e)),t.G==3&&Rs(t)}function Rs(t){Su(t.i)||t.m||(t.m=!0,mo(t.Ha,t),t.C=0)}function Om(t,e){return ku(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=pr(Se(t.Ha,t,e),Vu(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new yr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ql(i),Xl(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$u(this,s,e),n=rt(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),Er(this,n),this.o&&i&&Ao(n,this.o,i),bo(this.i,s),this.Ra&&le(n,"TYPE","init"),this.ja?(le(n,"$req",e),le(n,"SID","null"),s.$=!0,Ni(s,n,null)):Ni(s,n,e),this.G=2}}else this.G==3&&(t?za(this,t):this.l.length==0||Su(this.i)||za(this))};function za(t,e){var n;e?n=e.m:n=t.V++;const r=rt(t.F);le(r,"SID",t.J),le(r,"RID",n),le(r,"AID",t.U),Er(t,r),t.o&&t.s&&Ao(r,t.o,t.s),n=new yr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$u(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bo(t.i,n),Ni(n,r,e)}function Er(t,e){t.j&&Io({},function(n,r){le(e,r,n)})}function $u(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Se(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{bm(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function xu(t){t.g||t.u||(t.Y=1,mo(t.Ga,t),t.A=0)}function Do(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=pr(Se(t.Ga,t),Vu(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Uu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pr(Se(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pe(10),Ds(this),Uu(this))};function Ro(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Uu(t){t.g=new yr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=rt(t.oa);le(e,"RID","rpc"),le(e,"SID",t.J),le(e,"CI",t.N?"0":"1"),le(e,"AID",t.U),Er(t,e),le(e,"TYPE","xmlhttp"),t.o&&t.s&&Ao(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ks(rt(e)),n.s=null,n.U=!0,mu(n,t)}D.ab=function(){this.v!=null&&(this.v=null,Ds(this),Do(this),Pe(19))};function os(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Fu(t,e){var n=null;if(t.g==e){os(t),Ro(t),t.g=null;var r=2}else if(Pi(t.i,e))n=e.D,Au(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Is(),ke(r,new du(r,n,e,s)),Rs(t)}else xu(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&Om(t,e)||r==2&&Do(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ct(t,5);break;case 4:Ct(t,10);break;case 3:Ct(t,6);break;default:Ct(t,2)}}}function Vu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ct(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Se(t.jb,t);n||(n=new Bt("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||rs(n,"https"),ks(n)),Sm(n.toString(),r)}else Pe(2);t.G=0,t.j&&t.j.va(e),Bu(t),Mu(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pe(2)):(this.h.info("Failed to ping google.com"),Pe(1))};function Bu(t){t.G=0,t.I=-1,t.j&&((Cu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ao(t.l),t.l.length=0),t.j.ua())}function ju(t,e,n){let r=fm(n);if(r.i!="")e&&ss(r,e+"."+r.i),is(r,r.m);else{const s=z.location;r=gm(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&co(t.aa,function(s,i){le(r,i,s)}),e=t.D,n=t.sa,e&&n&&le(r,e,n),le(r,"VER",t.ma),Er(t,r),r}function qu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new pe(new _r({ib:!0})):new pe(t.qa),e.L=t.H,e}function zu(){}D=zu.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function as(){if(un&&!(10<=Number(Hp)))throw Error("Environmental error: no available transport.")}as.prototype.g=function(t,e){return new Ve(t,e)};function Ve(t,e){we.call(this),this.g=new Lu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!es(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!es(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tn(this)}Ce(Ve,we);Ve.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),mo(Se(t.hb,t,e))),Pe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ju(t,null,t.W),Rs(t)};Ve.prototype.close=function(){Co(this.g)};Ve.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ii(this.g,e)}else this.v?(e={},e.__data__=po(t),ii(this.g,e)):ii(this.g,t)};Ve.prototype.M=function(){this.g.j=null,delete this.j,Co(this.g),delete this.g,Ve.Z.M.call(this)};function Hu(t){wo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(Hu,wo);function Ku(){Eo.call(this),this.status=1}Ce(Ku,Eo);function Tn(t){this.g=t}Ce(Tn,zu);Tn.prototype.xa=function(){ke(this.g,"a")};Tn.prototype.wa=function(t){ke(this.g,new Hu(t))};Tn.prototype.va=function(t){ke(this.g,new Ku(t))};Tn.prototype.ua=function(){ke(this.g,"b")};as.prototype.createWebChannel=as.prototype.g;Ve.prototype.send=Ve.prototype.u;Ve.prototype.open=Ve.prototype.m;Ve.prototype.close=Ve.prototype.close;Ts.NO_ERROR=0;Ts.TIMEOUT=8;Ts.HTTP_ERROR=6;fu.COMPLETE="complete";gu.EventType=mr;mr.OPEN="a";mr.CLOSE="b";mr.ERROR="c";mr.MESSAGE="d";we.prototype.listen=we.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.La;pe.prototype.getLastErrorCode=pe.prototype.Da;pe.prototype.getStatus=pe.prototype.ba;pe.prototype.getResponseJson=pe.prototype.Qa;pe.prototype.getResponseText=pe.prototype.ga;pe.prototype.send=pe.prototype.ea;var Pm=function(){return new as},Lm=function(){return Is()},oi=Ts,Mm=fu,$m=Ht,Ha={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},xm=_r,Or=gu,Um=pe;const Ka="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Gi("@firebase/firestore");function Ga(){return jt.logLevel}function L(t,...e){if(jt.logLevel<=Z.DEBUG){const n=e.map(No);jt.debug(`Firestore (${bn}): ${t}`,...n)}}function st(t,...e){if(jt.logLevel<=Z.ERROR){const n=e.map(No);jt.error(`Firestore (${bn}): ${t}`,...n)}}function Wa(t,...e){if(jt.logLevel<=Z.WARN){const n=e.map(No);jt.warn(`Firestore (${bn}): ${t}`,...n)}}function No(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: `+t;throw st(e),new Error(e)}function ge(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class Bm{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new Fm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new $e(e)}}class jm{constructor(e,n,r){this.type="FirstParty",this.user=$e.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class qm{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new jm(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hm{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.p=n.token,new zm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Km(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function hn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Fe(0,0))}static max(){return new W(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Jn{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const Gm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Jn{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return Gm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ue.fromString(e))}static fromName(e){return new U(ue.fromString(e).popFirst(5))}static empty(){return new U(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ue(e.slice()))}}function Wm(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new pt(s,U.empty(),e)}function Qm(t){return new pt(t.readTime,t.key,-1)}class pt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pt(W.min(),U.empty(),-1)}static max(){return new pt(W.max(),U.empty(),-1)}}function Xm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==Ym)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(s=>s?I.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new I((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new I((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ir(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Po{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Po.ot=-1;class Ee{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ie.RED,this.left=s!=null?s:Ie.EMPTY,this.right=i!=null?i:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ie(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xa(this.data.getIterator())}getIteratorFrom(e){return new Xa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class Xa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new me(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ae(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ae(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const ey=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(t){if(ge(!!t),typeof t=="string"){let e=0;const n=ey.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dn(t){return typeof t=="string"?Ae.fromBase64String(t):Ae.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qu(t){const e=t.mapValue.fields.__previous_value__;return Wu(e)?Qu(e):e}function Zn(t){const e=mt(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class fn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){return t==null}function Li(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wu(t)?4:ny(t)?9007199254740991:10:G()}function Xe(t,e){if(t===e)return!0;const n=qt(t);if(n!==qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zn(t).isEqual(Zn(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=mt(r.timestampValue),o=mt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return dn(r.bytesValue).isEqual(dn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return fe(r.geoPointValue.latitude)===fe(s.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return fe(r.integerValue)===fe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=fe(r.doubleValue),o=fe(s.doubleValue);return i===o?Li(i)===Li(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return hn(t.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Qa(i)!==Qa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xe(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function er(t,e){return(t.values||[]).find(n=>Xe(n,e))!==void 0}function gn(t,e){if(t===e)return 0;const n=qt(t),r=qt(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=fe(s.integerValue||s.doubleValue),a=fe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ya(t.timestampValue,e.timestampValue);case 4:return Ya(Zn(t),Zn(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,i){const o=dn(s),a=dn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ne(fe(s.latitude),fe(i.latitude));return o!==0?o:ne(fe(s.longitude),fe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=gn(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Lr.mapValue&&i===Lr.mapValue)return 0;if(s===Lr.mapValue)return 1;if(i===Lr.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=gn(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Ya(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=mt(t),r=mt(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function rn(t){return Mi(t)}function Mi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=mt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?dn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Mi(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Mi(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function $i(t){return!!t&&"integerValue"in t}function Lo(t){return!!t&&"arrayValue"in t}function Ja(t){return!!t&&"nullValue"in t}function Za(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ai(t){return!!t&&"mapValue"in t}function Un(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Un(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Un(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ny(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ai(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Un(n)}setAll(e){let n=xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Un(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ai(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ns(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(Un(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Te(e,0,W.min(),W.min(),Ke.empty(),0)}static newFoundDocument(e,n,r){return new Te(e,1,n,W.min(),r,0)}static newNoDocument(e,n){return new Te(e,2,n,W.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new Te(e,3,n,W.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function ec(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ry(t,e,n,r,s,i,o)}function Mo(t){const e=J(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+rn(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Os(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rn(r)).join(",")),e.ut=n}return e.ut}function sy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${rn(r.value)}`;var r}).join(", ")}]`),Os(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>rn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>rn(n)).join(",")),`Target(${e})`}function $o(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!dy(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Xe(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nc(t.startAt,e.startAt)&&nc(t.endAt,e.endAt)}function xi(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ue extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new iy(e,n,r):n==="array-contains"?new cy(e,r):n==="in"?new ly(e,r):n==="not-in"?new uy(e,r):n==="array-contains-any"?new hy(e,r):new Ue(e,n,r)}static ct(e,n,r){return n==="in"?new oy(e,r):new ay(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(gn(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.at(gn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class iy extends Ue{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.at(n)}}class oy extends Ue{constructor(e,n){super(e,"in",n),this.keys=Xu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ay extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Xu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class cy extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lo(n)&&er(n.arrayValue,this.value)}}class ly extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&er(this.value.arrayValue,n)}}class uy extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!er(this.value.arrayValue,n)}}class hy extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>er(this.value.arrayValue,r))}}class cs{constructor(e,n){this.position=e,this.inclusive=n}}class Fn{constructor(e,n="asc"){this.field=e,this.dir=n}}function dy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tc(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=gn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function fy(t,e,n,r,s,i,o,a){return new Ps(t,e,n,r,s,i,o,a)}function xo(t){return new Ps(t)}function rc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function py(t){for(const e of t.filters)if(e.ht())return e.field;return null}function my(t){return t.collectionGroup!==null}function tr(t){const e=J(t);if(e.lt===null){e.lt=[];const n=py(e),r=gy(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Fn(n)),e.lt.push(new Fn(xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Fn(xe.keyField(),i))}}}return e.lt}function it(t){const e=J(t);if(!e.ft)if(e.limitType==="F")e.ft=ec(e.path,e.collectionGroup,tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of tr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Fn(i.field,o))}const r=e.endAt?new cs(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new cs(e.startAt.position,e.startAt.inclusive):null;e.ft=ec(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function Ui(t,e,n){return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ls(t,e){return $o(it(t),it(e))&&t.limitType===e.limitType}function Yu(t){return`${Mo(it(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${sy(it(t))}; limitType=${t.limitType})`}function Uo(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):U.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=tc(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,tr(n),r)||n.endAt&&!function(s,i,o){const a=tc(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,tr(n),r))}(t,e)}function yy(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ju(t){return(e,n)=>{let r=!1;for(const s of tr(t)){const i=vy(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vy(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?gn(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function wy(t){return{integerValue:""+t}}/**
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
 */class Ms{constructor(){this._=void 0}}function Ey(t,e,n){return t instanceof Vi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ls?Zu(t,e):t instanceof us?eh(t,e):function(r,s){const i=Ty(r,s),o=sc(i)+sc(r._t);return $i(i)&&$i(r._t)?wy(o):_y(r.wt,o)}(t,e)}function Iy(t,e,n){return t instanceof ls?Zu(t,e):t instanceof us?eh(t,e):n}function Ty(t,e){return t instanceof Bi?$i(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Vi extends Ms{}class ls extends Ms{constructor(e){super(),this.elements=e}}function Zu(t,e){const n=th(e);for(const r of t.elements)n.some(s=>Xe(s,r))||n.push(r);return{arrayValue:{values:n}}}class us extends Ms{constructor(e){super(),this.elements=e}}function eh(t,e){let n=th(e);for(const r of t.elements)n=n.filter(s=>!Xe(s,r));return{arrayValue:{values:n}}}class Bi extends Ms{constructor(e,n){super(),this.wt=e,this._t=n}}function sc(t){return fe(t.integerValue||t.doubleValue)}function th(t){return Lo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function by(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ls&&r instanceof ls||n instanceof us&&r instanceof us?hn(n.elements,r.elements,Xe):n instanceof Bi&&r instanceof Bi?Xe(n._t,r._t):n instanceof Vi&&r instanceof Vi}(t.transform,e.transform)}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fo{}function nh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ky(t.key,Pt.none()):new Vo(t.key,t.data,Pt.none());{const n=t.data,r=Ke.empty();let s=new me(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $s(t.key,r,new Ot(s.toArray()),Pt.none())}}function Sy(t,e,n){t instanceof Vo?function(r,s,i){const o=r.value.clone(),a=oc(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(r,s,i){if(!jr(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=oc(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(rh(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Vn(t,e,n,r){return t instanceof Vo?function(s,i,o,a){if(!jr(s.precondition,i))return o;const c=s.value.clone(),l=ac(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof $s?function(s,i,o,a){if(!jr(s.precondition,i))return o;const c=ac(s.fieldTransforms,a,i),l=i.data;return l.setAll(rh(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return jr(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function ic(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hn(n,r,(s,i)=>by(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends Fo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends Fo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function oc(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Iy(o,a,n[s]))}return r}function ac(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ey(i,o,e))}return r}class ky extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,X;function sh(t){if(t===void 0)return st("GRPC error has no .code"),k.UNKNOWN;switch(t){case de.OK:return k.OK;case de.CANCELLED:return k.CANCELLED;case de.UNKNOWN:return k.UNKNOWN;case de.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case de.INTERNAL:return k.INTERNAL;case de.UNAVAILABLE:return k.UNAVAILABLE;case de.UNAUTHENTICATED:return k.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case de.NOT_FOUND:return k.NOT_FOUND;case de.ALREADY_EXISTS:return k.ALREADY_EXISTS;case de.PERMISSION_DENIED:return k.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case de.ABORTED:return k.ABORTED;case de.OUT_OF_RANGE:return k.OUT_OF_RANGE;case de.UNIMPLEMENTED:return k.UNIMPLEMENTED;case de.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(X=de||(de={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Ee(U.comparator);function yt(){return Cy}const ih=new Ee(U.comparator);function Pn(...t){let e=ih;for(const n of t)e=e.insert(n.key,n);return e}function Dy(t){let e=ih;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dt(){return Bn()}function oh(){return Bn()}function Bn(){return new Sn(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ee(U.comparator);const Ry=new me(U.comparator);function Y(...t){let e=Ry;for(const n of t)e=e.add(n);return e}const Ny=new me(ne);function ah(){return Ny}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Tr.createSynthesizedTargetChangeForCurrentChange(e,n)),new xs(W.min(),r,ah(),yt(),Y())}}class Tr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Tr(Ae.EMPTY_BYTE_STRING,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class ch{constructor(e,n){this.targetId=e,this.It=n}}class lh{constructor(e,n,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class cc{constructor(){this.Tt=0,this.Et=uc(),this.At=Ae.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Y(),n=Y(),r=Y();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Tr(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=uc()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Oy{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=yt(),this.Bt=lc(),this.Lt=new me(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(xi(i))if(r===0){const o=new U(i.path);this.Kt(n,o,Te.newNoDocument(o,W.min()))}else ge(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&xi(a.target)){const c=new U(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Te.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=Y();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new xs(e,n,this.Lt,this.$t,r);return this.$t=yt(),this.Bt=lc(),this.Lt=new me(ne),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new cc,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new me(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new cc),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function lc(){return new Ee(U.comparator)}function uc(){return new Ee(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ly=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class My{constructor(e,n){this.databaseId=e,this.dt=n}}function $y(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xy(t,e){return t.dt?e.toBase64():e.toUint8Array()}function nr(t){return ge(!!t),W.fromTimestamp(function(e){const n=mt(e);return new Fe(n.seconds,n.nanos)}(t))}function Uy(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uh(t){const e=ue.fromString(t);return ge(fh(e)),e}function ci(t,e){const n=uh(e);if(n.get(1)!==t.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(hh(n))}function ji(t,e){return Uy(t.databaseId,e)}function Fy(t){const e=uh(t);return e.length===4?ue.emptyPath():hh(e)}function hc(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hh(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vy(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(ge(l===void 0||typeof l=="string"),Ae.fromBase64String(l||"")):(ge(l===void 0||l instanceof Uint8Array),Ae.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:sh(c.code);return new j(l,c.message||"")}(o);n=new lh(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ci(t,r.document.name),i=nr(r.document.updateTime),o=new Ke({mapValue:{fields:r.document.fields}}),a=Te.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new qr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ci(t,r.document),i=r.readTime?nr(r.readTime):W.min(),o=Te.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ci(t,r.document),i=r.removedTargetIds||[];n=new qr([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Ay(s),o=r.targetId;n=new ch(o,i)}}return n}function By(t,e){return{documents:[ji(t,e.path)]}}function jy(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ji(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ji(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Za(h.value))return{unaryFilter:{field:Wt(h.field),op:"IS_NAN"}};if(Ja(h.value))return{unaryFilter:{field:Wt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Za(h.value))return{unaryFilter:{field:Wt(h.field),op:"IS_NOT_NAN"}};if(Ja(h.value))return{unaryFilter:{field:Wt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(h.field),op:Ky(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Wt(u.field),direction:Hy(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||Os(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function qy(t){let e=Fy(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=dh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Fn(Jt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Os(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new cs(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new cs(d,h)}(n.endAt)),fy(e,s,o,i,a,"F",c,l)}function zy(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function dh(t){return t?t.unaryFilter!==void 0?[Wy(t)]:t.fieldFilter!==void 0?[Gy(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>dh(e)).reduce((e,n)=>e.concat(n)):G():[]}function Hy(t){return Py[t]}function Ky(t){return Ly[t]}function Wt(t){return{fieldPath:t.canonicalString()}}function Jt(t){return xe.fromServerFormat(t.fieldPath)}function Gy(t){return Ue.create(Jt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function Wy(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jt(t.unaryFilter.field);return Ue.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jt(t.unaryFilter.field);return Ue.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jt(t.unaryFilter.field);return Ue.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jt(t.unaryFilter.field);return Ue.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function fh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Sy(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oh();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=nh(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&hn(this.mutations,e.mutations,(n,r)=>ic(n,r))&&hn(this.baseMutations,e.baseMutations,(n,r)=>ic(n,r))}}/**
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
 */class Xy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Lt{constructor(e,n,r,s,i=W.min(),o=W.min(),a=Ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.ne=e}}function Jy(t){const e=qy({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ui(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.ze=new ev}addToCollectionParentIndex(e,n){return this.ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(pt.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class ev{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new me(ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new me(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new pn(0)}static Rn(){return new pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.changes=new Sn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nv{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Vn(r.mutation,s,Ot.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const s=Dt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Pn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=yt();const o=Bn(),a=Bn();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof $s)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Vn(u.mutation,l,u.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nv(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bn();let s=new Ee((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ot.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Y()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=oh();u.forEach(d=>{if(!i.has(d)){const g=nh(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return U.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):my(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):I.resolve(Dt());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:Dy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let s=Pn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Pn();return this.indexManager.getCollectionParents(e,s).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Ps(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Te.newInvalidDocument(l)))});let o=Pn();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Vn(l.mutation,c,Ot.empty(),Fe.now()),Uo(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Te.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return I.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:nr(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:Jy(r.bundledQuery),readTime:nr(r.readTime)}}(n)),I.resolve()}}/**
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
 */class iv{constructor(){this.overlays=new Ee(U.comparator),this.Xn=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dt();return I.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const s=Dt(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return I.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Dt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Dt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return I.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xy(n,r));let i=this.Xn.get(n);i===void 0&&(i=Y(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.Zn=new me(ve.ts),this.es=new me(ve.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new ve(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new ve(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new U(new ue([])),r=new ve(n,e),s=new ve(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new U(new ue([])),r=new ve(n,e),s=new ve(n,e+1);let i=Y();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ve(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return U.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new me(ve.ts)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qy(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ve(n,0),s=new ve(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(ne);return n.forEach(s=>{const i=new ve(s,0),o=new ve(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),I.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new ve(new U(i),0);let a=new me(ne);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),I.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return I.forEach(n.mutations,s=>{const i=new ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new ve(n,0),s=this.ds.firstAfterOrEqual(r);return I.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.ps=e,this.docs=new Ee(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(e,n){let r=yt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Te.newInvalidDocument(s))}),I.resolve(r)}getAllFromCollection(e,n,r){let s=yt();const i=new U(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Xm(Qm(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,s){G()}Is(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cv(this)}getSize(e){return I.resolve(this.size)}}class cv extends tv{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.persistence=e,this.Ts=new Sn(n=>Mo(n),$o),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Es=0,this.As=new Bo,this.targetCount=0,this.Rs=pn.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),I.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new pn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.vn(n),I.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),I.waitFor(i).next(()=>s)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Po(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new lv(this),this.indexManager=new Zy,this.remoteDocumentCache=function(r){return new av(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new Yy(n),this.Ds=new sv(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iv,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new ov(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new hv(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return I.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class hv extends Jm{constructor(e){super(),this.currentSequenceNumber=e}}class jo{constructor(e){this.persistence=e,this.ks=new Bo,this.Ms=null}static Os(e){return new jo(e)}get Fs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),I.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Fs,r=>{const s=U.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return I.or([()=>I.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=Y(),s=Y();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qo(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(rc(n))return I.resolve(null);let r=it(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ui(n,null,"F"),r=it(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Y(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,Ui(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,s){return rc(n)||s.isEqual(W.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(Ga()<=Z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fi(n)),this.Oi(e,o,n,Wm(s,-1)))})}ki(e,n){let r=new me(Ju(e));return n.forEach((s,i)=>{Uo(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return Ga()<=Z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.Di.getDocumentsMatchingQuery(e,n,pt.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Ee(ne),this.Bi=new Sn(i=>Mo(i),$o),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rv(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function gv(t,e,n,r){return new fv(t,e,n,r)}async function gh(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Y();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function ph(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function pv(t,e){const n=J(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ae.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(m,E,v){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,g,u)&&a.push(n.Vs.updateTargetData(i,g))});let c=yt(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(mv(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(W.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=s,i))}function mv(t,e,n){let r=Y(),s=Y();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=yt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function yv(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,I.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new Lt(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function qi(t,e,n){const r=J(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ir(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function dc(t,e,n){const r=J(t);let s=W.min(),i=Y();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Bi.get(l);return h!==void 0?I.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,it(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:W.min(),n?i:Y())).next(a=>(vv(r,yy(e),a),{documents:a,ji:i})))}function vv(t,e,n){let r=W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class fc{constructor(){this.activeTargetIds=ah()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _v{constructor(){this.Fr=new fc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new fc,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw Wa("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+bn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=Ev[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new Um;a.listenOnce(Mm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case oi.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),i(l);break;case oi.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(m)>=0?m:k.UNKNOWN}(h.status);o(new j(d,h.message))}else o(new j(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Pm(),o=Lm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new xm({})),this.uo(a.initMessageHeaders,n,r),ol()||cl()||yd()||ll()||vd()||al()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");L("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new Iv({jr:m=>{h?L("Connection","Not sending because WebChannel is closed:",m):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),g=(m,E,v)=>{m.listen(E,C=>{try{v(C)}catch(w){setTimeout(()=>{throw w},0)}})};return g(l,Or.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(l,Or.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.eo())}),g(l,Or.EventType.ERROR,m=>{h||(h=!0,Wa("Connection","WebChannel transport errored:",m),d.eo(new j(k.UNAVAILABLE,"The operation could not be completed")))}),g(l,Or.EventType.MESSAGE,m=>{var E;if(!h){const v=m.data[0];ge(!!v);const C=v,w=C.error||((E=C[0])===null||E===void 0?void 0:E.error);if(w){L("Connection","WebChannel received error:",w);const T=w.status;let O=function(V){const S=de[V];if(S!==void 0)return sh(S)}(T),b=w.message;O===void 0&&(O=k.INTERNAL,b="Unknown error status: "+T+" with message "+w.message),h=!0,d.eo(new j(O,b)),l.close()}else L("Connection","WebChannel received:",v),d.no(v)}}),g(o,$m.STAT_EVENT,m=>{m.stat===Ha.PROXY?L("Connection","Detected buffering proxy"):m.stat===Ha.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function li(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){return new My(t,!0)}class yh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new yh(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(st(n.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new j(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sv extends bv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Vy(this.wt,e),r=function(s){if(!("targetChange"in s))return W.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?nr(i.readTime):W.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=hc(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=xi(a)?{documents:By(s,a)}:{query:jy(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=xy(s,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=$y(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=zy(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=hc(this.wt),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(k.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(k.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Av{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(st(n),this.su=!1):L("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.lu.add(4),await br(c),c._u.set("Unknown"),c.lu.delete(4),await Us(c)}(this))})}),this._u=new Av(r,s)}}async function Us(t){if(Sr(t))for(const e of t.fu)await e(!0)}async function br(t){for(const e of t.fu)await e(!1)}function vh(t,e){const n=J(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ko(n)?Ho(n):kn(n).Co()&&zo(n,e))}function _h(t,e){const n=J(t),r=kn(n);n.hu.delete(e),r.Co()&&wh(n,e),n.hu.size===0&&(r.Co()?r.ko():Sr(n)&&n._u.set("Unknown"))}function zo(t,e){t.wu.Nt(e.targetId),kn(t).Qo(e)}function wh(t,e){t.wu.Nt(e),kn(t).jo(e)}function Ho(t){t.wu=new Oy({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),kn(t).start(),t._u.iu()}function Ko(t){return Sr(t)&&!kn(t).Do()&&t.hu.size>0}function Sr(t){return J(t).lu.size===0}function Eh(t){t.wu=void 0}async function Dv(t){t.hu.forEach((e,n)=>{zo(t,e)})}async function Rv(t,e){Eh(t),Ko(t)?(t._u.uu(e),Ho(t)):t._u.set("Unknown")}async function Nv(t,e,n){if(t._u.set("Online"),e instanceof lh&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pc(t,r)}else if(e instanceof qr?t.wu.Ut(e):e instanceof ch?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(W.min()))try{const r=await ph(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.hu.get(c);l&&s.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(Ae.EMPTY_BYTE_STRING,c.snapshotVersion)),wh(s,a);const l=new Lt(c.target,a,1,c.sequenceNumber);zo(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await pc(t,r)}}async function pc(t,e,n){if(!Ir(e))throw e;t.lu.add(1),await br(t),t._u.set("Offline"),n||(n=()=>ph(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Us(t)})}async function mc(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.lu.add(3),await br(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Us(n)}async function Ov(t,e){const n=J(t);e?(n.lu.delete(2),await Us(n)):e||(n.lu.add(2),await br(n),n._u.set("Unknown"))}function kn(t){return t.mu||(t.mu=function(e,n,r){const s=J(e);return s.tu(),new Sv(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:Dv.bind(null,t),Jr:Rv.bind(null,t),Go:Nv.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ko(t)?Ho(t):t._u.set("Unknown")):(await t.mu.stop(),Eh(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Go(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ih(t,e){if(st("AsyncQueue",`${e}: ${t}`),Ir(t))return new j(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Pn(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new sn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new sn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.yu=new Ee(U.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class mn{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new mn(e,n,sn.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ls(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.Iu=void 0,this.listeners=[]}}class Lv{constructor(){this.queries=new Sn(e=>Yu(e),Ls),this.onlineState="Unknown",this.Tu=new Set}}async function Mv(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Pv),s)try{i.Iu=await n.onListen(r)}catch(o){const a=Ih(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Wo(n)}async function $v(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xv(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Wo(n)}function Uv(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Wo(t){t.Tu.forEach(e=>{e.next()})}class Fv{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.key=e}}class bh{constructor(e){this.key=e}}class Vv{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Y(),this.mutatedKeys=Y(),this.Lu=Ju(e),this.Uu=new sn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new yc,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Uo(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;d&&g?d.data.isEqual(g.data)?m!==E&&(r.track({type:3,doc:g}),v=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),v=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),v=!0):d&&!g&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new mn(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new yc,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Y(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new bh(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new Th(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Y();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return mn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Bv{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jv{constructor(e){this.key=e,this.Xu=!1}}class qv{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Sn(a=>Yu(a),Ls),this.ec=new Map,this.nc=new Set,this.sc=new Ee(U.comparator),this.ic=new Map,this.rc=new Bo,this.oc={},this.uc=new Map,this.cc=pn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function zv(t,e){const n=Yv(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await yv(n.localStore,it(e));n.isPrimaryClient&&vh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Hv(n,e,r,a==="current")}return s}async function Hv(t,e,n,r){t.hc=(u,h,d)=>async function(g,m,E,v){let C=m.view.Ku(E);C.Mi&&(C=await dc(g.localStore,m.query,!1).then(({documents:O})=>m.view.Ku(O,C)));const w=v&&v.targetChanges.get(m.targetId),T=m.view.applyChanges(C,g.isPrimaryClient,w);return _c(g,m.targetId,T.zu),T.snapshot}(t,u,h,d);const s=await dc(t.localStore,e,!0),i=new Vv(e,s.ji),o=i.Ku(s.documents),a=Tr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);_c(t,n,c.zu);const l=new Bv(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Kv(t,e){const n=J(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!Ls(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_h(n.remoteStore,r.targetId),zi(n,r.targetId)}).catch(Oo)):(zi(n,r.targetId),await qi(n.localStore,r.targetId,!0))}async function Sh(t,e){const n=J(t);try{const r=await pv(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?ge(o.Xu):s.removedDocuments.size>0&&(ge(o.Xu),o.Xu=!1))}),await Ah(n,r,e)}catch(r){await Oo(r)}}function vc(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Wo(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gv(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Ee(U.comparator);o=o.insert(i,Te.newNoDocument(i,W.min()));const a=Y().add(i),c=new xs(W.min(),new Map,new me(ne),o,a);await Sh(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),Qo(r)}else await qi(r.localStore,e,!1).then(()=>zi(r,e,n)).catch(Oo)}function zi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||kh(t,r)})}function kh(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(_h(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Qo(t))}function _c(t,e,n){for(const r of n)r instanceof Th?(t.rc.addReference(r.key,e),Wv(t,r)):r instanceof bh?(L("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||kh(t,r.key)):G()}function Wv(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.nc.add(r),Qo(t))}function Qo(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new U(ue.fromString(e)),r=t.cc.next();t.ic.set(r,new jv(n)),t.sc=t.sc.insert(n,r),vh(t.remoteStore,new Lt(it(xo(n.path)),r,2,Po.ot))}}async function Ah(t,e,n){const r=J(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=qo.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ir(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,m)}}}(r.localStore,i))}async function Qv(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await gh(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new j(k.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ah(n,r.Ki)}}function Xv(t,e){const n=J(t),r=n.ic.get(e);if(r&&r.Xu)return Y().add(r.key);{let s=Y();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function Yv(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gv.bind(null,e),e.Zu.Go=xv.bind(null,e.eventManager),e.Zu.lc=Uv.bind(null,e.eventManager),e}class Jv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=mh(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return gv(this.persistence,new dv,e.initialUser,this.wt)}_c(e){return new uv(jo.Os,this.wt)}dc(e){return new _v}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qv.bind(null,this.syncEngine),await Ov(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Lv}createDatastore(e){const n=mh(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Tv(s));var s;return function(i,o,a,c){return new kv(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>vc(this.syncEngine,a,0),o=gc.V()?new gc:new wv,new Cv(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new qv(r,s,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);L("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await br(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class e_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):st("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$e.UNAUTHENTICATED,this.clientId=Gu.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ih(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function n_(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function r_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s_(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>mc(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>mc(e.remoteStore,i)),t.onlineComponents=e}async function s_(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await n_(t,new Jv)),t.offlineComponents}async function i_(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await r_(t,new Zv)),t.onlineComponents}async function wc(t){const e=await i_(t),n=e.eventManager;return n.onListen=zv.bind(null,e.syncEngine),n.onUnlisten=Kv.bind(null,e.syncEngine),n}const Ec=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e,n){if(!n)throw new j(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function o_(t,e,n,r){if(e===!0&&r===!0)throw new j(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ic(t){if(!U.isDocumentKey(t))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tc(t){if(U.isDocumentKey(t))throw new j(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function a_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ui(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=a_(t);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,o_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bc({}),this._settingsFrozen=!1,e instanceof fn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(s.options.projectId)}(e))}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vm;switch(n.type){case"gapi":const r=n.client;return ge(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new qm(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ec.get(e);n&&(L("ComponentProvider","Removing Datastore"),Ec.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class Fs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class ft extends Fs{constructor(e,n,r){super(e,n,xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new U(e))}withConverter(e){return new ft(this.firestore,e,this._path)}}function c_(t,e,...n){if(t=He(t),Ch("collection","path",e),t instanceof Xo){const r=ue.fromString(e,...n);return Tc(r),new ft(t,null,r)}{if(!(t instanceof Qe||t instanceof ft))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Tc(r),new ft(t.firestore,null,r)}}function l_(t,e,...n){if(t=He(t),arguments.length===1&&(e=Gu.I()),Ch("doc","path",e),t instanceof Xo){const r=ue.fromString(e,...n);return Ic(r),new Qe(t,null,new U(r))}{if(!(t instanceof Qe||t instanceof ft))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Ic(r),new Qe(t.firestore,t instanceof ft?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new yh(this,"async_queue_retry"),this.Kc=()=>{const n=li();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=li();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new nn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Ir(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw st("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=Go.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Sc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Hi extends Xo{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new u_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Dh(this),this._firestoreClient.terminate()}}function h_(t=fl()){return Qi(t,"firestore").getImmediate()}function d_(t){return t._firestoreClient||Dh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dh(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new ty(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new t_(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(Ae.fromBase64String(e))}catch(n){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const g_=new RegExp("[~\\*/\\[\\]]");function p_(t,e,n){if(e.search(g_)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rh(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(k.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m_ extends Nh{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?p_(t,e):e instanceof Rh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ph extends Nh{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zr extends Ph{data(e={}){return super.data(e)}}class y_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ln(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zr(this._firestore,this._userDataWriter,r.key,r,new Ln(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new zr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ln(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new zr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ln(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:v_(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function w_(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{convertValue(e,n="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Ns(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new f_(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const n=mt(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);ge(fh(r));const s=new fn(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(n)||st(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Lh extends E_{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function Ac(t,...e){var n,r,s;t=He(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sc(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Sc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Qe)l=ui(t.firestore,Hi),u=xo(t._key.path),c={next:h=>{e[o]&&e[o](I_(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ui(t,Fs);l=ui(h.firestore,Hi),u=h._query;const d=new Lh(l);c={next:g=>{e[o]&&e[o](new y_(l,d,h,g))},error:e[o+1],complete:e[o+2]},__(t._query)}return function(h,d,g,m){const E=new e_(m),v=new Fv(d,E,g);return h.asyncQueue.enqueueAndForget(async()=>Mv(await wc(h),v)),()=>{E.Tc(),h.asyncQueue.enqueueAndForget(async()=>$v(await wc(h),v))}}(d_(l),u,a,c)}function I_(t,e,n){const r=n.docs.get(e._key),s=new Lh(t);return new Ph(t,s,e._key,r,new Ln(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){bn=n})(ir),ln(new Mt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Hi(s,new Bm(n.getProvider("auth-internal")),new Hm(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),dt(Ka,"3.4.14",t),dt(Ka,"3.4.14","esm2017")})();const T_={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:11fa1fda0e14f1ac2dd021",measurementId:"G-27J3QXZ8YR"},Mh=Sf(T_),bt=Rp(Mh);_g(bt,xl);const Cc=h_(Mh),b_=new Ye,S_=()=>{const t={loggedIn:!1,user:null},{subscribe:e,update:n}=_n(t);return Ll(bt,r=>{n(r?s=>(s.loggedIn=!0,s.user=r,s):s=>(s.loggedIn=!1,s.user=null,s))}),{subscribe:e,async signUpWithEmail(r,s){return yg(bt,r,s)},async signInWithEmail(r,s){return vg(bt,r,s)},async signInWithGoogle(){return qg(bt,b_)},async signOut(){return wg(bt)}}};var Hr=S_();function k_(t){let e;return{c(){e=y("i"),f(e,"class","codicon codicon-account")},m(n,r){$(n,e,r)},p:F,d(n){n&&M(e)}}}function A_(t){let e,n;return{c(){e=y("img"),f(e,"class","profile-picture svelte-1rima2j"),an(e.src,n=t[0].user.photoURL)||f(e,"src",n),f(e,"alt","Account")},m(r,s){$(r,e,s)},p(r,s){s&1&&!an(e.src,n=r[0].user.photoURL)&&f(e,"src",n)},d(r){r&&M(e)}}}function C_(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,E,v,C,w;c=new dd({});function T(V,S){return V[0].loggedIn?A_:k_}let O=T(t),b=O(t);return{c(){e=y("header"),n=y("div"),r=y("a"),r.innerHTML='<i class="codicon codicon-github"></i>',s=B(),i=y("a"),i.innerHTML='<i class="codicon codicon-heart"></i>',o=B(),a=y("a"),re(c.$$.fragment),l=B(),u=y("nav"),h=y("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=B(),g=y("button"),g.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=B(),E=y("button"),b.c(),f(r,"title","Source Code"),f(r,"href","https://github.com/kurozenzen/kurosearch"),f(r,"target","_newtab"),f(r,"class","svelte-1rima2j"),f(i,"title","Sponsor"),f(i,"href","https://ko-fi.com/kurozenzen"),f(i,"target","_newtab"),f(i,"class","svelte-1rima2j"),f(a,"title","Discord Server"),f(a,"href","https://discord.gg/yyJFG5PVBZ"),f(a,"target","_newtab"),f(a,"class","svelte-1rima2j"),f(n,"class","svelte-1rima2j"),f(h,"title","Search"),f(h,"class","svelte-1rima2j"),f(g,"title","Settings"),f(g,"class","svelte-1rima2j"),f(E,"title","Account"),f(E,"class","svelte-1rima2j"),f(u,"class","svelte-1rima2j"),f(e,"role","navigation"),f(e,"class","svelte-1rima2j")},m(V,S){$(V,e,S),p(e,n),p(n,r),p(n,s),p(n,i),p(n,o),p(n,a),ee(c,a,null),p(e,l),p(e,u),p(u,h),p(u,d),p(u,g),p(u,m),p(u,E),b.m(E,null),v=!0,C||(w=[oe(h,"click",t[1]),oe(g,"click",t[2]),oe(E,"click",t[3])],C=!0)},p(V,[S]){O===(O=T(V))&&b?b.p(V,S):(b.d(1),b=O(V),b&&(b.c(),b.m(E,null)))},i(V){v||(A(c.$$.fragment,V),v=!0)},o(V){N(c.$$.fragment,V),v=!1},d(V){V&&M(e),te(c),b.d(),C=!1,ze(w)}}}function D_(t,e,n){let r;return qe(t,Hr,a=>n(0,r=a)),[r,()=>Rt.navigateTo("search"),()=>Rt.navigateTo("settings"),()=>Rt.navigateTo("account")]}class R_ extends ce{constructor(e){super(),ae(this,e,D_,C_,se,{})}}const N_=new IntersectionObserver(t=>{for(const e of t){if(e.target.src===void 0){console.warn("PostObserver is observing an invalid element",e.target);continue}e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):""}},{rootMargin:"1250px"}),vt=t=>t/1e6>=1?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString();function Qt(t,e){const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`}function Dc(t){const e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear();if(r)return Qt(r,"year");const s=n.getMonth()-e.getMonth();if(s)return Qt(s,"month");const i=(n.getTime()-e.getTime())/6e4;if(i===0)return"just now";if(i<60)return Qt(i,"minute");const o=i/60;if(o<24)return Qt(o,"hour");const a=o/24;if(a<7)return Qt(a,"day");const c=a/7;return c<5?Qt(c,"week"):"rip"}function yn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Kr=Object.freeze(["+","-","~"]),Vs=t=>Kr.includes(t),O_=t=>{if(!Vs(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(Kr.indexOf(t)+1)%Kr.length;return Kr[n]},P_=Object.freeze({"+":"","-":"-","~":""}),L_=t=>{if(!Vs(t))throw TypeError("Invalid modifier passed to serializeModifier");return P_[t]},M_=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),$h=t=>M_.includes(t),Bs=t=>typeof t=="string"&&t!=="",xh=t=>typeof t=="number"&&t>=0;class js{constructor(e,n){if(!Vs(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Bs(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${L_(this.modifier)}${this.name}`}}class ds{constructor(e,n,r,s){if(!Vs(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Bs(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!xh(r))throw TypeError("Invalid count passed to ActiveTag constructor");if(!$h(s))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=r,this.type=s,Object.freeze(this)}toSearchableTag(){return new js(this.modifier,this.name)}}function $_(){const t=[],{subscribe:e,update:n}=_n(t);return{subscribe:e,addOrReplace:r=>n(s=>{const i=s.findIndex(o=>o.name===r.name);return i===-1?s.push(r):s[i]=r,s}),addByName:r=>n(s=>(s.push(new ds("+",r,0,"general")),s)),removeByIndex:r=>n(s=>(s.splice(r,1),s))}}var on=$_();function x_(t){let e,n=yn(t[0])+"",r,s,i;return{c(){e=y("li"),r=he(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-1r7mf3i"),Be(e,"active",t[2])},m(o,a){$(o,e,a),p(e,r),s||(i=oe(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&n!==(n=yn(o[0])+"")&&be(r,n),a&4&&Be(e,"active",o[2])},i:F,o:F,d(o){o&&M(e),s=!1,i()}}}function U_(t,e,n){let r,s,i;qe(t,on,c=>n(3,i=c));let{name:o}=e;const a=()=>s?on.removeByIndex(r):on.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,r=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,s=r>=0)},[o,r,s,i,a]}class F_ extends ce{constructor(e){super(),ae(this,e,U_,x_,se,{name:0})}}const Uh=(t,e)=>{if(!Fh(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!V_(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Fh=t=>{try{return new URL(t),!0}catch{return!1}},V_=t=>t===null||t instanceof AbortController;function B_(t){let e,n;return{c(){e=y("span"),n=he(t[0])},m(r,s){$(r,e,s),p(e,n)},p(r,s){s&1&&be(n,r[0])},d(r){r&&M(e)}}}function j_(t){let e,n=t[1].hostname+"",r,s;return{c(){e=y("a"),r=he(n),f(e,"href",s=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-1qmyyls")},m(i,o){$(i,e,o),p(e,r)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&be(r,n),o&2&&s!==(s=i[1].toString())&&f(e,"href",s)},d(i){i&&M(e)}}}function q_(t){let e,n,r;function s(a,c){return a[1]?j_:B_}let i=s(t),o=i(t);return{c(){e=y("i"),n=B(),o.c(),r=fs(),f(e,"class","codicon codicon-link")},m(a,c){$(a,e,c),$(a,n,c),o.m(a,c),$(a,r,c)},p(a,[c]){i===(i=s(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(r.parentNode,r)))},i:F,o:F,d(a){a&&M(e),a&&M(n),o.d(a),a&&M(r)}}}function z_(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(0,s=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=Fh(s)?new URL(s):null)},[s,r]}class H_ extends ce{constructor(e){super(),ae(this,e,z_,q_,se,{source:0})}}function Rc(t,e,n){const r=t.slice();return r[1]=e[n],r}function Nc(t){let e,n,r;return n=new H_({props:{source:t[0].source}}),{c(){e=y("div"),re(n.$$.fragment),f(e,"class","svelte-5x11c6")},m(s,i){$(s,e,i),ee(n,e,null),r=!0},p(s,i){const o={};i&1&&(o.source=s[0].source),n.$set(o)},i(s){r||(A(n.$$.fragment,s),r=!0)},o(s){N(n.$$.fragment,s),r=!1},d(s){s&&M(e),te(n)}}}function Oc(t){let e,n;return e=new F_({props:{name:t[1]}}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.name=r[1]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function K_(t){let e,n,r,s,i,o=Dc(t[0].created_at)+"",a,c,l,u,h,d,g=vt(t[0].score)+"",m,E,v,C,w,T=t[0].source&&Nc(t),O=t[0].tags,b=[];for(let S=0;S<O.length;S+=1)b[S]=Oc(Rc(t,O,S));const V=S=>N(b[S],1,1,()=>{b[S]=null});return{c(){e=y("div"),n=y("div"),r=y("i"),s=B(),i=y("span"),a=he(o),c=B(),l=y("div"),u=y("i"),h=B(),d=y("span"),m=he(g),E=B(),T&&T.c(),v=B(),C=y("ul");for(let S=0;S<b.length;S+=1)b[S].c();f(r,"class","codicon codicon-calendar"),f(i,"class","svelte-5x11c6"),f(n,"class","svelte-5x11c6"),f(u,"class","codicon codicon-heart"),f(d,"class","svelte-5x11c6"),f(l,"class","svelte-5x11c6"),f(e,"class","summary svelte-5x11c6"),f(C,"class","svelte-5x11c6")},m(S,P){$(S,e,P),p(e,n),p(n,r),p(n,s),p(n,i),p(i,a),p(e,c),p(e,l),p(l,u),p(l,h),p(l,d),p(d,m),p(e,E),T&&T.m(e,null),$(S,v,P),$(S,C,P);for(let H=0;H<b.length;H+=1)b[H].m(C,null);w=!0},p(S,[P]){if((!w||P&1)&&o!==(o=Dc(S[0].created_at)+"")&&be(a,o),(!w||P&1)&&g!==(g=vt(S[0].score)+"")&&be(m,g),S[0].source?T?(T.p(S,P),P&1&&A(T,1)):(T=Nc(S),T.c(),A(T,1),T.m(e,null)):T&&(Le(),N(T,1,1,()=>{T=null}),Me()),P&1){O=S[0].tags;let H;for(H=0;H<O.length;H+=1){const K=Rc(S,O,H);b[H]?(b[H].p(K,P),A(b[H],1)):(b[H]=Oc(K),b[H].c(),A(b[H],1),b[H].m(C,null))}for(Le(),H=O.length;H<b.length;H+=1)V(H);Me()}},i(S){if(!w){A(T);for(let P=0;P<O.length;P+=1)A(b[P]);w=!0}},o(S){N(T),b=b.filter(Boolean);for(let P=0;P<b.length;P+=1)N(b[P]);w=!1},d(S){S&&M(e),T&&T.d(),S&&M(v),S&&M(C),zt(b,S)}}}function G_(t,e,n){let{post:r}=e;return t.$$set=s=>{"post"in s&&n(0,r=s.post)},[r]}class W_ extends ce{constructor(e){super(),ae(this,e,G_,K_,se,{post:0})}}function Q_(t){let e,n,r,s,i,o;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){$(a,e,c),t[6](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&M(e),t[6](null)}}}function X_(t){let e,n,r,s,i,o;return{c(){e=y("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-1xnjrgd")},m(a,c){$(a,e,c),t[5](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&M(e),t[5](null)}}}function Y_(t){let e,n,r,s,i,o;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){$(a,e,c),t[4](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&M(e),t[4](null)}}}function Pc(t){let e,n;return e=new W_({props:{post:t[0]}}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function J_(t){let e,n,r,s,i,o;function a(h,d){return h[0].type==="image"?Y_:h[0].type==="video"?X_:Q_}let c=a(t),l=c(t),u=t[2]&&Pc(t);return{c(){e=y("div"),n=y("div"),l.c(),r=B(),u&&u.c(),f(n,"class","content"),f(e,"class","post svelte-1xnjrgd"),f(e,"tabindex","0")},m(h,d){$(h,e,d),p(e,n),l.m(n,null),p(e,r),u&&u.m(e,null),s=!0,i||(o=oe(n,"click",t[3]),i=!0)},p(h,[d]){c===(c=a(h))&&l?l.p(h,d):(l.d(1),l=c(h),l&&(l.c(),l.m(n,null))),h[2]?u?(u.p(h,d),d&4&&A(u,1)):(u=Pc(h),u.c(),A(u,1),u.m(e,null)):u&&(Le(),N(u,1,1,()=>{u=null}),Me())},i(h){s||(A(u),s=!0)},o(h){N(u),s=!1},d(h){h&&M(e),l.d(),u&&u.d(),i=!1,o()}}}function Z_(t,e,n){let{post:r}=e,s,i=!1;const o=()=>{n(2,i=!i)};function a(u){Zt[u?"unshift":"push"](()=>{s=u,n(1,s)})}function c(u){Zt[u?"unshift":"push"](()=>{s=u,n(1,s)})}function l(u){Zt[u?"unshift":"push"](()=>{s=u,n(1,s)})}return t.$$set=u=>{"post"in u&&n(0,r=u.post)},t.$$.update=()=>{t.$$.dirty&2&&s&&N_.observe(s)},[r,s,i,o,a,c,l]}class ew extends ce{constructor(e){super(),ae(this,e,Z_,J_,se,{post:0})}}function Lc(t,e,n){const r=t.slice();return r[1]=e[n],r}function Mc(t){let e,n;return e=new ew({props:{post:t[1]}}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function tw(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=Mc(Lc(t,r,o));const i=o=>N(s[o],1,1,()=>{s[o]=null});return{c(){e=y("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-5hdzo")},m(o,a){$(o,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=Lc(o,r,c);s[c]?(s[c].p(l,a),A(s[c],1)):(s[c]=Mc(l),s[c].c(),A(s[c],1),s[c].m(e,null))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Me()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)A(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)N(s[a]);n=!1},d(o){o&&M(e),zt(s,o)}}}function nw(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class rw extends ce{constructor(e){super(),ae(this,e,nw,tw,se,{posts:0})}}function sw(t){let e,n,r,s,i,o,a;return{c(){e=y("button"),n=y("i"),s=B(),i=he(t[1]),f(n,"class",r=`codicon codicon-${t[0]}`),f(e,"title",t[2]),f(e,"class","svelte-4ivxow")},m(c,l){$(c,e,l),p(e,n),p(e,s),p(e,i),o||(a=oe(e,"click",t[4]),o=!0)},p(c,[l]){l&1&&r!==(r=`codicon codicon-${c[0]}`)&&f(n,"class",r),l&2&&be(i,c[1]),l&4&&f(e,"title",c[2])},i:F,o:F,d(c){c&&M(e),o=!1,a()}}}function iw(t,e,n){let{icon:r}=e,{text:s}=e,{title:i}=e;const o=_t(),a=()=>o("click");return t.$$set=c=>{"icon"in c&&n(0,r=c.icon),"text"in c&&n(1,s=c.text),"title"in c&&n(2,i=c.title)},[r,s,i,o,a]}class Yo extends ce{constructor(e){super(),ae(this,e,iw,sw,se,{icon:0,text:1,title:2})}}function vn(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}function ow(t){let e,n,r,s;return{c(){e=y("i"),f(e,"title",t[0]),f(e,"class",n=gt(`codicon codicon-${t[1]}`)+" svelte-htt49j"),f(e,"tabindex","0"),Be(e,"active",t[2])},m(i,o){$(i,e,o),r||(s=[oe(e,"click",t[3]),oe(e,"keyup",vn(t[3]))],r=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=gt(`codicon codicon-${i[1]}`)+" svelte-htt49j")&&f(e,"class",n),o&6&&Be(e,"active",i[2])},i:F,o:F,d(i){i&&M(e),r=!1,ze(s)}}}function aw(t,e,n){let{title:r=void 0}=e,{icon:s}=e,{active:i}=e;const o=_t(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,r=c.title),"icon"in c&&n(1,s=c.icon),"active"in c&&n(2,i=c.active)},[r,s,i,a]}class cw extends ce{constructor(e){super(),ae(this,e,aw,ow,se,{title:0,icon:1,active:2})}}const $c=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),xc=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Uc=Object.freeze({"+":"include","-":"exclude","~":"optional"});function lw(t){let e,n,r,s,i;return{c(){e=y("i"),f(e,"tabindex","0"),f(e,"class",n=`codicon codicon-${$c[t[0]]}`),f(e,"title",r=xc[t[0]])},m(o,a){$(o,e,a),s||(i=[oe(e,"click",t[1]),oe(e,"keyup",vn(t[1]))],s=!0)},p(o,[a]){a&1&&n!==(n=`codicon codicon-${$c[o[0]]}`)&&f(e,"class",n),a&1&&r!==(r=xc[o[0]])&&f(e,"title",r)},i:F,o:F,d(o){o&&M(e),s=!1,ze(i)}}}function uw(t,e,n){let r="+";const s=_t();return[r,()=>{n(0,r=O_(r)),s("change",r)}]}class hw extends ce{constructor(e){super(),ae(this,e,uw,lw,se,{})}}function dw(t){let e;return{c(){e=y("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){$(n,e,r)},p:F,i:F,o:F,d(n){n&&M(e)}}}class fw extends ce{constructor(e){super(),ae(this,e,null,dw,se,{})}}class Vh{constructor(e,n,r){if(!Bs(e))throw TypeError("Invalid name passed to Tag constructor");if(!xh(n))throw TypeError("Invalid count passed to Tag constructor");if(!$h(r))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=r,Object.freeze(this)}toActiveTag(e){return new ds(e,this.name,this.count,this.type)}}let gw=null;const pw=async(t,e)=>{const n=e?`*${t}*`:t,r=await Uh(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,gw);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length==0)throw new Error("No tags found");return s.map(o=>new Vh(o.name,o.count,mw(o.types)))}else throw s.message?new Error(s.message):new Error("Cannot display tag suggestions")}else throw new Error("Failed to get tag suggestions")};function mw(t){for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"}class yw{constructor(e,n,r){if(!Bs(e))throw new TypeError("Invalid name passed to Supertag");if(!vw(r))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...r]),Object.freeze(this)}}const vw=t=>Array.isArray(t)&&t.every(e=>e instanceof js),_w=async t=>{const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")},ww=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=_n(t);let r=null,s=null;return Ll(bt,async i=>{if(i){const o=await _w(i.email);r==null||r(),r=Ac(l_(Cc,"users",o),async a=>{const c=a.data();if(c===void 0)n(l=>(l.preferences={},l));else{n(u=>(u.preferences=c.preferences,u));const l=w_(c_(Cc,`users/${o}/supertags`));s==null||s(),s=Ac(l,u=>{const h=[];u.forEach(d=>{const g=d.data();h.push(new yw(d.id,g.desciption,Object.entries(g.tags).map(m=>new js(m[1],m[0]))))}),n(d=>(d.supertags=h,d))})}})}else r==null||r(),s==null||s(),r=null,s=null}),{subscribe:e}};var Jo=ww();const Fc=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function Ew(t){let e,n;return{c(){e=y("i"),f(e,"class",n=`codicon codicon-${Fc[t[0]]}`)},m(r,s){$(r,e,s)},p(r,[s]){s&1&&n!==(n=`codicon codicon-${Fc[r[0]]}`)&&f(e,"class",n)},i:F,o:F,d(r){r&&M(e)}}}function Iw(t,e,n){let{type:r}=e;return t.$$set=s=>{"type"in s&&n(0,r=s.type)},[r]}class Bh extends ce{constructor(e){super(),ae(this,e,Iw,Ew,se,{type:0})}}function Tw(t){let e,n,r,s,i=yn(t[0].name)+"",o,a,c,l=vt(t[0].count)+"",u,h,d,g,m;return n=new Bh({props:{type:t[0].type}}),{c(){e=y("li"),re(n.$$.fragment),r=B(),s=y("span"),o=he(i),a=B(),c=y("span"),u=he(l),f(s,"class","tag-name svelte-18s3mn"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-18s3mn")},m(E,v){$(E,e,v),ee(n,e,null),p(e,r),p(e,s),p(s,o),p(e,a),p(e,c),p(c,u),d=!0,g||(m=oe(e,"click",t[2]),g=!0)},p(E,[v]){const C={};v&1&&(C.type=E[0].type),n.$set(C),(!d||v&1)&&i!==(i=yn(E[0].name)+"")&&be(o,i),(!d||v&1)&&l!==(l=vt(E[0].count)+"")&&be(u,l),(!d||v&1&&h!==(h=E[0].name))&&f(e,"title",h)},i(E){d||(A(n.$$.fragment,E),d=!0)},o(E){N(n.$$.fragment,E),d=!1},d(E){E&&M(e),te(n),g=!1,m()}}}function bw(t,e,n){let{tag:r}=e;const s=_t(),i=()=>s("click",r);return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class Sw extends ce{constructor(e){super(),ae(this,e,bw,Tw,se,{tag:0})}}function Vc(t,e,n){const r=t.slice();return r[20]=e[n],r}function kw(t){let e,n,r,s,i=t[23].message+"",o;return{c(){e=y("div"),n=y("i"),r=B(),s=y("span"),o=he(i),f(n,"class",gt("codicon codicon-error")+" svelte-1d9l3qv"),f(e,"class","error-container svelte-1d9l3qv")},m(a,c){$(a,e,c),p(e,n),p(e,r),p(e,s),p(s,o)},p(a,c){c&4&&i!==(i=a[23].message+"")&&be(o,i)},i:F,o:F,d(a){a&&M(e)}}}function Aw(t){let e,n,r=t[5],s=[];for(let o=0;o<r.length;o+=1)s[o]=Bc(Vc(t,r,o));const i=o=>N(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=fs()},m(o,a){for(let c=0;c<s.length;c+=1)s[c].m(o,a);$(o,e,a),n=!0},p(o,a){if(a&424){r=o[5];let c;for(c=0;c<r.length;c+=1){const l=Vc(o,r,c);s[c]?(s[c].p(l,a),A(s[c],1)):(s[c]=Bc(l),s[c].c(),A(s[c],1),s[c].m(e.parentNode,e))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Me()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)A(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)N(s[a]);n=!1},d(o){zt(s,o),o&&M(e)}}}function Bc(t){let e,n;function r(){return t[16](t[20])}return e=new Sw({props:{tag:t[20]}}),e.$on("click",r),{c(){re(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},p(s,i){t=s;const o={};i&32&&(o.tag=t[20]),e.$set(o)},i(s){n||(A(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function Cw(t){let e,n,r;return n=new fw({}),{c(){e=y("div"),re(n.$$.fragment),f(e,"class","hint-container svelte-1d9l3qv")},m(s,i){$(s,e,i),ee(n,e,null),r=!0},p:F,i(s){r||(A(n.$$.fragment,s),r=!0)},o(s){N(n.$$.fragment,s),r=!1},d(s){s&&M(e),te(n)}}}function Dw(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,E,v;o=new hw({}),o.$on("change",t[12]),c=new cw({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[13]);let C={ctx:t,current:null,token:null,hasCatch:!0,pending:Cw,then:Aw,catch:kw,error:23,blocks:[,,,]};return aa(g=t[2],C),{c(){e=y("div"),n=y("i"),r=B(),s=y("input"),i=B(),re(o.$$.fragment),a=B(),re(c.$$.fragment),l=B(),u=y("i"),h=B(),d=y("ol"),C.block.c(),f(n,"class","codicon codicon-search"),f(s,"type","text"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-1d9l3qv"),f(u,"tabindex","0"),f(u,"class",gt("codicon codicon-question")+" svelte-1d9l3qv"),f(d,"class","svelte-1d9l3qv"),Be(d,"open",t[4]),f(e,"class","searchbar svelte-1d9l3qv"),Be(e,"open",t[4])},m(w,T){$(w,e,T),p(e,n),p(e,r),p(e,s),ia(s,t[0]),p(e,i),ee(o,e,null),p(e,a),ee(c,e,null),p(e,l),p(e,u),p(e,h),p(e,d),C.block.m(d,C.anchor=null),C.mount=()=>d,C.anchor=null,m=!0,E||(v=[oe(s,"input",t[9]),oe(s,"blur",t[10]),oe(s,"focus",t[11]),oe(u,"click",t[14]),oe(u,"keyup",function(){nl(vn(t[15]))&&vn(t[15]).apply(this,arguments)}),oe(e,"blur",t[17])],E=!0)},p(w,[T]){t=w,T&1&&s.value!==t[0]&&ia(s,t[0]);const O={};T&2&&(O.active=!t[1]),c.$set(O),C.ctx=t,T&4&&g!==(g=t[2])&&aa(g,C)||od(C,t,T),T&16&&Be(d,"open",t[4]),T&16&&Be(e,"open",t[4])},i(w){m||(A(o.$$.fragment,w),A(c.$$.fragment,w),A(C.block),m=!0)},o(w){N(o.$$.fragment,w),N(c.$$.fragment,w);for(let T=0;T<3;T+=1){const O=C.blocks[T];N(O)}m=!1},d(w){w&&M(e),te(o),te(c),C.block.d(),C.token=null,C=null,E=!1,ze(v)}}}function Rw(t,e,n){let r,s;qe(t,Jo,S=>n(18,r=S)),qe(t,Rt,S=>n(6,s=S));const i=_t();let o,a="",c=!0,l="+",u=!1,h=[];async function d(S,P){n(4,u=!0),n(5,h=[...r.supertags.filter(H=>H.name.toLowerCase().includes(P.toLowerCase())).map(H=>new Vh(H.name,Object.keys(H.tags).length,"supertag")),...await pw(P,S)])}const g=()=>{n(0,a=""),n(5,h=[]),n(4,u=!1)};function m(){a=this.value,n(0,a)}const E=S=>{(!S.relatedTarget||!S.target.parentNode.contains(S.relatedTarget))&&n(4,u=!1)},v=()=>{n(4,u=!0)},C=S=>{n(3,l=S.detail)},w=()=>{n(1,c=!c)},T=()=>{sa(Rt,s="help",s)},O=()=>{sa(Rt,s="help",s)},b=S=>{i("pick",S.toActiveTag(l)),g()},V=()=>{n(4,u=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,h=[]),a!==""&&n(2,o=d(c,a)))},[a,c,o,l,u,h,s,i,g,m,E,v,C,w,T,O,b,V]}class Nw extends ce{constructor(e){super(),ae(this,e,Rw,Dw,se,{})}}function Ow(t){let e,n,r,s=yn(t[0].name)+"",i,o,a=vt(t[0].count)+"",c,l,u,h,d,g;return n=new Bh({props:{type:t[0].type}}),{c(){e=y("li"),re(n.$$.fragment),r=B(),i=he(s),o=he(`
  (`),c=he(a),l=he(")"),f(e,"class",u=gt(Uc[t[0].modifier])+" svelte-vwi8d8"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Be(e,"no-icon",t[0].type==="general")},m(m,E){$(m,e,E),ee(n,e,null),p(e,r),p(e,i),p(e,o),p(e,c),p(e,l),h=!0,d||(g=oe(e,"click",t[2]),d=!0)},p(m,[E]){const v={};E&1&&(v.type=m[0].type),n.$set(v),(!h||E&1)&&s!==(s=yn(m[0].name)+"")&&be(i,s),(!h||E&1)&&a!==(a=vt(m[0].count)+"")&&be(c,a),(!h||E&1&&u!==(u=gt(Uc[m[0].modifier])+" svelte-vwi8d8"))&&f(e,"class",u),E&1&&Be(e,"no-icon",m[0].type==="general")},i(m){h||(A(n.$$.fragment,m),h=!0)},o(m){N(n.$$.fragment,m),h=!1},d(m){m&&M(e),te(n),d=!1,g()}}}function Pw(t,e,n){let{tag:r}=e;const s=_t(),i=()=>s("click");return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class jh extends ce{constructor(e){super(),ae(this,e,Pw,Ow,se,{tag:0})}}function Lw(t){let e;return{c(){e=y("div")},m(n,r){$(n,e,r),t[1](e)},p:F,i:F,o:F,d(n){n&&M(e),t[1](null)}}}function Mw(t,e,n){const r=_t(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&(console.debug("Triggered infinite loading"),r("visible"))},{rootMargin:"1250px"});let i;function o(a){Zt[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class $w extends ce{constructor(e){super(),ae(this,e,Mw,Lw,se,{})}}var xw="/kurosearch/assets/shironeko-confused.4071d5b2.png";function Uw(t){let e,n,r,s,i;return{c(){e=y("div"),n=y("img"),s=B(),i=y("span"),i.textContent="No results found",an(n.src,r=xw)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){$(o,e,a),p(e,n),p(e,s),p(e,i)},p:F,i:F,o:F,d(o){o&&M(e)}}}class Fw extends ce{constructor(e){super(),ae(this,e,null,Uw,se,{})}}var Vw="/kurosearch/assets/shironeko-x.c28cad00.png";function Bw(t){let e,n,r,s,i;return{c(){e=y("div"),n=y("img"),s=B(),i=y("span"),i.textContent="You have reached the end",an(n.src,r=Vw)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){$(o,e,a),p(e,n),p(e,s),p(e,i)},p:F,i:F,o:F,d(o){o&&M(e)}}}class jw extends ce{constructor(e){super(),ae(this,e,null,Bw,se,{})}}class qw{constructor(e,n){this.count=e,this.posts=n,Object.freeze(this)}}class zw{constructor(e,n,r,s,i,o,a,c,l,u,h,d,g,m,E,v,C,w,T,O,b,V,S,P,H,K){this.preview_url=e,this.sample_url=n,this.file_url=r,this.created_at=s,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=g,this.preview_width=m,this.preview_height=E,this.rating=v,this.sample_height=C,this.sample_width=w,this.score=T,this.source=O,this.status=b,this.tags=V,this.width=S,this.comments_url=P,this.owner_url=H,this.type=K,Object.freeze(this)}}const Hw=Object.freeze(["id","score"]),Kw=t=>Hw.includes(t),qh=20,Gw="https://r34-json.herokuapp.com/v2";let Ww=null;const Qw=async(t,e,n,r)=>{if(!Xw(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!Yw(e))throw new TypeError("Invalid array of tags passed to getPage");if(!Kw(n))throw new TypeError("Invalid sort property passed to getPage");if(!Jw(r))throw new TypeError("Invalid minimum score passed to getPage");const s=await Uh(e0(t,Zw(e,n,r)),Ww);if(!s.ok)throw new Error(`getPage failed with http status ${s.status}`);const i=await s.json();if(!Array.isArray(i.posts))throw new Error(i);return new qw(i.count,i.posts.map(o=>new zw(o.preview_url,o.sample_url,o.file_url,o.created_at,o.has_children,o.md5,o.height,o.id,o.change,o.creator_id,o.has_notes,o.has_comments,o.parent_id,o.preview_width,o.preview_height,o.rating,o.sample_height,o.sample_width,o.score,o.source,o.status,o.tags,o.width,o.comments_url,o.owner_url,o.type)))},Xw=t=>typeof t=="number"&&t>=0,Yw=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof js)),Jw=t=>typeof t=="number"&&t>=0,Zw=(t,e,n)=>{const r=t.reduce((i,o)=>(o.modifier==="~"?i.optional.push(o):i.other.push(o),i),{optional:[],other:[]}),s=[...r.other.map(i=>i.serialize()),`sort:${e}:desc`,`score:>=${n}`].join("+");return r.optional.length==0?s:`${s}+( ${r.optional.map(i=>i.serialize()).join(" ~ ")} )`},e0=(t,e)=>{const n=`${Gw}/posts?limit=${qh}&pid=${t}`;return e===""?n:`${n}&tags=${e}`};function t0(t){let e,n,r;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"class","svelte-2tve8k"),Be(e,"visible",t[0])},m(s,i){$(s,e,i),n||(r=oe(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&Be(e,"visible",s[0])},i:F,o:F,d(s){s&&M(e),n=!1,r()}}}function n0(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>1e3),r=a};return td(()=>{document.addEventListener("scroll",i,{passive:!0})}),nd(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class r0 extends ce{constructor(e){super(),ae(this,e,n0,t0,se,{})}}const s0=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:r}=_n(t);return{subscribe:e,addPage(s){n(i=>(i.count=s.count,i.pages.push(s.posts),i.nextPage=i.nextPage+1,i))},reset(){r(t)}}};var hi=s0();function jc(t,e,n){const r=t.slice();return r[13]=e[n],r}function qc(t,e,n){const r=t.slice();return r[16]=e[n],r[18]=n,r}function zc(t){let e,n,r=t[2],s=[];for(let o=0;o<r.length;o+=1)s[o]=Hc(qc(t,r,o));const i=o=>N(s[o],1,1,()=>{s[o]=null});return{c(){e=y("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","svelte-sv20ti")},m(o,a){$(o,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);n=!0},p(o,a){if(a&4){r=o[2];let c;for(c=0;c<r.length;c+=1){const l=qc(o,r,c);s[c]?(s[c].p(l,a),A(s[c],1)):(s[c]=Hc(l),s[c].c(),A(s[c],1),s[c].m(e,null))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Me()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)A(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)N(s[a]);n=!1},d(o){o&&M(e),zt(s,o)}}}function Hc(t){let e,n;function r(){return t[7](t[18])}return e=new jh({props:{tag:t[16]}}),e.$on("click",r),{c(){re(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},p(s,i){t=s;const o={};i&4&&(o.tag=t[16]),e.$set(o)},i(s){n||(A(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function i0(t){let e,n;return e=new Fw({}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p:F,i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function o0(t){let e,n=vt(t[3].count)+"",r,s,i,o,a,c,l,u,h,d=t[3].pages,g=[];for(let w=0;w<d.length;w+=1)g[w]=Kc(jc(t,d,w));const m=w=>N(g[w],1,1,()=>{g[w]=null}),E=[c0,a0],v=[];function C(w,T){return w[3].pages.length<w[3].count/qh?0:1}return c=C(t),l=v[c]=E[c](t),{c(){e=y("p"),r=he(n),s=he(" results"),i=B(),o=y("ol");for(let w=0;w<g.length;w+=1)g[w].c();a=B(),l.c(),u=fs(),f(e,"class","count svelte-sv20ti"),f(o,"class","svelte-sv20ti")},m(w,T){$(w,e,T),p(e,r),p(e,s),$(w,i,T),$(w,o,T);for(let O=0;O<g.length;O+=1)g[O].m(o,null);$(w,a,T),v[c].m(w,T),$(w,u,T),h=!0},p(w,T){if((!h||T&8)&&n!==(n=vt(w[3].count)+"")&&be(r,n),T&8){d=w[3].pages;let b;for(b=0;b<d.length;b+=1){const V=jc(w,d,b);g[b]?(g[b].p(V,T),A(g[b],1)):(g[b]=Kc(V),g[b].c(),A(g[b],1),g[b].m(o,null))}for(Le(),b=d.length;b<g.length;b+=1)m(b);Me()}let O=c;c=C(w),c===O?v[c].p(w,T):(Le(),N(v[O],1,1,()=>{v[O]=null}),Me(),l=v[c],l?l.p(w,T):(l=v[c]=E[c](w),l.c()),A(l,1),l.m(u.parentNode,u))},i(w){if(!h){for(let T=0;T<d.length;T+=1)A(g[T]);A(l),h=!0}},o(w){g=g.filter(Boolean);for(let T=0;T<g.length;T+=1)N(g[T]);N(l),h=!1},d(w){w&&M(e),w&&M(i),w&&M(o),zt(g,w),w&&M(a),v[c].d(w),w&&M(u)}}}function Kc(t){let e,n;return e=new rw({props:{posts:t[13]}}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p(r,s){const i={};s&8&&(i.posts=r[13]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function a0(t){let e,n;return e=new jw({}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p:F,i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function c0(t){let e,n;return e=new $w({}),e.$on("visible",t[5]),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p:F,i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function l0(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,E,v,C,w,T,O,b,V,S,P,H,K,ie;s=new Nw({}),s.$on("pick",t[6]);let R=t[2].length&&zc(t);c=new Yo({props:{title:"Click to search with active tags",icon:"search",text:"Search"}}),c.$on("click",t[8]);const It=[o0,i0],Q=[];function ye(x,De){return x[3].count?0:x[3].count===0?1:-1}return~(b=ye(t))&&(V=Q[b]=It[b](t)),P=new r0({}),{c(){e=y("div"),n=y("h1"),n.textContent="kurosearch",r=B(),re(s.$$.fragment),i=B(),R&&R.c(),o=B(),a=y("div"),re(c.$$.fragment),l=B(),u=y("div"),h=y("select"),d=y("option"),d.textContent="New posts",g=y("option"),g.textContent="Popular posts",m=B(),E=y("select"),v=y("option"),v.textContent="No minimum score",C=y("option"),C.textContent="Min 10 likes",w=y("option"),w.textContent="Min 100 likes",T=y("option"),T.textContent="Min 1000 likes",O=B(),V&&V.c(),S=B(),re(P.$$.fragment),f(n,"class","svelte-sv20ti"),f(a,"class","sort-row svelte-sv20ti"),d.__value="id",d.value=d.__value,g.__value="score",g.value=g.__value,f(h,"class","svelte-sv20ti"),t[0]===void 0&&cn(()=>t[9].call(h)),v.__value=0,v.value=v.__value,C.__value=10,C.value=C.__value,w.__value=100,w.value=w.__value,T.__value=1e3,T.value=T.__value,f(E,"class","svelte-sv20ti"),t[1]===void 0&&cn(()=>t[10].call(E)),f(u,"class","sort-row svelte-sv20ti"),f(e,"class","search-config svelte-sv20ti")},m(x,De){$(x,e,De),p(e,n),p(e,r),ee(s,e,null),p(e,i),R&&R.m(e,null),p(e,o),p(e,a),ee(c,a,null),p(e,l),p(e,u),p(u,h),p(h,d),p(h,g),Xt(h,t[0]),p(u,m),p(u,E),p(E,v),p(E,C),p(E,w),p(E,T),Xt(E,t[1]),$(x,O,De),~b&&Q[b].m(x,De),$(x,S,De),ee(P,x,De),H=!0,K||(ie=[oe(h,"change",t[9]),oe(E,"change",t[10])],K=!0)},p(x,[De]){x[2].length?R?(R.p(x,De),De&4&&A(R,1)):(R=zc(x),R.c(),A(R,1),R.m(e,o)):R&&(Le(),N(R,1,1,()=>{R=null}),Me()),De&1&&Xt(h,x[0]),De&2&&Xt(E,x[1]);let qs=b;b=ye(x),b===qs?~b&&Q[b].p(x,De):(V&&(Le(),N(Q[qs],1,1,()=>{Q[qs]=null}),Me()),~b?(V=Q[b],V?V.p(x,De):(V=Q[b]=It[b](x),V.c()),A(V,1),V.m(S.parentNode,S)):V=null)},i(x){H||(A(s.$$.fragment,x),A(R),A(c.$$.fragment,x),A(V),A(P.$$.fragment,x),H=!0)},o(x){N(s.$$.fragment,x),N(R),N(c.$$.fragment,x),N(V),N(P.$$.fragment,x),H=!1},d(x){x&&M(e),te(s),R&&R.d(),te(c),x&&M(O),~b&&Q[b].d(x),x&&M(S),te(P,x),K=!1,ze(ie)}}}function u0(t,e,n){let r,s,i;qe(t,Jo,v=>n(11,r=v)),qe(t,on,v=>n(2,s=v)),qe(t,hi,v=>n(3,i=v));let o="id",a=0;const c=async()=>(hi.reset(),l()),l=async()=>{try{const v=u(),C=await Qw(i.nextPage,v,o,a);hi.addPage(C)}catch(v){console.warn(v)}},u=()=>s.flatMap(v=>v.type==="supertag"?r.supertags.find(C=>C.name===v.name).tags:v.toSearchableTag()),h=v=>on.addOrReplace(v.detail),d=v=>on.removeByIndex(v),g=()=>c();function m(){o=gi(this),n(0,o)}function E(){a=gi(this),n(1,a)}return[o,a,s,i,c,l,h,d,g,m,E]}class h0 extends ce{constructor(e){super(),ae(this,e,u0,l0,se,{})}}const{subscribe:d0,set:f0}=_n("dark");var Gc={subscribe:d0,set(t){f0(t),g0(t)}};const g0=t=>{document.documentElement.classList.replace(p0(t),t)},p0=t=>t==="dark"?"light":"dark";function m0(t){let e,n,r,s,i;return{c(){e=y("select"),n=y("option"),n.textContent="Dark",r=y("option"),r.textContent="Light",n.__value="dark",n.value=n.__value,r.__value="light",r.value=r.__value,t[0]===void 0&&cn(()=>t[1].call(e))},m(o,a){$(o,e,a),p(e,n),p(e,r),Xt(e,t[0]),s||(i=oe(e,"change",t[1]),s=!0)},p(o,[a]){a&1&&Xt(e,o[0])},i:F,o:F,d(o){o&&M(e),s=!1,i()}}}function y0(t,e,n){let r;qe(t,Gc,i=>n(0,r=i));function s(){r=gi(this),Gc.set(r)}return[r,s]}class v0 extends ce{constructor(e){super(),ae(this,e,y0,m0,se,{})}}function _0(t){let e;return{c(){e=y("section"),e.innerHTML=`<h2>Tags</h2> 

  <p>All search functionality in this app is based on tags.</p> 

  <p>TODO: add more explanation here...</p>`,f(e,"id","tags")},m(n,r){$(n,e,r)},p:F,i:F,o:F,d(n){n&&M(e)}}}class w0 extends ce{constructor(e){super(),ae(this,e,null,_0,se,{})}}function Wc(t,e,n){const r=t.slice();return r[4]=e[n],r}function Qc(t){let e,n;return e=new jh({props:{tag:new ds(t[4].modifier,t[4].name,0,"general")}}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=new ds(r[4].modifier,r[4].name,0,"general")),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function E0(t){let e,n,r=t[0].name+"",s,i,o,a=Object.keys(t[0].tags).length+"",c,l,u,h,d,g,m,E,v=t[0].description+"",C,w,T,O,b,V,S=t[0].tags,P=[];for(let K=0;K<S.length;K+=1)P[K]=Qc(Wc(t,S,K));const H=K=>N(P[K],1,1,()=>{P[K]=null});return{c(){e=y("li"),n=y("h3"),s=he(r),i=B(),o=y("small"),c=he(a),l=he(" tags"),u=B(),h=y("i"),d=B(),g=y("i"),m=B(),E=y("span"),C=he(v),w=B(),T=y("ol");for(let K=0;K<P.length;K+=1)P[K].c();f(n,"class","svelte-136f827"),f(o,"class","svelte-136f827"),f(h,"tabindex","0"),f(h,"class",gt("codicon codicon-edit")+" svelte-136f827"),f(g,"tabindex","0"),f(g,"class",gt("codicon codicon-close")+" svelte-136f827"),f(E,"class","svelte-136f827"),f(T,"class","svelte-136f827"),f(e,"class","svelte-136f827")},m(K,ie){$(K,e,ie),p(e,n),p(n,s),p(e,i),p(e,o),p(o,c),p(o,l),p(e,u),p(e,h),p(e,d),p(e,g),p(e,m),p(e,E),p(E,C),p(e,w),p(e,T);for(let R=0;R<P.length;R+=1)P[R].m(T,null);O=!0,b||(V=[oe(h,"click",t[2]),oe(h,"keyup",vn(t[2])),oe(g,"click",t[1]),oe(g,"keyup",vn(t[1]))],b=!0)},p(K,[ie]){if((!O||ie&1)&&r!==(r=K[0].name+"")&&be(s,r),(!O||ie&1)&&a!==(a=Object.keys(K[0].tags).length+"")&&be(c,a),(!O||ie&1)&&v!==(v=K[0].description+"")&&be(C,v),ie&1){S=K[0].tags;let R;for(R=0;R<S.length;R+=1){const It=Wc(K,S,R);P[R]?(P[R].p(It,ie),A(P[R],1)):(P[R]=Qc(It),P[R].c(),A(P[R],1),P[R].m(T,null))}for(Le(),R=S.length;R<P.length;R+=1)H(R);Me()}},i(K){if(!O){for(let ie=0;ie<S.length;ie+=1)A(P[ie]);O=!0}},o(K){P=P.filter(Boolean);for(let ie=0;ie<P.length;ie+=1)N(P[ie]);O=!1},d(K){K&&M(e),zt(P,K),b=!1,ze(V)}}}function I0(t,e,n){let{supertag:r}=e;const s=_t(),i=()=>s("remove",r.name),o=()=>s("edit",r.name);return t.$$set=a=>{"supertag"in a&&n(0,r=a.supertag)},[r,i,o]}class T0 extends ce{constructor(e){super(),ae(this,e,I0,E0,se,{supertag:0})}}function Xc(t,e,n){const r=t.slice();return r[4]=e[n],r}function b0(t){let e,n,r,s,i,o,a;return o=new Yo({props:{icon:"sign-in",text:"Sign in with Google",title:"Click to sign in with your Google account"}}),o.$on("click",t[3]),{c(){e=y("div"),n=y("p"),n.textContent="You are currently not signed in.",r=B(),s=y("br"),i=B(),re(o.$$.fragment)},m(c,l){$(c,e,l),p(e,n),p(e,r),p(e,s),p(e,i),ee(o,e,null),a=!0},p:F,i(c){a||(A(o.$$.fragment,c),a=!0)},o(c){N(o.$$.fragment,c),a=!1},d(c){c&&M(e),te(o)}}}function S0(t){let e,n,r,s,i,o,a,c,l,u,h=t[0].user.displayName+"",d,g,m,E,v,C=t[0].user.email+"",w,T,O,b,V,S,P,H,K;m=new Yo({props:{icon:"sign-out",text:"Sign out",title:"Click to sign out"}}),m.$on("click",t[2]);let ie=t[1].supertags,R=[];for(let Q=0;Q<ie.length;Q+=1)R[Q]=Yc(Xc(t,ie,Q));const It=Q=>N(R[Q],1,1,()=>{R[Q]=null});return{c(){e=y("div"),n=y("div"),r=y("h2"),r.textContent="Signed in as",s=B(),i=y("div"),o=y("img"),c=B(),l=y("div"),u=y("span"),d=he(h),g=B(),re(m.$$.fragment),E=B(),v=y("span"),w=he(C),T=B(),O=y("div"),b=y("h2"),b.textContent="Your supertags",V=B(),S=y("div"),P=B(),H=y("ul");for(let Q=0;Q<R.length;Q+=1)R[Q].c();f(o,"class","profile-picture svelte-6r5uhe"),an(o.src,a=t[0].user.photoURL)||f(o,"src",a),f(o,"alt","Profile"),f(u,"class","svelte-6r5uhe"),f(l,"class","name-area svelte-6r5uhe"),f(i,"class","overview svelte-6r5uhe"),f(S,"class","supertags"),f(H,"class","svelte-6r5uhe"),f(e,"class","account-view svelte-6r5uhe")},m(Q,ye){$(Q,e,ye),p(e,n),p(n,r),p(n,s),p(n,i),p(i,o),p(i,c),p(i,l),p(l,u),p(u,d),p(l,g),ee(m,l,null),p(i,E),p(i,v),p(v,w),p(e,T),p(e,O),p(O,b),p(O,V),p(O,S),p(O,P),p(O,H);for(let x=0;x<R.length;x+=1)R[x].m(H,null);K=!0},p(Q,ye){if((!K||ye&1&&!an(o.src,a=Q[0].user.photoURL))&&f(o,"src",a),(!K||ye&1)&&h!==(h=Q[0].user.displayName+"")&&be(d,h),(!K||ye&1)&&C!==(C=Q[0].user.email+"")&&be(w,C),ye&2){ie=Q[1].supertags;let x;for(x=0;x<ie.length;x+=1){const De=Xc(Q,ie,x);R[x]?(R[x].p(De,ye),A(R[x],1)):(R[x]=Yc(De),R[x].c(),A(R[x],1),R[x].m(H,null))}for(Le(),x=ie.length;x<R.length;x+=1)It(x);Me()}},i(Q){if(!K){A(m.$$.fragment,Q);for(let ye=0;ye<ie.length;ye+=1)A(R[ye]);K=!0}},o(Q){N(m.$$.fragment,Q),R=R.filter(Boolean);for(let ye=0;ye<R.length;ye+=1)N(R[ye]);K=!1},d(Q){Q&&M(e),te(m),zt(R,Q)}}}function Yc(t){let e,n;return e=new T0({props:{supertag:t[4]}}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.supertag=r[4]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function k0(t){let e,n,r,s;const i=[S0,b0],o=[];function a(c,l){return c[0].loggedIn?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=fs()},m(c,l){o[e].m(c,l),$(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Le(),N(o[u],1,1,()=>{o[u]=null}),Me(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),A(n,1),n.m(r.parentNode,r))},i(c){s||(A(n),s=!0)},o(c){N(n),s=!1},d(c){o[e].d(c),c&&M(r)}}}function A0(t,e,n){let r,s;return qe(t,Hr,a=>n(0,r=a)),qe(t,Jo,a=>n(1,s=a)),[r,s,()=>Hr.signOut(),()=>Hr.signInWithGoogle()]}class C0 extends ce{constructor(e){super(),ae(this,e,A0,k0,se,{})}}class D0 extends ce{constructor(e){super(),ae(this,e,null,null,se,{})}}function R0(t){let e;return{c(){e=y("p"),e.textContent="You got lost..."},m(n,r){$(n,e,r)},i:F,o:F,d(n){n&&M(e)}}}function N0(t){let e,n;return e=new w0({}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function O0(t){let e,n;return e=new v0({}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function P0(t){let e,n;return e=new C0({}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function L0(t){let e,n;return e=new h0({}),{c(){re(e.$$.fragment)},m(r,s){ee(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function M0(t){let e,n,r,s,i,o,a,c;e=new D0({}),r=new R_({});const l=[L0,P0,O0,N0,R0],u=[];function h(d,g){return d[0]==="search"?0:d[0]==="account"?1:d[0]==="settings"?2:d[0]==="help"?3:4}return o=h(t),a=u[o]=l[o](t),{c(){re(e.$$.fragment),n=B(),re(r.$$.fragment),s=B(),i=y("main"),a.c()},m(d,g){ee(e,d,g),$(d,n,g),ee(r,d,g),$(d,s,g),$(d,i,g),u[o].m(i,null),c=!0},p(d,[g]){let m=o;o=h(d),o!==m&&(Le(),N(u[m],1,1,()=>{u[m]=null}),Me(),a=u[o],a||(a=u[o]=l[o](d),a.c()),A(a,1),a.m(i,null))},i(d){c||(A(e.$$.fragment,d),A(r.$$.fragment,d),A(a),c=!0)},o(d){N(e.$$.fragment,d),N(r.$$.fragment,d),N(a),c=!1},d(d){te(e,d),d&&M(n),te(r,d),d&&M(s),d&&M(i),u[o].d()}}}function $0(t,e,n){let r;return qe(t,Rt,s=>n(0,r=s)),[r]}class x0 extends ce{constructor(e){super(),ae(this,e,$0,M0,se,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function Jc(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[r.port2])})}function U0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Zc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F0(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,i){if(s){if(typeof s=="string")return Zc(s,i);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Zc(s,i):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var di=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function fi(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Cn=function(t,e){this.type=t,Object.assign(this,e)};function Mr(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function V0(){}var B0={type:"SKIP_WAITING"};function el(t,e){if(!e)return t&&t.then?t.then(V0):Promise.resolve()}var j0=function(t){var e,n;function r(a,c){var l,u;return c===void 0&&(c={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new di,l.en=new di,l.on=new di,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!fi(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,g=h.target,m=g.state,E=g===l.vn,v={sw:g,isExternal:E,originalEvent:h};!E&&l.mn&&(v.isUpdate=!0),l.dispatchEvent(new Cn(m,v)),m==="installed"?l.wn=self.setTimeout(function(){m==="installed"&&d.waiting===g&&l.dispatchEvent(new Cn("waiting",v))},200):m==="activating"&&(clearTimeout(l.wn),E||l.en.resolve(g))},l.dn=function(h){var d=l.hn,g=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Cn("controlling",{isExternal:g,originalEvent:h,sw:d,isUpdate:l.mn})),g||l.on.resolve(d)},l.gn=(u=function(h){var d=h.data,g=h.ports,m=h.source;return Mr(l.getSW(),function(){l.an.has(m)&&l.dispatchEvent(new Cn("message",{data:d,originalEvent:h,ports:g,sw:m}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(u.apply(this,h))}catch(g){return Promise.reject(g)}}),l.sn=a,l.nn=c,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,i,o=r.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,l=c!==void 0&&c;try{var u=this;return function(h,d){var g=h();return g&&g.then?g.then(d):d(g)}(function(){if(!l&&document.readyState!=="complete")return el(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),Mr(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&fi(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Cn("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?el(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return Mr(this.getSW(),function(c){return Jc(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Jc(this.fn.waiting,B0)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&fi(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,l){try{var u=c()}catch(h){return l(h)}return u&&u.then?u.then(void 0,l):u}(function(){return Mr(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},s=r,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&U0(s.prototype,i),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,s=F0(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function q0(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisterError:i}=t;let o;const a=async(c=!0)=>{};return"serviceWorker"in navigator&&(o=new j0("/kurosearch/sw.js",{scope:"/kurosearch/",type:"classic"}),o.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),o.register({immediate:e}).then(c=>{s==null||s(c)}).catch(c=>{i==null||i(c)})),a}new x0({target:document.getElementById("app")});q0();
