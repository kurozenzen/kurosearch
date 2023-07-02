(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function A(){}function jo(t,e){for(const n in e)t[n]=e[n];return t}function Gg(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Rh(t){return t()}function Jc(){return Object.create(null)}function Re(t){t.forEach(Rh)}function Ei(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ts;function Ct(t,e){return Ts||(Ts=document.createElement("a")),Ts.href=e,t===Ts.href}function Wg(t){return Object.keys(t).length===0}function Qg(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pe(t,e,n){t.$$.on_destroy.push(Qg(e,n))}function Dh(t,e,n,r){if(t){const s=Nh(t,e,n,r);return t[0](s)}}function Nh(t,e,n,r){return t[1]&&r?jo(n.ctx.slice(),t[1](r(e))):n.ctx}function Oh(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function Ph(t,e,n,r,s,i){if(s){const o=Nh(e,n,r,i);t.p(o,s)}}function $h(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Xc(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qe(t){return t??""}function qA(t,e,n){return t.set(n),e}const Yg=typeof window<"u";let Jg=Yg?t=>requestAnimationFrame(t):A;function y(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function Rn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function le(t){return document.createTextNode(t)}function M(){return le(" ")}function nt(){return le("")}function j(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Mh(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ks(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Sa(t){return t===""?null:+t}function Xg(t){return Array.from(t.childNodes)}function ve(t,e){e=""+e,t.data!==e&&(t.data=e)}function ut(t,e){t.value=e??""}function Zg(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Zc(t,e,n){for(let r=0;r<t.options.length;r+=1){const s=t.options[r];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function em(t){const e=t.querySelector(":checked");return e&&e.__value}function de(t,e,n){t.classList[n?"add":"remove"](e)}function tm(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function el(t,e){return new t(e)}let Or;function It(t){Or=t}function bi(){if(!Or)throw new Error("Function called outside component initialization");return Or}function nr(t){bi().$$.on_mount.push(t)}function Ti(t){bi().$$.on_destroy.push(t)}function Wt(){const t=bi();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=tm(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function fn(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Mn=[],$e=[];let Vn=[];const qo=[],nm=Promise.resolve();let zo=!1;function rm(){zo||(zo=!0,nm.then(Aa))}function Pr(t){Vn.push(t)}function kt(t){qo.push(t)}const uo=new Set;let Dn=0;function Aa(){if(Dn!==0)return;const t=Or;do{try{for(;Dn<Mn.length;){const e=Mn[Dn];Dn++,It(e),sm(e.$$)}}catch(e){throw Mn.length=0,Dn=0,e}for(It(null),Mn.length=0,Dn=0;$e.length;)$e.pop()();for(let e=0;e<Vn.length;e+=1){const n=Vn[e];uo.has(n)||(uo.add(n),n())}Vn.length=0}while(Mn.length);for(;qo.length;)qo.pop()();zo=!1,uo.clear(),It(t)}function sm(t){if(t.fragment!==null){t.update(),Re(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Pr)}}function im(t){const e=[],n=[];Vn.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Vn=e}const Ms=new Set;let nn;function fe(){nn={r:0,c:[],p:nn}}function pe(){nn.r||Re(nn.c),nn=nn.p}function v(t,e){t&&t.i&&(Ms.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if(Ms.has(t))return;Ms.add(t),nn.c.push(()=>{Ms.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Gs(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(fe(),b(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),pe())}):e.block.d(1),l.c(),v(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Aa()}if(Gg(t)){const s=bi();if(t.then(i=>{It(s),r(e.then,1,e.value,i),It(null)},i=>{if(It(s),r(e.catch,2,e.error,i),It(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Lh(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function St(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function x(t){t&&t.c()}function F(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||Pr(()=>{const o=t.$$.on_mount.map(Rh).filter(Ei);t.$$.on_destroy?t.$$.on_destroy.push(...o):Re(o),t.$$.on_mount=[]}),i.forEach(Pr)}function U(t,e){const n=t.$$;n.fragment!==null&&(im(n.after_update),Re(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function om(t,e){t.$$.dirty[0]===-1&&(Mn.push(t),rm(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,r,s,i,o,a=[-1]){const c=Or;It(t);const l=t.$$={fragment:null,ctx:[],props:i,update:A,not_equal:s,bound:Jc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Jc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&om(t,h)),d}):[],l.update(),u=!0,Re(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=Xg(e.target);l.fragment&&l.fragment.l(h),h.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&v(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),Aa()}It(c)}class J{$destroy(){U(this,1),this.$destroy=A}$on(e,n){if(!Ei(n))return A;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Wg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Nn=[];function ts(t,e=A){let n;const r=new Set;function s(a){if(G(t,a)&&(t=a,n)){const c=!Nn.length;for(const l of r)l[1](),Nn.push(l,t);if(c){for(let l=0;l<Nn.length;l+=2)Nn[l][0](Nn[l+1]);Nn.length=0}}}function i(a){s(a(t))}function o(a,c=A){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||A),a(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const am=Object.freeze(["search","account","settings","help"]),cm=t=>am.includes(t),lm=()=>{const{subscribe:t,set:e}=ts("search");return{subscribe:t,navigateTo(n){if(!cm(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Un=lm();function um(t){let e,n,r,s,i,o;return{c(){e=Rn("svg"),n=Rn("g"),r=Rn("path"),s=Rn("defs"),i=Rn("clipPath"),o=Rn("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){R(a,e,c),y(e,n),y(n,r),y(e,s),y(s,i),y(i,o)},p:A,i:A,o:A,d(a){a&&C(e)}}}class hm extends J{constructor(e){super(),Y(this,e,null,um,G,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Fh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new fm;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pm=function(t){const e=Fh(t);return Uh.encodeByteArray(e,!0)},Ws=function(t){return pm(t).replace(/\./g,"")},xh=function(t){try{return Uh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mm=()=>gm().__FIREBASE_DEFAULTS__,ym=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_m=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xh(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return mm()||ym()||_m()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vh=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vm=t=>{const e=Vh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bh=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},jh=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Im(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ws(JSON.stringify(n)),Ws(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function qh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tm(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zh(){try{return typeof indexedDB=="object"}catch{return!1}}function Hh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function km(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sm,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Am(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,r)}}function Am(t,e){return t.replace(Cm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cm=/\{\$([^}]+)}/g;function Rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tl(i)&&tl(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _r(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dm(t,e){const n=new Nm(t,e);return n.subscribe.bind(n)}class Nm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Om(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ho),s.error===void 0&&(s.error=ho),s.complete===void 0&&(s.complete=ho);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Om(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ho(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=1e3,$m=2,Mm=4*60*60*1e3,Lm=.5;function nl(t,e=Pm,n=$m){const r=e*Math.pow(n,t),s=Math.round(Lm*r*(Math.random()-.5)*2);return Math.min(Mm,r+s)}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class st{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xm(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Um(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Um(t){return t===Zt?void 0:t}function xm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Bm={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},jm=ae.INFO,qm={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},zm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=jm,this._logHandler=zm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Hm=(t,e)=>e.some(n=>t instanceof n);let rl,sl;function Km(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gm(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kh=new WeakMap,Ho=new WeakMap,Gh=new WeakMap,fo=new WeakMap,Ra=new WeakMap;function Wm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kh.set(n,t)}).catch(()=>{}),Ra.set(e,t),e}function Qm(t){if(Ho.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ho.set(t,e)}let Ko={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ho.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ym(t){Ko=t(Ko)}function Jm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(po(this),e,...n);return Gh.set(r,e.sort?e.sort():[e]),Vt(r)}:Gm().includes(t)?function(...e){return t.apply(po(this),e),Vt(Kh.get(this))}:function(...e){return Vt(t.apply(po(this),e))}}function Xm(t){return typeof t=="function"?Jm(t):(t instanceof IDBTransaction&&Qm(t),Hm(t,Km())?new Proxy(t,Ko):t)}function Vt(t){if(t instanceof IDBRequest)return Wm(t);if(fo.has(t))return fo.get(t);const e=Xm(t);return e!==t&&(fo.set(t,e),Ra.set(e,t)),e}const po=t=>Ra.get(t);function Zm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Vt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ey=["get","getKey","getAll","getAllKeys","count"],ty=["put","add","delete","clear"],go=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(go.get(e))return go.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ty.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ey.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return go.set(e,i),i}Ym(t=>({...t,get:(e,n,r)=>il(e,n)||t.get(e,n,r),has:(e,n)=>!!il(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ry(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ry(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Go="@firebase/app",ol="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new ki("@firebase/app"),sy="@firebase/app-compat",iy="@firebase/analytics-compat",oy="@firebase/analytics",ay="@firebase/app-check-compat",cy="@firebase/app-check",ly="@firebase/auth",uy="@firebase/auth-compat",hy="@firebase/database",dy="@firebase/database-compat",fy="@firebase/functions",py="@firebase/functions-compat",gy="@firebase/installations",my="@firebase/installations-compat",yy="@firebase/messaging",_y="@firebase/messaging-compat",vy="@firebase/performance",wy="@firebase/performance-compat",Iy="@firebase/remote-config",Ey="@firebase/remote-config-compat",by="@firebase/storage",Ty="@firebase/storage-compat",ky="@firebase/firestore",Sy="@firebase/firestore-compat",Ay="firebase",Cy="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="[DEFAULT]",Ry={[Go]:"fire-core",[sy]:"fire-core-compat",[oy]:"fire-analytics",[iy]:"fire-analytics-compat",[cy]:"fire-app-check",[ay]:"fire-app-check-compat",[ly]:"fire-auth",[uy]:"fire-auth-compat",[hy]:"fire-rtdb",[dy]:"fire-rtdb-compat",[fy]:"fire-fn",[py]:"fire-fn-compat",[gy]:"fire-iid",[my]:"fire-iid-compat",[yy]:"fire-fcm",[_y]:"fire-fcm-compat",[vy]:"fire-perf",[wy]:"fire-perf-compat",[Iy]:"fire-rc",[Ey]:"fire-rc-compat",[by]:"fire-gcs",[Ty]:"fire-gcs-compat",[ky]:"fire-fst",[Sy]:"fire-fst-compat","fire-js":"fire-js",[Ay]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Map,Qo=new Map;function Dy(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(Qo.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Qo.set(e,t);for(const n of Qs.values())Dy(n,t);return!0}function bn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new En("app","Firebase",Ny);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=Cy;function Wh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(n||(n=Bh()),!n)throw Bt.create("no-options");const i=Qs.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const o=new Vm(s);for(const c of Qo.values())o.addComponent(c);const a=new Oy(n,r,o);return Qs.set(s,a),a}function Da(t=Wo){const e=Qs.get(t);if(!e&&t===Wo&&Bh())return Wh();if(!e)throw Bt.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=Ry[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}yt(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Py="firebase-heartbeat-database",$y=1,Mr="firebase-heartbeat-store";let mo=null;function Qh(){return mo||(mo=Zm(Py,$y,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mr)}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),mo}async function My(t){try{return await(await Qh()).transaction(Mr).objectStore(Mr).get(Yh(t))}catch(e){if(e instanceof at)pn.warn(e.message);else{const n=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function al(t,e){try{const r=(await Qh()).transaction(Mr,"readwrite");await r.objectStore(Mr).put(e,Yh(t)),await r.done}catch(n){if(n instanceof at)pn.warn(n.message);else{const r=Bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Yh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ly=1024,Fy=30*24*60*60*1e3;class Uy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cl(),{heartbeatsToSend:n,unsentEntries:r}=xy(this._heartbeatsCache.heartbeats),s=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cl(){return new Date().toISOString().substring(0,10)}function xy(t,e=Ly){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ll(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ll(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?Hh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await My(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ll(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){yt(new st("platform-logger",e=>new ny(e),"PRIVATE")),yt(new st("heartbeat",e=>new Uy(e),"PRIVATE")),et(Go,ol,t),et(Go,ol,"esm2017"),et("fire-js","")}By("");function Na(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jy=Jh,Xh=new En("auth","Firebase",Jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new ki("@firebase/auth");function qy(t,...e){Ys.logLevel<=ae.WARN&&Ys.warn(`Auth (${rr}): ${t}`,...e)}function Ls(t,...e){Ys.logLevel<=ae.ERROR&&Ys.error(`Auth (${rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,...e){throw Oa(t,...e)}function ft(t,...e){return Oa(t,...e)}function Zh(t,e,n){const r=Object.assign(Object.assign({},jy()),{[e]:n});return new En("auth","Firebase",r).create(e,{appName:t.name})}function zy(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(t,"argument-error"),Zh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xh.create(t,...e)}function H(t,e,...n){if(!t)throw Oa(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ls(e),new Error(e)}function Rt(t,e){t||Et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hy(){return ul()==="http:"||ul()==="https:"}function ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hy()||qh()||"connection"in navigator)?navigator.onLine:!0}function Gy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=Em()||bm()}get(){return Ky()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new rs(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,s={}){return td(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ns(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ed.fetch()(nd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function td(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wy),e);try{const s=new Yy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ks(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ks(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ks(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Zh(t,u,l);tt(t,u)}}catch(s){if(s instanceof at)throw s;tt(t,"network-request-failed",{message:String(s)})}}async function ss(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Pa(t.config,s):`${t.config.apiScheme}://${s}`}class Yy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),Qy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ks(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ft(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Xy(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zy(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=$a(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:kr(yo(s.auth_time)),issuedAtTime:kr(yo(s.iat)),expirationTime:kr(yo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yo(t){return Number(t)*1e3}function $a(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=xh(n);return s?JSON.parse(s):(Ls("Failed to decode base64 JWT payload"),null)}catch(s){return Ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function e_(t){const e=$a(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&t_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function t_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Lr(t,Xy(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?i_(i.providerUserInfo):[],a=s_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function r_(t){const e=Se(t);await Js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function i_(t){return t.map(e=>{var{providerId:n}=e,r=Na(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e){const n=await td(t,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nd(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ed.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await o_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Na(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zy(this,e)}reload(){return r_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lr(this,Jy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:k,isAnonymous:N,providerData:D,stsTokenManager:W}=n;H(O&&W,e,"internal-error");const _e=Fr.fromJSON(this.name,W);H(typeof O=="string",e,"internal-error"),Mt(h,e.name),Mt(d,e.name),H(typeof k=="boolean",e,"internal-error"),H(typeof N=="boolean",e,"internal-error"),Mt(p,e.name),Mt(m,e.name),Mt(g,e.name),Mt(_,e.name),Mt(E,e.name),Mt(I,e.name);const $=new ln({uid:O,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:N,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:_e,createdAt:E,lastLoginAt:I});return D&&Array.isArray(D)&&($.providerData=D.map(q=>Object.assign({},q))),_&&($._redirectEventId=_),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fr;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Js(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function bt(t){Rt(t instanceof Function,"Expected a class definition");let e=hl.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sd.type="NONE";const dl=sd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e,n){return`firebase:${t}:${e}:${n}`}class Bn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bn(bt(dl),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||bt(dl);const o=Fs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ln._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Bn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ld(e))return"Blackberry";if(ud(e))return"Webos";if(Ma(e))return"Safari";if((e.includes("chrome/")||od(e))&&!e.includes("edge/"))return"Chrome";if(cd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function id(t=qe()){return/firefox\//i.test(t)}function Ma(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function od(t=qe()){return/crios\//i.test(t)}function ad(t=qe()){return/iemobile/i.test(t)}function cd(t=qe()){return/android/i.test(t)}function ld(t=qe()){return/blackberry/i.test(t)}function ud(t=qe()){return/webos/i.test(t)}function Si(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a_(t=qe()){var e;return Si(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c_(){return Tm()&&document.documentMode===10}function hd(t=qe()){return Si(t)||cd(t)||ud(t)||ld(t)||/windows phone/i.test(t)||ad(t)}function l_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e=[]){let n;switch(t){case"Browser":n=fl(qe());break;case"Worker":n=`${fl(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}async function fd(t,e){return ir(t,"GET","/v2/recaptchaConfig",sr(t,e))}function pl(t){return t!==void 0&&t.enterprise!==void 0}class pd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ft("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",u_().appendChild(r)})}function h_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const d_="https://www.google.com/recaptcha/enterprise.js?render=",f_="recaptcha-enterprise",p_="NO_RECAPTCHA";class md{constructor(e){this.type=f_,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{fd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new pd(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;pl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(p_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&pl(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gd(d_+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xs(t,e,n,r=!1){const s=new md(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class g_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gl(this),this.idTokenSubscription=new gl(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Js(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}async initializeRecaptchaConfig(){const e=await fd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new pd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new md(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return Se(t)}class gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dm(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e){const n=bn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;tt(s,"already-initialized")}return n.initialize({options:e})}function __(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function v_(t,e,n){const r=Tn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yd(e),{host:o,port:a}=w_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||I_()}function yd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function w_(t){const e=yd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ml(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ml(o)}}}function ml(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function E_(t,e){return ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e){return ss(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function T_(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends La{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ur(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ur(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Xs(e,r,"signInWithPassword");return _o(e,s)}else return _o(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Xs(e,r,"signInWithPassword");return _o(e,i)}else return Promise.reject(s)});case"emailLink":return b_(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return E_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return T_(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="http://localhost";class gn extends La{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Na(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jn(e,n)}buildRequest(){const e={requestUri:k_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ns(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A_(t){const e=yr(_r(t)).link,n=e?yr(_r(e)).deep_link_id:null,r=yr(_r(t)).deep_link_id;return(r?yr(_r(r)).link:null)||r||n||e||t}class Fa{constructor(e){var n,r,s,i,o,a;const c=yr(_r(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=S_((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=A_(e);try{return new Fa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(e,n){return Ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fa.parseLink(n);return H(r,"argument-error"),Ur._fromEmailAndCode(e,r.code,r.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Ua{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends is{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends is{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends is{constructor(){super("twitter.com")}static credential(e,n){return gn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e){return ss(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=yl(r);return new mn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yl(r);return new mn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends at{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zs(e,n,r,s)}}function _d(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zs._fromErrorAndOperation(t,i,e,r):i})}async function C_(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Lr(t,_d(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=$a(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),mn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(t,e,n=!1){const r="signIn",s=await _d(t,r,e),i=await mn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function D_(t,e){return vd(Tn(t),e)}async function N_(t,e,n){var r;const s=Tn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Xs(s,i,"signUpPassword");o=vo(s,l)}else o=vo(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Xs(s,i,"signUpPassword");return vo(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await mn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function O_(t,e,n){return D_(Se(t),or.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e){return Se(t).setPersistence(e)}function $_(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function M_(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function wd(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function L_(t){return Se(t).signOut()}const ei="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ei,"1"),this.storage.removeItem(ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){const t=qe();return Ma(t)||Si(t)}const U_=1e3,x_=10;class Ed extends Id{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=F_()&&l_(),this.fallbackToPolling=hd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);c_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,x_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},U_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ed.type="LOCAL";const bd=Ed;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends Id{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Td.type="SESSION";const kd=Td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ai(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await V_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ai.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function j_(t){pt().location.href=t}/**
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
 */function Sd(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function q_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function H_(){return Sd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="firebaseLocalStorageDb",K_=1,ti="firebaseLocalStorage",Cd="fbase_key";class os{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ci(t,e){return t.transaction([ti],e?"readwrite":"readonly").objectStore(ti)}function G_(){const t=indexedDB.deleteDatabase(Ad);return new os(t).toPromise()}function Jo(){const t=indexedDB.open(Ad,K_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ti,{keyPath:Cd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ti)?e(r):(r.close(),await G_(),e(await Jo()))})})}async function _l(t,e,n){const r=Ci(t,!0).put({[Cd]:e,value:n});return new os(r).toPromise()}async function W_(t,e){const n=Ci(t,!1).get(e),r=await new os(n).toPromise();return r===void 0?null:r.value}function vl(t,e){const n=Ci(t,!0).delete(e);return new os(n).toPromise()}const Q_=800,Y_=3;class Rd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Y_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ai._getInstance(H_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await q_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await _l(e,ei,"1"),await vl(e,ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_l(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>W_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ci(s,!1).getAll();return new os(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rd.type="LOCAL";const J_=Rd;new rs(3e4,6e4);/**
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
 */function Dd(t,e){return e?bt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends La{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function X_(t){return vd(t.auth,new Va(t),t.bypassAuthState)}function Z_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),R_(n,new Va(t),t.bypassAuthState)}async function ev(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),C_(n,new Va(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X_;case"linkViaPopup":case"linkViaRedirect":return ev;case"reauthViaPopup":case"reauthViaRedirect":return Z_;default:tt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new rs(2e3,1e4);async function nv(t,e,n){const r=Tn(t);zy(t,e,Ua);const s=Dd(r,n);return new rn(r,"signInViaPopup",e,s).executeNotNull()}class rn extends Nd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="pendingRedirect",Us=new Map;class sv extends Nd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Us.get(this.auth._key());if(!e){try{const r=await iv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Us.set(this.auth._key(),e)}return this.bypassAuthState||Us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iv(t,e){const n=cv(e),r=av(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ov(t,e){Us.set(t._key(),e)}function av(t){return bt(t._redirectPersistence)}function cv(t){return Fs(rv,t.config.apiKey,t.name)}async function lv(t,e,n=!1){const r=Tn(t),s=Dd(r,e),o=await new sv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=10*60*1e3;class hv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Od(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uv&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Od({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Od(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gv=/^https?/;async function mv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fv(t);for(const n of e)try{if(yv(n))return}catch{}tt(t,"unauthorized-domain")}function yv(t){const e=Yo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gv.test(n))return!1;if(pv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _v=new rs(3e4,6e4);function Il(){const t=pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vv(t){return new Promise((e,n)=>{var r,s,i;function o(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),n(ft(t,"network-request-failed"))},timeout:_v.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{const a=h_("iframefcb");return pt()[a]=()=>{gapi.load?o():n(ft(t,"network-request-failed"))},gd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xs=null,e})}let xs=null;function wv(t){return xs=xs||vv(t),xs}/**
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
 */const Iv=new rs(5e3,15e3),Ev="__/auth/iframe",bv="emulator/auth/iframe",Tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sv(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pa(e,bv):`https://${t.config.authDomain}/${Ev}`,r={apiKey:e.apiKey,appName:t.name,v:rr},s=kv.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ns(r).slice(1)}`}async function Av(t){const e=await wv(t),n=pt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Sv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ft(t,"network-request-failed"),a=pt().setTimeout(()=>{i(o)},Iv.get());function c(){pt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Cv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rv=500,Dv=600,Nv="_blank",Ov="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pv(t,e,n,r=Rv,s=Dv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=qe().toLowerCase();n&&(a=od(l)?Nv:n),id(l)&&(e=e||Ov,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(a_(l)&&a!=="_self")return $v(e||"",a),new El(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new El(h)}function $v(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mv="__/auth/handler",Lv="emulator/auth/handler",Fv=encodeURIComponent("fac");async function bl(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rr,eventId:s};if(e instanceof Ua){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof is){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Fv}=${encodeURIComponent(c)}`:"";return`${Uv(t)}?${ns(a).slice(1)}${l}`}function Uv({config:t}){return t.emulator?Pa(t,Lv):`https://${t.authDomain}/${Mv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="webStorageSupport";class xv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kd,this._completeRedirectFn=lv,this._overrideRedirectResult=ov}async _openPopup(e,n,r,s){var i;Rt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bl(e,n,r,Yo(),s);return Pv(e,o,xa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bl(e,n,r,Yo(),s);return j_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Av(e),r=new hv(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wo,{type:wo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wo];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hd()||Ma()||Si()}}const Vv=xv;var Tl="@firebase/auth",kl="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qv(t){yt(new st("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(t)},l=new m_(r,s,i,c);return __(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yt(new st("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new Bv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Tl,kl,jv(t)),et(Tl,kl,"esm2017")}/**
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
 */const zv=5*60,Hv=jh("authIdTokenMaxAge")||zv;let Sl=null;const Kv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hv)return;const s=n==null?void 0:n.token;Sl!==s&&(Sl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gv(t=Da()){const e=bn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=y_(t,{popupRedirectResolver:Vv,persistence:[J_,bd,kd]}),r=jh("authTokenSyncURL");if(r){const i=Kv(r);M_(n,i,()=>i(n.currentUser)),$_(n,o=>i(o))}const s=Vh("auth");return s&&v_(n,`http://${s}`),n}qv("Browser");const Wv=(t,e)=>e.some(n=>t instanceof n);let Al,Cl;function Qv(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pd=new WeakMap,Xo=new WeakMap,$d=new WeakMap,Io=new WeakMap,Ba=new WeakMap;function Jv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pd.set(n,t)}).catch(()=>{}),Ba.set(e,t),e}function Xv(t){if(Xo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xo.set(t,e)}let Zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$d.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zv(t){Zo=t(Zo)}function e0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eo(this),e,...n);return $d.set(r,e.sort?e.sort():[e]),jt(r)}:Yv().includes(t)?function(...e){return t.apply(Eo(this),e),jt(Pd.get(this))}:function(...e){return jt(t.apply(Eo(this),e))}}function t0(t){return typeof t=="function"?e0(t):(t instanceof IDBTransaction&&Xv(t),Wv(t,Qv())?new Proxy(t,Zo):t)}function jt(t){if(t instanceof IDBRequest)return Jv(t);if(Io.has(t))return Io.get(t);const e=t0(t);return e!==t&&(Io.set(t,e),Ba.set(e,t)),e}const Eo=t=>Ba.get(t);function n0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const r0=["get","getKey","getAll","getAllKeys","count"],s0=["put","add","delete","clear"],bo=new Map;function Rl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bo.get(e))return bo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=s0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||r0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return bo.set(e,i),i}Zv(t=>({...t,get:(e,n,r)=>Rl(e,n)||t.get(e,n,r),has:(e,n)=>!!Rl(e,n)||t.has(e,n)}));const Md="@firebase/installations",ja="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=1e4,Fd=`w:${ja}`,Ud="FIS_v2",i0="https://firebaseinstallations.googleapis.com/v1",o0=60*60*1e3,a0="installations",c0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},yn=new En(a0,c0,l0);function xd(t){return t instanceof at&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd({projectId:t}){return`${i0}/projects/${t}/installations`}function Bd(t){return{token:t.token,requestStatus:2,expiresIn:h0(t.expiresIn),creationTime:Date.now()}}async function jd(t,e){const r=(await e.json()).error;return yn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function u0(t,{refreshToken:e}){const n=qd(t);return n.append("Authorization",d0(e)),n}async function zd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function h0(t){return Number(t.replace("s","000"))}function d0(t){return`${Ud} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Vd(t),s=qd(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Ud,appId:t.appId,sdkVersion:Fd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await zd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Bd(l.authToken)}}else throw await jd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=/^[cdef][\w-]{21}$/,ea="";function m0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=y0(t);return g0.test(n)?n:ea}catch{return ea}}function y0(t){return p0(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;function Gd(t,e){const n=Ri(t);Wd(n,e),_0(n,e)}function Wd(t,e){const n=Kd.get(t);if(n)for(const r of n)r(e)}function _0(t,e){const n=v0();n&&n.postMessage({key:t,fid:e}),w0()}let sn=null;function v0(){return!sn&&"BroadcastChannel"in self&&(sn=new BroadcastChannel("[Firebase] FID Change"),sn.onmessage=t=>{Wd(t.data.key,t.data.fid)}),sn}function w0(){Kd.size===0&&sn&&(sn.close(),sn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="firebase-installations-database",E0=1,_n="firebase-installations-store";let To=null;function qa(){return To||(To=n0(I0,E0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_n)}}})),To}async function ni(t,e){const n=Ri(t),s=(await qa()).transaction(_n,"readwrite"),i=s.objectStore(_n),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Gd(t,e.fid),e}async function Qd(t){const e=Ri(t),r=(await qa()).transaction(_n,"readwrite");await r.objectStore(_n).delete(e),await r.done}async function Di(t,e){const n=Ri(t),s=(await qa()).transaction(_n,"readwrite"),i=s.objectStore(_n),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Gd(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t){let e;const n=await Di(t.appConfig,r=>{const s=b0(r),i=T0(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ea?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function b0(t){const e=t||{fid:m0(),registrationStatus:0};return Yd(e)}function T0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(yn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=k0(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S0(t)}:{installationEntry:e}}async function k0(t,e){try{const n=await f0(t,e);return ni(t.appConfig,n)}catch(n){throw xd(n)&&n.customData.serverCode===409?await Qd(t.appConfig):await ni(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function S0(t){let e=await Dl(t.appConfig);for(;e.registrationStatus===1;)await Hd(100),e=await Dl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await za(t);return r||n}return e}function Dl(t){return Di(t,e=>{if(!e)throw yn.create("installation-not-found");return Yd(e)})}function Yd(t){return A0(t)?{fid:t.fid,registrationStatus:0}:t}function A0(t){return t.registrationStatus===1&&t.registrationTime+Ld<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0({appConfig:t,heartbeatServiceProvider:e},n){const r=R0(t,n),s=u0(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Fd,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await zd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Bd(l)}else throw await jd("Generate Auth Token",c)}function R0(t,{fid:e}){return`${Vd(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t,e=!1){let n;const r=await Di(t.appConfig,i=>{if(!Jd(i))throw yn.create("not-registered");const o=i.authToken;if(!e&&O0(o))return i;if(o.requestStatus===1)return n=D0(t,e),i;{if(!navigator.onLine)throw yn.create("app-offline");const a=$0(i);return n=N0(t,a),a}});return n?await n:r.authToken}async function D0(t,e){let n=await Nl(t.appConfig);for(;n.authToken.requestStatus===1;)await Hd(100),n=await Nl(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ha(t,e):r}function Nl(t){return Di(t,e=>{if(!Jd(e))throw yn.create("not-registered");const n=e.authToken;return M0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function N0(t,e){try{const n=await C0(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ni(t.appConfig,r),n}catch(n){if(xd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qd(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ni(t.appConfig,r)}throw n}}function Jd(t){return t!==void 0&&t.registrationStatus===2}function O0(t){return t.requestStatus===2&&!P0(t)}function P0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+o0}function $0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function M0(t){return t.requestStatus===1&&t.requestTime+Ld<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t){const e=t,{installationEntry:n,registrationPromise:r}=await za(e);return r?r.catch(console.error):Ha(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t,e=!1){const n=t;return await U0(n),(await Ha(n,e)).token}async function U0(t){const{registrationPromise:e}=await za(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){if(!t||!t.options)throw ko("App Configuration");if(!t.name)throw ko("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ko(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ko(t){return yn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="installations",V0="installations-internal",B0=t=>{const e=t.getProvider("app").getImmediate(),n=x0(e),r=bn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},j0=t=>{const e=t.getProvider("app").getImmediate(),n=bn(e,Xd).getImmediate();return{getId:()=>L0(n),getToken:s=>F0(n,s)}};function q0(){yt(new st(Xd,B0,"PUBLIC")),yt(new st(V0,j0,"PRIVATE"))}q0();et(Md,ja);et(Md,ja,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="analytics",z0="firebase_id",H0="origin",K0=60*1e3,G0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ka="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new ki("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new En("analytics","Analytics",W0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){if(!t.startsWith(Ka)){const e=Ye.create("invalid-gtag-resource",{gtagURL:t});return Ge.warn(e.message),""}return t}function Zd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Y0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function J0(t,e){const n=Y0("firebase-js-sdk-policy",{createScriptURL:Q0}),r=document.createElement("script"),s=`${Ka}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function X0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Z0(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Zd(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ge.error(a)}t("config",s,i)}async function ew(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Zd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ge.error(i)}}function tw(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await ew(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Z0(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ge.error(a)}}return s}function nw(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=tw(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function rw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ka)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=30,iw=1e3;class ow{constructor(e={},n=iw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ef=new ow;function aw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cw(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:aw(r)},i=G0.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lw(t,e=ef,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ye.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new dw;return setTimeout(async()=>{a.abort()},n!==void 0?n:K0),tf({appId:r,apiKey:s,measurementId:i},o,a,e)}async function tf(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=ef){var i;const{appId:o,measurementId:a}=t;try{await uw(r,e)}catch(c){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await cw(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!hw(l)){if(s.deleteThrottleMetadata(o),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?nl(n,s.intervalMillis,sw):nl(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),Ge.debug(`Calling attemptFetch again in ${u} millis`),tf(t,h,r,s)}}function uw(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hw(t){if(!(t instanceof at)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class dw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fw(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(){if(zh())try{await Hh()}catch(t){return Ge.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ge.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gw(t,e,n,r,s,i,o){var a;const c=lw(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ge.error(p)),e.push(c);const l=pw().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);rw(i)||J0(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[H0]="firebase",d.update=!0,h!=null&&(d[z0]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.app=e}_delete(){return delete Sr[this.app.options.appId],Promise.resolve()}}let Sr={},Ol=[];const Pl={};let So="dataLayer",yw="gtag",$l,nf,Ml=!1;function _w(){const t=[];if(qh()&&t.push("This is a browser extension environment."),km()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function vw(t,e,n){_w();const r=t.options.appId;if(!r)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(Sr[r]!=null)throw Ye.create("already-exists",{id:r});if(!Ml){X0(So);const{wrappedGtag:i,gtagCore:o}=nw(Sr,Ol,Pl,So,yw);nf=i,$l=o,Ml=!0}return Sr[r]=gw(t,Ol,Pl,e,$l,So,n),new mw(t)}function ww(t=Da()){t=Se(t);const e=bn(t,ri);return e.isInitialized()?e.getImmediate():Iw(t)}function Iw(t,e={}){const n=bn(t,ri);if(n.isInitialized()){const s=n.getImmediate();if($r(e,n.getOptions()))return s;throw Ye.create("already-initialized")}return n.initialize({options:e})}function Ew(t,e,n,r){t=Se(t),fw(nf,Sr[t.app.options.appId],e,n,r).catch(s=>Ge.error(s))}const Ll="@firebase/analytics",Fl="0.10.0";function bw(){yt(new st(ri,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return vw(r,s,n)},"PUBLIC")),yt(new st("analytics-internal",t,"PRIVATE")),et(Ll,Fl),et(Ll,Fl,"esm2017");function t(e){try{const n=e.getProvider(ri).getImmediate();return{logEvent:(r,s,i)=>Ew(n,r,s,i)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}bw();var Tw="firebase",kw="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Tw,kw,"app");var Sw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Ga=Ga||{},Q=Sw||self;function Ni(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function as(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Aw(t){return Object.prototype.hasOwnProperty.call(t,Ao)&&t[Ao]||(t[Ao]=++Cw)}var Ao="closure_uid_"+(1e9*Math.random()>>>0),Cw=0;function Rw(t,e,n){return t.call.apply(t.bind,arguments)}function Dw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=Rw:Ve=Dw,Ve.apply(null,arguments)}function Ss(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Qt(){this.s=this.s,this.o=this.o}var Nw=0;Qt.prototype.s=!1;Qt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nw!=0)&&Aw(this)};Qt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wa(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ul(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ni(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Ow=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function xr(t){return/^[\s\xa0]*$/.test(t)}function Oi(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function lt(t){return Oi().indexOf(t)!=-1}function Qa(t){return Qa[" "](t),t}Qa[" "]=function(){};function Pw(t,e){var n=k1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $w=lt("Opera"),Gn=lt("Trident")||lt("MSIE"),sf=lt("Edge"),ta=sf||Gn,of=lt("Gecko")&&!(Oi().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),Mw=Oi().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function af(){var t=Q.document;return t?t.documentMode:void 0}var na;e:{var Co="",Ro=function(){var t=Oi();if(of)return/rv:([^\);]+)(\)|;)/.exec(t);if(sf)return/Edge\/([\d\.]+)/.exec(t);if(Gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Mw)return/WebKit\/(\S+)/.exec(t);if($w)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ro&&(Co=Ro?Ro[1]:""),Gn){var Do=af();if(Do!=null&&Do>parseFloat(Co)){na=String(Do);break e}}na=Co}var ra;if(Q.document&&Gn){var xl=af();ra=xl||parseInt(na,10)||void 0}else ra=void 0;var Lw=ra;function Vr(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(of){e:{try{Qa(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Fw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vr.$.h.call(this)}}De(Vr,Be);var Fw={2:"touch",3:"pen",4:"mouse"};Vr.prototype.h=function(){Vr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cs="closure_listenable_"+(1e6*Math.random()|0),Uw=0;function xw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Uw,this.fa=this.ia=!1}function Pi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ya(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Vw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function cf(t){const e={};for(const n in t)e[n]=t[n];return e}const Vl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lf(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Vl.length;i++)n=Vl[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $i(t){this.src=t,this.g={},this.h=0}$i.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ia(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function sa(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=rf(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Pi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ia(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ja="closure_lm_"+(1e6*Math.random()|0),No={};function uf(t,e,n,r,s){if(r&&r.once)return df(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)uf(t,e[i],n,r,s);return null}return n=ec(n),t&&t[cs]?t.O(e,n,as(r)?!!r.capture:!!r,s):hf(t,e,n,!1,r,s)}function hf(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=as(s)?!!s.capture:!!s,a=Za(t);if(a||(t[Ja]=a=new $i(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Bw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ow||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(pf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Bw(){function t(n){return e.call(t.src,t.listener,n)}const e=jw;return t}function df(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)df(t,e[i],n,r,s);return null}return n=ec(n),t&&t[cs]?t.P(e,n,as(r)?!!r.capture:!!r,s):hf(t,e,n,!0,r,s)}function ff(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ff(t,e[i],n,r,s);else r=as(r)?!!r.capture:!!r,n=ec(n),t&&t[cs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ia(i,n,r,s),-1<n&&(Pi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Za(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ia(e,n,r,s)),(n=-1<t?e[t]:null)&&Xa(n))}function Xa(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[cs])sa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Za(e))?(sa(n,t),n.h==0&&(n.src=null,e[Ja]=null)):Pi(t)}}}function pf(t){return t in No?No[t]:No[t]="on"+t}function jw(t,e){if(t.fa)t=!0;else{e=new Vr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xa(t),t=n.call(r,e)}return t}function Za(t){return t=t[Ja],t instanceof $i?t:null}var Oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(t){return typeof t=="function"?t:(t[Oo]||(t[Oo]=function(e){return t.handleEvent(e)}),t[Oo])}function Ce(){Qt.call(this),this.i=new $i(this),this.S=this,this.J=null}De(Ce,Qt);Ce.prototype[cs]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){ff(this,t,e,n,r)};function Me(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var s=e;e=new Be(r,t),lf(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=As(o,r,!0,e)&&s}if(o=e.g=t,s=As(o,r,!0,e)&&s,s=As(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=As(o,r,!1,e)&&s}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Pi(n[r]);delete t.g[e],t.h--}}this.J=null};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function As(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&sa(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var tc=Q.JSON.stringify;class qw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zw(){var t=nc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Hw{constructor(){this.h=this.g=null}add(e,n){const r=gf.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gf=new qw(()=>new Kw,t=>t.reset());class Kw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gw(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ww(t){Q.setTimeout(()=>{throw t},0)}let Br,jr=!1,nc=new Hw,mf=()=>{const t=Q.Promise.resolve(void 0);Br=()=>{t.then(Qw)}};var Qw=()=>{for(var t;t=zw();){try{t.h.call(t.g)}catch(n){Ww(n)}var e=gf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jr=!1};function Mi(t,e){Ce.call(this),this.h=t||1,this.g=e||Q,this.j=Ve(this.qb,this),this.l=Date.now()}De(Mi,Ce);P=Mi.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(rc(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Mi.$.N.call(this),rc(this),delete this.g};function sc(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function yf(t){t.g=sc(()=>{t.g=null,t.i&&(t.i=!1,yf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Yw extends Qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yf(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(t){Qt.call(this),this.h=t,this.g={}}De(qr,Qt);var Bl=[];function _f(t,e,n,r){Array.isArray(n)||(n&&(Bl[0]=n.toString()),n=Bl);for(var s=0;s<n.length;s++){var i=uf(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function vf(t){Ya(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xa(e)},t),t.g={}}qr.prototype.N=function(){qr.$.N.call(this),vf(this)};qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Li(){this.g=!0}Li.prototype.Ea=function(){this.g=!1};function Jw(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Xw(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function xn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+e1(t,n)+(r?" "+r:"")})}function Zw(t,e){t.info(function(){return"TIMEOUT: "+e})}Li.prototype.info=function(){};function e1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return tc(n)}catch{return e}}var kn={},jl=null;function Fi(){return jl=jl||new Ce}kn.Ta="serverreachability";function wf(t){Be.call(this,kn.Ta,t)}De(wf,Be);function zr(t){const e=Fi();Me(e,new wf(e))}kn.STAT_EVENT="statevent";function If(t,e){Be.call(this,kn.STAT_EVENT,t),this.stat=e}De(If,Be);function Ke(t){const e=Fi();Me(e,new If(e,t))}kn.Ua="timingevent";function Ef(t,e){Be.call(this,kn.Ua,t),this.size=e}De(Ef,Be);function ls(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ui={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ic(){}ic.prototype.h=null;function ql(t){return t.h||(t.h=t.i())}function Tf(){}var us={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oc(){Be.call(this,"d")}De(oc,Be);function ac(){Be.call(this,"c")}De(ac,Be);var oa;function xi(){}De(xi,ic);xi.prototype.g=function(){return new XMLHttpRequest};xi.prototype.i=function(){return{}};oa=new xi;function hs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qr(this),this.P=t1,t=ta?125:void 0,this.V=new Mi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var t1=45e3,aa={},si={};P=hs.prototype;P.setTimeout=function(t){this.P=t};function ca(t,e,n){t.L=1,t.v=Bi(Dt(e)),t.s=n,t.S=!0,Sf(t,null)}function Sf(t,e){t.G=Date.now(),ds(t),t.A=Dt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),$f(n.i,"t",r),t.C=0,n=t.l.J,t.h=new kf,t.g=tp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Yw(Ve(t.Pa,t,t.g),t.O)),_f(t.U,t.g,"readystatechange",t.nb),e=t.I?cf(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),zr(),Jw(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&ht(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=ht(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ta||this.g&&(this.h.h||this.g.ja()||Gl(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?zr(3):zr(2)),Vi(this);var n=this.g.da();this.ca=n;t:if(Af(this)){var r=Gl(this.g);t="";var s=r.length,i=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Ar(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Xw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xr(a)){var l=a;break t}}l=null}if(n=l)xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,n);else{this.i=!1,this.o=3,Ke(12),on(this),Ar(this);break e}}this.S?(Cf(this,u,o),ta&&this.i&&u==3&&(_f(this.U,this.V,"tick",this.mb),this.V.start())):(xn(this.j,this.m,o,null),la(this,o)),u==4&&on(this),this.i&&!this.J&&(u==4?Jf(this.l,this):(this.i=!1,ds(this)))}else E1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),on(this),Ar(this)}}}catch{}finally{}};function Af(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Cf(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=n1(t,n),s==si){e==4&&(t.o=4,Ke(14),r=!1),xn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==aa){t.o=4,Ke(15),xn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xn(t.j,t.m,s,null),la(t,s);Af(t)&&s!=si&&s!=aa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),fc(e),e.M=!0,Ke(11))):(xn(t.j,t.m,n,"[Invalid Chunked Response]"),on(t),Ar(t))}P.mb=function(){if(this.g){var t=ht(this.g),e=this.g.ja();this.C<e.length&&(Vi(this),Cf(this,t,e),this.i&&t!=4&&ds(this))}};function n1(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?si:(n=Number(e.substring(n,r)),isNaN(n)?aa:(r+=1,r+n>e.length?si:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,on(this)};function ds(t){t.Y=Date.now()+t.P,Rf(t,t.P)}function Rf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ls(Ve(t.lb,t),e)}function Vi(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Zw(this.j,this.A),this.L!=2&&(zr(),Ke(17)),on(this),this.o=2,Ar(this)):Rf(this,this.Y-t)};function Ar(t){t.l.H==0||t.J||Jf(t.l,t)}function on(t){Vi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,rc(t.V),vf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function la(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ua(n.i,t))){if(!t.K&&ua(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ai(n),zi(n);else break e;dc(n),Ke(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ls(Ve(n.ib,n),6e3));if(1>=Ff(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else an(n,11)}else if((t.K||n.g==t)&&ai(n),!xr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(cc(i,i.h),i.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,ge(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ep(r,r.J?r.pa:null,r.Y),o.K){Uf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Vi(a),ds(a)),r.g=o}else Qf(r);0<n.j.length&&Hi(n)}else l[0]!="stop"&&l[0]!="close"||an(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?an(n,7):hc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}zr(4)}catch{}}function r1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ni(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function s1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ni(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Df(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ni(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=s1(t),r=r1(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Nf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function un(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof un){this.h=t.h,ii(this,t.j),this.s=t.s,this.g=t.g,oi(this,t.m),this.l=t.l;var e=t.i,n=new Hr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zl(this,n),this.o=t.o}else t&&(e=String(t).match(Nf))?(this.h=!1,ii(this,e[1]||"",!0),this.s=vr(e[2]||""),this.g=vr(e[3]||"",!0),oi(this,e[4]),this.l=vr(e[5]||"",!0),zl(this,e[6]||"",!0),this.o=vr(e[7]||"")):(this.h=!1,this.i=new Hr(null,this.h))}un.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wr(e,Hl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wr(e,Hl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wr(n,n.charAt(0)=="/"?c1:a1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wr(n,u1)),t.join("")};function Dt(t){return new un(t)}function ii(t,e,n){t.j=n?vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zl(t,e,n){e instanceof Hr?(t.i=e,h1(t.i,t.h)):(n||(e=wr(e,l1)),t.i=new Hr(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function Bi(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,o1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function o1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hl=/[#\/\?@]/g,a1=/[#\?:]/g,c1=/[#\?]/g,l1=/[#\?@]/g,u1=/#/g;function Hr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yt(t){t.g||(t.g=new Map,t.h=0,t.i&&i1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Hr.prototype;P.add=function(t,e){Yt(this),this.i=null,t=ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Of(t,e){Yt(t),e=ar(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Pf(t,e){return Yt(t),e=ar(t,e),t.g.has(e)}P.forEach=function(t,e){Yt(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};P.ta=function(){Yt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};P.Z=function(t){Yt(this);let e=[];if(typeof t=="string")Pf(this,t)&&(e=e.concat(this.g.get(ar(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Yt(this),this.i=null,t=ar(this,t),Pf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function $f(t,e,n){Of(t,e),0<n.length&&(t.i=null,t.g.set(ar(t,e),Wa(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function h1(t,e){e&&!t.j&&(Yt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Of(this,r),$f(this,s,n))},t)),t.j=e}var d1=class{constructor(t,e){this.g=t,this.map=e}};function Mf(t){this.l=t||f1,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f1=10;function Lf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ff(t){return t.h?1:t.g?t.g.size:0}function ua(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cc(t,e){t.g?t.g.add(e):t.h=e}function Uf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Mf.prototype.cancel=function(){if(this.i=xf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Wa(t.i)}var p1=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function g1(){this.g=new p1}function m1(t,e,n){const r=n||"";try{Df(t,function(s,i){let o=s;as(s)&&(o=tc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function y1(t,e){const n=new Li;if(Q.Image){const r=new Image;r.onload=Ss(Cs,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ss(Cs,n,r,"TestLoadImage: error",!1,e),r.onabort=Ss(Cs,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ss(Cs,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Cs(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function fs(t){this.l=t.fc||null,this.j=t.ob||!1}De(fs,ic);fs.prototype.g=function(){return new ji(this.l,this.j)};fs.prototype.i=function(t){return function(){return t}}({});function ji(t,e){Ce.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=lc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(ji,Ce);var lc=0;P=ji.prototype;P.open=function(t,e){if(this.readyState!=lc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Kr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=lc};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Kr(this)),this.g&&(this.readyState=3,Kr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Vf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ps(this):Kr(this),this.readyState==3&&Vf(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ps(this))};P.Ya=function(t){this.g&&(this.response=t,ps(this))};P.ka=function(){this.g&&ps(this)};function ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Kr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _1=Q.JSON.parse;function Ie(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Bf,this.L=this.M=!1}De(Ie,Ce);var Bf="",v1=/^https?$/i,w1=["POST","PUT"];P=Ie.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():oa.g(),this.C=this.u?ql(this.u):ql(oa),this.g.onreadystatechange=Ve(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Kl(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=rf(w1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zf(this),0<this.B&&((this.L=I1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.ua,this)):this.A=sc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kl(this,i)}};function I1(t){return Gn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Ga<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Kl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jf(t),qi(t)}function jf(t){t.F||(t.F=!0,Me(t,"complete"),Me(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),qi(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qi(this,!0)),Ie.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?qf(this):this.kb())};P.kb=function(){qf(this)};function qf(t){if(t.h&&typeof Ga<"u"&&(!t.C[1]||ht(t)!=4||t.da()!=2)){if(t.v&&ht(t)==4)sc(t.La,0,t);else if(Me(t,"readystatechange"),ht(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Nf)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!v1.test(s?s.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var i=2<ht(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",jf(t)}}finally{qi(t)}}}}function qi(t,e){if(t.g){zf(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function zf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function ht(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_1(e)}};function Gl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Bf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function E1(t){const e={};t=(t.g&&2<=ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(xr(t[r]))continue;var n=Gw(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Vw(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hf(t){let e="";return Ya(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Hf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function gr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kf(t){this.Ga=0,this.j=[],this.l=new Li,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gr("baseRetryDelayMs",5e3,t),this.hb=gr("retryDelaySeedMs",1e4,t),this.eb=gr("forwardChannelMaxRetries",2,t),this.xa=gr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Mf(t&&t.concurrentRequestLimit),this.Ja=new g1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Kf.prototype;P.ra=8;P.H=1;function hc(t){if(Gf(t),t.H==3){var e=t.W++,n=Dt(t.I);if(ge(n,"SID",t.K),ge(n,"RID",e),ge(n,"TYPE","terminate"),gs(t,n),e=new hs(t,t.l,e),e.L=2,e.v=Bi(Dt(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=tp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ds(e)}Zf(t)}function zi(t){t.g&&(fc(t),t.g.cancel(),t.g=null)}function Gf(t){zi(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ai(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Hi(t){if(!Lf(t.i)&&!t.m){t.m=!0;var e=t.Na;Br||mf(),jr||(Br(),jr=!0),nc.add(e,t),t.C=0}}function b1(t,e){return Ff(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ls(Ve(t.Na,t,e),Xf(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new hs(this,this.l,t);let i=this.s;if(this.U&&(i?(i=cf(i),lf(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Wf(this,s,e),n=Dt(this.I),ge(n,"RID",t),ge(n,"CVER",22),this.F&&ge(n,"X-HTTP-Session-Id",this.F),gs(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Hf(i)))+"&"+e:this.o&&uc(n,this.o,i)),cc(this.i,s),this.bb&&ge(n,"TYPE","init"),this.P?(ge(n,"$req",e),ge(n,"SID","null"),s.aa=!0,ca(s,n,null)):ca(s,n,e),this.H=2}}else this.H==3&&(t?Wl(this,t):this.j.length==0||Lf(this.i)||Wl(this))};function Wl(t,e){var n;e?n=e.m:n=t.W++;const r=Dt(t.I);ge(r,"SID",t.K),ge(r,"RID",n),ge(r,"AID",t.V),gs(t,r),t.o&&t.s&&uc(r,t.o,t.s),n=new hs(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Wf(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cc(t.i,n),ca(n,r,e)}function gs(t,e){t.na&&Ya(t.na,function(n,r){ge(e,r,n)}),t.h&&Df({},function(n,r){ge(e,r,n)})}function Wf(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ve(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{m1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Qf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Br||mf(),jr||(Br(),jr=!0),nc.add(e,t),t.A=0}}function dc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ls(Ve(t.Ma,t),Xf(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Yf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ls(Ve(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ke(10),zi(this),Yf(this))};function fc(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Yf(t){t.g=new hs(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dt(t.wa);ge(e,"RID","rpc"),ge(e,"SID",t.K),ge(e,"AID",t.V),ge(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ge(e,"TO",t.qa),ge(e,"TYPE","xmlhttp"),gs(t,e),t.o&&t.s&&uc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Bi(Dt(e)),n.s=null,n.S=!0,Sf(n,t)}P.ib=function(){this.v!=null&&(this.v=null,zi(this),dc(this),Ke(19))};function ai(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Jf(t,e){var n=null;if(t.g==e){ai(t),fc(t),t.g=null;var r=2}else if(ua(t.i,e))n=e.F,Uf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Fi(),Me(r,new Ef(r,n)),Hi(t)}else Qf(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&b1(t,e)||r==2&&dc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:an(t,5);break;case 4:an(t,10);break;case 3:an(t,6);break;default:an(t,2)}}}function Xf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function an(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ve(t.pb,t);n||(n=new un("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ii(n,"https"),Bi(n)),y1(n.toString(),r)}else Ke(2);t.H=0,t.h&&t.h.za(e),Zf(t),Gf(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ke(2)):(this.l.info("Failed to ping google.com"),Ke(1))};function Zf(t){if(t.H=0,t.ma=[],t.h){const e=xf(t.i);(e.length!=0||t.j.length!=0)&&(Ul(t.ma,e),Ul(t.ma,t.j),t.i.i.length=0,Wa(t.j),t.j.length=0),t.h.ya()}}function ep(t,e,n){var r=n instanceof un?Dt(n):new un(n);if(r.g!="")e&&(r.g=e+"."+r.g),oi(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new un(null);r&&ii(i,r),e&&(i.g=e),s&&oi(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ge(r,n,e),ge(r,"VER",t.ra),gs(t,r),r}function tp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new fs({ob:!0})):new Ie(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function np(){}P=np.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function ci(){if(Gn&&!(10<=Number(Lw)))throw Error("Environmental error: no available transport.")}ci.prototype.g=function(t,e){return new Je(t,e)};function Je(t,e){Ce.call(this),this.g=new Kf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!xr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cr(this)}De(Je,Ce);Je.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ep(t,null,t.Y),Hi(t)};Je.prototype.close=function(){hc(this.g)};Je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=tc(t),t=n);e.j.push(new d1(e.fb++,t)),e.H==3&&Hi(e)};Je.prototype.N=function(){this.g.h=null,delete this.j,hc(this.g),delete this.g,Je.$.N.call(this)};function rp(t){oc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(rp,oc);function sp(){ac.call(this),this.status=1}De(sp,ac);function cr(t){this.g=t}De(cr,np);cr.prototype.Ba=function(){Me(this.g,"a")};cr.prototype.Aa=function(t){Me(this.g,new rp(t))};cr.prototype.za=function(t){Me(this.g,new sp)};cr.prototype.ya=function(){Me(this.g,"b")};function T1(){this.blockSize=-1}function it(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(it,T1);it.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Po(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}it.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Po(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Po(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Po(this,r),s=0;break}}this.h=s,this.i+=e};it.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var k1={};function pc(t){return-128<=t&&128>t?Pw(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function dt(t){if(isNaN(t)||!isFinite(t))return qn;if(0>t)return Oe(dt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ha;return new he(e,0)}function ip(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Oe(ip(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dt(Math.pow(e,8)),r=qn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=dt(Math.pow(e,i)),r=r.R(i).add(dt(o))):(r=r.R(n),r=r.add(dt(o)))}return r}var ha=4294967296,qn=pc(0),da=pc(1),Ql=pc(16777216);P=he.prototype;P.ea=function(){if(Xe(this))return-Oe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ha+r)*e,e*=ha}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Tt(this))return"0";if(Xe(this))return"-"+Oe(this).toString(t);for(var e=dt(Math.pow(t,6)),n=this,r="";;){var s=ui(n,e).g;n=li(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Tt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Tt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xe(t){return t.h==-1}P.X=function(t){return t=li(this,t),Xe(t)?-1:Tt(t)?0:1};function Oe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(da)}P.abs=function(){return Xe(this)?Oe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new he(n,n[n.length-1]&-2147483648?-1:0)};function li(t,e){return t.add(Oe(e))}P.R=function(t){if(Tt(this)||Tt(t))return qn;if(Xe(this))return Xe(t)?Oe(this).R(Oe(t)):Oe(Oe(this).R(t));if(Xe(t))return Oe(this.R(Oe(t)));if(0>this.X(Ql)&&0>t.X(Ql))return dt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Rs(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Rs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Rs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Rs(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function Rs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function mr(t,e){this.g=t,this.h=e}function ui(t,e){if(Tt(e))throw Error("division by zero");if(Tt(t))return new mr(qn,qn);if(Xe(t))return e=ui(Oe(t),e),new mr(Oe(e.g),Oe(e.h));if(Xe(e))return e=ui(t,Oe(e)),new mr(Oe(e.g),e.h);if(30<t.g.length){if(Xe(t)||Xe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=da,r=e;0>=r.X(t);)n=Yl(n),r=Yl(r);var s=On(n,1),i=On(r,1);for(r=On(r,2),n=On(n,2);!Tt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=On(r,1),n=On(n,1)}return e=li(t,s.R(e)),new mr(s,e)}for(s=qn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=dt(n),o=i.R(e);Xe(o)||0<o.X(t);)n-=r,i=dt(n),o=i.R(e);Tt(i)&&(i=da),s=s.add(i),t=li(t,o)}return new mr(s,t)}P.gb=function(t){return ui(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function Yl(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function On(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new he(s,t.h)}ci.prototype.createWebChannel=ci.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;Ui.NO_ERROR=0;Ui.TIMEOUT=8;Ui.HTTP_ERROR=6;bf.COMPLETE="complete";Tf.EventType=us;us.OPEN="a";us.CLOSE="b";us.ERROR="c";us.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;it.prototype.digest=it.prototype.l;it.prototype.reset=it.prototype.reset;it.prototype.update=it.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=dt;he.fromString=ip;var S1=function(){return new ci},A1=function(){return Fi()},$o=Ui,C1=bf,R1=kn,Jl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},D1=fs,Ds=Tf,N1=Ie,O1=it,zn=he;const Xl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new ki("@firebase/firestore");function Zl(){return vn.logLevel}function V(t,...e){if(vn.logLevel<=ae.DEBUG){const n=e.map(gc);vn.debug(`Firestore (${lr}): ${t}`,...n)}}function Nt(t,...e){if(vn.logLevel<=ae.ERROR){const n=e.map(gc);vn.error(`Firestore (${lr}): ${t}`,...n)}}function Wn(t,...e){if(vn.logLevel<=ae.WARN){const n=e.map(gc);vn.warn(`Firestore (${lr}): ${t}`,...n)}}function gc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw Nt(e),new Error(e)}function ye(t,e){t||K()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends at{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class $1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class M1{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new op(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Fe(e)}}class L1{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class F1{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new L1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x1{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.T=n.token,new U1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=V1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Qn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ke(0,0))}static max(){return new Z(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Gr{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new me(n)}static emptyPath(){return new me([])}}const B1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Gr{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return B1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(me.fromString(e))}static fromName(e){return new B(me.fromString(e).popFirst(5))}static empty(){return new B(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new me(e.slice()))}}function j1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new zt(s,B.empty(),e)}function q1(t){return new zt(t.readTime,t.key,-1)}class zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zt(Z.min(),B.empty(),-1)}static max(){return new zt(Z.max(),B.empty(),-1)}}function z1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==H1)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}mc.ct=-1;function Ki(t){return t==null}function hi(t){return t===0&&1/t==-1/0}function G1(t){return typeof t=="number"&&Number.isInteger(t)&&!hi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ns(this.root,e,this.comparator,!0)}}class Ns{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ne(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(e){return new tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new rt([])}unionWith(e){let n=new je(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lp("Invalid base64 string: "+s):s}}(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const W1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(t){if(ye(!!t),typeof t=="string"){let e=0;const n=W1.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wn(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _c(t){const e=t.mapValue.fields.__previous_value__;return yc(e)?_c(e):e}function Wr(t){const e=Ht(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function In(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yc(t)?4:Y1(t)?9007199254740991:10:K()}function _t(t,e){if(t===e)return!0;const n=In(t);if(n!==In(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wr(t).isEqual(Wr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Ht(r.timestampValue),o=Ht(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return wn(r.bytesValue).isEqual(wn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return be(r.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return be(r.integerValue)===be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=be(r.doubleValue),o=be(s.doubleValue);return i===o?hi(i)===hi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Qn(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(eu(i)!==eu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!_t(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Yr(t,e){return(t.values||[]).find(n=>_t(n,e))!==void 0}function Yn(t,e){if(t===e)return 0;const n=In(t),r=In(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=be(s.integerValue||s.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nu(t.timestampValue,e.timestampValue);case 4:return nu(Wr(t),Wr(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=wn(s),a=wn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(be(s.latitude),be(i.latitude));return o!==0?o:ce(be(s.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Yn(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Os.mapValue&&i===Os.mapValue)return 0;if(s===Os.mapValue)return 1;if(i===Os.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const d=Yn(o[a[u]],c[l[u]]);if(d!==0)return d}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function nu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Ht(t),r=Ht(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Jn(t){return fa(t)}function fa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Ht(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?wn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=fa(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${fa(r.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function ru(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pa(t){return!!t&&"integerValue"in t}function vc(t){return!!t&&"arrayValue"in t}function su(t){return!!t&&"nullValue"in t}function iu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vs(t){return!!t&&"mapValue"in t}function Cr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Y1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cr(n)}setAll(e){let n=xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Cr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ze(Cr(this.value))}}function up(t){const e=[];return ur(t.fields,(n,r)=>{const s=new xe([n]);if(Vs(r)){const i=up(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,Z.min(),Z.min(),Z.min(),Ze.empty(),0)}static newFoundDocument(e,n,r,s){return new Ue(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new Ue(e,2,n,Z.min(),Z.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,Z.min(),Z.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,n){this.position=e,this.inclusive=n}}function ou(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Yn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function J1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hp{}class Te extends hp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Z1(e,n,r):n==="array-contains"?new nI(e,r):n==="in"?new rI(e,r):n==="not-in"?new sI(e,r):n==="array-contains-any"?new iI(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eI(e,r):new tI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yn(n,this.value)):n!==null&&In(this.value)===In(n)&&this.matchesComparison(Yn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ot extends hp{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new ot(e,n)}matches(e){return dp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dp(t){return t.op==="and"}function fp(t){return X1(t)&&dp(t)}function X1(t){for(const e of t.filters)if(e instanceof ot)return!1;return!0}function ga(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+Jn(t.value);if(fp(t))return t.filters.map(e=>ga(e)).join(",");{const e=t.filters.map(n=>ga(n)).join(",");return`${t.op}(${e})`}}function pp(t,e){return t instanceof Te?function(n,r){return r instanceof Te&&n.op===r.op&&n.field.isEqual(r.field)&&_t(n.value,r.value)}(t,e):t instanceof ot?function(n,r){return r instanceof ot&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&pp(i,r.filters[o]),!0):!1}(t,e):void K()}function gp(t){return t instanceof Te?function(e){return`${e.field.canonicalString()} ${e.op} ${Jn(e.value)}`}(t):t instanceof ot?function(e){return e.op.toString()+" {"+e.getFilters().map(gp).join(" ,")+"}"}(t):"Filter"}class Z1 extends Te{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class eI extends Te{constructor(e,n){super(e,"in",n),this.keys=mp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tI extends Te{constructor(e,n){super(e,"not-in",n),this.keys=mp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class nI extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vc(n)&&Yr(n.arrayValue,this.value)}}class rI extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yr(this.value.arrayValue,n)}}class sI extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yr(this.value.arrayValue,n)}}class iI extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function cu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oI(t,e,n,r,s,i,o)}function wc(t){const e=ee(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ga(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ki(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jn(r)).join(",")),e.dt=n}return e.dt}function Ic(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!au(t.startAt,e.startAt)&&au(t.endAt,e.endAt)}function ma(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function aI(t,e,n,r,s,i,o,a){return new _s(t,e,n,r,s,i,o,a)}function Ec(t){return new _s(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _p(t){return t.collectionGroup!==null}function Hn(t){const e=ee(t);if(e.wt===null){e.wt=[];const n=bc(e),r=yp(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Rr(n)),e.wt.push(new Rr(xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Rr(xe.keyField(),i))}}}return e.wt}function Ot(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=cu(e.path,e.collectionGroup,Hn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Hn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rr(i.field,o))}const r=e.endAt?new di(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new di(e.startAt.position,e.startAt.inclusive):null;e._t=cu(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function ya(t,e){e.getFirstInequalityField(),bc(t);const n=t.filters.concat([e]);return new _s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _a(t,e,n){return new _s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gi(t,e){return Ic(Ot(t),Ot(e))&&t.limitType===e.limitType}function vp(t){return`${wc(Ot(t))}|lt:${t.limitType}`}function va(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>gp(r)).join(", ")}]`),Ki(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jn(r)).join(",")),`Target(${n})`}(Ot(t))}; limitType=${t.limitType})`}function Wi(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):B.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Hn(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=ou(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Hn(n),r)||n.endAt&&!function(s,i,o){const a=ou(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Hn(n),r))}(t,e)}function cI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wp(t){return(e,n)=>{let r=!1;for(const s of Hn(t)){const i=lI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lI(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Yn(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new we(B.comparator);function Pt(){return uI}const Ip=new we(B.comparator);function Ir(...t){let e=Ip;for(const n of t)e=e.insert(n.key,n);return e}function Ep(t){let e=Ip;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cn(){return Dr()}function bp(){return Dr()}function Dr(){return new hr(t=>t.toString(),(t,e)=>t.isEqual(e))}const hI=new we(B.comparator),dI=new je(B.comparator);function se(...t){let e=dI;for(const n of t)e=e.add(n);return e}const fI=new je(ce);function pI(){return fI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hi(e)?"-0":e}}function kp(t){return{integerValue:""+t}}function gI(t,e){return G1(e)?kp(e):Tp(t,e)}/**
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
 */class Qi{constructor(){this._=void 0}}function mI(t,e,n){return t instanceof fi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&yc(s)&&(s=_c(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Jr?Ap(t,e):t instanceof Xr?Cp(t,e):function(r,s){const i=Sp(r,s),o=uu(i)+uu(r.gt);return pa(i)&&pa(r.gt)?kp(o):Tp(r.serializer,o)}(t,e)}function yI(t,e,n){return t instanceof Jr?Ap(t,e):t instanceof Xr?Cp(t,e):n}function Sp(t,e){return t instanceof pi?pa(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fi extends Qi{}class Jr extends Qi{constructor(e){super(),this.elements=e}}function Ap(t,e){const n=Rp(e);for(const r of t.elements)n.some(s=>_t(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xr extends Qi{constructor(e){super(),this.elements=e}}function Cp(t,e){let n=Rp(e);for(const r of t.elements)n=n.filter(s=>!_t(s,r));return{arrayValue:{values:n}}}class pi extends Qi{constructor(e,n){super(),this.serializer=e,this.gt=n}}function uu(t){return be(t.integerValue||t.doubleValue)}function Rp(t){return vc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _I(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Jr&&r instanceof Jr||n instanceof Xr&&r instanceof Xr?Qn(n.elements,r.elements,_t):n instanceof pi&&r instanceof pi?_t(n.gt,r.gt):n instanceof fi&&r instanceof fi}(t.transform,e.transform)}class vI{constructor(e,n){this.version=e,this.transformResults=n}}class gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gt}static exists(e){return new gt(void 0,e)}static updateTime(e){return new gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yi{}function Dp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tc(t.key,gt.none()):new vs(t.key,t.data,gt.none());{const n=t.data,r=Ze.empty();let s=new je(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sn(t.key,r,new rt(s.toArray()),gt.none())}}function wI(t,e,n){t instanceof vs?function(r,s,i){const o=r.value.clone(),a=du(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Sn?function(r,s,i){if(!Bs(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=du(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Np(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Nr(t,e,n,r){return t instanceof vs?function(s,i,o,a){if(!Bs(s.precondition,i))return o;const c=s.value.clone(),l=fu(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sn?function(s,i,o,a){if(!Bs(s.precondition,i))return o;const c=fu(s.fieldTransforms,a,i),l=i.data;return l.setAll(Np(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Bs(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function II(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sp(r.transform,s||null);i!=null&&(n===null&&(n=Ze.empty()),n.set(r.field,i))}return n||null}function hu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qn(n,r,(s,i)=>_I(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vs extends Yi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sn extends Yi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Np(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function du(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,yI(o,a,n[s]))}return r}function fu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,mI(i,o,e))}return r}class Tc extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EI extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Nr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Nr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Dp(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(n,r)=>hu(n,r))&&Qn(this.baseMutations,e.baseMutations,(n,r)=>hu(n,r))}}class kc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=hI;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kc(e,n,r,s)}}/**
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
 */class TI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,ie;function SI(t){switch(t){default:return K();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Op(t){if(t===void 0)return Nt("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ee.OK:return T.OK;case Ee.CANCELLED:return T.CANCELLED;case Ee.UNKNOWN:return T.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return T.INTERNAL;case Ee.UNAVAILABLE:return T.UNAVAILABLE;case Ee.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ee.NOT_FOUND:return T.NOT_FOUND;case Ee.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ee.ABORTED:return T.ABORTED;case Ee.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ee.DATA_LOSS:return T.DATA_LOSS;default:return K()}}(ie=Ee||(Ee={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Sc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ps}static getOrCreateInstance(){return Ps===null&&(Ps=new Sc),Ps}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ps=null;/**
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
 */function AI(){return new TextEncoder}/**
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
 */const CI=new zn([4294967295,4294967295],0);function pu(t){const e=AI().encode(t),n=new O1;return n.update(e),new Uint8Array(n.digest())}function gu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([n,r],0),new zn([s,i],0)]}class Ac{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Er(`Invalid padding: ${n}`);if(r<0)throw new Er(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Er(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Er(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=zn.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(zn.fromNumber(r)));return s.compare(CI)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ac(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ws.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ji(Z.min(),s,new we(ce),Pt(),se())}}class ws{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ws(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class Pp{constructor(e,n){this.targetId=e,this.Vt=n}}class $p{constructor(e,n,r=ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.St=0,this.Dt=_u(),this.Ct=ze.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),r=se();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new ws(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=_u()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class RI{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Pt(),this.zt=yu(),this.Wt=new we(ce)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(ma(o))if(s===0){const a=new B(o.path);this.Yt(r,a,Ue.newNoDocument(a,Z.min()))}else ye(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=Sc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,m,g,_,E;const I={localCacheCount:u,existenceFilterCount:h.count},O=h.unchangedNames;return O&&(I.bloomFilter={applied:l===0,hashCount:(d=O==null?void 0:O.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(g=(m=(p=O==null?void 0:O.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&g!==void 0?g:0,padding:(E=(_=O==null?void 0:O.bits)===null||_===void 0?void 0:_.padding)!==null&&E!==void 0?E:0}),I}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=wn(i).toUint8Array()}catch(u){if(u instanceof lp)return Wn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Ac(c,o,a)}catch(u){return Wn(u instanceof Er?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&ma(a.target)){const c=new B(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ue.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=se();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Ji(e,n,this.Wt,this.jt,r);return this.jt=Pt(),this.zt=yu(),this.Wt=new we(ce),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new mu,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new je(ce),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new mu),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function yu(){return new we(B.comparator)}function _u(){return new we(B.comparator)}const DI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),NI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),OI=(()=>({and:"AND",or:"OR"}))();class PI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wa(t,e){return t.useProto3Json||Ki(e)?e:{value:e}}function gi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $I(t,e){return gi(t,e.toTimestamp())}function mt(t){return ye(!!t),Z.fromTimestamp(function(e){const n=Ht(e);return new ke(n.seconds,n.nanos)}(t))}function Cc(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Lp(t){const e=me.fromString(t);return ye(Vp(e)),e}function Ia(t,e){return Cc(t.databaseId,e.path)}function Mo(t,e){const n=Lp(e);if(n.get(1)!==t.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Fp(n))}function Ea(t,e){return Cc(t.databaseId,e)}function MI(t){const e=Lp(t);return e.length===4?me.emptyPath():Fp(e)}function ba(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fp(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vu(t,e,n){return{name:Ia(t,e),fields:n.value.mapValue.fields}}function LI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ye(l===void 0||typeof l=="string"),ze.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),ze.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Op(c.code);return new L(l,c.message||"")}(o);n=new $p(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mo(t,r.document.name),i=mt(r.document.updateTime),o=r.document.createTime?mt(r.document.createTime):Z.min(),a=new Ze({mapValue:{fields:r.document.fields}}),c=Ue.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new js(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mo(t,r.document),i=r.readTime?mt(r.readTime):Z.min(),o=Ue.newNoDocument(s,i),a=r.removedTargetIds||[];n=new js([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mo(t,r.document),i=r.removedTargetIds||[];n=new js([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new kI(s,i),a=r.targetId;n=new Pp(a,o)}}return n}function FI(t,e){let n;if(e instanceof vs)n={update:vu(t,e.key,e.value)};else if(e instanceof Tc)n={delete:Ia(t,e.key)};else if(e instanceof Sn)n={update:vu(t,e.key,e.data),updateMask:KI(e.fieldMask)};else{if(!(e instanceof EI))return K();n={verify:Ia(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof fi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:$I(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function UI(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?mt(r.updateTime):mt(s);return i.isEqual(Z.min())&&(i=mt(s)),new vI(i,r.transformResults||[])}(n,e))):[]}function xI(t,e){return{documents:[Ea(t,e.path)]}}function VI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ea(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ea(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return xp(ot.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ln(u.field),direction:qI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=wa(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function BI(t){let e=MI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Up(u);return h instanceof ot&&fp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Rr(Fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ki(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new di(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new di(d,h)}(n.endAt)),aI(e,s,o,i,a,"F",c,l)}function jI(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Up(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Fn(e.unaryFilter.field);return Te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Fn(e.unaryFilter.field);return Te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fn(e.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fn(e.unaryFilter.field);return Te.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Te.create(Fn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ot.create(e.compositeFilter.filters.map(n=>Up(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function qI(t){return DI[t]}function zI(t){return NI[t]}function HI(t){return OI[t]}function Ln(t){return{fieldPath:t.canonicalString()}}function Fn(t){return xe.fromServerFormat(t.fieldPath)}function xp(t){return t instanceof Te?function(e){if(e.op==="=="){if(iu(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NAN"}};if(su(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(iu(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NOT_NAN"}};if(su(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(e.field),op:zI(e.op),value:e.value}}}(t):t instanceof ot?function(e){const n=e.getFilters().map(r=>xp(r));return n.length===1?n[0]:{compositeFilter:{op:HI(e.op),filters:n}}}(t):K()}function KI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.fe=e}}function WI(t){const e=BI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_a(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.rn=new YI}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(zt.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class YI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new je(me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Xn(0)}static Mn(){return new Xn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.changes=new hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Nr(r.mutation,s,rt.empty(),ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=cn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ir();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Pt();const o=Dr(),a=Dr();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Sn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Nr(u.mutation,l,u.mutation.getFieldMask(),ke.now())):o.set(l.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new XI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Dr();let s=new we((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=bp();u.forEach(d=>{if(!i.has(d)){const p=Dp(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_p(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(cn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:Ep(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let s=Ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ir();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(l,u){return new _s(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ue.newInvalidDocument(l)))});let o=Ir();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Nr(l.mutation,c,rt.empty(),ke.now()),Wi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:mt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:WI(r.bundledQuery),readTime:mt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class tE{constructor(){this.overlays=new we(B.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cn();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=cn(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=cn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TI(n,r));let i=this.ls.get(n);i===void 0&&(i=se(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.fs=new je(Ae.ds),this.ws=new je(Ae._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ae(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new B(new me([])),r=new Ae(n,e),s=new Ae(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new me([])),r=new Ae(n,e),s=new Ae(n,e+1);let i=se();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ae(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||ce(e.As,n.As)}static _s(e,n){return ce(e.As,n.As)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new je(Ae.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Ae(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),s=new Ae(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ce);return n.forEach(s=>{const i=new Ae(s,0),o=new Ae(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),S.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Ae(new B(i),0);let a=new je(ce);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return S.forEach(n.mutations,s=>{const i=new Ae(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ae(n,0),s=this.Rs.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.Ds=e,this.docs=new we(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=Pt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pt();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||z1(q1(u),r)<=0||(s.has(u.key)||Wi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}Cs(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sE(this)}getSize(e){return S.resolve(this.size)}}class sE extends JI{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.persistence=e,this.xs=new hr(n=>wc(n),Ic),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Rc,this.targetCount=0,this.Ms=Xn.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Xn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.$s={},this.overlays={},this.Os=new mc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new iE(this),this.indexManager=new QI,this.remoteDocumentCache=function(r){return new rE(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new GI(n),this.qs=new eE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new nE(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new aE(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return S.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class aE extends K1{constructor(e){super(),this.currentSequenceNumber=e}}class Dc{constructor(e){this.persistence=e,this.Qs=new Rc,this.js=null}static zs(e){return new Dc(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,r=>{const s=B.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(lu(n))return S.resolve(null);let r=Ot(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_a(n,null,"F"),r=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,_a(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,s){return lu(n)||s.isEqual(Z.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Zl()<=ae.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),va(n)),this.Wi(e,o,n,j1(s,-1)))})}ji(e,n){let r=new je(wp(e));return n.forEach((s,i)=>{Wi(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Zl()<=ae.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",va(n)),this.Ui.getDocumentsMatchingQuery(e,n,zt.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new we(ce),this.Yi=new hr(i=>wc(i),Ic),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZI(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function uE(t,e,n,r){return new lE(t,e,n,r)}async function Bp(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function hE(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const g=c.docVersions.get(p);ye(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jp(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function dE(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ze.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(m,g,_){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,u)&&a.push(n.Bs.updateTargetData(i,p))});let c=Pt(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(fE(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(Z.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function fE(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function pE(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gE(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new xt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Ta(t,e,n){const r=ee(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ys(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function wu(t,e,n){const r=ee(t);let s=Z.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Yi.get(l);return h!==void 0?S.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,Ot(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:se())).next(a=>(mE(r,cI(e),a),{documents:a,ir:i})))}function mE(t,e,n){let r=t.Xi.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Iu{constructor(){this.activeTargetIds=pI()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yE{constructor(){this.Hr=new Iu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Iu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $s=null;function Lo(){return $s===null?$s=268435456+Math.round(2147483648*Math.random()):$s++,"0x"+$s.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class IE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=Lo(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Wn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=vE[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=Lo();return new Promise((o,a)=>{const c=new N1;c.setWithCredentials(!0),c.listenOnce(C1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $o.NO_ERROR:const u=c.getResponseJson();V(Le,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case $o.TIMEOUT:V(Le,`RPC '${e}' ${i} timed out`),a(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const h=c.getStatus();if(V(Le,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(p.status);a(new L(m,p.message))}else a(new L(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(T.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{V(Le,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);V(Le,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const s=Lo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=S1(),a=A1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new D1({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");V(Le,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const m=new wE({ro:_=>{p?V(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(V(Le,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),V(Le,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),g=(_,E,I)=>{_.listen(E,O=>{try{I(O)}catch(k){setTimeout(()=>{throw k},0)}})};return g(h,Ds.EventType.OPEN,()=>{p||V(Le,`RPC '${e}' stream ${s} transport opened.`)}),g(h,Ds.EventType.CLOSE,()=>{p||(p=!0,V(Le,`RPC '${e}' stream ${s} transport closed`),m.wo())}),g(h,Ds.EventType.ERROR,_=>{p||(p=!0,Wn(Le,`RPC '${e}' stream ${s} transport errored:`,_),m.wo(new L(T.UNAVAILABLE,"The operation could not be completed")))}),g(h,Ds.EventType.MESSAGE,_=>{var E;if(!p){const I=_.data[0];ye(!!I);const O=I,k=O.error||((E=O[0])===null||E===void 0?void 0:E.error);if(k){V(Le,`RPC '${e}' stream ${s} received error:`,k);const N=k.status;let D=function(_e){const $=Ee[_e];if($!==void 0)return Op($)}(N),W=k.message;D===void 0&&(D=T.INTERNAL,W="Unknown error status: "+N+" with message "+k.message),p=!0,m.wo(new L(D,W)),h.close()}else V(Le,`RPC '${e}' stream ${s} received:`,I),m._o(I)}}),g(a,R1.STAT_EVENT,_=>{_.stat===Jl.PROXY?V(Le,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Jl.NOPROXY&&V(Le,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function Fo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return new PI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new qp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new L(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EE extends zp{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=LI(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?mt(i.readTime):Z.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=ba(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=ma(a)?{documents:xI(s,a)}:{query:VI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Mp(s,i.resumeToken);const c=wa(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(Z.min())>0){o.readTime=gi(s,i.snapshotVersion.toTimestamp());const c=wa(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=jI(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=ba(this.serializer),n.removeTarget=e,this.Wo(n)}}class bE extends zp{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=UI(e.writeResults,e.commitTime),r=mt(e.commitTime);return this.listener.cu(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ba(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FI(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(T.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class kE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Nt(n),this.mu=!1):V("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{An(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.vu.add(4),await Is(c),c.bu.set("Unknown"),c.vu.delete(4),await Zi(c)}(this))})}),this.bu=new kE(r,s)}}async function Zi(t){if(An(t))for(const e of t.Ru)await e(!0)}async function Is(t){for(const e of t.Ru)await e(!1)}function Hp(t,e){const n=ee(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),$c(n)?Pc(n):dr(n).Ko()&&Oc(n,e))}function Kp(t,e){const n=ee(t),r=dr(n);n.Au.delete(e),r.Ko()&&Gp(n,e),n.Au.size===0&&(r.Ko()?r.jo():An(n)&&n.bu.set("Unknown"))}function Oc(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}dr(t).su(e)}function Gp(t,e){t.Vu.qt(e),dr(t).iu(e)}function Pc(t){t.Vu=new RI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),dr(t).start(),t.bu.gu()}function $c(t){return An(t)&&!dr(t).Uo()&&t.Au.size>0}function An(t){return ee(t).vu.size===0}function Wp(t){t.Vu=void 0}async function AE(t){t.Au.forEach((e,n)=>{Oc(t,e)})}async function CE(t,e){Wp(t),$c(t)?(t.bu.Iu(e),Pc(t)):t.bu.set("Unknown")}async function RE(t,e,n){if(t.bu.set("Online"),e instanceof $p&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mi(t,r)}else if(e instanceof js?t.Vu.Ht(e):e instanceof Pp?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Z.min()))try{const r=await jp(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(ze.EMPTY_BYTE_STRING,l.snapshotVersion)),Gp(s,a);const u=new xt(l.target,a,c,l.sequenceNumber);Oc(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await mi(t,r)}}async function mi(t,e,n){if(!ys(e))throw e;t.vu.add(1),await Is(t),t.bu.set("Offline"),n||(n=()=>jp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Zi(t)})}function Qp(t,e){return e().catch(n=>mi(t,n,e))}async function eo(t){const e=ee(t),n=Kt(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;DE(e);)try{const s=await pE(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,NE(e,s)}catch(s){await mi(e,s)}Yp(e)&&Jp(e)}function DE(t){return An(t)&&t.Eu.length<10}function NE(t,e){t.Eu.push(e);const n=Kt(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Yp(t){return An(t)&&!Kt(t).Uo()&&t.Eu.length>0}function Jp(t){Kt(t).start()}async function OE(t){Kt(t).hu()}async function PE(t){const e=Kt(t);for(const n of t.Eu)e.uu(n.mutations)}async function $E(t,e,n){const r=t.Eu.shift(),s=kc.from(r,e,n);await Qp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await eo(t)}async function ME(t,e){e&&Kt(t).ou&&await async function(n,r){if(s=r.code,SI(s)&&s!==T.ABORTED){const i=n.Eu.shift();Kt(n).Qo(),await Qp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await eo(n)}var s}(t,e),Yp(t)&&Jp(t)}async function bu(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=An(n);n.vu.add(3),await Is(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Zi(n)}async function LE(t,e){const n=ee(t);e?(n.vu.delete(2),await Zi(n)):e||(n.vu.add(2),await Is(n),n.bu.set("Unknown"))}function dr(t){return t.Su||(t.Su=function(e,n,r){const s=ee(e);return s.fu(),new EE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:AE.bind(null,t),ao:CE.bind(null,t),nu:RE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),$c(t)?Pc(t):t.bu.set("Unknown")):(await t.Su.stop(),Wp(t))})),t.Su}function Kt(t){return t.Du||(t.Du=function(e,n,r){const s=ee(e);return s.fu(),new bE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:OE.bind(null,t),ao:ME.bind(null,t),au:PE.bind(null,t),cu:$E.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await eo(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Mc(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lc(t,e){if(Nt("AsyncQueue",`${e}: ${t}`),ys(t))return new L(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Ir(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Cu=new we(B.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zn{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zn(e,n,Kn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.Nu=void 0,this.listeners=[]}}class UE{constructor(){this.queries=new hr(e=>vp(e),Gi),this.onlineState="Unknown",this.ku=new Set}}async function xE(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new FE),s)try{i.Nu=await n.onListen(r)}catch(o){const a=Lc(o,`Initialization of query '${va(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Fc(n)}async function VE(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function BE(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&Fc(n)}function jE(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Fc(t){t.ku.forEach(e=>{e.next()})}class qE{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.key=e}}class Zp{constructor(e){this.key=e}}class zE{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=wp(e),this.ec=new Kn(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Tu,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Wi(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?m!==g&&(r.track({type:3,doc:p}),_=!0):this.rc(d,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),_=!0):d&&!p&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return p(h)-p(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Zn(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Tu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Zp(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Xp(r))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Zn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class HE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KE{constructor(e){this.key=e,this.fc=!1}}class GE{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new hr(a=>vp(a),Gi),this._c=new Map,this.mc=new Set,this.gc=new we(B.comparator),this.yc=new Map,this.Ic=new Rc,this.Tc={},this.Ec=new Map,this.Ac=Xn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function WE(t,e){const n=sb(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await gE(n.localStore,Ot(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await QE(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Hp(n.remoteStore,o)}return s}async function QE(t,e,n,r,s){t.Rc=(h,d,p)=>async function(m,g,_,E){let I=g.view.sc(_);I.zi&&(I=await wu(m.localStore,g.query,!1).then(({documents:N})=>g.view.sc(N,I)));const O=E&&E.targetChanges.get(g.targetId),k=g.view.applyChanges(I,m.isPrimaryClient,O);return Su(m,g.targetId,k.cc),k.snapshot}(t,h,d,p);const i=await wu(t.localStore,e,!0),o=new zE(e,i.ir),a=o.sc(i.documents),c=ws.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Su(t,n,l.cc);const u=new HE(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function YE(t,e){const n=ee(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Gi(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ta(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Kp(n.remoteStore,r.targetId),ka(n,r.targetId)}).catch(ms)):(ka(n,r.targetId),await Ta(n.localStore,r.targetId,!0))}async function JE(t,e,n){const r=ib(t);try{const s=await function(i,o){const a=ee(i),c=ke.now(),l=o.reduce((d,p)=>d.add(p.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Pt(),m=se();return a.Zi.getEntries(d,l).next(g=>{p=g,p.forEach((_,E)=>{E.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const _=[];for(const E of o){const I=II(E,u.get(E.key).overlayedDocument);I!=null&&_.push(new Sn(E.key,I,up(I.value.mapValue),gt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(g=>{h=g;const _=g.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Ep(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new we(ce)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Es(r,s.changes),await eo(r.remoteStore)}catch(s){const i=Lc(s,"Failed to persist write");n.reject(i)}}async function eg(t,e){const n=ee(t);try{const r=await dE(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?ye(o.fc):s.removedDocuments.size>0&&(ye(o.fc),o.fc=!1))}),await Es(n,r,e)}catch(r){await ms(r)}}function ku(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Fc(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XE(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new we(B.comparator);o=o.insert(i,Ue.newNoDocument(i,Z.min()));const a=se().add(i),c=new Ji(Z.min(),new Map,new we(ce),o,a);await eg(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),Uc(r)}else await Ta(r.localStore,e,!1).then(()=>ka(r,e,n)).catch(ms)}async function ZE(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await hE(n.localStore,e);ng(n,r,null),tg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Es(n,s)}catch(s){await ms(s)}}async function eb(t,e,n){const r=ee(t);try{const s=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ye(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);ng(r,e,n),tg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Es(r,s)}catch(s){await ms(s)}}function tg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function ng(t,e,n){const r=ee(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function ka(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||rg(t,r)})}function rg(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Kp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Uc(t))}function Su(t,e,n){for(const r of n)r instanceof Xp?(t.Ic.addReference(r.key,e),tb(t,r)):r instanceof Zp?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||rg(t,r.key)):K()}function tb(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.mc.add(r),Uc(t))}function Uc(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(me.fromString(e)),r=t.Ac.next();t.yc.set(r,new KE(n)),t.gc=t.gc.insert(n,r),Hp(t.remoteStore,new xt(Ot(Ec(n.path)),r,"TargetPurposeLimboResolution",mc.ct))}}async function Es(t,e,n){const r=ee(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Nc.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ys(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,m)}}}(r.localStore,i))}async function nb(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Bp(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(T.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Es(n,r.er)}}function rb(t,e){const n=ee(t),r=n.yc.get(e);if(r&&r.fc)return se().add(r.key);{let s=se();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function sb(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XE.bind(null,e),e.dc.nu=BE.bind(null,e.eventManager),e.dc.Pc=jE.bind(null,e.eventManager),e}function ib(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eb.bind(null,e),e}class Au{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uE(this.persistence,new cE,e.initialUser,this.serializer)}createPersistence(e){return new oE(Dc.zs,this.serializer)}createSharedClientState(e){return new yE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ob{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ku(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nb.bind(null,this.syncEngine),await LE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new UE}createDatastore(e){const n=Xi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new IE(s));var s;return function(i,o,a,c){return new TE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ku(this.syncEngine,a,0),o=Eu.D()?new Eu:new _E,new SE(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new GE(r,s,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Is(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ab{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=ap.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uo(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ub(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>bu(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>bu(e.remoteStore,i)),t._onlineComponents=e}function lb(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ub(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lb(n))throw n;Wn("Error using user provided cache. Falling back to memory cache: "+n),await Uo(t,new Au)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Uo(t,new Au);return t._offlineComponents}async function sg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Cu(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Cu(t,new ob))),t._onlineComponents}function hb(t){return sg(t).then(e=>e.syncEngine)}async function Ru(t){const e=await sg(t),n=e.eventManager;return n.onListen=WE.bind(null,e.syncEngine),n.onUnlisten=YE.bind(null,e.syncEngine),n}/**
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
 */function ig(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,e,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function db(t,e,n,r){if(e===!0&&r===!0)throw new L(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nu(t){if(!B.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(B.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function to(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=to(t);throw new L(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}db("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ig((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class no{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new P1;switch(n.type){case"firstParty":return new F1(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(V("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}function fb(t,e,n,r={}){var s;const i=(t=dn(t,no))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Fe.MOCK_USER;else{a=Im(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Fe(l)}t._authCredentials=new $1(new op(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fr(this.firestore,e,this._query)}}class qt extends fr{constructor(e,n,r){super(e,n,Ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new B(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function pb(t,e,...n){if(t=Se(t),og("collection","path",e),t instanceof no){const r=me.fromString(e,...n);return Ou(r),new qt(t,null,r)}{if(!(t instanceof We||t instanceof qt))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Ou(r),new qt(t.firestore,null,r)}}function Pn(t,e,...n){if(t=Se(t),arguments.length===1&&(e=ap.A()),og("doc","path",e),t instanceof no){const r=me.fromString(e,...n);return Nu(r),new We(t,null,new B(r))}{if(!(t instanceof We||t instanceof qt))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Nu(r),new We(t.firestore,t instanceof qt?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new qp(this,"async_queue_retry"),this.Xc=()=>{const n=Fo();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Fo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Fo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new hn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ys(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Mc.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function $u(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Zr extends no{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new gb,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cg(this),this._firestoreClient.terminate()}}function mb(t,e){const n=typeof t=="object"?t:Da(),r=typeof t=="string"?t:e||"(default)",s=bn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vm("firestore");i&&fb(s,...i)}return s}function ag(t){return t._firestoreClient||cg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cg(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new Q1(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ig(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new cb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(ze.fromBase64String(e))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=/^__.*__$/;class _b{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sn(e,this.data,this.fieldMask,n,this.fieldTransforms):new vs(e,this.data,n,this.fieldTransforms)}}function ug(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Bc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return yi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ug(this.ca)&&yb.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class vb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xi(e)}ya(e,n,r,s=!1){return new Bc({ca:e,methodName:n,ga:r,path:xe.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hg(t){const e=t._freezeSettings(),n=Xi(t._databaseId);return new vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wb(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);pg("Data must be an object, but it was:",o,r);const a=dg(r,o);let c,l;if(i.merge)c=new rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Eb(e,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Tb(u,d)||u.push(d)}c=new rt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _b(new Ze(a),c,l)}function Ib(t,e,n,r=!1){return jc(n,t.ya(r?4:3,e))}function jc(t,e){if(fg(t=Se(t)))return pg("Unsupported field value:",e,t),dg(t,e);if(t instanceof lg)return function(n,r){if(!ug(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=jc(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gI(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ke.fromDate(n);return{timestampValue:gi(r.serializer,s)}}if(n instanceof ke){const s=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:gi(r.serializer,s)}}if(n instanceof Vc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:Mp(r.serializer,n._byteString)};if(n instanceof We){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Cc(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${to(n)}`)}(t,e)}function dg(t,e){const n={};return cp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(t,(r,s)=>{const i=jc(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Vc||t instanceof er||t instanceof We||t instanceof lg)}function pg(t,e,n){if(!fg(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=to(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Eb(t,e,n){if((e=Se(e))instanceof xc)return e._internalPath;if(typeof e=="string")return gg(t,e);throw yi("Field path arguments must be of type string or ",t,!1,void 0,n)}const bb=new RegExp("[~\\*/\\[\\]]");function gg(t,e,n){if(e.search(bb)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xc(...e.split("."))._internalPath}catch{throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(T.INVALID_ARGUMENT,a+t+c)}function Tb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kb extends mg{data(){return super.data()}}function yg(t,e){return typeof e=="string"?gg(t,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qc{}class Ab extends qc{}function Cb(t,e,...n){let r=[];e instanceof qc&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Hc).length,o=s.filter(a=>a instanceof zc).length;if(i>1||i>0&&o>0)throw new L(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class zc extends Ab{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zc(e,n,r)}_apply(e){const n=this._parse(e);return _g(e._query,n),new fr(e.firestore,e.converter,ya(e._query,n))}_parse(e){const n=hg(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Lu(u,l);const d=[];for(const p of u)d.push(Mu(a,s,p));h={arrayValue:{values:d}}}else h=Mu(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Lu(u,l),h=Ib(o,i,u,l==="in"||l==="not-in");return Te.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Hc extends qc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ot.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)_g(i,a),i=ya(i,a)}(e._query,n),new fr(e.firestore,e.converter,ya(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mu(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new L(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_p(e)&&n.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!B.isDocumentKey(r))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ru(t,new B(r))}if(n instanceof We)return ru(t,n._key);throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${to(n)}.`)}function Lu(t,e){if(!Array.isArray(t)||t.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _g(t,e){if(e.isInequality()){const r=bc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new L(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=yp(t);i!==null&&Rb(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Rb(t,e,n){if(!n.isEqual(e))throw new L(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Db{convertValue(e,n="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Vc(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_c(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wr(e));default:return null}}convertTimestamp(e){const n=Ht(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ye(Vp(r));const s=new Qr(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(n)||Nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vg extends mg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qs extends vg{data(e={}){return super.data(e)}}class Ob{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new br(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qs(this._firestore,this._userDataWriter,r.key,r,new br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new qs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new br(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new qs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new br(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Pb(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Pb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class wg extends Db{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function xo(t,e,n){t=dn(t,We);const r=dn(t.firestore,Zr),s=Nb(t.converter,e,n);return Ig(r,[wb(hg(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,gt.none())])}function Fu(t){return Ig(dn(t.firestore,Zr),[new Tc(t._key,gt.none())])}function Uu(t,...e){var n,r,s;t=Se(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$u(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($u(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof We)l=dn(t.firestore,Zr),u=Ec(t._key.path),c={next:h=>{e[o]&&e[o]($b(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dn(t,fr);l=dn(h.firestore,Zr),u=h._query;const d=new wg(l);c={next:p=>{e[o]&&e[o](new Ob(l,d,h,p))},error:e[o+1],complete:e[o+2]},Sb(t._query)}return function(h,d,p,m){const g=new ab(m),_=new qE(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>xE(await Ru(h),_)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>VE(await Ru(h),_))}}(ag(l),u,a,c)}function Ig(t,e){return function(n,r){const s=new hn;return n.asyncQueue.enqueueAndForget(async()=>JE(await hb(n),r,s)),s.promise}(ag(t),e)}function $b(t,e,n){const r=n.docs.get(e._key),s=new wg(t);return new vg(t,s,e._key,r,new br(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){lr=n})(rr),yt(new st("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Zr(new M1(n.getProvider("auth-internal")),new x1(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),et(Xl,"3.12.2",t),et(Xl,"3.12.2","esm2017")})();const Mb={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},Eg=Wh(Mb),tn=Gv(Eg);P_(tn,bd);const Xt=mb(Eg);ww();const Lb=new wt,Fb=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=ts(t);class r extends Error{constructor(i,o){super(o),this.code=i}}return wd(tn,s=>{n(s?{loggedIn:!0,user:s}:t)}),{subscribe:e,async signUpWithEmail(s,i){if((i==null?void 0:i.length)<8)throw new r("auth/password-too-short");return N_(tn,s,i)},async signInWithEmail(s,i){return O_(tn,s,i)},async signInWithGoogle(){return nv(tn,Lb)},async signOut(){return L_(tn)}}},bg=Fb(),xu="/assets/default-user-a40c52dd.png";function Ub(t){let e;return{c(){e=w("i"),f(e,"class","codicon codicon-account")},m(n,r){R(n,e,r)},p:A,d(n){n&&C(e)}}}function xb(t){let e,n;return{c(){e=w("img"),f(e,"class","profile-picture svelte-1m717b8"),Ct(e.src,n=t[0].user.photoURL??xu)||f(e,"src",n),f(e,"alt","Account")},m(r,s){R(r,e,s)},p(r,s){s&1&&!Ct(e.src,n=r[0].user.photoURL??xu)&&f(e,"src",n)},d(r){r&&C(e)}}}function Vb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_,E,I;o=new hm({});function O(D,W){return D[0].loggedIn?xb:Ub}let k=O(t),N=k(t);return{c(){e=w("header"),n=w("div"),r=w("a"),r.innerHTML='<i class="codicon codicon-heart"></i>',s=M(),i=w("a"),x(o.$$.fragment),a=M(),c=w("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=M(),u=w("nav"),h=w("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=M(),p=w("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=M(),g=w("button"),N.c(),f(r,"title","Sponsor"),f(r,"href","https://ko-fi.com/kurozenzen"),f(r,"target","_newtab"),f(r,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(D,W){R(D,e,W),y(e,n),y(n,r),y(n,s),y(n,i),F(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,m),y(u,g),N.m(g,null),_=!0,E||(I=[j(c,"click",t[1]),j(h,"click",t[2]),j(p,"click",t[3]),j(g,"click",t[4])],E=!0)},p(D,[W]){k===(k=O(D))&&N?N.p(D,W):(N.d(1),N=k(D),N&&(N.c(),N.m(g,null)))},i(D){_||(v(o.$$.fragment,D),_=!0)},o(D){b(o.$$.fragment,D),_=!1},d(D){D&&C(e),U(o),N.d(),E=!1,Re(I)}}}function Bb(t,e,n){let r;return Pe(t,bg,c=>n(0,r=c)),[r,()=>Un.navigateTo("help"),()=>Un.navigateTo("search"),()=>Un.navigateTo("settings"),()=>Un.navigateTo("account")]}class jb extends J{constructor(e){super(),Y(this,e,Bb,Vb,G,{})}}const qb="modulepreload",zb=function(t){return"/"+t},Vu={},ro=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=zb(i),i in Vu)return;Vu[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":qb,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},zs=Object.freeze(["+","-","~"]),so=t=>zs.includes(t),Hb=t=>{if(!so(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(zs.indexOf(t)+1)%zs.length;return zs[n]},Kb=Object.freeze({"+":"","-":"-","~":""}),Gb=t=>{if(!so(t))throw TypeError("Invalid modifier passed to serializeModifier");return Kb[t]},Tg=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),kg=t=>Tg.includes(t),Bu=t=>{const e=Tg.indexOf(t);return e>=0?e:99},Wb=Object.freeze(["artist","character","copyright","source","metadata","rating"]),Qb=t=>Wb.includes(t),bs=t=>typeof t=="string"&&t!=="",io=t=>typeof t=="number",Kc=(t,e)=>{let n=Object.freeze({modifier:t,name:e});return Sg(n),n},Sg=t=>{if(!so(t.modifier))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!bs(t.name))throw TypeError("Invalid name passed to SearchableTag constructor")},Yb=t=>`${Gb(t.modifier)}${encodeURIComponent(t.name.replaceAll(" ","_"))}`,oo=(t,e,n,r)=>{if(!so(t))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!bs(e))throw TypeError("Invalid name passed to ActiveTag constructor");if(!io(n))throw TypeError("Invalid count passed to ActiveTag constructor");if(!kg(r))throw TypeError("Invalid type passed to ActiveTag constructor");return Object.freeze({modifier:t,name:e,count:n,type:r})},Ag=t=>Kc(t.modifier,t.name),Cg=(t,e,n)=>{if(!bs(t))throw new TypeError("Invalid name passed to Supertag");if(!Jb(n))throw new TypeError("Invalid description passed to Supertag");return Object.freeze({name:t,description:e,tags:[...n]})},Jb=t=>Array.isArray(t)&&t.every(e=>{try{return Sg(e),!0}catch{return!1}}),Xb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=ts(t);let r,s=null,i=null;return wd(tn,async o=>{r=o,o?s=Uu(Pn(Xt,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=Cb(pb(Xt,`users/${o.uid}/supertags`));i==null||i(),i=Uu(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(Cg(d.id,p.description,Object.entries(p.tags).map(m=>Kc(m[1],m[0]))))}),n(d=>(d.supertags=h,d))})}):(s==null||s(),i==null||i(),s=null,i=null)}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");return xo(Pn(Xt,`users/${r.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async updateSupertag(o,a){if(!r)throw new Error("No user");const c=await xo(Pn(Xt,`users/${r.uid}/supertags`,a.name),{description:a.description,tags:Object.fromEntries(a.tags.map(l=>[l.name,l.modifier]))});return o===a.name?c:Fu(Pn(Xt,`users/${r.uid}/supertags`,o))},async deleteSupertag(o){if(!r)throw new Error("No user");return Fu(Pn(Xt,`users/${r.uid}/supertags`,o.name))},async setTheme(o){if(r)return xo(Pn(Xt,"users",r.uid),{preferences:{theme:o}},{merge:!0})}}},es=Xb();function Zb(t){let e,n,r,s,i;return{c(){e=w("button"),n=le(t[0]),f(e,"title",t[1]),f(e,"class",r=Qe(t[3])+" svelte-pssy25"),e.disabled=t[2]},m(o,a){R(o,e,a),y(e,n),s||(i=j(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&ve(n,o[0]),a&2&&f(e,"title",o[1]),a&8&&r!==(r=Qe(o[3])+" svelte-pssy25")&&f(e,"class",r),a&4&&(e.disabled=o[2])},i:A,o:A,d(o){o&&C(e),s=!1,i()}}}function eT(t,e,n){let{text:r}=e,{title:s}=e,{disabled:i=!1}=e,{type:o="primary"}=e;function a(c){fn.call(this,t,c)}return t.$$set=c=>{"text"in c&&n(0,r=c.text),"title"in c&&n(1,s=c.title),"disabled"in c&&n(2,i=c.disabled),"type"in c&&n(3,o=c.type)},[r,s,i,o,a]}class _i extends J{constructor(e){super(),Y(this,e,eT,Zb,G,{text:0,title:1,disabled:2,type:3})}}const Gc=t=>e=>{(ao(e)||Rg(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},Rg=t=>t.key===" ",ao=t=>t.key==="Enter",Dg=t=>{ao(t)&&t.target.click()},tT=Intl.NumberFormat("en",{notation:"compact"}),$t=t=>io(t)?tT.format(t):"-";function tr(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const nT=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),ju=Object.freeze({"+":"include","-":"exclude","~":"optional"});function qu(t){let e;return{c(){e=w("i"),f(e,"class","codicon codicon-star-full")},m(n,r){R(n,e,r)},d(n){n&&C(e)}}}function zu(t){let e,n=$t(t[0].count)+"",r,s;return{c(){e=le("("),r=le(n),s=le(")")},m(i,o){R(i,e,o),R(i,r,o),R(i,s,o)},p(i,o){o&1&&n!==(n=$t(i[0].count)+"")&&ve(r,n)},d(i){i&&C(e),i&&C(r),i&&C(s)}}}function rT(t){let e,n,r=tr(t[0].name)+"",s,i,o,a,c,l=t[1]&&qu(),u=t[0].count&&zu(t);return{c(){e=w("button"),l&&l.c(),n=M(),s=le(r),i=M(),u&&u.c(),f(e,"class",o=Qe(ju[t[0].modifier])+" svelte-1heyt8s"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),de(e,"no-icon",!t[1])},m(h,d){R(h,e,d),l&&l.m(e,null),y(e,n),y(e,s),y(e,i),u&&u.m(e,null),a||(c=[j(e,"click",t[2]),j(e,"contextmenu",Mh(t[3]))],a=!0)},p(h,[d]){h[1]?l||(l=qu(),l.c(),l.m(e,n)):l&&(l.d(1),l=null),d&1&&r!==(r=tr(h[0].name)+"")&&ve(s,r),h[0].count?u?u.p(h,d):(u=zu(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null),d&1&&o!==(o=Qe(ju[h[0].modifier])+" svelte-1heyt8s")&&f(e,"class",o),d&3&&de(e,"no-icon",!h[1])},i:A,o:A,d(h){h&&C(e),l&&l.d(),u&&u.d(),a=!1,Re(c)}}}function sT(t,e,n){let r,{tag:s}=e;function i(a){fn.call(this,t,a)}function o(a){fn.call(this,t,a)}return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=s.type==="supertag")},[s,r,i,o]}class Ng extends J{constructor(e){super(),Y(this,e,sT,rT,G,{tag:0})}}function iT(t){let e,n,r,s,i;const o=t[3].default,a=Dh(o,t,t[2],null);return{c(){e=w("div"),n=w("div"),a&&a.c(),f(n,"tabindex","-1"),f(n,"class","dialog svelte-13lfzv2"),f(e,"class","backdrop svelte-13lfzv2")},m(c,l){R(c,e,l),y(e,n),a&&a.m(n,null),t[4](n),r=!0,s||(i=[j(n,"click",Ks(oT)),j(e,"click",t[1]),j(e,"keydown",t[5])],s=!0)},p(c,[l]){a&&a.p&&(!r||l&4)&&Ph(a,o,c,c[2],r?Oh(o,c[2],l,null):$h(c[2]),null)},i(c){r||(v(a,c),r=!0)},o(c){b(a,c),r=!1},d(c){c&&C(e),a&&a.d(c),t[4](null),s=!1,Re(i)}}}const oT=()=>{};function aT(t,e,n){let{$$slots:r={},$$scope:s}=e;const i=Wt(),o=()=>i("close");let a;nr(()=>{a.focus()});function c(u){$e[u?"unshift":"push"](()=>{a=u,n(0,a)})}const l=u=>{u.code==="Escape"&&o()};return t.$$set=u=>{"$$scope"in u&&n(2,s=u.$$scope)},[a,o,s,r,c,l]}class Og extends J{constructor(e){super(),Y(this,e,aT,iT,G,{})}}function Hu(t,e,n){const r=t.slice();return r[9]=e[n],r}function Ku(t){let e,n;return e=new Ng({props:{tag:t[9]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function cT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_,E,I,O,k,N,D,W,_e,$,q=t[2],te=[];for(let re=0;re<q.length;re+=1)te[re]=Ku(Hu(t,q,re));const ct=re=>b(te[re],1,1,()=>{te[re]=null});return D=new _i({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),D.$on("click",t[8]),{c(){e=w("section"),n=w("h3"),n.textContent="Create Supertag",r=M(),s=w("button"),i=M(),o=w("div"),a=w("label"),a.textContent="Name",c=M(),l=w("input"),u=M(),h=w("div"),d=w("label"),d.textContent="Description",p=M(),m=w("input"),g=M(),_=w("div"),E=w("span"),E.textContent="Tags",I=M(),O=w("ol");for(let re=0;re<te.length;re+=1)te[re].c();k=M(),N=w("div"),x(D.$$.fragment),f(s,"class",Qe("codicon codicon-close")+" svelte-es7lpj"),f(a,"for","supertag-name"),f(a,"class","svelte-es7lpj"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-es7lpj"),f(o,"class","svelte-es7lpj"),f(d,"for","supertag-description"),f(d,"class","svelte-es7lpj"),f(m,"type","text"),f(m,"placeholder","Short description"),f(m,"id","supertag-description"),f(m,"class","svelte-es7lpj"),f(h,"class","svelte-es7lpj"),f(E,"class","svelte-es7lpj"),f(O,"class","svelte-es7lpj"),f(_,"class","svelte-es7lpj"),f(N,"class","last svelte-es7lpj"),f(e,"class","svelte-es7lpj")},m(re,ne){R(re,e,ne),y(e,n),y(e,r),y(e,s),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),ut(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,m),ut(m,t[1]),y(e,g),y(e,_),y(_,E),y(_,I),y(_,O);for(let He=0;He<te.length;He+=1)te[He]&&te[He].m(O,null);y(e,k),y(e,N),F(D,N,null),W=!0,_e||($=[j(s,"click",t[5]),j(l,"input",t[6]),j(m,"input",t[7])],_e=!0)},p(re,ne){if(ne&1&&l.value!==re[0]&&ut(l,re[0]),ne&2&&m.value!==re[1]&&ut(m,re[1]),ne&4){q=re[2];let ue;for(ue=0;ue<q.length;ue+=1){const vt=Hu(re,q,ue);te[ue]?(te[ue].p(vt,ne),v(te[ue],1)):(te[ue]=Ku(vt),te[ue].c(),v(te[ue],1),te[ue].m(O,null))}for(fe(),ue=q.length;ue<te.length;ue+=1)ct(ue);pe()}const He={};ne&8&&(He.title=re[3]?"Click to create supertag":"Enter a valid name to continue"),ne&8&&(He.disabled=!re[3]),D.$set(He)},i(re){if(!W){for(let ne=0;ne<q.length;ne+=1)v(te[ne]);v(D.$$.fragment,re),W=!0}},o(re){te=te.filter(Boolean);for(let ne=0;ne<te.length;ne+=1)b(te[ne]);b(D.$$.fragment,re),W=!1},d(re){re&&C(e),Gt(te,re),U(D),_e=!1,Re($)}}}function lT(t){let e,n;return e=new Og({props:{$$slots:{default:[cT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,[s]){const i={};s&4111&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function uT(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=Wt(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",Cg(s,i,o.map(Ag))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=bs(s))},[s,i,o,r,a,c,l,u,h]}class hT extends J{constructor(e){super(),Y(this,e,uT,lT,G,{name:0,description:1,tags:2})}}function dT(t){let e,n,r,s;return{c(){e=w("button"),f(e,"class",n=Qe(t[0])+" svelte-17m158f")},m(i,o){R(i,e,o),r||(s=j(e,"click",t[1]),r=!0)},p(i,[o]){o&1&&n!==(n=Qe(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:A,o:A,d(i){i&&C(e),r=!1,s()}}}function fT(t,e,n){let r,s,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%r.length),n(2,o=r[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,r=Object.entries(i)),t.$$.dirty&48&&n(0,s=r[a][1])},[s,c,o,i,a,r]}class Pg extends J{constructor(e){super(),Y(this,e,fT,dT,G,{options:3,value:2})}}function pT(t){let e,n,r;function s(o){t[1](o)}let i={options:nT};return t[0]!==void 0&&(i.value=t[0]),e=new Pg({props:i}),$e.push(()=>St(e,"value",s)),{c(){x(e.$$.fragment)},m(o,a){F(e,o,a),r=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],kt(()=>n=!1)),e.$set(c)},i(o){r||(v(e.$$.fragment,o),r=!0)},o(o){b(e.$$.fragment,o),r=!1},d(o){U(e,o)}}}function gT(t,e,n){let{modifier:r}=e;function s(i){r=i,n(0,r)}return t.$$set=i=>{"modifier"in i&&n(0,r=i.modifier)},[r,s]}class mT extends J{constructor(e){super(),Y(this,e,gT,pT,G,{modifier:0})}}function yT(t){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class Wc extends J{constructor(e){super(),Y(this,e,null,yT,G,{})}}let _T=class{constructor(e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_,E){this.preview_url=e,this.sample_url=n,this.file_url=r,this.comment_count=s,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=m,this.tags=g,this.width=_,this.type=E,Object.freeze(this)}};const Qc=(t,e)=>{if(!$g(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!vT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},$g=t=>{try{return new URL(t),!0}catch{return!1}},vT=t=>t===null||t instanceof AbortController,vi=(t,e,n)=>{if(!bs(t))throw TypeError("Invalid name passed to Tag constructor");if(!io(e))throw TypeError("Invalid count passed to Tag constructor");if(!kg(n))throw TypeError("Invalid type passed to Tag constructor");return Object.freeze({name:t,count:e,type:n})},Mg=(t,e)=>oo(e,t.name,t.count,t.type);let wT=null;const Lg=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),r=await Qc(`${e}${n}`,wT);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length===0)throw new Error("No tags found");return s.map(IT)}else throw s.message?new Error(s.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Fg=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),IT=t=>vi(Fg(t.value),ET(t.label),"ambiguous"),ET=t=>Number(t.substring(t.lastIndexOf("(")+1,t.length-1)),Ug=20;let xg=null;const Vg=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},bT=async(t,e)=>{const n=await Qc(AT(t,e),xg);Vg(n);try{return(await n.json()).map(kT)}catch{return[]}},TT=async t=>{const e=await Qc(CT(t),xg);Vg(e);const n=await e.text(),s=new DOMParser().parseFromString(n,"text/xml"),i=Number(s.getElementsByTagName("posts")[0].getAttribute("count"));return RT(i),i},kT=t=>{const e=t.height,n=t.score,r=t.preview_url,s=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,m=t.comment_count,g=t.status,_=t.source;return new _T(r,o,s,Number(m),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),_,g,ST(u),Number(d),s.endsWith(".webm")||s.endsWith(".mp4")?"video":s.includes(".gif")?"gif":"image")},ST=t=>t.map(e=>vi(Fg(e.tag),e.count,e.type)).sort((e,n)=>Bu(e.type)-Bu(n.type)),AT=(t,e)=>{const r=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Ug}&pid=${t}`;return e===""?r:`${r}&tags=${e}`},CT=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},RT=t=>{if(!io(t))throw new Error("Unexpected response received in getPage")};let DT=class{constructor(e,n,r){NT(e),PT(n),OT(r),this.author=e,this.createdAt=n,this.content=r,Object.freeze(this)}};const NT=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},OT=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},PT=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Gu="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Wu=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Gu:`${Gu}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const r=await n.text(),i=new DOMParser().parseFromString(r,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push($T(a.attributes));return o},$T=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),r=t.getNamedItem("body");if(e==null||n==null||r==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${r}`);return new DT(e.value,n.value,r.value)};function MT(t){let e,n,r=tr(t[0].name)+"",s,i,o,a=$t(t[0].count)+"",c,l,u,h;return{c(){e=w("li"),n=w("span"),s=le(r),i=M(),o=w("span"),c=le(a),f(n,"class","tag-name svelte-tm8ex8"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-tm8ex8"),de(e,"selected",t[1])},m(d,p){R(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,c),u||(h=[j(e,"click",t[2]),j(e,"keypress",Gc(t[2]))],u=!0)},p(d,[p]){p&1&&r!==(r=tr(d[0].name)+"")&&ve(s,r),p&1&&a!==(a=$t(d[0].count)+"")&&ve(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&de(e,"selected",d[1])},i:A,o:A,d(d){d&&C(e),u=!1,Re(h)}}}function LT(t,e,n){let{tag:r}=e,{selected:s=!1}=e;const i=Wt(),o=()=>i("click",r);return t.$$set=a=>{"tag"in a&&n(0,r=a.tag),"selected"in a&&n(1,s=a.selected)},[r,s,o]}class FT extends J{constructor(e){super(),Y(this,e,LT,MT,G,{tag:0,selected:1})}}function UT(t){let e,n,r;return{c(){e=w("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(s,i){R(s,e,i),n||(r=[j(e,"click",t[0]),j(e,"keyup",Gc(t[0]))],n=!0)},p:A,i:A,o:A,d(s){s&&C(e),n=!1,Re(r)}}}function xT(t){return[()=>Un.navigateTo("help")]}class VT extends J{constructor(e){super(),Y(this,e,xT,UT,G,{})}}function Qu(t,e,n){const r=t.slice();return r[17]=e[n],r[19]=n,r}function BT(t){let e,n,r,s,i=t[20].message+"",o;return{c(){e=w("div"),n=w("i"),r=M(),s=w("span"),o=le(i),f(n,"class",Qe("codicon codicon-error")+" svelte-kduymz"),f(e,"class","suggestion-footer svelte-kduymz")},m(a,c){R(a,e,c),y(e,n),y(e,r),y(e,s),y(s,o)},p(a,c){c&2&&i!==(i=a[20].message+"")&&ve(o,i)},i:A,o:A,d(a){a&&C(e)}}}function jT(t){let e,n,r,s=t[5],i=[];for(let a=0;a<s.length;a+=1)i[a]=Yu(Qu(t,s,a));const o=a=>b(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=M(),n=w("div"),f(n,"class","suggestion-footer svelte-kduymz")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);R(a,e,c),R(a,n,c),r=!0},p(a,c){if(c&100){s=a[5];let l;for(l=0;l<s.length;l+=1){const u=Qu(a,s,l);i[l]?(i[l].p(u,c),v(i[l],1)):(i[l]=Yu(u),i[l].c(),v(i[l],1),i[l].m(e.parentNode,e))}for(fe(),l=s.length;l<i.length;l+=1)o(l);pe()}},i(a){if(!r){for(let c=0;c<s.length;c+=1)v(i[c]);r=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);r=!1},d(a){Gt(i,a),a&&C(e),a&&C(n)}}}function Yu(t){let e,n;return e=new FT({props:{tag:t[17],selected:t[19]===t[2]}}),e.$on("click",function(){Ei(t[6](t[17]))&&t[6](t[17]).apply(this,arguments)}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){t=r;const i={};s&32&&(i.tag=t[17]),s&4&&(i.selected=t[19]===t[2]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function qT(t){let e,n,r;return n=new Wc({}),{c(){e=w("div"),x(n.$$.fragment),f(e,"class","suggestion-footer svelte-kduymz")},m(s,i){R(s,e,i),F(n,e,null),r=!0},p:A,i(s){r||(v(n.$$.fragment,s),r=!0)},o(s){b(n.$$.fragment,s),r=!1},d(s){s&&C(e),U(n)}}}function zT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g;function _(O){t[11](O)}let E={};t[3]!==void 0&&(E.modifier=t[3]),o=new mT({props:E}),$e.push(()=>St(o,"modifier",_)),l=new VT({});let I={ctx:t,current:null,token:null,hasCatch:!0,pending:qT,then:jT,catch:BT,error:20,blocks:[,,,]};return Gs(d=t[1],I),{c(){e=w("div"),n=w("i"),r=M(),s=w("input"),i=M(),x(o.$$.fragment),c=M(),x(l.$$.fragment),u=M(),h=w("ol"),I.block.c(),f(n,"class","codicon codicon-search spaced svelte-kduymz"),f(s,"type","text"),f(s,"name","searchbar"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-kduymz"),f(h,"class","svelte-kduymz"),de(h,"open",t[4]),f(e,"class","searchbar svelte-kduymz"),de(e,"open",t[4])},m(O,k){R(O,e,k),y(e,n),y(e,r),y(e,s),ut(s,t[0]),y(e,i),F(o,e,null),y(e,c),F(l,e,null),y(e,u),y(e,h),I.block.m(h,I.anchor=null),I.mount=()=>h,I.anchor=null,p=!0,m||(g=[j(s,"input",t[8]),j(s,"focus",HT),j(s,"blur",t[9]),j(s,"keydown",t[10]),j(e,"blur",t[12])],m=!0)},p(O,[k]){t=O,k&1&&s.value!==t[0]&&ut(s,t[0]);const N={};!a&&k&8&&(a=!0,N.modifier=t[3],kt(()=>a=!1)),o.$set(N),I.ctx=t,k&2&&d!==(d=t[1])&&Gs(d,I)||Lh(I,t,k),(!p||k&16)&&de(h,"open",t[4]),(!p||k&16)&&de(e,"open",t[4])},i(O){p||(v(o.$$.fragment,O),v(l.$$.fragment,O),v(I.block),p=!0)},o(O){b(o.$$.fragment,O),b(l.$$.fragment,O);for(let k=0;k<3;k+=1){const N=I.blocks[k];b(N)}p=!1},d(O){O&&C(e),U(o),U(l),I.block.d(),I.token=null,I=null,m=!1,Re(g)}}}const HT=t=>{t.target.scrollIntoView({block:"center",behavior:"smooth"})};function KT(t,e,n){let r;Pe(t,es,k=>n(13,r=k));let{excludeSupertags:s=!1}=e;const i=Wt();let o,a="",c=0,l="+",u=!1,h=[];const d=k=>()=>{i("pick",Mg(k,l)),m()};async function p(k){n(4,u=!0),n(5,h=[...s?[]:r.supertags.filter(N=>N.name.toLowerCase().includes(k.toLowerCase())).map(N=>vi(N.name,Object.keys(N.tags).length,"supertag")),...await Lg(k)])}const m=()=>{n(0,a=""),n(5,h=[]),n(4,u=!1)};function g(){a=this.value,n(0,a)}const _=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(4,u=!1)},E=k=>{ao(k)?d(h.length>c?h[c]:vi(a,0,"ambiguous"))():k.code==="Escape"?k.target.blur():k.code==="ArrowUp"&&h.length>0?n(2,c=(c+h.length-1)%h.length):k.code==="ArrowDown"&&h.length>0&&n(2,c=(c+1)%h.length)};function I(k){l=k,n(3,l)}const O=()=>{n(4,u=!1)};return t.$$set=k=>{"excludeSupertags"in k&&n(7,s=k.excludeSupertags)},t.$$.update=()=>{t.$$.dirty&1&&(n(5,h=[]),n(2,c=0),a!==""&&n(1,o=p(a)))},[a,o,c,l,u,h,d,s,g,_,E,I,O]}class GT extends J{constructor(e){super(),Y(this,e,KT,zT,G,{excludeSupertags:7})}}const Bg=JSON.parse,jg=JSON.stringify,qg=(t,e,n=jg,r=Bg)=>{const s=zg(t,r,e),i=ts(s??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},co=(t,e,n=jg,r=Bg)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?zg(t,r):null,o=ts(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},zg=(t,e,n)=>{try{const r=e(localStorage.getItem(t));return typeof r=="object"&&typeof n=="object"?{...n,...r}:r}catch{return null}};function WT(){const t=[],{subscribe:e,update:n,set:r}=co("activeTags",t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:async s=>{let i=oo("+",s,0,"general");try{const o=await Lg(s);o.length>0&&(i=Mg(o[0],"+"))}catch{}n(o=>(o.push(i),o))},removeByIndex:s=>n(i=>(i.splice(s,1),i))}}const At=WT(),QT="/assets/shironeko-confused-4071d5b2.png";function YT(t){let e,n,r,s,i;return{c(){e=w("div"),n=w("img"),s=M(),i=w("span"),i.textContent="No results found",Ct(n.src,r=QT)||f(n,"src",r),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){R(o,e,a),y(e,n),y(e,s),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class JT extends J{constructor(e){super(),Y(this,e,null,YT,G,{})}}const XT=()=>{const{subscribe:e,set:n}=co("count",null);return{subscribe:e,set:n,reset(){n(0)}}},lo=XT(),ZT=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),Ju=t=>ZT[t]??"";function ek(t){let e,n=tr(t[0].name)+"",r,s,i,o;return{c(){e=w("button"),r=le(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",s=Qe(Ju(t[0].type))+" svelte-d6seti"),de(e,"active",t[3]),de(e,"icon",t[2]),de(e,"supertag",t[4])},m(a,c){R(a,e,c),y(e,r),i||(o=j(e,"click",function(){Ei(t[4]?Xu:t[8])&&(t[4]?Xu:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=tr(t[0].name)+"")&&ve(r,n),c&1&&s!==(s=Qe(Ju(t[0].type))+" svelte-d6seti")&&f(e,"class",s),c&9&&de(e,"active",t[3]),c&5&&de(e,"icon",t[2]),c&17&&de(e,"supertag",t[4])},i:A,o:A,d(a){a&&C(e),i=!1,o()}}}const Xu=()=>{};function tk(t,e,n){let r,s,i,o,a,c,l;Pe(t,At,d=>n(6,c=d)),Pe(t,es,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?At.removeByIndex(s):At.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,r=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,s=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=r.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=s>=0),t.$$.dirty&1&&n(2,a=Qb(u.type))},[u,s,a,o,i,r,c,l,h]}class nk extends J{constructor(e){super(),Y(this,e,tk,ek,G,{tag:0})}}function rk(t){let e,n,r,s,i;return{c(){e=w("a"),n=w("i"),r=M(),s=le(t[1]),f(n,"class","codicon codicon-link"),f(e,"href",i=t[0].toString()),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(o,a){R(o,e,a),y(e,n),y(e,r),y(e,s)},p(o,[a]){a&2&&ve(s,o[1]),a&1&&i!==(i=o[0].toString())&&f(e,"href",i)},i:A,o:A,d(o){o&&C(e)}}}function sk(t,e,n){let r,{url:s}=e;return t.$$set=i=>{"url"in i&&n(0,s=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=s.hostname.replace(/^www./,""))},[s,r]}class ik extends J{constructor(e){super(),Y(this,e,sk,rk,G,{url:0})}}function Zu(t){let e,n;return e=new ik({props:{url:t[0]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.url=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function ok(t){let e,n,r=t[0]&&Zu(t);return{c(){r&&r.c(),e=nt()},m(s,i){r&&r.m(s,i),R(s,e,i),n=!0},p(s,[i]){s[0]?r?(r.p(s,i),i&1&&v(r,1)):(r=Zu(s),r.c(),v(r,1),r.m(e.parentNode,e)):r&&(fe(),b(r,1,1,()=>{r=null}),pe())},i(s){n||(v(r),n=!0)},o(s){b(r),n=!1},d(s){r&&r.d(s),s&&C(e)}}}function ak(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(1,s=i.source)},t.$$.update=()=>{t.$$.dirty&2&&n(0,r=$g(s)?new URL(s):null)},[r,s]}class ck extends J{constructor(e){super(),Y(this,e,ak,ok,G,{source:1})}}function lk(t){let e,n;const r=t[1].default,s=Dh(r,t,t[0],null);return{c(){e=w("div"),s&&s.c(),f(e,"class","svelte-11wqnx2")},m(i,o){R(i,e,o),s&&s.m(e,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&1)&&Ph(s,r,i,i[0],n?Oh(r,i[0],o,null):$h(i[0]),null)},i(i){n||(v(s,i),n=!0)},o(i){b(s,i),n=!1},d(i){i&&C(e),s&&s.d(i)}}}function uk(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class Hs extends J{constructor(e){super(),Y(this,e,uk,lk,G,{})}}const eh=6e4,wi=t=>{if(!hk(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/eh,r=new Date().getTime()/eh-e;if(r<1)return"just now";if(r<60)return $n(r,"minute");const s=r/60;if(s<24)return $n(s,"hour");const i=s/24;if(i<7)return $n(i,"day");if(i<30.5)return $n(i/7,"week");if(i<365.25)return $n(i/30.5,"month");const o=i/365.25;return $n(o,"year")},hk=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",$n=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function dk(t){let e,n=wi(t[0])+"",r;return{c(){e=w("span"),r=le(n),f(e,"class","svelte-1vg7vp7")},m(s,i){R(s,e,i),y(e,r)},p(s,[i]){i&1&&n!==(n=wi(s[0])+"")&&ve(r,n)},i:A,o:A,d(s){s&&C(e)}}}function fk(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class pk extends J{constructor(e){super(),Y(this,e,fk,dk,G,{value:0})}}function gk(t){let e,n=$t(t[0])+"",r;return{c(){e=w("span"),r=le(n),f(e,"data-testid","score"),f(e,"class","codicon codicon-heart svelte-13tqmta")},m(s,i){R(s,e,i),y(e,r)},p(s,[i]){i&1&&n!==(n=$t(s[0])+"")&&ve(r,n)},i:A,o:A,d(s){s&&C(e)}}}function mk(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class yk extends J{constructor(e){super(),Y(this,e,mk,gk,G,{value:0})}}function _k(t){let e,n,r=t[0].author+"",s,i,o,a=wi(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=w("div"),n=w("span"),s=le(r),i=M(),o=w("span"),c=le(a),l=M(),u=w("span"),d=le(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,m){R(p,e,m),y(e,n),y(n,s),y(e,i),y(e,o),y(o,c),y(e,l),y(e,u),y(u,d)},p(p,[m]){m&1&&r!==(r=p[0].author+"")&&ve(s,r),m&1&&a!==(a=wi(p[0].createdAt)+"")&&ve(c,a),m&1&&h!==(h=p[0].content+"")&&ve(d,h)},i:A,o:A,d(p){p&&C(e)}}}function vk(t,e,n){let{comment:r}=e;return t.$$set=s=>{"comment"in s&&n(0,r=s.comment)},[r]}class wk extends J{constructor(e){super(),Y(this,e,vk,_k,G,{comment:0})}}function Ik(t){let e,n,r;return{c(){e=w("a"),n=w("i"),r=le(" File"),f(n,"class","codicon codicon-link-external"),f(e,"href",t[0]),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(s,i){R(s,e,i),y(e,n),y(e,r)},p(s,[i]){i&1&&f(e,"href",s[0])},i:A,o:A,d(s){s&&C(e)}}}function Ek(t,e,n){let{url:r}=e;return t.$$set=s=>{"url"in s&&n(0,r=s.url)},[r]}class bk extends J{constructor(e){super(),Y(this,e,Ek,Ik,G,{url:0})}}function th(t,e,n){const r=t.slice();return r[8]=e[n],r}function nh(t,e,n){const r=t.slice();return r[4]=e[n],r}function Tk(t){let e,n;return e=new yk({props:{value:t[0].score}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].score),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function kk(t){let e,n;return e=new pk({props:{value:t[0].change}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].change),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Sk(t){let e,n;return e=new bk({props:{url:t[0].file_url}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.url=r[0].file_url),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function rh(t){let e,n,r,s;return r=new Hs({props:{$$slots:{default:[Ak]},$$scope:{ctx:t}}}),{c(){e=w("span"),e.textContent="•",n=M(),x(r.$$.fragment),f(e,"class","svelte-9eek1l")},m(i,o){R(i,e,o),R(i,n,o),F(r,i,o),s=!0},p(i,o){const a={};o&2049&&(a.$$scope={dirty:o,ctx:i}),r.$set(a)},i(i){s||(v(r.$$.fragment,i),s=!0)},o(i){b(r.$$.fragment,i),s=!1},d(i){i&&C(e),i&&C(n),U(r,i)}}}function Ak(t){let e,n;return e=new ck({props:{source:t[0].source}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.source=r[0].source),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Ck(t){let e,n,r,s={ctx:t,current:null,token:null,hasCatch:!1,pending:$k,then:Nk,catch:Dk,value:7,blocks:[,,,]};return Gs(n=Wu(t[0].id),s),{c(){e=nt(),s.block.c()},m(i,o){R(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,r=!0},p(i,o){t=i,s.ctx=t,o&1&&n!==(n=Wu(t[0].id))&&Gs(n,s)||Lh(s,t,o)},i(i){r||(v(s.block),r=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];b(a)}r=!1},d(i){i&&C(e),s.block.d(i),s.token=null,s=null}}}function Rk(t){let e,n,r=t[0].tags,s=[];for(let o=0;o<r.length;o+=1)s[o]=ih(nh(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=w("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","tags svelte-9eek1l")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&1){r=o[0].tags;let c;for(c=0;c<r.length;c+=1){const l=nh(o,r,c);s[c]?(s[c].p(l,a),v(s[c],1)):(s[c]=ih(l),s[c].c(),v(s[c],1),s[c].m(e,null))}for(fe(),c=r.length;c<s.length;c+=1)i(c);pe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)v(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Gt(s,o)}}}function Dk(t){return{c:A,m:A,p:A,i:A,o:A,d:A}}function Nk(t){let e,n,r,s;const i=[Pk,Ok],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=nt()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(fe(),b(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function Ok(t){let e;return{c(){e=w("span"),e.textContent="Comments for this post are not available",f(e,"class","no-comments svelte-9eek1l")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}function Pk(t){let e,n,r=t[7],s=[];for(let o=0;o<r.length;o+=1)s[o]=sh(th(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=w("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","comments svelte-9eek1l")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&1){r=o[7];let c;for(c=0;c<r.length;c+=1){const l=th(o,r,c);s[c]?(s[c].p(l,a),v(s[c],1)):(s[c]=sh(l),s[c].c(),v(s[c],1),s[c].m(e,null))}for(fe(),c=r.length;c<s.length;c+=1)i(c);pe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)v(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Gt(s,o)}}}function sh(t){let e,n;return e=new wk({props:{comment:t[8]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.comment=r[8]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function $k(t){let e,n;return e=new Wc({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function ih(t){let e,n;return e=new nk({props:{tag:t[4]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=r[4]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Mk(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_=t[0].tags.length+"",E,I,O,k,N=(t[0].comment_count||"No")+"",D,W,_e,$,q,te,ct,re;r=new Hs({props:{$$slots:{default:[Tk]},$$scope:{ctx:t}}}),a=new Hs({props:{$$slots:{default:[kk]},$$scope:{ctx:t}}}),h=new Hs({props:{$$slots:{default:[Sk]},$$scope:{ctx:t}}});let ne=t[0].source&&rh(t);const He=[Rk,Ck],ue=[];function vt(oe,z){return oe[1]==="tags"?0:1}return $=vt(t),q=ue[$]=He[$](t),{c(){e=w("div"),n=w("div"),x(r.$$.fragment),s=M(),i=w("span"),i.textContent="•",o=M(),x(a.$$.fragment),c=M(),l=w("span"),l.textContent="•",u=M(),x(h.$$.fragment),d=M(),ne&&ne.c(),p=M(),m=w("div"),g=w("button"),E=le(_),I=le(" tags"),O=M(),k=w("button"),D=le(N),W=le(" comments"),_e=M(),q.c(),f(i,"class","svelte-9eek1l"),f(l,"class","svelte-9eek1l"),f(n,"class","summary svelte-9eek1l"),f(g,"class","codicon codicon-tag svelte-9eek1l"),de(g,"active",t[1]==="tags"),f(k,"class","codicon codicon-comment-discussion svelte-9eek1l"),de(k,"active",t[1]==="comments"),f(m,"class","tabs svelte-9eek1l"),f(e,"class","details svelte-9eek1l")},m(oe,z){R(oe,e,z),y(e,n),F(r,n,null),y(n,s),y(n,i),y(n,o),F(a,n,null),y(n,c),y(n,l),y(n,u),F(h,n,null),y(n,d),ne&&ne.m(n,null),y(e,p),y(e,m),y(m,g),y(g,E),y(g,I),y(m,O),y(m,k),y(k,D),y(k,W),y(e,_e),ue[$].m(e,null),te=!0,ct||(re=[j(g,"click",t[2]),j(k,"click",t[3])],ct=!0)},p(oe,[z]){const X={};z&2049&&(X.$$scope={dirty:z,ctx:oe}),r.$set(X);const Jt={};z&2049&&(Jt.$$scope={dirty:z,ctx:oe}),a.$set(Jt);const pr={};z&2049&&(pr.$$scope={dirty:z,ctx:oe}),h.$set(pr),oe[0].source?ne?(ne.p(oe,z),z&1&&v(ne,1)):(ne=rh(oe),ne.c(),v(ne,1),ne.m(n,null)):ne&&(fe(),b(ne,1,1,()=>{ne=null}),pe()),(!te||z&1)&&_!==(_=oe[0].tags.length+"")&&ve(E,_),(!te||z&2)&&de(g,"active",oe[1]==="tags"),(!te||z&1)&&N!==(N=(oe[0].comment_count||"No")+"")&&ve(D,N),(!te||z&2)&&de(k,"active",oe[1]==="comments");let Cn=$;$=vt(oe),$===Cn?ue[$].p(oe,z):(fe(),b(ue[Cn],1,1,()=>{ue[Cn]=null}),pe(),q=ue[$],q?q.p(oe,z):(q=ue[$]=He[$](oe),q.c()),v(q,1),q.m(e,null))},i(oe){te||(v(r.$$.fragment,oe),v(a.$$.fragment,oe),v(h.$$.fragment,oe),v(ne),v(q),te=!0)},o(oe){b(r.$$.fragment,oe),b(a.$$.fragment,oe),b(h.$$.fragment,oe),b(ne),b(q),te=!1},d(oe){oe&&C(e),U(r),U(a),U(h),ne&&ne.d(),ue[$].d(),ct=!1,Re(re)}}}function Lk(t,e,n){let{post:r}=e,s="tags";const i=()=>{n(1,s="tags")},o=()=>{n(1,s="comments")};return t.$$set=a=>{"post"in a&&n(0,r=a.post)},[r,s,i,o]}class Fk extends J{constructor(e){super(),Y(this,e,Lk,Mk,G,{post:0})}}const Ii=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function Uk(t){let e,n,r,s,i,o,a,c;return{c(){e=w("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-u6tlyz")},m(l,u){R(l,e,u),t[3](e),a||(c=[j(e,"click",t[2]),j(e,"keydown",Dg)],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,Re(c)}}}function xk(t,e,n){let{post:r}=e,s;nr(()=>Ii.observe(s)),Ti(()=>Ii.unobserve(s));function i(a){fn.call(this,t,a)}function o(a){$e[a?"unshift":"push"](()=>{s=a,n(1,s)})}return t.$$set=a=>{"post"in a&&n(0,r=a.post)},[r,s,i,o]}let Vk=class extends J{constructor(e){super(),Y(this,e,xk,Uk,G,{post:0})}};const Bk="/assets/play-f2f6faca.svg",jk="/assets/load-8440afed.svg",qk="/assets/pause-6f7851a2.svg";function zk(t){let e,n;return{c(){e=w("img"),Ct(e.src,n=Bk)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Zg(e,"margin-left","4px")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function Hk(t){let e,n;return{c(){e=w("img"),Ct(e.src,n=qk)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function Kk(t){let e,n;return{c(){e=w("img"),Ct(e.src,n=jk)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function Gk(t){let e,n,r,s,i;function o(l,u){return l[1]?Kk:l[0]?Hk:zk}let a=o(t),c=a(t);return{c(){e=w("button"),n=w("div"),c.c(),f(n,"class","circle svelte-142dl5p"),f(e,"class",r=Qe(t[3].class)+" svelte-142dl5p"),de(e,"play",t[0]&&!t[1])},m(l,u){R(l,e,u),y(e,n),c.m(n,null),s||(i=j(e,"click",Ks(t[2])),s=!0)},p(l,[u]){a===(a=o(l))&&c?c.p(l,u):(c.d(1),c=a(l),c&&(c.c(),c.m(n,null))),u&8&&r!==(r=Qe(l[3].class)+" svelte-142dl5p")&&f(e,"class",r),u&11&&de(e,"play",l[0]&&!l[1])},i:A,o:A,d(l){l&&C(e),c.d(),s=!1,i()}}}function Wk(t,e,n){let{playing:r}=e,{loading:s}=e;const i=()=>{n(1,s=!0),n(0,r=!r)};return t.$$set=o=>{n(3,e=jo(jo({},e),Xc(o))),"playing"in o&&n(0,r=o.playing),"loading"in o&&n(1,s=o.loading)},e=Xc(e),[r,s,i,e]}class Hg extends J{constructor(e){super(),Y(this,e,Wk,Gk,G,{playing:0,loading:1})}}function Qk(t){let e,n,r,s,i,o,a,c,l,u,h,d,p;function m(E){t[10](E)}function g(E){t[11](E)}let _={class:"center"};return t[2]!==void 0&&(_.playing=t[2]),t[3]!==void 0&&(_.loading=t[3]),a=new Hg({props:_}),$e.push(()=>St(a,"playing",m)),$e.push(()=>St(a,"loading",g)),{c(){e=w("div"),n=w("img"),o=M(),x(a.$$.fragment),f(n,"class","media-img svelte-13nzi3z"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",r=t[0].id.toString()),f(n,"width",s=t[0].width),f(n,"height",i=t[0].height),f(n,"tabindex","0"),f(e,"class","container svelte-13nzi3z"),f(e,"style",u=`aspect-ratio: ${t[0].width} / ${t[0].height}`)},m(E,I){R(E,e,I),y(e,n),t[8](n),y(e,o),F(a,e,null),h=!0,d||(p=[j(n,"click",t[7]),j(n,"keydown",Dg),j(n,"load",t[9])],d=!0)},p(E,[I]){(!h||I&16)&&f(n,"data-src",E[4]),(!h||I&1&&r!==(r=E[0].id.toString()))&&f(n,"alt",r),(!h||I&1&&s!==(s=E[0].width))&&f(n,"width",s),(!h||I&1&&i!==(i=E[0].height))&&f(n,"height",i);const O={};!c&&I&4&&(c=!0,O.playing=E[2],kt(()=>c=!1)),!l&&I&8&&(l=!0,O.loading=E[3],kt(()=>l=!1)),a.$set(O),(!h||I&1&&u!==(u=`aspect-ratio: ${E[0].width} / ${E[0].height}`))&&f(e,"style",u)},i(E){h||(v(a.$$.fragment,E),h=!0)},o(E){b(a.$$.fragment,E),h=!1},d(E){E&&C(e),t[8](null),U(a),d=!1,Re(p)}}}function Yk(t,e,n){let r,s,i,{post:o}=e;Wt();let a,c=!1,l=!1;nr(()=>Ii.observe(a)),Ti(()=>Ii.unobserve(a));function u(g){fn.call(this,t,g)}function h(g){$e[g?"unshift":"push"](()=>{a=g,n(1,a),n(2,c),n(6,s),n(5,r),n(0,o)})}const d=()=>n(3,l=!1);function p(g){c=g,n(2,c)}function m(g){l=g,n(3,l)}return t.$$set=g=>{"post"in g&&n(0,o=g.post)},t.$$.update=()=>{t.$$.dirty&1&&n(5,r=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(6,s=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&100&&n(4,i=c?s:r),t.$$.dirty&102&&a&&n(1,a.src=c?s:r,a)},[o,a,c,l,i,r,s,u,h,d,p,m]}class Jk extends J{constructor(e){super(),Y(this,e,Yk,Qk,G,{post:0})}}const oh=t=>{if(typeof t!="number")throw new TypeError(`Attempted to call formatVideoTime with invalid value: ${t}`);const e=Math.floor(t),n=e%60,r=Math.floor(e/60);return`${ah(r)}:${ah(n)}`},ah=t=>{const e=String(t),n=Math.max(0,2-e.length);return`${"0".repeat(n)}${e}`};function ch(t){let e,n,r,s=!0,i=!1,o,a,c,l=oh(t[15])+"",u,h,d,p,m,g,_,E,I,O,k;function N(){cancelAnimationFrame(o),e.paused||(o=Jg(N),i=!0),t[24].call(e)}function D($){t[29]($)}function W($){t[30]($)}let _e={class:"center"};return t[5]!==void 0&&(_e.playing=t[5]),t[6]!==void 0&&(_e.loading=t[6]),g=new Hg({props:_e}),$e.push(()=>St(g,"playing",D)),$e.push(()=>St(g,"loading",W)),{c(){e=w("video"),a=M(),c=w("span"),u=le(l),h=M(),d=w("input"),m=M(),x(g.$$.fragment),f(e,"poster",t[1]),e.loop=t[4],Ct(e.src,n=t[0])||f(e,"src",n),f(e,"preload","metadata"),f(e,"style",r=`aspect-ratio: ${t[2]} / ${t[3]}`),f(e,"class","svelte-1ghkjuv"),t[8]===void 0&&Pr(()=>t[25].call(e)),f(c,"class","svelte-1ghkjuv"),de(c,"hide",t[12]),f(d,"type","range"),f(d,"min",0),f(d,"max",t[8]),f(d,"step",.0166666),f(d,"style",p=`background-image: linear-gradient(90deg, var(--accent) ${t[13]}%, var(--background-2) ${t[13]}%);}`),f(d,"class","svelte-1ghkjuv"),de(d,"hide",t[12])},m($,q){R($,e,q),t[22](e),R($,a,q),R($,c,q),y(c,u),R($,h,q),R($,d,q),ut(d,t[7]),R($,m,q),F(g,$,q),I=!0,O||(k=[j(e,"play",t[23]),j(e,"pause",t[23]),j(e,"timeupdate",N),j(e,"durationchange",t[25]),j(e,"waiting",t[19]),j(e,"playing",t[20]),j(e,"pause",t[20]),j(e,"ended",t[26]),j(e,"dblclick",Ks(Mh(t[27]))),j(d,"change",t[28]),j(d,"input",t[28]),j(d,"click",Ks(Zk))],O=!0)},p($,q){(!I||q[0]&2)&&f(e,"poster",$[1]),(!I||q[0]&16)&&(e.loop=$[4]),(!I||q[0]&1&&!Ct(e.src,n=$[0]))&&f(e,"src",n),(!I||q[0]&12&&r!==(r=`aspect-ratio: ${$[2]} / ${$[3]}`))&&f(e,"style",r),q[0]&16384&&s!==(s=$[14])&&e[s?"pause":"play"](),!i&&q[0]&128&&!isNaN($[7])&&(e.currentTime=$[7]),i=!1,(!I||q[0]&32768)&&l!==(l=oh($[15])+"")&&ve(u,l),(!I||q[0]&4096)&&de(c,"hide",$[12]),(!I||q[0]&256)&&f(d,"max",$[8]),(!I||q[0]&8192&&p!==(p=`background-image: linear-gradient(90deg, var(--accent) ${$[13]}%, var(--background-2) ${$[13]}%);}`))&&f(d,"style",p),q[0]&128&&ut(d,$[7]),(!I||q[0]&4096)&&de(d,"hide",$[12]);const te={};!_&&q[0]&32&&(_=!0,te.playing=$[5],kt(()=>_=!1)),!E&&q[0]&64&&(E=!0,te.loading=$[6],kt(()=>E=!1)),g.$set(te)},i($){I||(v(g.$$.fragment,$),I=!0)},o($){b(g.$$.fragment,$),I=!1},d($){$&&C(e),t[22](null),$&&C(a),$&&C(c),$&&C(h),$&&C(d),$&&C(m),U(g,$),O=!1,Re(k)}}}function Xk(t){let e,n,r,s,i,o=t[9]&&ch(t);return{c(){e=w("div"),o&&o.c(),f(e,"tabindex","0"),f(e,"class","player svelte-1ghkjuv"),f(e,"style",n=`aspect-ratio: ${t[2]} / ${t[3]}`)},m(a,c){R(a,e,c),o&&o.m(e,null),t[31](e),r=!0,s||(i=[j(e,"click",t[21]),j(e,"keydown",t[18])],s=!0)},p(a,c){a[9]?o?(o.p(a,c),c[0]&512&&v(o,1)):(o=ch(a),o.c(),v(o,1),o.m(e,null)):o&&(fe(),b(o,1,1,()=>{o=null}),pe()),(!r||c[0]&12&&n!==(n=`aspect-ratio: ${a[2]} / ${a[3]}`))&&f(e,"style",n)},i(a){r||(v(o),r=!0)},o(a){b(o),r=!1},d(a){a&&C(e),o&&o.d(),t[31](null),s=!1,Re(i)}}}const lh=5,Zk=()=>{};function eS(t,e,n){let r,s,i,o,{src:a}=e,{poster:c}=e,{width:l}=e,{height:u}=e,{loop:h}=e,d,p,m=!1,g=!1,_=0,E=0,I=!1;const O=()=>{n(7,_=Math.max(0,_-lh))},k=()=>{n(7,_=Math.min(E,_+lh))},N=X=>{ao(X)?X.target.click():Rg(X)?(X.preventDefault(),n(5,m=!m)):X.key==="ArrowLeft"?O():X.key==="ArrowRight"&&k()},D=new IntersectionObserver(X=>{for(const Jt of X)Jt.isIntersecting?n(9,I=!0):p&&(n(5,m=!1),n(6,g=!1),p.addEventListener("error",()=>{n(9,I=!1)},{once:!0}),n(11,p.src="",p))},{rootMargin:"0px"});nr(()=>D.observe(d)),Ti(()=>D.unobserve(d));const W=()=>{n(6,g=!0)},_e=()=>{n(6,g=!1)};function $(X){fn.call(this,t,X)}function q(X){$e[X?"unshift":"push"](()=>{p=X,n(11,p)})}function te(){s=this.paused,n(14,s),n(5,m),n(9,I)}function ct(){_=this.currentTime,n(7,_)}function re(){E=this.duration,n(8,E)}const ne=()=>{h||(n(6,g=!1),n(5,m=!1))},He=X=>{X.offsetX<X.target.clientWidth/2?O():k()};function ue(){_=Sa(this.value),n(7,_)}function vt(X){m=X,n(5,m),n(9,I)}function oe(X){g=X,n(6,g)}function z(X){$e[X?"unshift":"push"](()=>{d=X,n(10,d)})}return t.$$set=X=>{"src"in X&&n(0,a=X.src),"poster"in X&&n(1,c=X.poster),"width"in X&&n(2,l=X.width),"height"in X&&n(3,u=X.height),"loop"in X&&n(4,h=X.loop)},t.$$.update=()=>{t.$$.dirty[0]&384&&n(15,r=E-_),t.$$.dirty[0]&544&&n(5,m=I&&m),t.$$.dirty[0]&32&&n(14,s=!m),t.$$.dirty[0]&384&&n(13,i=_/E*98+1),t.$$.dirty[0]&96&&n(12,o=m&&!g)},[a,c,l,u,h,m,g,_,E,I,d,p,o,i,s,r,O,k,N,W,_e,$,q,te,ct,re,ne,He,ue,vt,oe,z]}class tS extends J{constructor(e){super(),Y(this,e,eS,Xk,G,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function nS(t){let e,n;return e=new Jk({props:{post:t[0]}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function rS(t){let e,n;return e=new tS({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(hh)}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.src=r[0].file_url),s&1&&(i.poster=r[0].sample_url),s&1&&(i.width=r[0].width),s&1&&(i.height=r[0].height),s&1&&(i.loop=r[0].tags.some(hh)),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function sS(t){let e,n;return e=new Vk({props:{post:t[0]}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function uh(t){let e,n;return e=new Fk({props:{post:t[0]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function iS(t){let e,n,r,s,i;const o=[sS,rS,nS],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),r=a[n]=o[n](t);let l=t[1]&&uh(t);return{c(){e=w("div"),r.c(),s=M(),l&&l.c(),f(e,"class","svelte-1u2abt5")},m(u,h){R(u,e,h),a[n].m(e,null),y(e,s),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(fe(),b(a[d],1,1,()=>{a[d]=null}),pe(),r=a[n],r?r.p(u,h):(r=a[n]=o[n](u),r.c()),v(r,1),r.m(e,s)),u[1]?l?(l.p(u,h),h&2&&v(l,1)):(l=uh(u),l.c(),v(l,1),l.m(e,null)):l&&(fe(),b(l,1,1,()=>{l=null}),pe())},i(u){i||(v(r),v(l),i=!0)},o(u){b(r),b(l),i=!1},d(u){u&&C(e),a[n].d(),l&&l.d()}}}const hh=t=>t.name=="loop";function oS(t,e,n){let{post:r}=e,s=!1;const i=()=>{n(1,s=!s)};return t.$$set=o=>{"post"in o&&n(0,r=o.post)},[r,s,i]}class aS extends J{constructor(e){super(),Y(this,e,oS,iS,G,{post:0})}}function dh(t,e,n){const r=t.slice();return r[1]=e[n],r}function fh(t){let e,n;return e=new aS({props:{post:t[1]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function cS(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=fh(dh(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=w("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","svelte-jauryd")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=dh(o,r,c);s[c]?(s[c].p(l,a),v(s[c],1)):(s[c]=fh(l),s[c].c(),v(s[c],1),s[c].m(e,null))}for(fe(),c=r.length;c<s.length;c+=1)i(c);pe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)v(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Gt(s,o)}}}function lS(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class uS extends J{constructor(e){super(),Y(this,e,lS,cS,G,{posts:0})}}function hS(t){let e;return{c(){e=w("div")},m(n,r){R(n,e,r),t[1](e)},p:A,i:A,o:A,d(n){n&&C(e),t[1](null)}}}function dS(t,e,n){const r=Wt(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&r("visible")},{rootMargin:"1250px"});let i;function o(a){$e[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class fS extends J{constructor(e){super(),Y(this,e,dS,hS,G,{})}}const pS="/assets/shironeko-x-c28cad00.png";function gS(t){let e,n,r,s,i;return{c(){e=w("div"),n=w("img"),s=M(),i=w("span"),i.textContent="You have reached the end",Ct(n.src,r=pS)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){R(o,e,a),y(e,n),y(e,s),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class mS extends J{constructor(e){super(),Y(this,e,null,gS,G,{})}}const ph=()=>({pages:[],nextPage:0,ids:new Set}),yS=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},_S=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},vS=()=>{const{subscribe:t,update:e,set:n}=co("results",ph(),yS,_S);return{subscribe:t,addPage(r){e(s=>{const i=r.filter(o=>!s.ids.has(o.id));return i.forEach(o=>s.ids.add(o.id)),{pages:[...s.pages,i],nextPage:s.nextPage+1,ids:s.ids}})},reset(){n(ph())}}},Tr=vS(),gh={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},wS=()=>{const{subscribe:t,set:e}=qg("sort",{...gh});return{subscribe:t,set:e,reset(){e({...gh})}}},en=wS();function mh(t,e,n){const r=t.slice();return r[0]=e[n][0],r[3]=e[n][1],r}function yh(t){let e,n=t[3]+"",r,s;return{c(){e=w("option"),r=le(n),e.__value=s=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){R(i,e,o),y(e,r)},p(i,o){o&2&&n!==(n=i[3]+"")&&ve(r,n),o&2&&s!==(s=i[0])&&(e.__value=s,e.value=e.__value)},d(i){i&&C(e)}}}function IS(t){let e,n,r,s=Object.entries(t[1]),i=[];for(let o=0;o<s.length;o+=1)i[o]=yh(mh(t,s,o));return{c(){e=w("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&Pr(()=>t[2].call(e))},m(o,a){R(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);Zc(e,t[0],!0),n||(r=j(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){s=Object.entries(o[1]);let c;for(c=0;c<s.length;c+=1){const l=mh(o,s,c);i[c]?i[c].p(l,a):(i[c]=yh(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=s.length}a&3&&Zc(e,o[0])},i:A,o:A,d(o){o&&C(e),Gt(i,o),n=!1,r()}}}function ES(t,e,n){let{options:r}=e,{value:s}=e;function i(){s=em(this),n(0,s),n(1,r)}return t.$$set=o=>{"options"in o&&n(1,r=o.options),"value"in o&&n(0,s=o.value)},[s,r,i]}class bS extends J{constructor(e){super(),Y(this,e,ES,IS,G,{options:1,value:0})}}function TS(t){let e,n,r,s;return{c(){e=w("button"),n=le(t[0]),f(e,"class","svelte-17m158f")},m(i,o){R(i,e,o),y(e,n),r||(s=j(e,"click",t[1]),r=!0)},p(i,[o]){o&1&&ve(n,i[0])},i:A,o:A,d(i){i&&C(e),r=!1,s()}}}function kS(t,e,n){let r,s,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%r.length),n(2,o=r[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,r=Object.entries(i)),t.$$.dirty&48&&n(0,s=r[a][1])},[s,c,o,i,a,r]}class SS extends J{constructor(e){super(),Y(this,e,kS,TS,G,{options:3,value:2})}}function _h(t){let e,n;return e=new Og({props:{$$slots:{default:[AS]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&2049&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function AS(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_,E,I,O,k,N,D,W,_e,$,q,te,ct;function re(z){t[7](z)}let ne={options:DS};t[0].sortDirection!==void 0&&(ne.value=t[0].sortDirection),c=new Pg({props:ne}),$e.push(()=>St(c,"value",re));function He(z){t[8](z)}let ue={options:RS};t[0].sortProperty!==void 0&&(ue.value=t[0].sortProperty),h=new bS({props:ue}),$e.push(()=>St(h,"value",He));function vt(z){t[9](z)}let oe={options:NS};return t[0].scoreComparator!==void 0&&(oe.value=t[0].scoreComparator),I=new SS({props:oe}),$e.push(()=>St(I,"value",vt)),W=new _i({props:{text:"Done",title:"Return to searching."}}),W.$on("click",t[5]),$=new _i({props:{text:"Reset",title:"Reset sort and filter.",type:"secondary"}}),$.$on("click",t[6]),{c(){e=w("div"),n=w("h3"),n.textContent="Sorting and Filtering",r=M(),s=w("label"),i=w("b"),i.textContent="Sorting",o=M(),a=w("div"),x(c.$$.fragment),u=M(),x(h.$$.fragment),p=M(),m=w("label"),g=w("b"),g.textContent="Score Filtering",_=M(),E=w("div"),x(I.$$.fragment),k=M(),N=w("input"),D=M(),x(W.$$.fragment),_e=M(),x($.$$.fragment),f(a,"class","row svelte-1k7zufl"),f(s,"class","svelte-1k7zufl"),f(N,"type","number"),f(N,"min",0),f(N,"max",1e5),f(N,"step",1),f(N,"class","svelte-1k7zufl"),f(E,"class","row svelte-1k7zufl"),f(m,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(z,X){R(z,e,X),y(e,n),y(e,r),y(e,s),y(s,i),y(s,o),y(s,a),F(c,a,null),y(a,u),F(h,a,null),y(e,p),y(e,m),y(m,g),y(m,_),y(m,E),F(I,E,null),y(E,k),y(E,N),ut(N,t[0].scoreValue),y(e,D),F(W,e,null),y(e,_e),F($,e,null),q=!0,te||(ct=[j(N,"input",t[10]),j(N,"keyup",Gc(PS))],te=!0)},p(z,X){const Jt={};!l&&X&1&&(l=!0,Jt.value=z[0].sortDirection,kt(()=>l=!1)),c.$set(Jt);const pr={};!d&&X&1&&(d=!0,pr.value=z[0].sortProperty,kt(()=>d=!1)),h.$set(pr);const Cn={};!O&&X&1&&(O=!0,Cn.value=z[0].scoreComparator,kt(()=>O=!1)),I.$set(Cn),X&1&&Sa(N.value)!==z[0].scoreValue&&ut(N,z[0].scoreValue)},i(z){q||(v(c.$$.fragment,z),v(h.$$.fragment,z),v(I.$$.fragment,z),v(W.$$.fragment,z),v($.$$.fragment,z),q=!0)},o(z){b(c.$$.fragment,z),b(h.$$.fragment,z),b(I.$$.fragment,z),b(W.$$.fragment,z),b($.$$.fragment,z),q=!1},d(z){z&&C(e),U(c),U(h),U(I),U(W),U($),te=!1,Re(ct)}}}function CS(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_=t[1]&&_h(t);return{c(){e=w("button"),n=w("i"),r=M(),s=w("span"),i=le(t[3]),o=M(),a=w("i"),c=M(),l=w("span"),u=le(t[2]),h=M(),_&&_.c(),d=nt(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(E,I){R(E,e,I),y(e,n),y(e,r),y(e,s),y(s,i),y(e,o),y(e,a),y(e,c),y(e,l),y(l,u),R(E,h,I),_&&_.m(E,I),R(E,d,I),p=!0,m||(g=j(e,"click",t[4]),m=!0)},p(E,[I]){(!p||I&8)&&ve(i,E[3]),(!p||I&4)&&ve(u,E[2]),E[1]?_?(_.p(E,I),I&2&&v(_,1)):(_=_h(E),_.c(),v(_,1),_.m(d.parentNode,d)):_&&(fe(),b(_,1,1,()=>{_=null}),pe())},i(E){p||(v(_),p=!0)},o(E){b(_),p=!1},d(E){E&&C(e),E&&C(h),_&&_.d(E),E&&C(d),m=!1,g()}}}const RS=Object.freeze({id:"Uploaded",score:"Score",updated:"Updated"}),DS=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),NS=Object.freeze({">=":"≥","<=":"≤"}),OS=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),PS=t=>t.target.blur();function $S(t,e,n){let r,s,i;Pe(t,en,m=>n(0,i=m));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1),l=()=>{en.reset()};function u(m){t.$$.not_equal(i.sortDirection,m)&&(i.sortDirection=m,en.set(i))}function h(m){t.$$.not_equal(i.sortProperty,m)&&(i.sortProperty=m,en.set(i))}function d(m){t.$$.not_equal(i.scoreComparator,m)&&(i.scoreComparator=m,en.set(i))}function p(){i.scoreValue=Sa(this.value),en.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,r=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${$t(i.scoreValue)}`),t.$$.dirty&1&&n(2,s=OS[i.sortProperty][i.sortDirection])},[i,o,s,r,a,c,l,u,h,d,p]}class MS extends J{constructor(e){super(),Y(this,e,$S,CS,G,{})}}function LS(t){let e,n,r=$t(t[0])+"",s,i,o,a,c,l;return c=new MS({}),{c(){e=w("div"),n=w("span"),s=le(r),i=le(" results"),a=M(),x(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){R(u,e,h),y(e,n),y(n,s),y(n,i),y(e,a),F(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&r!==(r=$t(u[0])+"")&&ve(s,r),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(v(c.$$.fragment,u),l=!0)},o(u){b(c.$$.fragment,u),l=!1},d(u){u&&C(e),U(c)}}}function FS(t,e,n){let r;return Pe(t,lo,s=>n(0,r=s)),[r]}class US extends J{constructor(e){super(),Y(this,e,FS,LS,G,{})}}function vh(t,e,n){const r=t.slice();return r[6]=e[n],r}function wh(t){let e,n;return e=new uS({props:{posts:t[6]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.posts=r[6]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function xS(t){let e,n;return e=new mS({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function VS(t){let e,n;return e=new fS({}),e.$on("visible",t[5]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function BS(t){let e,n,r,s,i,o,a,c;e=new US({});let l=t[0].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=wh(vh(t,l,g));const h=g=>b(u[g],1,1,()=>{u[g]=null}),d=[VS,xS],p=[];function m(g,_){return g[1]?0:1}return i=m(t),o=p[i]=d[i](t),{c(){x(e.$$.fragment),n=M(),r=w("ol");for(let g=0;g<u.length;g+=1)u[g].c();s=M(),o.c(),a=nt(),f(r,"class","svelte-dsypei")},m(g,_){F(e,g,_),R(g,n,_),R(g,r,_);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(r,null);R(g,s,_),p[i].m(g,_),R(g,a,_),c=!0},p(g,[_]){if(_&1){l=g[0].pages;let I;for(I=0;I<l.length;I+=1){const O=vh(g,l,I);u[I]?(u[I].p(O,_),v(u[I],1)):(u[I]=wh(O),u[I].c(),v(u[I],1),u[I].m(r,null))}for(fe(),I=l.length;I<u.length;I+=1)h(I);pe()}let E=i;i=m(g),i===E?p[i].p(g,_):(fe(),b(p[E],1,1,()=>{p[E]=null}),pe(),o=p[i],o?o.p(g,_):(o=p[i]=d[i](g),o.c()),v(o,1),o.m(a.parentNode,a))},i(g){if(!c){v(e.$$.fragment,g);for(let _=0;_<l.length;_+=1)v(u[_]);v(o),c=!0}},o(g){b(e.$$.fragment,g),u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)b(u[_]);b(o),c=!1},d(g){U(e,g),g&&C(n),g&&C(r),Gt(u,g),g&&C(s),p[i].d(g),g&&C(a)}}}function jS(t,e,n){let r,s,i,o;Pe(t,Tr,l=>n(0,i=l)),Pe(t,lo,l=>n(4,o=l));const a=Wt(),c=()=>a("endreached");return t.$$.update=()=>{t.$$.dirty&16&&n(3,r=o/Ug),t.$$.dirty&9&&n(1,s=i.pages.length<r)},[i,s,a,r,o,c]}class qS extends J{constructor(e){super(),Y(this,e,jS,BS,G,{})}}function Ih(t){let e,n,r,s;const i=[HS,zS],o=[];function a(c,l){return c[0]===0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=nt()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e!==u&&(fe(),b(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n||(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function zS(t){let e,n;return e=new qS({}),e.$on("endreached",t[1]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function HS(t){let e,n;return e=new JT({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function KS(t){let e,n,r=t[0]!==null&&Ih(t);return{c(){r&&r.c(),e=nt()},m(s,i){r&&r.m(s,i),R(s,e,i),n=!0},p(s,[i]){s[0]!==null?r?(r.p(s,i),i&1&&v(r,1)):(r=Ih(s),r.c(),v(r,1),r.m(e.parentNode,e)):r&&(fe(),b(r,1,1,()=>{r=null}),pe())},i(s){n||(v(r),n=!0)},o(s){b(r),n=!1},d(s){r&&r.d(s),s&&C(e)}}}function GS(t,e,n){let r;Pe(t,lo,i=>n(0,r=i));function s(i){fn.call(this,t,i)}return[r,s]}class WS extends J{constructor(e){super(),Y(this,e,GS,KS,G,{})}}function QS(t){let e,n,r;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-69q5fy"),de(e,"visible",t[0])},m(s,i){R(s,e,i),n||(r=j(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&de(e,"visible",s[0])},i:A,o:A,d(s){s&&C(e),n=!1,r()}}}function YS(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>0||window.innerHeight+a>=document.body.scrollHeight),r=a};return nr(()=>{document.addEventListener("scroll",i,{passive:!0})}),Ti(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class JS extends J{constructor(e){super(),Y(this,e,YS,QS,G,{})}}function XS(t){let e,n,r,s,i,o,a,c,l,u,h;return{c(){e=w("div"),n=w("div"),r=w("i"),i=M(),o=w("div"),a=w("h3"),c=le(t[2]),l=M(),u=w("span"),h=le(t[1]),f(r,"class",s=Qe(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){R(d,e,p),y(e,n),y(n,r),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&s!==(s=Qe(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(r,"class",s),p&4&&ve(c,d[2]),p&2&&ve(h,d[1])},i:A,o:A,d(d){d&&C(e)}}}function ZS(t,e,n){let{icon:r}=e,{message:s}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,r=o.icon),"message"in o&&n(1,s=o.message),"title"in o&&n(2,i=o.title)},[r,s,i]}class Kg extends J{constructor(e){super(),Y(this,e,ZS,XS,G,{icon:0,message:1,title:2})}}function eA(t){let e;return{c(){e=w("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class tA extends J{constructor(e){super(),Y(this,e,null,eA,G,{})}}function Eh(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function bh(t){let e,n,r,s=t[0],i=[];for(let c=0;c<s.length;c+=1)i[c]=Th(Eh(t,s,c));const o=c=>b(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&kh(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=M(),a&&a.c(),n=nt()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);R(c,e,l),a&&a.m(c,l),R(c,n,l),r=!0},p(c,l){if(l&1){s=c[0];let u;for(u=0;u<s.length;u+=1){const h=Eh(c,s,u);i[u]?(i[u].p(h,l),v(i[u],1)):(i[u]=Th(h),i[u].c(),v(i[u],1),i[u].m(e.parentNode,e))}for(fe(),u=s.length;u<i.length;u+=1)o(u);pe()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=kh(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)v(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)b(i[l]);r=!1},d(c){Gt(i,c),c&&C(e),a&&a.d(c),c&&C(n)}}}function Th(t){let e,n;function r(){return t[3](t[8])}function s(){return t[4](t[6])}return e=new Ng({props:{tag:t[6]}}),e.$on("click",r),e.$on("contextmenu",s),{c(){x(e.$$.fragment)},m(i,o){F(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(v(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function kh(t){let e,n,r;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-123k4yr"></i>',f(e,"class","add-supertag svelte-123k4yr"),f(e,"title","Click to create a new supertag")},m(s,i){R(s,e,i),n||(r=j(e,"click",t[5]),n=!0)},p:A,d(s){s&&C(e),n=!1,r()}}}function nA(t){let e,n,r=t[0].length&&bh(t);return{c(){e=w("ul"),r&&r.c(),f(e,"class","svelte-123k4yr")},m(s,i){R(s,e,i),r&&r.m(e,null),n=!0},p(s,[i]){s[0].length?r?(r.p(s,i),i&1&&v(r,1)):(r=bh(s),r.c(),v(r,1),r.m(e,null)):r&&(fe(),b(r,1,1,()=>{r=null}),pe())},i(s){n||(v(r),n=!0)},o(s){b(r),n=!1},d(s){s&&C(e),r&&r.d()}}}function rA(t,e,n){let r,s;Pe(t,At,l=>n(0,r=l)),Pe(t,bg,l=>n(1,s=l));const i=Wt();return[r,s,i,l=>At.removeByIndex(l),l=>At.addOrReplace(oo(Hb(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class sA extends J{constructor(e){super(),Y(this,e,rA,nA,G,{})}}const GA=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),iA=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class oA{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=Vo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=Vo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),bT(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=Vo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),TT(this.tagString)}}const aA=()=>new oA,Vo=(t,e,n,r,s,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${s}${r}`,`sort:${e}:${n}`];if(c.length>0){const h=Bo(c.map(Ag));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${Bo(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>iA[p]).map(p=>Kc("-",p)),d=Bo(h);l.push(d)}return l.join("+")},Bo=t=>{const e=cA(t);let n=[...Sh([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${Sh(e["~"]).join(" ~ ")} )`),n.join("+")},cA=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Sh=t=>t.map(Yb),lA=()=>{const t=[],{subscribe:e,update:n}=co("blockedContent",t);return{subscribe:e,toggle(r){n(s=>s.includes(r)?s.filter(i=>i!==r):[...s,r])}}},uA=lA();function hA(t){let e,n;return e=new WS({}),e.$on("endreached",t[4]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function dA(t){let e,n,r,s;const i=[pA,fA],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=nt()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(fe(),b(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function fA(t){let e,n;return e=new Kg({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.message=r[1].message),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function pA(t){let e,n;return e=new Kg({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Ah(t){let e,n;return e=new hT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tags=r[2]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function gA(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,_,E;n=new tA({}),s=new GT({}),s.$on("pick",t[7]),o=new sA({}),o.$on("supertag",t[8]),l=new _i({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const I=[dA,hA],O=[];function k(D,W){return D[1]!==void 0?0:1}h=k(t),d=O[h]=I[h](t),m=new JS({});let N=t[0]&&Ah(t);return{c(){e=w("div"),x(n.$$.fragment),r=M(),x(s.$$.fragment),i=M(),x(o.$$.fragment),a=M(),c=w("div"),x(l.$$.fragment),u=M(),d.c(),p=M(),x(m.$$.fragment),g=M(),N&&N.c(),_=nt(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(D,W){R(D,e,W),F(n,e,null),y(e,r),F(s,e,null),y(e,i),F(o,e,null),y(e,a),y(e,c),F(l,c,null),R(D,u,W),O[h].m(D,W),R(D,p,W),F(m,D,W),R(D,g,W),N&&N.m(D,W),R(D,_,W),E=!0},p(D,[W]){let _e=h;h=k(D),h===_e?O[h].p(D,W):(fe(),b(O[_e],1,1,()=>{O[_e]=null}),pe(),d=O[h],d?d.p(D,W):(d=O[h]=I[h](D),d.c()),v(d,1),d.m(p.parentNode,p)),D[0]?N?(N.p(D,W),W&1&&v(N,1)):(N=Ah(D),N.c(),v(N,1),N.m(_.parentNode,_)):N&&(fe(),b(N,1,1,()=>{N=null}),pe())},i(D){E||(v(n.$$.fragment,D),v(s.$$.fragment,D),v(o.$$.fragment,D),v(l.$$.fragment,D),v(d),v(m.$$.fragment,D),v(N),E=!0)},o(D){b(n.$$.fragment,D),b(s.$$.fragment,D),b(o.$$.fragment,D),b(l.$$.fragment,D),b(d),b(m.$$.fragment,D),b(N),E=!1},d(D){D&&C(e),U(n),U(s),U(o),U(l),D&&C(u),O[h].d(D),D&&C(p),U(m,D),D&&C(g),N&&N.d(D),D&&C(_)}}}function mA(t,e,n){let r,s,i,o,a;Pe(t,en,k=>n(6,r=k)),Pe(t,uA,k=>n(12,s=k)),Pe(t,es,k=>n(13,i=k)),Pe(t,At,k=>n(2,o=k)),Pe(t,Tr,k=>n(14,a=k));let c=!1,l,u=!1,h=JSON.stringify(r);const d=()=>aA().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withBlockedContent(s),p=async k=>{if(!u){n(1,l=void 0),u=!0;try{await k()}catch(N){n(1,l=N),console.warn(N)}finally{u=!1}}},m=async()=>{Tr.reset(),p(async()=>{const[k,N]=await d().getPageAndCount();Tr.addPage(k),lo.set(N)})},g=async()=>{p(async()=>{const k=await d().getPage();Tr.addPage(k)})},_=k=>At.addOrReplace(k.detail),E=()=>{n(0,c=!0)},I=k=>{es.addSupertag(k.detail),At.set([oo("+",k.detail.name,k.detail.tags.length,"supertag")])},O=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const k=JSON.stringify(r);h!==k&&(n(5,h=k),m())}},[c,l,o,m,g,h,r,_,E,I,O]}class yA extends J{constructor(e){super(),Y(this,e,mA,gA,G,{})}}function _A(t){let e,n;return e=new Wc({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function vA(t){let e,n,r;var s=t[0];function i(o){return{}}return s&&(e=el(s,i())),{c(){e&&x(e.$$.fragment),n=nt()},m(o,a){e&&F(e,o,a),R(o,n,a),r=!0},p(o,a){if(a&1&&s!==(s=o[0])){if(e){fe();const c=e;b(c.$$.fragment,1,0,()=>{U(c,1)}),pe()}s?(e=el(s,i()),x(e.$$.fragment),v(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}},i(o){r||(e&&v(e.$$.fragment,o),r=!0)},o(o){e&&b(e.$$.fragment,o),r=!1},d(o){o&&C(n),e&&U(e,o)}}}function wA(t){let e,n,r,s;const i=[vA,_A],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=nt()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(fe(),b(o[u],1,1,()=>{o[u]=null}),pe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function IA(t,e,n){let{loadComponent:r}=e,s;return nr(async()=>{n(0,s=(await r()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,r=i.loadComponent)},[s,r]}class Yc extends J{constructor(e){super(),Y(this,e,IA,wA,G,{loadComponent:1})}}function EA(t){let e;return{c(){e=w("p"),e.textContent="You got lost..."},m(n,r){R(n,e,r)},i:A,o:A,d(n){n&&C(e)}}}function bA(t){let e,n;return e=new Yc({props:{loadComponent:DA}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function TA(t){let e,n;return e=new Yc({props:{loadComponent:RA}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function kA(t){let e,n;return e=new Yc({props:{loadComponent:CA}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function SA(t){let e,n;return e=new yA({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function AA(t){let e,n,r,s;const i=[SA,kA,TA,bA,EA],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),r=o[n]=i[n](t),{c(){e=w("main"),r.c(),f(e,"class","svelte-628m8p")},m(c,l){R(c,e,l),o[n].m(e,null),s=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(fe(),b(o[u],1,1,()=>{o[u]=null}),pe(),r=o[n],r||(r=o[n]=i[n](c),r.c()),v(r,1),r.m(e,null))},i(c){s||(v(r),s=!0)},o(c){b(r),s=!1},d(c){c&&C(e),o[n].d()}}}const CA=()=>ro(()=>import("./Account-a503123a.js"),["assets/Account-a503123a.js","assets/Account-1efce807.css"]),RA=()=>ro(()=>import("./Preferences-bfe8cb58.js"),["assets/Preferences-bfe8cb58.js","assets/ParagraphHeading-17995430.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),DA=()=>ro(()=>import("./Help-c730d158.js"),["assets/Help-c730d158.js","assets/ParagraphHeading-17995430.js","assets/ParagraphHeading-5a89239e.css","assets/Help-136e5954.css"]);function NA(t,e,n){let r;return Pe(t,Un,s=>n(0,r=s)),[r]}class OA extends J{constructor(e){super(),Y(this,e,NA,AA,G,{})}}function PA(t){let e;return{c(){e=w("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class $A extends J{constructor(e){super(),Y(this,e,null,PA,G,{})}}const{subscribe:MA,set:LA}=qg("theme","dark"),Ch={subscribe:MA,set(t){LA(t),FA(t),es.setTheme(t)}},FA=t=>{document.documentElement.classList.replace(UA(t),t)},UA=t=>t==="dark"?"light":"dark";function xA(t){let e,n,r,s,i,o;return e=new jb({}),r=new OA({}),i=new $A({}),{c(){x(e.$$.fragment),n=M(),x(r.$$.fragment),s=M(),x(i.$$.fragment)},m(a,c){F(e,a,c),R(a,n,c),F(r,a,c),R(a,s,c),F(i,a,c),o=!0},p:A,i(a){o||(v(e.$$.fragment,a),v(r.$$.fragment,a),v(i.$$.fragment,a),o=!0)},o(a){b(e.$$.fragment,a),b(r.$$.fragment,a),b(i.$$.fragment,a),o=!1},d(a){U(e,a),a&&C(n),U(r,a),a&&C(s),U(i,a)}}}function VA(t){return Ch.subscribe(e=>Ch.set(e))(),[]}class BA extends J{constructor(e){super(),Y(this,e,VA,xA,G,{})}}function jA(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await ro(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r==null||r()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new BA({target:document.getElementById("app")});jA();export{Ng as $,pe as A,_i as B,Gt as C,Og as D,Kc as E,nt as F,Re as G,de as H,Mh as I,Ct as J,bg as K,Pe as L,ju as M,es as N,xu as O,qg as P,Dh as Q,Ph as R,J as S,GT as T,$h as U,Oh as V,Ch as W,uA as X,qA as Y,bS as Z,GA as _,f as a,oo as a0,nk as a1,vi as a2,JS as a3,nT as a4,R as b,y as c,ve as d,w as e,tr as f,A as g,C as h,Y as i,fn as j,ut as k,j as l,x as m,Qe as n,F as o,v as p,b as q,U as r,G as s,le as t,Wt as u,$e as v,St as w,M as x,kt as y,fe as z};
