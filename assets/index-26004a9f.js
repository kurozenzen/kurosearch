(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function C(){}function uo(t,e){for(const n in e)t[n]=e[n];return t}function qp(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ou(t){return t()}function dc(){return Object.create(null)}function ve(t){t.forEach(Ou)}function Zr(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ir;function vt(t,e){return ir||(ir=document.createElement("a")),ir.href=e,t===ir.href}function zp(t){return Object.keys(t).length===0}function Hp(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Me(t,e,n){t.$$.on_destroy.push(Hp(e,n))}function $u(t,e,n,s){if(t){const r=Pu(t,e,n,s);return t[0](r)}}function Pu(t,e,n,s){return t[1]&&s?uo(n.ctx.slice(),t[1](s(e))):n.ctx}function Mu(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Lu(t,e,n,s,r,i){if(r){const o=Pu(e,n,s,i);t.p(o,r)}}function Uu(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function fc(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qe(t){return t??""}function _S(t,e,n){return t.set(n),e}const Kp=typeof window<"u";let Gp=Kp?t=>requestAnimationFrame(t):C;function _(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function pn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ae(t){return document.createTextNode(t)}function $(){return ae(" ")}function tt(){return ae("")}function V(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Fu(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ko(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Go(t){return t===""?null:+t}function Wp(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function rt(t,e){t.value=e??""}function Qp(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function pc(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Yp(t){const e=t.querySelector(":checked");return e&&e.__value}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function Xp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function gc(t,e){return new t(e)}let ls;function dt(t){ls=t}function ei(){if(!ls)throw new Error("Function called outside component initialization");return ls}function Ds(t){ei().$$.on_mount.push(t)}function ti(t){ei().$$.on_destroy.push(t)}function Xe(){const t=ei();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Xp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const _n=[],Ue=[];let En=[];const ho=[],Jp=Promise.resolve();let fo=!1;function Zp(){fo||(fo=!0,Jp.then(Wo))}function us(t){En.push(t)}function mt(t){ho.push(t)}const Vi=new Set;let gn=0;function Wo(){if(gn!==0)return;const t=ls;do{try{for(;gn<_n.length;){const e=_n[gn];gn++,dt(e),eg(e.$$)}}catch(e){throw _n.length=0,gn=0,e}for(dt(null),_n.length=0,gn=0;Ue.length;)Ue.pop()();for(let e=0;e<En.length;e+=1){const n=En[e];Vi.has(n)||(Vi.add(n),n())}En.length=0}while(_n.length);for(;ho.length;)ho.pop()();fo=!1,Vi.clear(),dt(t)}function eg(t){if(t.fragment!==null){t.update(),ve(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(us)}}function tg(t){const e=[],n=[];En.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),En=e}const gr=new Set;let qt;function de(){qt={r:0,c:[],p:qt}}function fe(){qt.r||ve(qt.c),qt=qt.p}function w(t,e){t&&t.i&&(gr.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(gr.has(t))return;gr.add(t),qt.c.push(()=>{gr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Sr(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(de(),T(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),fe())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Wo()}if(qp(t)){const r=ei();if(t.then(i=>{dt(r),s(e.then,1,e.value,i),dt(null)},i=>{if(dt(r),s(e.catch,2,e.error,i),dt(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function xu(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function yt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function F(t){t&&t.c()}function M(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||us(()=>{const o=t.$$.on_mount.map(Ou).filter(Zr);t.$$.on_destroy?t.$$.on_destroy.push(...o):ve(o),t.$$.on_mount=[]}),i.forEach(us)}function L(t,e){const n=t.$$;n.fragment!==null&&(tg(n.after_update),ve(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ng(t,e){t.$$.dirty[0]===-1&&(_n.push(t),Zp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,r,i,o,a=[-1]){const c=ls;dt(t);const l=t.$$={fragment:null,ctx:[],props:i,update:C,not_equal:r,bound:dc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:dc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&ng(t,h)),d}):[],l.update(),u=!0,ve(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Wp(e.target);l.fragment&&l.fragment.l(h),h.forEach(S)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),Wo()}dt(c)}class W{$destroy(){L(this,1),this.$destroy=C}$on(e,n){if(!Zr(n))return C;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!zp(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mn=[];function Rs(t,e=C){let n;const s=new Set;function r(a){if(K(t,a)&&(t=a,n)){const c=!mn.length;for(const l of s)l[1](),mn.push(l,t);if(c){for(let l=0;l<mn.length;l+=2)mn[l][0](mn[l+1]);mn.length=0}}}function i(a){r(a(t))}function o(a,c=C){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||C),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const sg=Object.freeze(["search","account","settings","help"]),rg=t=>sg.includes(t),ig=()=>{const{subscribe:t,set:e}=Rs("search");return{subscribe:t,navigateTo(n){if(!rg(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},In=ig();function og(t){let e,n,s,r,i,o;return{c(){e=pn("svg"),n=pn("g"),s=pn("path"),r=pn("defs"),i=pn("clipPath"),o=pn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){A(a,e,c),_(e,n),_(n,s),_(e,r),_(r,i),_(i,o)},p:C,i:C,o:C,d(a){a&&S(e)}}}class ag extends W{constructor(e){super(),G(this,e,null,og,K,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},cg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new lg;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ug=function(t){const e=Vu(t);return Bu.encodeByteArray(e,!0)},Ar=function(t){return ug(t).replace(/\./g,"")},ju=function(t){try{return Bu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dg=()=>hg().__FIREBASE_DEFAULTS__,fg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ju(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return dg()||fg()||pg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qu=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gg=t=>{const e=qu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},mg=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config},zu=t=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function _g(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ar(JSON.stringify(n)),Ar(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Hu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bg(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Gu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ig(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="FirebaseError";class nt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tg,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Eg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nt(r,a,s)}}function Eg(t,e){return t.replace(kg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const kg=/\{\$([^}]+)}/g;function Sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(mc(i)&&mc(o)){if(!hs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Qn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ag(t,e){const n=new Cg(t,e);return n.subscribe.bind(n)}class Cg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Dg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Bi),r.error===void 0&&(r.error=Bi),r.complete===void 0&&(r.complete=Bi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=1e3,Ng=2,Og=4*60*60*1e3,$g=.5;function yc(t,e=Rg,n=Ng){const s=e*Math.pow(n,t),r=Math.round($g*s*(Math.random()-.5)*2);return Math.min(Og,s+r)}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Ze{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mg(t){return t===Bt?void 0:t}function Lg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Fg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},xg=re.INFO,Vg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Bg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Vg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ni{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const jg=(t,e)=>e.some(n=>t instanceof n);let _c,vc;function qg(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zg(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,po=new WeakMap,Qu=new WeakMap,ji=new WeakMap,Yo=new WeakMap;function Hg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wu.set(n,t)}).catch(()=>{}),Yo.set(e,t),e}function Kg(t){if(po.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});po.set(t,e)}let go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return po.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gg(t){go=t(go)}function Wg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qi(this),e,...n);return Qu.set(s,e.sort?e.sort():[e]),Nt(s)}:zg().includes(t)?function(...e){return t.apply(qi(this),e),Nt(Wu.get(this))}:function(...e){return Nt(t.apply(qi(this),e))}}function Qg(t){return typeof t=="function"?Wg(t):(t instanceof IDBTransaction&&Kg(t),jg(t,qg())?new Proxy(t,go):t)}function Nt(t){if(t instanceof IDBRequest)return Hg(t);if(ji.has(t))return ji.get(t);const e=Qg(t);return e!==t&&(ji.set(t,e),Yo.set(e,t)),e}const qi=t=>Yo.get(t);function Yu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Yg=["get","getKey","getAll","getAllKeys","count"],Xg=["put","add","delete","clear"],zi=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zi.get(e))return zi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Xg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return zi.set(e,i),i}Gg(t=>({...t,get:(e,n,s)=>wc(e,n)||t.get(e,n,s),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",bc="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new ni("@firebase/app"),em="@firebase/app-compat",tm="@firebase/analytics-compat",nm="@firebase/analytics",sm="@firebase/app-check-compat",rm="@firebase/app-check",im="@firebase/auth",om="@firebase/auth-compat",am="@firebase/database",cm="@firebase/database-compat",lm="@firebase/functions",um="@firebase/functions-compat",hm="@firebase/installations",dm="@firebase/installations-compat",fm="@firebase/messaging",pm="@firebase/messaging-compat",gm="@firebase/performance",mm="@firebase/performance-compat",ym="@firebase/remote-config",_m="@firebase/remote-config-compat",vm="@firebase/storage",wm="@firebase/storage-compat",bm="@firebase/firestore",Im="@firebase/firestore-compat",Tm="firebase",Em="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="[DEFAULT]",km={[mo]:"fire-core",[em]:"fire-core-compat",[nm]:"fire-analytics",[tm]:"fire-analytics-compat",[rm]:"fire-app-check",[sm]:"fire-app-check-compat",[im]:"fire-auth",[om]:"fire-auth-compat",[am]:"fire-rtdb",[cm]:"fire-rtdb-compat",[lm]:"fire-fn",[um]:"fire-fn-compat",[hm]:"fire-iid",[dm]:"fire-iid-compat",[fm]:"fire-fcm",[pm]:"fire-fcm-compat",[gm]:"fire-perf",[mm]:"fire-perf-compat",[ym]:"fire-rc",[_m]:"fire-rc-compat",[vm]:"fire-gcs",[wm]:"fire-gcs-compat",[bm]:"fire-fst",[Im]:"fire-fst-compat","fire-js":"fire-js",[Tm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,_o=new Map;function Sm(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(_o.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,t);for(const n of Cr.values())Sm(n,t);return!0}function ln(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new cn("app","Firebase",Am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=Em;function Xu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ot.create("bad-app-name",{appName:String(r)});if(n||(n=mg()),!n)throw Ot.create("no-options");const i=Cr.get(r);if(i){if(hs(n,i.options)&&hs(s,i.config))return i;throw Ot.create("duplicate-app",{appName:r})}const o=new Ug(r);for(const c of _o.values())o.addComponent(c);const a=new Cm(n,s,o);return Cr.set(r,a),a}function Xo(t=yo){const e=Cr.get(t);if(!e&&t===yo)return Xu();if(!e)throw Ot.create("no-app",{appName:t});return e}function Ge(t,e,n){var s;let r=(s=km[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}lt(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Dm="firebase-heartbeat-database",Rm=1,ds="firebase-heartbeat-store";let Hi=null;function Ju(){return Hi||(Hi=Yu(Dm,Rm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Hi}async function Nm(t){try{return(await Ju()).transaction(ds).objectStore(ds).get(Zu(t))}catch(e){if(e instanceof nt)en.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Ic(t,e){try{const s=(await Ju()).transaction(ds,"readwrite");return await s.objectStore(ds).put(e,Zu(t)),s.done}catch(n){if(n instanceof nt)en.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(s.message)}}}function Zu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Om=1024,$m=30*24*60*60*1e3;class Pm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=$m}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:s}=Mm(this._heartbeatsCache.heartbeats),r=Ar(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tc(){return new Date().toISOString().substring(0,10)}function Mm(t,e=Om){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ec(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ec(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ku()?Gu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ec(t){return Ar(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){lt(new Ze("platform-logger",e=>new Jg(e),"PRIVATE")),lt(new Ze("heartbeat",e=>new Pm(e),"PRIVATE")),Ge(mo,bc,t),Ge(mo,bc,"esm2017"),Ge("fire-js","")}Um("");function Jo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function eh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fm=eh,th=new cn("auth","Firebase",eh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new ni("@firebase/auth");function mr(t,...e){kc.logLevel<=re.ERROR&&kc.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,...e){throw Zo(t,...e)}function it(t,...e){return Zo(t,...e)}function nh(t,e,n){const s=Object.assign(Object.assign({},Fm()),{[e]:n});return new cn("auth","Firebase",s).create(e,{appName:t.name})}function xm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ye(t,"argument-error"),nh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return th.create(t,...e)}function q(t,e,...n){if(!t)throw Zo(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mr(e),new Error(e)}function wt(t,e){t||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new Map;function pt(t){wt(t instanceof Function,"Expected a class definition");let e=Sc.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){const n=ln(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(hs(i,e??{}))return r;Ye(r,"already-initialized")}return n.initialize({options:e})}function Bm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jm(){return Ac()==="http:"||Ac()==="https:"}function Ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||Hu()||"connection"in navigator)?navigator.onLine:!0}function zm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=vg()||wg()}get(){return qm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new $s(3e4,6e4);function Ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ms(t,e,n,s,r={}){return rh(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sh.fetch()(ih(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Hm),e);try{const r=new Gm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw nh(t,u,l);Ye(t,u)}}catch(r){if(r instanceof nt)throw r;Ye(t,"internal-error",{message:String(r)})}}async function Ls(t,e,n,s,r={}){const i=await Ms(t,e,n,s,r);return"mfaPendingCredential"in i&&Ye(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ih(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ea(t.config,r):`${t.config.apiScheme}://${r}`}class Gm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(it(this.auth,"network-request-failed")),Km.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=it(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e){return Ms(t,"POST","/v1/accounts:delete",e)}async function Qm(t,e){return Ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ym(t,e=!1){const n=ke(t),s=await n.getIdToken(e),r=ta(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ns(Ki(r.auth_time)),issuedAtTime:ns(Ki(r.iat)),expirationTime:ns(Ki(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ki(t){return Number(t)*1e3}function ta(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return mr("JWT malformed, contained fewer than 3 sections"),null;try{const r=ju(n);return r?JSON.parse(r):(mr("Failed to decode base64 JWT payload"),null)}catch(r){return mr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Xm(t){const e=ta(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nt&&Jm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Jm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fs(t,Qm(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ny(i.providerUserInfo):[],a=ty(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oh(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ey(t){const e=ke(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ty(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ny(t){return t.map(e=>{var{providerId:n}=e,s=Jo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(t,e){const n=await rh(t,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ih(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sy(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ps;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Jo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fs(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ym(this,e)}reload(){return ey(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fs(this,Wm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:N,isAnonymous:O,providerData:R,stsTokenManager:X}=n;q(E&&X,e,"internal-error");const ue=ps.fromJSON(this.name,X);q(typeof E=="string",e,"internal-error"),At(h,e.name),At(d,e.name),q(typeof N=="boolean",e,"internal-error"),q(typeof O=="boolean",e,"internal-error"),At(p,e.name),At(m,e.name),At(g,e.name),At(y,e.name),At(b,e.name),At(v,e.name);const B=new Qt({uid:E,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:O,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:ue,createdAt:b,lastLoginAt:v});return R&&Array.isArray(R)&&(B.providerData=R.map(J=>Object.assign({},J))),y&&(B._redirectEventId=y),B}static async _fromIdTokenResponse(e,n,s=!1){const r=new ps;r.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Dr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ah.type="NONE";const Cc=ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class kn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yr(this.userKey,r.apiKey,i),this.fullPersistenceKey=yr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new kn(pt(Cc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||pt(Cc);const o=yr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Qt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new kn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new kn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dh(e))return"Blackberry";if(fh(e))return"Webos";if(na(e))return"Safari";if((e.includes("chrome/")||lh(e))&&!e.includes("edge/"))return"Chrome";if(hh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ch(t=Ve()){return/firefox\//i.test(t)}function na(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lh(t=Ve()){return/crios\//i.test(t)}function uh(t=Ve()){return/iemobile/i.test(t)}function hh(t=Ve()){return/android/i.test(t)}function dh(t=Ve()){return/blackberry/i.test(t)}function fh(t=Ve()){return/webos/i.test(t)}function si(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ry(t=Ve()){var e;return si(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iy(){return bg()&&document.documentMode===10}function ph(t=Ve()){return si(t)||hh(t)||fh(t)||dh(t)||/windows phone/i.test(t)||uh(t)}function oy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e=[]){let n;switch(t){case"Browser":n=Dc(Ve());break;case"Worker":n=`${Dc(Ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${s}`}/**
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
 */class ay{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rc(this),this.idTokenSubscription=new Rc(this),this.beforeStateQueue=new ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=th,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Fn(t){return ke(t)}class Rc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ly(t,e,n){const s=Fn(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=mh(e),{host:o,port:a}=uy(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||hy()}function mh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uy(t){const e=mh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Nc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Nc(o)}}}function Nc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function dy(t,e){return Ms(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(t,e){return Ls(t,"POST","/v1/accounts:signInWithPassword",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t,e){return Ls(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}async function gy(t,e){return Ls(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends sa{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new gs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return fy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return py(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gy(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e){return Ls(t,"POST","/v1/accounts:signInWithIdp",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="http://localhost";class tn extends sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Jo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new tn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Sn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sn(e,n)}buildRequest(){const e={requestUri:my,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _y(t){const e=Qn(Yn(t)).link,n=e?Qn(Yn(e)).deep_link_id:null,s=Qn(Yn(t)).deep_link_id;return(s?Qn(Yn(s)).link:null)||s||n||e||t}class ra{constructor(e){var n,s,r,i,o,a;const c=Qn(Yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=yy((r=c.mode)!==null&&r!==void 0?r:null);q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_y(e);try{return new ra(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return gs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ra.parseLink(n);return q(s,"argument-error"),gs._fromEmailAndCode(e,s.code,s.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends ia{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Us{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ht.credential(n,s)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Us{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Us{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rt.credential(n,s)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(t,e){return Ls(t,"POST","/v1/accounts:signUp",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Qt._fromIdTokenResponse(e,s,r),o=Oc(s);return new nn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Oc(s);return new nn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Oc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends nt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Rr(e,n,s,r)}}function yh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(t,i,e,s):i})}async function wy(t,e,n=!1){const s=await fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await fs(t,yh(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=ta(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),nn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(t,e,n=!1){const s="signIn",r=await yh(t,s,e),i=await nn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Iy(t,e){return _h(Fn(t),e)}async function Ty(t,e,n){const s=Fn(t),r=await vy(s,{returnSecureToken:!0,email:e,password:n}),i=await nn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Ey(t,e,n){return Iy(ke(t),xn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){return ke(t).setPersistence(e)}function Sy(t,e,n,s){return ke(t).onIdTokenChanged(e,n,s)}function Ay(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function vh(t,e,n,s){return ke(t).onAuthStateChanged(e,n,s)}function Cy(t){return ke(t).signOut()}const Nr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(){const t=Ve();return na(t)||si(t)}const Ry=1e3,Ny=10;class bh extends wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dy()&&oy(),this.fallbackToPolling=ph(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);iy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ny):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bh.type="LOCAL";const Ih=bh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Th.type="SESSION";const Eh=Th;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ri(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Oy(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ri.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=oa("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function Py(t){ot().location.href=t}/**
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
 */function kh(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function My(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ly(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uy(){return kh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="firebaseLocalStorageDb",Fy=1,Or="firebaseLocalStorage",Ah="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ii(t,e){return t.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function xy(){const t=indexedDB.deleteDatabase(Sh);return new Fs(t).toPromise()}function wo(){const t=indexedDB.open(Sh,Fy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Or,{keyPath:Ah})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Or)?e(s):(s.close(),await xy(),e(await wo()))})})}async function $c(t,e,n){const s=ii(t,!0).put({[Ah]:e,value:n});return new Fs(s).toPromise()}async function Vy(t,e){const n=ii(t,!1).get(e),s=await new Fs(n).toPromise();return s===void 0?null:s.value}function Pc(t,e){const n=ii(t,!0).delete(e);return new Fs(n).toPromise()}const By=800,jy=3;class Ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ri._getInstance(Uy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await My(),!this.activeServiceWorker)return;this.sender=new $y(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ly()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wo();return await $c(e,Nr,"1"),await Pc(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$c(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Vy(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ii(r,!1).getAll();return new Fs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),By)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ch.type="LOCAL";const qy=Ch;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=it("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",zy().appendChild(s)})}function Ky(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $s(3e4,6e4);/**
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
 */function Dh(t,e){return e?pt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gy(t){return _h(t.auth,new aa(t),t.bypassAuthState)}function Wy(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),by(n,new aa(t),t.bypassAuthState)}async function Qy(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),wy(n,new aa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gy;case"linkViaPopup":case"linkViaRedirect":return Qy;case"reauthViaPopup":case"reauthViaRedirect":return Wy;default:Ye(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new $s(2e3,1e4);async function Xy(t,e,n){const s=Fn(t);xm(t,e,ia);const r=Dh(s,n);return new zt(s,"signInViaPopup",e,r).executeNotNull()}class zt extends Rh{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Yy.get())};e()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="pendingRedirect",_r=new Map;class Zy extends Rh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const s=await e_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e_(t,e){const n=s_(e),s=n_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function t_(t,e){_r.set(t._key(),e)}function n_(t){return pt(t._redirectPersistence)}function s_(t){return yr(Jy,t.config.apiKey,t.name)}async function r_(t,e,n=!1){const s=Fn(t),r=Dh(s,e),o=await new Zy(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=10*60*1e3;class o_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Nh(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(it(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mc(e))}saveEventToCache(e){this.cachedEventUids.add(Mc(e)),this.lastProcessedEventTime=Date.now()}}function Mc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t,e={}){return Ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u_=/^https?/;async function h_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await c_(t);for(const n of e)try{if(d_(n))return}catch{}Ye(t,"unauthorized-domain")}function d_(t){const e=vo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!u_.test(n))return!1;if(l_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const f_=new $s(3e4,6e4);function Lc(){const t=ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function p_(t){return new Promise((e,n)=>{var s,r,i;function o(){Lc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lc(),n(it(t,"network-request-failed"))},timeout:f_.get()})}if(!((r=(s=ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)o();else{const a=Ky("iframefcb");return ot()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},Hy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vr=null,e})}let vr=null;function g_(t){return vr=vr||p_(t),vr}/**
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
 */const m_=new $s(5e3,15e3),y_="__/auth/iframe",__="emulator/auth/iframe",v_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b_(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ea(e,__):`https://${t.config.authDomain}/${y_}`,s={apiKey:e.apiKey,appName:t.name,v:Os},r=w_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ns(s).slice(1)}`}async function I_(t){const e=await g_(t),n=ot().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:b_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=ot().setTimeout(()=>{i(o)},m_.get());function c(){ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E_=500,k_=600,S_="_blank",A_="http://localhost";class Uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C_(t,e,n,s=E_,r=k_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},T_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ve().toLowerCase();n&&(a=lh(l)?S_:n),ch(l)&&(e=e||A_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(ry(l)&&a!=="_self")return D_(e||"",a),new Uc(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Uc(h)}function D_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const R_="__/auth/handler",N_="emulator/auth/handler";function Fc(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Os,eventId:r};if(e instanceof ia){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Us){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${O_(t)}?${Ns(a).slice(1)}`}function O_({config:t}){return t.emulator?ea(t,N_):`https://${t.authDomain}/${R_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="webStorageSupport";class $_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eh,this._completeRedirectFn=r_,this._overrideRedirectResult=t_}async _openPopup(e,n,s,r){var i;wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Fc(e,n,s,vo(),r);return C_(e,o,oa())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Py(Fc(e,n,s,vo(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(wt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await I_(e),s=new o_(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gi,{type:Gi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Gi];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ph()||na()||si()}}const P_=$_;var xc="@firebase/auth",Vc="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function U_(t){lt(new Ze("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(t)},u=new cy(a,c,l);return Bm(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),lt(new Ze("auth-internal",e=>{const n=Fn(e.getProvider("auth").getImmediate());return(s=>new M_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(xc,Vc,L_(t)),Ge(xc,Vc,"esm2017")}/**
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
 */const F_=5*60,x_=zu("authIdTokenMaxAge")||F_;let Bc=null;const V_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>x_)return;const r=n==null?void 0:n.token;Bc!==r&&(Bc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function B_(t=Xo()){const e=ln(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vm(t,{popupRedirectResolver:P_,persistence:[qy,Ih,Eh]}),s=zu("authTokenSyncURL");if(s){const i=V_(s);Ay(n,i,()=>i(n.currentUser)),Sy(n,o=>i(o))}const r=qu("auth");return r&&ly(n,`http://${r}`),n}U_("Browser");const Oh="@firebase/installations",ca="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1e4,Ph=`w:${ca}`,Mh="FIS_v2",j_="https://firebaseinstallations.googleapis.com/v1",q_=60*60*1e3,z_="installations",H_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},sn=new cn(z_,H_,K_);function Lh(t){return t instanceof nt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh({projectId:t}){return`${j_}/projects/${t}/installations`}function Fh(t){return{token:t.token,requestStatus:2,expiresIn:W_(t.expiresIn),creationTime:Date.now()}}async function xh(t,e){const s=(await e.json()).error;return sn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Vh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function G_(t,{refreshToken:e}){const n=Vh(t);return n.append("Authorization",Q_(e)),n}async function Bh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function W_(t){return Number(t.replace("s","000"))}function Q_(t){return`${Mh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Uh(t),r=Vh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Mh,appId:t.appId,sdkVersion:Ph},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Bh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fh(l.authToken)}}else throw await xh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/^[cdef][\w-]{21}$/,bo="";function Z_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ev(t);return J_.test(n)?n:bo}catch{return bo}}function ev(t){return X_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Map;function zh(t,e){const n=oi(t);Hh(n,e),tv(n,e)}function Hh(t,e){const n=qh.get(t);if(n)for(const s of n)s(e)}function tv(t,e){const n=nv();n&&n.postMessage({key:t,fid:e}),sv()}let Ht=null;function nv(){return!Ht&&"BroadcastChannel"in self&&(Ht=new BroadcastChannel("[Firebase] FID Change"),Ht.onmessage=t=>{Hh(t.data.key,t.data.fid)}),Ht}function sv(){qh.size===0&&Ht&&(Ht.close(),Ht=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebase-installations-database",iv=1,rn="firebase-installations-store";let Wi=null;function la(){return Wi||(Wi=Yu(rv,iv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rn)}}})),Wi}async function $r(t,e){const n=oi(t),r=(await la()).transaction(rn,"readwrite"),i=r.objectStore(rn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&zh(t,e.fid),e}async function Kh(t){const e=oi(t),s=(await la()).transaction(rn,"readwrite");await s.objectStore(rn).delete(e),await s.done}async function ai(t,e){const n=oi(t),r=(await la()).transaction(rn,"readwrite"),i=r.objectStore(rn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&zh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t){let e;const n=await ai(t.appConfig,s=>{const r=ov(s),i=av(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===bo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ov(t){const e=t||{fid:Z_(),registrationStatus:0};return Gh(e)}function av(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(sn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=cv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lv(t)}:{installationEntry:e}}async function cv(t,e){try{const n=await Y_(t,e);return $r(t.appConfig,n)}catch(n){throw Lh(n)&&n.customData.serverCode===409?await Kh(t.appConfig):await $r(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lv(t){let e=await jc(t.appConfig);for(;e.registrationStatus===1;)await jh(100),e=await jc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ua(t);return s||n}return e}function jc(t){return ai(t,e=>{if(!e)throw sn.create("installation-not-found");return Gh(e)})}function Gh(t){return uv(t)?{fid:t.fid,registrationStatus:0}:t}function uv(t){return t.registrationStatus===1&&t.registrationTime+$h<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv({appConfig:t,heartbeatServiceProvider:e},n){const s=dv(t,n),r=G_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ph,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Bh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Fh(l)}else throw await xh("Generate Auth Token",c)}function dv(t,{fid:e}){return`${Uh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e=!1){let n;const s=await ai(t.appConfig,i=>{if(!Wh(i))throw sn.create("not-registered");const o=i.authToken;if(!e&&gv(o))return i;if(o.requestStatus===1)return n=fv(t,e),i;{if(!navigator.onLine)throw sn.create("app-offline");const a=yv(i);return n=pv(t,a),a}});return n?await n:s.authToken}async function fv(t,e){let n=await qc(t.appConfig);for(;n.authToken.requestStatus===1;)await jh(100),n=await qc(t.appConfig);const s=n.authToken;return s.requestStatus===0?ha(t,e):s}function qc(t){return ai(t,e=>{if(!Wh(e))throw sn.create("not-registered");const n=e.authToken;return _v(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pv(t,e){try{const n=await hv(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await $r(t.appConfig,s),n}catch(n){if(Lh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $r(t.appConfig,s)}throw n}}function Wh(t){return t!==void 0&&t.registrationStatus===2}function gv(t){return t.requestStatus===2&&!mv(t)}function mv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+q_}function yv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _v(t){return t.requestStatus===1&&t.requestTime+$h<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t){const e=t,{installationEntry:n,registrationPromise:s}=await ua(e);return s?s.catch(console.error):ha(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e=!1){const n=t;return await bv(n),(await ha(n,e)).token}async function bv(t){const{registrationPromise:e}=await ua(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){if(!t||!t.options)throw Qi("App Configuration");if(!t.name)throw Qi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qi(t){return sn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="installations",Tv="installations-internal",Ev=t=>{const e=t.getProvider("app").getImmediate(),n=Iv(e),s=ln(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kv=t=>{const e=t.getProvider("app").getImmediate(),n=ln(e,Qh).getImmediate();return{getId:()=>vv(n),getToken:r=>wv(n,r)}};function Sv(){lt(new Ze(Qh,Ev,"PUBLIC")),lt(new Ze(Tv,kv,"PRIVATE"))}Sv();Ge(Oh,ca);Ge(Oh,ca,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="analytics",Av="firebase_id",Cv="origin",Dv=60*1e3,Rv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new ni("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Nv(t,e){const n=document.createElement("script");n.src=`${Yh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Ov(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $v(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Xh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){ze.error(a)}t("config",r,i)}async function Pv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Xh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){ze.error(i)}}function Mv(t,e,n,s){async function r(i,o,a){try{i==="event"?await Pv(t,e,n,o,a):i==="config"?await $v(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){ze.error(c)}}return r}function Lv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Mv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Uv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Yh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},We=new cn("analytics","Analytics",Fv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=30,Vv=1e3;class Bv{constructor(e={},n=Vv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jh=new Bv;function jv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:jv(s)},i=Rv.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function zv(t,e=Jh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw We.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw We.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Gv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Dv),Zh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Zh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Jh){var i;const{appId:o,measurementId:a}=t;try{await Hv(s,e)}catch(c){if(a)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await qv(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Kv(l)){if(r.deleteThrottleMetadata(o),a)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?yc(n,r.intervalMillis,xv):yc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),ze.debug(`Calling attemptFetch again in ${u} millis`),Zh(t,h,s,r)}}function Hv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kv(t){if(!(t instanceof nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Wv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(){if(Ku())try{await Gu()}catch(t){return ze.warn(We.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ze.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yv(t,e,n,s,r,i,o){var a;const c=zv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>ze.error(p)),e.push(c);const l=Qv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);Uv(i)||Nv(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Cv]="firebase",d.update=!0,h!=null&&(d[Av]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.app=e}_delete(){return delete ss[this.app.options.appId],Promise.resolve()}}let ss={},zc=[];const Hc={};let Yi="dataLayer",Jv="gtag",Kc,ed,Gc=!1;function Zv(){const t=[];if(Hu()&&t.push("This is a browser extension environment."),Ig()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=We.create("invalid-analytics-context",{errorInfo:e});ze.warn(n.message)}}function ew(t,e,n){Zv();const s=t.options.appId;if(!s)throw We.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(ss[s]!=null)throw We.create("already-exists",{id:s});if(!Gc){Ov(Yi);const{wrappedGtag:i,gtagCore:o}=Lv(ss,zc,Hc,Yi,Jv);ed=i,Kc=o,Gc=!0}return ss[s]=Yv(t,zc,Hc,e,Kc,Yi,n),new Xv(t)}function tw(t=Xo()){t=ke(t);const e=ln(t,Pr);return e.isInitialized()?e.getImmediate():nw(t)}function nw(t,e={}){const n=ln(t,Pr);if(n.isInitialized()){const r=n.getImmediate();if(hs(e,n.getOptions()))return r;throw We.create("already-initialized")}return n.initialize({options:e})}function sw(t,e,n,s){t=ke(t),Wv(ed,ss[t.app.options.appId],e,n,s).catch(r=>ze.error(r))}const Wc="@firebase/analytics",Qc="0.9.4";function rw(){lt(new Ze(Pr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ew(s,r,n)},"PUBLIC")),lt(new Ze("analytics-internal",t,"PRIVATE")),Ge(Wc,Qc),Ge(Wc,Qc,"esm2017");function t(e){try{const n=e.getProvider(Pr).getImmediate();return{logEvent:(s,r,i)=>sw(n,s,r,i)}}catch(n){throw We.create("interop-component-reg-failed",{reason:n})}}}rw();var iw="firebase",ow="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(iw,ow,"app");var aw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,da=da||{},H=aw||self;function Mr(){}function ci(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cw(t){return Object.prototype.hasOwnProperty.call(t,Xi)&&t[Xi]||(t[Xi]=++lw)}var Xi="closure_uid_"+(1e9*Math.random()>>>0),lw=0;function uw(t,e,n){return t.call.apply(t.bind,arguments)}function hw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=uw:Fe=hw,Fe.apply(null,arguments)}function ar(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ft(){this.s=this.s,this.o=this.o}var dw=0;Ft.prototype.s=!1;Ft.prototype.na=function(){!this.s&&(this.s=!0,this.M(),dw!=0)&&cw(this)};Ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const td=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fa(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ci(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var fw=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Mr,e),H.removeEventListener("test",Mr,e)}catch{}return t}();function Lr(t){return/^[\s\xa0]*$/.test(t)}var Xc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ji(t,e){return t<e?-1:t>e?1:0}function li(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function st(t){return li().indexOf(t)!=-1}function pa(t){return pa[" "](t),t}pa[" "]=Mr;function pw(t){var e=yw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gw=st("Opera"),Dn=st("Trident")||st("MSIE"),nd=st("Edge"),Io=nd||Dn,sd=st("Gecko")&&!(li().toLowerCase().indexOf("webkit")!=-1&&!st("Edge"))&&!(st("Trident")||st("MSIE"))&&!st("Edge"),mw=li().toLowerCase().indexOf("webkit")!=-1&&!st("Edge");function rd(){var t=H.document;return t?t.documentMode:void 0}var Ur;e:{var Zi="",eo=function(){var t=li();if(sd)return/rv:([^\);]+)(\)|;)/.exec(t);if(nd)return/Edge\/([\d\.]+)/.exec(t);if(Dn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mw)return/WebKit\/(\S+)/.exec(t);if(gw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(eo&&(Zi=eo?eo[1]:""),Dn){var to=rd();if(to!=null&&to>parseFloat(Zi)){Ur=String(to);break e}}Ur=Zi}var yw={};function _w(){return pw(function(){let t=0;const e=Xc(String(Ur)).split("."),n=Xc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ji(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ji(r[2].length==0,i[2].length==0)||Ji(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var To;if(H.document&&Dn){var Jc=rd();To=Jc||parseInt(Ur,10)||void 0}else To=void 0;var vw=To;function ms(t,e){if(xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sd){e:{try{pa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ww[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ms.X.h.call(this)}}Ne(ms,xe);var ww={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vs="closure_listenable_"+(1e6*Math.random()|0),bw=0;function Iw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++bw,this.ba=this.ea=!1}function ui(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ga(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function id(t){const e={};for(const n in t)e[n]=t[n];return e}const Zc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function od(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Zc.length;i++)n=Zc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function hi(t){this.src=t,this.g={},this.h=0}hi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ko(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Iw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Eo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=td(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ui(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ko(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ma="closure_lm_"+(1e6*Math.random()|0),no={};function ad(t,e,n,s,r){if(s&&s.once)return ld(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ad(t,e[i],n,s,r);return null}return n=va(n),t&&t[Vs]?t.N(e,n,xs(s)?!!s.capture:!!s,r):cd(t,e,n,!1,s,r)}function cd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xs(r)?!!r.capture:!!r,a=_a(t);if(a||(t[ma]=a=new hi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Tw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)fw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(hd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Tw(){function t(n){return e.call(t.src,t.listener,n)}const e=Ew;return t}function ld(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ld(t,e[i],n,s,r);return null}return n=va(n),t&&t[Vs]?t.O(e,n,xs(s)?!!s.capture:!!s,r):cd(t,e,n,!0,s,r)}function ud(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ud(t,e[i],n,s,r);else s=xs(s)?!!s.capture:!!s,n=va(n),t&&t[Vs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ko(i,n,s,r),-1<n&&(ui(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_a(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ko(e,n,s,r)),(n=-1<t?e[t]:null)&&ya(n))}function ya(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Vs])Eo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(hd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_a(e))?(Eo(n,t),n.h==0&&(n.src=null,e[ma]=null)):ui(t)}}}function hd(t){return t in no?no[t]:no[t]="on"+t}function Ew(t,e){if(t.ba)t=!0;else{e=new ms(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ya(t),t=n.call(s,e)}return t}function _a(t){return t=t[ma],t instanceof hi?t:null}var so="__closure_events_fn_"+(1e9*Math.random()>>>0);function va(t){return typeof t=="function"?t:(t[so]||(t[so]=function(e){return t.handleEvent(e)}),t[so])}function Ce(){Ft.call(this),this.i=new hi(this),this.P=this,this.I=null}Ne(Ce,Ft);Ce.prototype[Vs]=!0;Ce.prototype.removeEventListener=function(t,e,n,s){ud(this,t,e,n,s)};function Re(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new xe(e,t);else if(e instanceof xe)e.target=e.target||t;else{var r=e;e=new xe(s,t),od(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=cr(o,s,!0,e)&&r}if(o=e.g=t,r=cr(o,s,!0,e)&&r,r=cr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=cr(o,s,!1,e)&&r}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ui(n[s]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ce.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function cr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Eo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var wa=H.JSON.stringify;function kw(){var t=pd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Sw{constructor(){this.h=this.g=null}add(e,n){const s=dd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var dd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Aw,t=>t.reset());class Aw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Cw(t){H.setTimeout(()=>{throw t},0)}function fd(t,e){So||Dw(),Ao||(So(),Ao=!0),pd.add(t,e)}var So;function Dw(){var t=H.Promise.resolve(void 0);So=function(){t.then(Rw)}}var Ao=!1,pd=new Sw;function Rw(){for(var t;t=kw();){try{t.h.call(t.g)}catch(n){Cw(n)}var e=dd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ao=!1}function di(t,e){Ce.call(this),this.h=t||1,this.g=e||H,this.j=Fe(this.lb,this),this.l=Date.now()}Ne(di,Ce);U=di.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Re(this,"tick"),this.ca&&(ba(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ba(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){di.X.M.call(this),ba(this),delete this.g};function Ia(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function gd(t){t.g=Ia(()=>{t.g=null,t.i&&(t.i=!1,gd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Nw extends Ft{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gd(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(t){Ft.call(this),this.h=t,this.g={}}Ne(ys,Ft);var el=[];function md(t,e,n,s){Array.isArray(n)||(n&&(el[0]=n.toString()),n=el);for(var r=0;r<n.length;r++){var i=ad(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function yd(t){ga(t.g,function(e,n){this.g.hasOwnProperty(n)&&ya(e)},t),t.g={}}ys.prototype.M=function(){ys.X.M.call(this),yd(this)};ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fi(){this.g=!0}fi.prototype.Aa=function(){this.g=!1};function Ow(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function $w(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Tn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Mw(t,n)+(s?" "+s:"")})}function Pw(t,e){t.info(function(){return"TIMEOUT: "+e})}fi.prototype.info=function(){};function Mw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wa(n)}catch{return e}}var un={},tl=null;function pi(){return tl=tl||new Ce}un.Pa="serverreachability";function _d(t){xe.call(this,un.Pa,t)}Ne(_d,xe);function _s(t){const e=pi();Re(e,new _d(e))}un.STAT_EVENT="statevent";function vd(t,e){xe.call(this,un.STAT_EVENT,t),this.stat=e}Ne(vd,xe);function je(t){const e=pi();Re(e,new vd(e,t))}un.Qa="timingevent";function wd(t,e){xe.call(this,un.Qa,t),this.size=e}Ne(wd,xe);function Bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var gi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ta(){}Ta.prototype.h=null;function nl(t){return t.h||(t.h=t.i())}function Id(){}var js={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ea(){xe.call(this,"d")}Ne(Ea,xe);function ka(){xe.call(this,"c")}Ne(ka,xe);var Co;function mi(){}Ne(mi,Ta);mi.prototype.g=function(){return new XMLHttpRequest};mi.prototype.i=function(){return{}};Co=new mi;function qs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ys(this),this.O=Lw,t=Io?125:void 0,this.T=new di(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Td}function Td(){this.i=null,this.g="",this.h=!1}var Lw=45e3,Do={},Fr={};U=qs.prototype;U.setTimeout=function(t){this.O=t};function Ro(t,e,n){t.K=1,t.v=_i(bt(e)),t.s=n,t.P=!0,Ed(t,null)}function Ed(t,e){t.F=Date.now(),zs(t),t.A=bt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Od(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Td,t.g=Zd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Nw(Fe(t.La,t,t.g),t.N)),md(t.S,t.g,"readystatechange",t.ib),e=t.H?id(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_s(),Ow(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&gt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=gt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Io||this.g&&(this.h.h||this.g.fa()||ol(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_s(3):_s(2)),yi(this);var n=this.g.aa();this.Y=n;t:if(kd(this)){var s=ol(this.g);t="";var r=s.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),rs(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,$w(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lr(a)){var l=a;break t}}l=null}if(n=l)Tn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,No(this,n);else{this.i=!1,this.o=3,je(12),Kt(this),rs(this);break e}}this.P?(Sd(this,u,o),Io&&this.i&&u==3&&(md(this.S,this.T,"tick",this.hb),this.T.start())):(Tn(this.j,this.m,o,null),No(this,o)),u==4&&Kt(this),this.i&&!this.I&&(u==4?Qd(this.l,this):(this.i=!1,zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),Kt(this),rs(this)}}}catch{}finally{}};function kd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Sd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Uw(t,n),r==Fr){e==4&&(t.o=4,je(14),s=!1),Tn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Do){t.o=4,je(15),Tn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Tn(t.j,t.m,r,null),No(t,r);kd(t)&&r!=Fr&&r!=Do&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Oa(e),e.K=!0,je(11))):(Tn(t.j,t.m,n,"[Invalid Chunked Response]"),Kt(t),rs(t))}U.hb=function(){if(this.g){var t=gt(this.g),e=this.g.fa();this.C<e.length&&(yi(this),Sd(this,t,e),this.i&&t!=4&&zs(this))}};function Uw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fr:(n=Number(e.substring(n,s)),isNaN(n)?Do:(s+=1,s+n>e.length?Fr:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,Kt(this)};function zs(t){t.V=Date.now()+t.O,Ad(t,t.O)}function Ad(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bs(Fe(t.gb,t),e)}function yi(t){t.B&&(H.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Pw(this.j,this.A),this.K!=2&&(_s(),je(17)),Kt(this),this.o=2,rs(this)):Ad(this,this.V-t)};function rs(t){t.l.G==0||t.I||Qd(t.l,t)}function Kt(t){yi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ba(t.T),yd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function No(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Oo(n.h,t))){if(!t.J&&Oo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Br(n),bi(n);else break e;Na(n),je(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bs(Fe(n.cb,n),6e3));if(1>=Md(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gt(n,11)}else if((t.J||n.g==t)&&Br(n),!Lr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sa(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,ge(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Jd(s,s.H?s.ka:null,s.V),o.J){Ld(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(yi(a),zs(a)),s.g=o}else Gd(s);0<n.i.length&&Ii(n)}else l[0]!="stop"&&l[0]!="close"||Gt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Gt(n,7):Ra(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}_s(4)}catch{}}function Fw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ci(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function xw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ci(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Cd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ci(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xw(t),s=Fw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Dd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Yt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Yt){this.h=e!==void 0?e:t.h,xr(this,t.j),this.s=t.s,this.g=t.g,Vr(this,t.m),this.l=t.l,e=t.i;var n=new vs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sl(this,n),this.o=t.o}else t&&(n=String(t).match(Dd))?(this.h=!!e,xr(this,n[1]||"",!0),this.s=Xn(n[2]||""),this.g=Xn(n[3]||"",!0),Vr(this,n[4]),this.l=Xn(n[5]||"",!0),sl(this,n[6]||"",!0),this.o=Xn(n[7]||"")):(this.h=!!e,this.i=new vs(null,this.h))}Yt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jn(e,rl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jn(e,rl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jn(n,n.charAt(0)=="/"?qw:jw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jn(n,Hw)),t.join("")};function bt(t){return new Yt(t)}function xr(t,e,n){t.j=n?Xn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sl(t,e,n){e instanceof vs?(t.i=e,Kw(t.i,t.h)):(n||(e=Jn(e,zw)),t.i=new vs(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function _i(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Bw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rl=/[#\/\?@]/g,jw=/[#\?:]/g,qw=/[#\?]/g,zw=/[#\?@]/g,Hw=/#/g;function vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xt(t){t.g||(t.g=new Map,t.h=0,t.i&&Vw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=vs.prototype;U.add=function(t,e){xt(this),this.i=null,t=Vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rd(t,e){xt(t),e=Vn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Nd(t,e){return xt(t),e=Vn(t,e),t.g.has(e)}U.forEach=function(t,e){xt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){xt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){xt(this);let e=[];if(typeof t=="string")Nd(this,t)&&(e=e.concat(this.g.get(Vn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return xt(this),this.i=null,t=Vn(this,t),Nd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Od(t,e,n){Rd(t,e),0<n.length&&(t.i=null,t.g.set(Vn(t,e),fa(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Kw(t,e){e&&!t.j&&(xt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rd(this,s),Od(this,r,n))},t)),t.j=e}var Gw=class{constructor(e,n){this.h=e,this.g=n}};function $d(t){this.l=t||Ww,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ga&&H.g.Ga()&&H.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ww=10;function Pd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Md(t){return t.h?1:t.g?t.g.size:0}function Oo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sa(t,e){t.g?t.g.add(e):t.h=e}function Ld(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$d.prototype.cancel=function(){if(this.i=Ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ud(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fa(t.i)}function Aa(){}Aa.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Aa.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function Qw(){this.g=new Aa}function Yw(t,e,n){const s=n||"";try{Cd(t,function(r,i){let o=r;xs(r)&&(o=wa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Xw(t,e){const n=new fi;if(H.Image){const s=new Image;s.onload=ar(lr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ar(lr,n,s,"TestLoadImage: error",!1,e),s.onabort=ar(lr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ar(lr,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function lr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hs(t){this.l=t.ac||null,this.j=t.jb||!1}Ne(Hs,Ta);Hs.prototype.g=function(){return new vi(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function vi(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ca,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(vi,Ce);var Ca=0;U=vi.prototype;U.open=function(t,e){if(this.readyState!=Ca)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ws(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=Ca};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Fd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):ws(this),this.readyState==3&&Fd(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Ks(this))};U.Ua=function(t){this.g&&(this.response=t,Ks(this))};U.ga=function(){this.g&&Ks(this)};function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ws(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Jw=H.JSON.parse;function ye(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xd,this.K=this.L=!1}Ne(ye,Ce);var xd="",Zw=/^https?$/i,e0=["POST","PUT"];U=ye.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Co.g(),this.C=this.u?nl(this.u):nl(Co),this.g.onreadystatechange=Fe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){il(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=H.FormData&&t instanceof H.FormData,!(0<=td(e0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jd(this),0<this.B&&((this.K=t0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.qa,this)):this.A=Ia(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){il(this,i)}};function t0(t){return Dn&&_w()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof da<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function il(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vd(t),wi(t)}function Vd(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),wi(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wi(this,!0)),ye.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Bd(this):this.fb())};U.fb=function(){Bd(this)};function Bd(t){if(t.h&&typeof da<"u"&&(!t.C[1]||gt(t)!=4||t.aa()!=2)){if(t.v&&gt(t)==4)Ia(t.Ha,0,t);else if(Re(t,"readystatechange"),gt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Dd)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!Zw.test(r?r.toLowerCase():"")}n=s}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Vd(t)}}finally{wi(t)}}}}function wi(t,e){if(t.g){jd(t);const n=t.g,s=t.C[0]?Mr:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=s}catch{}}}function jd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function gt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Jw(e)}};function ol(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qd(t){let e="";return ga(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Da(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=qd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zd(t){this.Ca=0,this.i=[],this.j=new fi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $d(t&&t.concurrentRequestLimit),this.Fa=new Qw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=zd.prototype;U.ma=8;U.G=1;function Ra(t){if(Hd(t),t.G==3){var e=t.U++,n=bt(t.F);ge(n,"SID",t.I),ge(n,"RID",e),ge(n,"TYPE","terminate"),Gs(t,n),e=new qs(t,t.j,e,void 0),e.K=2,e.v=_i(bt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Zd(e.l,null),e.g.da(e.v)),e.F=Date.now(),zs(e)}Xd(t)}function bi(t){t.g&&(Oa(t),t.g.cancel(),t.g=null)}function Hd(t){bi(t),t.u&&(H.clearTimeout(t.u),t.u=null),Br(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Ii(t){Pd(t.h)||t.m||(t.m=!0,fd(t.Ja,t),t.C=0)}function n0(t,e){return Md(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Bs(Fe(t.Ja,t,e),Yd(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new qs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=id(i),od(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Kd(this,r,e),n=bt(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Gs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(qd(i)))+"&"+e:this.o&&Da(n,this.o,i)),Sa(this.h,r),this.Ya&&ge(n,"TYPE","init"),this.O?(ge(n,"$req",e),ge(n,"SID","null"),r.Z=!0,Ro(r,n,null)):Ro(r,n,e),this.G=2}}else this.G==3&&(t?al(this,t):this.i.length==0||Pd(this.h)||al(this))};function al(t,e){var n;e?n=e.m:n=t.U++;const s=bt(t.F);ge(s,"SID",t.I),ge(s,"RID",n),ge(s,"AID",t.T),Gs(t,s),t.o&&t.s&&Da(s,t.o,t.s),n=new qs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Kd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Sa(t.h,n),Ro(n,s,e)}function Gs(t,e){t.ia&&ga(t.ia,function(n,s){ge(e,s,n)}),t.l&&Cd({},function(n,s){ge(e,s,n)})}function Kd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Fe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Yw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Gd(t){t.g||t.u||(t.Z=1,fd(t.Ia,t),t.A=0)}function Na(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Bs(Fe(t.Ia,t),Yd(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Wd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Bs(Fe(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,je(10),bi(this),Wd(this))};function Oa(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Wd(t){t.g=new qs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=bt(t.sa);ge(e,"RID","rpc"),ge(e,"SID",t.I),ge(e,"CI",t.L?"0":"1"),ge(e,"AID",t.T),ge(e,"TYPE","xmlhttp"),Gs(t,e),t.o&&t.s&&Da(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_i(bt(e)),n.s=null,n.P=!0,Ed(n,t)}U.cb=function(){this.v!=null&&(this.v=null,bi(this),Na(this),je(19))};function Br(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Qd(t,e){var n=null;if(t.g==e){Br(t),Oa(t),t.g=null;var s=2}else if(Oo(t.h,e))n=e.D,Ld(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=pi(),Re(s,new wd(s,n)),Ii(t)}else Gd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&n0(t,e)||s==2&&Na(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Gt(t,5);break;case 4:Gt(t,10);break;case 3:Gt(t,6);break;default:Gt(t,2)}}}function Yd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Gt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Fe(t.kb,t);n||(n=new Yt("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||xr(n,"https"),_i(n)),Xw(n.toString(),s)}else je(2);t.G=0,t.l&&t.l.va(e),Xd(t),Hd(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function Xd(t){if(t.G=0,t.la=[],t.l){const e=Ud(t.h);(e.length!=0||t.i.length!=0)&&(Yc(t.la,e),Yc(t.la,t.i),t.h.i.length=0,fa(t.i),t.i.length=0),t.l.ua()}}function Jd(t,e,n){var s=n instanceof Yt?bt(n):new Yt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Vr(s,s.m);else{var r=H.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Yt(null,void 0);s&&xr(i,s),e&&(i.g=e),r&&Vr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ge(s,n,e),ge(s,"VER",t.ma),Gs(t,s),s}function Zd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new Hs({jb:!0})):new ye(t.ra),e.Ka(t.H),e}function ef(){}U=ef.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function jr(){if(Dn&&!(10<=Number(vw)))throw Error("Environmental error: no available transport.")}jr.prototype.g=function(t,e){return new He(t,e)};function He(t,e){Ce.call(this),this.g=new zd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Lr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}Ne(He,Ce);He.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Jd(t,null,t.V),Ii(t)};He.prototype.close=function(){Ra(this.g)};He.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wa(t),t=n);e.i.push(new Gw(e.ab++,t)),e.G==3&&Ii(e)};He.prototype.M=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,He.X.M.call(this)};function tf(t){Ea.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(tf,Ea);function nf(){ka.call(this),this.status=1}Ne(nf,ka);function Bn(t){this.g=t}Ne(Bn,ef);Bn.prototype.xa=function(){Re(this.g,"a")};Bn.prototype.wa=function(t){Re(this.g,new tf(t))};Bn.prototype.va=function(t){Re(this.g,new nf)};Bn.prototype.ua=function(){Re(this.g,"b")};jr.prototype.createWebChannel=jr.prototype.g;He.prototype.send=He.prototype.u;He.prototype.open=He.prototype.m;He.prototype.close=He.prototype.close;gi.NO_ERROR=0;gi.TIMEOUT=8;gi.HTTP_ERROR=6;bd.COMPLETE="complete";Id.EventType=js;js.OPEN="a";js.CLOSE="b";js.ERROR="c";js.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;var s0=function(){return new jr},r0=function(){return pi()},ro=gi,i0=bd,o0=un,cl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},a0=Hs,ur=Id,c0=ye;const ll="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let jn="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new ni("@firebase/firestore");function ul(){return on.logLevel}function x(t,...e){if(on.logLevel<=re.DEBUG){const n=e.map($a);on.debug(`Firestore (${jn}): ${t}`,...n)}}function It(t,...e){if(on.logLevel<=re.ERROR){const n=e.map($a);on.error(`Firestore (${jn}): ${t}`,...n)}}function $o(t,...e){if(on.logLevel<=re.WARN){const n=e.map($a);on.warn(`Firestore (${jn}): ${t}`,...n)}}function $a(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: `+t;throw It(e),new Error(e)}function le(t,e){t||z()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class u0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class h0{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string"),new sf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new $e(e)}}class d0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class f0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new d0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.A=n.token,new p0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=m0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Rn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Te(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Te(0,0))}static max(){return new Q(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends bs{construct(e,n,s){return new he(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new he(n)}static emptyPath(){return new he([])}}const y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends bs{construct(e,n,s){return new Le(e,n,s)}static isValidIdentifier(e){return y0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(he.fromString(e))}static fromName(e){return new j(he.fromString(e).popFirst(5))}static empty(){return new j(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new he(e.slice()))}}function _0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new Te(n+1,0):new Te(n,s));return new Pt(r,j.empty(),e)}function v0(t){return new Pt(t.readTime,t.key,-1)}class Pt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(Q.min(),j.empty(),-1)}static max(){return new Pt(Q.max(),j.empty(),-1)}}function w0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==b0)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,s)=>{n(e)})}static reject(e){return new D((n,s)=>{s(e)})}static waitFor(e){return new D((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=D.resolve(!1);for(const s of e)n=n.next(r=>r?D.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new D((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new D((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Pa.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){return t==null}function qr(t){return t===0&&1/t==-1/0}function E0(t){return typeof t=="number"&&Number.isInteger(t)&&!qr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new k0("Invalid base64 string: "+r):r}}(e);return new Be(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const S0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(t){if(le(!!t),typeof t=="string"){let e=0;const n=S0.exec(t);if(le(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nn(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cf(t){const e=t.mapValue.fields.__previous_value__;return af(e)?cf(e):e}function Ts(t){const e=Mt(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:A0(t)?9007199254740991:10:z()}function ut(t,e){if(t===e)return!0;const n=an(t);if(n!==an(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ts(t).isEqual(Ts(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Mt(s.timestampValue),o=Mt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Nn(s.bytesValue).isEqual(Nn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=be(s.doubleValue),o=be(r.doubleValue);return i===o?qr(i)===qr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rn(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(hl(i)!==hl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ut(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Es(t,e){return(t.values||[]).find(n=>ut(n,e))!==void 0}function On(t,e){if(t===e)return 0;const n=an(t),s=an(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=be(r.integerValue||r.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return dl(t.timestampValue,e.timestampValue);case 4:return dl(Ts(t),Ts(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Nn(r),a=Nn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(be(r.latitude),be(i.latitude));return o!==0?o:oe(be(r.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=On(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===hr.mapValue&&i===hr.mapValue)return 0;if(r===hr.mapValue)return 1;if(i===hr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const d=On(o[a[u]],c[l[u]]);if(d!==0)return d}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function dl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Mt(t),s=Mt(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function $n(t){return Po(t)}function Po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Mt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Nn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Po(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Po(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function fl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mo(t){return!!t&&"integerValue"in t}function Ma(t){return!!t&&"arrayValue"in t}function pl(t){return!!t&&"nullValue"in t}function gl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wr(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=is(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function A0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zr{constructor(e,n){this.position=e,this.inclusive=n}}function ml(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=On(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function yl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lf{}class Ie extends lf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new D0(e,n,s):n==="array-contains"?new O0(e,s):n==="in"?new $0(e,s):n==="not-in"?new P0(e,s):n==="array-contains-any"?new M0(e,s):new Ie(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new R0(e,s):new N0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(On(n,this.value)):n!==null&&an(this.value)===an(n)&&this.matchesComparison(On(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class et extends lf{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new et(e,n)}matches(e){return uf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function uf(t){return t.op==="and"}function hf(t){return C0(t)&&uf(t)}function C0(t){for(const e of t.filters)if(e instanceof et)return!1;return!0}function Lo(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+$n(t.value);if(hf(t))return t.filters.map(e=>Lo(e)).join(",");{const e=t.filters.map(n=>Lo(n)).join(",");return`${t.op}(${e})`}}function df(t,e){return t instanceof Ie?function(n,s){return s instanceof Ie&&n.op===s.op&&n.field.isEqual(s.field)&&ut(n.value,s.value)}(t,e):t instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&df(i,s.filters[o]),!0):!1}(t,e):void z()}function ff(t){return t instanceof Ie?function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`}(t):t instanceof et?function(e){return e.op.toString()+" {"+e.getFilters().map(ff).join(" ,")+"}"}(t):"Filter"}class D0 extends Ie{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class R0 extends Ie{constructor(e,n){super(e,"in",n),this.keys=pf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N0 extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=pf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class O0 extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ma(n)&&Es(n.arrayValue,this.value)}}class $0 extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Es(this.value.arrayValue,n)}}class P0 extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Es(this.value.arrayValue,n)}}class M0 extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ma(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Es(this.value.arrayValue,s))}}/**
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
 */class os{constructor(e,n="asc"){this.field=e,this.dir=n}}function L0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dr(this.root,e,this.comparator,!0)}}class dr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??De.RED,this.left=r??De.EMPTY,this.right=i??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new De(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _l(this.data.getIterator())}getIteratorFrom(e){return new _l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class _l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Je([])}unionWith(e){let n=new Ee(Le.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Je(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!wr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(n)}setAll(e){let n=Le.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=is(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());wr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];wr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){qn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ke(is(this.value))}}function gf(t){const e=[];return qn(t.fields,(n,s)=>{const r=new Le([n]);if(wr(s)){const i=gf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,Q.min(),Q.min(),Q.min(),Ke.empty(),0)}static newFoundDocument(e,n,s,r){return new Pe(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new Pe(e,2,n,Q.min(),Q.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,Q.min(),Q.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function vl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new U0(t,e,n,s,r,i,o)}function La(t){const e=Y(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Lo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ti(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),e._t=n}return e._t}function Ua(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!L0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!df(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yl(t.startAt,e.startAt)&&yl(t.endAt,e.endAt)}function Uo(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function F0(t,e,n,s,r,i,o,a){return new Ys(t,e,n,s,r,i,o,a)}function Fa(t){return new Ys(t)}function wl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function yf(t){return t.collectionGroup!==null}function An(t){const e=Y(t);if(e.wt===null){e.wt=[];const n=xa(e),s=mf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new os(n)),e.wt.push(new os(Le.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new os(Le.keyField(),i))}}}return e.wt}function Tt(t){const e=Y(t);if(!e.gt)if(e.limitType==="F")e.gt=vl(e.path,e.collectionGroup,An(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of An(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new os(i.field,o))}const s=e.endAt?new zr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new zr(e.startAt.position,e.startAt.inclusive):null;e.gt=vl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Fo(t,e){e.getFirstInequalityField(),xa(t);const n=t.filters.concat([e]);return new Ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xo(t,e,n){return new Ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ei(t,e){return Ua(Tt(t),Tt(e))&&t.limitType===e.limitType}function _f(t){return`${La(Tt(t))}|lt:${t.limitType}`}function Vo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ff(s)).join(", ")}]`),Ti(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),`Target(${n})`}(Tt(t))}; limitType=${t.limitType})`}function ki(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of An(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ml(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,An(n),s)||n.endAt&&!function(r,i,o){const a=ml(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,An(n),s))}(t,e)}function x0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vf(t){return(e,n)=>{let s=!1;for(const r of An(t)){const i=V0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function V0(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?On(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qr(e)?"-0":e}}function bf(t){return{integerValue:""+t}}function B0(t,e){return E0(e)?bf(e):wf(t,e)}/**
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
 */class Si{constructor(){this._=void 0}}function j0(t,e,n){return t instanceof Hr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ks?Tf(t,e):t instanceof Ss?Ef(t,e):function(s,r){const i=If(s,r),o=bl(i)+bl(s.It);return Mo(i)&&Mo(s.It)?bf(o):wf(s.Tt,o)}(t,e)}function q0(t,e,n){return t instanceof ks?Tf(t,e):t instanceof Ss?Ef(t,e):n}function If(t,e){return t instanceof Kr?Mo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Hr extends Si{}class ks extends Si{constructor(e){super(),this.elements=e}}function Tf(t,e){const n=kf(e);for(const s of t.elements)n.some(r=>ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ss extends Si{constructor(e){super(),this.elements=e}}function Ef(t,e){let n=kf(e);for(const s of t.elements)n=n.filter(r=>!ut(r,s));return{arrayValue:{values:n}}}class Kr extends Si{constructor(e,n){super(),this.Tt=e,this.It=n}}function bl(t){return be(t.integerValue||t.doubleValue)}function kf(t){return Ma(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function z0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ks&&s instanceof ks||n instanceof Ss&&s instanceof Ss?Rn(n.elements,s.elements,ut):n instanceof Kr&&s instanceof Kr?ut(n.It,s.It):n instanceof Hr&&s instanceof Hr}(t.transform,e.transform)}class H0{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function br(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ai{}function Sf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Va(t.key,at.none()):new Xs(t.key,t.data,at.none());{const n=t.data,s=Ke.empty();let r=new Ee(Le.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new hn(t.key,s,new Je(r.toArray()),at.none())}}function K0(t,e,n){t instanceof Xs?function(s,r,i){const o=s.value.clone(),a=Tl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hn?function(s,r,i){if(!br(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Tl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Af(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function as(t,e,n,s){return t instanceof Xs?function(r,i,o,a){if(!br(r.precondition,i))return o;const c=r.value.clone(),l=El(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof hn?function(r,i,o,a){if(!br(r.precondition,i))return o;const c=El(r.fieldTransforms,a,i),l=i.data;return l.setAll(Af(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return br(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function G0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=If(s.transform,r||null);i!=null&&(n===null&&(n=Ke.empty()),n.set(s.field,i))}return n||null}function Il(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rn(n,s,(r,i)=>z0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xs extends Ai{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hn extends Ai{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Af(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Tl(t,e,n){const s=new Map;le(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,q0(o,a,n[r]))}return s}function El(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,j0(i,o,e))}return s}class Va extends Ai{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class W0 extends Ai{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,te;function Y0(t){switch(t){default:return z();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Cf(t){if(t===void 0)return It("GRPC error has no .code"),k.UNKNOWN;switch(t){case we.OK:return k.OK;case we.CANCELLED:return k.CANCELLED;case we.UNKNOWN:return k.UNKNOWN;case we.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case we.INTERNAL:return k.INTERNAL;case we.UNAVAILABLE:return k.UNAVAILABLE;case we.UNAUTHENTICATED:return k.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case we.NOT_FOUND:return k.NOT_FOUND;case we.ALREADY_EXISTS:return k.ALREADY_EXISTS;case we.PERMISSION_DENIED:return k.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case we.ABORTED:return k.ABORTED;case we.OUT_OF_RANGE:return k.OUT_OF_RANGE;case we.UNIMPLEMENTED:return k.UNIMPLEMENTED;case we.DATA_LOSS:return k.DATA_LOSS;default:return z()}}(te=we||(we={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return of(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Se(j.comparator);function Et(){return X0}const Df=new Se(j.comparator);function Zn(...t){let e=Df;for(const n of t)e=e.insert(n.key,n);return e}function Rf(t){let e=Df;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Wt(){return cs()}function Nf(){return cs()}function cs(){return new zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const J0=new Se(j.comparator),Z0=new Ee(j.comparator);function ee(...t){let e=Z0;for(const n of t)e=e.add(n);return e}const eb=new Ee(oe);function Of(){return eb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ci(Q.min(),r,Of(),Et(),ee())}}class Js{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Js(s,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class $f{constructor(e,n){this.targetId=e,this.Rt=n}}class Pf{constructor(e,n,s=Be.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class kl{constructor(){this.Pt=0,this.vt=Al(),this.bt=Be.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=ee(),n=ee(),s=ee();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new Js(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Al()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class tb{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Et(),this.Kt=Sl(),this.Gt=new Ee(oe)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Uo(i))if(s===0){const o=new j(i.path);this.zt(n,o,Pe.newNoDocument(o,Q.min()))}else le(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Uo(a.target)){const c=new j(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Pe.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ee();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ci(e,n,this.Gt,this.Ut,s);return this.Ut=Et(),this.Kt=Sl(),this.Gt=new Ee(oe),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new kl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ee(oe),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new kl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Sl(){return new Se(j.comparator)}function Al(){return new Se(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rb=(()=>({and:"AND",or:"OR"}))();class ib{constructor(e,n){this.databaseId=e,this.yt=n}}function Gr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function ob(t,e){return Gr(t,e.toTimestamp())}function ct(t){return le(!!t),Q.fromTimestamp(function(e){const n=Mt(e);return new Te(n.seconds,n.nanos)}(t))}function Ba(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Lf(t){const e=he.fromString(t);return le(Vf(e)),e}function Bo(t,e){return Ba(t.databaseId,e.path)}function io(t,e){const n=Lf(e);if(n.get(1)!==t.databaseId.projectId)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Uf(n))}function jo(t,e){return Ba(t.databaseId,e)}function ab(t){const e=Lf(t);return e.length===4?he.emptyPath():Uf(e)}function qo(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uf(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cl(t,e,n){return{name:Bo(t,e),fields:n.value.mapValue.fields}}function cb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(le(l===void 0||typeof l=="string"),Be.fromBase64String(l||"")):(le(l===void 0||l instanceof Uint8Array),Be.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:Cf(c.code);return new P(l,c.message||"")}(o);n=new Pf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=io(t,s.document.name),i=ct(s.document.updateTime),o=s.document.createTime?ct(s.document.createTime):Q.min(),a=new Ke({mapValue:{fields:s.document.fields}}),c=Pe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ir(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=io(t,s.document),i=s.readTime?ct(s.readTime):Q.min(),o=Pe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ir([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=io(t,s.document),i=s.removedTargetIds||[];n=new Ir([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Q0(r),o=s.targetId;n=new $f(o,i)}}return n}function lb(t,e){let n;if(e instanceof Xs)n={update:Cl(t,e.key,e.value)};else if(e instanceof Va)n={delete:Bo(t,e.key)};else if(e instanceof hn)n={update:Cl(t,e.key,e.data),updateMask:_b(e.fieldMask)};else{if(!(e instanceof W0))return z();n={verify:Bo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Hr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ss)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Kr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ob(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function ub(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ct(s.updateTime):ct(r);return i.isEqual(Q.min())&&(i=ct(r)),new H0(i,s.transformResults||[])}(n,e))):[]}function hb(t,e){return{documents:[jo(t,e.path)]}}function db(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=jo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return xf(et.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:vn(u.field),direction:gb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Ti(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fb(t){let e=ab(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){le(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Ff(u);return h instanceof et&&hf(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new os(wn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ti(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new zr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new zr(d,h)}(n.endAt)),F0(e,r,o,i,a,"F",c,l)}function pb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ff(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=wn(e.unaryFilter.field);return Ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=wn(e.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wn(e.unaryFilter.field);return Ie.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=wn(e.unaryFilter.field);return Ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return Ie.create(wn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return et.create(e.compositeFilter.filters.map(n=>Ff(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function gb(t){return nb[t]}function mb(t){return sb[t]}function yb(t){return rb[t]}function vn(t){return{fieldPath:t.canonicalString()}}function wn(t){return Le.fromServerFormat(t.fieldPath)}function xf(t){return t instanceof Ie?function(e){if(e.op==="=="){if(gl(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NAN"}};if(pl(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(gl(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NOT_NAN"}};if(pl(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(e.field),op:mb(e.op),value:e.value}}}(t):t instanceof et?function(e){const n=e.getFilters().map(s=>xf(s));return n.length===1?n[0]:{compositeFilter:{op:yb(e.op),filters:n}}}(t):z()}function _b(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&K0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=as(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=as(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Nf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Sf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(n,s)=>Il(n,s))&&Rn(this.baseMutations,e.baseMutations,(n,s)=>Il(n,s))}}class ja{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){le(e.mutations.length===s.length);let r=J0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ja(e,n,s,r)}}/**
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
 */class wb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Jt{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.oe=e}}function Ib(t){const e=fb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.Ze=new Eb}addToCollectionParentIndex(e,n){return this.Ze.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Pt.min())}updateCollectionGroup(e,n,s){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class Eb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ee(he.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ee(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Pn(0)}static Sn(){return new Pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.changes=new zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?D.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&as(s.mutation,r,Je.empty(),Te.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Wt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Zn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Wt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Et();const o=cs(),a=cs();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof hn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),as(u.mutation,l,u.mutation.getFieldMask(),Te.now())):o.set(l.key,Je.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Sb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=cs();let r=new Se((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Je.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Nf();u.forEach(d=>{if(!i.has(d)){const p=Sf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return D.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):D.resolve(Wt());let a=-1,c=i;return o.next(l=>D.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ee())).next(u=>({batchId:a,changes:Rf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=Zn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Zn();return this.indexManager.getCollectionParents(e,r).next(o=>D.forEach(o,a=>{const c=function(l,u){return new Ys(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Pe.newInvalidDocument(l)))});let o=Zn();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&as(l.mutation,c,Je.empty(),Te.now()),ki(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return D.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),D.resolve()}getNamedQuery(e,n){return D.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Ib(s.bundledQuery),readTime:ct(s.readTime)}}(n)),D.resolve()}}/**
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
 */class Db{constructor(){this.overlays=new Se(j.comparator),this.ss=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Wt();return D.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),D.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),D.resolve()}getOverlaysForCollection(e,n,s){const r=Wt(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return D.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Wt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Wt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return D.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wb(n,s));let i=this.ss.get(n);i===void 0&&(i=ee(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.rs=new Ee(Ae.os),this.us=new Ee(Ae.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ae(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ae(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new j(new he([])),s=new Ae(n,e),r=new Ae(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new j(new he([])),s=new Ae(n,e),r=new Ae(n,e+1);let i=ee();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ae(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ae{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return j.comparator(e.key,n.key)||oe(e.gs,n.gs)}static cs(e,n){return oe(e.gs,n.gs)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ee(Ae.os)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Ae(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ae(n,0),r=new Ae(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ee(oe);return n.forEach(r=>{const i=new Ae(r,0),o=new Ae(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),D.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Ae(new j(i),0);let a=new Ee(oe);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),D.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){le(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return D.forEach(n.mutations,r=>{const i=new Ae(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new Ae(n,0),r=this.ps.firstAfterOrEqual(s);return D.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.Rs=e,this.docs=new Se(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return D.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=Et();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Et();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||w0(v0(u),s)<=0||(r.has(u.key)||ki(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,s,r){z()}Ps(e,n){return D.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Ob(this)}getSize(e){return D.resolve(this.size)}}class Ob extends kb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),D.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.persistence=e,this.vs=new zn(n=>La(n),Ua),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Vs=new qa,this.targetCount=0,this.Ss=Pn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),D.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Pn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.xn(n),D.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),D.waitFor(i).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return D.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),D.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),D.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return D.resolve(s)}containsKey(e,n){return D.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Pa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new $b(this),this.indexManager=new Tb,this.remoteDocumentCache=function(s){return new Nb(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new bb(n),this.$s=new Cb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Rb(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){x("MemoryPersistence","Starting transaction:",e);const r=new Mb(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return D.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Mb extends I0{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Bs=new qa,this.Ls=null}static qs(e){return new za(e)}get Us(){if(this.Ls)return this.Ls;throw z()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),D.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),D.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Us,s=>{const r=j.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return D.or([()=>D.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ha(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(wl(n))return D.resolve(null);let s=Tt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=xo(n,null,"F"),s=Tt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,xo(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return wl(n)||r.isEqual(Q.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(ul()<=re.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vo(n)),this.qi(e,o,n,_0(r,-1)))})}Bi(e,n){let s=new Ee(vf(e));return n.forEach((r,i)=>{ki(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return ul()<=re.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Vo(n)),this.$i.getDocumentsMatchingQuery(e,n,Pt.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Se(oe),this.Gi=new zn(i=>La(i),Ua),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ab(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Fb(t,e,n,s){return new Ub(t,e,n,s)}async function Bf(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function xb(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=D.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const g=c.docVersions.get(p);le(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function jf(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Vb(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,g,y){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=Et(),l=ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Bb(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(Q.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function Bb(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Et();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function jb(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function qb(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,D.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Jt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function zo(t,e,n){const s=Y(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Qs(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Dl(t,e,n){const s=Y(t);let r=Q.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.Gi.get(l);return h!==void 0?D.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,Tt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:ee())).next(a=>(zb(s,x0(e),a),{documents:a,Yi:i})))}function zb(t,e,n){let s=t.Qi.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Rl{constructor(){this.activeTargetIds=Of()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hb{constructor(){this.Ur=new Rl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Rl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr=null;function oo(){return fr===null?fr=268435456+Math.round(2147483648*Math.random()):fr++,"0x"+fr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection";class Qb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=oo(),a=this.fo(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(x("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw $o("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=Gb[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=oo();return new Promise((o,a)=>{const c=new c0;c.setWithCredentials(!0),c.listenOnce(i0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ro.NO_ERROR:const u=c.getResponseJson();x(Oe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ro.TIMEOUT:x(Oe,`RPC '${e}' ${i} timed out`),a(new P(k.DEADLINE_EXCEEDED,"Request time out"));break;case ro.HTTP_ERROR:const h=c.getStatus();if(x(Oe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(y)>=0?y:k.UNKNOWN}(p.status);a(new P(m,p.message))}else a(new P(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new P(k.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x(Oe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);x(Oe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=oo(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=s0(),a=r0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a0({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");x(Oe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new Wb({Yr:g=>{d?x(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(x(Oe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),x(Oe,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),m=(g,y,b)=>{g.listen(y,v=>{try{b(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(u,ur.EventType.OPEN,()=>{d||x(Oe,`RPC '${e}' stream ${r} transport opened.`)}),m(u,ur.EventType.CLOSE,()=>{d||(d=!0,x(Oe,`RPC '${e}' stream ${r} transport closed`),p.oo())}),m(u,ur.EventType.ERROR,g=>{d||(d=!0,$o(Oe,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new P(k.UNAVAILABLE,"The operation could not be completed")))}),m(u,ur.EventType.MESSAGE,g=>{var y;if(!d){const b=g.data[0];le(!!b);const v=b,E=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(E){x(Oe,`RPC '${e}' stream ${r} received error:`,E);const N=E.status;let O=function(X){const ue=we[X];if(ue!==void 0)return Cf(ue)}(N),R=E.message;O===void 0&&(O=k.INTERNAL,R="Unknown error status: "+N+" with message "+E.message),d=!0,p.oo(new P(O,R)),u.close()}else x(Oe,`RPC '${e}' stream ${r} received:`,b),p.uo(b)}}),m(a,o0.STAT_EVENT,g=>{g.stat===cl.PROXY?x(Oe,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===cl.NOPROXY&&x(Oe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function ao(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){return new ib(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new qf(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new P(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yb extends zf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=cb(this.Tt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?ct(i.readTime):Q.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=qo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Uo(a)?{documents:hb(r,a)}:{query:db(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Mf(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Gr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=pb(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=qo(this.Tt),n.removeTarget=e,this.qo(n)}}class Xb extends zf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=ub(e.writeResults,e.commitTime),s=ct(e.commitTime);return this.listener.eu(s,n)}return le(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=qo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>lb(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(k.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(k.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class Zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(It(n),this.cu=!1):x("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{dn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.mu.add(4),await Zs(c),c.pu.set("Unknown"),c.mu.delete(4),await Ri(c)}(this))})}),this.pu=new Zb(s,r)}}async function Ri(t){if(dn(t))for(const e of t.gu)await e(!0)}async function Zs(t){for(const e of t.gu)await e(!1)}function Hf(t,e){const n=Y(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Wa(n)?Ga(n):Hn(n).Mo()&&Ka(n,e))}function Kf(t,e){const n=Y(t),s=Hn(n);n.wu.delete(e),s.Mo()&&Gf(n,e),n.wu.size===0&&(s.Mo()?s.Bo():dn(n)&&n.pu.set("Unknown"))}function Ka(t,e){t.Iu.Ot(e.targetId),Hn(t).Jo(e)}function Gf(t,e){t.Iu.Ot(e),Hn(t).Yo(e)}function Ga(t){t.Iu=new tb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Hn(t).start(),t.pu.au()}function Wa(t){return dn(t)&&!Hn(t).$o()&&t.wu.size>0}function dn(t){return Y(t).mu.size===0}function Wf(t){t.Iu=void 0}async function tI(t){t.wu.forEach((e,n)=>{Ka(t,e)})}async function nI(t,e){Wf(t),Wa(t)?(t.pu.fu(e),Ga(t)):t.pu.set("Unknown")}async function sI(t,e,n){if(t.pu.set("Online"),e instanceof Pf&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wr(t,s)}else if(e instanceof Ir?t.Iu.Qt(e):e instanceof $f?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Q.min()))try{const s=await jf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),Gf(r,a);const l=new Jt(c.target,a,1,c.sequenceNumber);Ka(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await Wr(t,s)}}async function Wr(t,e,n){if(!Qs(e))throw e;t.mu.add(1),await Zs(t),t.pu.set("Offline"),n||(n=()=>jf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ri(t)})}function Qf(t,e){return e().catch(n=>Wr(t,n,e))}async function Ni(t){const e=Y(t),n=Lt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;rI(e);)try{const r=await jb(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,iI(e,r)}catch(r){await Wr(e,r)}Yf(e)&&Xf(e)}function rI(t){return dn(t)&&t._u.length<10}function iI(t,e){t._u.push(e);const n=Lt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Yf(t){return dn(t)&&!Lt(t).$o()&&t._u.length>0}function Xf(t){Lt(t).start()}async function oI(t){Lt(t).su()}async function aI(t){const e=Lt(t);for(const n of t._u)e.tu(n.mutations)}async function cI(t,e,n){const s=t._u.shift(),r=ja.from(s,e,n);await Qf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ni(t)}async function lI(t,e){e&&Lt(t).Xo&&await async function(n,s){if(r=s.code,Y0(r)&&r!==k.ABORTED){const i=n._u.shift();Lt(n).Fo(),await Qf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ni(n)}var r}(t,e),Yf(t)&&Xf(t)}async function Ol(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=dn(n);n.mu.add(3),await Zs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ri(n)}async function uI(t,e){const n=Y(t);e?(n.mu.delete(2),await Ri(n)):e||(n.mu.add(2),await Zs(n),n.pu.set("Unknown"))}function Hn(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.ru(),new Yb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:tI.bind(null,t),no:nI.bind(null,t),Ho:sI.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Wa(t)?Ga(t):t.pu.set("Unknown")):(await t.Tu.stop(),Wf(t))})),t.Tu}function Lt(t){return t.Eu||(t.Eu=function(e,n,s){const r=Y(e);return r.ru(),new Xb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:oI.bind(null,t),no:lI.bind(null,t),nu:aI.bind(null,t),eu:cI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ni(t)):(await t.Eu.stop(),t._u.length>0&&(x("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Qa(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ya(t,e){if(It("AsyncQueue",`${e}: ${t}`),Qs(t))return new P(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Zn(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Cn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.Au=new Se(j.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):z():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Mn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mn(e,n,Cn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ei(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.Pu=void 0,this.listeners=[]}}class dI{constructor(){this.queries=new zn(e=>_f(e),Ei),this.onlineState="Unknown",this.vu=new Set}}async function fI(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new hI),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Ya(o,`Initialization of query '${Vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&Xa(n)}async function pI(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function gI(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&Xa(n)}function mI(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Xa(t){t.vu.forEach(e=>{e.next()})}class yI{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Mn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.key=e}}class Zf{constructor(e){this.key=e}}class _I{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ee(),this.mutatedKeys=ee(),this.ju=vf(e),this.zu=new Cn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new $l,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=ki(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?m!==g&&(s.track({type:3,doc:p}),y=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),y=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),y=!0):d&&!p&&(s.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Mn(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new $l,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ee(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Zf(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Jf(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ee();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Mn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class vI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class wI{constructor(e){this.key=e,this.ic=!1}}class bI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new zn(a=>_f(a),Ei),this.uc=new Map,this.cc=new Set,this.ac=new Se(j.comparator),this.hc=new Map,this.lc=new qa,this.fc={},this.dc=new Map,this._c=Pn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function II(t,e){const n=OI(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await qb(n.localStore,Tt(e));n.isPrimaryClient&&Hf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await TI(n,e,s,a==="current",o.resumeToken)}return r}async function TI(t,e,n,s,r){t.mc=(h,d,p)=>async function(m,g,y,b){let v=g.view.Hu(y);v.Li&&(v=await Dl(m.localStore,g.query,!1).then(({documents:O})=>g.view.Hu(O,v)));const E=b&&b.targetChanges.get(g.targetId),N=g.view.applyChanges(v,m.isPrimaryClient,E);return Ml(m,g.targetId,N.tc),N.snapshot}(t,h,d,p);const i=await Dl(t.localStore,e,!0),o=new _I(e,i.Yi),a=o.Hu(i.documents),c=Js.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Ml(t,n,l.tc);const u=new vI(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function EI(t,e){const n=Y(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Ei(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await zo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kf(n.remoteStore,s.targetId),Ho(n,s.targetId)}).catch(Ws)):(Ho(n,s.targetId),await zo(n.localStore,s.targetId,!0))}async function kI(t,e,n){const s=$I(t);try{const r=await function(i,o){const a=Y(i),c=Te.now(),l=o.reduce((d,p)=>d.add(p.key),ee());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Et(),m=ee();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((y,b)=>{b.isValidDocument()||(m=m.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const y=[];for(const b of o){const v=G0(b,u.get(b.key).overlayedDocument);v!=null&&y.push(new hn(b.key,v,gf(v.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,y,o)}).next(g=>{h=g;const y=g.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Rf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Se(oe)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await er(s,r.changes),await Ni(s.remoteStore)}catch(r){const i=Ya(r,"Failed to persist write");n.reject(i)}}async function ep(t,e){const n=Y(t);try{const s=await Vb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(le(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?le(o.ic):r.removedDocuments.size>0&&(le(o.ic),o.ic=!1))}),await er(n,s,e)}catch(s){await Ws(s)}}function Pl(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Xa(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SI(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Se(j.comparator);o=o.insert(i,Pe.newNoDocument(i,Q.min()));const a=ee().add(i),c=new Ci(Q.min(),new Map,new Ee(oe),o,a);await ep(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Ja(s)}else await zo(s.localStore,e,!1).then(()=>Ho(s,e,n)).catch(Ws)}async function AI(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await xb(n.localStore,e);np(n,s,null),tp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await er(n,r)}catch(r){await Ws(r)}}async function CI(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(le(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);np(s,e,n),tp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await er(s,r)}catch(r){await Ws(r)}}function tp(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function np(t,e,n){const s=Y(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Ho(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||sp(t,s)})}function sp(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Kf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Ja(t))}function Ml(t,e,n){for(const s of n)s instanceof Jf?(t.lc.addReference(s.key,e),DI(t,s)):s instanceof Zf?(x("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||sp(t,s.key)):z()}function DI(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(x("SyncEngine","New document in limbo: "+n),t.cc.add(s),Ja(t))}function Ja(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new j(he.fromString(e)),s=t._c.next();t.hc.set(s,new wI(n)),t.ac=t.ac.insert(n,s),Hf(t.remoteStore,new Jt(Tt(Fa(n.path)),s,2,Pa.at))}}async function er(t,e,n){const s=Y(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ha.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>D.forEach(c,h=>D.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>D.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Qs(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,i))}async function RI(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await Bf(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new P(k.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await er(n,s.Wi)}}function NI(t,e){const n=Y(t),s=n.hc.get(e);if(s&&s.ic)return ee().add(s.key);{let r=ee();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function OI(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SI.bind(null,e),e.rc.Ho=gI.bind(null,e.eventManager),e.rc.gc=mI.bind(null,e.eventManager),e}function $I(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CI.bind(null,e),e}class PI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Di(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Fb(this.persistence,new Lb,e.initialUser,this.Tt)}Tc(e){return new Pb(za.qs,this.Tt)}Ic(e){return new Hb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RI.bind(null,this.syncEngine),await uI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dI}createDatastore(e){const n=Di(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Qb(r));var r;return function(i,o,a,c){return new Jb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Pl(this.syncEngine,a,0),o=Nl.C()?new Nl:new Kb,new eI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new bI(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);x("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Zs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=$e.UNAUTHENTICATED,this.clientId=rf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ya(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function FI(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Bf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function xI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VI(t);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ol(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ol(e.remoteStore,i)),t.onlineComponents=e}async function VI(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await FI(t,new PI)),t.offlineComponents}async function rp(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await xI(t,new MI)),t.onlineComponents}function BI(t){return rp(t).then(e=>e.syncEngine)}async function Ll(t){const e=await rp(t),n=e.eventManager;return n.onListen=II.bind(null,e.syncEngine),n.onUnlisten=EI.bind(null,e.syncEngine),n}const Ul=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t,e,n){if(!n)throw new P(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jI(t,e,n,s){if(e===!0&&s===!0)throw new P(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fl(t){if(!j.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xl(t){if(j.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oi(t);throw new P(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new l0;switch(n.type){case"gapi":const s=n.client;return new f0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ul.get(e);n&&(x("ComponentProvider","Removing Datastore"),Ul.delete(e),n.terminate())}(this),Promise.resolve()}}function qI(t,e,n,s={}){var r;const i=(t=Zt(t,$i))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&$o("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=$e.MOCK_USER;else{o=_g(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new P(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(c)}t._authCredentials=new u0(new sf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Kn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class $t extends Kn{constructor(e,n,s){super(e,n,Fa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new j(e))}withConverter(e){return new $t(this.firestore,e,this._path)}}function zI(t,e,...n){if(t=ke(t),ip("collection","path",e),t instanceof $i){const s=he.fromString(e,...n);return xl(s),new $t(t,null,s)}{if(!(t instanceof qe||t instanceof $t))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return xl(s),new $t(t.firestore,null,s)}}function pr(t,e,...n){if(t=ke(t),arguments.length===1&&(e=rf.R()),ip("doc","path",e),t instanceof $i){const s=he.fromString(e,...n);return Fl(s),new qe(t,null,new j(s))}{if(!(t instanceof qe||t instanceof $t))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return Fl(s),new qe(t.firestore,t instanceof $t?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new qf(this,"async_queue_retry"),this.Hc=()=>{const n=ao();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=ao();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=ao();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Xt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Qs(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Qa.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&z()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Bl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class As extends $i{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new HI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ap(this),this._firestoreClient.terminate()}}function KI(t,e){const n=typeof t=="object"?t:Xo(),s=typeof t=="string"?t:e||"(default)",r=ln(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=gg("firestore");i&&qI(r,...i)}return r}function op(t){return t._firestoreClient||ap(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ap(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new T0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new UI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Be.fromBase64String(e))}catch(n){throw new P(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ln(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=/^__.*__$/;class WI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xs(e,this.data,n,this.fieldTransforms)}}function lp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class tc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Qr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(lp(this.ra)&&GI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class QI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Di(e)}wa(e,n,s,r=!1){return new tc({ra:e,methodName:n,_a:s,path:Le.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function up(t){const e=t._freezeSettings(),n=Di(t._databaseId);return new QI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);fp("Data must be an object, but it was:",o,s);const a=hp(s,o);let c,l;if(i.merge)c=new Je(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=JI(e,h,n);if(!o.contains(d))throw new P(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);eT(u,d)||u.push(d)}c=new Je(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new WI(new Ke(a),c,l)}function XI(t,e,n,s=!1){return nc(n,t.wa(s?4:3,e))}function nc(t,e){if(dp(t=ke(t)))return fp("Unsupported field value:",e,t),hp(t,e);if(t instanceof cp)return function(n,s){if(!lp(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=nc(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return B0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Te.fromDate(n);return{timestampValue:Gr(s.Tt,r)}}if(n instanceof Te){const r=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gr(s.Tt,r)}}if(n instanceof ec)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ln)return{bytesValue:Mf(s.Tt,n._byteString)};if(n instanceof qe){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ba(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Oi(n)}`)}(t,e)}function hp(t,e){const n={};return of(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(t,(s,r)=>{const i=nc(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function dp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof ec||t instanceof Ln||t instanceof qe||t instanceof cp)}function fp(t,e,n){if(!dp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Oi(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function JI(t,e,n){if((e=ke(e))instanceof Za)return e._internalPath;if(typeof e=="string")return pp(t,e);throw Qr("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZI=new RegExp("[~\\*/\\[\\]]");function pp(t,e,n){if(e.search(ZI)>=0)throw Qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Za(...e.split("."))._internalPath}catch{throw Qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(k.INVALID_ARGUMENT,a+t+c)}function eT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tT extends gp{data(){return super.data()}}function mp(t,e){return typeof e=="string"?pp(t,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sc{}class sT extends sc{}function rT(t,e,...n){let s=[];e instanceof sc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof ic).length,o=r.filter(a=>a instanceof rc).length;if(i>1||i>0&&o>0)throw new P(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class rc extends sT{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new rc(e,n,s)}_apply(e){const n=this._parse(e);return yp(e._query,n),new Kn(e.firestore,e.converter,Fo(e._query,n))}_parse(e){const n=up(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ql(u,l);const d=[];for(const p of u)d.push(jl(a,r,p));h={arrayValue:{values:d}}}else h=jl(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ql(u,l),h=XI(o,i,u,l==="in"||l==="not-in");return Ie.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ic extends sc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ic(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:et.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)yp(i,a),i=Fo(i,a)}(e._query,n),new Kn(e.firestore,e.converter,Fo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function jl(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new P(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yf(e)&&n.indexOf("/")!==-1)throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(he.fromString(n));if(!j.isDocumentKey(s))throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return fl(t,new j(s))}if(n instanceof qe)return fl(t,n._key);throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oi(n)}.`)}function ql(t,e){if(!Array.isArray(t)||t.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yp(t,e){if(e.isInequality()){const s=xa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new P(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=mf(t);i!==null&&iT(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function iT(t,e,n){if(!n.isEqual(e))throw new P(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class oT{convertValue(e,n="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return qn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ec(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=cf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const n=Mt(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=he.fromString(e);le(Vf(s));const r=new Is(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _p extends gp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(mp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Tr extends _p{data(e={}){return super.data(e)}}class cT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new es(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Tr(this._firestore,this._userDataWriter,s.key,s,new es(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Tr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Tr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:lT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class vp extends oT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function zl(t,e,n){t=Zt(t,qe);const s=Zt(t.firestore,As),r=aT(t.converter,e,n);return wp(s,[YI(up(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,at.none())])}function uT(t){return wp(Zt(t.firestore,As),[new Va(t._key,at.none())])}function Hl(t,...e){var n,s,r;t=ke(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof qe)l=Zt(t.firestore,As),u=Fa(t._key.path),c={next:h=>{e[o]&&e[o](hT(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Zt(t,Kn);l=Zt(h.firestore,As),u=h._query;const d=new vp(l);c={next:p=>{e[o]&&e[o](new cT(l,d,h,p))},error:e[o+1],complete:e[o+2]},nT(t._query)}return function(h,d,p,m){const g=new LI(m),y=new yI(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>fI(await Ll(h),y)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>pI(await Ll(h),y))}}(op(l),u,a,c)}function wp(t,e){return function(n,s){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>kI(await BI(n),s,r)),r.promise}(op(t),e)}function hT(t,e,n){const s=n.docs.get(e._key),r=new vp(t);return new _p(t,r,e._key,s,new es(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){jn=n})(Os),lt(new Ze("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new As(new h0(n.getProvider("auth-internal")),new g0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ge(ll,"3.9.0",t),Ge(ll,"3.9.0","esm2017")})();const dT={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},bp=Xu(dT),jt=B_(bp);ky(jt,Ih);const Wn=KI(bp);tw();const fT=new ht,pT=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Rs(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return vh(jt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return Ty(jt,r,i)},async signInWithEmail(r,i){return Ey(jt,r,i)},async signInWithGoogle(){return Xy(jt,fT)},async signOut(){return Cy(jt)}}},Ip=pT(),Kl="/assets/default-user-a40c52dd.png";function gT(t){let e;return{c(){e=I("i"),f(e,"class","codicon codicon-account")},m(n,s){A(n,e,s)},p:C,d(n){n&&S(e)}}}function mT(t){let e,n;return{c(){e=I("img"),f(e,"class","profile-picture svelte-1m717b8"),vt(e.src,n=t[0].user.photoURL??Kl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){A(s,e,r)},p(s,r){r&1&&!vt(e.src,n=s[0].user.photoURL??Kl)&&f(e,"src",n)},d(s){s&&S(e)}}}function yT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,g,y,b,v;o=new ag({});function E(R,X){return R[0].loggedIn?mT:gT}let N=E(t),O=N(t);return{c(){e=I("header"),n=I("div"),s=I("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=$(),i=I("a"),F(o.$$.fragment),a=$(),c=I("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=$(),u=I("nav"),h=I("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=$(),p=I("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=$(),g=I("button"),O.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(R,X){A(R,e,X),_(e,n),_(n,s),_(n,r),_(n,i),M(o,i,null),_(n,a),_(n,c),_(e,l),_(e,u),_(u,h),_(u,d),_(u,p),_(u,m),_(u,g),O.m(g,null),y=!0,b||(v=[V(c,"click",t[1]),V(h,"click",t[2]),V(p,"click",t[3]),V(g,"click",t[4])],b=!0)},p(R,[X]){N===(N=E(R))&&O?O.p(R,X):(O.d(1),O=N(R),O&&(O.c(),O.m(g,null)))},i(R){y||(w(o.$$.fragment,R),y=!0)},o(R){T(o.$$.fragment,R),y=!1},d(R){R&&S(e),L(o),O.d(),b=!1,ve(v)}}}function _T(t,e,n){let s;return Me(t,Ip,c=>n(0,s=c)),[s,()=>In.navigateTo("help"),()=>In.navigateTo("search"),()=>In.navigateTo("settings"),()=>In.navigateTo("account")]}class vT extends W{constructor(e){super(),G(this,e,_T,yT,K,{})}}const wT="modulepreload",bT=function(t){return"/"+t},Gl={},Pi=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=bT(i),i in Gl)return;Gl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":wT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Er=Object.freeze(["+","-","~"]),Mi=t=>Er.includes(t),IT=t=>{if(!Mi(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(Er.indexOf(t)+1)%Er.length;return Er[n]},TT=Object.freeze({"+":"","-":"-","~":""}),ET=t=>{if(!Mi(t))throw TypeError("Invalid modifier passed to serializeModifier");return TT[t]},tr=t=>typeof t=="string"&&t!=="",Li=t=>typeof t=="number";class Ui{constructor(e,n){if(!Mi(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!tr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${ET(this.modifier)}${encodeURIComponent(this.name.replaceAll(" ","_"))}`}}const Tp=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),Ep=t=>Tp.includes(t),Wl=t=>{const e=Tp.indexOf(t);return e>=0?e:99},kT=Object.freeze(["artist","character","copyright","source","metadata","rating"]),ST=t=>kT.includes(t);let Fi=class{constructor(e,n,s,r){if(!Mi(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!tr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Li(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Ep(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const kp=t=>new Ui(t.modifier,t.name);class Sp{constructor(e,n,s){if(!tr(e))throw new TypeError("Invalid name passed to Supertag");if(!AT(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const AT=t=>Array.isArray(t)&&t.every(e=>e instanceof Ui),CT=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Rs(t);let s,r=null,i=null;return vh(jt,async o=>{s=o,o?r=Hl(pr(Wn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=rT(zI(Wn,`users/${o.uid}/supertags`));i==null||i(),i=Hl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new Sp(d.id,p.description,Object.entries(p.tags).map(m=>new Ui(m[1],m[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return zl(pr(Wn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return uT(pr(Wn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return zl(pr(Wn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Cs=CT();function DT(t){let e,n,s,r;return{c(){e=I("button"),n=ae(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){A(i,e,o),_(e,n),s||(r=V(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&me(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:C,o:C,d(i){i&&S(e),s=!1,r()}}}function RT(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Xe(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class oc extends W{constructor(e){super(),G(this,e,RT,DT,K,{text:0,title:1,disabled:2})}}const St=t=>e=>{(ac(e)||NT(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},NT=t=>t.code==="Space",ac=t=>t.code==="Enter"||t.key==="Enter",OT=Intl.NumberFormat("en",{notation:"compact"}),kt=t=>{if(!Li(t))throw new TypeError(`Invalid value passed to formatCount: ${t}`);return OT.format(t)};function Un(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const $T=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),Ql=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Yl(t){let e,n=kt(t[0].count)+"",s,r;return{c(){e=ae("("),s=ae(n),r=ae(")")},m(i,o){A(i,e,o),A(i,s,o),A(i,r,o)},p(i,o){o&1&&n!==(n=kt(i[0].count)+"")&&me(s,n)},d(i){i&&S(e),i&&S(s),i&&S(r)}}}function PT(t){let e,n=Un(t[0].name)+"",s,r,i,o,a,c=t[0].count&&Yl(t);return{c(){e=I("li"),s=ae(n),r=$(),c&&c.c(),f(e,"class",i=Qe(Ql[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),ce(e,"no-icon",t[0].type!=="supertag")},m(l,u){A(l,e,u),_(e,s),_(e,r),c&&c.m(e,null),o||(a=[V(e,"click",t[2]),V(e,"contextmenu",Fu(t[3]))],o=!0)},p(l,[u]){u&1&&n!==(n=Un(l[0].name)+"")&&me(s,n),l[0].count?c?c.p(l,u):(c=Yl(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&1&&i!==(i=Qe(Ql[l[0].modifier])+" svelte-13vl0re")&&f(e,"class",i),u&1&&ce(e,"no-icon",l[0].type!=="supertag")},i:C,o:C,d(l){l&&S(e),c&&c.d(),o=!1,ve(a)}}}function MT(t,e,n){let{tag:s}=e;const r=Xe(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Ap extends W{constructor(e){super(),G(this,e,MT,PT,K,{tag:0})}}function LT(t){let e,n,s,r,i;const o=t[2].default,a=$u(o,t,t[1],null);return{c(){e=I("div"),n=I("div"),a&&a.c(),f(n,"class","dialog svelte-upm3o"),f(e,"class","backdrop svelte-upm3o")},m(c,l){A(c,e,l),_(e,n),a&&a.m(n,null),s=!0,r||(i=[V(n,"click",Ko(UT)),V(e,"click",t[0]),V(e,"keyup",t[3])],r=!0)},p(c,[l]){a&&a.p&&(!s||l&2)&&Lu(a,o,c,c[1],s?Mu(o,c[1],l,null):Uu(c[1]),null)},i(c){s||(w(a,c),s=!0)},o(c){T(a,c),s=!1},d(c){c&&S(e),a&&a.d(c),r=!1,ve(i)}}}const UT=()=>{};function FT(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=Xe(),o=()=>i("close"),a=c=>{c.code==="Escape"&&o()};return t.$$set=c=>{"$$scope"in c&&n(1,r=c.$$scope)},[o,r,s,a]}class Cp extends W{constructor(e){super(),G(this,e,FT,LT,K,{})}}function Xl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Jl(t){let e,n;return e=new Ap({props:{tag:t[9]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function xT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,g,y,b,v,E,N,O,R,X,ue,B,J=t[2],ie=[];for(let ne=0;ne<J.length;ne+=1)ie[ne]=Jl(Xl(t,J,ne));const fn=ne=>T(ie[ne],1,1,()=>{ie[ne]=null});return R=new oc({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),R.$on("click",t[8]),{c(){e=I("section"),n=I("h3"),n.textContent="Create Supertag",s=$(),r=I("i"),i=$(),o=I("div"),a=I("label"),a.textContent="Name",c=$(),l=I("input"),u=$(),h=I("div"),d=I("label"),d.textContent="Description",p=$(),m=I("input"),g=$(),y=I("div"),b=I("span"),b.textContent="Tags",v=$(),E=I("ol");for(let ne=0;ne<ie.length;ne+=1)ie[ne].c();N=$(),O=I("div"),F(R.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",Qe("codicon codicon-close")+" svelte-1nylv2m"),f(a,"for","supertag-name"),f(a,"class","svelte-1nylv2m"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-1nylv2m"),f(o,"class","svelte-1nylv2m"),f(d,"for","supertag-description"),f(d,"class","svelte-1nylv2m"),f(m,"type","text"),f(m,"placeholder","Short description"),f(m,"id","supertag-description"),f(m,"class","svelte-1nylv2m"),f(h,"class","svelte-1nylv2m"),f(b,"class","svelte-1nylv2m"),f(E,"class","svelte-1nylv2m"),f(y,"class","svelte-1nylv2m"),f(O,"class","last svelte-1nylv2m"),f(e,"class","svelte-1nylv2m")},m(ne,_e){A(ne,e,_e),_(e,n),_(e,s),_(e,r),_(e,i),_(e,o),_(o,a),_(o,c),_(o,l),rt(l,t[0]),_(e,u),_(e,h),_(h,d),_(h,p),_(h,m),rt(m,t[1]),_(e,g),_(e,y),_(y,b),_(y,v),_(y,E);for(let Z=0;Z<ie.length;Z+=1)ie[Z]&&ie[Z].m(E,null);_(e,N),_(e,O),M(R,O,null),X=!0,ue||(B=[V(r,"click",t[5]),V(r,"keyup",St(t[5])),V(l,"input",t[6]),V(m,"input",t[7])],ue=!0)},p(ne,_e){if(_e&1&&l.value!==ne[0]&&rt(l,ne[0]),_e&2&&m.value!==ne[1]&&rt(m,ne[1]),_e&4){J=ne[2];let pe;for(pe=0;pe<J.length;pe+=1){const Vt=Xl(ne,J,pe);ie[pe]?(ie[pe].p(Vt,_e),w(ie[pe],1)):(ie[pe]=Jl(Vt),ie[pe].c(),w(ie[pe],1),ie[pe].m(E,null))}for(de(),pe=J.length;pe<ie.length;pe+=1)fn(pe);fe()}const Z={};_e&8&&(Z.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),_e&8&&(Z.disabled=!ne[3]),R.$set(Z)},i(ne){if(!X){for(let _e=0;_e<J.length;_e+=1)w(ie[_e]);w(R.$$.fragment,ne),X=!0}},o(ne){ie=ie.filter(Boolean);for(let _e=0;_e<ie.length;_e+=1)T(ie[_e]);T(R.$$.fragment,ne),X=!1},d(ne){ne&&S(e),Ut(ie,ne),L(R),ue=!1,ve(B)}}}function VT(t){let e,n;return e=new Cp({props:{$$slots:{default:[xT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,[r]){const i={};r&4111&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function BT(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Xe(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Sp(r,i,o.map(kp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=tr(r))},[r,i,o,s,a,c,l,u,h]}class jT extends W{constructor(e){super(),G(this,e,BT,VT,K,{name:0,description:1,tags:2})}}function qT(t){let e,n,s,r;return{c(){e=I("button"),f(e,"class",n=Qe(t[0])+" svelte-17m158f")},m(i,o){A(i,e,o),s||(r=[V(e,"click",t[1]),V(e,"keyup",St(t[1]))],s=!0)},p(i,[o]){o&1&&n!==(n=Qe(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:C,o:C,d(i){i&&S(e),s=!1,ve(r)}}}function zT(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class Dp extends W{constructor(e){super(),G(this,e,zT,qT,K,{options:3,value:2})}}function HT(t){let e,n,s;function r(o){t[1](o)}let i={options:$T};return t[0]!==void 0&&(i.value=t[0]),e=new Dp({props:i}),Ue.push(()=>yt(e,"value",r)),{c(){F(e.$$.fragment)},m(o,a){M(e,o,a),s=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],mt(()=>n=!1)),e.$set(c)},i(o){s||(w(e.$$.fragment,o),s=!0)},o(o){T(e.$$.fragment,o),s=!1},d(o){L(e,o)}}}function KT(t,e,n){let{modifier:s}=e;function r(i){s=i,n(0,s)}return t.$$set=i=>{"modifier"in i&&n(0,s=i.modifier)},[s,r]}class GT extends W{constructor(e){super(),G(this,e,KT,HT,K,{modifier:0})}}function WT(t){let e;return{c(){e=I("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}class cc extends W{constructor(e){super(),G(this,e,null,WT,K,{})}}let QT=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,m,g,y,b){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=m,this.tags=g,this.width=y,this.type=b,Object.freeze(this)}};const lc=(t,e)=>{if(!Rp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!YT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Rp=t=>{try{return new URL(t),!0}catch{return!1}},YT=t=>t===null||t instanceof AbortController;class Yr{constructor(e,n,s){if(!tr(e))throw TypeError("Invalid name passed to Tag constructor");if(!Li(n))throw TypeError("Invalid count passed to Tag constructor");if(!Ep(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const XT=(t,e)=>new Fi(e,t.name,t.count,t.type);let JT=null;const ZT=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await lc(`${e}${n}`,JT);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Yr(Np(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Np=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),Op=20;let $p=null;const Pp=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},eE=async(t,e)=>{const n=await lc(rE(t,e),$p);Pp(n);try{return(await n.json()).map(nE)}catch{return[]}},tE=async t=>{const e=await lc(iE(t),$p);Pp(e);const n=await e.text(),r=new DOMParser().parseFromString(n,"text/xml"),i=Number(r.getElementsByTagName("posts")[0].getAttribute("count"));return oE(i),i},nE=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,m=t.comment_count,g=t.status,y=t.source;return new QT(s,o,r,Number(m),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),y,g,sE(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},sE=t=>t.map(e=>new Yr(Np(e.tag),e.count,e.type)).sort((e,n)=>Wl(e.type)-Wl(n.type)),rE=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Op}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},iE=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},oE=t=>{if(!Li(t))throw new Error("Unexpected response received in getPage")};let aE=class{constructor(e,n,s){cE(e),uE(n),lE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const cE=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},lE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},uE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Zl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",eu=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Zl:`${Zl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(hE(a.attributes));return o},hE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new aE(e.value,n.value,s.value)};function dE(t){let e,n,s=Un(t[0].name)+"",r,i,o,a=kt(t[0].count)+"",c,l,u,h;return{c(){e=I("li"),n=I("span"),r=ae(s),i=$(),o=I("span"),c=ae(a),f(n,"class","tag-name svelte-1gc0x48"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-1gc0x48"),ce(e,"selected",t[1])},m(d,p){A(d,e,p),_(e,n),_(n,r),_(e,i),_(e,o),_(o,c),u||(h=[V(e,"click",t[2]),V(e,"keypress",St(t[2]))],u=!0)},p(d,[p]){p&1&&s!==(s=Un(d[0].name)+"")&&me(r,s),p&1&&a!==(a=kt(d[0].count)+"")&&me(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&ce(e,"selected",d[1])},i:C,o:C,d(d){d&&S(e),u=!1,ve(h)}}}function fE(t,e,n){let{tag:s}=e,{selected:r=!1}=e;const i=Xe(),o=()=>i("click",s);return t.$$set=a=>{"tag"in a&&n(0,s=a.tag),"selected"in a&&n(1,r=a.selected)},[s,r,o]}class pE extends W{constructor(e){super(),G(this,e,fE,dE,K,{tag:0,selected:1})}}function gE(t){let e,n,s;return{c(){e=I("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(r,i){A(r,e,i),n||(s=[V(e,"click",t[0]),V(e,"keyup",St(t[0]))],n=!0)},p:C,i:C,o:C,d(r){r&&S(e),n=!1,ve(s)}}}function mE(t){return[()=>In.navigateTo("help")]}class yE extends W{constructor(e){super(),G(this,e,mE,gE,K,{})}}function tu(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function _E(t){let e,n,s,r,i=t[20].message+"",o;return{c(){e=I("div"),n=I("i"),s=$(),r=I("span"),o=ae(i),f(n,"class",Qe("codicon codicon-error")+" svelte-9l8t0y"),f(e,"class","suggestion-footer svelte-9l8t0y")},m(a,c){A(a,e,c),_(e,n),_(e,s),_(e,r),_(r,o)},p(a,c){c&2&&i!==(i=a[20].message+"")&&me(o,i)},i:C,o:C,d(a){a&&S(e)}}}function vE(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=nu(tu(t,r,a));const o=a=>T(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=$(),n=I("div"),f(n,"class","suggestion-footer svelte-9l8t0y")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);A(a,e,c),A(a,n,c),s=!0},p(a,c){if(c&100){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=tu(a,r,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=nu(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(de(),l=r.length;l<i.length;l+=1)o(l);fe()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)w(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)T(i[c]);s=!1},d(a){Ut(i,a),a&&S(e),a&&S(n)}}}function nu(t){let e,n;return e=new pE({props:{tag:t[17],selected:t[19]===t[2]}}),e.$on("click",function(){Zr(t[6](t[17]))&&t[6](t[17]).apply(this,arguments)}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){t=s;const i={};r&32&&(i.tag=t[17]),r&4&&(i.selected=t[19]===t[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function wE(t){let e,n,s;return n=new cc({}),{c(){e=I("div"),F(n.$$.fragment),f(e,"class","suggestion-footer svelte-9l8t0y")},m(r,i){A(r,e,i),M(n,e,null),s=!0},p:C,i(r){s||(w(n.$$.fragment,r),s=!0)},o(r){T(n.$$.fragment,r),s=!1},d(r){r&&S(e),L(n)}}}function bE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,g;function y(E){t[11](E)}let b={};t[3]!==void 0&&(b.modifier=t[3]),o=new GT({props:b}),Ue.push(()=>yt(o,"modifier",y)),l=new yE({});let v={ctx:t,current:null,token:null,hasCatch:!0,pending:wE,then:vE,catch:_E,error:20,blocks:[,,,]};return Sr(d=t[1],v),{c(){e=I("div"),n=I("i"),s=$(),r=I("input"),i=$(),F(o.$$.fragment),c=$(),F(l.$$.fragment),u=$(),h=I("ol"),v.block.c(),f(n,"class","codicon codicon-search spaced svelte-9l8t0y"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-9l8t0y"),f(h,"class","svelte-9l8t0y"),ce(h,"open",t[4]),f(e,"class","searchbar svelte-9l8t0y"),ce(e,"open",t[4])},m(E,N){A(E,e,N),_(e,n),_(e,s),_(e,r),rt(r,t[0]),_(e,i),M(o,e,null),_(e,c),M(l,e,null),_(e,u),_(e,h),v.block.m(h,v.anchor=null),v.mount=()=>h,v.anchor=null,p=!0,m||(g=[V(r,"input",t[7]),V(r,"focus",t[8]),V(r,"blur",t[9]),V(r,"keyup",t[10]),V(e,"blur",t[12])],m=!0)},p(E,[N]){t=E,N&1&&r.value!==t[0]&&rt(r,t[0]);const O={};!a&&N&8&&(a=!0,O.modifier=t[3],mt(()=>a=!1)),o.$set(O),v.ctx=t,N&2&&d!==(d=t[1])&&Sr(d,v)||xu(v,t,N),(!p||N&16)&&ce(h,"open",t[4]),(!p||N&16)&&ce(e,"open",t[4])},i(E){p||(w(o.$$.fragment,E),w(l.$$.fragment,E),w(v.block),p=!0)},o(E){T(o.$$.fragment,E),T(l.$$.fragment,E);for(let N=0;N<3;N+=1){const O=v.blocks[N];T(O)}p=!1},d(E){E&&S(e),L(o),L(l),v.block.d(),v.token=null,v=null,m=!1,ve(g)}}}function IE(t,e,n){let s;Me(t,Cs,N=>n(13,s=N));const r=Xe();let i,o="",a=0,c="+",l=!1,u=[];const h=N=>()=>{r("pick",XT(N,c)),p()};async function d(N){n(4,l=!0),n(5,u=[...s.supertags.filter(O=>O.name.toLowerCase().includes(N.toLowerCase())).map(O=>new Yr(O.name,Object.keys(O.tags).length,"supertag")),...await ZT(N)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function m(){o=this.value,n(0,o)}const g=()=>{document.getElementById("title").scrollIntoView()},y=N=>{(!N.relatedTarget||!N.target.parentNode.contains(N.relatedTarget))&&n(4,l=!1)},b=N=>{ac(N)?h(u.length>a?u[a]:new Yr(o,0,"ambiguous"))():N.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):N.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)};function v(N){c=N,n(3,c)}const E=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,m,g,y,b,v,E]}class TE extends W{constructor(e){super(),G(this,e,IE,bE,K,{})}}const Mp=JSON.parse,Lp=JSON.stringify,Up=(t,e,n=Lp,s=Mp)=>{const r=Fp(t,s,e),i=Rs(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},xi=(t,e,n=Lp,s=Mp)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Fp(t,s):null,o=Rs(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Fp=(t,e,n)=>{try{const s=e(localStorage.getItem(t));return typeof s=="object"&&typeof n=="object"?{...n,...s}:s}catch{return null}};function EE(){const t=[],{subscribe:e,update:n,set:s}=xi("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Fi("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const _t=EE(),kE=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),su=t=>kE[t]??"";function SE(t){let e,n=Un(t[0].name)+"",s,r,i,o;return{c(){e=I("button"),s=ae(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",r=Qe(su(t[0].type))+" svelte-d6seti"),ce(e,"active",t[3]),ce(e,"icon",t[2]),ce(e,"supertag",t[4])},m(a,c){A(a,e,c),_(e,s),i||(o=V(e,"click",function(){Zr(t[4]?ru:t[8])&&(t[4]?ru:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=Un(t[0].name)+"")&&me(s,n),c&1&&r!==(r=Qe(su(t[0].type))+" svelte-d6seti")&&f(e,"class",r),c&9&&ce(e,"active",t[3]),c&5&&ce(e,"icon",t[2]),c&17&&ce(e,"supertag",t[4])},i:C,o:C,d(a){a&&S(e),i=!1,o()}}}const ru=()=>{};function AE(t,e,n){let s,r,i,o,a,c,l;Me(t,_t,d=>n(6,c=d)),Me(t,Cs,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?_t.removeByIndex(r):_t.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,s=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,r=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=s.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=r>=0),t.$$.dirty&1&&n(2,a=ST(u.type))},[u,r,a,o,i,s,c,l,h]}class CE extends W{constructor(e){super(),G(this,e,AE,SE,K,{tag:0})}}function DE(t){let e,n,s,r,i;return{c(){e=I("i"),n=$(),s=I("a"),r=ae(t[1]),f(e,"class","codicon codicon-link"),f(s,"href",i=t[0].toString()),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),_(s,r)},p(o,[a]){a&2&&me(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(s,"href",i)},i:C,o:C,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function RE(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class NE extends W{constructor(e){super(),G(this,e,RE,DE,K,{url:0})}}function OE(t){let e,n,s,r;return{c(){e=I("i"),n=$(),s=I("span"),r=ae(t[0]),f(e,"class","codicon codicon-link")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),_(s,r)},p(i,o){o&1&&me(r,i[0])},i:C,o:C,d(i){i&&S(e),i&&S(n),i&&S(s)}}}function $E(t){let e,n;return e=new NE({props:{url:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.url=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function PE(t){let e,n,s,r;const i=[$E,OE],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=tt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(de(),T(o[u],1,1,()=>{o[u]=null}),fe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function ME(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=Rp(r)?new URL(r):null)},[r,s]}class LE extends W{constructor(e){super(),G(this,e,ME,PE,K,{source:0})}}function UE(t){let e,n;const s=t[1].default,r=$u(s,t,t[0],null);return{c(){e=I("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){A(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Lu(r,s,i,i[0],n?Mu(s,i[0],o,null):Uu(i[0]),null)},i(i){n||(w(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&S(e),r&&r.d(i)}}}function FE(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class kr extends W{constructor(e){super(),G(this,e,FE,UE,K,{})}}const iu=6e4,Xr=t=>{if(!xE(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/iu,s=new Date().getTime()/iu-e;if(s<1)return"just now";if(s<60)return yn(s,"minute");const r=s/60;if(r<24)return yn(r,"hour");const i=r/24;if(i<7)return yn(i,"day");if(i<30.5)return yn(i/7,"week");if(i<365.25)return yn(i/30.5,"month");const o=i/365.25;return yn(o,"year")},xE=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",yn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function VE(t){let e,n,s,r=Xr(t[0])+"",i;return{c(){e=I("i"),n=$(),s=I("span"),i=ae(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),_(s,i)},p(o,[a]){a&1&&r!==(r=Xr(o[0])+"")&&me(i,r)},i:C,o:C,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function BE(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class jE extends W{constructor(e){super(),G(this,e,BE,VE,K,{value:0})}}function qE(t){let e,n,s,r=kt(t[0])+"",i;return{c(){e=I("i"),n=$(),s=I("span"),i=ae(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),_(s,i)},p(o,[a]){a&1&&r!==(r=kt(o[0])+"")&&me(i,r)},i:C,o:C,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function zE(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class HE extends W{constructor(e){super(),G(this,e,zE,qE,K,{value:0})}}function KE(t){let e,n,s=t[0].author+"",r,i,o,a=Xr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=I("div"),n=I("span"),r=ae(s),i=$(),o=I("span"),c=ae(a),l=$(),u=I("span"),d=ae(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,m){A(p,e,m),_(e,n),_(n,r),_(e,i),_(e,o),_(o,c),_(e,l),_(e,u),_(u,d)},p(p,[m]){m&1&&s!==(s=p[0].author+"")&&me(r,s),m&1&&a!==(a=Xr(p[0].createdAt)+"")&&me(c,a),m&1&&h!==(h=p[0].content+"")&&me(d,h)},i:C,o:C,d(p){p&&S(e)}}}function GE(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class WE extends W{constructor(e){super(),G(this,e,GE,KE,K,{comment:0})}}function QE(t){let e,n,s,r;return{c(){e=I("i"),n=$(),s=I("a"),r=ae("rule34.xxx"),f(e,"class","codicon codicon-link-external"),f(s,"href",t[0]),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),_(s,r)},p(i,[o]){o&1&&f(s,"href",i[0])},i:C,o:C,d(i){i&&S(e),i&&S(n),i&&S(s)}}}function YE(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class XE extends W{constructor(e){super(),G(this,e,YE,QE,K,{url:0})}}function ou(t,e,n){const s=t.slice();return s[8]=e[n],s}function au(t,e,n){const s=t.slice();return s[4]=e[n],s}function cu(t){let e,n,s,r,i;return{c(){e=I("i"),n=$(),s=I("i"),f(e,"class","codicon codicon-tag svelte-1mq2skj"),ce(e,"active",t[1]==="tags"),f(s,"class","codicon codicon-comment-discussion svelte-1mq2skj"),ce(s,"active",t[1]==="comments")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),r||(i=[V(e,"click",t[2]),V(s,"click",t[3])],r=!0)},p(o,a){a&2&&ce(e,"active",o[1]==="tags"),a&2&&ce(s,"active",o[1]==="comments")},d(o){o&&S(e),o&&S(n),o&&S(s),r=!1,ve(i)}}}function JE(t){let e,n;return e=new jE({props:{value:t[0].change}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function ZE(t){let e,n;return e=new HE({props:{value:t[0].score}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function e1(t){let e,n;return e=new XE({props:{url:t[0].file_url}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function lu(t){let e,n;return e=new kr({props:{$$slots:{default:[t1]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function t1(t){let e,n;return e=new LE({props:{source:t[0].source}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function n1(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:c1,then:i1,catch:r1,value:7,blocks:[,,,]};return Sr(n=eu(t[0].id),r),{c(){e=tt(),r.block.c()},m(i,o){A(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=eu(t[0].id))&&Sr(n,r)||xu(r,t,o)},i(i){s||(w(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];T(a)}s=!1},d(i){i&&S(e),r.block.d(i),r.token=null,r=null}}}function s1(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=hu(au(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=I("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=au(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=hu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(de(),c=s.length;c<r.length;c+=1)i(c);fe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&S(e),Ut(r,o)}}}function r1(t){return{c:C,m:C,p:C,i:C,o:C,d:C}}function i1(t){let e,n,s,r;const i=[a1,o1],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=tt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(de(),T(o[u],1,1,()=>{o[u]=null}),fe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function o1(t){let e;return{c(){e=I("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}function a1(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=uu(ou(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=I("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=ou(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=uu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(de(),c=s.length;c<r.length;c+=1)i(c);fe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&S(e),Ut(r,o)}}}function uu(t){let e,n;return e=new WE({props:{comment:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function c1(t){let e,n;return e=new cc({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function hu(t){let e,n;return e=new CE({props:{tag:t[4]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function l1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m=t[0].comment_count>0&&cu(t);r=new kr({props:{$$slots:{default:[JE]},$$scope:{ctx:t}}}),o=new kr({props:{$$slots:{default:[ZE]},$$scope:{ctx:t}}}),c=new kr({props:{$$slots:{default:[e1]},$$scope:{ctx:t}}});let g=t[0].source&&lu(t);const y=[s1,n1],b=[];function v(E,N){return E[1]==="tags"?0:1}return h=v(t),d=b[h]=y[h](t),{c(){e=I("div"),n=I("div"),m&&m.c(),s=$(),F(r.$$.fragment),i=$(),F(o.$$.fragment),a=$(),F(c.$$.fragment),l=$(),g&&g.c(),u=$(),d.c(),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(E,N){A(E,e,N),_(e,n),m&&m.m(n,null),_(n,s),M(r,n,null),_(n,i),M(o,n,null),_(n,a),M(c,n,null),_(n,l),g&&g.m(n,null),_(e,u),b[h].m(e,null),p=!0},p(E,[N]){E[0].comment_count>0?m?m.p(E,N):(m=cu(E),m.c(),m.m(n,s)):m&&(m.d(1),m=null);const O={};N&2049&&(O.$$scope={dirty:N,ctx:E}),r.$set(O);const R={};N&2049&&(R.$$scope={dirty:N,ctx:E}),o.$set(R);const X={};N&2049&&(X.$$scope={dirty:N,ctx:E}),c.$set(X),E[0].source?g?(g.p(E,N),N&1&&w(g,1)):(g=lu(E),g.c(),w(g,1),g.m(n,null)):g&&(de(),T(g,1,1,()=>{g=null}),fe());let ue=h;h=v(E),h===ue?b[h].p(E,N):(de(),T(b[ue],1,1,()=>{b[ue]=null}),fe(),d=b[h],d?d.p(E,N):(d=b[h]=y[h](E),d.c()),w(d,1),d.m(e,null))},i(E){p||(w(r.$$.fragment,E),w(o.$$.fragment,E),w(c.$$.fragment,E),w(g),w(d),p=!0)},o(E){T(r.$$.fragment,E),T(o.$$.fragment,E),T(c.$$.fragment,E),T(g),T(d),p=!1},d(E){E&&S(e),m&&m.d(),L(r),L(o),L(c),g&&g.d(),b[h].d()}}}function u1(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class h1 extends W{constructor(e){super(),G(this,e,u1,l1,K,{post:0})}}const Jr=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function d1(t){let e,n,s,r,i,o,a,c;return{c(){e=I("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=[V(e,"click",t[4]),V(e,"keyup",St(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&S(e),t[3](null),a=!1,ve(c)}}}function f1(t,e,n){let{post:s}=e;const r=Xe();let i;Ds(()=>Jr.observe(i)),ti(()=>Jr.unobserve(i));function o(l){Ue[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>r("click"),c=()=>r("click");return t.$$set=l=>{"post"in l&&n(0,s=l.post)},[s,i,r,o,a,c]}let p1=class extends W{constructor(e){super(),G(this,e,f1,d1,K,{post:0})}};const g1="/assets/play-f2f6faca.svg",m1="/assets/load-8440afed.svg",y1="/assets/pause-6f7851a2.svg";function _1(t){let e,n;return{c(){e=I("img"),vt(e.src,n=g1)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Qp(e,"margin-left","4px")},m(s,r){A(s,e,r)},p:C,d(s){s&&S(e)}}}function v1(t){let e,n;return{c(){e=I("img"),vt(e.src,n=y1)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){A(s,e,r)},p:C,d(s){s&&S(e)}}}function w1(t){let e,n;return{c(){e=I("img"),vt(e.src,n=m1)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){A(s,e,r)},p:C,d(s){s&&S(e)}}}function b1(t){let e,n,s,r,i;function o(l,u){return l[1]?w1:l[0]?v1:_1}let a=o(t),c=a(t);return{c(){e=I("button"),n=I("div"),c.c(),f(n,"class","circle svelte-142dl5p"),f(e,"class",s=Qe(t[3].class)+" svelte-142dl5p"),ce(e,"play",t[0]&&!t[1])},m(l,u){A(l,e,u),_(e,n),c.m(n,null),r||(i=V(e,"click",Ko(t[2])),r=!0)},p(l,[u]){a===(a=o(l))&&c?c.p(l,u):(c.d(1),c=a(l),c&&(c.c(),c.m(n,null))),u&8&&s!==(s=Qe(l[3].class)+" svelte-142dl5p")&&f(e,"class",s),u&11&&ce(e,"play",l[0]&&!l[1])},i:C,o:C,d(l){l&&S(e),c.d(),r=!1,i()}}}function I1(t,e,n){let{playing:s}=e,{loading:r}=e;const i=()=>{n(1,r=!0),n(0,s=!s)};return t.$$set=o=>{n(3,e=uo(uo({},e),fc(o))),"playing"in o&&n(0,s=o.playing),"loading"in o&&n(1,r=o.loading)},e=fc(e),[s,r,i,e]}class xp extends W{constructor(e){super(),G(this,e,I1,b1,K,{playing:0,loading:1})}}function T1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p;function m(b){t[12](b)}function g(b){t[13](b)}let y={class:"center"};return t[2]!==void 0&&(y.playing=t[2]),t[3]!==void 0&&(y.loading=t[3]),c=new xp({props:y}),Ue.push(()=>yt(c,"playing",m)),Ue.push(()=>yt(c,"loading",g)),{c(){e=I("div"),n=I("img"),a=$(),F(c.$$.fragment),f(n,"class","media-img svelte-1itvuez"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",s=t[0].id.toString()),f(n,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(n,"width",i=t[0].width),f(n,"height",o=t[0].height),f(n,"tabindex","0"),f(e,"class","container svelte-1itvuez")},m(b,v){A(b,e,v),_(e,n),t[8](n),_(e,a),M(c,e,null),h=!0,d||(p=[V(n,"click",t[9]),V(n,"keyup",St(t[10])),V(n,"load",t[11])],d=!0)},p(b,[v]){(!h||v&16)&&f(n,"data-src",b[4]),(!h||v&1&&s!==(s=b[0].id.toString()))&&f(n,"alt",s),(!h||v&1&&r!==(r=`aspect-ratio: ${b[0].width} / ${b[0].height}`))&&f(n,"style",r),(!h||v&1&&i!==(i=b[0].width))&&f(n,"width",i),(!h||v&1&&o!==(o=b[0].height))&&f(n,"height",o);const E={};!l&&v&4&&(l=!0,E.playing=b[2],mt(()=>l=!1)),!u&&v&8&&(u=!0,E.loading=b[3],mt(()=>u=!1)),c.$set(E)},i(b){h||(w(c.$$.fragment,b),h=!0)},o(b){T(c.$$.fragment,b),h=!1},d(b){b&&S(e),t[8](null),L(c),d=!1,ve(p)}}}function E1(t,e,n){let s,r,i,{post:o}=e;const a=Xe();let c,l=!1,u=!1;Ds(()=>Jr.observe(c)),ti(()=>Jr.unobserve(c));function h(b){Ue[b?"unshift":"push"](()=>{c=b,n(1,c),n(2,l),n(7,r),n(6,s),n(0,o)})}const d=()=>a("click"),p=()=>a("click"),m=()=>n(3,u=!1);function g(b){l=b,n(2,l)}function y(b){u=b,n(3,u)}return t.$$set=b=>{"post"in b&&n(0,o=b.post)},t.$$.update=()=>{t.$$.dirty&1&&n(6,s=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(7,r=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&196&&n(4,i=l?r:s),t.$$.dirty&198&&c&&n(1,c.src=l?r:s,c)},[o,c,l,u,i,a,s,r,h,d,p,m,g,y]}class k1 extends W{constructor(e){super(),G(this,e,E1,T1,K,{post:0})}}function du(t){let e,n,s,r=!0,i=!1,o,a,c,l=t[17](t[14])+"",u,h,d,p,m,g,y,b,v,E,N;function O(){cancelAnimationFrame(o),e.paused||(o=Gp(O),i=!0),t[24].call(e)}function R(B){t[27](B)}function X(B){t[28](B)}let ue={class:"center"};return t[5]!==void 0&&(ue.playing=t[5]),t[10]!==void 0&&(ue.loading=t[10]),g=new xp({props:ue}),Ue.push(()=>yt(g,"playing",R)),Ue.push(()=>yt(g,"loading",X)),{c(){e=I("video"),a=$(),c=I("span"),u=ae(l),h=$(),d=I("input"),m=$(),F(g.$$.fragment),f(e,"preload","metadata"),f(e,"poster",t[1]),f(e,"style",n=`aspect-ratio: ${t[2]} / ${t[3]}`),e.loop=t[4],vt(e.src,s=t[0])||f(e,"src",s),f(e,"class","svelte-19frdb4"),t[7]===void 0&&us(()=>t[25].call(e)),f(c,"class","svelte-19frdb4"),ce(c,"play",t[5]),f(d,"type","range"),f(d,"min",0),f(d,"step",.0166666),f(d,"max",t[7]),f(d,"style",p=`background-image: linear-gradient(90deg, var(--accent) ${t[12]}%, var(--background-2) ${t[12]}%);}`),f(d,"class","svelte-19frdb4"),ce(d,"play",t[5]&&!t[10])},m(B,J){A(B,e,J),t[18](e),A(B,a,J),A(B,c,J),_(c,u),A(B,h,J),A(B,d,J),rt(d,t[6]),A(B,m,J),M(g,B,J),v=!0,E||(N=[V(e,"waiting",t[19]),V(e,"playing",t[20]),V(e,"pause",t[21]),V(e,"ended",t[22]),V(e,"play",t[23]),V(e,"pause",t[23]),V(e,"timeupdate",O),V(e,"durationchange",t[25]),V(d,"change",t[26]),V(d,"input",t[26]),V(d,"click",Ko(A1))],E=!0)},p(B,J){(!v||J[0]&2)&&f(e,"poster",B[1]),(!v||J[0]&12&&n!==(n=`aspect-ratio: ${B[2]} / ${B[3]}`))&&f(e,"style",n),(!v||J[0]&16)&&(e.loop=B[4]),(!v||J[0]&1&&!vt(e.src,s=B[0]))&&f(e,"src",s),J[0]&8192&&r!==(r=B[13])&&e[r?"pause":"play"](),!i&&J[0]&64&&!isNaN(B[6])&&(e.currentTime=B[6]),i=!1,(!v||J[0]&16384)&&l!==(l=B[17](B[14])+"")&&me(u,l),(!v||J[0]&32)&&ce(c,"play",B[5]),(!v||J[0]&128)&&f(d,"max",B[7]),(!v||J[0]&4096&&p!==(p=`background-image: linear-gradient(90deg, var(--accent) ${B[12]}%, var(--background-2) ${B[12]}%);}`))&&f(d,"style",p),J[0]&64&&rt(d,B[6]),(!v||J[0]&1056)&&ce(d,"play",B[5]&&!B[10]);const ie={};!y&&J[0]&32&&(y=!0,ie.playing=B[5],mt(()=>y=!1)),!b&&J[0]&1024&&(b=!0,ie.loading=B[10],mt(()=>b=!1)),g.$set(ie)},i(B){v||(w(g.$$.fragment,B),v=!0)},o(B){T(g.$$.fragment,B),v=!1},d(B){B&&S(e),t[18](null),B&&S(a),B&&S(c),B&&S(h),B&&S(d),B&&S(m),L(g,B),E=!1,ve(N)}}}function S1(t){let e,n,s,r,i,o=t[8]&&du(t);return{c(){e=I("div"),o&&o.c(),f(e,"class","player svelte-19frdb4"),f(e,"tabindex","0"),f(e,"style",n=`aspect-ratio: ${t[2]} / ${t[3]}`)},m(a,c){A(a,e,c),o&&o.m(e,null),t[29](e),s=!0,r||(i=[V(e,"click",t[15]),V(e,"keydown",Fu(t[16]))],r=!0)},p(a,c){a[8]?o?(o.p(a,c),c[0]&256&&w(o,1)):(o=du(a),o.c(),w(o,1),o.m(e,null)):o&&(de(),T(o,1,1,()=>{o=null}),fe()),(!s||c[0]&12&&n!==(n=`aspect-ratio: ${a[2]} / ${a[3]}`))&&f(e,"style",n)},i(a){s||(w(o),s=!0)},o(a){T(o),s=!1},d(a){a&&S(e),o&&o.d(),t[29](null),r=!1,ve(i)}}}const fu=5,A1=()=>{};function C1(t,e,n){let s,r,i,{src:o}=e,{poster:a}=e,{width:c}=e,{height:l}=e,{loop:u}=e,h,d=!1,p=!1,m=0,g=0,y,b=!1;const v=Xe(),E=()=>v("click"),N=se=>{ac(se)?E():se.key===" "?n(5,d=!d):se.key==="ArrowLeft"?n(6,m=Math.max(0,m-fu)):se.key==="ArrowRight"&&n(6,m=Math.min(g,m+fu))},O=new IntersectionObserver(se=>{for(const rr of se)rr.isIntersecting?n(8,b=!0):y&&(n(5,d=!1),n(10,p=!1),y.addEventListener("error",()=>{n(8,b=!1)},{once:!0}),n(11,y.src="",y))},{rootMargin:"0px"});Ds(()=>O.observe(h)),ti(()=>O.unobserve(h));const R=se=>{const rr=Math.floor(se),Bp=rr%60,jp=Math.floor(rr/60);return`${X(jp)}:${X(Bp)}`},X=se=>`${se<10?"0":""}${se}`;function ue(se){Ue[se?"unshift":"push"](()=>{y=se,n(11,y)})}const B=()=>n(10,p=!0),J=()=>n(10,p=!1),ie=()=>n(10,p=!1),fn=()=>{u||(n(10,p=!1),n(5,d=!1))};function ne(){r=this.paused,n(13,r),n(5,d),n(8,b)}function _e(){m=this.currentTime,n(6,m)}function Z(){g=this.duration,n(7,g)}function pe(){m=Go(this.value),n(6,m)}function Vt(se){d=se,n(5,d),n(8,b)}function nr(se){p=se,n(10,p)}function sr(se){Ue[se?"unshift":"push"](()=>{h=se,n(9,h)})}return t.$$set=se=>{"src"in se&&n(0,o=se.src),"poster"in se&&n(1,a=se.poster),"width"in se&&n(2,c=se.width),"height"in se&&n(3,l=se.height),"loop"in se&&n(4,u=se.loop)},t.$$.update=()=>{t.$$.dirty[0]&192&&n(14,s=g-m),t.$$.dirty[0]&288&&n(5,d=b&&d),t.$$.dirty[0]&32&&n(13,r=!d),t.$$.dirty[0]&192&&n(12,i=m/g*98+1)},[o,a,c,l,u,d,m,g,b,h,p,y,i,r,s,E,N,R,ue,B,J,ie,fn,ne,_e,Z,pe,Vt,nr,sr]}class D1 extends W{constructor(e){super(),G(this,e,C1,S1,K,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function R1(t){let e,n;return e=new k1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function N1(t){let e,n;return e=new D1({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(gu)}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.src=s[0].file_url),r&1&&(i.poster=s[0].sample_url),r&1&&(i.width=s[0].width),r&1&&(i.height=s[0].height),r&1&&(i.loop=s[0].tags.some(gu)),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function O1(t){let e,n;return e=new p1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function pu(t){let e,n;return e=new h1({props:{post:t[0]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function $1(t){let e,n,s,r,i;const o=[O1,N1,R1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&pu(t);return{c(){e=I("div"),s.c(),r=$(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){A(u,e,h),a[n].m(e,null),_(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(de(),T(a[d],1,1,()=>{a[d]=null}),fe(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),w(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=pu(u),l.c(),w(l,1),l.m(e,null)):l&&(de(),T(l,1,1,()=>{l=null}),fe())},i(u){i||(w(s),w(l),i=!0)},o(u){T(s),T(l),i=!1},d(u){u&&S(e),a[n].d(),l&&l.d()}}}const gu=t=>t.name=="loop";function P1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class M1 extends W{constructor(e){super(),G(this,e,P1,$1,K,{post:0})}}function mu(t,e,n){const s=t.slice();return s[1]=e[n],s}function yu(t){let e,n;return e=new M1({props:{post:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function L1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=yu(mu(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=I("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=mu(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=yu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(de(),c=s.length;c<r.length;c+=1)i(c);fe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&S(e),Ut(r,o)}}}function U1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class F1 extends W{constructor(e){super(),G(this,e,U1,L1,K,{posts:0})}}function x1(t){let e;return{c(){e=I("div")},m(n,s){A(n,e,s),t[1](e)},p:C,i:C,o:C,d(n){n&&S(e),t[1](null)}}}function V1(t,e,n){const s=Xe(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){Ue[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class B1 extends W{constructor(e){super(),G(this,e,V1,x1,K,{})}}const j1="/assets/shironeko-x-c28cad00.png";function q1(t){let e,n,s,r,i;return{c(){e=I("div"),n=I("img"),r=$(),i=I("span"),i.textContent="You have reached the end",vt(n.src,s=j1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){A(o,e,a),_(e,n),_(e,r),_(e,i)},p:C,i:C,o:C,d(o){o&&S(e)}}}class z1 extends W{constructor(e){super(),G(this,e,null,q1,K,{})}}const H1="/assets/shironeko-confused-4071d5b2.png";function K1(t){let e,n,s,r,i;return{c(){e=I("div"),n=I("img"),r=$(),i=I("span"),i.textContent="No results found",vt(n.src,s=H1)||f(n,"src",s),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){A(o,e,a),_(e,n),_(e,r),_(e,i)},p:C,i:C,o:C,d(o){o&&S(e)}}}class G1 extends W{constructor(e){super(),G(this,e,null,K1,K,{})}}const _u=()=>({pages:[],nextPage:0,ids:new Set}),W1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},Q1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},Y1=()=>{const{subscribe:t,update:e,set:n}=xi("results",_u(),W1,Q1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(_u())}}},ts=Y1(),X1=()=>{const{subscribe:t,set:e}=xi("count",null);return{subscribe:t,set:e,reset(){e(0)}}},uc=X1(),J1={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},Z1=()=>{const{subscribe:t,set:e}=Up("sort",J1);return{subscribe:t,set:e}},bn=Z1();function vu(t,e,n){const s=t.slice();return s[0]=e[n][0],s[3]=e[n][1],s}function wu(t){let e,n=t[3]+"",s,r;return{c(){e=I("option"),s=ae(n),e.__value=r=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){A(i,e,o),_(e,s)},p(i,o){o&2&&n!==(n=i[3]+"")&&me(s,n),o&2&&r!==(r=i[0])&&(e.__value=r,e.value=e.__value)},d(i){i&&S(e)}}}function ek(t){let e,n,s,r=Object.entries(t[1]),i=[];for(let o=0;o<r.length;o+=1)i[o]=wu(vu(t,r,o));return{c(){e=I("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&us(()=>t[2].call(e))},m(o,a){A(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);pc(e,t[0],!0),n||(s=V(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){r=Object.entries(o[1]);let c;for(c=0;c<r.length;c+=1){const l=vu(o,r,c);i[c]?i[c].p(l,a):(i[c]=wu(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}a&3&&pc(e,o[0])},i:C,o:C,d(o){o&&S(e),Ut(i,o),n=!1,s()}}}function tk(t,e,n){let{options:s}=e,{value:r}=e;function i(){r=Yp(this),n(0,r),n(1,s)}return t.$$set=o=>{"options"in o&&n(1,s=o.options),"value"in o&&n(0,r=o.value)},[r,s,i]}class nk extends W{constructor(e){super(),G(this,e,tk,ek,K,{options:1,value:0})}}function sk(t){let e,n,s,r;return{c(){e=I("button"),n=ae(t[0]),f(e,"class","svelte-17m158f")},m(i,o){A(i,e,o),_(e,n),s||(r=[V(e,"click",t[1]),V(e,"keyup",St(t[1]))],s=!0)},p(i,[o]){o&1&&me(n,i[0])},i:C,o:C,d(i){i&&S(e),s=!1,ve(r)}}}function rk(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class ik extends W{constructor(e){super(),G(this,e,rk,sk,K,{options:3,value:2})}}function bu(t){let e,n;return e=new Cp({props:{$$slots:{default:[ok]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1025&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function ok(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,g,y,b,v,E,N,O,R,X,ue;function B(Z){t[6](Z)}let J={options:lk};t[0].sortDirection!==void 0&&(J.value=t[0].sortDirection),o=new Dp({props:J}),Ue.push(()=>yt(o,"value",B));function ie(Z){t[7](Z)}let fn={options:ck};t[0].sortProperty!==void 0&&(fn.value=t[0].sortProperty),l=new nk({props:fn}),Ue.push(()=>yt(l,"value",ie));function ne(Z){t[8](Z)}let _e={options:uk};return t[0].scoreComparator!==void 0&&(_e.value=t[0].scoreComparator),y=new ik({props:_e}),Ue.push(()=>yt(y,"value",ne)),O=new oc({props:{text:"Done",title:"Return to searching."}}),O.$on("click",t[5]),{c(){e=I("div"),n=I("label"),s=I("b"),s.textContent="Sorting",r=$(),i=I("div"),F(o.$$.fragment),c=$(),F(l.$$.fragment),h=$(),d=I("label"),p=I("b"),p.textContent="Score Filtering",m=$(),g=I("div"),F(y.$$.fragment),v=$(),E=I("input"),N=$(),F(O.$$.fragment),f(i,"class","row svelte-1k7zufl"),f(n,"class","svelte-1k7zufl"),f(E,"type","number"),f(E,"min",0),f(E,"max",1e5),f(E,"step",1),f(E,"class","svelte-1k7zufl"),f(g,"class","row svelte-1k7zufl"),f(d,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(Z,pe){A(Z,e,pe),_(e,n),_(n,s),_(n,r),_(n,i),M(o,i,null),_(i,c),M(l,i,null),_(e,h),_(e,d),_(d,p),_(d,m),_(d,g),M(y,g,null),_(g,v),_(g,E),rt(E,t[0].scoreValue),_(e,N),M(O,e,null),R=!0,X||(ue=[V(E,"input",t[9]),V(E,"keyup",St(dk))],X=!0)},p(Z,pe){const Vt={};!a&&pe&1&&(a=!0,Vt.value=Z[0].sortDirection,mt(()=>a=!1)),o.$set(Vt);const nr={};!u&&pe&1&&(u=!0,nr.value=Z[0].sortProperty,mt(()=>u=!1)),l.$set(nr);const sr={};!b&&pe&1&&(b=!0,sr.value=Z[0].scoreComparator,mt(()=>b=!1)),y.$set(sr),pe&1&&Go(E.value)!==Z[0].scoreValue&&rt(E,Z[0].scoreValue)},i(Z){R||(w(o.$$.fragment,Z),w(l.$$.fragment,Z),w(y.$$.fragment,Z),w(O.$$.fragment,Z),R=!0)},o(Z){T(o.$$.fragment,Z),T(l.$$.fragment,Z),T(y.$$.fragment,Z),T(O.$$.fragment,Z),R=!1},d(Z){Z&&S(e),L(o),L(l),L(y),L(O),X=!1,ve(ue)}}}function ak(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,g,y=t[1]&&bu(t);return{c(){e=I("button"),n=I("i"),s=$(),r=I("span"),i=ae(t[3]),o=$(),a=I("i"),c=$(),l=I("span"),u=ae(t[2]),h=$(),y&&y.c(),d=tt(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(b,v){A(b,e,v),_(e,n),_(e,s),_(e,r),_(r,i),_(e,o),_(e,a),_(e,c),_(e,l),_(l,u),A(b,h,v),y&&y.m(b,v),A(b,d,v),p=!0,m||(g=[V(e,"click",t[4]),V(e,"keypress",St(t[4]))],m=!0)},p(b,[v]){(!p||v&8)&&me(i,b[3]),(!p||v&4)&&me(u,b[2]),b[1]?y?(y.p(b,v),v&2&&w(y,1)):(y=bu(b),y.c(),w(y,1),y.m(d.parentNode,d)):y&&(de(),T(y,1,1,()=>{y=null}),fe())},i(b){p||(w(y),p=!0)},o(b){T(y),p=!1},d(b){b&&S(e),b&&S(h),y&&y.d(b),b&&S(d),m=!1,ve(g)}}}const ck=Object.freeze({id:"Upload",score:"Score",updated:"Change"}),lk=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),uk=Object.freeze({">=":"≥","<=":"≤"}),hk=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),dk=t=>t.target.blur();function fk(t,e,n){let s,r,i;Me(t,bn,p=>n(0,i=p));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1);function l(p){t.$$.not_equal(i.sortDirection,p)&&(i.sortDirection=p,bn.set(i))}function u(p){t.$$.not_equal(i.sortProperty,p)&&(i.sortProperty=p,bn.set(i))}function h(p){t.$$.not_equal(i.scoreComparator,p)&&(i.scoreComparator=p,bn.set(i))}function d(){i.scoreValue=Go(this.value),bn.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,s=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${kt(i.scoreValue)}`),t.$$.dirty&1&&n(2,r=hk[i.sortProperty][i.sortDirection])},[i,o,r,s,a,c,l,u,h,d]}class pk extends W{constructor(e){super(),G(this,e,fk,ak,K,{})}}function gk(t){let e,n,s=kt(t[0])+"",r,i,o,a,c,l;return c=new pk({}),{c(){e=I("div"),n=I("span"),r=ae(s),i=ae(" results"),a=$(),F(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){A(u,e,h),_(e,n),_(n,r),_(n,i),_(e,a),M(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&s!==(s=kt(u[0])+"")&&me(r,s),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(w(c.$$.fragment,u),l=!0)},o(u){T(c.$$.fragment,u),l=!1},d(u){u&&S(e),L(c)}}}function mk(t,e,n){let s;return Me(t,uc,r=>n(0,s=r)),[s]}class yk extends W{constructor(e){super(),G(this,e,mk,gk,K,{})}}function Iu(t,e,n){const s=t.slice();return s[8]=e[n],s}function _k(t){let e,n;return e=new G1({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function vk(t){let e,n,s,r,i,o,a,c;e=new yk({}),e.$on("configchange",t[6]);let l=t[1].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=Tu(Iu(t,l,g));const h=g=>T(u[g],1,1,()=>{u[g]=null}),d=[bk,wk],p=[];function m(g,y){return g[3]?0:1}return i=m(t),o=p[i]=d[i](t),{c(){F(e.$$.fragment),n=$(),s=I("ol");for(let g=0;g<u.length;g+=1)u[g].c();r=$(),o.c(),a=tt(),f(s,"class","svelte-dsypei")},m(g,y){M(e,g,y),A(g,n,y),A(g,s,y);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(s,null);A(g,r,y),p[i].m(g,y),A(g,a,y),c=!0},p(g,y){if(y&2){l=g[1].pages;let v;for(v=0;v<l.length;v+=1){const E=Iu(g,l,v);u[v]?(u[v].p(E,y),w(u[v],1)):(u[v]=Tu(E),u[v].c(),w(u[v],1),u[v].m(s,null))}for(de(),v=l.length;v<u.length;v+=1)h(v);fe()}let b=i;i=m(g),i===b?p[i].p(g,y):(de(),T(p[b],1,1,()=>{p[b]=null}),fe(),o=p[i],o?o.p(g,y):(o=p[i]=d[i](g),o.c()),w(o,1),o.m(a.parentNode,a))},i(g){if(!c){w(e.$$.fragment,g);for(let y=0;y<l.length;y+=1)w(u[y]);w(o),c=!0}},o(g){T(e.$$.fragment,g),u=u.filter(Boolean);for(let y=0;y<u.length;y+=1)T(u[y]);T(o),c=!1},d(g){L(e,g),g&&S(n),g&&S(s),Ut(u,g),g&&S(r),p[i].d(g),g&&S(a)}}}function Tu(t){let e,n;return e=new F1({props:{posts:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.posts=s[8]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function wk(t){let e,n;return e=new z1({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function bk(t){let e,n;return e=new B1({}),e.$on("visible",t[7]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Ik(t){let e,n,s,r;const i=[vk,_k],o=[];function a(c,l){return c[0]?0:c[2]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=tt()},m(c,l){~e&&o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(de(),T(o[u],1,1,()=>{o[u]=null}),fe()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){~e&&o[e].d(c),c&&S(s)}}}function Tk(t,e,n){let s,r,i,o,a;Me(t,uc,h=>n(0,o=h)),Me(t,ts,h=>n(1,a=h));const c=Xe(),l=()=>c("configchange"),u=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o/Op),t.$$.dirty&34&&n(3,r=a.pages.length<s),t.$$.dirty&1&&n(2,i=o===0)},[o,a,i,r,c,s,l,u]}class Ek extends W{constructor(e){super(),G(this,e,Tk,Ik,K,{})}}function kk(t){let e,n,s;return{c(){e=I("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-1b7u605"),ce(e,"visible",t[0])},m(r,i){A(r,e,i),n||(s=V(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&ce(e,"visible",r[0])},i:C,o:C,d(r){r&&S(e),n=!1,s()}}}function Sk(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Ds(()=>{document.addEventListener("scroll",i,{passive:!0})}),ti(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class Ak extends W{constructor(e){super(),G(this,e,Sk,kk,K,{})}}function Ck(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=I("div"),n=I("div"),s=I("i"),i=$(),o=I("div"),a=I("h3"),c=ae(t[2]),l=$(),u=I("span"),h=ae(t[1]),f(s,"class",r=Qe(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){A(d,e,p),_(e,n),_(n,s),_(e,i),_(e,o),_(o,a),_(a,c),_(o,l),_(o,u),_(u,h)},p(d,[p]){p&1&&r!==(r=Qe(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&me(c,d[2]),p&2&&me(h,d[1])},i:C,o:C,d(d){d&&S(e)}}}function Dk(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Vp extends W{constructor(e){super(),G(this,e,Dk,Ck,K,{icon:0,message:1,title:2})}}function Rk(t){let e;return{c(){e=I("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}class Nk extends W{constructor(e){super(),G(this,e,null,Rk,K,{})}}function Eu(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function ku(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=Su(Eu(t,r,c));const o=c=>T(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&Au(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=$(),a&&a.c(),n=tt()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);A(c,e,l),a&&a.m(c,l),A(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=Eu(c,r,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=Su(h),i[u].c(),w(i[u],1),i[u].m(e.parentNode,e))}for(de(),u=r.length;u<i.length;u+=1)o(u);fe()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=Au(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)w(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)T(i[l]);s=!1},d(c){Ut(i,c),c&&S(e),a&&a.d(c),c&&S(n)}}}function Su(t){let e,n;function s(){return t[3](t[8])}function r(){return t[4](t[6])}return e=new Ap({props:{tag:t[6]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){F(e.$$.fragment)},m(i,o){M(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){L(e,i)}}}function Au(t){let e,n,s;return{c(){e=I("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-lsipoc"></i>',f(e,"class","add-supertag svelte-lsipoc"),f(e,"title","Click to create a new supertag")},m(r,i){A(r,e,i),n||(s=V(e,"click",t[5]),n=!0)},p:C,d(r){r&&S(e),n=!1,s()}}}function Ok(t){let e,n,s=t[0].length&&ku(t);return{c(){e=I("ul"),s&&s.c(),f(e,"class","svelte-lsipoc")},m(r,i){A(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&w(s,1)):(s=ku(r),s.c(),w(s,1),s.m(e,null)):s&&(de(),T(s,1,1,()=>{s=null}),fe())},i(r){n||(w(s),n=!0)},o(r){T(s),n=!1},d(r){r&&S(e),s&&s.d()}}}function $k(t,e,n){let s,r;Me(t,_t,l=>n(0,s=l)),Me(t,Ip,l=>n(1,r=l));const i=Xe();return[s,r,i,l=>_t.removeByIndex(l),l=>_t.addOrReplace(new Fi(IT(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class Pk extends W{constructor(e){super(),G(this,e,$k,Ok,K,{})}}const ES=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),Mk=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class Lk{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=co(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=co(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),eE(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=co(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),tE(this.tagString)}}const Cu=()=>new Lk,co=(t,e,n,s,r,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${r}${s}`,`sort:${e}:${n}`];if(c.length>0){const h=lo(c.map(d=>kp(d)));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${lo(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>Mk[p]).map(p=>new Ui("-",p)),d=lo(h);l.push(d)}const u=l.join("+");return console.log("searching for",u),u},lo=t=>{const e=Uk(t);let n=[...Du([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${Du(e["~"]).join(" ~ ")} )`),n.join("+")},Uk=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Du=t=>t.map(e=>e.serialize()),Fk=()=>{const t=[],{subscribe:e,update:n}=xi("blockedContent",t);return{subscribe:e,toggle(s){n(r=>r.includes(s)?r.filter(i=>i!==s):[...r,s])}}},xk=Fk();function Vk(t){let e,n;return e=new Ek({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Bk(t){let e,n,s,r;const i=[qk,jk],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=tt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(de(),T(o[u],1,1,()=>{o[u]=null}),fe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function jk(t){let e,n;return e=new Vp({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function qk(t){let e,n;return e=new Vp({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Ru(t){let e,n;return e=new jT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function zk(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,g,y,b;n=new Nk({}),r=new TE({}),r.$on("pick",t[7]),o=new Pk({}),o.$on("supertag",t[8]),l=new oc({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const v=[Bk,Vk],E=[];function N(R,X){return R[1]!==void 0?0:1}h=N(t),d=E[h]=v[h](t),m=new Ak({});let O=t[0]&&Ru(t);return{c(){e=I("div"),F(n.$$.fragment),s=$(),F(r.$$.fragment),i=$(),F(o.$$.fragment),a=$(),c=I("div"),F(l.$$.fragment),u=$(),d.c(),p=$(),F(m.$$.fragment),g=$(),O&&O.c(),y=tt(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(R,X){A(R,e,X),M(n,e,null),_(e,s),M(r,e,null),_(e,i),M(o,e,null),_(e,a),_(e,c),M(l,c,null),A(R,u,X),E[h].m(R,X),A(R,p,X),M(m,R,X),A(R,g,X),O&&O.m(R,X),A(R,y,X),b=!0},p(R,[X]){let ue=h;h=N(R),h===ue?E[h].p(R,X):(de(),T(E[ue],1,1,()=>{E[ue]=null}),fe(),d=E[h],d?d.p(R,X):(d=E[h]=v[h](R),d.c()),w(d,1),d.m(p.parentNode,p)),R[0]?O?(O.p(R,X),X&1&&w(O,1)):(O=Ru(R),O.c(),w(O,1),O.m(y.parentNode,y)):O&&(de(),T(O,1,1,()=>{O=null}),fe())},i(R){b||(w(n.$$.fragment,R),w(r.$$.fragment,R),w(o.$$.fragment,R),w(l.$$.fragment,R),w(d),w(m.$$.fragment,R),w(O),b=!0)},o(R){T(n.$$.fragment,R),T(r.$$.fragment,R),T(o.$$.fragment,R),T(l.$$.fragment,R),T(d),T(m.$$.fragment,R),T(O),b=!1},d(R){R&&S(e),L(n),L(r),L(o),L(l),R&&S(u),E[h].d(R),R&&S(p),L(m,R),R&&S(g),O&&O.d(R),R&&S(y)}}}function Hk(t,e,n){let s,r,i,o,a;Me(t,bn,v=>n(6,s=v)),Me(t,xk,v=>n(12,r=v)),Me(t,Cs,v=>n(13,i=v)),Me(t,_t,v=>n(2,o=v)),Me(t,ts,v=>n(14,a=v));let c=!1,l,u=!1,h=JSON.stringify(s);const d=async()=>{n(1,l=void 0),u=!0,ts.reset();try{const[v,E]=await Cu().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPageAndCount();ts.addPage(v),uc.set(E)}catch(v){n(1,l=v),console.warn(v)}finally{u=!1}},p=async()=>{if(!u){n(1,l=void 0),u=!0;try{const v=await Cu().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPage();ts.addPage(v)}catch(v){n(1,l=v),console.warn(v)}finally{u=!1}}},m=v=>_t.addOrReplace(v.detail),g=()=>{n(0,c=!0)},y=v=>{Cs.addSupertag(v.detail),_t.set([new Fi("+",v.detail.name,v.detail.tags.length,"supertag")])},b=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const v=JSON.stringify(s);h!==v&&(n(5,h=v),d())}},[c,l,o,d,p,h,s,m,g,y,b]}class Kk extends W{constructor(e){super(),G(this,e,Hk,zk,K,{})}}function Gk(t){let e,n;return e=new cc({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Wk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=gc(r,i())),{c(){e&&F(e.$$.fragment),n=tt()},m(o,a){e&&M(e,o,a),A(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){de();const c=e;T(c.$$.fragment,1,0,()=>{L(c,1)}),fe()}r?(e=gc(r,i()),F(e.$$.fragment),w(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&T(e.$$.fragment,o),s=!1},d(o){o&&S(n),e&&L(e,o)}}}function Qk(t){let e,n,s,r;const i=[Wk,Gk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=tt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(de(),T(o[u],1,1,()=>{o[u]=null}),fe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function Yk(t,e,n){let{loadComponent:s}=e,r;return Ds(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class hc extends W{constructor(e){super(),G(this,e,Yk,Qk,K,{loadComponent:1})}}function Xk(t){let e;return{c(){e=I("p"),e.textContent="You got lost..."},m(n,s){A(n,e,s)},i:C,o:C,d(n){n&&S(e)}}}function Jk(t){let e,n;return e=new hc({props:{loadComponent:iS}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Zk(t){let e,n;return e=new hc({props:{loadComponent:rS}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function eS(t){let e,n;return e=new hc({props:{loadComponent:sS}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function tS(t){let e,n;return e=new Kk({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function nS(t){let e,n,s,r;const i=[tS,eS,Zk,Jk,Xk],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=I("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){A(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(de(),T(o[u],1,1,()=>{o[u]=null}),fe(),s=o[n],s||(s=o[n]=i[n](c),s.c()),w(s,1),s.m(e,null))},i(c){r||(w(s),r=!0)},o(c){T(s),r=!1},d(c){c&&S(e),o[n].d()}}}const sS=()=>Pi(()=>import("./Account-0640b5dd.js"),["assets/Account-0640b5dd.js","assets/Account-0bbfdf36.css"]),rS=()=>Pi(()=>import("./Preferences-7b49d332.js"),["assets/Preferences-7b49d332.js","assets/ParagraphHeading-7abe19bf.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),iS=()=>Pi(()=>import("./Help-bab9ca17.js"),["assets/Help-bab9ca17.js","assets/ParagraphHeading-7abe19bf.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function oS(t,e,n){let s;return Me(t,In,r=>n(0,s=r)),[s]}class aS extends W{constructor(e){super(),G(this,e,oS,nS,K,{})}}function cS(t){let e;return{c(){e=I("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}class lS extends W{constructor(e){super(),G(this,e,null,cS,K,{})}}const{subscribe:uS,set:hS}=Up("theme","dark"),Nu={subscribe:uS,set(t){hS(t),dS(t),Cs.setTheme(t)}},dS=t=>{document.documentElement.classList.replace(fS(t),t)},fS=t=>t==="dark"?"light":"dark";function pS(t){let e,n,s,r,i,o;return e=new vT({}),s=new aS({}),i=new lS({}),{c(){F(e.$$.fragment),n=$(),F(s.$$.fragment),r=$(),F(i.$$.fragment)},m(a,c){M(e,a,c),A(a,n,c),M(s,a,c),A(a,r,c),M(i,a,c),o=!0},p:C,i(a){o||(w(e.$$.fragment,a),w(s.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),T(s.$$.fragment,a),T(i.$$.fragment,a),o=!1},d(a){L(e,a),a&&S(n),L(s,a),a&&S(r),L(i,a)}}}function gS(t){return Nu.subscribe(e=>Nu.set(e))(),[]}class mS extends W{constructor(e){super(),G(this,e,gS,pS,K,{})}}function yS(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Pi(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new mS({target:document.getElementById("app")});yS();export{CE as $,ce as A,oc as B,Fu as C,Cp as D,Ue as E,yt as F,mt as G,rt as H,vt as I,Ip as J,Me as K,Cs as L,Ql as M,Kl as N,Up as O,$u as P,Lu as Q,Uu as R,W as S,Mu as T,Nu as U,xk as V,_S as W,nk as X,ES as Y,Ap as Z,Fi as _,f as a,Yr as a0,Ak as a1,$T as a2,A as b,_ as c,me as d,I as e,Un as f,C as g,S as h,G as i,$ as j,tt as k,V as l,w as m,Qe as n,St as o,de as p,fe as q,T as r,K as s,ae as t,Ut as u,ve as v,Xe as w,F as x,M as y,L as z};
