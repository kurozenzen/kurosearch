(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function S(){}function po(t,e){for(const n in e)t[n]=e[n];return t}function Hp(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Uu(t){return t()}function gc(){return Object.create(null)}function be(t){t.forEach(Uu)}function ti(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let or;function Tt(t,e){return or||(or=document.createElement("a")),or.href=e,t===or.href}function Kp(t){return Object.keys(t).length===0}function Gp(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ue(t,e,n){t.$$.on_destroy.push(Gp(e,n))}function Fu(t,e,n,s){if(t){const r=xu(t,e,n,s);return t[0](r)}}function xu(t,e,n,s){return t[1]&&s?po(n.ctx.slice(),t[1](s(e))):n.ctx}function Vu(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Bu(t,e,n,s,r,i){if(r){const o=xu(e,n,s,i);t.p(o,r)}}function ju(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function mc(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xe(t){return t??""}function _S(t,e,n){return t.set(n),e}const Wp=typeof window<"u";let Qp=Wp?t=>requestAnimationFrame(t):S;function m(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function mn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function le(t){return document.createTextNode(t)}function P(){return le(" ")}function st(){return le("")}function B(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Qo(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ar(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yo(t){return t===""?null:+t}function Yp(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ct(t,e){t.value=e??""}function Xp(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function yc(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Jp(t){const e=t.querySelector(":checked");return e&&e.__value}function he(t,e,n){t.classList[n?"add":"remove"](e)}function Zp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function _c(t,e){return new t(e)}let hs;function mt(t){hs=t}function ni(){if(!hs)throw new Error("Function called outside component initialization");return hs}function Ns(t){ni().$$.on_mount.push(t)}function si(t){ni().$$.on_destroy.push(t)}function Ze(){const t=ni();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Zp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const wn=[],xe=[];let Sn=[];const go=[],eg=Promise.resolve();let mo=!1;function tg(){mo||(mo=!0,eg.then(Xo))}function ds(t){Sn.push(t)}function wt(t){go.push(t)}const qi=new Set;let yn=0;function Xo(){if(yn!==0)return;const t=hs;do{try{for(;yn<wn.length;){const e=wn[yn];yn++,mt(e),ng(e.$$)}}catch(e){throw wn.length=0,yn=0,e}for(mt(null),wn.length=0,yn=0;xe.length;)xe.pop()();for(let e=0;e<Sn.length;e+=1){const n=Sn[e];qi.has(n)||(qi.add(n),n())}Sn.length=0}while(wn.length);for(;go.length;)go.pop()();mo=!1,qi.clear(),mt(t)}function ng(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ds)}}function sg(t){const e=[],n=[];Sn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Sn=e}const mr=new Set;let Kt;function ge(){Kt={r:0,c:[],p:Kt}}function me(){Kt.r||be(Kt.c),Kt=Kt.p}function w(t,e){t&&t.i&&(mr.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(mr.has(t))return;mr.add(t),Kt.c.push(()=>{mr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Cr(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ge(),T(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),me())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Xo()}if(Hp(t)){const r=ni();if(t.then(i=>{mt(r),s(e.then,1,e.value,i),mt(null)},i=>{if(mt(r),s(e.catch,2,e.error,i),mt(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function qu(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function bt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function x(t){t&&t.c()}function M(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||ds(()=>{const o=t.$$.on_mount.map(Uu).filter(ti);t.$$.on_destroy?t.$$.on_destroy.push(...o):be(o),t.$$.on_mount=[]}),i.forEach(ds)}function U(t,e){const n=t.$$;n.fragment!==null&&(sg(n.after_update),be(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rg(t,e){t.$$.dirty[0]===-1&&(wn.push(t),tg(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,s,r,i,o,a=[-1]){const c=hs;mt(t);const l=t.$$={fragment:null,ctx:[],props:i,update:S,not_equal:r,bound:gc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:gc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const v=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=v)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](v),u&&rg(t,h)),d}):[],l.update(),u=!0,be(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Yp(e.target);l.fragment&&l.fragment.l(h),h.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),Xo()}mt(c)}class Q{$destroy(){U(this,1),this.$destroy=S}$on(e,n){if(!ti(n))return S;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Kp(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _n=[];function Os(t,e=S){let n;const s=new Set;function r(a){if(G(t,a)&&(t=a,n)){const c=!_n.length;for(const l of s)l[1](),_n.push(l,t);if(c){for(let l=0;l<_n.length;l+=2)_n[l][0](_n[l+1]);_n.length=0}}}function i(a){r(a(t))}function o(a,c=S){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||S),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const ig=Object.freeze(["search","account","settings","help"]),og=t=>ig.includes(t),ag=()=>{const{subscribe:t,set:e}=Os("search");return{subscribe:t,navigateTo(n){if(!og(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},En=ag();function cg(t){let e,n,s,r,i,o;return{c(){e=mn("svg"),n=mn("g"),s=mn("path"),r=mn("defs"),i=mn("clipPath"),o=mn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){C(a,e,c),m(e,n),m(n,s),m(e,r),m(r,i),m(i,o)},p:S,i:S,o:S,d(a){a&&A(e)}}}class lg extends Q{constructor(e){super(),W(this,e,null,cg,G,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ug=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ug(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new hg;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dg=function(t){const e=zu(t);return Hu.encodeByteArray(e,!0)},Dr=function(t){return dg(t).replace(/\./g,"")},Ku=function(t){try{return Hu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pg=()=>fg().__FIREBASE_DEFAULTS__,gg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ku(t[1]);return e&&JSON.parse(e)},Jo=()=>{try{return pg()||gg()||mg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gu=t=>{var e,n;return(n=(e=Jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yg=t=>{const e=Gu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},_g=()=>{var t;return(t=Jo())===null||t===void 0?void 0:t.config},Wu=t=>{var e;return(e=Jo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dr(JSON.stringify(n)),Dr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Qu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tg(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yu(){try{return typeof indexedDB=="object"}catch{return!1}}function Xu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Eg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="FirebaseError";class rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kg,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Sg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rt(r,a,s)}}function Sg(t,e){return t.replace(Ag,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ag=/\{\$([^}]+)}/g;function Cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vc(i)&&vc(o)){if(!fs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Jn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dg(t,e){const n=new Rg(t,e);return n.subscribe.bind(n)}class Rg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=zi),r.error===void 0&&(r.error=zi),r.complete===void 0&&(r.complete=zi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=1e3,$g=2,Pg=4*60*60*1e3,Lg=.5;function wc(t,e=Og,n=$g){const s=e*Math.pow(n,t),r=Math.round(Lg*s*(Math.random()-.5)*2);return Math.min(Pg,s+r)}/**
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
 */function Ae(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fg(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ug(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ug(t){return t===zt?void 0:t}function Fg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Vg={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Bg=ce.INFO,jg={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},qg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=jg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ri{constructor(e){this.name=e,this._logLevel=Bg,this._logHandler=qg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const zg=(t,e)=>e.some(n=>t instanceof n);let bc,Ic;function Hg(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kg(){return Ic||(Ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,yo=new WeakMap,Zu=new WeakMap,Hi=new WeakMap,Zo=new WeakMap;function Gg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ju.set(n,t)}).catch(()=>{}),Zo.set(e,t),e}function Wg(t){if(yo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yo.set(t,e)}let _o={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qg(t){_o=t(_o)}function Yg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ki(this),e,...n);return Zu.set(s,e.sort?e.sort():[e]),Lt(s)}:Kg().includes(t)?function(...e){return t.apply(Ki(this),e),Lt(Ju.get(this))}:function(...e){return Lt(t.apply(Ki(this),e))}}function Xg(t){return typeof t=="function"?Yg(t):(t instanceof IDBTransaction&&Wg(t),zg(t,Hg())?new Proxy(t,_o):t)}function Lt(t){if(t instanceof IDBRequest)return Gg(t);if(Hi.has(t))return Hi.get(t);const e=Xg(t);return e!==t&&(Hi.set(t,e),Zo.set(e,t)),e}const Ki=t=>Zo.get(t);function eh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Lt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Jg=["get","getKey","getAll","getAllKeys","count"],Zg=["put","add","delete","clear"],Gi=new Map;function Tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Zg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Jg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Gi.set(e,i),i}Qg(t=>({...t,get:(e,n,s)=>Tc(e,n)||t.get(e,n,s),has:(e,n)=>!!Tc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vo="@firebase/app",Ec="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new ri("@firebase/app"),nm="@firebase/app-compat",sm="@firebase/analytics-compat",rm="@firebase/analytics",im="@firebase/app-check-compat",om="@firebase/app-check",am="@firebase/auth",cm="@firebase/auth-compat",lm="@firebase/database",um="@firebase/database-compat",hm="@firebase/functions",dm="@firebase/functions-compat",fm="@firebase/installations",pm="@firebase/installations-compat",gm="@firebase/messaging",mm="@firebase/messaging-compat",ym="@firebase/performance",_m="@firebase/performance-compat",vm="@firebase/remote-config",wm="@firebase/remote-config-compat",bm="@firebase/storage",Im="@firebase/storage-compat",Tm="@firebase/firestore",Em="@firebase/firestore-compat",km="firebase",Sm="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="[DEFAULT]",Am={[vo]:"fire-core",[nm]:"fire-core-compat",[rm]:"fire-analytics",[sm]:"fire-analytics-compat",[om]:"fire-app-check",[im]:"fire-app-check-compat",[am]:"fire-auth",[cm]:"fire-auth-compat",[lm]:"fire-rtdb",[um]:"fire-rtdb-compat",[hm]:"fire-fn",[dm]:"fire-fn-compat",[fm]:"fire-iid",[pm]:"fire-iid-compat",[gm]:"fire-fcm",[mm]:"fire-fcm-compat",[ym]:"fire-perf",[_m]:"fire-perf-compat",[vm]:"fire-rc",[wm]:"fire-rc-compat",[bm]:"fire-gcs",[Im]:"fire-gcs-compat",[Tm]:"fire-fst",[Em]:"fire-fst-compat","fire-js":"fire-js",[km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,bo=new Map;function Cm(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(bo.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,t);for(const n of Rr.values())Cm(n,t);return!0}function dn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new hn("app","Firebase",Dm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=Sm;function th(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Mt.create("bad-app-name",{appName:String(r)});if(n||(n=_g()),!n)throw Mt.create("no-options");const i=Rr.get(r);if(i){if(fs(n,i.options)&&fs(s,i.config))return i;throw Mt.create("duplicate-app",{appName:r})}const o=new xg(r);for(const c of bo.values())o.addComponent(c);const a=new Rm(n,s,o);return Rr.set(r,a),a}function ea(t=wo){const e=Rr.get(t);if(!e&&t===wo)return th();if(!e)throw Mt.create("no-app",{appName:t});return e}function Qe(t,e,n){var s;let r=(s=Am[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}ft(new tt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Nm="firebase-heartbeat-database",Om=1,ps="firebase-heartbeat-store";let Wi=null;function nh(){return Wi||(Wi=eh(Nm,Om,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Wi}async function $m(t){try{return(await nh()).transaction(ps).objectStore(ps).get(sh(t))}catch(e){if(e instanceof rt)sn.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function kc(t,e){try{const s=(await nh()).transaction(ps,"readwrite");return await s.objectStore(ps).put(e,sh(t)),s.done}catch(n){if(n instanceof rt)sn.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(s.message)}}}function sh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pm=1024,Lm=30*24*60*60*1e3;class Mm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Lm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sc(),{heartbeatsToSend:n,unsentEntries:s}=Um(this._heartbeatsCache.heartbeats),r=Dr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Sc(){return new Date().toISOString().substring(0,10)}function Um(t,e=Pm){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ac(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ac(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yu()?Xu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $m(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ac(t){return Dr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){ft(new tt("platform-logger",e=>new em(e),"PRIVATE")),ft(new tt("heartbeat",e=>new Mm(e),"PRIVATE")),Qe(vo,Ec,t),Qe(vo,Ec,"esm2017"),Qe("fire-js","")}xm("");function ta(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function rh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vm=rh,ih=new hn("auth","Firebase",rh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new ri("@firebase/auth");function yr(t,...e){Cc.logLevel<=ce.ERROR&&Cc.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,...e){throw na(t,...e)}function lt(t,...e){return na(t,...e)}function oh(t,e,n){const s=Object.assign(Object.assign({},Vm()),{[e]:n});return new hn("auth","Firebase",s).create(e,{appName:t.name})}function Bm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Je(t,"argument-error"),oh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function na(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ih.create(t,...e)}function z(t,e,...n){if(!t)throw na(e,...n)}function yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yr(e),new Error(e)}function Et(t,e){t||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new Map;function _t(t){Et(t instanceof Function,"Expected a class definition");let e=Dc.get(t);return e?(Et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){const n=dn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(fs(i,e??{}))return r;Je(r,"already-initialized")}return n.initialize({options:e})}function qm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zm(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zm()||Qu()||"connection"in navigator)?navigator.onLine:!0}function Km(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Et(n>e,"Short delay should be less than long delay!"),this.isMobile=bg()||Ig()}get(){return Hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e){Et(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Ls(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Us(t,e,n,s,r={}){return ch(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ah.fetch()(lh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ch(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Gm),e);try{const r=new Qm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ar(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oh(t,u,l);Je(t,u)}}catch(r){if(r instanceof rt)throw r;Je(t,"internal-error",{message:String(r)})}}async function Fs(t,e,n,s,r={}){const i=await Us(t,e,n,s,r);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function lh(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?sa(t.config,r):`${t.config.apiScheme}://${r}`}class Qm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(lt(this.auth,"network-request-failed")),Wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=lt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t,e){return Us(t,"POST","/v1/accounts:delete",e)}async function Xm(t,e){return Us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jm(t,e=!1){const n=Ae(t),s=await n.getIdToken(e),r=ra(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:rs(Qi(r.auth_time)),issuedAtTime:rs(Qi(r.iat)),expirationTime:rs(Qi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qi(t){return Number(t)*1e3}function ra(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ku(n);return r?JSON.parse(r):(yr("Failed to decode base64 JWT payload"),null)}catch(r){return yr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Zm(t){const e=ra(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rt&&ey(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ey({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await gs(t,Xm(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ry(i.providerUserInfo):[],a=sy(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new uh(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ny(t){const e=Ae(t);await Nr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sy(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ry(t){return t.map(e=>{var{providerId:n}=e,s=ta(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(t,e){const n=await ch(t,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=lh(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ah.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await iy(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ms;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ta(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jm(this,e)}reload(){return ny(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gs(this,Ym(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:O,isAnonymous:N,providerData:D,stsTokenManager:J}=n;z(R&&J,e,"internal-error");const fe=ms.fromJSON(this.name,J);z(typeof R=="string",e,"internal-error"),Nt(h,e.name),Nt(d,e.name),z(typeof O=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),Nt(p,e.name),Nt(v,e.name),Nt(g,e.name),Nt(y,e.name),Nt(I,e.name),Nt(_,e.name);const $=new Jt({uid:R,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:p,tenantId:g,stsTokenManager:fe,createdAt:I,lastLoginAt:_});return D&&Array.isArray(D)&&($.providerData=D.map(q=>Object.assign({},q))),y&&($._redirectEventId=y),$}static async _fromIdTokenResponse(e,n,s=!1){const r=new ms;r.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Nr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hh.type="NONE";const Nc=hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class An{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=_r(this.userKey,r.apiKey,i),this.fullPersistenceKey=_r("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new An(_t(Nc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||_t(Nc);const o=_r(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Jt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new An(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new An(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mh(e))return"Blackberry";if(yh(e))return"Webos";if(ia(e))return"Safari";if((e.includes("chrome/")||fh(e))&&!e.includes("edge/"))return"Chrome";if(gh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function dh(t=je()){return/firefox\//i.test(t)}function ia(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fh(t=je()){return/crios\//i.test(t)}function ph(t=je()){return/iemobile/i.test(t)}function gh(t=je()){return/android/i.test(t)}function mh(t=je()){return/blackberry/i.test(t)}function yh(t=je()){return/webos/i.test(t)}function ii(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oy(t=je()){var e;return ii(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ay(){return Tg()&&document.documentMode===10}function _h(t=je()){return ii(t)||gh(t)||yh(t)||mh(t)||/windows phone/i.test(t)||ph(t)}function cy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e=[]){let n;switch(t){case"Browser":n=Oc(je());break;case"Worker":n=`${Oc(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${s}`}/**
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
 */class ly{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $c(this),this.idTokenSubscription=new $c(this),this.beforeStateQueue=new ly(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ih,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_t(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Vn(t){return Ae(t)}class $c{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dg(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function hy(t,e,n){const s=Vn(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=wh(e),{host:o,port:a}=dy(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||fy()}function wh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dy(t){const e=wh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Pc(o)}}}function Pc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,n){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function py(t,e){return Us(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t,e){return Fs(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(t,e){return Fs(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function yy(t,e){return Fs(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends oa{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ys(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ys(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return gy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return my(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return py(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yy(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e){return Fs(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="http://localhost";class rn extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ta(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}buildRequest(){const e={requestUri:_y,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wy(t){const e=Xn(Jn(t)).link,n=e?Xn(Jn(e)).deep_link_id:null,s=Xn(Jn(t)).deep_link_id;return(s?Xn(Jn(s)).link:null)||s||n||e||t}class aa{constructor(e){var n,s,r,i,o,a;const c=Xn(Jn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=vy((r=c.mode)!==null&&r!==void 0?r:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wy(e);try{return new aa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(e,n){return ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=aa.parseLink(n);return z(s,"argument-error"),ys._fromEmailAndCode(e,s.code,s.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends xs{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gt.credential(n,s)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends xs{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends xs{constructor(){super("twitter.com")}static credential(e,n){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Pt.credential(n,s)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(t,e){return Fs(t,"POST","/v1/accounts:signUp",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Jt._fromIdTokenResponse(e,s,r),o=Lc(s);return new on({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lc(s);return new on({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends rt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Or.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Or(e,n,s,r)}}function bh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Or._fromErrorAndOperation(t,i,e,s):i})}async function Iy(t,e,n=!1){const s=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await gs(t,bh(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=ra(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),on._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t,e,n=!1){const s="signIn",r=await bh(t,s,e),i=await on._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Ey(t,e){return Ih(Vn(t),e)}async function ky(t,e,n){const s=Vn(t),r=await by(s,{returnSecureToken:!0,email:e,password:n}),i=await on._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Sy(t,e,n){return Ey(Ae(t),Bn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e){return Ae(t).setPersistence(e)}function Cy(t,e,n,s){return Ae(t).onIdTokenChanged(e,n,s)}function Dy(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function Th(t,e,n,s){return Ae(t).onAuthStateChanged(e,n,s)}function Ry(t){return Ae(t).signOut()}const $r="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(){const t=je();return ia(t)||ii(t)}const Oy=1e3,$y=10;class kh extends Eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ny()&&cy(),this.fallbackToPolling=_h(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ay()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$y):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kh.type="LOCAL";const Sh=kh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends Eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ah.type="SESSION";const Ch=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new oi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Py(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=la("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function My(t){ut().location.href=t}/**
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
 */function Dh(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Uy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xy(){return Dh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebaseLocalStorageDb",Vy=1,Pr="firebaseLocalStorage",Nh="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ai(t,e){return t.transaction([Pr],e?"readwrite":"readonly").objectStore(Pr)}function By(){const t=indexedDB.deleteDatabase(Rh);return new Vs(t).toPromise()}function To(){const t=indexedDB.open(Rh,Vy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Pr,{keyPath:Nh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Pr)?e(s):(s.close(),await By(),e(await To()))})})}async function Mc(t,e,n){const s=ai(t,!0).put({[Nh]:e,value:n});return new Vs(s).toPromise()}async function jy(t,e){const n=ai(t,!1).get(e),s=await new Vs(n).toPromise();return s===void 0?null:s.value}function Uc(t,e){const n=ai(t,!0).delete(e);return new Vs(n).toPromise()}const qy=800,zy=3;class Oh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await To(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oi._getInstance(xy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uy(),!this.activeServiceWorker)return;this.sender=new Ly(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await To();return await Mc(e,$r,"1"),await Uc(e,$r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jy(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ai(r,!1).getAll();return new Vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oh.type="LOCAL";const Hy=Oh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ky().appendChild(s)})}function Wy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ls(3e4,6e4);/**
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
 */function $h(t,e){return e?_t(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qy(t){return Ih(t.auth,new ua(t),t.bypassAuthState)}function Yy(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Ty(n,new ua(t),t.bypassAuthState)}async function Xy(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Iy(n,new ua(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qy;case"linkViaPopup":case"linkViaRedirect":return Xy;case"reauthViaPopup":case"reauthViaRedirect":return Yy;default:Je(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new Ls(2e3,1e4);async function Zy(t,e,n){const s=Vn(t);Bm(t,e,ca);const r=$h(s,n);return new Gt(s,"signInViaPopup",e,r).executeNotNull()}class Gt extends Ph{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Jy.get())};e()}}Gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="pendingRedirect",vr=new Map;class t_ extends Ph{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const s=await n_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n_(t,e){const n=i_(e),s=r_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function s_(t,e){vr.set(t._key(),e)}function r_(t){return _t(t._redirectPersistence)}function i_(t){return _r(e_,t.config.apiKey,t.name)}async function o_(t,e,n=!1){const s=Vn(t),r=$h(s,e),o=await new t_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=10*60*1e3;class c_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Lh(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fc(e))}saveEventToCache(e){this.cachedEventUids.add(Fc(e)),this.lastProcessedEventTime=Date.now()}}function Fc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(t,e={}){return Us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d_=/^https?/;async function f_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u_(t);for(const n of e)try{if(p_(n))return}catch{}Je(t,"unauthorized-domain")}function p_(t){const e=Io(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!d_.test(n))return!1;if(h_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const g_=new Ls(3e4,6e4);function xc(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function m_(t){return new Promise((e,n)=>{var s,r,i;function o(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),n(lt(t,"network-request-failed"))},timeout:g_.get()})}if(!((r=(s=ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const a=Wy("iframefcb");return ut()[a]=()=>{gapi.load?o():n(lt(t,"network-request-failed"))},Gy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wr=null,e})}let wr=null;function y_(t){return wr=wr||m_(t),wr}/**
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
 */const __=new Ls(5e3,15e3),v_="__/auth/iframe",w_="emulator/auth/iframe",b_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T_(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sa(e,w_):`https://${t.config.authDomain}/${v_}`,s={apiKey:e.apiKey,appName:t.name,v:Ps},r=I_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$s(s).slice(1)}`}async function E_(t){const e=await y_(t),n=ut().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:T_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=lt(t,"network-request-failed"),a=ut().setTimeout(()=>{i(o)},__.get());function c(){ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const k_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S_=500,A_=600,C_="_blank",D_="http://localhost";class Vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R_(t,e,n,s=S_,r=A_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},k_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=je().toLowerCase();n&&(a=fh(l)?C_:n),dh(l)&&(e=e||D_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(oy(l)&&a!=="_self")return N_(e||"",a),new Vc(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Vc(h)}function N_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const O_="__/auth/handler",$_="emulator/auth/handler";function Bc(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ps,eventId:r};if(e instanceof ca){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof xs){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${P_(t)}?${$s(a).slice(1)}`}function P_({config:t}){return t.emulator?sa(t,$_):`https://${t.authDomain}/${O_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="webStorageSupport";class L_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ch,this._completeRedirectFn=o_,this._overrideRedirectResult=s_}async _openPopup(e,n,s,r){var i;Et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Bc(e,n,s,Io(),r);return R_(e,o,la())}async _openRedirect(e,n,s,r){return await this._originValidation(e),My(Bc(e,n,s,Io(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Et(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await E_(e),s=new c_(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yi,{type:Yi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Yi];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _h()||ia()||ii()}}const M_=L_;var jc="@firebase/auth",qc="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function x_(t){ft(new tt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vh(t)},u=new uy(a,c,l);return qm(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ft(new tt("auth-internal",e=>{const n=Vn(e.getProvider("auth").getImmediate());return(s=>new U_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(jc,qc,F_(t)),Qe(jc,qc,"esm2017")}/**
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
 */const V_=5*60,B_=Wu("authIdTokenMaxAge")||V_;let zc=null;const j_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>B_)return;const r=n==null?void 0:n.token;zc!==r&&(zc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function q_(t=ea()){const e=dn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jm(t,{popupRedirectResolver:M_,persistence:[Hy,Sh,Ch]}),s=Wu("authTokenSyncURL");if(s){const i=j_(s);Dy(n,i,()=>i(n.currentUser)),Cy(n,o=>i(o))}const r=Gu("auth");return r&&hy(n,`http://${r}`),n}x_("Browser");const Mh="@firebase/installations",ha="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=1e4,Fh=`w:${ha}`,xh="FIS_v2",z_="https://firebaseinstallations.googleapis.com/v1",H_=60*60*1e3,K_="installations",G_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},an=new hn(K_,G_,W_);function Vh(t){return t instanceof rt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh({projectId:t}){return`${z_}/projects/${t}/installations`}function jh(t){return{token:t.token,requestStatus:2,expiresIn:Y_(t.expiresIn),creationTime:Date.now()}}async function qh(t,e){const s=(await e.json()).error;return an.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function zh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Q_(t,{refreshToken:e}){const n=zh(t);return n.append("Authorization",X_(e)),n}async function Hh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Y_(t){return Number(t.replace("s","000"))}function X_(t){return`${xh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Bh(t),r=zh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:xh,appId:t.appId,sdkVersion:Fh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Hh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:jh(l.authToken)}}else throw await qh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=/^[cdef][\w-]{21}$/,Eo="";function tv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=nv(t);return ev.test(n)?n:Eo}catch{return Eo}}function nv(t){return Z_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map;function Wh(t,e){const n=ci(t);Qh(n,e),sv(n,e)}function Qh(t,e){const n=Gh.get(t);if(n)for(const s of n)s(e)}function sv(t,e){const n=rv();n&&n.postMessage({key:t,fid:e}),iv()}let Wt=null;function rv(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=t=>{Qh(t.data.key,t.data.fid)}),Wt}function iv(){Gh.size===0&&Wt&&(Wt.close(),Wt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="firebase-installations-database",av=1,cn="firebase-installations-store";let Xi=null;function da(){return Xi||(Xi=eh(ov,av,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cn)}}})),Xi}async function Lr(t,e){const n=ci(t),r=(await da()).transaction(cn,"readwrite"),i=r.objectStore(cn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Wh(t,e.fid),e}async function Yh(t){const e=ci(t),s=(await da()).transaction(cn,"readwrite");await s.objectStore(cn).delete(e),await s.done}async function li(t,e){const n=ci(t),r=(await da()).transaction(cn,"readwrite"),i=r.objectStore(cn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Wh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t){let e;const n=await li(t.appConfig,s=>{const r=cv(s),i=lv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Eo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function cv(t){const e=t||{fid:tv(),registrationStatus:0};return Xh(e)}function lv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(an.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=uv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hv(t)}:{installationEntry:e}}async function uv(t,e){try{const n=await J_(t,e);return Lr(t.appConfig,n)}catch(n){throw Vh(n)&&n.customData.serverCode===409?await Yh(t.appConfig):await Lr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hv(t){let e=await Hc(t.appConfig);for(;e.registrationStatus===1;)await Kh(100),e=await Hc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await fa(t);return s||n}return e}function Hc(t){return li(t,e=>{if(!e)throw an.create("installation-not-found");return Xh(e)})}function Xh(t){return dv(t)?{fid:t.fid,registrationStatus:0}:t}function dv(t){return t.registrationStatus===1&&t.registrationTime+Uh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv({appConfig:t,heartbeatServiceProvider:e},n){const s=pv(t,n),r=Q_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Fh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Hh(()=>fetch(s,a));if(c.ok){const l=await c.json();return jh(l)}else throw await qh("Generate Auth Token",c)}function pv(t,{fid:e}){return`${Bh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t,e=!1){let n;const s=await li(t.appConfig,i=>{if(!Jh(i))throw an.create("not-registered");const o=i.authToken;if(!e&&yv(o))return i;if(o.requestStatus===1)return n=gv(t,e),i;{if(!navigator.onLine)throw an.create("app-offline");const a=vv(i);return n=mv(t,a),a}});return n?await n:s.authToken}async function gv(t,e){let n=await Kc(t.appConfig);for(;n.authToken.requestStatus===1;)await Kh(100),n=await Kc(t.appConfig);const s=n.authToken;return s.requestStatus===0?pa(t,e):s}function Kc(t){return li(t,e=>{if(!Jh(e))throw an.create("not-registered");const n=e.authToken;return wv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mv(t,e){try{const n=await fv(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Lr(t.appConfig,s),n}catch(n){if(Vh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lr(t.appConfig,s)}throw n}}function Jh(t){return t!==void 0&&t.registrationStatus===2}function yv(t){return t.requestStatus===2&&!_v(t)}function _v(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+H_}function vv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wv(t){return t.requestStatus===1&&t.requestTime+Uh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t){const e=t,{installationEntry:n,registrationPromise:s}=await fa(e);return s?s.catch(console.error):pa(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e=!1){const n=t;return await Tv(n),(await pa(n,e)).token}async function Tv(t){const{registrationPromise:e}=await fa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){if(!t||!t.options)throw Ji("App Configuration");if(!t.name)throw Ji("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ji(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ji(t){return an.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="installations",kv="installations-internal",Sv=t=>{const e=t.getProvider("app").getImmediate(),n=Ev(e),s=dn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Av=t=>{const e=t.getProvider("app").getImmediate(),n=dn(e,Zh).getImmediate();return{getId:()=>bv(n),getToken:r=>Iv(n,r)}};function Cv(){ft(new tt(Zh,Sv,"PUBLIC")),ft(new tt(kv,Av,"PRIVATE"))}Cv();Qe(Mh,ha);Qe(Mh,ha,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="analytics",Dv="firebase_id",Rv="origin",Nv=60*1e3,Ov="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ed="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new ri("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $v(t,e){const n=document.createElement("script");n.src=`${ed}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Pv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Lv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await td(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ke.error(a)}t("config",r,i)}async function Mv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await td(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ke.error(i)}}function Uv(t,e,n,s){async function r(i,o,a){try{i==="event"?await Mv(t,e,n,o,a):i==="config"?await Lv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ke.error(c)}}return r}function Fv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Uv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function xv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ed)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ye=new hn("analytics","Analytics",Vv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=30,jv=1e3;class qv{constructor(e={},n=jv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nd=new qv;function zv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Hv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:zv(s)},i=Ov.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Kv(t,e=nd,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ye.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Qv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Nv),sd({appId:s,apiKey:r,measurementId:i},o,a,e)}async function sd(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=nd){var i;const{appId:o,measurementId:a}=t;try{await Gv(s,e)}catch(c){if(a)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Hv(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Wv(l)){if(r.deleteThrottleMetadata(o),a)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?wc(n,r.intervalMillis,Bv):wc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),Ke.debug(`Calling attemptFetch again in ${u} millis`),sd(t,h,s,r)}}function Gv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Wv(t){if(!(t instanceof rt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Yv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(){if(Yu())try{await Xu()}catch(t){return Ke.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ke.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Jv(t,e,n,s,r,i,o){var a;const c=Kv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ke.error(p)),e.push(c);const l=Xv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);xv(i)||$v(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Rv]="firebase",d.update=!0,h!=null&&(d[Dv]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.app=e}_delete(){return delete is[this.app.options.appId],Promise.resolve()}}let is={},Gc=[];const Wc={};let Zi="dataLayer",ew="gtag",Qc,rd,Yc=!1;function tw(){const t=[];if(Qu()&&t.push("This is a browser extension environment."),Eg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});Ke.warn(n.message)}}function nw(t,e,n){tw();const s=t.options.appId;if(!s)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(is[s]!=null)throw Ye.create("already-exists",{id:s});if(!Yc){Pv(Zi);const{wrappedGtag:i,gtagCore:o}=Fv(is,Gc,Wc,Zi,ew);rd=i,Qc=o,Yc=!0}return is[s]=Jv(t,Gc,Wc,e,Qc,Zi,n),new Zv(t)}function sw(t=ea()){t=Ae(t);const e=dn(t,Mr);return e.isInitialized()?e.getImmediate():rw(t)}function rw(t,e={}){const n=dn(t,Mr);if(n.isInitialized()){const r=n.getImmediate();if(fs(e,n.getOptions()))return r;throw Ye.create("already-initialized")}return n.initialize({options:e})}function iw(t,e,n,s){t=Ae(t),Yv(rd,is[t.app.options.appId],e,n,s).catch(r=>Ke.error(r))}const Xc="@firebase/analytics",Jc="0.9.4";function ow(){ft(new tt(Mr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return nw(s,r,n)},"PUBLIC")),ft(new tt("analytics-internal",t,"PRIVATE")),Qe(Xc,Jc),Qe(Xc,Jc,"esm2017");function t(e){try{const n=e.getProvider(Mr).getImmediate();return{logEvent:(s,r,i)=>iw(n,s,r,i)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}ow();var aw="firebase",cw="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(aw,cw,"app");var lw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,ga=ga||{},K=lw||self;function Ur(){}function ui(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uw(t){return Object.prototype.hasOwnProperty.call(t,eo)&&t[eo]||(t[eo]=++hw)}var eo="closure_uid_"+(1e9*Math.random()>>>0),hw=0;function dw(t,e,n){return t.call.apply(t.bind,arguments)}function fw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=dw:Ve=fw,Ve.apply(null,arguments)}function cr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function jt(){this.s=this.s,this.o=this.o}var pw=0;jt.prototype.s=!1;jt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),pw!=0)&&uw(this)};jt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const id=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ma(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ui(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var gw=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ur,e),K.removeEventListener("test",Ur,e)}catch{}return t}();function Fr(t){return/^[\s\xa0]*$/.test(t)}var el=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function to(t,e){return t<e?-1:t>e?1:0}function hi(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function at(t){return hi().indexOf(t)!=-1}function ya(t){return ya[" "](t),t}ya[" "]=Ur;function mw(t){var e=vw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yw=at("Opera"),Nn=at("Trident")||at("MSIE"),od=at("Edge"),ko=od||Nn,ad=at("Gecko")&&!(hi().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),_w=hi().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function cd(){var t=K.document;return t?t.documentMode:void 0}var xr;e:{var no="",so=function(){var t=hi();if(ad)return/rv:([^\);]+)(\)|;)/.exec(t);if(od)return/Edge\/([\d\.]+)/.exec(t);if(Nn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_w)return/WebKit\/(\S+)/.exec(t);if(yw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(so&&(no=so?so[1]:""),Nn){var ro=cd();if(ro!=null&&ro>parseFloat(no)){xr=String(ro);break e}}xr=no}var vw={};function ww(){return mw(function(){let t=0;const e=el(String(xr)).split("."),n=el("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=to(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||to(r[2].length==0,i[2].length==0)||to(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var So;if(K.document&&Nn){var tl=cd();So=tl||parseInt(xr,10)||void 0}else So=void 0;var bw=So;function _s(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ad){e:{try{ya(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Iw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_s.X.h.call(this)}}$e(_s,Be);var Iw={2:"touch",3:"pen",4:"mouse"};_s.prototype.h=function(){_s.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),Tw=0;function Ew(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Tw,this.ba=this.ea=!1}function di(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function _a(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ld(t){const e={};for(const n in t)e[n]=t[n];return e}const nl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ud(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<nl.length;i++)n=nl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function fi(t){this.src=t,this.g={},this.h=0}fi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Co(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ew(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ao(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=id(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(di(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Co(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var va="closure_lm_"+(1e6*Math.random()|0),io={};function hd(t,e,n,s,r){if(s&&s.once)return fd(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)hd(t,e[i],n,s,r);return null}return n=Ia(n),t&&t[js]?t.N(e,n,Bs(s)?!!s.capture:!!s,r):dd(t,e,n,!1,s,r)}function dd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Bs(r)?!!r.capture:!!r,a=ba(t);if(a||(t[va]=a=new fi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=kw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)gw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(gd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kw(){function t(n){return e.call(t.src,t.listener,n)}const e=Sw;return t}function fd(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)fd(t,e[i],n,s,r);return null}return n=Ia(n),t&&t[js]?t.O(e,n,Bs(s)?!!s.capture:!!s,r):dd(t,e,n,!0,s,r)}function pd(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)pd(t,e[i],n,s,r);else s=Bs(s)?!!s.capture:!!s,n=Ia(n),t&&t[js]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Co(i,n,s,r),-1<n&&(di(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ba(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Co(e,n,s,r)),(n=-1<t?e[t]:null)&&wa(n))}function wa(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[js])Ao(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(gd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ba(e))?(Ao(n,t),n.h==0&&(n.src=null,e[va]=null)):di(t)}}}function gd(t){return t in io?io[t]:io[t]="on"+t}function Sw(t,e){if(t.ba)t=!0;else{e=new _s(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wa(t),t=n.call(s,e)}return t}function ba(t){return t=t[va],t instanceof fi?t:null}var oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ia(t){return typeof t=="function"?t:(t[oo]||(t[oo]=function(e){return t.handleEvent(e)}),t[oo])}function Re(){jt.call(this),this.i=new fi(this),this.P=this,this.I=null}$e(Re,jt);Re.prototype[js]=!0;Re.prototype.removeEventListener=function(t,e,n,s){pd(this,t,e,n,s)};function Oe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var r=e;e=new Be(s,t),ud(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=lr(o,s,!0,e)&&r}if(o=e.g=t,r=lr(o,s,!0,e)&&r,r=lr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=lr(o,s,!1,e)&&r}Re.prototype.M=function(){if(Re.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)di(n[s]);delete t.g[e],t.h--}}this.I=null};Re.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Re.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function lr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ao(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ta=K.JSON.stringify;function Aw(){var t=_d;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Cw{constructor(){this.h=this.g=null}add(e,n){const s=md.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var md=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dw,t=>t.reset());class Dw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Rw(t){K.setTimeout(()=>{throw t},0)}function yd(t,e){Do||Nw(),Ro||(Do(),Ro=!0),_d.add(t,e)}var Do;function Nw(){var t=K.Promise.resolve(void 0);Do=function(){t.then(Ow)}}var Ro=!1,_d=new Cw;function Ow(){for(var t;t=Aw();){try{t.h.call(t.g)}catch(n){Rw(n)}var e=md;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ro=!1}function pi(t,e){Re.call(this),this.h=t||1,this.g=e||K,this.j=Ve(this.lb,this),this.l=Date.now()}$e(pi,Re);F=pi.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Oe(this,"tick"),this.ca&&(Ea(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ea(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){pi.X.M.call(this),Ea(this),delete this.g};function ka(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function vd(t){t.g=ka(()=>{t.g=null,t.i&&(t.i=!1,vd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $w extends jt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vd(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){jt.call(this),this.h=t,this.g={}}$e(vs,jt);var sl=[];function wd(t,e,n,s){Array.isArray(n)||(n&&(sl[0]=n.toString()),n=sl);for(var r=0;r<n.length;r++){var i=hd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bd(t){_a(t.g,function(e,n){this.g.hasOwnProperty(n)&&wa(e)},t),t.g={}}vs.prototype.M=function(){vs.X.M.call(this),bd(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gi(){this.g=!0}gi.prototype.Aa=function(){this.g=!1};function Pw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Lw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function kn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Uw(t,n)+(s?" "+s:"")})}function Mw(t,e){t.info(function(){return"TIMEOUT: "+e})}gi.prototype.info=function(){};function Uw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ta(n)}catch{return e}}var fn={},rl=null;function mi(){return rl=rl||new Re}fn.Pa="serverreachability";function Id(t){Be.call(this,fn.Pa,t)}$e(Id,Be);function ws(t){const e=mi();Oe(e,new Id(e))}fn.STAT_EVENT="statevent";function Td(t,e){Be.call(this,fn.STAT_EVENT,t),this.stat=e}$e(Td,Be);function ze(t){const e=mi();Oe(e,new Td(e,t))}fn.Qa="timingevent";function Ed(t,e){Be.call(this,fn.Qa,t),this.size=e}$e(Ed,Be);function qs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var yi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},kd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sa(){}Sa.prototype.h=null;function il(t){return t.h||(t.h=t.i())}function Sd(){}var zs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Aa(){Be.call(this,"d")}$e(Aa,Be);function Ca(){Be.call(this,"c")}$e(Ca,Be);var No;function _i(){}$e(_i,Sa);_i.prototype.g=function(){return new XMLHttpRequest};_i.prototype.i=function(){return{}};No=new _i;function Hs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new vs(this),this.O=Fw,t=ko?125:void 0,this.T=new pi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var Fw=45e3,Oo={},Vr={};F=Hs.prototype;F.setTimeout=function(t){this.O=t};function $o(t,e,n){t.K=1,t.v=wi(kt(e)),t.s=n,t.P=!0,Cd(t,null)}function Cd(t,e){t.F=Date.now(),Ks(t),t.A=kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Md(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ad,t.g=sf(t.l,n?e:null,!t.s),0<t.N&&(t.L=new $w(Ve(t.La,t,t.g),t.N)),wd(t.S,t.g,"readystatechange",t.ib),e=t.H?ld(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ws(),Pw(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&vt(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=vt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ko||this.g&&(this.h.h||this.g.fa()||ll(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ws(3):ws(2)),vi(this);var n=this.g.aa();this.Y=n;t:if(Dd(this)){var s=ll(this.g);t="";var r=s.length,i=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),os(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Lw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fr(a)){var l=a;break t}}l=null}if(n=l)kn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Po(this,n);else{this.i=!1,this.o=3,ze(12),Qt(this),os(this);break e}}this.P?(Rd(this,u,o),ko&&this.i&&u==3&&(wd(this.S,this.T,"tick",this.hb),this.T.start())):(kn(this.j,this.m,o,null),Po(this,o)),u==4&&Qt(this),this.i&&!this.I&&(u==4?Zd(this.l,this):(this.i=!1,Ks(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),Qt(this),os(this)}}}catch{}finally{}};function Dd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Rd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=xw(t,n),r==Vr){e==4&&(t.o=4,ze(14),s=!1),kn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Oo){t.o=4,ze(15),kn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else kn(t.j,t.m,r,null),Po(t,r);Dd(t)&&r!=Vr&&r!=Oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),La(e),e.K=!0,ze(11))):(kn(t.j,t.m,n,"[Invalid Chunked Response]"),Qt(t),os(t))}F.hb=function(){if(this.g){var t=vt(this.g),e=this.g.fa();this.C<e.length&&(vi(this),Rd(this,t,e),this.i&&t!=4&&Ks(this))}};function xw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Vr:(n=Number(e.substring(n,s)),isNaN(n)?Oo:(s+=1,s+n>e.length?Vr:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,Qt(this)};function Ks(t){t.V=Date.now()+t.O,Nd(t,t.O)}function Nd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qs(Ve(t.gb,t),e)}function vi(t){t.B&&(K.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Mw(this.j,this.A),this.K!=2&&(ws(),ze(17)),Qt(this),this.o=2,os(this)):Nd(this,this.V-t)};function os(t){t.l.G==0||t.I||Zd(t.l,t)}function Qt(t){vi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ea(t.T),bd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Po(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Lo(n.h,t))){if(!t.J&&Lo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)qr(n),Ti(n);else break e;Pa(n),ze(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=qs(Ve(n.cb,n),6e3));if(1>=xd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Yt(n,11)}else if((t.J||n.g==t)&&qr(n),!Fr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Da(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,ye(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=nf(s,s.H?s.ka:null,s.V),o.J){Vd(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(vi(a),Ks(a)),s.g=o}else Xd(s);0<n.i.length&&Ei(n)}else l[0]!="stop"&&l[0]!="close"||Yt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Yt(n,7):$a(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ws(4)}catch{}}function Vw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ui(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Bw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ui(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Od(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ui(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Bw(t),s=Vw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var $d=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Zt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zt){this.h=e!==void 0?e:t.h,Br(this,t.j),this.s=t.s,this.g=t.g,jr(this,t.m),this.l=t.l,e=t.i;var n=new bs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ol(this,n),this.o=t.o}else t&&(n=String(t).match($d))?(this.h=!!e,Br(this,n[1]||"",!0),this.s=Zn(n[2]||""),this.g=Zn(n[3]||"",!0),jr(this,n[4]),this.l=Zn(n[5]||"",!0),ol(this,n[6]||"",!0),this.o=Zn(n[7]||"")):(this.h=!!e,this.i=new bs(null,this.h))}Zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(es(e,al,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(es(e,al,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(es(n,n.charAt(0)=="/"?Hw:zw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",es(n,Gw)),t.join("")};function kt(t){return new Zt(t)}function Br(t,e,n){t.j=n?Zn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ol(t,e,n){e instanceof bs?(t.i=e,Ww(t.i,t.h)):(n||(e=es(e,Kw)),t.i=new bs(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function wi(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var al=/[#\/\?@]/g,zw=/[#\?:]/g,Hw=/[#\?]/g,Kw=/[#\?@]/g,Gw=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qt(t){t.g||(t.g=new Map,t.h=0,t.i&&jw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=bs.prototype;F.add=function(t,e){qt(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pd(t,e){qt(t),e=jn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ld(t,e){return qt(t),e=jn(t,e),t.g.has(e)}F.forEach=function(t,e){qt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){qt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){qt(this);let e=[];if(typeof t=="string")Ld(this,t)&&(e=e.concat(this.g.get(jn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return qt(this),this.i=null,t=jn(this,t),Ld(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Md(t,e,n){Pd(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),ma(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ww(t,e){e&&!t.j&&(qt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Pd(this,s),Md(this,r,n))},t)),t.j=e}var Qw=class{constructor(e,n){this.h=e,this.g=n}};function Ud(t){this.l=t||Yw,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yw=10;function Fd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xd(t){return t.h?1:t.g?t.g.size:0}function Lo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Da(t,e){t.g?t.g.add(e):t.h=e}function Vd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ud.prototype.cancel=function(){if(this.i=Bd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ma(t.i)}function Ra(){}Ra.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Ra.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function Xw(){this.g=new Ra}function Jw(t,e,n){const s=n||"";try{Od(t,function(r,i){let o=r;Bs(r)&&(o=Ta(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Zw(t,e){const n=new gi;if(K.Image){const s=new Image;s.onload=cr(ur,n,s,"TestLoadImage: loaded",!0,e),s.onerror=cr(ur,n,s,"TestLoadImage: error",!1,e),s.onabort=cr(ur,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=cr(ur,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ur(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Gs(t){this.l=t.ac||null,this.j=t.jb||!1}$e(Gs,Sa);Gs.prototype.g=function(){return new bi(this.l,this.j)};Gs.prototype.i=function(t){return function(){return t}}({});function bi(t,e){Re.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Na,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(bi,Re);var Na=0;F=bi.prototype;F.open=function(t,e){if(this.readyState!=Na)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Is(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=Na};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function jd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ws(this):Is(this),this.readyState==3&&jd(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,Ws(this))};F.Ua=function(t){this.g&&(this.response=t,Ws(this))};F.ga=function(){this.g&&Ws(this)};function Ws(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Is(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var e0=K.JSON.parse;function we(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qd,this.K=this.L=!1}$e(we,Re);var qd="",t0=/^https?$/i,n0=["POST","PUT"];F=we.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():No.g(),this.C=this.u?il(this.u):il(No),this.g.onreadystatechange=Ve(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){cl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=id(n0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kd(this),0<this.B&&((this.K=s0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.qa,this)):this.A=ka(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){cl(this,i)}};function s0(t){return Nn&&ww()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof ga<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function cl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zd(t),Ii(t)}function zd(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Ii(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ii(this,!0)),we.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?Hd(this):this.fb())};F.fb=function(){Hd(this)};function Hd(t){if(t.h&&typeof ga<"u"&&(!t.C[1]||vt(t)!=4||t.aa()!=2)){if(t.v&&vt(t)==4)ka(t.Ha,0,t);else if(Oe(t,"readystatechange"),vt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match($d)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!t0.test(r?r.toLowerCase():"")}n=s}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<vt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",zd(t)}}finally{Ii(t)}}}}function Ii(t,e){if(t.g){Kd(t);const n=t.g,s=t.C[0]?Ur:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Kd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function vt(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),e0(e)}};function ll(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gd(t){let e="";return _a(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Oa(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Gd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wd(t){this.Ca=0,this.i=[],this.j=new gi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qn("baseRetryDelayMs",5e3,t),this.bb=Qn("retryDelaySeedMs",1e4,t),this.$a=Qn("forwardChannelMaxRetries",2,t),this.ta=Qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ud(t&&t.concurrentRequestLimit),this.Fa=new Xw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Wd.prototype;F.ma=8;F.G=1;function $a(t){if(Qd(t),t.G==3){var e=t.U++,n=kt(t.F);ye(n,"SID",t.I),ye(n,"RID",e),ye(n,"TYPE","terminate"),Qs(t,n),e=new Hs(t,t.j,e,void 0),e.K=2,e.v=wi(kt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=sf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ks(e)}tf(t)}function Ti(t){t.g&&(La(t),t.g.cancel(),t.g=null)}function Qd(t){Ti(t),t.u&&(K.clearTimeout(t.u),t.u=null),qr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ei(t){Fd(t.h)||t.m||(t.m=!0,yd(t.Ja,t),t.C=0)}function r0(t,e){return xd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qs(Ve(t.Ja,t,e),ef(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Hs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ld(i),ud(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yd(this,r,e),n=kt(this.F),ye(n,"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),Qs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Gd(i)))+"&"+e:this.o&&Oa(n,this.o,i)),Da(this.h,r),this.Ya&&ye(n,"TYPE","init"),this.O?(ye(n,"$req",e),ye(n,"SID","null"),r.Z=!0,$o(r,n,null)):$o(r,n,e),this.G=2}}else this.G==3&&(t?ul(this,t):this.i.length==0||Fd(this.h)||ul(this))};function ul(t,e){var n;e?n=e.m:n=t.U++;const s=kt(t.F);ye(s,"SID",t.I),ye(s,"RID",n),ye(s,"AID",t.T),Qs(t,s),t.o&&t.s&&Oa(s,t.o,t.s),n=new Hs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Da(t.h,n),$o(n,s,e)}function Qs(t,e){t.ia&&_a(t.ia,function(n,s){ye(e,s,n)}),t.l&&Od({},function(n,s){ye(e,s,n)})}function Yd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ve(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Jw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Xd(t){t.g||t.u||(t.Z=1,yd(t.Ia,t),t.A=0)}function Pa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qs(Ve(t.Ia,t),ef(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Jd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qs(Ve(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),Ti(this),Jd(this))};function La(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Jd(t){t.g=new Hs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=kt(t.sa);ye(e,"RID","rpc"),ye(e,"SID",t.I),ye(e,"CI",t.L?"0":"1"),ye(e,"AID",t.T),ye(e,"TYPE","xmlhttp"),Qs(t,e),t.o&&t.s&&Oa(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=wi(kt(e)),n.s=null,n.P=!0,Cd(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Ti(this),Pa(this),ze(19))};function qr(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Zd(t,e){var n=null;if(t.g==e){qr(t),La(t),t.g=null;var s=2}else if(Lo(t.h,e))n=e.D,Vd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=mi(),Oe(s,new Ed(s,n)),Ei(t)}else Xd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&r0(t,e)||s==2&&Pa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Yt(t,5);break;case 4:Yt(t,10);break;case 3:Yt(t,6);break;default:Yt(t,2)}}}function ef(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Yt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ve(t.kb,t);n||(n=new Zt("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Br(n,"https"),wi(n)),Zw(n.toString(),s)}else ze(2);t.G=0,t.l&&t.l.va(e),tf(t),Qd(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function tf(t){if(t.G=0,t.la=[],t.l){const e=Bd(t.h);(e.length!=0||t.i.length!=0)&&(Zc(t.la,e),Zc(t.la,t.i),t.h.i.length=0,ma(t.i),t.i.length=0),t.l.ua()}}function nf(t,e,n){var s=n instanceof Zt?kt(n):new Zt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),jr(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Zt(null,void 0);s&&Br(i,s),e&&(i.g=e),r&&jr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ye(s,n,e),ye(s,"VER",t.ma),Qs(t,s),s}function sf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new Gs({jb:!0})):new we(t.ra),e.Ka(t.H),e}function rf(){}F=rf.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function zr(){if(Nn&&!(10<=Number(bw)))throw Error("Environmental error: no available transport.")}zr.prototype.g=function(t,e){return new Ge(t,e)};function Ge(t,e){Re.call(this),this.g=new Wd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Fr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}$e(Ge,Re);Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nf(t,null,t.V),Ei(t)};Ge.prototype.close=function(){$a(this.g)};Ge.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ta(t),t=n);e.i.push(new Qw(e.ab++,t)),e.G==3&&Ei(e)};Ge.prototype.M=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,Ge.X.M.call(this)};function of(t){Aa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(of,Aa);function af(){Ca.call(this),this.status=1}$e(af,Ca);function qn(t){this.g=t}$e(qn,rf);qn.prototype.xa=function(){Oe(this.g,"a")};qn.prototype.wa=function(t){Oe(this.g,new of(t))};qn.prototype.va=function(t){Oe(this.g,new af)};qn.prototype.ua=function(){Oe(this.g,"b")};zr.prototype.createWebChannel=zr.prototype.g;Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;yi.NO_ERROR=0;yi.TIMEOUT=8;yi.HTTP_ERROR=6;kd.COMPLETE="complete";Sd.EventType=zs;zs.OPEN="a";zs.CLOSE="b";zs.ERROR="c";zs.MESSAGE="d";Re.prototype.listen=Re.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var i0=function(){return new zr},o0=function(){return mi()},ao=yi,a0=kd,c0=fn,hl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},l0=Gs,hr=Sd,u0=we;const dl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let zn="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new ri("@firebase/firestore");function fl(){return ln.logLevel}function V(t,...e){if(ln.logLevel<=ce.DEBUG){const n=e.map(Ma);ln.debug(`Firestore (${zn}): ${t}`,...n)}}function St(t,...e){if(ln.logLevel<=ce.ERROR){const n=e.map(Ma);ln.error(`Firestore (${zn}): ${t}`,...n)}}function Mo(t,...e){if(ln.logLevel<=ce.WARN){const n=e.map(Ma);ln.warn(`Firestore (${zn}): ${t}`,...n)}}function Ma(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw St(e),new Error(e)}function de(t,e){t||H()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class d0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class f0{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new en;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new en,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new en)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(de(typeof s.accessToken=="string"),new cf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Le(e)}}class p0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(de(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class g0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new p0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class m0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.A=n.token,new m0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=_0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function On(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ke(0,0))}static max(){return new Y(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ts.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ts?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Ts{construct(e,n,s){return new pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const v0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Ts{construct(e,n,s){return new Fe(e,n,s)}static isValidIdentifier(e){return v0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(pe.fromString(e))}static fromName(e){return new j(pe.fromString(e).popFirst(5))}static empty(){return new j(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new pe(e.slice()))}}function w0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new ke(n+1,0):new ke(n,s));return new Ft(r,j.empty(),e)}function b0(t){return new Ft(t.readTime,t.key,-1)}class Ft{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ft(Y.min(),j.empty(),-1)}static max(){return new Ft(Y.max(),j.empty(),-1)}}function I0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==T0)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(r=>r?k.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new k((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new k((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ua.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){return t==null}function Hr(t){return t===0&&1/t==-1/0}function S0(t){return typeof t=="number"&&Number.isInteger(t)&&!Hr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class A0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new A0("Invalid base64 string: "+r):r}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const C0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(t){if(de(!!t),typeof t=="string"){let e=0;const n=C0.exec(t);if(de(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $n(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function ks(t){const e=xt(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:D0(t)?9007199254740991:10:H()}function pt(t,e){if(t===e)return!0;const n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ks(t).isEqual(ks(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xt(s.timestampValue),o=xt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return $n(s.bytesValue).isEqual($n(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?Hr(i)===Hr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return On(t.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(pl(i)!==pl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pt(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Ss(t,e){return(t.values||[]).find(n=>pt(n,e))!==void 0}function Pn(t,e){if(t===e)return 0;const n=un(t),s=un(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gl(t.timestampValue,e.timestampValue);case 4:return gl(ks(t),ks(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=$n(r),a=$n(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Te(r.latitude),Te(i.latitude));return o!==0?o:ue(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Pn(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===dr.mapValue&&i===dr.mapValue)return 0;if(r===dr.mapValue)return 1;if(i===dr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=Pn(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function gl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=xt(t),s=xt(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Ln(t){return Uo(t)}function Uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=xt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$n(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Uo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Uo(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function ml(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fo(t){return!!t&&"integerValue"in t}function Fa(t){return!!t&&"arrayValue"in t}function yl(t){return!!t&&"nullValue"in t}function _l(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function br(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function D0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kr{constructor(e,n){this.position=e,this.inclusive=n}}function vl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Pn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function wl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ff{}class Ee extends ff{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new N0(e,n,s):n==="array-contains"?new P0(e,s):n==="in"?new L0(e,s):n==="not-in"?new M0(e,s):n==="array-contains-any"?new U0(e,s):new Ee(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new O0(e,s):new $0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pn(n,this.value)):n!==null&&un(this.value)===un(n)&&this.matchesComparison(Pn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nt extends ff{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new nt(e,n)}matches(e){return pf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function pf(t){return t.op==="and"}function gf(t){return R0(t)&&pf(t)}function R0(t){for(const e of t.filters)if(e instanceof nt)return!1;return!0}function xo(t){if(t instanceof Ee)return t.field.canonicalString()+t.op.toString()+Ln(t.value);if(gf(t))return t.filters.map(e=>xo(e)).join(",");{const e=t.filters.map(n=>xo(n)).join(",");return`${t.op}(${e})`}}function mf(t,e){return t instanceof Ee?function(n,s){return s instanceof Ee&&n.op===s.op&&n.field.isEqual(s.field)&&pt(n.value,s.value)}(t,e):t instanceof nt?function(n,s){return s instanceof nt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&mf(i,s.filters[o]),!0):!1}(t,e):void H()}function yf(t){return t instanceof Ee?function(e){return`${e.field.canonicalString()} ${e.op} ${Ln(e.value)}`}(t):t instanceof nt?function(e){return e.op.toString()+" {"+e.getFilters().map(yf).join(" ,")+"}"}(t):"Filter"}class N0 extends Ee{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class O0 extends Ee{constructor(e,n){super(e,"in",n),this.keys=_f("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $0 extends Ee{constructor(e,n){super(e,"not-in",n),this.keys=_f("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _f(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class P0 extends Ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fa(n)&&Ss(n.arrayValue,this.value)}}class L0 extends Ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ss(this.value.arrayValue,n)}}class M0 extends Ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ss(this.value.arrayValue,n)}}class U0 extends Ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ss(this.value.arrayValue,s))}}/**
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
 */class cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function F0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fr(this.root,e,this.comparator,!1)}getReverseIterator(){return new fr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fr(this.root,e,this.comparator,!0)}}class fr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=r??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ne(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bl(this.data.getIterator())}getIteratorFrom(e){return new bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new et([])}unionWith(e){let n=new Se(Fe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return On(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!br(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Fe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());br(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];br(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Hn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new We(as(this.value))}}function vf(t){const e=[];return Hn(t.fields,(n,s)=>{const r=new Fe([n]);if(br(s)){const i=vf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,Y.min(),Y.min(),Y.min(),We.empty(),0)}static newFoundDocument(e,n,s,r){return new Me(e,1,n,Y.min(),s,r,0)}static newNoDocument(e,n){return new Me(e,2,n,Y.min(),Y.min(),We.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,Y.min(),Y.min(),We.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Il(t,e=null,n=[],s=[],r=null,i=null,o=null){return new x0(t,e,n,s,r,i,o)}function xa(t){const e=X(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>xo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ki(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ln(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ln(s)).join(",")),e._t=n}return e._t}function Va(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!F0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wl(t.startAt,e.startAt)&&wl(t.endAt,e.endAt)}function Vo(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function V0(t,e,n,s,r,i,o,a){return new Js(t,e,n,s,r,i,o,a)}function Ba(t){return new Js(t)}function Tl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ja(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function bf(t){return t.collectionGroup!==null}function Dn(t){const e=X(t);if(e.wt===null){e.wt=[];const n=ja(e),s=wf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new cs(n)),e.wt.push(new cs(Fe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new cs(Fe.keyField(),i))}}}return e.wt}function At(t){const e=X(t);if(!e.gt)if(e.limitType==="F")e.gt=Il(e.path,e.collectionGroup,Dn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Dn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new cs(i.field,o))}const s=e.endAt?new Kr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Kr(e.startAt.position,e.startAt.inclusive):null;e.gt=Il(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Bo(t,e){e.getFirstInequalityField(),ja(t);const n=t.filters.concat([e]);return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jo(t,e,n){return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Si(t,e){return Va(At(t),At(e))&&t.limitType===e.limitType}function If(t){return`${xa(At(t))}|lt:${t.limitType}`}function qo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>yf(s)).join(", ")}]`),ki(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ln(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ln(s)).join(",")),`Target(${n})`}(At(t))}; limitType=${t.limitType})`}function Ai(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Dn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=vl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Dn(n),s)||n.endAt&&!function(r,i,o){const a=vl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Dn(n),s))}(t,e)}function B0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tf(t){return(e,n)=>{let s=!1;for(const r of Dn(t)){const i=j0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function j0(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Pn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(e)?"-0":e}}function kf(t){return{integerValue:""+t}}function q0(t,e){return S0(e)?kf(e):Ef(t,e)}/**
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
 */class Ci{constructor(){this._=void 0}}function z0(t,e,n){return t instanceof Gr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof As?Af(t,e):t instanceof Cs?Cf(t,e):function(s,r){const i=Sf(s,r),o=El(i)+El(s.It);return Fo(i)&&Fo(s.It)?kf(o):Ef(s.Tt,o)}(t,e)}function H0(t,e,n){return t instanceof As?Af(t,e):t instanceof Cs?Cf(t,e):n}function Sf(t,e){return t instanceof Wr?Fo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Gr extends Ci{}class As extends Ci{constructor(e){super(),this.elements=e}}function Af(t,e){const n=Df(e);for(const s of t.elements)n.some(r=>pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Cs extends Ci{constructor(e){super(),this.elements=e}}function Cf(t,e){let n=Df(e);for(const s of t.elements)n=n.filter(r=>!pt(r,s));return{arrayValue:{values:n}}}class Wr extends Ci{constructor(e,n){super(),this.Tt=e,this.It=n}}function El(t){return Te(t.integerValue||t.doubleValue)}function Df(t){return Fa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function K0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof As&&s instanceof As||n instanceof Cs&&s instanceof Cs?On(n.elements,s.elements,pt):n instanceof Wr&&s instanceof Wr?pt(n.It,s.It):n instanceof Gr&&s instanceof Gr}(t.transform,e.transform)}class G0{constructor(e,n){this.version=e,this.transformResults=n}}class ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ir(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Di{}function Rf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qa(t.key,ht.none()):new Zs(t.key,t.data,ht.none());{const n=t.data,s=We.empty();let r=new Se(Fe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new pn(t.key,s,new et(r.toArray()),ht.none())}}function W0(t,e,n){t instanceof Zs?function(s,r,i){const o=s.value.clone(),a=Sl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof pn?function(s,r,i){if(!Ir(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Sl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Nf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,s){return t instanceof Zs?function(r,i,o,a){if(!Ir(r.precondition,i))return o;const c=r.value.clone(),l=Al(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof pn?function(r,i,o,a){if(!Ir(r.precondition,i))return o;const c=Al(r.fieldTransforms,a,i),l=i.data;return l.setAll(Nf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ir(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Q0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Sf(s.transform,r||null);i!=null&&(n===null&&(n=We.empty()),n.set(s.field,i))}return n||null}function kl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&On(n,s,(r,i)=>K0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zs extends Di{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pn extends Di{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Sl(t,e,n){const s=new Map;de(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,H0(o,a,n[r]))}return s}function Al(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,z0(i,o,e))}return s}class qa extends Di{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Y0 extends Di{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,re;function J0(t){switch(t){default:return H();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Of(t){if(t===void 0)return St("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ie.OK:return E.OK;case Ie.CANCELLED:return E.CANCELLED;case Ie.UNKNOWN:return E.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return E.INTERNAL;case Ie.UNAVAILABLE:return E.UNAVAILABLE;case Ie.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ie.NOT_FOUND:return E.NOT_FOUND;case Ie.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ie.ABORTED:return E.ABORTED;case Ie.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ie.DATA_LOSS:return E.DATA_LOSS;default:return H()}}(re=Ie||(Ie={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return uf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Ce(j.comparator);function Ct(){return Z0}const $f=new Ce(j.comparator);function ts(...t){let e=$f;for(const n of t)e=e.insert(n.key,n);return e}function Pf(t){let e=$f;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Xt(){return us()}function Lf(){return us()}function us(){return new Kn(t=>t.toString(),(t,e)=>t.isEqual(e))}const eb=new Ce(j.comparator),tb=new Se(j.comparator);function se(...t){let e=tb;for(const n of t)e=e.add(n);return e}const nb=new Se(ue);function Mf(){return nb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,er.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ri(Y.min(),r,Mf(),Ct(),se())}}class er{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new er(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Uf{constructor(e,n){this.targetId=e,this.Rt=n}}class Ff{constructor(e,n,s=qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Cl{constructor(){this.Pt=0,this.vt=Rl(),this.bt=qe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=se(),n=se(),s=se();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new er(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Rl()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class sb{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Ct(),this.Kt=Dl(),this.Gt=new Se(ue)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Vo(i))if(s===0){const o=new j(i.path);this.zt(n,o,Me.newNoDocument(o,Y.min()))}else de(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Vo(a.target)){const c=new j(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Me.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=se();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ri(e,n,this.Gt,this.Ut,s);return this.Ut=Ct(),this.Kt=Dl(),this.Gt=new Se(ue),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new Cl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Se(ue),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Cl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Dl(){return new Ce(j.comparator)}function Rl(){return new Ce(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ib=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ob=(()=>({and:"AND",or:"OR"}))();class ab{constructor(e,n){this.databaseId=e,this.yt=n}}function Qr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function cb(t,e){return Qr(t,e.toTimestamp())}function dt(t){return de(!!t),Y.fromTimestamp(function(e){const n=xt(e);return new ke(n.seconds,n.nanos)}(t))}function za(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vf(t){const e=pe.fromString(t);return de(zf(e)),e}function zo(t,e){return za(t.databaseId,e.path)}function co(t,e){const n=Vf(e);if(n.get(1)!==t.databaseId.projectId)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Bf(n))}function Ho(t,e){return za(t.databaseId,e)}function lb(t){const e=Vf(t);return e.length===4?pe.emptyPath():Bf(e)}function Ko(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bf(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nl(t,e,n){return{name:zo(t,e),fields:n.value.mapValue.fields}}function ub(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(de(l===void 0||typeof l=="string"),qe.fromBase64String(l||"")):(de(l===void 0||l instanceof Uint8Array),qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Of(c.code);return new L(l,c.message||"")}(o);n=new Ff(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=co(t,s.document.name),i=dt(s.document.updateTime),o=s.document.createTime?dt(s.document.createTime):Y.min(),a=new We({mapValue:{fields:s.document.fields}}),c=Me.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Tr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=co(t,s.document),i=s.readTime?dt(s.readTime):Y.min(),o=Me.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Tr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=co(t,s.document),i=s.removedTargetIds||[];n=new Tr([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new X0(r),o=s.targetId;n=new Uf(o,i)}}return n}function hb(t,e){let n;if(e instanceof Zs)n={update:Nl(t,e.key,e.value)};else if(e instanceof qa)n={delete:zo(t,e.key)};else if(e instanceof pn)n={update:Nl(t,e.key,e.data),updateMask:wb(e.fieldMask)};else{if(!(e instanceof Y0))return H();n={verify:zo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Gr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof As)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Cs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function db(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?dt(s.updateTime):dt(r);return i.isEqual(Y.min())&&(i=dt(r)),new G0(i,s.transformResults||[])}(n,e))):[]}function fb(t,e){return{documents:[Ho(t,e.path)]}}function pb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ho(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ho(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return qf(nt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:bn(u.field),direction:yb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||ki(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function gb(t){let e=lb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){de(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=jf(u);return h instanceof nt&&gf(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new cs(In(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ki(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Kr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Kr(d,h)}(n.endAt)),V0(e,r,o,i,a,"F",c,l)}function mb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function jf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=In(e.unaryFilter.field);return Ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=In(e.unaryFilter.field);return Ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=In(e.unaryFilter.field);return Ee.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=In(e.unaryFilter.field);return Ee.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Ee.create(In(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nt.create(e.compositeFilter.filters.map(n=>jf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function yb(t){return rb[t]}function _b(t){return ib[t]}function vb(t){return ob[t]}function bn(t){return{fieldPath:t.canonicalString()}}function In(t){return Fe.fromServerFormat(t.fieldPath)}function qf(t){return t instanceof Ee?function(e){if(e.op==="=="){if(_l(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NAN"}};if(yl(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_l(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NAN"}};if(yl(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(e.field),op:_b(e.op),value:e.value}}}(t):t instanceof nt?function(e){const n=e.getFilters().map(s=>qf(s));return n.length===1?n[0]:{compositeFilter:{op:vb(e.op),filters:n}}}(t):H()}function wb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&W0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Lf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Rf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&On(this.mutations,e.mutations,(n,s)=>kl(n,s))&&On(this.baseMutations,e.baseMutations,(n,s)=>kl(n,s))}}class Ha{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){de(e.mutations.length===s.length);let r=eb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ha(e,n,s,r)}}/**
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
 */class Ib{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tn{constructor(e,n,s,r,i=Y.min(),o=Y.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.oe=e}}function Eb(t){const e=gb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.Ze=new Sb}addToCollectionParentIndex(e,n){return this.Ze.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Ft.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class Sb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Se(pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Se(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Mn(0)}static Sn(){return new Mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.changes=new Kn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ls(s.mutation,r,et.empty(),ke.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Xt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ts();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Xt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ct();const o=us(),a=us();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof pn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ls(u.mutation,l,u.mutation.getFieldMask(),ke.now())):o.set(l.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Cb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=us();let r=new Ce((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||et.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Lf();u.forEach(d=>{if(!i.has(d)){const p=Rf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):k.resolve(Xt());let a=-1,c=i;return o.next(l=>k.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:Pf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=ts();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ts();return this.indexManager.getCollectionParents(e,r).next(o=>k.forEach(o,a=>{const c=function(l,u){return new Js(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Me.newInvalidDocument(l)))});let o=ts();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ls(l.mutation,c,et.empty(),ke.now()),Ai(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return k.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:dt(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Eb(s.bundledQuery),readTime:dt(s.readTime)}}(n)),k.resolve()}}/**
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
 */class Nb{constructor(){this.overlays=new Ce(j.comparator),this.ss=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Xt();return k.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const r=Xt(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return k.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Xt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Xt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return k.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ib(n,s));let i=this.ss.get(n);i===void 0&&(i=se(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.rs=new Se(De.os),this.us=new Se(De.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new De(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new De(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new j(new pe([])),s=new De(n,e),r=new De(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new j(new pe([])),s=new De(n,e),r=new De(n,e+1);let i=se();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class De{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return j.comparator(e.key,n.key)||ue(e.gs,n.gs)}static cs(e,n){return ue(e.gs,n.gs)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Se(De.os)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new De(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new De(n,0),r=new De(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Se(ue);return n.forEach(r=>{const i=new De(r,0),o=new De(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),k.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new De(new j(i),0);let a=new Se(ue);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),k.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){de(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return k.forEach(n.mutations,r=>{const i=new De(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new De(n,0),r=this.ps.firstAfterOrEqual(s);return k.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.Rs=e,this.docs=new Ce(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let s=Ct();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Me.newInvalidDocument(r))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ct();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||I0(b0(u),s)<=0||(r.has(u.key)||Ai(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,s,r){H()}Ps(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Pb(this)}getSize(e){return k.resolve(this.size)}}class Pb extends Ab{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.persistence=e,this.vs=new Kn(n=>xa(n),Va),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Ka,this.targetCount=0,this.Ss=Mn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),k.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Mn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.xn(n),k.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ua(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Lb(this),this.indexManager=new kb,this.remoteDocumentCache=function(s){return new $b(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Tb(n),this.$s=new Rb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Ob(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new Ub(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return k.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Ub extends E0{constructor(e){super(),this.currentSequenceNumber=e}}class Ga{constructor(e){this.persistence=e,this.Bs=new Ka,this.Ls=null}static qs(e){return new Ga(e)}get Us(){if(this.Ls)return this.Ls;throw H()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),k.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Us,s=>{const r=j.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Y.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return k.or([()=>k.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wa(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(Tl(n))return k.resolve(null);let s=At(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=jo(n,null,"F"),s=At(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,jo(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return Tl(n)||r.isEqual(Y.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(fl()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qo(n)),this.qi(e,o,n,w0(r,-1)))})}Bi(e,n){let s=new Se(Tf(e));return n.forEach((r,i)=>{Ai(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return fl()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",qo(n)),this.$i.getDocumentsMatchingQuery(e,n,Ft.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Ce(ue),this.Gi=new Kn(i=>xa(i),Va),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Db(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Vb(t,e,n,s){return new xb(t,e,n,s)}async function Hf(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Bb(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=k.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(v=>{const g=c.docVersions.get(p);de(g!==null),v.version.compareTo(g)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Kf(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function jb(t,e){const n=X(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(v,g,y){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=Ct(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(qb(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(Y.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function qb(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ct();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function zb(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Hb(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new tn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Go(t,e,n){const s=X(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Xs(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Ol(t,e,n){const s=X(t);let r=Y.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=X(a),h=u.Gi.get(l);return h!==void 0?k.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,At(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Y.min(),n?i:se())).next(a=>(Kb(s,B0(e),a),{documents:a,Yi:i})))}function Kb(t,e,n){let s=t.Qi.get(e)||Y.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class $l{constructor(){this.activeTargetIds=Mf()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gb{constructor(){this.Ur=new $l,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new $l,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pr=null;function lo(){return pr===null?pr=268435456+Math.round(2147483648*Math.random()):pr++,"0x"+pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class Xb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=lo(),a=this.fo(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Mo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=Qb[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=lo();return new Promise((o,a)=>{const c=new u0;c.setWithCredentials(!0),c.listenOnce(a0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ao.NO_ERROR:const u=c.getResponseJson();V(Pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ao.TIMEOUT:V(Pe,`RPC '${e}' ${i} timed out`),a(new L(E.DEADLINE_EXCEEDED,"Request time out"));break;case ao.HTTP_ERROR:const h=c.getStatus();if(V(Pe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(p.status);a(new L(v,p.message))}else a(new L(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(E.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{V(Pe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(Pe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=lo(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i0(),a=o0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new l0({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Pe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new Yb({Yr:g=>{d?V(Pe,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(V(Pe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(Pe,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),v=(g,y,I)=>{g.listen(y,_=>{try{I(_)}catch(R){setTimeout(()=>{throw R},0)}})};return v(u,hr.EventType.OPEN,()=>{d||V(Pe,`RPC '${e}' stream ${r} transport opened.`)}),v(u,hr.EventType.CLOSE,()=>{d||(d=!0,V(Pe,`RPC '${e}' stream ${r} transport closed`),p.oo())}),v(u,hr.EventType.ERROR,g=>{d||(d=!0,Mo(Pe,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new L(E.UNAVAILABLE,"The operation could not be completed")))}),v(u,hr.EventType.MESSAGE,g=>{var y;if(!d){const I=g.data[0];de(!!I);const _=I,R=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(R){V(Pe,`RPC '${e}' stream ${r} received error:`,R);const O=R.status;let N=function(J){const fe=Ie[J];if(fe!==void 0)return Of(fe)}(O),D=R.message;N===void 0&&(N=E.INTERNAL,D="Unknown error status: "+O+" with message "+R.message),d=!0,p.oo(new L(N,D)),u.close()}else V(Pe,`RPC '${e}' stream ${r} received:`,I),p.uo(I)}}),v(a,c0.STAT_EVENT,g=>{g.stat===hl.PROXY?V(Pe,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===hl.NOPROXY&&V(Pe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function uo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){return new ab(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Gf(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new L(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jb extends Wf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=ub(this.Tt,e),s=function(r){if(!("targetChange"in r))return Y.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?dt(i.readTime):Y.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Ko(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Vo(a)?{documents:fb(r,a)}:{query:pb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=xf(r,i.resumeToken):i.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=Qr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=mb(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Ko(this.Tt),n.removeTarget=e,this.qo(n)}}class Zb extends Wf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=db(e.writeResults,e.commitTime),s=dt(e.commitTime);return this.listener.eu(s,n)}return de(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Ko(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>hb(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(E.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(E.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class tI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(St(n),this.cu=!1):V("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{gn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c.mu.add(4),await tr(c),c.pu.set("Unknown"),c.mu.delete(4),await Oi(c)}(this))})}),this.pu=new tI(s,r)}}async function Oi(t){if(gn(t))for(const e of t.gu)await e(!0)}async function tr(t){for(const e of t.gu)await e(!1)}function Qf(t,e){const n=X(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Xa(n)?Ya(n):Gn(n).Mo()&&Qa(n,e))}function Yf(t,e){const n=X(t),s=Gn(n);n.wu.delete(e),s.Mo()&&Xf(n,e),n.wu.size===0&&(s.Mo()?s.Bo():gn(n)&&n.pu.set("Unknown"))}function Qa(t,e){t.Iu.Ot(e.targetId),Gn(t).Jo(e)}function Xf(t,e){t.Iu.Ot(e),Gn(t).Yo(e)}function Ya(t){t.Iu=new sb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Gn(t).start(),t.pu.au()}function Xa(t){return gn(t)&&!Gn(t).$o()&&t.wu.size>0}function gn(t){return X(t).mu.size===0}function Jf(t){t.Iu=void 0}async function sI(t){t.wu.forEach((e,n)=>{Qa(t,e)})}async function rI(t,e){Jf(t),Xa(t)?(t.pu.fu(e),Ya(t)):t.pu.set("Unknown")}async function iI(t,e,n){if(t.pu.set("Online"),e instanceof Ff&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yr(t,s)}else if(e instanceof Tr?t.Iu.Qt(e):e instanceof Uf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Y.min()))try{const s=await Kf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Xf(r,a);const l=new tn(c.target,a,1,c.sequenceNumber);Qa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Yr(t,s)}}async function Yr(t,e,n){if(!Xs(e))throw e;t.mu.add(1),await tr(t),t.pu.set("Offline"),n||(n=()=>Kf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Oi(t)})}function Zf(t,e){return e().catch(n=>Yr(t,n,e))}async function $i(t){const e=X(t),n=Vt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;oI(e);)try{const r=await zb(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,aI(e,r)}catch(r){await Yr(e,r)}ep(e)&&tp(e)}function oI(t){return gn(t)&&t._u.length<10}function aI(t,e){t._u.push(e);const n=Vt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function ep(t){return gn(t)&&!Vt(t).$o()&&t._u.length>0}function tp(t){Vt(t).start()}async function cI(t){Vt(t).su()}async function lI(t){const e=Vt(t);for(const n of t._u)e.tu(n.mutations)}async function uI(t,e,n){const s=t._u.shift(),r=Ha.from(s,e,n);await Zf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $i(t)}async function hI(t,e){e&&Vt(t).Xo&&await async function(n,s){if(r=s.code,J0(r)&&r!==E.ABORTED){const i=n._u.shift();Vt(n).Fo(),await Zf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $i(n)}var r}(t,e),ep(t)&&tp(t)}async function Ll(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=gn(n);n.mu.add(3),await tr(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Oi(n)}async function dI(t,e){const n=X(t);e?(n.mu.delete(2),await Oi(n)):e||(n.mu.add(2),await tr(n),n.pu.set("Unknown"))}function Gn(t){return t.Tu||(t.Tu=function(e,n,s){const r=X(e);return r.ru(),new Jb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:sI.bind(null,t),no:rI.bind(null,t),Ho:iI.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Xa(t)?Ya(t):t.pu.set("Unknown")):(await t.Tu.stop(),Jf(t))})),t.Tu}function Vt(t){return t.Eu||(t.Eu=function(e,n,s){const r=X(e);return r.ru(),new Zb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:cI.bind(null,t),no:hI.bind(null,t),nu:lI.bind(null,t),eu:uI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await $i(t)):(await t.Eu.stop(),t._u.length>0&&(V("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ja(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Za(t,e){if(St("AsyncQueue",`${e}: ${t}`),Xs(t))return new L(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=ts(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.Au=new Ce(j.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):H():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Un{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Un(e,n,Rn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.Pu=void 0,this.listeners=[]}}class pI{constructor(){this.queries=new Kn(e=>If(e),Si),this.onlineState="Unknown",this.vu=new Set}}async function gI(t,e){const n=X(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new fI),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Za(o,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&ec(n)}async function mI(t,e){const n=X(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function yI(t,e){const n=X(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&ec(n)}function _I(t,e,n){const s=X(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ec(t){t.vu.forEach(e=>{e.next()})}class vI{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Un(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Un.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.key=e}}class sp{constructor(e){this.key=e}}class wI{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=se(),this.mutatedKeys=se(),this.ju=Tf(e),this.zu=new Rn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Ml,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Ai(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?v!==g&&(s.track({type:3,doc:p}),y=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),y=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),y=!0):d&&!p&&(s.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Un(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Ml,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=se(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new sp(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new np(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=se();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Un.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class bI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class II{constructor(e){this.key=e,this.ic=!1}}class TI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Kn(a=>If(a),Si),this.uc=new Map,this.cc=new Set,this.ac=new Ce(j.comparator),this.hc=new Map,this.lc=new Ka,this.fc={},this.dc=new Map,this._c=Mn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function EI(t,e){const n=PI(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Hb(n.localStore,At(e));n.isPrimaryClient&&Qf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await kI(n,e,s,a==="current",o.resumeToken)}return r}async function kI(t,e,n,s,r){t.mc=(h,d,p)=>async function(v,g,y,I){let _=g.view.Hu(y);_.Li&&(_=await Ol(v.localStore,g.query,!1).then(({documents:N})=>g.view.Hu(N,_)));const R=I&&I.targetChanges.get(g.targetId),O=g.view.applyChanges(_,v.isPrimaryClient,R);return Fl(v,g.targetId,O.tc),O.snapshot}(t,h,d,p);const i=await Ol(t.localStore,e,!0),o=new wI(e,i.Yi),a=o.Hu(i.documents),c=er.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Fl(t,n,l.tc);const u=new bI(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function SI(t,e){const n=X(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Si(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Go(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Yf(n.remoteStore,s.targetId),Wo(n,s.targetId)}).catch(Ys)):(Wo(n,s.targetId),await Go(n.localStore,s.targetId,!0))}async function AI(t,e,n){const s=LI(t);try{const r=await function(i,o){const a=X(i),c=ke.now(),l=o.reduce((d,p)=>d.add(p.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ct(),v=se();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((y,I)=>{I.isValidDocument()||(v=v.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const y=[];for(const I of o){const _=Q0(I,u.get(I.key).overlayedDocument);_!=null&&y.push(new pn(I.key,_,vf(_.value.mapValue),ht.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,y,o)}).next(g=>{h=g;const y=g.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,g.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Pf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Ce(ue)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await nr(s,r.changes),await $i(s.remoteStore)}catch(r){const i=Za(r,"Failed to persist write");n.reject(i)}}async function rp(t,e){const n=X(t);try{const s=await jb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(de(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?de(o.ic):r.removedDocuments.size>0&&(de(o.ic),o.ic=!1))}),await nr(n,s,e)}catch(s){await Ys(s)}}function Ul(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&ec(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function CI(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Ce(j.comparator);o=o.insert(i,Me.newNoDocument(i,Y.min()));const a=se().add(i),c=new Ri(Y.min(),new Map,new Se(ue),o,a);await rp(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),tc(s)}else await Go(s.localStore,e,!1).then(()=>Wo(s,e,n)).catch(Ys)}async function DI(t,e){const n=X(t),s=e.batch.batchId;try{const r=await Bb(n.localStore,e);op(n,s,null),ip(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nr(n,r)}catch(r){await Ys(r)}}async function RI(t,e,n){const s=X(t);try{const r=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(de(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);op(s,e,n),ip(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await nr(s,r)}catch(r){await Ys(r)}}function ip(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function op(t,e,n){const s=X(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Wo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||ap(t,s)})}function ap(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Yf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),tc(t))}function Fl(t,e,n){for(const s of n)s instanceof np?(t.lc.addReference(s.key,e),NI(t,s)):s instanceof sp?(V("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||ap(t,s.key)):H()}function NI(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.cc.add(s),tc(t))}function tc(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new j(pe.fromString(e)),s=t._c.next();t.hc.set(s,new II(n)),t.ac=t.ac.insert(n,s),Qf(t.remoteStore,new tn(At(Ba(n.path)),s,2,Ua.at))}}async function nr(t,e,n){const s=X(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Wa.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=X(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(c,h=>k.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>k.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Xs(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,v)}}}(s.localStore,i))}async function OI(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Hf(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new L(E.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nr(n,s.Wi)}}function $I(t,e){const n=X(t),s=n.hc.get(e);if(s&&s.ic)return se().add(s.key);{let r=se();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function PI(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$I.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CI.bind(null,e),e.rc.Ho=yI.bind(null,e.eventManager),e.rc.gc=_I.bind(null,e.eventManager),e}function LI(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RI.bind(null,e),e}class MI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ni(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Vb(this.persistence,new Fb,e.initialUser,this.Tt)}Tc(e){return new Mb(Ga.qs,this.Tt)}Ic(e){return new Gb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ul(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=OI.bind(null,this.syncEngine),await dI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pI}createDatastore(e){const n=Ni(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Xb(r));var r;return function(i,o,a,c){return new eI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ul(this.syncEngine,a,0),o=Pl.C()?new Pl:new Wb,new nI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new TI(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);V("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await tr(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=lf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Za(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function VI(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Hf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function BI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jI(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ll(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ll(e.remoteStore,i)),t.onlineComponents=e}async function jI(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await VI(t,new MI)),t.offlineComponents}async function cp(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await BI(t,new UI)),t.onlineComponents}function qI(t){return cp(t).then(e=>e.syncEngine)}async function xl(t){const e=await cp(t),n=e.eventManager;return n.onListen=EI.bind(null,e.syncEngine),n.onUnlisten=SI.bind(null,e.syncEngine),n}const Vl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t,e,n){if(!n)throw new L(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zI(t,e,n,s){if(e===!0&&s===!0)throw new L(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bl(t){if(!j.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jl(t){if(j.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pi(t);throw new L(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ql({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ql(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new h0;switch(n.type){case"gapi":const s=n.client;return new g0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vl.get(e);n&&(V("ComponentProvider","Removing Datastore"),Vl.delete(e),n.terminate())}(this),Promise.resolve()}}function HI(t,e,n,s={}){var r;const i=(t=nn(t,Li))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Le.MOCK_USER;else{o=wg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new L(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(c)}t._authCredentials=new d0(new cf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Wn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wn(this.firestore,e,this._query)}}class Ut extends Wn{constructor(e,n,s){super(e,n,Ba(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new j(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function KI(t,e,...n){if(t=Ae(t),lp("collection","path",e),t instanceof Li){const s=pe.fromString(e,...n);return jl(s),new Ut(t,null,s)}{if(!(t instanceof He||t instanceof Ut))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pe.fromString(e,...n));return jl(s),new Ut(t.firestore,null,s)}}function gr(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=lf.R()),lp("doc","path",e),t instanceof Li){const s=pe.fromString(e,...n);return Bl(s),new He(t,null,new j(s))}{if(!(t instanceof He||t instanceof Ut))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pe.fromString(e,...n));return Bl(s),new He(t.firestore,t instanceof Ut?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Gf(this,"async_queue_retry"),this.Hc=()=>{const n=uo();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=uo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=uo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new en;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Xs(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Ja.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&H()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function zl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ds extends Li{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new GI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hp(this),this._firestoreClient.terminate()}}function WI(t,e){const n=typeof t=="object"?t:ea(),s=typeof t=="string"?t:e||"(default)",r=dn(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=yg("firestore");i&&HI(r,...i)}return r}function up(t){return t._firestoreClient||hp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hp(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new k0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(qe.fromBase64String(e))}catch(n){throw new L(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fn(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=/^__.*__$/;class YI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new pn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zs(e,this.data,n,this.fieldTransforms)}}function fp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class rc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Xr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(fp(this.ra)&&QI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class XI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Ni(e)}wa(e,n,s,r=!1){return new rc({ra:e,methodName:n,_a:s,path:Fe.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function pp(t){const e=t._freezeSettings(),n=Ni(t._databaseId);return new XI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);yp("Data must be an object, but it was:",o,s);const a=gp(s,o);let c,l;if(i.merge)c=new et(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=eT(e,h,n);if(!o.contains(d))throw new L(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nT(u,d)||u.push(d)}c=new et(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new YI(new We(a),c,l)}function ZI(t,e,n,s=!1){return ic(n,t.wa(s?4:3,e))}function ic(t,e){if(mp(t=Ae(t)))return yp("Unsupported field value:",e,t),gp(t,e);if(t instanceof dp)return function(n,s){if(!fp(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ic(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return q0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ke.fromDate(n);return{timestampValue:Qr(s.Tt,r)}}if(n instanceof ke){const r=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qr(s.Tt,r)}}if(n instanceof sc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fn)return{bytesValue:xf(s.Tt,n._byteString)};if(n instanceof He){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:za(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Pi(n)}`)}(t,e)}function gp(t,e){const n={};return uf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(t,(s,r)=>{const i=ic(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function mp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof sc||t instanceof Fn||t instanceof He||t instanceof dp)}function yp(t,e,n){if(!mp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Pi(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function eT(t,e,n){if((e=Ae(e))instanceof nc)return e._internalPath;if(typeof e=="string")return _p(t,e);throw Xr("Field path arguments must be of type string or ",t,!1,void 0,n)}const tT=new RegExp("[~\\*/\\[\\]]");function _p(t,e,n){if(e.search(tT)>=0)throw Xr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw Xr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(E.INVALID_ARGUMENT,a+t+c)}function nT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sT extends vp{data(){return super.data()}}function wp(t,e){return typeof e=="string"?_p(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oc{}class iT extends oc{}function oT(t,e,...n){let s=[];e instanceof oc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof cc).length,o=r.filter(a=>a instanceof ac).length;if(i>1||i>0&&o>0)throw new L(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ac extends iT{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ac(e,n,s)}_apply(e){const n=this._parse(e);return bp(e._query,n),new Wn(e.firestore,e.converter,Bo(e._query,n))}_parse(e){const n=pp(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Kl(u,l);const d=[];for(const p of u)d.push(Hl(a,r,p));h={arrayValue:{values:d}}}else h=Hl(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Kl(u,l),h=ZI(o,i,u,l==="in"||l==="not-in");return Ee.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class cc extends oc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:nt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)bp(i,a),i=Bo(i,a)}(e._query,n),new Wn(e.firestore,e.converter,Bo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hl(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new L(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bf(e)&&n.indexOf("/")!==-1)throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(pe.fromString(n));if(!j.isDocumentKey(s))throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ml(t,new j(s))}if(n instanceof He)return ml(t,n._key);throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pi(n)}.`)}function Kl(t,e){if(!Array.isArray(t)||t.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bp(t,e){if(e.isInequality()){const s=ja(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new L(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=wf(t);i!==null&&aT(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function aT(t,e,n){if(!n.isEqual(e))throw new L(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class cT{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return Hn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new sc(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=df(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const n=xt(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pe.fromString(e);de(zf(s));const r=new Es(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ip extends vp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(wp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Er extends Ip{data(e={}){return super.data(e)}}class uT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ns(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Er(this._firestore,this._userDataWriter,s.key,s,new ns(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Er(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Er(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:hT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class Tp extends cT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function Gl(t,e,n){t=nn(t,He);const s=nn(t.firestore,Ds),r=lT(t.converter,e,n);return Ep(s,[JI(pp(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ht.none())])}function dT(t){return Ep(nn(t.firestore,Ds),[new qa(t._key,ht.none())])}function Wl(t,...e){var n,s,r;t=Ae(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||zl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(zl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof He)l=nn(t.firestore,Ds),u=Ba(t._key.path),c={next:h=>{e[o]&&e[o](fT(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=nn(t,Wn);l=nn(h.firestore,Ds),u=h._query;const d=new Tp(l);c={next:p=>{e[o]&&e[o](new uT(l,d,h,p))},error:e[o+1],complete:e[o+2]},rT(t._query)}return function(h,d,p,v){const g=new FI(v),y=new vI(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>gI(await xl(h),y)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>mI(await xl(h),y))}}(up(l),u,a,c)}function Ep(t,e){return function(n,s){const r=new en;return n.asyncQueue.enqueueAndForget(async()=>AI(await qI(n),s,r)),r.promise}(up(t),e)}function fT(t,e,n){const s=n.docs.get(e._key),r=new Tp(t);return new Ip(t,r,e._key,s,new ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zn=n})(Ps),ft(new tt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ds(new f0(n.getProvider("auth-internal")),new y0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Qe(dl,"3.9.0",t),Qe(dl,"3.9.0","esm2017")})();const pT={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},kp=th(pT),Ht=q_(kp);Ay(Ht,Sh);const Yn=WI(kp);sw();const gT=new gt,mT=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Os(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return Th(Ht,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return ky(Ht,r,i)},async signInWithEmail(r,i){return Sy(Ht,r,i)},async signInWithGoogle(){return Zy(Ht,gT)},async signOut(){return Ry(Ht)}}},Sp=mT(),Ql="/assets/default-user-a40c52dd.png";function yT(t){let e;return{c(){e=b("i"),f(e,"class","codicon codicon-account")},m(n,s){C(n,e,s)},p:S,d(n){n&&A(e)}}}function _T(t){let e,n;return{c(){e=b("img"),f(e,"class","profile-picture svelte-1m717b8"),Tt(e.src,n=t[0].user.photoURL??Ql)||f(e,"src",n),f(e,"alt","Account")},m(s,r){C(s,e,r)},p(s,r){r&1&&!Tt(e.src,n=s[0].user.photoURL??Ql)&&f(e,"src",n)},d(s){s&&A(e)}}}function vT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y,I,_;o=new lg({});function R(D,J){return D[0].loggedIn?_T:yT}let O=R(t),N=O(t);return{c(){e=b("header"),n=b("div"),s=b("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=P(),i=b("a"),x(o.$$.fragment),a=P(),c=b("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=P(),u=b("nav"),h=b("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=P(),p=b("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',v=P(),g=b("button"),N.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(D,J){C(D,e,J),m(e,n),m(n,s),m(n,r),m(n,i),M(o,i,null),m(n,a),m(n,c),m(e,l),m(e,u),m(u,h),m(u,d),m(u,p),m(u,v),m(u,g),N.m(g,null),y=!0,I||(_=[B(c,"click",t[1]),B(h,"click",t[2]),B(p,"click",t[3]),B(g,"click",t[4])],I=!0)},p(D,[J]){O===(O=R(D))&&N?N.p(D,J):(N.d(1),N=O(D),N&&(N.c(),N.m(g,null)))},i(D){y||(w(o.$$.fragment,D),y=!0)},o(D){T(o.$$.fragment,D),y=!1},d(D){D&&A(e),U(o),N.d(),I=!1,be(_)}}}function wT(t,e,n){let s;return Ue(t,Sp,c=>n(0,s=c)),[s,()=>En.navigateTo("help"),()=>En.navigateTo("search"),()=>En.navigateTo("settings"),()=>En.navigateTo("account")]}class bT extends Q{constructor(e){super(),W(this,e,wT,vT,G,{})}}const IT="modulepreload",TT=function(t){return"/"+t},Yl={},Mi=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=TT(i),i in Yl)return;Yl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":IT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},kr=Object.freeze(["+","-","~"]),Ui=t=>kr.includes(t),ET=t=>{if(!Ui(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(kr.indexOf(t)+1)%kr.length;return kr[n]},kT=Object.freeze({"+":"","-":"-","~":""}),ST=t=>{if(!Ui(t))throw TypeError("Invalid modifier passed to serializeModifier");return kT[t]},sr=t=>typeof t=="string"&&t!=="",Fi=t=>typeof t=="number";class xi{constructor(e,n){if(!Ui(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!sr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${ST(this.modifier)}${encodeURIComponent(this.name.replaceAll(" ","_"))}`}}const Ap=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),Cp=t=>Ap.includes(t),Xl=t=>{const e=Ap.indexOf(t);return e>=0?e:99},AT=Object.freeze(["artist","character","copyright","source","metadata","rating"]),CT=t=>AT.includes(t);let Vi=class{constructor(e,n,s,r){if(!Ui(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!sr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Fi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Cp(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const Dp=t=>new xi(t.modifier,t.name);class Rp{constructor(e,n,s){if(!sr(e))throw new TypeError("Invalid name passed to Supertag");if(!DT(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const DT=t=>Array.isArray(t)&&t.every(e=>e instanceof xi),RT=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Os(t);let s,r=null,i=null;return Th(Ht,async o=>{s=o,o?r=Wl(gr(Yn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=oT(KI(Yn,`users/${o.uid}/supertags`));i==null||i(),i=Wl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new Rp(d.id,p.description,Object.entries(p.tags).map(v=>new xi(v[1],v[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return Gl(gr(Yn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return dT(gr(Yn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return Gl(gr(Yn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Rs=RT();function NT(t){let e,n,s,r;return{c(){e=b("button"),n=le(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){C(i,e,o),m(e,n),s||(r=B(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&_e(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:S,o:S,d(i){i&&A(e),s=!1,r()}}}function OT(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ze(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class lc extends Q{constructor(e){super(),W(this,e,OT,NT,G,{text:0,title:1,disabled:2})}}const Rt=t=>e=>{(uc(e)||$T(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},$T=t=>t.code==="Space",uc=t=>t.code==="Enter"||t.key==="Enter",PT=Intl.NumberFormat("en",{notation:"compact"}),Dt=t=>{if(!Fi(t))throw new TypeError(`Invalid value passed to formatCount: ${t}`);return PT.format(t)};function xn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const LT=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),Jl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Zl(t){let e,n=Dt(t[0].count)+"",s,r;return{c(){e=le("("),s=le(n),r=le(")")},m(i,o){C(i,e,o),C(i,s,o),C(i,r,o)},p(i,o){o&1&&n!==(n=Dt(i[0].count)+"")&&_e(s,n)},d(i){i&&A(e),i&&A(s),i&&A(r)}}}function MT(t){let e,n=xn(t[0].name)+"",s,r,i,o,a,c=t[0].count&&Zl(t);return{c(){e=b("li"),s=le(n),r=P(),c&&c.c(),f(e,"class",i=Xe(Jl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),he(e,"no-icon",t[0].type!=="supertag")},m(l,u){C(l,e,u),m(e,s),m(e,r),c&&c.m(e,null),o||(a=[B(e,"click",t[2]),B(e,"contextmenu",Qo(t[3]))],o=!0)},p(l,[u]){u&1&&n!==(n=xn(l[0].name)+"")&&_e(s,n),l[0].count?c?c.p(l,u):(c=Zl(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&1&&i!==(i=Xe(Jl[l[0].modifier])+" svelte-13vl0re")&&f(e,"class",i),u&1&&he(e,"no-icon",l[0].type!=="supertag")},i:S,o:S,d(l){l&&A(e),c&&c.d(),o=!1,be(a)}}}function UT(t,e,n){let{tag:s}=e;const r=Ze(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Np extends Q{constructor(e){super(),W(this,e,UT,MT,G,{tag:0})}}function FT(t){let e,n,s,r,i;const o=t[2].default,a=Fu(o,t,t[1],null);return{c(){e=b("div"),n=b("div"),a&&a.c(),f(n,"class","dialog svelte-llz7bw"),f(e,"class","backdrop svelte-llz7bw")},m(c,l){C(c,e,l),m(e,n),a&&a.m(n,null),s=!0,r||(i=[B(n,"click",Ar(xT)),B(e,"click",t[0]),B(e,"keyup",t[3])],r=!0)},p(c,[l]){a&&a.p&&(!s||l&2)&&Bu(a,o,c,c[1],s?Vu(o,c[1],l,null):ju(c[1]),null)},i(c){s||(w(a,c),s=!0)},o(c){T(a,c),s=!1},d(c){c&&A(e),a&&a.d(c),r=!1,be(i)}}}const xT=()=>{};function VT(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=Ze(),o=()=>i("close"),a=c=>{c.code==="Escape"&&o()};return t.$$set=c=>{"$$scope"in c&&n(1,r=c.$$scope)},[o,r,s,a]}class Op extends Q{constructor(e){super(),W(this,e,VT,FT,G,{})}}function eu(t,e,n){const s=t.slice();return s[9]=e[n],s}function tu(t){let e,n;return e=new Np({props:{tag:t[9]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function BT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y,I,_,R,O,N,D,J,fe,$,q=t[2],ee=[];for(let ne=0;ne<q.length;ne+=1)ee[ne]=tu(eu(t,q,ne));const it=ne=>T(ee[ne],1,1,()=>{ee[ne]=null});return D=new lc({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),D.$on("click",t[8]),{c(){e=b("section"),n=b("h3"),n.textContent="Create Supertag",s=P(),r=b("i"),i=P(),o=b("div"),a=b("label"),a.textContent="Name",c=P(),l=b("input"),u=P(),h=b("div"),d=b("label"),d.textContent="Description",p=P(),v=b("input"),g=P(),y=b("div"),I=b("span"),I.textContent="Tags",_=P(),R=b("ol");for(let ne=0;ne<ee.length;ne+=1)ee[ne].c();O=P(),N=b("div"),x(D.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",Xe("codicon codicon-close")+" svelte-1nylv2m"),f(a,"for","supertag-name"),f(a,"class","svelte-1nylv2m"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-1nylv2m"),f(o,"class","svelte-1nylv2m"),f(d,"for","supertag-description"),f(d,"class","svelte-1nylv2m"),f(v,"type","text"),f(v,"placeholder","Short description"),f(v,"id","supertag-description"),f(v,"class","svelte-1nylv2m"),f(h,"class","svelte-1nylv2m"),f(I,"class","svelte-1nylv2m"),f(R,"class","svelte-1nylv2m"),f(y,"class","svelte-1nylv2m"),f(N,"class","last svelte-1nylv2m"),f(e,"class","svelte-1nylv2m")},m(ne,Z){C(ne,e,Z),m(e,n),m(e,s),m(e,r),m(e,i),m(e,o),m(o,a),m(o,c),m(o,l),ct(l,t[0]),m(e,u),m(e,h),m(h,d),m(h,p),m(h,v),ct(v,t[1]),m(e,g),m(e,y),m(y,I),m(y,_),m(y,R);for(let te=0;te<ee.length;te+=1)ee[te]&&ee[te].m(R,null);m(e,O),m(e,N),M(D,N,null),J=!0,fe||($=[B(r,"click",t[5]),B(r,"keyup",Rt(t[5])),B(l,"input",t[6]),B(v,"input",t[7])],fe=!0)},p(ne,Z){if(Z&1&&l.value!==ne[0]&&ct(l,ne[0]),Z&2&&v.value!==ne[1]&&ct(v,ne[1]),Z&4){q=ne[2];let ie;for(ie=0;ie<q.length;ie+=1){const ot=eu(ne,q,ie);ee[ie]?(ee[ie].p(ot,Z),w(ee[ie],1)):(ee[ie]=tu(ot),ee[ie].c(),w(ee[ie],1),ee[ie].m(R,null))}for(ge(),ie=q.length;ie<ee.length;ie+=1)it(ie);me()}const te={};Z&8&&(te.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),Z&8&&(te.disabled=!ne[3]),D.$set(te)},i(ne){if(!J){for(let Z=0;Z<q.length;Z+=1)w(ee[Z]);w(D.$$.fragment,ne),J=!0}},o(ne){ee=ee.filter(Boolean);for(let Z=0;Z<ee.length;Z+=1)T(ee[Z]);T(D.$$.fragment,ne),J=!1},d(ne){ne&&A(e),Bt(ee,ne),U(D),fe=!1,be($)}}}function jT(t){let e,n;return e=new Op({props:{$$slots:{default:[BT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,[r]){const i={};r&4111&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function qT(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ze(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Rp(r,i,o.map(Dp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=sr(r))},[r,i,o,s,a,c,l,u,h]}class zT extends Q{constructor(e){super(),W(this,e,qT,jT,G,{name:0,description:1,tags:2})}}function HT(t){let e,n,s,r;return{c(){e=b("button"),f(e,"class",n=Xe(t[0])+" svelte-17m158f")},m(i,o){C(i,e,o),s||(r=[B(e,"click",t[1]),B(e,"keyup",Rt(t[1]))],s=!0)},p(i,[o]){o&1&&n!==(n=Xe(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:S,o:S,d(i){i&&A(e),s=!1,be(r)}}}function KT(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class $p extends Q{constructor(e){super(),W(this,e,KT,HT,G,{options:3,value:2})}}function GT(t){let e,n,s;function r(o){t[1](o)}let i={options:LT};return t[0]!==void 0&&(i.value=t[0]),e=new $p({props:i}),xe.push(()=>bt(e,"value",r)),{c(){x(e.$$.fragment)},m(o,a){M(e,o,a),s=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],wt(()=>n=!1)),e.$set(c)},i(o){s||(w(e.$$.fragment,o),s=!0)},o(o){T(e.$$.fragment,o),s=!1},d(o){U(e,o)}}}function WT(t,e,n){let{modifier:s}=e;function r(i){s=i,n(0,s)}return t.$$set=i=>{"modifier"in i&&n(0,s=i.modifier)},[s,r]}class QT extends Q{constructor(e){super(),W(this,e,WT,GT,G,{modifier:0})}}function YT(t){let e;return{c(){e=b("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}class hc extends Q{constructor(e){super(),W(this,e,null,YT,G,{})}}let XT=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y,I){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=v,this.tags=g,this.width=y,this.type=I,Object.freeze(this)}};const dc=(t,e)=>{if(!Pp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!JT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Pp=t=>{try{return new URL(t),!0}catch{return!1}},JT=t=>t===null||t instanceof AbortController;class Jr{constructor(e,n,s){if(!sr(e))throw TypeError("Invalid name passed to Tag constructor");if(!Fi(n))throw TypeError("Invalid count passed to Tag constructor");if(!Cp(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const ZT=(t,e)=>new Vi(e,t.name,t.count,t.type);let eE=null;const tE=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await dc(`${e}${n}`,eE);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Jr(Lp(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Lp=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),Mp=20;let Up=null;const Fp=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},nE=async(t,e)=>{const n=await dc(oE(t,e),Up);Fp(n);try{return(await n.json()).map(rE)}catch{return[]}},sE=async t=>{const e=await dc(aE(t),Up);Fp(e);const n=await e.text(),r=new DOMParser().parseFromString(n,"text/xml"),i=Number(r.getElementsByTagName("posts")[0].getAttribute("count"));return cE(i),i},rE=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,v=t.comment_count,g=t.status,y=t.source;return new XT(s,o,r,Number(v),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),y,g,iE(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},iE=t=>t.map(e=>new Jr(Lp(e.tag),e.count,e.type)).sort((e,n)=>Xl(e.type)-Xl(n.type)),oE=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Mp}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},aE=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},cE=t=>{if(!Fi(t))throw new Error("Unexpected response received in getPage")};let lE=class{constructor(e,n,s){uE(e),dE(n),hE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const uE=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},hE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},dE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},nu="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",su=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?nu:`${nu}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(fE(a.attributes));return o},fE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new lE(e.value,n.value,s.value)};function pE(t){let e,n,s=xn(t[0].name)+"",r,i,o,a=Dt(t[0].count)+"",c,l,u,h;return{c(){e=b("li"),n=b("span"),r=le(s),i=P(),o=b("span"),c=le(a),f(n,"class","tag-name svelte-1gc0x48"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-1gc0x48"),he(e,"selected",t[1])},m(d,p){C(d,e,p),m(e,n),m(n,r),m(e,i),m(e,o),m(o,c),u||(h=[B(e,"click",t[2]),B(e,"keypress",Rt(t[2]))],u=!0)},p(d,[p]){p&1&&s!==(s=xn(d[0].name)+"")&&_e(r,s),p&1&&a!==(a=Dt(d[0].count)+"")&&_e(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&he(e,"selected",d[1])},i:S,o:S,d(d){d&&A(e),u=!1,be(h)}}}function gE(t,e,n){let{tag:s}=e,{selected:r=!1}=e;const i=Ze(),o=()=>i("click",s);return t.$$set=a=>{"tag"in a&&n(0,s=a.tag),"selected"in a&&n(1,r=a.selected)},[s,r,o]}class mE extends Q{constructor(e){super(),W(this,e,gE,pE,G,{tag:0,selected:1})}}function yE(t){let e,n,s;return{c(){e=b("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(r,i){C(r,e,i),n||(s=[B(e,"click",t[0]),B(e,"keyup",Rt(t[0]))],n=!0)},p:S,i:S,o:S,d(r){r&&A(e),n=!1,be(s)}}}function _E(t){return[()=>En.navigateTo("help")]}class vE extends Q{constructor(e){super(),W(this,e,_E,yE,G,{})}}function ru(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function wE(t){let e,n,s,r,i=t[20].message+"",o;return{c(){e=b("div"),n=b("i"),s=P(),r=b("span"),o=le(i),f(n,"class",Xe("codicon codicon-error")+" svelte-au4sej"),f(e,"class","suggestion-footer svelte-au4sej")},m(a,c){C(a,e,c),m(e,n),m(e,s),m(e,r),m(r,o)},p(a,c){c&2&&i!==(i=a[20].message+"")&&_e(o,i)},i:S,o:S,d(a){a&&A(e)}}}function bE(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=iu(ru(t,r,a));const o=a=>T(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=P(),n=b("div"),f(n,"class","suggestion-footer svelte-au4sej")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);C(a,e,c),C(a,n,c),s=!0},p(a,c){if(c&100){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=ru(a,r,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=iu(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(ge(),l=r.length;l<i.length;l+=1)o(l);me()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)w(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)T(i[c]);s=!1},d(a){Bt(i,a),a&&A(e),a&&A(n)}}}function iu(t){let e,n;return e=new mE({props:{tag:t[17],selected:t[19]===t[2]}}),e.$on("click",function(){ti(t[6](t[17]))&&t[6](t[17]).apply(this,arguments)}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){t=s;const i={};r&32&&(i.tag=t[17]),r&4&&(i.selected=t[19]===t[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function IE(t){let e,n,s;return n=new hc({}),{c(){e=b("div"),x(n.$$.fragment),f(e,"class","suggestion-footer svelte-au4sej")},m(r,i){C(r,e,i),M(n,e,null),s=!0},p:S,i(r){s||(w(n.$$.fragment,r),s=!0)},o(r){T(n.$$.fragment,r),s=!1},d(r){r&&A(e),U(n)}}}function TE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g;function y(R){t[11](R)}let I={};t[3]!==void 0&&(I.modifier=t[3]),o=new QT({props:I}),xe.push(()=>bt(o,"modifier",y)),l=new vE({});let _={ctx:t,current:null,token:null,hasCatch:!0,pending:IE,then:bE,catch:wE,error:20,blocks:[,,,]};return Cr(d=t[1],_),{c(){e=b("div"),n=b("i"),s=P(),r=b("input"),i=P(),x(o.$$.fragment),c=P(),x(l.$$.fragment),u=P(),h=b("ol"),_.block.c(),f(n,"class","codicon codicon-search spaced svelte-au4sej"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-au4sej"),f(h,"class","svelte-au4sej"),he(h,"open",t[4]),f(e,"class","searchbar svelte-au4sej"),he(e,"open",t[4])},m(R,O){C(R,e,O),m(e,n),m(e,s),m(e,r),ct(r,t[0]),m(e,i),M(o,e,null),m(e,c),M(l,e,null),m(e,u),m(e,h),_.block.m(h,_.anchor=null),_.mount=()=>h,_.anchor=null,p=!0,v||(g=[B(r,"input",t[7]),B(r,"focus",t[8]),B(r,"blur",t[9]),B(r,"keyup",t[10]),B(e,"blur",t[12])],v=!0)},p(R,[O]){t=R,O&1&&r.value!==t[0]&&ct(r,t[0]);const N={};!a&&O&8&&(a=!0,N.modifier=t[3],wt(()=>a=!1)),o.$set(N),_.ctx=t,O&2&&d!==(d=t[1])&&Cr(d,_)||qu(_,t,O),(!p||O&16)&&he(h,"open",t[4]),(!p||O&16)&&he(e,"open",t[4])},i(R){p||(w(o.$$.fragment,R),w(l.$$.fragment,R),w(_.block),p=!0)},o(R){T(o.$$.fragment,R),T(l.$$.fragment,R);for(let O=0;O<3;O+=1){const N=_.blocks[O];T(N)}p=!1},d(R){R&&A(e),U(o),U(l),_.block.d(),_.token=null,_=null,v=!1,be(g)}}}function EE(t,e,n){let s;Ue(t,Rs,O=>n(13,s=O));const r=Ze();let i,o="",a=0,c="+",l=!1,u=[];const h=O=>()=>{r("pick",ZT(O,c)),p()};async function d(O){n(4,l=!0),n(5,u=[...s.supertags.filter(N=>N.name.toLowerCase().includes(O.toLowerCase())).map(N=>new Jr(N.name,Object.keys(N.tags).length,"supertag")),...await tE(O)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function v(){o=this.value,n(0,o)}const g=()=>{document.getElementById("title").scrollIntoView()},y=O=>{(!O.relatedTarget||!O.target.parentNode.contains(O.relatedTarget))&&n(4,l=!1)},I=O=>{uc(O)?h(u.length>a?u[a]:new Jr(o,0,"ambiguous"))():O.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):O.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)};function _(O){c=O,n(3,c)}const R=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,v,g,y,I,_,R]}class kE extends Q{constructor(e){super(),W(this,e,EE,TE,G,{})}}const xp=JSON.parse,Vp=JSON.stringify,Bp=(t,e,n=Vp,s=xp)=>{const r=jp(t,s,e),i=Os(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},Bi=(t,e,n=Vp,s=xp)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?jp(t,s):null,o=Os(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},jp=(t,e,n)=>{try{const s=e(localStorage.getItem(t));return typeof s=="object"&&typeof n=="object"?{...n,...s}:s}catch{return null}};function SE(){const t=[],{subscribe:e,update:n,set:s}=Bi("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Vi("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const It=SE(),AE=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),ou=t=>AE[t]??"";function CE(t){let e,n=xn(t[0].name)+"",s,r,i,o;return{c(){e=b("button"),s=le(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",r=Xe(ou(t[0].type))+" svelte-d6seti"),he(e,"active",t[3]),he(e,"icon",t[2]),he(e,"supertag",t[4])},m(a,c){C(a,e,c),m(e,s),i||(o=B(e,"click",function(){ti(t[4]?au:t[8])&&(t[4]?au:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=xn(t[0].name)+"")&&_e(s,n),c&1&&r!==(r=Xe(ou(t[0].type))+" svelte-d6seti")&&f(e,"class",r),c&9&&he(e,"active",t[3]),c&5&&he(e,"icon",t[2]),c&17&&he(e,"supertag",t[4])},i:S,o:S,d(a){a&&A(e),i=!1,o()}}}const au=()=>{};function DE(t,e,n){let s,r,i,o,a,c,l;Ue(t,It,d=>n(6,c=d)),Ue(t,Rs,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?It.removeByIndex(r):It.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,s=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,r=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=s.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=r>=0),t.$$.dirty&1&&n(2,a=CT(u.type))},[u,r,a,o,i,s,c,l,h]}class RE extends Q{constructor(e){super(),W(this,e,DE,CE,G,{tag:0})}}function NE(t){let e,n,s,r,i;return{c(){e=b("a"),n=b("i"),s=P(),r=le(t[1]),f(n,"class","codicon codicon-link"),f(e,"href",i=t[0].toString()),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(o,a){C(o,e,a),m(e,n),m(e,s),m(e,r)},p(o,[a]){a&2&&_e(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(e,"href",i)},i:S,o:S,d(o){o&&A(e)}}}function OE(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class $E extends Q{constructor(e){super(),W(this,e,OE,NE,G,{url:0})}}function cu(t){let e,n;return e=new $E({props:{url:t[0]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function PE(t){let e,n,s=t[0]&&cu(t);return{c(){s&&s.c(),e=st()},m(r,i){s&&s.m(r,i),C(r,e,i),n=!0},p(r,[i]){r[0]?s?(s.p(r,i),i&1&&w(s,1)):(s=cu(r),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(ge(),T(s,1,1,()=>{s=null}),me())},i(r){n||(w(s),n=!0)},o(r){T(s),n=!1},d(r){s&&s.d(r),r&&A(e)}}}function LE(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(1,r=i.source)},t.$$.update=()=>{t.$$.dirty&2&&n(0,s=Pp(r)?new URL(r):null)},[s,r]}class ME extends Q{constructor(e){super(),W(this,e,LE,PE,G,{source:1})}}function UE(t){let e,n;const s=t[1].default,r=Fu(s,t,t[0],null);return{c(){e=b("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){C(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Bu(r,s,i,i[0],n?Vu(s,i[0],o,null):ju(i[0]),null)},i(i){n||(w(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&A(e),r&&r.d(i)}}}function FE(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Sr extends Q{constructor(e){super(),W(this,e,FE,UE,G,{})}}const lu=6e4,Zr=t=>{if(!xE(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/lu,s=new Date().getTime()/lu-e;if(s<1)return"just now";if(s<60)return vn(s,"minute");const r=s/60;if(r<24)return vn(r,"hour");const i=r/24;if(i<7)return vn(i,"day");if(i<30.5)return vn(i/7,"week");if(i<365.25)return vn(i/30.5,"month");const o=i/365.25;return vn(o,"year")},xE=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",vn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function VE(t){let e,n=Zr(t[0])+"",s;return{c(){e=b("span"),s=le(n),f(e,"class","svelte-1vg7vp7")},m(r,i){C(r,e,i),m(e,s)},p(r,[i]){i&1&&n!==(n=Zr(r[0])+"")&&_e(s,n)},i:S,o:S,d(r){r&&A(e)}}}function BE(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class jE extends Q{constructor(e){super(),W(this,e,BE,VE,G,{value:0})}}function qE(t){let e,n=Dt(t[0])+"",s,r,i;return{c(){e=b("span"),s=le(n),r=P(),i=b("i"),f(i,"class","codicon codicon-heart svelte-1fycl9d"),f(e,"class","svelte-1fycl9d")},m(o,a){C(o,e,a),m(e,s),m(e,r),m(e,i)},p(o,[a]){a&1&&n!==(n=Dt(o[0])+"")&&_e(s,n)},i:S,o:S,d(o){o&&A(e)}}}function zE(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class HE extends Q{constructor(e){super(),W(this,e,zE,qE,G,{value:0})}}function KE(t){let e,n,s=t[0].author+"",r,i,o,a=Zr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=b("div"),n=b("span"),r=le(s),i=P(),o=b("span"),c=le(a),l=P(),u=b("span"),d=le(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,v){C(p,e,v),m(e,n),m(n,r),m(e,i),m(e,o),m(o,c),m(e,l),m(e,u),m(u,d)},p(p,[v]){v&1&&s!==(s=p[0].author+"")&&_e(r,s),v&1&&a!==(a=Zr(p[0].createdAt)+"")&&_e(c,a),v&1&&h!==(h=p[0].content+"")&&_e(d,h)},i:S,o:S,d(p){p&&A(e)}}}function GE(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class WE extends Q{constructor(e){super(),W(this,e,GE,KE,G,{comment:0})}}function QE(t){let e,n,s;return{c(){e=b("a"),n=b("i"),s=le(" File"),f(n,"class","codicon codicon-link-external"),f(e,"href",t[0]),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(r,i){C(r,e,i),m(e,n),m(e,s)},p(r,[i]){i&1&&f(e,"href",r[0])},i:S,o:S,d(r){r&&A(e)}}}function YE(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class XE extends Q{constructor(e){super(),W(this,e,YE,QE,G,{url:0})}}function uu(t,e,n){const s=t.slice();return s[8]=e[n],s}function hu(t,e,n){const s=t.slice();return s[4]=e[n],s}function JE(t){let e,n;return e=new HE({props:{value:t[0].score}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ZE(t){let e,n;return e=new jE({props:{value:t[0].change}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function e1(t){let e,n;return e=new XE({props:{url:t[0].file_url}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function du(t){let e,n,s,r;return s=new Sr({props:{$$slots:{default:[t1]},$$scope:{ctx:t}}}),{c(){e=b("span"),e.textContent="•",n=P(),x(s.$$.fragment),f(e,"class","svelte-9eek1l")},m(i,o){C(i,e,o),C(i,n,o),M(s,i,o),r=!0},p(i,o){const a={};o&2049&&(a.$$scope={dirty:o,ctx:i}),s.$set(a)},i(i){r||(w(s.$$.fragment,i),r=!0)},o(i){T(s.$$.fragment,i),r=!1},d(i){i&&A(e),i&&A(n),U(s,i)}}}function t1(t){let e,n;return e=new ME({props:{source:t[0].source}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function n1(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:c1,then:i1,catch:r1,value:7,blocks:[,,,]};return Cr(n=su(t[0].id),r),{c(){e=st(),r.block.c()},m(i,o){C(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=su(t[0].id))&&Cr(n,r)||qu(r,t,o)},i(i){s||(w(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];T(a)}s=!1},d(i){i&&A(e),r.block.d(i),r.token=null,r=null}}}function s1(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=pu(hu(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=b("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-9eek1l")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=hu(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=pu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(ge(),c=s.length;c<r.length;c+=1)i(c);me()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),Bt(r,o)}}}function r1(t){return{c:S,m:S,p:S,i:S,o:S,d:S}}function i1(t){let e,n,s,r;const i=[a1,o1],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=st()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ge(),T(o[u],1,1,()=>{o[u]=null}),me(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function o1(t){let e;return{c(){e=b("span"),e.textContent="Comments for this post are not available",f(e,"class","no-comments svelte-9eek1l")},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}function a1(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=fu(uu(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=b("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-9eek1l")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=uu(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=fu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(ge(),c=s.length;c<r.length;c+=1)i(c);me()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),Bt(r,o)}}}function fu(t){let e,n;return e=new WE({props:{comment:t[8]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function c1(t){let e,n;return e=new hc({}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function pu(t){let e,n;return e=new RE({props:{tag:t[4]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function l1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y=t[0].tags.length+"",I,_,R,O,N=(t[0].comment_count||"No")+"",D,J,fe,$,q,ee,it,ne;s=new Sr({props:{$$slots:{default:[JE]},$$scope:{ctx:t}}}),a=new Sr({props:{$$slots:{default:[ZE]},$$scope:{ctx:t}}}),h=new Sr({props:{$$slots:{default:[e1]},$$scope:{ctx:t}}});let Z=t[0].source&&du(t);const te=[s1,n1],ie=[];function ot(oe,ve){return oe[1]==="tags"?0:1}return $=ot(t),q=ie[$]=te[$](t),{c(){e=b("div"),n=b("div"),x(s.$$.fragment),r=P(),i=b("span"),i.textContent="•",o=P(),x(a.$$.fragment),c=P(),l=b("span"),l.textContent="•",u=P(),x(h.$$.fragment),d=P(),Z&&Z.c(),p=P(),v=b("div"),g=b("button"),I=le(y),_=le(" tags"),R=P(),O=b("button"),D=le(N),J=le(" comments"),fe=P(),q.c(),f(i,"class","svelte-9eek1l"),f(l,"class","svelte-9eek1l"),f(n,"class","summary svelte-9eek1l"),f(g,"class","codicon codicon-tag svelte-9eek1l"),he(g,"active",t[1]==="tags"),f(O,"class","codicon codicon-comment-discussion svelte-9eek1l"),he(O,"active",t[1]==="comments"),f(v,"class","tabs svelte-9eek1l"),f(e,"class","details svelte-9eek1l")},m(oe,ve){C(oe,e,ve),m(e,n),M(s,n,null),m(n,r),m(n,i),m(n,o),M(a,n,null),m(n,c),m(n,l),m(n,u),M(h,n,null),m(n,d),Z&&Z.m(n,null),m(e,p),m(e,v),m(v,g),m(g,I),m(g,_),m(v,R),m(v,O),m(O,D),m(O,J),m(e,fe),ie[$].m(e,null),ee=!0,it||(ne=[B(g,"click",t[2]),B(O,"click",t[3])],it=!0)},p(oe,[ve]){const rr={};ve&2049&&(rr.$$scope={dirty:ve,ctx:oe}),s.$set(rr);const ae={};ve&2049&&(ae.$$scope={dirty:ve,ctx:oe}),a.$set(ae);const ir={};ve&2049&&(ir.$$scope={dirty:ve,ctx:oe}),h.$set(ir),oe[0].source?Z?(Z.p(oe,ve),ve&1&&w(Z,1)):(Z=du(oe),Z.c(),w(Z,1),Z.m(n,null)):Z&&(ge(),T(Z,1,1,()=>{Z=null}),me()),(!ee||ve&1)&&y!==(y=oe[0].tags.length+"")&&_e(I,y),(!ee||ve&2)&&he(g,"active",oe[1]==="tags"),(!ee||ve&1)&&N!==(N=(oe[0].comment_count||"No")+"")&&_e(D,N),(!ee||ve&2)&&he(O,"active",oe[1]==="comments");let ji=$;$=ot(oe),$===ji?ie[$].p(oe,ve):(ge(),T(ie[ji],1,1,()=>{ie[ji]=null}),me(),q=ie[$],q?q.p(oe,ve):(q=ie[$]=te[$](oe),q.c()),w(q,1),q.m(e,null))},i(oe){ee||(w(s.$$.fragment,oe),w(a.$$.fragment,oe),w(h.$$.fragment,oe),w(Z),w(q),ee=!0)},o(oe){T(s.$$.fragment,oe),T(a.$$.fragment,oe),T(h.$$.fragment,oe),T(Z),T(q),ee=!1},d(oe){oe&&A(e),U(s),U(a),U(h),Z&&Z.d(),ie[$].d(),it=!1,be(ne)}}}function u1(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class h1 extends Q{constructor(e){super(),W(this,e,u1,l1,G,{post:0})}}const ei=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function d1(t){let e,n,s,r,i,o,a,c;return{c(){e=b("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-82dbjo")},m(l,u){C(l,e,u),t[3](e),a||(c=[B(e,"click",t[4]),B(e,"keyup",Rt(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:S,o:S,d(l){l&&A(e),t[3](null),a=!1,be(c)}}}function f1(t,e,n){let{post:s}=e;const r=Ze();let i;Ns(()=>ei.observe(i)),si(()=>ei.unobserve(i));function o(l){xe[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>r("click"),c=()=>r("click");return t.$$set=l=>{"post"in l&&n(0,s=l.post)},[s,i,r,o,a,c]}let p1=class extends Q{constructor(e){super(),W(this,e,f1,d1,G,{post:0})}};const g1="/assets/play-f2f6faca.svg",m1="/assets/load-8440afed.svg",y1="/assets/pause-6f7851a2.svg";function _1(t){let e,n;return{c(){e=b("img"),Tt(e.src,n=g1)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Xp(e,"margin-left","4px")},m(s,r){C(s,e,r)},p:S,d(s){s&&A(e)}}}function v1(t){let e,n;return{c(){e=b("img"),Tt(e.src,n=y1)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){C(s,e,r)},p:S,d(s){s&&A(e)}}}function w1(t){let e,n;return{c(){e=b("img"),Tt(e.src,n=m1)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){C(s,e,r)},p:S,d(s){s&&A(e)}}}function b1(t){let e,n,s,r,i;function o(l,u){return l[1]?w1:l[0]?v1:_1}let a=o(t),c=a(t);return{c(){e=b("button"),n=b("div"),c.c(),f(n,"class","circle svelte-142dl5p"),f(e,"class",s=Xe(t[3].class)+" svelte-142dl5p"),he(e,"play",t[0]&&!t[1])},m(l,u){C(l,e,u),m(e,n),c.m(n,null),r||(i=B(e,"click",Ar(t[2])),r=!0)},p(l,[u]){a===(a=o(l))&&c?c.p(l,u):(c.d(1),c=a(l),c&&(c.c(),c.m(n,null))),u&8&&s!==(s=Xe(l[3].class)+" svelte-142dl5p")&&f(e,"class",s),u&11&&he(e,"play",l[0]&&!l[1])},i:S,o:S,d(l){l&&A(e),c.d(),r=!1,i()}}}function I1(t,e,n){let{playing:s}=e,{loading:r}=e;const i=()=>{n(1,r=!0),n(0,s=!s)};return t.$$set=o=>{n(3,e=po(po({},e),mc(o))),"playing"in o&&n(0,s=o.playing),"loading"in o&&n(1,r=o.loading)},e=mc(e),[s,r,i,e]}class qp extends Q{constructor(e){super(),W(this,e,I1,b1,G,{playing:0,loading:1})}}function T1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p;function v(I){t[12](I)}function g(I){t[13](I)}let y={class:"center"};return t[2]!==void 0&&(y.playing=t[2]),t[3]!==void 0&&(y.loading=t[3]),a=new qp({props:y}),xe.push(()=>bt(a,"playing",v)),xe.push(()=>bt(a,"loading",g)),{c(){e=b("div"),n=b("img"),o=P(),x(a.$$.fragment),f(n,"class","media-img svelte-hpmnpx"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",s=t[0].id.toString()),f(n,"width",r=t[0].width),f(n,"height",i=t[0].height),f(n,"tabindex","0"),f(e,"class","container svelte-hpmnpx"),f(e,"style",u=`aspect-ratio: ${t[0].width} / ${t[0].height}`)},m(I,_){C(I,e,_),m(e,n),t[8](n),m(e,o),M(a,e,null),h=!0,d||(p=[B(n,"click",t[9]),B(n,"keyup",Rt(t[10])),B(n,"load",t[11])],d=!0)},p(I,[_]){(!h||_&16)&&f(n,"data-src",I[4]),(!h||_&1&&s!==(s=I[0].id.toString()))&&f(n,"alt",s),(!h||_&1&&r!==(r=I[0].width))&&f(n,"width",r),(!h||_&1&&i!==(i=I[0].height))&&f(n,"height",i);const R={};!c&&_&4&&(c=!0,R.playing=I[2],wt(()=>c=!1)),!l&&_&8&&(l=!0,R.loading=I[3],wt(()=>l=!1)),a.$set(R),(!h||_&1&&u!==(u=`aspect-ratio: ${I[0].width} / ${I[0].height}`))&&f(e,"style",u)},i(I){h||(w(a.$$.fragment,I),h=!0)},o(I){T(a.$$.fragment,I),h=!1},d(I){I&&A(e),t[8](null),U(a),d=!1,be(p)}}}function E1(t,e,n){let s,r,i,{post:o}=e;const a=Ze();let c,l=!1,u=!1;Ns(()=>ei.observe(c)),si(()=>ei.unobserve(c));function h(I){xe[I?"unshift":"push"](()=>{c=I,n(1,c),n(2,l),n(7,r),n(6,s),n(0,o)})}const d=()=>a("click"),p=()=>a("click"),v=()=>n(3,u=!1);function g(I){l=I,n(2,l)}function y(I){u=I,n(3,u)}return t.$$set=I=>{"post"in I&&n(0,o=I.post)},t.$$.update=()=>{t.$$.dirty&1&&n(6,s=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(7,r=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&196&&n(4,i=l?r:s),t.$$.dirty&198&&c&&n(1,c.src=l?r:s,c)},[o,c,l,u,i,a,s,r,h,d,p,v,g,y]}class k1 extends Q{constructor(e){super(),W(this,e,E1,T1,G,{post:0})}}function gu(t){let e,n,s,r=!0,i=!1,o,a,c,l=mu(t[15])+"",u,h,d,p,v,g,y,I,_,R,O;function N(){cancelAnimationFrame(o),e.paused||(o=Qp(N),i=!0),t[24].call(e)}function D($){t[29]($)}function J($){t[30]($)}let fe={class:"center"};return t[5]!==void 0&&(fe.playing=t[5]),t[6]!==void 0&&(fe.loading=t[6]),g=new qp({props:fe}),xe.push(()=>bt(g,"playing",D)),xe.push(()=>bt(g,"loading",J)),{c(){e=b("video"),a=P(),c=b("span"),u=le(l),h=P(),d=b("input"),v=P(),x(g.$$.fragment),f(e,"poster",t[1]),e.loop=t[4],Tt(e.src,n=t[0])||f(e,"src",n),f(e,"preload","metadata"),f(e,"style",s=`aspect-ratio: ${t[2]} / ${t[3]}`),f(e,"class","svelte-1cq87kx"),t[8]===void 0&&ds(()=>t[25].call(e)),f(c,"class","svelte-1cq87kx"),he(c,"hide",t[12]),f(d,"type","range"),f(d,"min",0),f(d,"max",t[8]),f(d,"step",.0166666),f(d,"style",p=`background-image: linear-gradient(90deg, var(--accent) ${t[13]}%, var(--background-2) ${t[13]}%);}`),f(d,"class","svelte-1cq87kx"),he(d,"hide",t[12])},m($,q){C($,e,q),t[22](e),C($,a,q),C($,c,q),m(c,u),C($,h,q),C($,d,q),ct(d,t[7]),C($,v,q),M(g,$,q),_=!0,R||(O=[B(e,"play",t[23]),B(e,"pause",t[23]),B(e,"timeupdate",N),B(e,"durationchange",t[25]),B(e,"waiting",t[20]),B(e,"playing",t[21]),B(e,"pause",t[21]),B(e,"ended",t[26]),B(e,"dblclick",Ar(Qo(t[27]))),B(d,"change",t[28]),B(d,"input",t[28]),B(d,"click",Ar(A1))],R=!0)},p($,q){(!_||q[0]&2)&&f(e,"poster",$[1]),(!_||q[0]&16)&&(e.loop=$[4]),(!_||q[0]&1&&!Tt(e.src,n=$[0]))&&f(e,"src",n),(!_||q[0]&12&&s!==(s=`aspect-ratio: ${$[2]} / ${$[3]}`))&&f(e,"style",s),q[0]&16384&&r!==(r=$[14])&&e[r?"pause":"play"](),!i&&q[0]&128&&!isNaN($[7])&&(e.currentTime=$[7]),i=!1,(!_||q[0]&32768)&&l!==(l=mu($[15])+"")&&_e(u,l),(!_||q[0]&4096)&&he(c,"hide",$[12]),(!_||q[0]&256)&&f(d,"max",$[8]),(!_||q[0]&8192&&p!==(p=`background-image: linear-gradient(90deg, var(--accent) ${$[13]}%, var(--background-2) ${$[13]}%);}`))&&f(d,"style",p),q[0]&128&&ct(d,$[7]),(!_||q[0]&4096)&&he(d,"hide",$[12]);const ee={};!y&&q[0]&32&&(y=!0,ee.playing=$[5],wt(()=>y=!1)),!I&&q[0]&64&&(I=!0,ee.loading=$[6],wt(()=>I=!1)),g.$set(ee)},i($){_||(w(g.$$.fragment,$),_=!0)},o($){T(g.$$.fragment,$),_=!1},d($){$&&A(e),t[22](null),$&&A(a),$&&A(c),$&&A(h),$&&A(d),$&&A(v),U(g,$),R=!1,be(O)}}}function S1(t){let e,n,s,r,i,o=t[9]&&gu(t);return{c(){e=b("div"),o&&o.c(),f(e,"tabindex","0"),f(e,"class","player svelte-1cq87kx"),f(e,"style",n=`aspect-ratio: ${t[2]} / ${t[3]}`)},m(a,c){C(a,e,c),o&&o.m(e,null),t[31](e),s=!0,r||(i=[B(e,"click",t[16]),B(e,"keydown",Qo(t[19]))],r=!0)},p(a,c){a[9]?o?(o.p(a,c),c[0]&512&&w(o,1)):(o=gu(a),o.c(),w(o,1),o.m(e,null)):o&&(ge(),T(o,1,1,()=>{o=null}),me()),(!s||c[0]&12&&n!==(n=`aspect-ratio: ${a[2]} / ${a[3]}`))&&f(e,"style",n)},i(a){s||(w(o),s=!0)},o(a){T(o),s=!1},d(a){a&&A(e),o&&o.d(),t[31](null),r=!1,be(i)}}}const mu=t=>{const e=Math.floor(t),n=e%60,s=Math.floor(e/60);return`${yu(s)}:${yu(n)}`},yu=t=>`${t<10?"0":""}${t}`,_u=5,A1=()=>{};function C1(t,e,n){let s,r,i,o,{src:a}=e,{poster:c}=e,{width:l}=e,{height:u}=e,{loop:h}=e,d,p,v=!1,g=!1,y=0,I=0,_=!1;const R=Ze(),O=()=>R("click"),N=()=>{n(7,y=Math.max(0,y-_u))},D=()=>{n(7,y=Math.min(I,y+_u))},J=ae=>{uc(ae)?O():ae.key===" "?n(5,v=!v):ae.key==="ArrowLeft"?N():ae.key==="ArrowRight"&&D()},fe=new IntersectionObserver(ae=>{for(const ir of ae)ir.isIntersecting?n(9,_=!0):p&&(n(5,v=!1),n(6,g=!1),p.addEventListener("error",()=>{n(9,_=!1)},{once:!0}),n(11,p.src="",p))},{rootMargin:"0px"});Ns(()=>fe.observe(d)),si(()=>fe.unobserve(d));const $=()=>{n(6,g=!0)},q=()=>{n(6,g=!1)};function ee(ae){xe[ae?"unshift":"push"](()=>{p=ae,n(11,p)})}function it(){r=this.paused,n(14,r),n(5,v),n(9,_)}function ne(){y=this.currentTime,n(7,y)}function Z(){I=this.duration,n(8,I)}const te=()=>{h||(n(6,g=!1),n(5,v=!1))},ie=ae=>{ae.offsetX<ae.target.clientWidth/2?N():D()};function ot(){y=Yo(this.value),n(7,y)}function oe(ae){v=ae,n(5,v),n(9,_)}function ve(ae){g=ae,n(6,g)}function rr(ae){xe[ae?"unshift":"push"](()=>{d=ae,n(10,d)})}return t.$$set=ae=>{"src"in ae&&n(0,a=ae.src),"poster"in ae&&n(1,c=ae.poster),"width"in ae&&n(2,l=ae.width),"height"in ae&&n(3,u=ae.height),"loop"in ae&&n(4,h=ae.loop)},t.$$.update=()=>{t.$$.dirty[0]&384&&n(15,s=I-y),t.$$.dirty[0]&544&&n(5,v=_&&v),t.$$.dirty[0]&32&&n(14,r=!v),t.$$.dirty[0]&384&&n(13,i=y/I*98+1),t.$$.dirty[0]&96&&n(12,o=v&&!g)},[a,c,l,u,h,v,g,y,I,_,d,p,o,i,r,s,O,N,D,J,$,q,ee,it,ne,Z,te,ie,ot,oe,ve,rr]}class D1 extends Q{constructor(e){super(),W(this,e,C1,S1,G,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function R1(t){let e,n;return e=new k1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function N1(t){let e,n;return e=new D1({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(wu)}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.src=s[0].file_url),r&1&&(i.poster=s[0].sample_url),r&1&&(i.width=s[0].width),r&1&&(i.height=s[0].height),r&1&&(i.loop=s[0].tags.some(wu)),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function O1(t){let e,n;return e=new p1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function vu(t){let e,n;return e=new h1({props:{post:t[0]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function $1(t){let e,n,s,r,i;const o=[O1,N1,R1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&vu(t);return{c(){e=b("div"),s.c(),r=P(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){C(u,e,h),a[n].m(e,null),m(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ge(),T(a[d],1,1,()=>{a[d]=null}),me(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),w(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=vu(u),l.c(),w(l,1),l.m(e,null)):l&&(ge(),T(l,1,1,()=>{l=null}),me())},i(u){i||(w(s),w(l),i=!0)},o(u){T(s),T(l),i=!1},d(u){u&&A(e),a[n].d(),l&&l.d()}}}const wu=t=>t.name=="loop";function P1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class L1 extends Q{constructor(e){super(),W(this,e,P1,$1,G,{post:0})}}function bu(t,e,n){const s=t.slice();return s[1]=e[n],s}function Iu(t){let e,n;return e=new L1({props:{post:t[1]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function M1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=Iu(bu(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=b("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=bu(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=Iu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(ge(),c=s.length;c<r.length;c+=1)i(c);me()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),Bt(r,o)}}}function U1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class F1 extends Q{constructor(e){super(),W(this,e,U1,M1,G,{posts:0})}}function x1(t){let e;return{c(){e=b("div")},m(n,s){C(n,e,s),t[1](e)},p:S,i:S,o:S,d(n){n&&A(e),t[1](null)}}}function V1(t,e,n){const s=Ze(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){xe[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class B1 extends Q{constructor(e){super(),W(this,e,V1,x1,G,{})}}const j1="/assets/shironeko-x-c28cad00.png";function q1(t){let e,n,s,r,i;return{c(){e=b("div"),n=b("img"),r=P(),i=b("span"),i.textContent="You have reached the end",Tt(n.src,s=j1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){C(o,e,a),m(e,n),m(e,r),m(e,i)},p:S,i:S,o:S,d(o){o&&A(e)}}}class z1 extends Q{constructor(e){super(),W(this,e,null,q1,G,{})}}const H1="/assets/shironeko-confused-4071d5b2.png";function K1(t){let e,n,s,r,i;return{c(){e=b("div"),n=b("img"),r=P(),i=b("span"),i.textContent="No results found",Tt(n.src,s=H1)||f(n,"src",s),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){C(o,e,a),m(e,n),m(e,r),m(e,i)},p:S,i:S,o:S,d(o){o&&A(e)}}}class G1 extends Q{constructor(e){super(),W(this,e,null,K1,G,{})}}const Tu=()=>({pages:[],nextPage:0,ids:new Set}),W1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},Q1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},Y1=()=>{const{subscribe:t,update:e,set:n}=Bi("results",Tu(),W1,Q1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(Tu())}}},ss=Y1(),X1=()=>{const{subscribe:t,set:e}=Bi("count",null);return{subscribe:t,set:e,reset(){e(0)}}},fc=X1(),J1={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},Z1=()=>{const{subscribe:t,set:e}=Bp("sort",J1);return{subscribe:t,set:e}},Tn=Z1();function Eu(t,e,n){const s=t.slice();return s[0]=e[n][0],s[3]=e[n][1],s}function ku(t){let e,n=t[3]+"",s,r;return{c(){e=b("option"),s=le(n),e.__value=r=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){C(i,e,o),m(e,s)},p(i,o){o&2&&n!==(n=i[3]+"")&&_e(s,n),o&2&&r!==(r=i[0])&&(e.__value=r,e.value=e.__value)},d(i){i&&A(e)}}}function ek(t){let e,n,s,r=Object.entries(t[1]),i=[];for(let o=0;o<r.length;o+=1)i[o]=ku(Eu(t,r,o));return{c(){e=b("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&ds(()=>t[2].call(e))},m(o,a){C(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);yc(e,t[0],!0),n||(s=B(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){r=Object.entries(o[1]);let c;for(c=0;c<r.length;c+=1){const l=Eu(o,r,c);i[c]?i[c].p(l,a):(i[c]=ku(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}a&3&&yc(e,o[0])},i:S,o:S,d(o){o&&A(e),Bt(i,o),n=!1,s()}}}function tk(t,e,n){let{options:s}=e,{value:r}=e;function i(){r=Jp(this),n(0,r),n(1,s)}return t.$$set=o=>{"options"in o&&n(1,s=o.options),"value"in o&&n(0,r=o.value)},[r,s,i]}class nk extends Q{constructor(e){super(),W(this,e,tk,ek,G,{options:1,value:0})}}function sk(t){let e,n,s,r;return{c(){e=b("button"),n=le(t[0]),f(e,"class","svelte-17m158f")},m(i,o){C(i,e,o),m(e,n),s||(r=[B(e,"click",t[1]),B(e,"keyup",Rt(t[1]))],s=!0)},p(i,[o]){o&1&&_e(n,i[0])},i:S,o:S,d(i){i&&A(e),s=!1,be(r)}}}function rk(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class ik extends Q{constructor(e){super(),W(this,e,rk,sk,G,{options:3,value:2})}}function Su(t){let e,n;return e=new Op({props:{$$slots:{default:[ok]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1025&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ok(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y,I,_,R,O,N,D,J,fe;function $(te){t[6](te)}let q={options:lk};t[0].sortDirection!==void 0&&(q.value=t[0].sortDirection),o=new $p({props:q}),xe.push(()=>bt(o,"value",$));function ee(te){t[7](te)}let it={options:ck};t[0].sortProperty!==void 0&&(it.value=t[0].sortProperty),l=new nk({props:it}),xe.push(()=>bt(l,"value",ee));function ne(te){t[8](te)}let Z={options:uk};return t[0].scoreComparator!==void 0&&(Z.value=t[0].scoreComparator),y=new ik({props:Z}),xe.push(()=>bt(y,"value",ne)),N=new lc({props:{text:"Done",title:"Return to searching."}}),N.$on("click",t[5]),{c(){e=b("div"),n=b("label"),s=b("b"),s.textContent="Sorting",r=P(),i=b("div"),x(o.$$.fragment),c=P(),x(l.$$.fragment),h=P(),d=b("label"),p=b("b"),p.textContent="Score Filtering",v=P(),g=b("div"),x(y.$$.fragment),_=P(),R=b("input"),O=P(),x(N.$$.fragment),f(i,"class","row svelte-1k7zufl"),f(n,"class","svelte-1k7zufl"),f(R,"type","number"),f(R,"min",0),f(R,"max",1e5),f(R,"step",1),f(R,"class","svelte-1k7zufl"),f(g,"class","row svelte-1k7zufl"),f(d,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(te,ie){C(te,e,ie),m(e,n),m(n,s),m(n,r),m(n,i),M(o,i,null),m(i,c),M(l,i,null),m(e,h),m(e,d),m(d,p),m(d,v),m(d,g),M(y,g,null),m(g,_),m(g,R),ct(R,t[0].scoreValue),m(e,O),M(N,e,null),D=!0,J||(fe=[B(R,"input",t[9]),B(R,"keyup",Rt(dk))],J=!0)},p(te,ie){const ot={};!a&&ie&1&&(a=!0,ot.value=te[0].sortDirection,wt(()=>a=!1)),o.$set(ot);const oe={};!u&&ie&1&&(u=!0,oe.value=te[0].sortProperty,wt(()=>u=!1)),l.$set(oe);const ve={};!I&&ie&1&&(I=!0,ve.value=te[0].scoreComparator,wt(()=>I=!1)),y.$set(ve),ie&1&&Yo(R.value)!==te[0].scoreValue&&ct(R,te[0].scoreValue)},i(te){D||(w(o.$$.fragment,te),w(l.$$.fragment,te),w(y.$$.fragment,te),w(N.$$.fragment,te),D=!0)},o(te){T(o.$$.fragment,te),T(l.$$.fragment,te),T(y.$$.fragment,te),T(N.$$.fragment,te),D=!1},d(te){te&&A(e),U(o),U(l),U(y),U(N),J=!1,be(fe)}}}function ak(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y=t[1]&&Su(t);return{c(){e=b("button"),n=b("i"),s=P(),r=b("span"),i=le(t[3]),o=P(),a=b("i"),c=P(),l=b("span"),u=le(t[2]),h=P(),y&&y.c(),d=st(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(I,_){C(I,e,_),m(e,n),m(e,s),m(e,r),m(r,i),m(e,o),m(e,a),m(e,c),m(e,l),m(l,u),C(I,h,_),y&&y.m(I,_),C(I,d,_),p=!0,v||(g=[B(e,"click",t[4]),B(e,"keypress",Rt(t[4]))],v=!0)},p(I,[_]){(!p||_&8)&&_e(i,I[3]),(!p||_&4)&&_e(u,I[2]),I[1]?y?(y.p(I,_),_&2&&w(y,1)):(y=Su(I),y.c(),w(y,1),y.m(d.parentNode,d)):y&&(ge(),T(y,1,1,()=>{y=null}),me())},i(I){p||(w(y),p=!0)},o(I){T(y),p=!1},d(I){I&&A(e),I&&A(h),y&&y.d(I),I&&A(d),v=!1,be(g)}}}const ck=Object.freeze({id:"Upload",score:"Score",updated:"Change"}),lk=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),uk=Object.freeze({">=":"≥","<=":"≤"}),hk=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),dk=t=>t.target.blur();function fk(t,e,n){let s,r,i;Ue(t,Tn,p=>n(0,i=p));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1);function l(p){t.$$.not_equal(i.sortDirection,p)&&(i.sortDirection=p,Tn.set(i))}function u(p){t.$$.not_equal(i.sortProperty,p)&&(i.sortProperty=p,Tn.set(i))}function h(p){t.$$.not_equal(i.scoreComparator,p)&&(i.scoreComparator=p,Tn.set(i))}function d(){i.scoreValue=Yo(this.value),Tn.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,s=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${Dt(i.scoreValue)}`),t.$$.dirty&1&&n(2,r=hk[i.sortProperty][i.sortDirection])},[i,o,r,s,a,c,l,u,h,d]}class pk extends Q{constructor(e){super(),W(this,e,fk,ak,G,{})}}function gk(t){let e,n,s=Dt(t[0])+"",r,i,o,a,c,l;return c=new pk({}),{c(){e=b("div"),n=b("span"),r=le(s),i=le(" results"),a=P(),x(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){C(u,e,h),m(e,n),m(n,r),m(n,i),m(e,a),M(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&s!==(s=Dt(u[0])+"")&&_e(r,s),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(w(c.$$.fragment,u),l=!0)},o(u){T(c.$$.fragment,u),l=!1},d(u){u&&A(e),U(c)}}}function mk(t,e,n){let s;return Ue(t,fc,r=>n(0,s=r)),[s]}class yk extends Q{constructor(e){super(),W(this,e,mk,gk,G,{})}}function Au(t,e,n){const s=t.slice();return s[8]=e[n],s}function _k(t){let e,n;return e=new G1({}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function vk(t){let e,n,s,r,i,o,a,c;e=new yk({}),e.$on("configchange",t[6]);let l=t[1].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=Cu(Au(t,l,g));const h=g=>T(u[g],1,1,()=>{u[g]=null}),d=[bk,wk],p=[];function v(g,y){return g[3]?0:1}return i=v(t),o=p[i]=d[i](t),{c(){x(e.$$.fragment),n=P(),s=b("ol");for(let g=0;g<u.length;g+=1)u[g].c();r=P(),o.c(),a=st(),f(s,"class","svelte-dsypei")},m(g,y){M(e,g,y),C(g,n,y),C(g,s,y);for(let I=0;I<u.length;I+=1)u[I]&&u[I].m(s,null);C(g,r,y),p[i].m(g,y),C(g,a,y),c=!0},p(g,y){if(y&2){l=g[1].pages;let _;for(_=0;_<l.length;_+=1){const R=Au(g,l,_);u[_]?(u[_].p(R,y),w(u[_],1)):(u[_]=Cu(R),u[_].c(),w(u[_],1),u[_].m(s,null))}for(ge(),_=l.length;_<u.length;_+=1)h(_);me()}let I=i;i=v(g),i===I?p[i].p(g,y):(ge(),T(p[I],1,1,()=>{p[I]=null}),me(),o=p[i],o?o.p(g,y):(o=p[i]=d[i](g),o.c()),w(o,1),o.m(a.parentNode,a))},i(g){if(!c){w(e.$$.fragment,g);for(let y=0;y<l.length;y+=1)w(u[y]);w(o),c=!0}},o(g){T(e.$$.fragment,g),u=u.filter(Boolean);for(let y=0;y<u.length;y+=1)T(u[y]);T(o),c=!1},d(g){U(e,g),g&&A(n),g&&A(s),Bt(u,g),g&&A(r),p[i].d(g),g&&A(a)}}}function Cu(t){let e,n;return e=new F1({props:{posts:t[8]}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.posts=s[8]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function wk(t){let e,n;return e=new z1({}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function bk(t){let e,n;return e=new B1({}),e.$on("visible",t[7]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Ik(t){let e,n,s,r;const i=[vk,_k],o=[];function a(c,l){return c[0]?0:c[2]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=st()},m(c,l){~e&&o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ge(),T(o[u],1,1,()=>{o[u]=null}),me()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){~e&&o[e].d(c),c&&A(s)}}}function Tk(t,e,n){let s,r,i,o,a;Ue(t,fc,h=>n(0,o=h)),Ue(t,ss,h=>n(1,a=h));const c=Ze(),l=()=>c("configchange"),u=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o/Mp),t.$$.dirty&34&&n(3,r=a.pages.length<s),t.$$.dirty&1&&n(2,i=o===0)},[o,a,i,r,c,s,l,u]}class Ek extends Q{constructor(e){super(),W(this,e,Tk,Ik,G,{})}}function kk(t){let e,n,s;return{c(){e=b("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-69q5fy"),he(e,"visible",t[0])},m(r,i){C(r,e,i),n||(s=B(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&he(e,"visible",r[0])},i:S,o:S,d(r){r&&A(e),n=!1,s()}}}function Sk(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Ns(()=>{document.addEventListener("scroll",i,{passive:!0})}),si(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class Ak extends Q{constructor(e){super(),W(this,e,Sk,kk,G,{})}}function Ck(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=b("div"),n=b("div"),s=b("i"),i=P(),o=b("div"),a=b("h3"),c=le(t[2]),l=P(),u=b("span"),h=le(t[1]),f(s,"class",r=Xe(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){C(d,e,p),m(e,n),m(n,s),m(e,i),m(e,o),m(o,a),m(a,c),m(o,l),m(o,u),m(u,h)},p(d,[p]){p&1&&r!==(r=Xe(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&_e(c,d[2]),p&2&&_e(h,d[1])},i:S,o:S,d(d){d&&A(e)}}}function Dk(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class zp extends Q{constructor(e){super(),W(this,e,Dk,Ck,G,{icon:0,message:1,title:2})}}function Rk(t){let e;return{c(){e=b("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}class Nk extends Q{constructor(e){super(),W(this,e,null,Rk,G,{})}}function Du(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Ru(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=Nu(Du(t,r,c));const o=c=>T(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&Ou(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=P(),a&&a.c(),n=st()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);C(c,e,l),a&&a.m(c,l),C(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=Du(c,r,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=Nu(h),i[u].c(),w(i[u],1),i[u].m(e.parentNode,e))}for(ge(),u=r.length;u<i.length;u+=1)o(u);me()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=Ou(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)w(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)T(i[l]);s=!1},d(c){Bt(i,c),c&&A(e),a&&a.d(c),c&&A(n)}}}function Nu(t){let e,n;function s(){return t[3](t[8])}function r(){return t[4](t[6])}return e=new Np({props:{tag:t[6]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){x(e.$$.fragment)},m(i,o){M(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function Ou(t){let e,n,s;return{c(){e=b("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-lsipoc"></i>',f(e,"class","add-supertag svelte-lsipoc"),f(e,"title","Click to create a new supertag")},m(r,i){C(r,e,i),n||(s=B(e,"click",t[5]),n=!0)},p:S,d(r){r&&A(e),n=!1,s()}}}function Ok(t){let e,n,s=t[0].length&&Ru(t);return{c(){e=b("ul"),s&&s.c(),f(e,"class","svelte-lsipoc")},m(r,i){C(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&w(s,1)):(s=Ru(r),s.c(),w(s,1),s.m(e,null)):s&&(ge(),T(s,1,1,()=>{s=null}),me())},i(r){n||(w(s),n=!0)},o(r){T(s),n=!1},d(r){r&&A(e),s&&s.d()}}}function $k(t,e,n){let s,r;Ue(t,It,l=>n(0,s=l)),Ue(t,Sp,l=>n(1,r=l));const i=Ze();return[s,r,i,l=>It.removeByIndex(l),l=>It.addOrReplace(new Vi(ET(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class Pk extends Q{constructor(e){super(),W(this,e,$k,Ok,G,{})}}const ES=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),Lk=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class Mk{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=ho(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=ho(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),nE(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=ho(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),sE(this.tagString)}}const $u=()=>new Mk,ho=(t,e,n,s,r,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${r}${s}`,`sort:${e}:${n}`];if(c.length>0){const h=fo(c.map(d=>Dp(d)));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${fo(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>Lk[p]).map(p=>new xi("-",p)),d=fo(h);l.push(d)}const u=l.join("+");return console.log("searching for",u),u},fo=t=>{const e=Uk(t);let n=[...Pu([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${Pu(e["~"]).join(" ~ ")} )`),n.join("+")},Uk=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Pu=t=>t.map(e=>e.serialize()),Fk=()=>{const t=[],{subscribe:e,update:n}=Bi("blockedContent",t);return{subscribe:e,toggle(s){n(r=>r.includes(s)?r.filter(i=>i!==s):[...r,s])}}},xk=Fk();function Vk(t){let e,n;return e=new Ek({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Bk(t){let e,n,s,r;const i=[qk,jk],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=st()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ge(),T(o[u],1,1,()=>{o[u]=null}),me(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function jk(t){let e,n;return e=new zp({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function qk(t){let e,n;return e=new zp({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Lu(t){let e,n;return e=new zT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function zk(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,y,I;n=new Nk({}),r=new kE({}),r.$on("pick",t[7]),o=new Pk({}),o.$on("supertag",t[8]),l=new lc({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const _=[Bk,Vk],R=[];function O(D,J){return D[1]!==void 0?0:1}h=O(t),d=R[h]=_[h](t),v=new Ak({});let N=t[0]&&Lu(t);return{c(){e=b("div"),x(n.$$.fragment),s=P(),x(r.$$.fragment),i=P(),x(o.$$.fragment),a=P(),c=b("div"),x(l.$$.fragment),u=P(),d.c(),p=P(),x(v.$$.fragment),g=P(),N&&N.c(),y=st(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(D,J){C(D,e,J),M(n,e,null),m(e,s),M(r,e,null),m(e,i),M(o,e,null),m(e,a),m(e,c),M(l,c,null),C(D,u,J),R[h].m(D,J),C(D,p,J),M(v,D,J),C(D,g,J),N&&N.m(D,J),C(D,y,J),I=!0},p(D,[J]){let fe=h;h=O(D),h===fe?R[h].p(D,J):(ge(),T(R[fe],1,1,()=>{R[fe]=null}),me(),d=R[h],d?d.p(D,J):(d=R[h]=_[h](D),d.c()),w(d,1),d.m(p.parentNode,p)),D[0]?N?(N.p(D,J),J&1&&w(N,1)):(N=Lu(D),N.c(),w(N,1),N.m(y.parentNode,y)):N&&(ge(),T(N,1,1,()=>{N=null}),me())},i(D){I||(w(n.$$.fragment,D),w(r.$$.fragment,D),w(o.$$.fragment,D),w(l.$$.fragment,D),w(d),w(v.$$.fragment,D),w(N),I=!0)},o(D){T(n.$$.fragment,D),T(r.$$.fragment,D),T(o.$$.fragment,D),T(l.$$.fragment,D),T(d),T(v.$$.fragment,D),T(N),I=!1},d(D){D&&A(e),U(n),U(r),U(o),U(l),D&&A(u),R[h].d(D),D&&A(p),U(v,D),D&&A(g),N&&N.d(D),D&&A(y)}}}function Hk(t,e,n){let s,r,i,o,a;Ue(t,Tn,_=>n(6,s=_)),Ue(t,xk,_=>n(12,r=_)),Ue(t,Rs,_=>n(13,i=_)),Ue(t,It,_=>n(2,o=_)),Ue(t,ss,_=>n(14,a=_));let c=!1,l,u=!1,h=JSON.stringify(s);const d=async()=>{n(1,l=void 0),u=!0,ss.reset();try{const[_,R]=await $u().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPageAndCount();ss.addPage(_),fc.set(R)}catch(_){n(1,l=_),console.warn(_)}finally{u=!1}},p=async()=>{if(!u){n(1,l=void 0),u=!0;try{const _=await $u().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPage();ss.addPage(_)}catch(_){n(1,l=_),console.warn(_)}finally{u=!1}}},v=_=>It.addOrReplace(_.detail),g=()=>{n(0,c=!0)},y=_=>{Rs.addSupertag(_.detail),It.set([new Vi("+",_.detail.name,_.detail.tags.length,"supertag")])},I=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const _=JSON.stringify(s);h!==_&&(n(5,h=_),d())}},[c,l,o,d,p,h,s,v,g,y,I]}class Kk extends Q{constructor(e){super(),W(this,e,Hk,zk,G,{})}}function Gk(t){let e,n;return e=new hc({}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Wk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=_c(r,i())),{c(){e&&x(e.$$.fragment),n=st()},m(o,a){e&&M(e,o,a),C(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){ge();const c=e;T(c.$$.fragment,1,0,()=>{U(c,1)}),me()}r?(e=_c(r,i()),x(e.$$.fragment),w(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&T(e.$$.fragment,o),s=!1},d(o){o&&A(n),e&&U(e,o)}}}function Qk(t){let e,n,s,r;const i=[Wk,Gk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=st()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ge(),T(o[u],1,1,()=>{o[u]=null}),me(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function Yk(t,e,n){let{loadComponent:s}=e,r;return Ns(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class pc extends Q{constructor(e){super(),W(this,e,Yk,Qk,G,{loadComponent:1})}}function Xk(t){let e;return{c(){e=b("p"),e.textContent="You got lost..."},m(n,s){C(n,e,s)},i:S,o:S,d(n){n&&A(e)}}}function Jk(t){let e,n;return e=new pc({props:{loadComponent:iS}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Zk(t){let e,n;return e=new pc({props:{loadComponent:rS}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function eS(t){let e,n;return e=new pc({props:{loadComponent:sS}}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function tS(t){let e,n;return e=new Kk({}),{c(){x(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function nS(t){let e,n,s,r;const i=[tS,eS,Zk,Jk,Xk],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=b("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){C(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ge(),T(o[u],1,1,()=>{o[u]=null}),me(),s=o[n],s||(s=o[n]=i[n](c),s.c()),w(s,1),s.m(e,null))},i(c){r||(w(s),r=!0)},o(c){T(s),r=!1},d(c){c&&A(e),o[n].d()}}}const sS=()=>Mi(()=>import("./Account-d4a50ccc.js"),["assets/Account-d4a50ccc.js","assets/Account-0bbfdf36.css"]),rS=()=>Mi(()=>import("./Preferences-af32485e.js"),["assets/Preferences-af32485e.js","assets/ParagraphHeading-fb9873c1.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),iS=()=>Mi(()=>import("./Help-cd508437.js"),["assets/Help-cd508437.js","assets/ParagraphHeading-fb9873c1.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function oS(t,e,n){let s;return Ue(t,En,r=>n(0,s=r)),[s]}class aS extends Q{constructor(e){super(),W(this,e,oS,nS,G,{})}}function cS(t){let e;return{c(){e=b("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}class lS extends Q{constructor(e){super(),W(this,e,null,cS,G,{})}}const{subscribe:uS,set:hS}=Bp("theme","dark"),Mu={subscribe:uS,set(t){hS(t),dS(t),Rs.setTheme(t)}},dS=t=>{document.documentElement.classList.replace(fS(t),t)},fS=t=>t==="dark"?"light":"dark";function pS(t){let e,n,s,r,i,o;return e=new bT({}),s=new aS({}),i=new lS({}),{c(){x(e.$$.fragment),n=P(),x(s.$$.fragment),r=P(),x(i.$$.fragment)},m(a,c){M(e,a,c),C(a,n,c),M(s,a,c),C(a,r,c),M(i,a,c),o=!0},p:S,i(a){o||(w(e.$$.fragment,a),w(s.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),T(s.$$.fragment,a),T(i.$$.fragment,a),o=!1},d(a){U(e,a),a&&A(n),U(s,a),a&&A(r),U(i,a)}}}function gS(t){return Mu.subscribe(e=>Mu.set(e))(),[]}class mS extends Q{constructor(e){super(),W(this,e,gS,pS,G,{})}}function yS(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Mi(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new mS({target:document.getElementById("app")});yS();export{RE as $,he as A,lc as B,Qo as C,Op as D,xe as E,bt as F,wt as G,ct as H,Tt as I,Sp as J,Ue as K,Rs as L,Jl as M,Ql as N,Bp as O,Fu as P,Bu as Q,ju as R,Q as S,Vu as T,Mu as U,xk as V,_S as W,nk as X,ES as Y,Np as Z,Vi as _,f as a,Jr as a0,Ak as a1,LT as a2,C as b,m as c,_e as d,b as e,xn as f,S as g,A as h,W as i,P as j,st as k,B as l,w as m,Xe as n,Rt as o,ge as p,me as q,T as r,G as s,le as t,Bt as u,be as v,Ze as w,x,M as y,U as z};
