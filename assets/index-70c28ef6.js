(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function A(){}function Vo(t,e){for(const n in e)t[n]=e[n];return t}function xg(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ah(t){return t()}function Jc(){return Object.create(null)}function be(t){t.forEach(Ah)}function wi(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let bs;function Rt(t,e){return bs||(bs=document.createElement("a")),bs.href=e,t===bs.href}function Vg(t){return Object.keys(t).length===0}function Bg(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ue(t,e,n){t.$$.on_destroy.push(Bg(e,n))}function Ch(t,e,n,r){if(t){const s=Rh(t,e,n,r);return t[0](s)}}function Rh(t,e,n,r){return t[1]&&r?Vo(n.ctx.slice(),t[1](r(e))):n.ctx}function Dh(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function Nh(t,e,n,r,s,i){if(s){const o=Rh(e,n,r,i);t.p(o,s)}}function Oh(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Xc(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qe(t){return t??""}function OA(t,e,n){return t.set(n),e}const jg=typeof window<"u";let qg=jg?t=>requestAnimationFrame(t):A;function y(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function Sn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ue(t){return document.createTextNode(t)}function $(){return ue(" ")}function at(){return ue("")}function B(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ta(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Hs(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ka(t){return t===""?null:+t}function zg(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function dt(t,e){t.value=e??""}function Hg(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Zc(t,e,n){for(let r=0;r<t.options.length;r+=1){const s=t.options[r];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Kg(t){const e=t.querySelector(":checked");return e&&e.__value}function de(t,e,n){t.classList[n?"add":"remove"](e)}function Gg(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function el(t,e){return new t(e)}let Cr;function Et(t){Cr=t}function Ii(){if(!Cr)throw new Error("Function called outside component initialization");return Cr}function Jr(t){Ii().$$.on_mount.push(t)}function Ei(t){Ii().$$.on_destroy.push(t)}function nt(){const t=Ii();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Gg(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function PA(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const On=[],Ve=[];let Un=[];const Bo=[],Wg=Promise.resolve();let jo=!1;function Qg(){jo||(jo=!0,Wg.then(Sa))}function Rr(t){Un.push(t)}function St(t){Bo.push(t)}const co=new Set;let An=0;function Sa(){if(An!==0)return;const t=Cr;do{try{for(;An<On.length;){const e=On[An];An++,Et(e),Yg(e.$$)}}catch(e){throw On.length=0,An=0,e}for(Et(null),On.length=0,An=0;Ve.length;)Ve.pop()();for(let e=0;e<Un.length;e+=1){const n=Un[e];co.has(n)||(co.add(n),n())}Un.length=0}while(On.length);for(;Bo.length;)Bo.pop()();jo=!1,co.clear(),Et(t)}function Yg(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Rr)}}function Jg(t){const e=[],n=[];Un.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Un=e}const $s=new Set;let tn;function me(){tn={r:0,c:[],p:tn}}function ye(){tn.r||be(tn.c),tn=tn.p}function w(t,e){t&&t.i&&($s.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if($s.has(t))return;$s.add(t),tn.c.push(()=>{$s.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Ks(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(me(),b(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ye())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Sa()}if(xg(t)){const s=Ii();if(t.then(i=>{Et(s),r(e.then,1,e.value,i),Et(null)},i=>{if(Et(s),r(e.catch,2,e.error,i),Et(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ph(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function At(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function V(t){t&&t.c()}function F(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||Rr(()=>{const o=t.$$.on_mount.map(Ah).filter(wi);t.$$.on_destroy?t.$$.on_destroy.push(...o):be(o),t.$$.on_mount=[]}),i.forEach(Rr)}function U(t,e){const n=t.$$;n.fragment!==null&&(Jg(n.after_update),be(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xg(t,e){t.$$.dirty[0]===-1&&(On.push(t),Qg(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,r,s,i,o,a=[-1]){const c=Cr;Et(t);const l=t.$$={fragment:null,ctx:[],props:i,update:A,not_equal:s,bound:Jc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Jc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const _=p.length?p[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=_)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](_),u&&Xg(t,h)),d}):[],l.update(),u=!0,be(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=zg(e.target);l.fragment&&l.fragment.l(h),h.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),Sa()}Et(c)}class Y{$destroy(){U(this,1),this.$destroy=A}$on(e,n){if(!wi(n))return A;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Vg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Cn=[];function Xr(t,e=A){let n;const r=new Set;function s(a){if(G(t,a)&&(t=a,n)){const c=!Cn.length;for(const l of r)l[1](),Cn.push(l,t);if(c){for(let l=0;l<Cn.length;l+=2)Cn[l][0](Cn[l+1]);Cn.length=0}}}function i(a){s(a(t))}function o(a,c=A){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||A),a(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const Zg=Object.freeze(["search","account","settings","help"]),em=t=>Zg.includes(t),tm=()=>{const{subscribe:t,set:e}=Xr("search");return{subscribe:t,navigateTo(n){if(!em(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Ln=tm();function nm(t){let e,n,r,s,i,o;return{c(){e=Sn("svg"),n=Sn("g"),r=Sn("path"),s=Sn("defs"),i=Sn("clipPath"),o=Sn("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){R(a,e,c),y(e,n),y(n,r),y(e,s),y(s,i),y(i,o)},p:A,i:A,o:A,d(a){a&&C(e)}}}class rm extends Y{constructor(e){super(),Q(this,e,null,nm,G,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $h=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($h(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new im;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class im extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const om=function(t){const e=$h(t);return Mh.encodeByteArray(e,!0)},Gs=function(t){return om(t).replace(/\./g,"")},Lh=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cm=()=>am().__FIREBASE_DEFAULTS__,lm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},um=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lh(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return cm()||lm()||um()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fh=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hm=t=>{const e=Fh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uh=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},xh=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gs(JSON.stringify(n)),Gs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Vh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mm(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bh(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ym(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="FirebaseError";class ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vm,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_m(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,r)}}function _m(t,e){return t.replace(wm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wm=/\{\$([^}]+)}/g;function Im(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tl(i)&&tl(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Em(t,e){const n=new bm(t,e);return n.subscribe.bind(n)}class bm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lo),s.error===void 0&&(s.error=lo),s.complete===void 0&&(s.complete=lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=1e3,Sm=2,Am=4*60*60*1e3,Cm=.5;function nl(t,e=km,n=Sm){const r=e*Math.pow(n,t),s=Math.round(Cm*r*(Math.random()-.5)*2);return Math.min(Am,r+s)}/**
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
 */function Ce(t){return t&&t._delegate?t._delegate:t}class st{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nm(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dm(t){return t===Zt?void 0:t}function Nm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Pm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},$m=ce.INFO,Mm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Lm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bi{constructor(e){this.name=e,this._logLevel=$m,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Fm=(t,e)=>e.some(n=>t instanceof n);let rl,sl;function Um(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xm(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,qo=new WeakMap,zh=new WeakMap,uo=new WeakMap,Ca=new WeakMap;function Vm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qh.set(n,t)}).catch(()=>{}),Ca.set(e,t),e}function Bm(t){if(qo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qo.set(t,e)}let zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jm(t){zo=t(zo)}function qm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ho(this),e,...n);return zh.set(r,e.sort?e.sort():[e]),jt(r)}:xm().includes(t)?function(...e){return t.apply(ho(this),e),jt(qh.get(this))}:function(...e){return jt(t.apply(ho(this),e))}}function zm(t){return typeof t=="function"?qm(t):(t instanceof IDBTransaction&&Bm(t),Fm(t,Um())?new Proxy(t,zo):t)}function jt(t){if(t instanceof IDBRequest)return Vm(t);if(uo.has(t))return uo.get(t);const e=zm(t);return e!==t&&(uo.set(t,e),Ca.set(e,t)),e}const ho=t=>Ca.get(t);function Hm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Km=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],fo=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fo.get(e))return fo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Km.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fo.set(e,i),i}jm(t=>({...t,get:(e,n,r)=>il(e,n)||t.get(e,n,r),has:(e,n)=>!!il(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ho="@firebase/app",ol="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new bi("@firebase/app"),Ym="@firebase/app-compat",Jm="@firebase/analytics-compat",Xm="@firebase/analytics",Zm="@firebase/app-check-compat",ey="@firebase/app-check",ty="@firebase/auth",ny="@firebase/auth-compat",ry="@firebase/database",sy="@firebase/database-compat",iy="@firebase/functions",oy="@firebase/functions-compat",ay="@firebase/installations",cy="@firebase/installations-compat",ly="@firebase/messaging",uy="@firebase/messaging-compat",hy="@firebase/performance",dy="@firebase/performance-compat",fy="@firebase/remote-config",py="@firebase/remote-config-compat",gy="@firebase/storage",my="@firebase/storage-compat",yy="@firebase/firestore",vy="@firebase/firestore-compat",_y="firebase",wy="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="[DEFAULT]",Iy={[Ho]:"fire-core",[Ym]:"fire-core-compat",[Xm]:"fire-analytics",[Jm]:"fire-analytics-compat",[ey]:"fire-app-check",[Zm]:"fire-app-check-compat",[ty]:"fire-auth",[ny]:"fire-auth-compat",[ry]:"fire-rtdb",[sy]:"fire-rtdb-compat",[iy]:"fire-fn",[oy]:"fire-fn-compat",[ay]:"fire-iid",[cy]:"fire-iid-compat",[ly]:"fire-fcm",[uy]:"fire-fcm-compat",[hy]:"fire-perf",[dy]:"fire-perf-compat",[fy]:"fire-rc",[py]:"fire-rc-compat",[gy]:"fire-gcs",[my]:"fire-gcs-compat",[yy]:"fire-fst",[vy]:"fire-fst-compat","fire-js":"fire-js",[_y]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Map,Go=new Map;function Ey(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(Go.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Go.set(e,t);for(const n of Ws.values())Ey(n,t);return!0}function In(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new wn("app","Firebase",by);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=wy;function Hh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ko,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(n||(n=Uh()),!n)throw qt.create("no-options");const i=Ws.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw qt.create("duplicate-app",{appName:s})}const o=new Om(s);for(const c of Go.values())o.addComponent(c);const a=new Ty(n,r,o);return Ws.set(s,a),a}function Ra(t=Ko){const e=Ws.get(t);if(!e&&t===Ko&&Uh())return Hh();if(!e)throw qt.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=Iy[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}_t(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ky="firebase-heartbeat-database",Sy=1,Nr="firebase-heartbeat-store";let po=null;function Kh(){return po||(po=Hm(ky,Sy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nr)}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),po}async function Ay(t){try{return await(await Kh()).transaction(Nr).objectStore(Nr).get(Gh(t))}catch(e){if(e instanceof ct)dn.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function al(t,e){try{const r=(await Kh()).transaction(Nr,"readwrite");await r.objectStore(Nr).put(e,Gh(t)),await r.done}catch(n){if(n instanceof ct)dn.warn(n.message);else{const r=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(r.message)}}}function Gh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Cy=1024,Ry=30*24*60*60*1e3;class Dy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Oy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ry}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cl(),{heartbeatsToSend:n,unsentEntries:r}=Ny(this._heartbeatsCache.heartbeats),s=Gs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cl(){return new Date().toISOString().substring(0,10)}function Ny(t,e=Cy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ll(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ll(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bh()?jh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ay(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ll(t){return Gs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){_t(new st("platform-logger",e=>new Wm(e),"PRIVATE")),_t(new st("heartbeat",e=>new Dy(e),"PRIVATE")),et(Ho,ol,t),et(Ho,ol,"esm2017"),et("fire-js","")}Py("");function Da(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $y=Wh,Qh=new wn("auth","Firebase",Wh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new bi("@firebase/auth");function My(t,...e){Qs.logLevel<=ce.WARN&&Qs.warn(`Auth (${er}): ${t}`,...e)}function Ms(t,...e){Qs.logLevel<=ce.ERROR&&Qs.error(`Auth (${er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,...e){throw Na(t,...e)}function gt(t,...e){return Na(t,...e)}function Yh(t,e,n){const r=Object.assign(Object.assign({},$y()),{[e]:n});return new wn("auth","Firebase",r).create(e,{appName:t.name})}function Ly(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(t,"argument-error"),Yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Na(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qh.create(t,...e)}function z(t,e,...n){if(!t)throw Na(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ms(e),new Error(e)}function Dt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fy(){return ul()==="http:"||ul()==="https:"}function ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fy()||Vh()||"connection"in navigator)?navigator.onLine:!0}function xy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=pm()||gm()}get(){return Uy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new es(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Xh(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Jh.fetch()(Zh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vy),e);try{const s=new jy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ts(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ts(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ts(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ts(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yh(t,u,l);tt(t,u)}}catch(s){if(s instanceof ct)throw s;tt(t,"network-request-failed",{message:String(s)})}}async function ts(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zh(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Oa(t.config,s):`${t.config.apiScheme}://${s}`}class jy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),By.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ts(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function zy(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hy(t,e=!1){const n=Ce(t),r=await n.getIdToken(e),s=Pa(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ir(go(s.auth_time)),issuedAtTime:Ir(go(s.iat)),expirationTime:Ir(go(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function go(t){return Number(t)*1e3}function Pa(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lh(n);return s?JSON.parse(s):(Ms("Failed to decode base64 JWT payload"),null)}catch(s){return Ms("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ky(t){const e=Pa(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ct&&Gy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Or(t,zy(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jy(i.providerUserInfo):[],a=Yy(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Qy(t){const e=Ce(t);await Ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jy(t){return t.map(e=>{var{providerId:n}=e,r=Da(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(t,e){const n=await Xh(t,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zh(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xy(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Pr;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Da(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Or(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ys(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Or(this,qy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:L,isAnonymous:P,providerData:D,stsTokenManager:X}=n;z(k&&X,e,"internal-error");const ve=Pr.fromJSON(this.name,X);z(typeof k=="string",e,"internal-error"),Ft(h,e.name),Ft(d,e.name),z(typeof L=="boolean",e,"internal-error"),z(typeof P=="boolean",e,"internal-error"),Ft(p,e.name),Ft(_,e.name),Ft(g,e.name),Ft(m,e.name),Ft(E,e.name),Ft(v,e.name);const O=new cn({uid:k,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:P,photoURL:_,phoneNumber:p,tenantId:g,stsTokenManager:ve,createdAt:E,lastLoginAt:v});return D&&Array.isArray(D)&&(O.providerData=D.map(q=>Object.assign({},q))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new Pr;s.updateFromServerResponse(n);const i=new cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ys(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function Tt(t){Dt(t instanceof Function,"Expected a class definition");let e=hl.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}td.type="NONE";const dl=td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e,n){return`firebase:${t}:${e}:${n}`}class xn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ls("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xn(Tt(dl),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Tt(dl);const o=Ls(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=cn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new xn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if($a(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nd(t=ze()){return/firefox\//i.test(t)}function $a(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=ze()){return/crios\//i.test(t)}function sd(t=ze()){return/iemobile/i.test(t)}function id(t=ze()){return/android/i.test(t)}function od(t=ze()){return/blackberry/i.test(t)}function ad(t=ze()){return/webos/i.test(t)}function Ti(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zy(t=ze()){var e;return Ti(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ev(){return mm()&&document.documentMode===10}function cd(t=ze()){return Ti(t)||id(t)||ad(t)||od(t)||/windows phone/i.test(t)||sd(t)}function tv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e=[]){let n;switch(t){case"Browser":n=fl(ze());break;case"Worker":n=`${fl(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${r}`}async function ud(t,e){return nr(t,"GET","/v2/recaptchaConfig",tr(t,e))}function pl(t){return t!==void 0&&t.enterprise!==void 0}class hd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nv().appendChild(r)})}function rv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sv="https://www.google.com/recaptcha/enterprise.js?render=",iv="recaptcha-enterprise",ov="NO_RECAPTCHA";class fd{constructor(e){this.type=iv,this.auth=En(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ud(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new hd(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;pl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ov)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&pl(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dd(sv+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Js(t,e,n,r=!1){const s=new fd(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class av{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gl(this),this.idTokenSubscription=new gl(this),this.beforeStateQueue=new av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ys(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ce(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}async initializeRecaptchaConfig(){const e=await ud(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new hd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new fd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&My(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function En(t){return Ce(t)}class gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Em(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e){const n=In(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,e??{}))return s;tt(s,"already-initialized")}return n.initialize({options:e})}function uv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hv(t,e,n){const r=En(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=pd(e),{host:o,port:a}=dv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fv()}function pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dv(t){const e=pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ml(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ml(o)}}}function ml(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function pv(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e){return ts(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t,e){return ts(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function mv(t,e){return ts(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Ma{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $r(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $r(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Js(e,r,"signInWithPassword");return mo(e,s)}else return mo(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Js(e,r,"signInWithPassword");return mo(e,i)}else return Promise.reject(s)});case"emailLink":return gv(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mv(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e){return ts(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="http://localhost";class fn extends Ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Da(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vn(e,n)}buildRequest(){const e={requestUri:yv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _v(t){const e=fr(pr(t)).link,n=e?fr(pr(e)).deep_link_id:null,r=fr(pr(t)).deep_link_id;return(r?fr(pr(r)).link:null)||r||n||e||t}class La{constructor(e){var n,r,s,i,o,a;const c=fr(pr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=vv((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_v(e);try{return new La(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(e,n){return $r._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=La.parseLink(n);return z(r,"argument-error"),$r._fromEmailAndCode(e,r.code,r.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Fa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ns{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ns{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends ns{constructor(){super("twitter.com")}static credential(e,n){return fn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e){return ts(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await cn._fromIdTokenResponse(e,r,s),o=yl(r);return new pn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yl(r);return new pn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xs(e,n,r,s)}}function gd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(t,i,e,r):i})}async function wv(t,e,n=!1){const r=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Or(t,gd(r,s,e,t),n);z(i.idToken,r,"internal-error");const o=Pa(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),pn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(t,e,n=!1){const r="signIn",s=await gd(t,r,e),i=await pn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ev(t,e){return md(En(t),e)}async function bv(t,e,n){var r;const s=En(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Js(s,i,"signUpPassword");o=yo(s,l)}else o=yo(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Js(s,i,"signUpPassword");return yo(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await pn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Tv(t,e,n){return Ev(Ce(t),rr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e){return Ce(t).setPersistence(e)}function Sv(t,e,n,r){return Ce(t).onIdTokenChanged(e,n,r)}function Av(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function yd(t,e,n,r){return Ce(t).onAuthStateChanged(e,n,r)}function Cv(t){return Ce(t).signOut()}const Zs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){const t=ze();return $a(t)||Ti(t)}const Dv=1e3,Nv=10;class _d extends vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rv()&&tv(),this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ev()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_d.type="LOCAL";const wd=_d;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Id.type="SESSION";const Ed=Id;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ov(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ua("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function $v(t){mt().location.href=t}/**
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
 */function bd(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Mv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fv(){return bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firebaseLocalStorageDb",Uv=1,ei="firebaseLocalStorage",kd="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Si(t,e){return t.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function xv(){const t=indexedDB.deleteDatabase(Td);return new rs(t).toPromise()}function Qo(){const t=indexedDB.open(Td,Uv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ei,{keyPath:kd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await xv(),e(await Qo()))})})}async function vl(t,e,n){const r=Si(t,!0).put({[kd]:e,value:n});return new rs(r).toPromise()}async function Vv(t,e){const n=Si(t,!1).get(e),r=await new rs(n).toPromise();return r===void 0?null:r.value}function _l(t,e){const n=Si(t,!0).delete(e);return new rs(n).toPromise()}const Bv=800,jv=3;class Sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(Fv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mv(),!this.activeServiceWorker)return;this.sender=new Pv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qo();return await vl(e,Zs,"1"),await _l(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_l(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Si(s,!1).getAll();return new rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sd.type="LOCAL";const qv=Sd;new es(3e4,6e4);/**
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
 */function Ad(t,e){return e?Tt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zv(t){return md(t.auth,new xa(t),t.bypassAuthState)}function Hv(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Iv(n,new xa(t),t.bypassAuthState)}async function Kv(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),wv(n,new xa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zv;case"linkViaPopup":case"linkViaRedirect":return Kv;case"reauthViaPopup":case"reauthViaRedirect":return Hv;default:tt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new es(2e3,1e4);async function Wv(t,e,n){const r=En(t);Ly(t,e,Fa);const s=Ad(r,n);return new nn(r,"signInViaPopup",e,s).executeNotNull()}class nn extends Cd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gv.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="pendingRedirect",Fs=new Map;class Yv extends Cd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fs.get(this.auth._key());if(!e){try{const r=await Jv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fs.set(this.auth._key(),e)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jv(t,e){const n=e_(e),r=Zv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Xv(t,e){Fs.set(t._key(),e)}function Zv(t){return Tt(t._redirectPersistence)}function e_(t){return Ls(Qv,t.config.apiKey,t.name)}async function t_(t,e,n=!1){const r=En(t),s=Ad(r,e),o=await new Yv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=10*60*1e3;class r_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n_&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a_=/^https?/;async function c_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i_(t);for(const n of e)try{if(l_(n))return}catch{}tt(t,"unauthorized-domain")}function l_(t){const e=Wo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!a_.test(n))return!1;if(o_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const u_=new es(3e4,6e4);function Il(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h_(t){return new Promise((e,n)=>{var r,s,i;function o(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),n(gt(t,"network-request-failed"))},timeout:u_.get()})}if(!((s=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mt().gapi)===null||i===void 0)&&i.load)o();else{const a=rv("iframefcb");return mt()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},dd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Us=null,e})}let Us=null;function d_(t){return Us=Us||h_(t),Us}/**
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
 */const f_=new es(5e3,15e3),p_="__/auth/iframe",g_="emulator/auth/iframe",m_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v_(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oa(e,g_):`https://${t.config.authDomain}/${p_}`,r={apiKey:e.apiKey,appName:t.name,v:er},s=y_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zr(r).slice(1)}`}async function __(t){const e=await d_(t),n=mt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:v_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=mt().setTimeout(()=>{i(o)},f_.get());function c(){mt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const w_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I_=500,E_=600,b_="_blank",T_="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k_(t,e,n,r=I_,s=E_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},w_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ze().toLowerCase();n&&(a=rd(l)?b_:n),nd(l)&&(e=e||T_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(Zy(l)&&a!=="_self")return S_(e||"",a),new El(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new El(h)}function S_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const A_="__/auth/handler",C_="emulator/auth/handler",R_=encodeURIComponent("fac");async function bl(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:er,eventId:s};if(e instanceof Fa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Im(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ns){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${R_}=${encodeURIComponent(c)}`:"";return`${D_(t)}?${Zr(a).slice(1)}${l}`}function D_({config:t}){return t.emulator?Oa(t,C_):`https://${t.authDomain}/${A_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ed,this._completeRedirectFn=t_,this._overrideRedirectResult=Xv}async _openPopup(e,n,r,s){var i;Dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bl(e,n,r,Wo(),s);return k_(e,o,Ua())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bl(e,n,r,Wo(),s);return $v(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await __(e),r=new r_(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vo,{type:vo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vo];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=c_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cd()||$a()||Ti()}}const O_=N_;var Tl="@firebase/auth",kl="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M_(t){_t(new st("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ld(t)},l=new cv(r,s,i,c);return uv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_t(new st("auth-internal",e=>{const n=En(e.getProvider("auth").getImmediate());return(r=>new P_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Tl,kl,$_(t)),et(Tl,kl,"esm2017")}/**
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
 */const L_=5*60,F_=xh("authIdTokenMaxAge")||L_;let Sl=null;const U_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F_)return;const s=n==null?void 0:n.token;Sl!==s&&(Sl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function x_(t=Ra()){const e=In(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lv(t,{popupRedirectResolver:O_,persistence:[qv,wd,Ed]}),r=xh("authTokenSyncURL");if(r){const i=U_(r);Av(n,i,()=>i(n.currentUser)),Sv(n,o=>i(o))}const s=Fh("auth");return s&&hv(n,`http://${s}`),n}M_("Browser");const V_=(t,e)=>e.some(n=>t instanceof n);let Al,Cl;function B_(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j_(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,Yo=new WeakMap,Nd=new WeakMap,_o=new WeakMap,Va=new WeakMap;function q_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dd.set(n,t)}).catch(()=>{}),Va.set(e,t),e}function z_(t){if(Yo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yo.set(t,e)}let Jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function H_(t){Jo=t(Jo)}function K_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wo(this),e,...n);return Nd.set(r,e.sort?e.sort():[e]),zt(r)}:j_().includes(t)?function(...e){return t.apply(wo(this),e),zt(Dd.get(this))}:function(...e){return zt(t.apply(wo(this),e))}}function G_(t){return typeof t=="function"?K_(t):(t instanceof IDBTransaction&&z_(t),V_(t,B_())?new Proxy(t,Jo):t)}function zt(t){if(t instanceof IDBRequest)return q_(t);if(_o.has(t))return _o.get(t);const e=G_(t);return e!==t&&(_o.set(t,e),Va.set(e,t)),e}const wo=t=>Va.get(t);function W_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Q_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],Io=new Map;function Rl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Io.get(e))return Io.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Y_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Q_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Io.set(e,i),i}H_(t=>({...t,get:(e,n,r)=>Rl(e,n)||t.get(e,n,r),has:(e,n)=>!!Rl(e,n)||t.has(e,n)}));const Od="@firebase/installations",Ba="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=1e4,$d=`w:${Ba}`,Md="FIS_v2",J_="https://firebaseinstallations.googleapis.com/v1",X_=60*60*1e3,Z_="installations",ew="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},gn=new wn(Z_,ew,tw);function Ld(t){return t instanceof ct&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd({projectId:t}){return`${J_}/projects/${t}/installations`}function Ud(t){return{token:t.token,requestStatus:2,expiresIn:rw(t.expiresIn),creationTime:Date.now()}}async function xd(t,e){const r=(await e.json()).error;return gn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nw(t,{refreshToken:e}){const n=Vd(t);return n.append("Authorization",sw(e)),n}async function Bd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rw(t){return Number(t.replace("s","000"))}function sw(t){return`${Md} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Fd(t),s=Vd(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Md,appId:t.appId,sdkVersion:$d},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ud(l.authToken)}}else throw await xd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=/^[cdef][\w-]{21}$/,Xo="";function cw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lw(t);return aw.test(n)?n:Xo}catch{return Xo}}function lw(t){return ow(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map;function zd(t,e){const n=Ai(t);Hd(n,e),uw(n,e)}function Hd(t,e){const n=qd.get(t);if(n)for(const r of n)r(e)}function uw(t,e){const n=hw();n&&n.postMessage({key:t,fid:e}),dw()}let rn=null;function hw(){return!rn&&"BroadcastChannel"in self&&(rn=new BroadcastChannel("[Firebase] FID Change"),rn.onmessage=t=>{Hd(t.data.key,t.data.fid)}),rn}function dw(){qd.size===0&&rn&&(rn.close(),rn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firebase-installations-database",pw=1,mn="firebase-installations-store";let Eo=null;function ja(){return Eo||(Eo=W_(fw,pw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mn)}}})),Eo}async function ti(t,e){const n=Ai(t),s=(await ja()).transaction(mn,"readwrite"),i=s.objectStore(mn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zd(t,e.fid),e}async function Kd(t){const e=Ai(t),r=(await ja()).transaction(mn,"readwrite");await r.objectStore(mn).delete(e),await r.done}async function Ci(t,e){const n=Ai(t),s=(await ja()).transaction(mn,"readwrite"),i=s.objectStore(mn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&zd(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){let e;const n=await Ci(t.appConfig,r=>{const s=gw(r),i=mw(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Xo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gw(t){const e=t||{fid:cw(),registrationStatus:0};return Gd(e)}function mw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yw(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vw(t)}:{installationEntry:e}}async function yw(t,e){try{const n=await iw(t,e);return ti(t.appConfig,n)}catch(n){throw Ld(n)&&n.customData.serverCode===409?await Kd(t.appConfig):await ti(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vw(t){let e=await Dl(t.appConfig);for(;e.registrationStatus===1;)await jd(100),e=await Dl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qa(t);return r||n}return e}function Dl(t){return Ci(t,e=>{if(!e)throw gn.create("installation-not-found");return Gd(e)})}function Gd(t){return _w(t)?{fid:t.fid,registrationStatus:0}:t}function _w(t){return t.registrationStatus===1&&t.registrationTime+Pd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww({appConfig:t,heartbeatServiceProvider:e},n){const r=Iw(t,n),s=nw(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:$d,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Ud(l)}else throw await xd("Generate Auth Token",c)}function Iw(t,{fid:e}){return`${Fd(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t,e=!1){let n;const r=await Ci(t.appConfig,i=>{if(!Wd(i))throw gn.create("not-registered");const o=i.authToken;if(!e&&Tw(o))return i;if(o.requestStatus===1)return n=Ew(t,e),i;{if(!navigator.onLine)throw gn.create("app-offline");const a=Sw(i);return n=bw(t,a),a}});return n?await n:r.authToken}async function Ew(t,e){let n=await Nl(t.appConfig);for(;n.authToken.requestStatus===1;)await jd(100),n=await Nl(t.appConfig);const r=n.authToken;return r.requestStatus===0?za(t,e):r}function Nl(t){return Ci(t,e=>{if(!Wd(e))throw gn.create("not-registered");const n=e.authToken;return Aw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bw(t,e){try{const n=await ww(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ti(t.appConfig,r),n}catch(n){if(Ld(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kd(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ti(t.appConfig,r)}throw n}}function Wd(t){return t!==void 0&&t.registrationStatus===2}function Tw(t){return t.requestStatus===2&&!kw(t)}function kw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+X_}function Sw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Aw(t){return t.requestStatus===1&&t.requestTime+Pd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t){const e=t,{installationEntry:n,registrationPromise:r}=await qa(e);return r?r.catch(console.error):za(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e=!1){const n=t;return await Dw(n),(await za(n,e)).token}async function Dw(t){const{registrationPromise:e}=await qa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){if(!t||!t.options)throw bo("App Configuration");if(!t.name)throw bo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bo(t){return gn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="installations",Ow="installations-internal",Pw=t=>{const e=t.getProvider("app").getImmediate(),n=Nw(e),r=In(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$w=t=>{const e=t.getProvider("app").getImmediate(),n=In(e,Qd).getImmediate();return{getId:()=>Cw(n),getToken:s=>Rw(n,s)}};function Mw(){_t(new st(Qd,Pw,"PUBLIC")),_t(new st(Ow,$w,"PRIVATE"))}Mw();et(Od,Ba);et(Od,Ba,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="analytics",Lw="firebase_id",Fw="origin",Uw=60*1e3,xw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ha="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new bi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new wn("analytics","Analytics",Vw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){if(!t.startsWith(Ha)){const e=Ye.create("invalid-gtag-resource",{gtagURL:t});return Ge.warn(e.message),""}return t}function Yd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qw(t,e){const n=jw("firebase-js-sdk-policy",{createScriptURL:Bw}),r=document.createElement("script"),s=`${Ha}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function zw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Hw(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Yd(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ge.error(a)}t("config",s,i)}async function Kw(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Yd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ge.error(i)}}function Gw(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Kw(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Hw(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ge.error(a)}}return s}function Ww(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Gw(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Qw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ha)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=30,Jw=1e3;class Xw{constructor(e={},n=Jw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jd=new Xw;function Zw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function e0(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Zw(r)},i=xw.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function t0(t,e=Jd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ye.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new s0;return setTimeout(async()=>{a.abort()},n!==void 0?n:Uw),Xd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Xd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Jd){var i;const{appId:o,measurementId:a}=t;try{await n0(r,e)}catch(c){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await e0(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!r0(l)){if(s.deleteThrottleMetadata(o),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?nl(n,s.intervalMillis,Yw):nl(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),Ge.debug(`Calling attemptFetch again in ${u} millis`),Xd(t,h,r,s)}}function n0(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function r0(t){if(!(t instanceof ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class s0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function i0(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(){if(Bh())try{await jh()}catch(t){return Ge.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ge.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function a0(t,e,n,r,s,i,o){var a;const c=t0(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ge.error(p)),e.push(c);const l=o0().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);Qw(i)||qw(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Fw]="firebase",d.update=!0,h!=null&&(d[Lw]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.app=e}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Ol=[];const Pl={};let To="dataLayer",l0="gtag",$l,Zd,Ml=!1;function u0(){const t=[];if(Vh()&&t.push("This is a browser extension environment."),ym()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function h0(t,e,n){u0();const r=t.options.appId;if(!r)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(Er[r]!=null)throw Ye.create("already-exists",{id:r});if(!Ml){zw(To);const{wrappedGtag:i,gtagCore:o}=Ww(Er,Ol,Pl,To,l0);Zd=i,$l=o,Ml=!0}return Er[r]=a0(t,Ol,Pl,e,$l,To,n),new c0(t)}function d0(t=Ra()){t=Ce(t);const e=In(t,ni);return e.isInitialized()?e.getImmediate():f0(t)}function f0(t,e={}){const n=In(t,ni);if(n.isInitialized()){const s=n.getImmediate();if(Dr(e,n.getOptions()))return s;throw Ye.create("already-initialized")}return n.initialize({options:e})}function p0(t,e,n,r){t=Ce(t),i0(Zd,Er[t.app.options.appId],e,n,r).catch(s=>Ge.error(s))}const Ll="@firebase/analytics",Fl="0.10.0";function g0(){_t(new st(ni,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return h0(r,s,n)},"PUBLIC")),_t(new st("analytics-internal",t,"PRIVATE")),et(Ll,Fl),et(Ll,Fl,"esm2017");function t(e){try{const n=e.getProvider(ni).getImmediate();return{logEvent:(r,s,i)=>p0(n,r,s,i)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}g0();var m0="firebase",y0="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(m0,y0,"app");var v0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Ka=Ka||{},K=v0||self;function Ri(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ss(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _0(t){return Object.prototype.hasOwnProperty.call(t,ko)&&t[ko]||(t[ko]=++w0)}var ko="closure_uid_"+(1e9*Math.random()>>>0),w0=0;function I0(t,e,n){return t.call.apply(t.bind,arguments)}function E0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=I0:Be=E0,Be.apply(null,arguments)}function ks(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Yt(){this.s=this.s,this.o=this.o}var b0=0;Yt.prototype.s=!1;Yt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),b0!=0)&&_0(this)};Yt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ef=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ga(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ul(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ri(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var T0=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function Mr(t){return/^[\s\xa0]*$/.test(t)}function Di(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function ht(t){return Di().indexOf(t)!=-1}function Wa(t){return Wa[" "](t),t}Wa[" "]=function(){};function k0(t,e){var n=y1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var S0=ht("Opera"),Hn=ht("Trident")||ht("MSIE"),tf=ht("Edge"),Zo=tf||Hn,nf=ht("Gecko")&&!(Di().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),A0=Di().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function rf(){var t=K.document;return t?t.documentMode:void 0}var ea;e:{var So="",Ao=function(){var t=Di();if(nf)return/rv:([^\);]+)(\)|;)/.exec(t);if(tf)return/Edge\/([\d\.]+)/.exec(t);if(Hn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(A0)return/WebKit\/(\S+)/.exec(t);if(S0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ao&&(So=Ao?Ao[1]:""),Hn){var Co=rf();if(Co!=null&&Co>parseFloat(So)){ea=String(Co);break e}}ea=So}var ta;if(K.document&&Hn){var xl=rf();ta=xl||parseInt(ea,10)||void 0}else ta=void 0;var C0=ta;function Lr(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nf){e:{try{Wa(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:R0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lr.$.h.call(this)}}Ne(Lr,je);var R0={2:"touch",3:"pen",4:"mouse"};Lr.prototype.h=function(){Lr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var is="closure_listenable_"+(1e6*Math.random()|0),D0=0;function N0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++D0,this.fa=this.ia=!1}function Ni(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qa(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function O0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function sf(t){const e={};for(const n in t)e[n]=t[n];return e}const Vl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function of(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Vl.length;i++)n=Vl[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Oi(t){this.src=t,this.g={},this.h=0}Oi.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ra(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new N0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function na(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ef(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ni(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ra(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ya="closure_lm_"+(1e6*Math.random()|0),Ro={};function af(t,e,n,r,s){if(r&&r.once)return lf(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)af(t,e[i],n,r,s);return null}return n=Za(n),t&&t[is]?t.O(e,n,ss(r)?!!r.capture:!!r,s):cf(t,e,n,!1,r,s)}function cf(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ss(s)?!!s.capture:!!s,a=Xa(t);if(a||(t[Ya]=a=new Oi(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=P0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)T0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function P0(){function t(n){return e.call(t.src,t.listener,n)}const e=$0;return t}function lf(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lf(t,e[i],n,r,s);return null}return n=Za(n),t&&t[is]?t.P(e,n,ss(r)?!!r.capture:!!r,s):cf(t,e,n,!0,r,s)}function uf(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)uf(t,e[i],n,r,s);else r=ss(r)?!!r.capture:!!r,n=Za(n),t&&t[is]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ra(i,n,r,s),-1<n&&(Ni(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ra(e,n,r,s)),(n=-1<t?e[t]:null)&&Ja(n))}function Ja(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[is])na(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xa(e))?(na(n,t),n.h==0&&(n.src=null,e[Ya]=null)):Ni(t)}}}function hf(t){return t in Ro?Ro[t]:Ro[t]="on"+t}function $0(t,e){if(t.fa)t=!0;else{e=new Lr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ja(t),t=n.call(r,e)}return t}function Xa(t){return t=t[Ya],t instanceof Oi?t:null}var Do="__closure_events_fn_"+(1e9*Math.random()>>>0);function Za(t){return typeof t=="function"?t:(t[Do]||(t[Do]=function(e){return t.handleEvent(e)}),t[Do])}function De(){Yt.call(this),this.i=new Oi(this),this.S=this,this.J=null}Ne(De,Yt);De.prototype[is]=!0;De.prototype.removeEventListener=function(t,e,n,r){uf(this,t,e,n,r)};function $e(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var s=e;e=new je(r,t),of(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ss(o,r,!0,e)&&s}if(o=e.g=t,s=Ss(o,r,!0,e)&&s,s=Ss(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ss(o,r,!1,e)&&s}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ni(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ss(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&na(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ec=K.JSON.stringify;class M0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function L0(){var t=tc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class F0{constructor(){this.h=this.g=null}add(e,n){const r=df.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var df=new M0(()=>new U0,t=>t.reset());class U0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function x0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function V0(t){K.setTimeout(()=>{throw t},0)}let Fr,Ur=!1,tc=new F0,ff=()=>{const t=K.Promise.resolve(void 0);Fr=()=>{t.then(B0)}};var B0=()=>{for(var t;t=L0();){try{t.h.call(t.g)}catch(n){V0(n)}var e=df;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ur=!1};function Pi(t,e){De.call(this),this.h=t||1,this.g=e||K,this.j=Be(this.qb,this),this.l=Date.now()}Ne(Pi,De);N=Pi.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$e(this,"tick"),this.ga&&(nc(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Pi.$.N.call(this),nc(this),delete this.g};function rc(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function pf(t){t.g=rc(()=>{t.g=null,t.i&&(t.i=!1,pf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class j0 extends Yt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pf(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xr(t){Yt.call(this),this.h=t,this.g={}}Ne(xr,Yt);var Bl=[];function gf(t,e,n,r){Array.isArray(n)||(n&&(Bl[0]=n.toString()),n=Bl);for(var s=0;s<n.length;s++){var i=af(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mf(t){Qa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ja(e)},t),t.g={}}xr.prototype.N=function(){xr.$.N.call(this),mf(this)};xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $i(){this.g=!0}$i.prototype.Ea=function(){this.g=!1};function q0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function z0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Fn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+K0(t,n)+(r?" "+r:"")})}function H0(t,e){t.info(function(){return"TIMEOUT: "+e})}$i.prototype.info=function(){};function K0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ec(n)}catch{return e}}var bn={},jl=null;function Mi(){return jl=jl||new De}bn.Ta="serverreachability";function yf(t){je.call(this,bn.Ta,t)}Ne(yf,je);function Vr(t){const e=Mi();$e(e,new yf(e))}bn.STAT_EVENT="statevent";function vf(t,e){je.call(this,bn.STAT_EVENT,t),this.stat=e}Ne(vf,je);function Ke(t){const e=Mi();$e(e,new vf(e,t))}bn.Ua="timingevent";function _f(t,e){je.call(this,bn.Ua,t),this.size=e}Ne(_f,je);function os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Li={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sc(){}sc.prototype.h=null;function ql(t){return t.h||(t.h=t.i())}function If(){}var as={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ic(){je.call(this,"d")}Ne(ic,je);function oc(){je.call(this,"c")}Ne(oc,je);var sa;function Fi(){}Ne(Fi,sc);Fi.prototype.g=function(){return new XMLHttpRequest};Fi.prototype.i=function(){return{}};sa=new Fi;function cs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new xr(this),this.P=G0,t=Zo?125:void 0,this.V=new Pi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ef}function Ef(){this.i=null,this.g="",this.h=!1}var G0=45e3,ia={},ri={};N=cs.prototype;N.setTimeout=function(t){this.P=t};function oa(t,e,n){t.L=1,t.v=xi(Nt(e)),t.s=n,t.S=!0,bf(t,null)}function bf(t,e){t.G=Date.now(),ls(t),t.A=Nt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Nf(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ef,t.g=Xf(t.l,n?e:null,!t.s),0<t.O&&(t.M=new j0(Be(t.Pa,t,t.g),t.O)),gf(t.U,t.g,"readystatechange",t.nb),e=t.I?sf(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Vr(),q0(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&ft(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=ft(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zo||this.g&&(this.h.h||this.g.ja()||Gl(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Vr(3):Vr(2)),Ui(this);var n=this.g.da();this.ca=n;t:if(Tf(this)){var r=Gl(this.g);t="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),br(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,z0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mr(a)){var l=a;break t}}l=null}if(n=l)Fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,n);else{this.i=!1,this.o=3,Ke(12),sn(this),br(this);break e}}this.S?(kf(this,u,o),Zo&&this.i&&u==3&&(gf(this.U,this.V,"tick",this.mb),this.V.start())):(Fn(this.j,this.m,o,null),aa(this,o)),u==4&&sn(this),this.i&&!this.J&&(u==4?Wf(this.l,this):(this.i=!1,ls(this)))}else p1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),sn(this),br(this)}}}catch{}finally{}};function Tf(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function kf(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=W0(t,n),s==ri){e==4&&(t.o=4,Ke(14),r=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ia){t.o=4,Ke(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fn(t.j,t.m,s,null),aa(t,s);Tf(t)&&s!=ri&&s!=ia&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dc(e),e.M=!0,Ke(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),sn(t),br(t))}N.mb=function(){if(this.g){var t=ft(this.g),e=this.g.ja();this.C<e.length&&(Ui(this),kf(this,t,e),this.i&&t!=4&&ls(this))}};function W0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ri:(n=Number(e.substring(n,r)),isNaN(n)?ia:(r+=1,r+n>e.length?ri:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,sn(this)};function ls(t){t.Y=Date.now()+t.P,Sf(t,t.P)}function Sf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=os(Be(t.lb,t),e)}function Ui(t){t.B&&(K.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(H0(this.j,this.A),this.L!=2&&(Vr(),Ke(17)),sn(this),this.o=2,br(this)):Sf(this,this.Y-t)};function br(t){t.l.H==0||t.J||Wf(t.l,t)}function sn(t){Ui(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,nc(t.V),mf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function aa(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ca(n.i,t))){if(!t.K&&ca(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oi(n),ji(n);else break e;hc(n),Ke(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=os(Be(n.ib,n),6e3));if(1>=$f(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else on(n,11)}else if((t.K||n.g==t)&&oi(n),!Mr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ac(i,i.h),i.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,fe(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Jf(r,r.J?r.pa:null,r.Y),o.K){Mf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ui(a),ls(a)),r.g=o}else Kf(r);0<n.j.length&&qi(n)}else l[0]!="stop"&&l[0]!="close"||on(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?on(n,7):uc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Vr(4)}catch{}}function Q0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ri(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Y0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ri(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Af(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ri(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Y0(t),r=Q0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Cf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ln(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ln){this.h=t.h,si(this,t.j),this.s=t.s,this.g=t.g,ii(this,t.m),this.l=t.l;var e=t.i,n=new Br;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zl(this,n),this.o=t.o}else t&&(e=String(t).match(Cf))?(this.h=!1,si(this,e[1]||"",!0),this.s=gr(e[2]||""),this.g=gr(e[3]||"",!0),ii(this,e[4]),this.l=gr(e[5]||"",!0),zl(this,e[6]||"",!0),this.o=gr(e[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mr(e,Hl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(mr(e,Hl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(mr(n,n.charAt(0)=="/"?e1:Z0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mr(n,n1)),t.join("")};function Nt(t){return new ln(t)}function si(t,e,n){t.j=n?gr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zl(t,e,n){e instanceof Br?(t.i=e,r1(t.i,t.h)):(n||(e=mr(e,t1)),t.i=new Br(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function xi(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,X0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function X0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hl=/[#\/\?@]/g,Z0=/[#\?:]/g,e1=/[#\?]/g,t1=/[#\?@]/g,n1=/#/g;function Br(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jt(t){t.g||(t.g=new Map,t.h=0,t.i&&J0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Br.prototype;N.add=function(t,e){Jt(this),this.i=null,t=sr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rf(t,e){Jt(t),e=sr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Df(t,e){return Jt(t),e=sr(t,e),t.g.has(e)}N.forEach=function(t,e){Jt(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Jt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Jt(this);let e=[];if(typeof t=="string")Df(this,t)&&(e=e.concat(this.g.get(sr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Jt(this),this.i=null,t=sr(this,t),Df(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Nf(t,e,n){Rf(t,e),0<n.length&&(t.i=null,t.g.set(sr(t,e),Ga(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function sr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function r1(t,e){e&&!t.j&&(Jt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Rf(this,r),Nf(this,s,n))},t)),t.j=e}var s1=class{constructor(t,e){this.g=t,this.map=e}};function Of(t){this.l=t||i1,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i1=10;function Pf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $f(t){return t.h?1:t.g?t.g.size:0}function ca(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ac(t,e){t.g?t.g.add(e):t.h=e}function Mf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Of.prototype.cancel=function(){if(this.i=Lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ga(t.i)}var o1=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function a1(){this.g=new o1}function c1(t,e,n){const r=n||"";try{Af(t,function(s,i){let o=s;ss(s)&&(o=ec(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function l1(t,e){const n=new $i;if(K.Image){const r=new Image;r.onload=ks(As,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ks(As,n,r,"TestLoadImage: error",!1,e),r.onabort=ks(As,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ks(As,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function As(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function us(t){this.l=t.fc||null,this.j=t.ob||!1}Ne(us,sc);us.prototype.g=function(){return new Vi(this.l,this.j)};us.prototype.i=function(t){return function(){return t}}({});function Vi(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(Vi,De);var cc=0;N=Vi.prototype;N.open=function(t,e){if(this.readyState!=cc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jr(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=cc};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ff(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ff(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hs(this):jr(this),this.readyState==3&&Ff(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,hs(this))};N.Ya=function(t){this.g&&(this.response=t,hs(this))};N.ka=function(){this.g&&hs(this)};function hs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jr(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var u1=K.JSON.parse;function Ee(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Uf,this.L=this.M=!1}Ne(Ee,De);var Uf="",h1=/^https?$/i,d1=["POST","PUT"];N=Ee.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sa.g(),this.C=this.u?ql(this.u):ql(sa),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Kl(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=K.FormData&&t instanceof K.FormData,!(0<=ef(d1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bf(this),0<this.B&&((this.L=f1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=rc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kl(this,i)}};function f1(t){return Hn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Ka<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Kl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xf(t),Bi(t)}function xf(t){t.F||(t.F=!0,$e(t,"complete"),$e(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),Bi(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bi(this,!0)),Ee.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Vf(this):this.kb())};N.kb=function(){Vf(this)};function Vf(t){if(t.h&&typeof Ka<"u"&&(!t.C[1]||ft(t)!=4||t.da()!=2)){if(t.v&&ft(t)==4)rc(t.La,0,t);else if($e(t,"readystatechange"),ft(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Cf)[1]||null;!s&&K.self&&K.self.location&&(s=K.self.location.protocol.slice(0,-1)),r=!h1.test(s?s.toLowerCase():"")}n=r}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var i=2<ft(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",xf(t)}}finally{Bi(t)}}}}function Bi(t,e){if(t.g){Bf(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=r}catch{}}}function Bf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function ft(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),u1(e)}};function Gl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Uf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function p1(t){const e={};t=(t.g&&2<=ft(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Mr(t[r]))continue;var n=x0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}O0(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jf(t){let e="";return Qa(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qf(t){this.Ga=0,this.j=[],this.l=new $i,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=hr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=hr("baseRetryDelayMs",5e3,t),this.hb=hr("retryDelaySeedMs",1e4,t),this.eb=hr("forwardChannelMaxRetries",2,t),this.xa=hr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Of(t&&t.concurrentRequestLimit),this.Ja=new a1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=qf.prototype;N.ra=8;N.H=1;function uc(t){if(zf(t),t.H==3){var e=t.W++,n=Nt(t.I);if(fe(n,"SID",t.K),fe(n,"RID",e),fe(n,"TYPE","terminate"),ds(t,n),e=new cs(t,t.l,e),e.L=2,e.v=xi(Nt(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ls(e)}Yf(t)}function ji(t){t.g&&(dc(t),t.g.cancel(),t.g=null)}function zf(t){ji(t),t.u&&(K.clearTimeout(t.u),t.u=null),oi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function qi(t){if(!Pf(t.i)&&!t.m){t.m=!0;var e=t.Na;Fr||ff(),Ur||(Fr(),Ur=!0),tc.add(e,t),t.C=0}}function g1(t,e){return $f(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=os(Be(t.Na,t,e),Qf(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new cs(this,this.l,t);let i=this.s;if(this.U&&(i?(i=sf(i),of(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hf(this,s,e),n=Nt(this.I),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),ds(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jf(i)))+"&"+e:this.o&&lc(n,this.o,i)),ac(this.i,s),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),s.aa=!0,oa(s,n,null)):oa(s,n,e),this.H=2}}else this.H==3&&(t?Wl(this,t):this.j.length==0||Pf(this.i)||Wl(this))};function Wl(t,e){var n;e?n=e.m:n=t.W++;const r=Nt(t.I);fe(r,"SID",t.K),fe(r,"RID",n),fe(r,"AID",t.V),ds(t,r),t.o&&t.s&&lc(r,t.o,t.s),n=new cs(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Hf(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ac(t.i,n),oa(n,r,e)}function ds(t,e){t.na&&Qa(t.na,function(n,r){fe(e,r,n)}),t.h&&Af({},function(n,r){fe(e,r,n)})}function Hf(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Be(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{c1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Kf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fr||ff(),Ur||(Fr(),Ur=!0),tc.add(e,t),t.A=0}}function hc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=os(Be(t.Ma,t),Qf(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,Gf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=os(Be(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ke(10),ji(this),Gf(this))};function dc(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Gf(t){t.g=new cs(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nt(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.K),fe(e,"AID",t.V),fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&fe(e,"TO",t.qa),fe(e,"TYPE","xmlhttp"),ds(t,e),t.o&&t.s&&lc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=xi(Nt(e)),n.s=null,n.S=!0,bf(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ji(this),hc(this),Ke(19))};function oi(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Wf(t,e){var n=null;if(t.g==e){oi(t),dc(t),t.g=null;var r=2}else if(ca(t.i,e))n=e.F,Mf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Mi(),$e(r,new _f(r,n)),qi(t)}else Kf(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&g1(t,e)||r==2&&hc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:on(t,5);break;case 4:on(t,10);break;case 3:on(t,6);break;default:on(t,2)}}}function Qf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function on(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Be(t.pb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||si(n,"https"),xi(n)),l1(n.toString(),r)}else Ke(2);t.H=0,t.h&&t.h.za(e),Yf(t),zf(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ke(2)):(this.l.info("Failed to ping google.com"),Ke(1))};function Yf(t){if(t.H=0,t.ma=[],t.h){const e=Lf(t.i);(e.length!=0||t.j.length!=0)&&(Ul(t.ma,e),Ul(t.ma,t.j),t.i.i.length=0,Ga(t.j),t.j.length=0),t.h.ya()}}function Jf(t,e,n){var r=n instanceof ln?Nt(n):new ln(n);if(r.g!="")e&&(r.g=e+"."+r.g),ii(r,r.m);else{var s=K.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ln(null);r&&si(i,r),e&&(i.g=e),s&&ii(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.ra),ds(t,r),r}function Xf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ee(new us({ob:!0})):new Ee(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zf(){}N=Zf.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function ai(){if(Hn&&!(10<=Number(C0)))throw Error("Environmental error: no available transport.")}ai.prototype.g=function(t,e){return new Je(t,e)};function Je(t,e){De.call(this),this.g=new qf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ir(this)}Ne(Je,De);Je.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jf(t,null,t.Y),qi(t)};Je.prototype.close=function(){uc(this.g)};Je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ec(t),t=n);e.j.push(new s1(e.fb++,t)),e.H==3&&qi(e)};Je.prototype.N=function(){this.g.h=null,delete this.j,uc(this.g),delete this.g,Je.$.N.call(this)};function ep(t){ic.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(ep,ic);function tp(){oc.call(this),this.status=1}Ne(tp,oc);function ir(t){this.g=t}Ne(ir,Zf);ir.prototype.Ba=function(){$e(this.g,"a")};ir.prototype.Aa=function(t){$e(this.g,new ep(t))};ir.prototype.za=function(t){$e(this.g,new tp)};ir.prototype.ya=function(){$e(this.g,"b")};function m1(){this.blockSize=-1}function it(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(it,m1);it.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function No(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}it.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)No(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){No(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){No(this,r),s=0;break}}this.h=s,this.i+=e};it.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var y1={};function fc(t){return-128<=t&&128>t?k0(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function pt(t){if(isNaN(t)||!isFinite(t))return Bn;if(0>t)return Pe(pt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=la;return new he(e,0)}function np(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Pe(np(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(e,8)),r=Bn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=pt(Math.pow(e,i)),r=r.R(i).add(pt(o))):(r=r.R(n),r=r.add(pt(o)))}return r}var la=4294967296,Bn=fc(0),ua=fc(1),Ql=fc(16777216);N=he.prototype;N.ea=function(){if(Xe(this))return-Pe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:la+r)*e,e*=la}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kt(this))return"0";if(Xe(this))return"-"+Pe(this).toString(t);for(var e=pt(Math.pow(t,6)),n=this,r="";;){var s=li(n,e).g;n=ci(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,kt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xe(t){return t.h==-1}N.X=function(t){return t=ci(this,t),Xe(t)?-1:kt(t)?0:1};function Pe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(ua)}N.abs=function(){return Xe(this)?Pe(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new he(n,n[n.length-1]&-2147483648?-1:0)};function ci(t,e){return t.add(Pe(e))}N.R=function(t){if(kt(this)||kt(t))return Bn;if(Xe(this))return Xe(t)?Pe(this).R(Pe(t)):Pe(Pe(this).R(t));if(Xe(t))return Pe(this.R(Pe(t)));if(0>this.X(Ql)&&0>t.X(Ql))return pt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Cs(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Cs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Cs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Cs(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function Cs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function dr(t,e){this.g=t,this.h=e}function li(t,e){if(kt(e))throw Error("division by zero");if(kt(t))return new dr(Bn,Bn);if(Xe(t))return e=li(Pe(t),e),new dr(Pe(e.g),Pe(e.h));if(Xe(e))return e=li(t,Pe(e)),new dr(Pe(e.g),e.h);if(30<t.g.length){if(Xe(t)||Xe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ua,r=e;0>=r.X(t);)n=Yl(n),r=Yl(r);var s=Rn(n,1),i=Rn(r,1);for(r=Rn(r,2),n=Rn(n,2);!kt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Rn(r,1),n=Rn(n,1)}return e=ci(t,s.R(e)),new dr(s,e)}for(s=Bn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=pt(n),o=i.R(e);Xe(o)||0<o.X(t);)n-=r,i=pt(n),o=i.R(e);kt(i)&&(i=ua),s=s.add(i),t=ci(t,o)}return new dr(s,t)}N.gb=function(t){return li(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function Yl(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function Rn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new he(s,t.h)}ai.prototype.createWebChannel=ai.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;Li.NO_ERROR=0;Li.TIMEOUT=8;Li.HTTP_ERROR=6;wf.COMPLETE="complete";If.EventType=as;as.OPEN="a";as.CLOSE="b";as.ERROR="c";as.MESSAGE="d";De.prototype.listen=De.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;it.prototype.digest=it.prototype.l;it.prototype.reset=it.prototype.reset;it.prototype.update=it.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=pt;he.fromString=np;var v1=function(){return new ai},_1=function(){return Mi()},Oo=Li,w1=wf,I1=bn,Jl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},E1=us,Rs=If,b1=Ee,T1=it,jn=he;const Xl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let or="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new bi("@firebase/firestore");function Zl(){return yn.logLevel}function x(t,...e){if(yn.logLevel<=ce.DEBUG){const n=e.map(pc);yn.debug(`Firestore (${or}): ${t}`,...n)}}function Ot(t,...e){if(yn.logLevel<=ce.ERROR){const n=e.map(pc);yn.error(`Firestore (${or}): ${t}`,...n)}}function Kn(t,...e){if(yn.logLevel<=ce.WARN){const n=e.map(pc);yn.warn(`Firestore (${or}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: `+t;throw Ot(e),new Error(e)}function ge(t,e){t||H()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class S1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class A1{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new rp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Le(e)}}class C1{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class R1{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new C1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.T=n.token,new D1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=O1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Gn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ae(0,0))}static max(){return new W(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends qr{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends qr{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return P1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(pe.fromString(e))}static fromName(e){return new j(pe.fromString(e).popFirst(5))}static empty(){return new j(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new pe(e.slice()))}}function $1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new Kt(s,j.empty(),e)}function M1(t){return new Kt(t.readTime,t.key,-1)}class Kt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kt(W.min(),j.empty(),-1)}static max(){return new Kt(W.max(),j.empty(),-1)}}function L1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==F1)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ps(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}gc.ct=-1;function zi(t){return t==null}function ui(t){return t===0&&1/t==-1/0}function x1(t){return typeof t=="number"&&Number.isInteger(t)&&!ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ds(this.root,e,this.comparator,!0)}}class Ds{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Oe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(e){return new tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new rt([])}unionWith(e){let n=new qe(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class op extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new op("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const V1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(t){if(ge(!!t),typeof t=="string"){let e=0;const n=V1.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vn(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yc(t){const e=t.mapValue.fields.__previous_value__;return mc(e)?yc(e):e}function zr(t){const e=Gt(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Hr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mc(t)?4:j1(t)?9007199254740991:10:H()}function wt(t,e){if(t===e)return!0;const n=_n(t);if(n!==_n(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zr(t).isEqual(zr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Gt(r.timestampValue),o=Gt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return vn(r.bytesValue).isEqual(vn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ke(r.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ke(r.integerValue)===ke(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ke(r.doubleValue),o=ke(s.doubleValue);return i===o?ui(i)===ui(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Gn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(eu(i)!==eu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!wt(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Kr(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function Wn(t,e){if(t===e)return 0;const n=_n(t),r=_n(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ke(s.integerValue||s.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nu(t.timestampValue,e.timestampValue);case 4:return nu(zr(t),zr(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,i){const o=vn(s),a=vn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=le(ke(s.latitude),ke(i.latitude));return o!==0?o:le(ke(s.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Wn(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ns.mapValue&&i===Ns.mapValue)return 0;if(s===Ns.mapValue)return 1;if(i===Ns.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const d=Wn(o[a[u]],c[l[u]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function nu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Gt(t),r=Gt(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function Qn(t){return ha(t)}function ha(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Gt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=ha(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${ha(r.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function ru(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function da(t){return!!t&&"integerValue"in t}function vc(t){return!!t&&"arrayValue"in t}function su(t){return!!t&&"nullValue"in t}function iu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xs(t){return!!t&&"mapValue"in t}function Tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Tr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function j1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(n)}setAll(e){let n=xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Tr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ze(Tr(this.value))}}function ap(t){const e=[];return ar(t.fields,(n,r)=>{const s=new xe([n]);if(xs(r)){const i=ap(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,W.min(),W.min(),W.min(),Ze.empty(),0)}static newFoundDocument(e,n,r,s){return new Fe(e,1,n,W.min(),r,s,0)}static newNoDocument(e,n){return new Fe(e,2,n,W.min(),W.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,W.min(),W.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hi{constructor(e,n){this.position=e,this.inclusive=n}}function ou(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Wn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class kr{constructor(e,n="asc"){this.field=e,this.dir=n}}function q1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cp{}class Se extends cp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H1(e,n,r):n==="array-contains"?new W1(e,r):n==="in"?new Q1(e,r):n==="not-in"?new Y1(e,r):n==="array-contains-any"?new J1(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new K1(e,r):new G1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wn(n,this.value)):n!==null&&_n(this.value)===_n(n)&&this.matchesComparison(Wn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ot extends cp{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new ot(e,n)}matches(e){return lp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lp(t){return t.op==="and"}function up(t){return z1(t)&&lp(t)}function z1(t){for(const e of t.filters)if(e instanceof ot)return!1;return!0}function fa(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+Qn(t.value);if(up(t))return t.filters.map(e=>fa(e)).join(",");{const e=t.filters.map(n=>fa(n)).join(",");return`${t.op}(${e})`}}function hp(t,e){return t instanceof Se?function(n,r){return r instanceof Se&&n.op===r.op&&n.field.isEqual(r.field)&&wt(n.value,r.value)}(t,e):t instanceof ot?function(n,r){return r instanceof ot&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&hp(i,r.filters[o]),!0):!1}(t,e):void H()}function dp(t){return t instanceof Se?function(e){return`${e.field.canonicalString()} ${e.op} ${Qn(e.value)}`}(t):t instanceof ot?function(e){return e.op.toString()+" {"+e.getFilters().map(dp).join(" ,")+"}"}(t):"Filter"}class H1 extends Se{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class K1 extends Se{constructor(e,n){super(e,"in",n),this.keys=fp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G1 extends Se{constructor(e,n){super(e,"not-in",n),this.keys=fp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class W1 extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vc(n)&&Kr(n.arrayValue,this.value)}}class Q1 extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kr(this.value.arrayValue,n)}}class Y1 extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kr(this.value.arrayValue,n)}}class J1 extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function cu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X1(t,e,n,r,s,i,o)}function _c(t){const e=J(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fa(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qn(r)).join(",")),e.dt=n}return e.dt}function wc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!q1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!au(t.startAt,e.startAt)&&au(t.endAt,e.endAt)}function pa(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Z1(t,e,n,r,s,i,o,a){return new gs(t,e,n,r,s,i,o,a)}function Ic(t){return new gs(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ec(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function gp(t){return t.collectionGroup!==null}function qn(t){const e=J(t);if(e.wt===null){e.wt=[];const n=Ec(e),r=pp(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new kr(n)),e.wt.push(new kr(xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new kr(xe.keyField(),i))}}}return e.wt}function Pt(t){const e=J(t);if(!e._t)if(e.limitType==="F")e._t=cu(e.path,e.collectionGroup,qn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new kr(i.field,o))}const r=e.endAt?new hi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new hi(e.startAt.position,e.startAt.inclusive):null;e._t=cu(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function ga(t,e){e.getFirstInequalityField(),Ec(t);const n=t.filters.concat([e]);return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ma(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hi(t,e){return wc(Pt(t),Pt(e))&&t.limitType===e.limitType}function mp(t){return`${_c(Pt(t))}|lt:${t.limitType}`}function ya(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>dp(r)).join(", ")}]`),zi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qn(r)).join(",")),`Target(${n})`}(Pt(t))}; limitType=${t.limitType})`}function Ki(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of qn(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=ou(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,qn(n),r)||n.endAt&&!function(s,i,o){const a=ou(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,qn(n),r))}(t,e)}function eI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yp(t){return(e,n)=>{let r=!1;for(const s of qn(t)){const i=tI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tI(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Wn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ip(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new we(j.comparator);function $t(){return nI}const vp=new we(j.comparator);function yr(...t){let e=vp;for(const n of t)e=e.insert(n.key,n);return e}function _p(t){let e=vp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function an(){return Sr()}function wp(){return Sr()}function Sr(){return new cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const rI=new we(j.comparator),sI=new qe(j.comparator);function re(...t){let e=sI;for(const n of t)e=e.add(n);return e}const iI=new qe(le);function oI(){return iI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Ep(t){return{integerValue:""+t}}function aI(t,e){return x1(e)?Ep(e):Ip(t,e)}/**
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
 */class Gi{constructor(){this._=void 0}}function cI(t,e,n){return t instanceof di?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&mc(s)&&(s=yc(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Gr?Tp(t,e):t instanceof Wr?kp(t,e):function(r,s){const i=bp(r,s),o=uu(i)+uu(r.gt);return da(i)&&da(r.gt)?Ep(o):Ip(r.serializer,o)}(t,e)}function lI(t,e,n){return t instanceof Gr?Tp(t,e):t instanceof Wr?kp(t,e):n}function bp(t,e){return t instanceof fi?da(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class di extends Gi{}class Gr extends Gi{constructor(e){super(),this.elements=e}}function Tp(t,e){const n=Sp(e);for(const r of t.elements)n.some(s=>wt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wr extends Gi{constructor(e){super(),this.elements=e}}function kp(t,e){let n=Sp(e);for(const r of t.elements)n=n.filter(s=>!wt(s,r));return{arrayValue:{values:n}}}class fi extends Gi{constructor(e,n){super(),this.serializer=e,this.gt=n}}function uu(t){return ke(t.integerValue||t.doubleValue)}function Sp(t){return vc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Gr&&r instanceof Gr||n instanceof Wr&&r instanceof Wr?Gn(n.elements,r.elements,wt):n instanceof fi&&r instanceof fi?wt(n.gt,r.gt):n instanceof di&&r instanceof di}(t.transform,e.transform)}class hI{constructor(e,n){this.version=e,this.transformResults=n}}class yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wi{}function Ap(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bc(t.key,yt.none()):new ms(t.key,t.data,yt.none());{const n=t.data,r=Ze.empty();let s=new qe(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tn(t.key,r,new rt(s.toArray()),yt.none())}}function dI(t,e,n){t instanceof ms?function(r,s,i){const o=r.value.clone(),a=du(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Tn?function(r,s,i){if(!Vs(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=du(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Cp(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ar(t,e,n,r){return t instanceof ms?function(s,i,o,a){if(!Vs(s.precondition,i))return o;const c=s.value.clone(),l=fu(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tn?function(s,i,o,a){if(!Vs(s.precondition,i))return o;const c=fu(s.fieldTransforms,a,i),l=i.data;return l.setAll(Cp(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Vs(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function fI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bp(r.transform,s||null);i!=null&&(n===null&&(n=Ze.empty()),n.set(r.field,i))}return n||null}function hu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gn(n,r,(s,i)=>uI(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ms extends Wi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tn extends Wi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function du(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,lI(o,a,n[s]))}return r}function fu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,cI(i,o,e))}return r}class bc extends Wi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pI extends Wi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ar(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ar(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ap(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Gn(this.mutations,e.mutations,(n,r)=>hu(n,r))&&Gn(this.baseMutations,e.baseMutations,(n,r)=>hu(n,r))}}class Tc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=rI;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tc(e,n,r,s)}}/**
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
 */class mI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,se;function vI(t){switch(t){default:return H();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Rp(t){if(t===void 0)return Ot("GRPC error has no .code"),T.UNKNOWN;switch(t){case Te.OK:return T.OK;case Te.CANCELLED:return T.CANCELLED;case Te.UNKNOWN:return T.UNKNOWN;case Te.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Te.INTERNAL:return T.INTERNAL;case Te.UNAVAILABLE:return T.UNAVAILABLE;case Te.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Te.NOT_FOUND:return T.NOT_FOUND;case Te.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Te.ABORTED:return T.ABORTED;case Te.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Te.DATA_LOSS:return T.DATA_LOSS;default:return H()}}(se=Te||(Te={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class kc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Os}static getOrCreateInstance(){return Os===null&&(Os=new kc),Os}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Os=null;/**
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
 */function _I(){return new TextEncoder}/**
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
 */const wI=new jn([4294967295,4294967295],0);function pu(t){const e=_I().encode(t),n=new T1;return n.update(e),new Uint8Array(n.digest())}function gu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([n,r],0),new jn([s,i],0)]}class Sc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vr(`Invalid padding: ${n}`);if(r<0)throw new vr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=jn.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(jn.fromNumber(r)));return s.compare(wI)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sc(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ys.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qi(W.min(),s,new we(le),$t(),re())}}class ys{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ys(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class Dp{constructor(e,n){this.targetId=e,this.Vt=n}}class Np{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.St=0,this.Dt=vu(),this.Ct=He.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=re(),n=re(),r=re();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new ys(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=vu()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class II{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=$t(),this.zt=yu(),this.Wt=new we(le)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(pa(o))if(s===0){const a=new j(o.path);this.Yt(r,a,Fe.newNoDocument(a,W.min()))}else ge(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=kc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,_,g,m,E;const v={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(v.bloomFilter={applied:l===0,hashCount:(d=k==null?void 0:k.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(g=(_=(p=k==null?void 0:k.bits)===null||p===void 0?void 0:p.bitmap)===null||_===void 0?void 0:_.length)!==null&&g!==void 0?g:0,padding:(E=(m=k==null?void 0:k.bits)===null||m===void 0?void 0:m.padding)!==null&&E!==void 0?E:0}),v}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=vn(i).toUint8Array()}catch(u){if(u instanceof op)return Kn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Sc(c,o,a)}catch(u){return Kn(u instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&pa(a.target)){const c=new j(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Fe.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=re();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Qi(e,n,this.Wt,this.jt,r);return this.jt=$t(),this.zt=yu(),this.Wt=new we(le),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new mu,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new qe(le),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new mu),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function yu(){return new we(j.comparator)}function vu(){return new we(j.comparator)}const EI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),TI=(()=>({and:"AND",or:"OR"}))();class kI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function va(t,e){return t.useProto3Json||zi(e)?e:{value:e}}function pi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Op(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SI(t,e){return pi(t,e.toTimestamp())}function vt(t){return ge(!!t),W.fromTimestamp(function(e){const n=Gt(e);return new Ae(n.seconds,n.nanos)}(t))}function Ac(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pp(t){const e=pe.fromString(t);return ge(Fp(e)),e}function _a(t,e){return Ac(t.databaseId,e.path)}function Po(t,e){const n=Pp(e);if(n.get(1)!==t.databaseId.projectId)throw new M(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j($p(n))}function wa(t,e){return Ac(t.databaseId,e)}function AI(t){const e=Pp(t);return e.length===4?pe.emptyPath():$p(e)}function Ia(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $p(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _u(t,e,n){return{name:_a(t,e),fields:n.value.mapValue.fields}}function CI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ge(l===void 0||typeof l=="string"),He.fromBase64String(l||"")):(ge(l===void 0||l instanceof Uint8Array),He.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Rp(c.code);return new M(l,c.message||"")}(o);n=new Np(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Po(t,r.document.name),i=vt(r.document.updateTime),o=r.document.createTime?vt(r.document.createTime):W.min(),a=new Ze({mapValue:{fields:r.document.fields}}),c=Fe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Bs(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Po(t,r.document),i=r.readTime?vt(r.readTime):W.min(),o=Fe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Bs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Po(t,r.document),i=r.removedTargetIds||[];n=new Bs([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yI(s,i),a=r.targetId;n=new Dp(a,o)}}return n}function RI(t,e){let n;if(e instanceof ms)n={update:_u(t,e.key,e.value)};else if(e instanceof bc)n={delete:_a(t,e.key)};else if(e instanceof Tn)n={update:_u(t,e.key,e.data),updateMask:UI(e.fieldMask)};else{if(!(e instanceof pI))return H();n={verify:_a(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof di)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Wr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:SI(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function DI(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?vt(r.updateTime):vt(s);return i.isEqual(W.min())&&(i=vt(s)),new hI(i,r.transformResults||[])}(n,e))):[]}function NI(t,e){return{documents:[wa(t,e.path)]}}function OI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Lp(ot.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Pn(u.field),direction:MI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=va(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function PI(t){let e=AI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Mp(u);return h instanceof ot&&up(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new kr($n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,zi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new hi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new hi(d,h)}(n.endAt)),Z1(e,s,o,i,a,"F",c,l)}function $I(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$n(e.unaryFilter.field);return Se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=$n(e.unaryFilter.field);return Se.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$n(e.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$n(e.unaryFilter.field);return Se.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Se.create($n(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ot.create(e.compositeFilter.filters.map(n=>Mp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function MI(t){return EI[t]}function LI(t){return bI[t]}function FI(t){return TI[t]}function Pn(t){return{fieldPath:t.canonicalString()}}function $n(t){return xe.fromServerFormat(t.fieldPath)}function Lp(t){return t instanceof Se?function(e){if(e.op==="=="){if(iu(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NAN"}};if(su(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(iu(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NOT_NAN"}};if(su(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(e.field),op:LI(e.op),value:e.value}}}(t):t instanceof ot?function(e){const n=e.getFilters().map(r=>Lp(r));return n.length===1?n[0]:{compositeFilter:{op:FI(e.op),filters:n}}}(t):H()}function UI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r,s,i=W.min(),o=W.min(),a=He.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.fe=e}}function VI(t){const e=PI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ma(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.rn=new jI}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Kt.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class jI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Yn(0)}static Mn(){return new Yn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.changes=new cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ar(r.mutation,s,rt.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=an();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=an();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=$t();const o=Sr(),a=Sr();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Tn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ar(u.mutation,l,u.mutation.getFieldMask(),Ae.now())):o.set(l.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new zI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sr();let s=new we((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=wp();u.forEach(d=>{if(!i.has(d)){const p=Ap(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(an());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:_p(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let s=yr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=yr();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(l,u){return new gs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Fe.newInvalidDocument(l)))});let o=yr();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ar(l.mutation,c,rt.empty(),Ae.now()),Ki(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:vt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:VI(r.bundledQuery),readTime:vt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class GI{constructor(){this.overlays=new we(j.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=an();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=an(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=an(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=an(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mI(n,r));let i=this.ls.get(n);i===void 0&&(i=re(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.fs=new qe(Re.ds),this.ws=new qe(Re._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Re(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Re(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new j(new pe([])),r=new Re(n,e),s=new Re(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new j(new pe([])),r=new Re(n,e),s=new Re(n,e+1);let i=re();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Re(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return j.comparator(e.key,n.key)||le(e.As,n.As)}static _s(e,n){return le(e.As,n.As)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new qe(Re.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Re(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),s=new Re(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(le);return n.forEach(s=>{const i=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),S.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Re(new j(i),0);let a=new qe(le);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return S.forEach(n.mutations,s=>{const i=new Re(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Re(n,0),s=this.Rs.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.Ds=e,this.docs=new we(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=$t();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Fe.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$t();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||L1(M1(u),r)<=0||(s.has(u.key)||Ki(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){H()}Cs(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YI(this)}getSize(e){return S.resolve(this.size)}}class YI extends qI{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.persistence=e,this.xs=new cr(n=>_c(n),wc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Cc,this.targetCount=0,this.Ms=Yn.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Yn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.$s={},this.overlays={},this.Os=new gc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new JI(this),this.indexManager=new BI,this.remoteDocumentCache=function(r){return new QI(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new xI(n),this.qs=new KI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new WI(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const s=new ZI(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return S.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class ZI extends U1{constructor(e){super(),this.currentSequenceNumber=e}}class Rc{constructor(e){this.persistence=e,this.Qs=new Cc,this.js=null}static zs(e){return new Rc(e)}get Ws(){if(this.js)return this.js;throw H()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,r=>{const s=j.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Dc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(lu(n))return S.resolve(null);let r=Pt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ma(n,null,"F"),r=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,ma(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,s){return lu(n)||s.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Zl()<=ce.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ya(n)),this.Wi(e,o,n,$1(s,-1)))})}ji(e,n){let r=new qe(yp(e));return n.forEach((s,i)=>{Ki(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Zl()<=ce.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ya(n)),this.Ui.getDocumentsMatchingQuery(e,n,Kt.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new we(le),this.Yi=new cr(i=>_c(i),wc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HI(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function nE(t,e,n,r){return new tE(t,e,n,r)}async function Up(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function rE(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(_=>{const g=c.docVersions.get(p);ge(g!==null),_.version.compareTo(g)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xp(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function sE(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(He.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(_,g,m){return _.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(n.Bs.updateTargetData(i,p))});let c=$t(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(iE(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(W.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function iE(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$t();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function oE(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aE(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new Bt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Ea(t,e,n){const r=J(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function wu(t,e,n){const r=J(t);let s=W.min(),i=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Yi.get(l);return h!==void 0?S.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,Pt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:W.min(),n?i:re())).next(a=>(cE(r,eI(e),a),{documents:a,ir:i})))}function cE(t,e,n){let r=t.Xi.get(e)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Iu{constructor(){this.activeTargetIds=oI()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lE{constructor(){this.Hr=new Iu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Iu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ps=null;function $o(){return Ps===null?Ps=268435456+Math.round(2147483648*Math.random()):Ps++,"0x"+Ps.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class fE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=$o(),a=this.To(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(l=>(x("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Kn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+or,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=hE[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=$o();return new Promise((o,a)=>{const c=new b1;c.setWithCredentials(!0),c.listenOnce(w1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oo.NO_ERROR:const u=c.getResponseJson();x(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Oo.TIMEOUT:x(Me,`RPC '${e}' ${i} timed out`),a(new M(T.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const h=c.getStatus();if(x(Me,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new M(_,p.message))}else a(new M(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(T.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{x(Me,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);x(Me,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const s=$o(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v1(),a=_1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new E1({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");x(Me,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new dE({ro:m=>{p?x(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(x(Me,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),x(Me,`RPC '${e}' stream ${s} sending:`,m),h.send(m))},oo:()=>h.close()}),g=(m,E,v)=>{m.listen(E,k=>{try{v(k)}catch(L){setTimeout(()=>{throw L},0)}})};return g(h,Rs.EventType.OPEN,()=>{p||x(Me,`RPC '${e}' stream ${s} transport opened.`)}),g(h,Rs.EventType.CLOSE,()=>{p||(p=!0,x(Me,`RPC '${e}' stream ${s} transport closed`),_.wo())}),g(h,Rs.EventType.ERROR,m=>{p||(p=!0,Kn(Me,`RPC '${e}' stream ${s} transport errored:`,m),_.wo(new M(T.UNAVAILABLE,"The operation could not be completed")))}),g(h,Rs.EventType.MESSAGE,m=>{var E;if(!p){const v=m.data[0];ge(!!v);const k=v,L=k.error||((E=k[0])===null||E===void 0?void 0:E.error);if(L){x(Me,`RPC '${e}' stream ${s} received error:`,L);const P=L.status;let D=function(ve){const O=Te[ve];if(O!==void 0)return Rp(O)}(P),X=L.message;D===void 0&&(D=T.INTERNAL,X="Unknown error status: "+P+" with message "+L.message),p=!0,_.wo(new M(D,X)),h.close()}else x(Me,`RPC '${e}' stream ${s} received:`,v),_._o(v)}}),g(a,I1.STAT_EVENT,m=>{m.stat===Jl.PROXY?x(Me,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===Jl.NOPROXY&&x(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function Mo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return new kI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Vp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Ot(n.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new M(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pE extends Bp{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=CI(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?vt(i.readTime):W.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ia(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=pa(a)?{documents:NI(s,a)}:{query:OI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Op(s,i.resumeToken);const c=va(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(W.min())>0){o.readTime=pi(s,i.snapshotVersion.toTimestamp());const c=va(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=$I(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ia(this.serializer),n.removeTarget=e,this.Wo(n)}}class gE extends Bp{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=DI(e.writeResults,e.commitTime),r=vt(e.commitTime);return this.listener.cu(r,n)}return ge(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ia(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RI(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new M(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(T.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(T.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class yE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ot(n),this.mu=!1):x("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{kn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.vu.add(4),await vs(c),c.bu.set("Unknown"),c.vu.delete(4),await Ji(c)}(this))})}),this.bu=new yE(r,s)}}async function Ji(t){if(kn(t))for(const e of t.Ru)await e(!0)}async function vs(t){for(const e of t.Ru)await e(!1)}function jp(t,e){const n=J(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Pc(n)?Oc(n):lr(n).Ko()&&Nc(n,e))}function qp(t,e){const n=J(t),r=lr(n);n.Au.delete(e),r.Ko()&&zp(n,e),n.Au.size===0&&(r.Ko()?r.jo():kn(n)&&n.bu.set("Unknown"))}function Nc(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lr(t).su(e)}function zp(t,e){t.Vu.qt(e),lr(t).iu(e)}function Oc(t){t.Vu=new II({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),lr(t).start(),t.bu.gu()}function Pc(t){return kn(t)&&!lr(t).Uo()&&t.Au.size>0}function kn(t){return J(t).vu.size===0}function Hp(t){t.Vu=void 0}async function _E(t){t.Au.forEach((e,n)=>{Nc(t,e)})}async function wE(t,e){Hp(t),Pc(t)?(t.bu.Iu(e),Oc(t)):t.bu.set("Unknown")}async function IE(t,e,n){if(t.bu.set("Online"),e instanceof Np&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gi(t,r)}else if(e instanceof Bs?t.Vu.Ht(e):e instanceof Dp?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const r=await xp(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(He.EMPTY_BYTE_STRING,l.snapshotVersion)),zp(s,a);const u=new Bt(l.target,a,c,l.sequenceNumber);Nc(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await gi(t,r)}}async function gi(t,e,n){if(!ps(e))throw e;t.vu.add(1),await vs(t),t.bu.set("Offline"),n||(n=()=>xp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ji(t)})}function Kp(t,e){return e().catch(n=>gi(t,n,e))}async function Xi(t){const e=J(t),n=Wt(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;EE(e);)try{const s=await oE(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,bE(e,s)}catch(s){await gi(e,s)}Gp(e)&&Wp(e)}function EE(t){return kn(t)&&t.Eu.length<10}function bE(t,e){t.Eu.push(e);const n=Wt(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Gp(t){return kn(t)&&!Wt(t).Uo()&&t.Eu.length>0}function Wp(t){Wt(t).start()}async function TE(t){Wt(t).hu()}async function kE(t){const e=Wt(t);for(const n of t.Eu)e.uu(n.mutations)}async function SE(t,e,n){const r=t.Eu.shift(),s=Tc.from(r,e,n);await Kp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xi(t)}async function AE(t,e){e&&Wt(t).ou&&await async function(n,r){if(s=r.code,vI(s)&&s!==T.ABORTED){const i=n.Eu.shift();Wt(n).Qo(),await Kp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Xi(n)}var s}(t,e),Gp(t)&&Wp(t)}async function bu(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=kn(n);n.vu.add(3),await vs(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ji(n)}async function CE(t,e){const n=J(t);e?(n.vu.delete(2),await Ji(n)):e||(n.vu.add(2),await vs(n),n.bu.set("Unknown"))}function lr(t){return t.Su||(t.Su=function(e,n,r){const s=J(e);return s.fu(),new pE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:_E.bind(null,t),ao:wE.bind(null,t),nu:IE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Pc(t)?Oc(t):t.bu.set("Unknown")):(await t.Su.stop(),Hp(t))})),t.Su}function Wt(t){return t.Du||(t.Du=function(e,n,r){const s=J(e);return s.fu(),new gE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:TE.bind(null,t),ao:AE.bind(null,t),au:kE.bind(null,t),cu:SE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Xi(t)):(await t.Du.stop(),t.Eu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new $c(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mc(t,e){if(Ot("AsyncQueue",`${e}: ${t}`),ps(t))return new M(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=yr(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new zn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Cu=new we(j.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):H():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Jn{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Jn(e,n,zn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.Nu=void 0,this.listeners=[]}}class DE{constructor(){this.queries=new cr(e=>mp(e),Hi),this.onlineState="Unknown",this.ku=new Set}}async function NE(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new RE),s)try{i.Nu=await n.onListen(r)}catch(o){const a=Mc(o,`Initialization of query '${ya(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Lc(n)}async function OE(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function PE(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&Lc(n)}function $E(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Lc(t){t.ku.forEach(e=>{e.next()})}class ME{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.key=e}}class Yp{constructor(e){this.key=e}}class LE{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=re(),this.mutatedKeys=re(),this.tc=yp(e),this.ec=new zn(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Tu,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Ki(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;d&&p?d.data.isEqual(p.data)?_!==g&&(r.track({type:3,doc:p}),m=!0):this.rc(d,p)||(r.track({type:2,doc:p}),m=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),m=!0):d&&!p&&(r.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Jn(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Tu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=re(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Yp(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Qp(r))}),n}hc(e){this.Yu=e.ir,this.Zu=re();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Jn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class FE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UE{constructor(e){this.key=e,this.fc=!1}}class xE{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new cr(a=>mp(a),Hi),this._c=new Map,this.mc=new Set,this.gc=new we(j.comparator),this.yc=new Map,this.Ic=new Cc,this.Tc={},this.Ec=new Map,this.Ac=Yn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function VE(t,e){const n=YE(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await aE(n.localStore,Pt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await BE(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&jp(n.remoteStore,o)}return s}async function BE(t,e,n,r,s){t.Rc=(h,d,p)=>async function(_,g,m,E){let v=g.view.sc(m);v.zi&&(v=await wu(_.localStore,g.query,!1).then(({documents:P})=>g.view.sc(P,v)));const k=E&&E.targetChanges.get(g.targetId),L=g.view.applyChanges(v,_.isPrimaryClient,k);return Su(_,g.targetId,L.cc),L.snapshot}(t,h,d,p);const i=await wu(t.localStore,e,!0),o=new LE(e,i.ir),a=o.sc(i.documents),c=ys.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Su(t,n,l.cc);const u=new FE(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function jE(t,e){const n=J(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Hi(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ea(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qp(n.remoteStore,r.targetId),ba(n,r.targetId)}).catch(fs)):(ba(n,r.targetId),await Ea(n.localStore,r.targetId,!0))}async function qE(t,e,n){const r=JE(t);try{const s=await function(i,o){const a=J(i),c=Ae.now(),l=o.reduce((d,p)=>d.add(p.key),re());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=$t(),_=re();return a.Zi.getEntries(d,l).next(g=>{p=g,p.forEach((m,E)=>{E.isValidDocument()||(_=_.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const m=[];for(const E of o){const v=fI(E,u.get(E.key).overlayedDocument);v!=null&&m.push(new Tn(E.key,v,ap(v.value.mapValue),yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(d,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:_p(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new we(le)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,n),await _s(r,s.changes),await Xi(r.remoteStore)}catch(s){const i=Mc(s,"Failed to persist write");n.reject(i)}}async function Jp(t,e){const n=J(t);try{const r=await sE(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?ge(o.fc):s.removedDocuments.size>0&&(ge(o.fc),o.fc=!1))}),await _s(n,r,e)}catch(r){await fs(r)}}function ku(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Lc(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zE(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new we(j.comparator);o=o.insert(i,Fe.newNoDocument(i,W.min()));const a=re().add(i),c=new Qi(W.min(),new Map,new we(le),o,a);await Jp(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),Fc(r)}else await Ea(r.localStore,e,!1).then(()=>ba(r,e,n)).catch(fs)}async function HE(t,e){const n=J(t),r=e.batch.batchId;try{const s=await rE(n.localStore,e);Zp(n,r,null),Xp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _s(n,s)}catch(s){await fs(s)}}async function KE(t,e,n){const r=J(t);try{const s=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ge(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Zp(r,e,n),Xp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _s(r,s)}catch(s){await fs(s)}}function Xp(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Zp(t,e,n){const r=J(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function ba(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||eg(t,r)})}function eg(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(qp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Fc(t))}function Su(t,e,n){for(const r of n)r instanceof Qp?(t.Ic.addReference(r.key,e),GE(t,r)):r instanceof Yp?(x("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||eg(t,r.key)):H()}function GE(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.mc.add(r),Fc(t))}function Fc(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new j(pe.fromString(e)),r=t.Ac.next();t.yc.set(r,new UE(n)),t.gc=t.gc.insert(n,r),jp(t.remoteStore,new Bt(Pt(Ic(n.path)),r,"TargetPurposeLimboResolution",gc.ct))}}async function _s(t,e,n){const r=J(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Dc.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ps(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,_)}}}(r.localStore,i))}async function WE(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Up(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new M(T.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _s(n,r.er)}}function QE(t,e){const n=J(t),r=n.yc.get(e);if(r&&r.fc)return re().add(r.key);{let s=re();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function YE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zE.bind(null,e),e.dc.nu=PE.bind(null,e.eventManager),e.dc.Pc=$E.bind(null,e.eventManager),e}function JE(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KE.bind(null,e),e}class Au{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Yi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nE(this.persistence,new eE,e.initialUser,this.serializer)}createPersistence(e){return new XI(Rc.zs,this.serializer)}createSharedClientState(e){return new lE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ku(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WE.bind(null,this.syncEngine),await CE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new DE}createDatastore(e){const n=Yi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new fE(s));var s;return function(i,o,a,c){return new mE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ku(this.syncEngine,a,0),o=Eu.D()?new Eu:new uE,new vE(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new xE(r,s,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);x("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await vs(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=sp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lo(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Up(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nb(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>bu(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>bu(e.remoteStore,i)),t._onlineComponents=e}function tb(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tb(n))throw n;Kn("Error using user provided cache. Falling back to memory cache: "+n),await Lo(t,new Au)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Lo(t,new Au);return t._offlineComponents}async function tg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Cu(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Cu(t,new XE))),t._onlineComponents}function rb(t){return tg(t).then(e=>e.syncEngine)}async function Ru(t){const e=await tg(t),n=e.eventManager;return n.onListen=VE.bind(null,e.syncEngine),n.onUnlisten=jE.bind(null,e.syncEngine),n}/**
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
 */function ng(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function rg(t,e,n){if(!n)throw new M(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sb(t,e,n,r){if(e===!0&&r===!0)throw new M(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nu(t){if(!j.isDocumentKey(t))throw new M(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(j.isDocumentKey(t))throw new M(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zi(t);throw new M(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ng((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class eo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new k1;switch(n.type){case"firstParty":return new R1(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(x("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}function ib(t,e,n,r={}){var s;const i=(t=hn(t,eo))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Le.MOCK_USER;else{a=fm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Le(l)}t._authCredentials=new S1(new rp(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ur(this.firestore,e,this._query)}}class Ht extends ur{constructor(e,n,r){super(e,n,Ic(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new j(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function ob(t,e,...n){if(t=Ce(t),rg("collection","path",e),t instanceof eo){const r=pe.fromString(e,...n);return Ou(r),new Ht(t,null,r)}{if(!(t instanceof We||t instanceof Ht))throw new M(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ou(r),new Ht(t.firestore,null,r)}}function Dn(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=sp.A()),rg("doc","path",e),t instanceof eo){const r=pe.fromString(e,...n);return Nu(r),new We(t,null,new j(r))}{if(!(t instanceof We||t instanceof Ht))throw new M(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Nu(r),new We(t.firestore,t instanceof Ht?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Vp(this,"async_queue_retry"),this.Xc=()=>{const n=Mo();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Mo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new un;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ps(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=$c.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&H()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function $u(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Qr extends eo{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ab,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ig(this),this._firestoreClient.terminate()}}function cb(t,e){const n=typeof t=="object"?t:Ra(),r=typeof t=="string"?t:e||"(default)",s=In(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hm("firestore");i&&ib(s,...i)}return s}function sg(t){return t._firestoreClient||ig(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ig(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new B1(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ng(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(He.fromBase64String(e))}catch(n){throw new M(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=/^__.*__$/;class ub{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ms(e,this.data,n,this.fieldTransforms)}}function ag(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Vc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return mi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ag(this.ca)&&lb.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class hb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yi(e)}ya(e,n,r,s=!1){return new Vc({ca:e,methodName:n,ga:r,path:xe.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cg(t){const e=t._freezeSettings(),n=Yi(t._databaseId);return new hb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function db(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);hg("Data must be an object, but it was:",o,r);const a=lg(r,o);let c,l;if(i.merge)c=new rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=pb(e,h,n);if(!o.contains(d))throw new M(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mb(u,d)||u.push(d)}c=new rt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ub(new Ze(a),c,l)}function fb(t,e,n,r=!1){return Bc(n,t.ya(r?4:3,e))}function Bc(t,e){if(ug(t=Ce(t)))return hg("Unsupported field value:",e,t),lg(t,e);if(t instanceof og)return function(n,r){if(!ag(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Bc(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aI(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ae.fromDate(n);return{timestampValue:pi(r.serializer,s)}}if(n instanceof Ae){const s=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pi(r.serializer,s)}}if(n instanceof xc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xn)return{bytesValue:Op(r.serializer,n._byteString)};if(n instanceof We){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ac(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Zi(n)}`)}(t,e)}function lg(t,e){const n={};return ip(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(r,s)=>{const i=Bc(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ug(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof xc||t instanceof Xn||t instanceof We||t instanceof og)}function hg(t,e,n){if(!ug(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zi(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function pb(t,e,n){if((e=Ce(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return dg(t,e);throw mi("Field path arguments must be of type string or ",t,!1,void 0,n)}const gb=new RegExp("[~\\*/\\[\\]]");function dg(t,e,n){if(e.search(gb)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(T.INVALID_ARGUMENT,a+t+c)}function mb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yb extends fg{data(){return super.data()}}function pg(t,e){return typeof e=="string"?dg(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jc{}class _b extends jc{}function wb(t,e,...n){let r=[];e instanceof jc&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof zc).length,o=s.filter(a=>a instanceof qc).length;if(i>1||i>0&&o>0)throw new M(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class qc extends _b{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return gg(e._query,n),new ur(e.firestore,e.converter,ga(e._query,n))}_parse(e){const n=cg(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new M(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Lu(u,l);const d=[];for(const p of u)d.push(Mu(a,s,p));h={arrayValue:{values:d}}}else h=Mu(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Lu(u,l),h=fb(o,i,u,l==="in"||l==="not-in");return Se.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class zc extends jc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ot.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)gg(i,a),i=ga(i,a)}(e._query,n),new ur(e.firestore,e.converter,ga(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mu(t,e,n){if(typeof(n=Ce(n))=="string"){if(n==="")throw new M(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gp(e)&&n.indexOf("/")!==-1)throw new M(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!j.isDocumentKey(r))throw new M(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ru(t,new j(r))}if(n instanceof We)return ru(t,n._key);throw new M(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zi(n)}.`)}function Lu(t,e){if(!Array.isArray(t)||t.length===0)throw new M(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gg(t,e){if(e.isInequality()){const r=Ec(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new M(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=pp(t);i!==null&&Ib(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ib(t,e,n){if(!n.isEqual(e))throw new M(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Eb{convertValue(e,n="none"){switch(_n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ar(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new xc(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const n=Gt(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ge(Fp(r));const s=new Hr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mg extends fg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class js extends mg{data(e={}){return super.data(e)}}class Tb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _r(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new js(this._firestore,this._userDataWriter,r.key,r,new _r(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new js(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _r(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new js(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _r(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:kb(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class yg extends Eb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function Fo(t,e,n){t=hn(t,We);const r=hn(t.firestore,Qr),s=bb(t.converter,e,n);return vg(r,[db(cg(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yt.none())])}function Fu(t){return vg(hn(t.firestore,Qr),[new bc(t._key,yt.none())])}function Uu(t,...e){var n,r,s;t=Ce(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$u(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($u(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof We)l=hn(t.firestore,Qr),u=Ic(t._key.path),c={next:h=>{e[o]&&e[o](Sb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=hn(t,ur);l=hn(h.firestore,Qr),u=h._query;const d=new yg(l);c={next:p=>{e[o]&&e[o](new Tb(l,d,h,p))},error:e[o+1],complete:e[o+2]},vb(t._query)}return function(h,d,p,_){const g=new ZE(_),m=new ME(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>NE(await Ru(h),m)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>OE(await Ru(h),m))}}(sg(l),u,a,c)}function vg(t,e){return function(n,r){const s=new un;return n.asyncQueue.enqueueAndForget(async()=>qE(await rb(n),r,s)),s.promise}(sg(t),e)}function Sb(t,e,n){const r=n.docs.get(e._key),s=new yg(t);return new mg(t,s,e._key,r,new _r(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){or=n})(er),_t(new st("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Qr(new A1(n.getProvider("auth-internal")),new N1(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),et(Xl,"3.12.2",t),et(Xl,"3.12.2","esm2017")})();const Ab={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},_g=Hh(Ab),en=x_(_g);kv(en,wd);const Xt=cb(_g);d0();const Cb=new It,Rb=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Xr(t);class r extends Error{constructor(i,o){super(o),this.code=i}}return yd(en,s=>{n(s?{loggedIn:!0,user:s}:t)}),{subscribe:e,async signUpWithEmail(s,i){if((i==null?void 0:i.length)<8)throw new r("auth/password-too-short");return bv(en,s,i)},async signInWithEmail(s,i){return Tv(en,s,i)},async signInWithGoogle(){return Wv(en,Cb)},async signOut(){return Cv(en)}}},wg=Rb(),xu="/assets/default-user-a40c52dd.png";function Db(t){let e;return{c(){e=I("i"),f(e,"class","codicon codicon-account")},m(n,r){R(n,e,r)},p:A,d(n){n&&C(e)}}}function Nb(t){let e,n;return{c(){e=I("img"),f(e,"class","profile-picture svelte-1m717b8"),Rt(e.src,n=t[0].user.photoURL??xu)||f(e,"src",n),f(e,"alt","Account")},m(r,s){R(r,e,s)},p(r,s){s&1&&!Rt(e.src,n=r[0].user.photoURL??xu)&&f(e,"src",n)},d(r){r&&C(e)}}}function Ob(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E,v;o=new rm({});function k(D,X){return D[0].loggedIn?Nb:Db}let L=k(t),P=L(t);return{c(){e=I("header"),n=I("div"),r=I("a"),r.innerHTML='<i class="codicon codicon-heart"></i>',s=$(),i=I("a"),V(o.$$.fragment),a=$(),c=I("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=$(),u=I("nav"),h=I("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=$(),p=I("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',_=$(),g=I("button"),P.c(),f(r,"title","Sponsor"),f(r,"href","https://ko-fi.com/kurozenzen"),f(r,"target","_newtab"),f(r,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(D,X){R(D,e,X),y(e,n),y(n,r),y(n,s),y(n,i),F(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,_),y(u,g),P.m(g,null),m=!0,E||(v=[B(c,"click",t[1]),B(h,"click",t[2]),B(p,"click",t[3]),B(g,"click",t[4])],E=!0)},p(D,[X]){L===(L=k(D))&&P?P.p(D,X):(P.d(1),P=L(D),P&&(P.c(),P.m(g,null)))},i(D){m||(w(o.$$.fragment,D),m=!0)},o(D){b(o.$$.fragment,D),m=!1},d(D){D&&C(e),U(o),P.d(),E=!1,be(v)}}}function Pb(t,e,n){let r;return Ue(t,wg,c=>n(0,r=c)),[r,()=>Ln.navigateTo("help"),()=>Ln.navigateTo("search"),()=>Ln.navigateTo("settings"),()=>Ln.navigateTo("account")]}class $b extends Y{constructor(e){super(),Q(this,e,Pb,Ob,G,{})}}const Mb="modulepreload",Lb=function(t){return"/"+t},Vu={},to=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Lb(i),i in Vu)return;Vu[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Mb,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},qs=Object.freeze(["+","-","~"]),no=t=>qs.includes(t),Fb=t=>{if(!no(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(qs.indexOf(t)+1)%qs.length;return qs[n]},Ub=Object.freeze({"+":"","-":"-","~":""}),xb=t=>{if(!no(t))throw TypeError("Invalid modifier passed to serializeModifier");return Ub[t]},ws=t=>typeof t=="string"&&t!=="",ro=t=>typeof t=="number";class so{constructor(e,n){if(!no(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!ws(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${xb(this.modifier)}${encodeURIComponent(this.name.replaceAll(" ","_"))}`}}const Ig=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),Eg=t=>Ig.includes(t),Bu=t=>{const e=Ig.indexOf(t);return e>=0?e:99},Vb=Object.freeze(["artist","character","copyright","source","metadata","rating"]),Bb=t=>Vb.includes(t);let io=class{constructor(e,n,r,s){if(!no(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!ws(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!ro(r))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Eg(s))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=r,this.type=s,Object.freeze(this)}};const bg=t=>new so(t.modifier,t.name);class Tg{constructor(e,n,r){if(!ws(e))throw new TypeError("Invalid name passed to Supertag");if(!jb(r))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...r]),Object.freeze(this)}}const jb=t=>Array.isArray(t)&&t.every(e=>e instanceof so),qb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Xr(t);let r,s=null,i=null;return yd(en,async o=>{r=o,o?s=Uu(Dn(Xt,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=wb(ob(Xt,`users/${o.uid}/supertags`));i==null||i(),i=Uu(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new Tg(d.id,p.description,Object.entries(p.tags).map(_=>new so(_[1],_[0]))))}),n(d=>(d.supertags=h,d))})}):(s==null||s(),i==null||i(),s=null,i=null)}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");return Fo(Dn(Xt,`users/${r.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async updateSupertag(o,a){if(!r)throw new Error("No user");const c=await Fo(Dn(Xt,`users/${r.uid}/supertags`,a.name),{description:a.description,tags:Object.fromEntries(a.tags.map(l=>[l.name,l.modifier]))});return o===a.name?c:Fu(Dn(Xt,`users/${r.uid}/supertags`,o))},async deleteSupertag(o){if(!r)throw new Error("No user");return Fu(Dn(Xt,`users/${r.uid}/supertags`,o.name))},async setTheme(o){if(r)return Fo(Dn(Xt,"users",r.uid),{preferences:{theme:o}},{merge:!0})}}},Yr=qb();function zb(t){let e,n,r,s,i;return{c(){e=I("button"),n=ue(t[0]),f(e,"title",t[1]),f(e,"class",r=Qe(t[3])+" svelte-pssy25"),e.disabled=t[2]},m(o,a){R(o,e,a),y(e,n),s||(i=B(e,"click",t[5]),s=!0)},p(o,[a]){a&1&&_e(n,o[0]),a&2&&f(e,"title",o[1]),a&8&&r!==(r=Qe(o[3])+" svelte-pssy25")&&f(e,"class",r),a&4&&(e.disabled=o[2])},i:A,o:A,d(o){o&&C(e),s=!1,i()}}}function Hb(t,e,n){let{text:r}=e,{title:s}=e,{disabled:i=!1}=e,{type:o="primary"}=e;const a=nt(),c=()=>a("click");return t.$$set=l=>{"text"in l&&n(0,r=l.text),"title"in l&&n(1,s=l.title),"disabled"in l&&n(2,i=l.disabled),"type"in l&&n(3,o=l.type)},[r,s,i,o,a,c]}class Hc extends Y{constructor(e){super(),Q(this,e,Hb,zb,G,{text:0,title:1,disabled:2,type:3})}}const Lt=t=>e=>{(Kc(e)||Kb(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},Kb=t=>t.code==="Space",Kc=t=>t.code==="Enter"||t.key==="Enter",Gb=Intl.NumberFormat("en",{notation:"compact"}),Mt=t=>{if(!ro(t))throw new TypeError(`Invalid value passed to formatCount: ${t}`);return Gb.format(t)};function Zn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Wb=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),ju=Object.freeze({"+":"include","-":"exclude","~":"optional"});function qu(t){let e,n=Mt(t[0].count)+"",r,s;return{c(){e=ue("("),r=ue(n),s=ue(")")},m(i,o){R(i,e,o),R(i,r,o),R(i,s,o)},p(i,o){o&1&&n!==(n=Mt(i[0].count)+"")&&_e(r,n)},d(i){i&&C(e),i&&C(r),i&&C(s)}}}function Qb(t){let e,n=Zn(t[0].name)+"",r,s,i,o,a,c=t[0].count&&qu(t);return{c(){e=I("li"),r=ue(n),s=$(),c&&c.c(),f(e,"class",i=Qe(ju[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),de(e,"no-icon",t[0].type!=="supertag")},m(l,u){R(l,e,u),y(e,r),y(e,s),c&&c.m(e,null),o||(a=[B(e,"click",t[2]),B(e,"contextmenu",Ta(t[3]))],o=!0)},p(l,[u]){u&1&&n!==(n=Zn(l[0].name)+"")&&_e(r,n),l[0].count?c?c.p(l,u):(c=qu(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&1&&i!==(i=Qe(ju[l[0].modifier])+" svelte-13vl0re")&&f(e,"class",i),u&1&&de(e,"no-icon",l[0].type!=="supertag")},i:A,o:A,d(l){l&&C(e),c&&c.d(),o=!1,be(a)}}}function Yb(t,e,n){let{tag:r}=e;const s=nt(),i=()=>s("click"),o=()=>s("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,r=a.tag)},[r,s,i,o]}class kg extends Y{constructor(e){super(),Q(this,e,Yb,Qb,G,{tag:0})}}function Jb(t){let e,n,r,s,i;const o=t[2].default,a=Ch(o,t,t[1],null);return{c(){e=I("div"),n=I("div"),a&&a.c(),f(n,"class","dialog svelte-llz7bw"),f(e,"class","backdrop svelte-llz7bw")},m(c,l){R(c,e,l),y(e,n),a&&a.m(n,null),r=!0,s||(i=[B(n,"click",Hs(Xb)),B(e,"click",t[0]),B(e,"keyup",t[3])],s=!0)},p(c,[l]){a&&a.p&&(!r||l&2)&&Nh(a,o,c,c[1],r?Dh(o,c[1],l,null):Oh(c[1]),null)},i(c){r||(w(a,c),r=!0)},o(c){b(a,c),r=!1},d(c){c&&C(e),a&&a.d(c),s=!1,be(i)}}}const Xb=()=>{};function Zb(t,e,n){let{$$slots:r={},$$scope:s}=e;const i=nt(),o=()=>i("close"),a=c=>{c.code==="Escape"&&o()};return t.$$set=c=>{"$$scope"in c&&n(1,s=c.$$scope)},[o,s,r,a]}class Sg extends Y{constructor(e){super(),Q(this,e,Zb,Jb,G,{})}}function zu(t,e,n){const r=t.slice();return r[9]=e[n],r}function Hu(t){let e,n;return e=new kg({props:{tag:t[9]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function eT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E,v,k,L,P,D,X,ve,O,q=t[2],ee=[];for(let ne=0;ne<q.length;ne+=1)ee[ne]=Hu(zu(t,q,ne));const lt=ne=>b(ee[ne],1,1,()=>{ee[ne]=null});return D=new Hc({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),D.$on("click",t[8]),{c(){e=I("section"),n=I("h3"),n.textContent="Create Supertag",r=$(),s=I("i"),i=$(),o=I("div"),a=I("label"),a.textContent="Name",c=$(),l=I("input"),u=$(),h=I("div"),d=I("label"),d.textContent="Description",p=$(),_=I("input"),g=$(),m=I("div"),E=I("span"),E.textContent="Tags",v=$(),k=I("ol");for(let ne=0;ne<ee.length;ne+=1)ee[ne].c();L=$(),P=I("div"),V(D.$$.fragment),f(s,"tabindex","0"),f(s,"role","button"),f(s,"class",Qe("codicon codicon-close")+" svelte-1nylv2m"),f(a,"for","supertag-name"),f(a,"class","svelte-1nylv2m"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-1nylv2m"),f(o,"class","svelte-1nylv2m"),f(d,"for","supertag-description"),f(d,"class","svelte-1nylv2m"),f(_,"type","text"),f(_,"placeholder","Short description"),f(_,"id","supertag-description"),f(_,"class","svelte-1nylv2m"),f(h,"class","svelte-1nylv2m"),f(E,"class","svelte-1nylv2m"),f(k,"class","svelte-1nylv2m"),f(m,"class","svelte-1nylv2m"),f(P,"class","last svelte-1nylv2m"),f(e,"class","svelte-1nylv2m")},m(ne,Z){R(ne,e,Z),y(e,n),y(e,r),y(e,s),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),dt(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,_),dt(_,t[1]),y(e,g),y(e,m),y(m,E),y(m,v),y(m,k);for(let te=0;te<ee.length;te+=1)ee[te]&&ee[te].m(k,null);y(e,L),y(e,P),F(D,P,null),X=!0,ve||(O=[B(s,"click",t[5]),B(s,"keyup",Lt(t[5])),B(l,"input",t[6]),B(_,"input",t[7])],ve=!0)},p(ne,Z){if(Z&1&&l.value!==ne[0]&&dt(l,ne[0]),Z&2&&_.value!==ne[1]&&dt(_,ne[1]),Z&4){q=ne[2];let ie;for(ie=0;ie<q.length;ie+=1){const ut=zu(ne,q,ie);ee[ie]?(ee[ie].p(ut,Z),w(ee[ie],1)):(ee[ie]=Hu(ut),ee[ie].c(),w(ee[ie],1),ee[ie].m(k,null))}for(me(),ie=q.length;ie<ee.length;ie+=1)lt(ie);ye()}const te={};Z&8&&(te.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),Z&8&&(te.disabled=!ne[3]),D.$set(te)},i(ne){if(!X){for(let Z=0;Z<q.length;Z+=1)w(ee[Z]);w(D.$$.fragment,ne),X=!0}},o(ne){ee=ee.filter(Boolean);for(let Z=0;Z<ee.length;Z+=1)b(ee[Z]);b(D.$$.fragment,ne),X=!1},d(ne){ne&&C(e),Qt(ee,ne),U(D),ve=!1,be(O)}}}function tT(t){let e,n;return e=new Sg({props:{$$slots:{default:[eT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,[s]){const i={};s&4111&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function nT(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=nt(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Tg(s,i,o.map(bg))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=ws(s))},[s,i,o,r,a,c,l,u,h]}class rT extends Y{constructor(e){super(),Q(this,e,nT,tT,G,{name:0,description:1,tags:2})}}function sT(t){let e,n,r,s;return{c(){e=I("button"),f(e,"class",n=Qe(t[0])+" svelte-17m158f")},m(i,o){R(i,e,o),r||(s=[B(e,"click",t[1]),B(e,"keyup",Lt(t[1]))],r=!0)},p(i,[o]){o&1&&n!==(n=Qe(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:A,o:A,d(i){i&&C(e),r=!1,be(s)}}}function iT(t,e,n){let r,s,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%r.length),n(2,o=r[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,r=Object.entries(i)),t.$$.dirty&48&&n(0,s=r[a][1])},[s,c,o,i,a,r]}class Ag extends Y{constructor(e){super(),Q(this,e,iT,sT,G,{options:3,value:2})}}function oT(t){let e,n,r;function s(o){t[1](o)}let i={options:Wb};return t[0]!==void 0&&(i.value=t[0]),e=new Ag({props:i}),Ve.push(()=>At(e,"value",s)),{c(){V(e.$$.fragment)},m(o,a){F(e,o,a),r=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],St(()=>n=!1)),e.$set(c)},i(o){r||(w(e.$$.fragment,o),r=!0)},o(o){b(e.$$.fragment,o),r=!1},d(o){U(e,o)}}}function aT(t,e,n){let{modifier:r}=e;function s(i){r=i,n(0,r)}return t.$$set=i=>{"modifier"in i&&n(0,r=i.modifier)},[r,s]}class cT extends Y{constructor(e){super(),Q(this,e,aT,oT,G,{modifier:0})}}function lT(t){let e;return{c(){e=I("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class Gc extends Y{constructor(e){super(),Q(this,e,null,lT,G,{})}}let uT=class{constructor(e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E){this.preview_url=e,this.sample_url=n,this.file_url=r,this.comment_count=s,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=_,this.tags=g,this.width=m,this.type=E,Object.freeze(this)}};const Wc=(t,e)=>{if(!Cg(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!hT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Cg=t=>{try{return new URL(t),!0}catch{return!1}},hT=t=>t===null||t instanceof AbortController;class yi{constructor(e,n,r){if(!ws(e))throw TypeError("Invalid name passed to Tag constructor");if(!ro(n))throw TypeError("Invalid count passed to Tag constructor");if(!Eg(r))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=r,Object.freeze(this)}}const dT=(t,e)=>new io(e,t.name,t.count,t.type);let fT=null;const pT=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),r=await Wc(`${e}${n}`,fT);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length===0)throw new Error("No tags found");return s.map(i=>new yi(Rg(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw s.message?new Error(s.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Rg=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),Dg=20;let Ng=null;const Og=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},gT=async(t,e)=>{const n=await Wc(_T(t,e),Ng);Og(n);try{return(await n.json()).map(yT)}catch{return[]}},mT=async t=>{const e=await Wc(wT(t),Ng);Og(e);const n=await e.text(),s=new DOMParser().parseFromString(n,"text/xml"),i=Number(s.getElementsByTagName("posts")[0].getAttribute("count"));return IT(i),i},yT=t=>{const e=t.height,n=t.score,r=t.preview_url,s=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,_=t.comment_count,g=t.status,m=t.source;return new uT(r,o,s,Number(_),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),m,g,vT(u),Number(d),s.endsWith(".webm")||s.endsWith(".mp4")?"video":s.includes(".gif")?"gif":"image")},vT=t=>t.map(e=>new yi(Rg(e.tag),e.count,e.type)).sort((e,n)=>Bu(e.type)-Bu(n.type)),_T=(t,e)=>{const r=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Dg}&pid=${t}`;return e===""?r:`${r}&tags=${e}`},wT=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},IT=t=>{if(!ro(t))throw new Error("Unexpected response received in getPage")};let ET=class{constructor(e,n,r){bT(e),kT(n),TT(r),this.author=e,this.createdAt=n,this.content=r,Object.freeze(this)}};const bT=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},TT=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},kT=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Ku="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Gu=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Ku:`${Ku}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const r=await n.text(),i=new DOMParser().parseFromString(r,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(ST(a.attributes));return o},ST=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),r=t.getNamedItem("body");if(e==null||n==null||r==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${r}`);return new ET(e.value,n.value,r.value)};function AT(t){let e,n,r=Zn(t[0].name)+"",s,i,o,a=Mt(t[0].count)+"",c,l,u,h;return{c(){e=I("li"),n=I("span"),s=ue(r),i=$(),o=I("span"),c=ue(a),f(n,"class","tag-name svelte-1gc0x48"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-1gc0x48"),de(e,"selected",t[1])},m(d,p){R(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,c),u||(h=[B(e,"click",t[2]),B(e,"keypress",Lt(t[2]))],u=!0)},p(d,[p]){p&1&&r!==(r=Zn(d[0].name)+"")&&_e(s,r),p&1&&a!==(a=Mt(d[0].count)+"")&&_e(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&de(e,"selected",d[1])},i:A,o:A,d(d){d&&C(e),u=!1,be(h)}}}function CT(t,e,n){let{tag:r}=e,{selected:s=!1}=e;const i=nt(),o=()=>i("click",r);return t.$$set=a=>{"tag"in a&&n(0,r=a.tag),"selected"in a&&n(1,s=a.selected)},[r,s,o]}class RT extends Y{constructor(e){super(),Q(this,e,CT,AT,G,{tag:0,selected:1})}}function DT(t){let e,n,r;return{c(){e=I("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(s,i){R(s,e,i),n||(r=[B(e,"click",t[0]),B(e,"keyup",Lt(t[0]))],n=!0)},p:A,i:A,o:A,d(s){s&&C(e),n=!1,be(r)}}}function NT(t){return[()=>Ln.navigateTo("help")]}class OT extends Y{constructor(e){super(),Q(this,e,NT,DT,G,{})}}function Wu(t,e,n){const r=t.slice();return r[16]=e[n],r[18]=n,r}function PT(t){let e,n,r,s,i=t[19].message+"",o;return{c(){e=I("div"),n=I("i"),r=$(),s=I("span"),o=ue(i),f(n,"class",Qe("codicon codicon-error")+" svelte-au4sej"),f(e,"class","suggestion-footer svelte-au4sej")},m(a,c){R(a,e,c),y(e,n),y(e,r),y(e,s),y(s,o)},p(a,c){c&2&&i!==(i=a[19].message+"")&&_e(o,i)},i:A,o:A,d(a){a&&C(e)}}}function $T(t){let e,n,r,s=t[5],i=[];for(let a=0;a<s.length;a+=1)i[a]=Qu(Wu(t,s,a));const o=a=>b(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=$(),n=I("div"),f(n,"class","suggestion-footer svelte-au4sej")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);R(a,e,c),R(a,n,c),r=!0},p(a,c){if(c&100){s=a[5];let l;for(l=0;l<s.length;l+=1){const u=Wu(a,s,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=Qu(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(me(),l=s.length;l<i.length;l+=1)o(l);ye()}},i(a){if(!r){for(let c=0;c<s.length;c+=1)w(i[c]);r=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);r=!1},d(a){Qt(i,a),a&&C(e),a&&C(n)}}}function Qu(t){let e,n;return e=new RT({props:{tag:t[16],selected:t[18]===t[2]}}),e.$on("click",function(){wi(t[6](t[16]))&&t[6](t[16]).apply(this,arguments)}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){t=r;const i={};s&32&&(i.tag=t[16]),s&4&&(i.selected=t[18]===t[2]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function MT(t){let e,n,r;return n=new Gc({}),{c(){e=I("div"),V(n.$$.fragment),f(e,"class","suggestion-footer svelte-au4sej")},m(s,i){R(s,e,i),F(n,e,null),r=!0},p:A,i(s){r||(w(n.$$.fragment,s),r=!0)},o(s){b(n.$$.fragment,s),r=!1},d(s){s&&C(e),U(n)}}}function LT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g;function m(k){t[10](k)}let E={};t[3]!==void 0&&(E.modifier=t[3]),o=new cT({props:E}),Ve.push(()=>At(o,"modifier",m)),l=new OT({});let v={ctx:t,current:null,token:null,hasCatch:!0,pending:MT,then:$T,catch:PT,error:19,blocks:[,,,]};return Ks(d=t[1],v),{c(){e=I("div"),n=I("i"),r=$(),s=I("input"),i=$(),V(o.$$.fragment),c=$(),V(l.$$.fragment),u=$(),h=I("ol"),v.block.c(),f(n,"class","codicon codicon-search spaced svelte-au4sej"),f(s,"type","text"),f(s,"name","searchbar"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-au4sej"),f(h,"class","svelte-au4sej"),de(h,"open",t[4]),f(e,"class","searchbar svelte-au4sej"),de(e,"open",t[4])},m(k,L){R(k,e,L),y(e,n),y(e,r),y(e,s),dt(s,t[0]),y(e,i),F(o,e,null),y(e,c),F(l,e,null),y(e,u),y(e,h),v.block.m(h,v.anchor=null),v.mount=()=>h,v.anchor=null,p=!0,_||(g=[B(s,"input",t[7]),B(s,"focus",FT),B(s,"blur",t[8]),B(s,"keyup",t[9]),B(e,"blur",t[11])],_=!0)},p(k,[L]){t=k,L&1&&s.value!==t[0]&&dt(s,t[0]);const P={};!a&&L&8&&(a=!0,P.modifier=t[3],St(()=>a=!1)),o.$set(P),v.ctx=t,L&2&&d!==(d=t[1])&&Ks(d,v)||Ph(v,t,L),(!p||L&16)&&de(h,"open",t[4]),(!p||L&16)&&de(e,"open",t[4])},i(k){p||(w(o.$$.fragment,k),w(l.$$.fragment,k),w(v.block),p=!0)},o(k){b(o.$$.fragment,k),b(l.$$.fragment,k);for(let L=0;L<3;L+=1){const P=v.blocks[L];b(P)}p=!1},d(k){k&&C(e),U(o),U(l),v.block.d(),v.token=null,v=null,_=!1,be(g)}}}const FT=t=>{t.target.scrollIntoView({block:"center",behavior:"smooth"})};function UT(t,e,n){let r;Ue(t,Yr,k=>n(12,r=k));const s=nt();let i,o="",a=0,c="+",l=!1,u=[];const h=k=>()=>{s("pick",dT(k,c)),p()};async function d(k){n(4,l=!0),n(5,u=[...r.supertags.filter(L=>L.name.toLowerCase().includes(k.toLowerCase())).map(L=>new yi(L.name,Object.keys(L.tags).length,"supertag")),...await pT(k)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function _(){o=this.value,n(0,o)}const g=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(4,l=!1)},m=k=>{Kc(k)?h(u.length>a?u[a]:new yi(o,0,"ambiguous"))():k.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):k.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)};function E(k){c=k,n(3,c)}const v=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,_,g,m,E,v]}class xT extends Y{constructor(e){super(),Q(this,e,UT,LT,G,{})}}const Pg=JSON.parse,$g=JSON.stringify,Mg=(t,e,n=$g,r=Pg)=>{const s=Lg(t,r,e),i=Xr(s??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},oo=(t,e,n=$g,r=Pg)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Lg(t,r):null,o=Xr(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Lg=(t,e,n)=>{try{const r=e(localStorage.getItem(t));return typeof r=="object"&&typeof n=="object"?{...n,...r}:r}catch{return null}};function VT(){const t=[],{subscribe:e,update:n,set:r}=oo("activeTags",t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:async s=>{n(i=>(i.push(new io("+",s,0,"general")),i))},removeByIndex:s=>n(i=>(i.splice(s,1),i))}}const Ct=VT(),BT=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),Yu=t=>BT[t]??"";function jT(t){let e,n=Zn(t[0].name)+"",r,s,i,o;return{c(){e=I("button"),r=ue(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",s=Qe(Yu(t[0].type))+" svelte-d6seti"),de(e,"active",t[3]),de(e,"icon",t[2]),de(e,"supertag",t[4])},m(a,c){R(a,e,c),y(e,r),i||(o=B(e,"click",function(){wi(t[4]?Ju:t[8])&&(t[4]?Ju:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=Zn(t[0].name)+"")&&_e(r,n),c&1&&s!==(s=Qe(Yu(t[0].type))+" svelte-d6seti")&&f(e,"class",s),c&9&&de(e,"active",t[3]),c&5&&de(e,"icon",t[2]),c&17&&de(e,"supertag",t[4])},i:A,o:A,d(a){a&&C(e),i=!1,o()}}}const Ju=()=>{};function qT(t,e,n){let r,s,i,o,a,c,l;Ue(t,Ct,d=>n(6,c=d)),Ue(t,Yr,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?Ct.removeByIndex(s):Ct.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,r=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,s=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=r.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=s>=0),t.$$.dirty&1&&n(2,a=Bb(u.type))},[u,s,a,o,i,r,c,l,h]}class zT extends Y{constructor(e){super(),Q(this,e,qT,jT,G,{tag:0})}}function HT(t){let e,n,r,s,i;return{c(){e=I("a"),n=I("i"),r=$(),s=ue(t[1]),f(n,"class","codicon codicon-link"),f(e,"href",i=t[0].toString()),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(o,a){R(o,e,a),y(e,n),y(e,r),y(e,s)},p(o,[a]){a&2&&_e(s,o[1]),a&1&&i!==(i=o[0].toString())&&f(e,"href",i)},i:A,o:A,d(o){o&&C(e)}}}function KT(t,e,n){let r,{url:s}=e;return t.$$set=i=>{"url"in i&&n(0,s=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=s.hostname.replace(/^www./,""))},[s,r]}class GT extends Y{constructor(e){super(),Q(this,e,KT,HT,G,{url:0})}}function Xu(t){let e,n;return e=new GT({props:{url:t[0]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.url=r[0]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function WT(t){let e,n,r=t[0]&&Xu(t);return{c(){r&&r.c(),e=at()},m(s,i){r&&r.m(s,i),R(s,e,i),n=!0},p(s,[i]){s[0]?r?(r.p(s,i),i&1&&w(r,1)):(r=Xu(s),r.c(),w(r,1),r.m(e.parentNode,e)):r&&(me(),b(r,1,1,()=>{r=null}),ye())},i(s){n||(w(r),n=!0)},o(s){b(r),n=!1},d(s){r&&r.d(s),s&&C(e)}}}function QT(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(1,s=i.source)},t.$$.update=()=>{t.$$.dirty&2&&n(0,r=Cg(s)?new URL(s):null)},[r,s]}class YT extends Y{constructor(e){super(),Q(this,e,QT,WT,G,{source:1})}}function JT(t){let e,n;const r=t[1].default,s=Ch(r,t,t[0],null);return{c(){e=I("div"),s&&s.c(),f(e,"class","svelte-11wqnx2")},m(i,o){R(i,e,o),s&&s.m(e,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&1)&&Nh(s,r,i,i[0],n?Dh(r,i[0],o,null):Oh(i[0]),null)},i(i){n||(w(s,i),n=!0)},o(i){b(s,i),n=!1},d(i){i&&C(e),s&&s.d(i)}}}function XT(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class zs extends Y{constructor(e){super(),Q(this,e,XT,JT,G,{})}}const Zu=6e4,vi=t=>{if(!ZT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Zu,r=new Date().getTime()/Zu-e;if(r<1)return"just now";if(r<60)return Nn(r,"minute");const s=r/60;if(s<24)return Nn(s,"hour");const i=s/24;if(i<7)return Nn(i,"day");if(i<30.5)return Nn(i/7,"week");if(i<365.25)return Nn(i/30.5,"month");const o=i/365.25;return Nn(o,"year")},ZT=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",Nn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function ek(t){let e,n=vi(t[0])+"",r;return{c(){e=I("span"),r=ue(n),f(e,"class","svelte-1vg7vp7")},m(s,i){R(s,e,i),y(e,r)},p(s,[i]){i&1&&n!==(n=vi(s[0])+"")&&_e(r,n)},i:A,o:A,d(s){s&&C(e)}}}function tk(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class nk extends Y{constructor(e){super(),Q(this,e,tk,ek,G,{value:0})}}function rk(t){let e,n=Mt(t[0])+"",r,s,i;return{c(){e=I("span"),r=ue(n),s=$(),i=I("i"),f(i,"class","codicon codicon-heart svelte-1fycl9d"),f(e,"class","svelte-1fycl9d")},m(o,a){R(o,e,a),y(e,r),y(e,s),y(e,i)},p(o,[a]){a&1&&n!==(n=Mt(o[0])+"")&&_e(r,n)},i:A,o:A,d(o){o&&C(e)}}}function sk(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class ik extends Y{constructor(e){super(),Q(this,e,sk,rk,G,{value:0})}}function ok(t){let e,n,r=t[0].author+"",s,i,o,a=vi(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=I("div"),n=I("span"),s=ue(r),i=$(),o=I("span"),c=ue(a),l=$(),u=I("span"),d=ue(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,_){R(p,e,_),y(e,n),y(n,s),y(e,i),y(e,o),y(o,c),y(e,l),y(e,u),y(u,d)},p(p,[_]){_&1&&r!==(r=p[0].author+"")&&_e(s,r),_&1&&a!==(a=vi(p[0].createdAt)+"")&&_e(c,a),_&1&&h!==(h=p[0].content+"")&&_e(d,h)},i:A,o:A,d(p){p&&C(e)}}}function ak(t,e,n){let{comment:r}=e;return t.$$set=s=>{"comment"in s&&n(0,r=s.comment)},[r]}class ck extends Y{constructor(e){super(),Q(this,e,ak,ok,G,{comment:0})}}function lk(t){let e,n,r;return{c(){e=I("a"),n=I("i"),r=ue(" File"),f(n,"class","codicon codicon-link-external"),f(e,"href",t[0]),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(s,i){R(s,e,i),y(e,n),y(e,r)},p(s,[i]){i&1&&f(e,"href",s[0])},i:A,o:A,d(s){s&&C(e)}}}function uk(t,e,n){let{url:r}=e;return t.$$set=s=>{"url"in s&&n(0,r=s.url)},[r]}class hk extends Y{constructor(e){super(),Q(this,e,uk,lk,G,{url:0})}}function eh(t,e,n){const r=t.slice();return r[8]=e[n],r}function th(t,e,n){const r=t.slice();return r[4]=e[n],r}function dk(t){let e,n;return e=new ik({props:{value:t[0].score}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].score),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function fk(t){let e,n;return e=new nk({props:{value:t[0].change}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].change),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function pk(t){let e,n;return e=new hk({props:{url:t[0].file_url}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.url=r[0].file_url),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function nh(t){let e,n,r,s;return r=new zs({props:{$$slots:{default:[gk]},$$scope:{ctx:t}}}),{c(){e=I("span"),e.textContent="•",n=$(),V(r.$$.fragment),f(e,"class","svelte-9eek1l")},m(i,o){R(i,e,o),R(i,n,o),F(r,i,o),s=!0},p(i,o){const a={};o&2049&&(a.$$scope={dirty:o,ctx:i}),r.$set(a)},i(i){s||(w(r.$$.fragment,i),s=!0)},o(i){b(r.$$.fragment,i),s=!1},d(i){i&&C(e),i&&C(n),U(r,i)}}}function gk(t){let e,n;return e=new YT({props:{source:t[0].source}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.source=r[0].source),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function mk(t){let e,n,r,s={ctx:t,current:null,token:null,hasCatch:!1,pending:Ek,then:_k,catch:vk,value:7,blocks:[,,,]};return Ks(n=Gu(t[0].id),s),{c(){e=at(),s.block.c()},m(i,o){R(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,r=!0},p(i,o){t=i,s.ctx=t,o&1&&n!==(n=Gu(t[0].id))&&Ks(n,s)||Ph(s,t,o)},i(i){r||(w(s.block),r=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];b(a)}r=!1},d(i){i&&C(e),s.block.d(i),s.token=null,s=null}}}function yk(t){let e,n,r=t[0].tags,s=[];for(let o=0;o<r.length;o+=1)s[o]=sh(th(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=I("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","tags svelte-9eek1l")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&1){r=o[0].tags;let c;for(c=0;c<r.length;c+=1){const l=th(o,r,c);s[c]?(s[c].p(l,a),w(s[c],1)):(s[c]=sh(l),s[c].c(),w(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)i(c);ye()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)w(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Qt(s,o)}}}function vk(t){return{c:A,m:A,p:A,i:A,o:A,d:A}}function _k(t){let e,n,r,s;const i=[Ik,wk],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=at()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(r.parentNode,r))},i(c){s||(w(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function wk(t){let e;return{c(){e=I("span"),e.textContent="Comments for this post are not available",f(e,"class","no-comments svelte-9eek1l")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}function Ik(t){let e,n,r=t[7],s=[];for(let o=0;o<r.length;o+=1)s[o]=rh(eh(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=I("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","comments svelte-9eek1l")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&1){r=o[7];let c;for(c=0;c<r.length;c+=1){const l=eh(o,r,c);s[c]?(s[c].p(l,a),w(s[c],1)):(s[c]=rh(l),s[c].c(),w(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)i(c);ye()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)w(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Qt(s,o)}}}function rh(t){let e,n;return e=new ck({props:{comment:t[8]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.comment=r[8]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Ek(t){let e,n;return e=new Gc({}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function sh(t){let e,n;return e=new zT({props:{tag:t[4]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=r[4]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function bk(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m=t[0].tags.length+"",E,v,k,L,P=(t[0].comment_count||"No")+"",D,X,ve,O,q,ee,lt,ne;r=new zs({props:{$$slots:{default:[dk]},$$scope:{ctx:t}}}),a=new zs({props:{$$slots:{default:[fk]},$$scope:{ctx:t}}}),h=new zs({props:{$$slots:{default:[pk]},$$scope:{ctx:t}}});let Z=t[0].source&&nh(t);const te=[yk,mk],ie=[];function ut(oe,Ie){return oe[1]==="tags"?0:1}return O=ut(t),q=ie[O]=te[O](t),{c(){e=I("div"),n=I("div"),V(r.$$.fragment),s=$(),i=I("span"),i.textContent="•",o=$(),V(a.$$.fragment),c=$(),l=I("span"),l.textContent="•",u=$(),V(h.$$.fragment),d=$(),Z&&Z.c(),p=$(),_=I("div"),g=I("button"),E=ue(m),v=ue(" tags"),k=$(),L=I("button"),D=ue(P),X=ue(" comments"),ve=$(),q.c(),f(i,"class","svelte-9eek1l"),f(l,"class","svelte-9eek1l"),f(n,"class","summary svelte-9eek1l"),f(g,"class","codicon codicon-tag svelte-9eek1l"),de(g,"active",t[1]==="tags"),f(L,"class","codicon codicon-comment-discussion svelte-9eek1l"),de(L,"active",t[1]==="comments"),f(_,"class","tabs svelte-9eek1l"),f(e,"class","details svelte-9eek1l")},m(oe,Ie){R(oe,e,Ie),y(e,n),F(r,n,null),y(n,s),y(n,i),y(n,o),F(a,n,null),y(n,c),y(n,l),y(n,u),F(h,n,null),y(n,d),Z&&Z.m(n,null),y(e,p),y(e,_),y(_,g),y(g,E),y(g,v),y(_,k),y(_,L),y(L,D),y(L,X),y(e,ve),ie[O].m(e,null),ee=!0,lt||(ne=[B(g,"click",t[2]),B(L,"click",t[3])],lt=!0)},p(oe,[Ie]){const Is={};Ie&2049&&(Is.$$scope={dirty:Ie,ctx:oe}),r.$set(Is);const ae={};Ie&2049&&(ae.$$scope={dirty:Ie,ctx:oe}),a.$set(ae);const Es={};Ie&2049&&(Es.$$scope={dirty:Ie,ctx:oe}),h.$set(Es),oe[0].source?Z?(Z.p(oe,Ie),Ie&1&&w(Z,1)):(Z=nh(oe),Z.c(),w(Z,1),Z.m(n,null)):Z&&(me(),b(Z,1,1,()=>{Z=null}),ye()),(!ee||Ie&1)&&m!==(m=oe[0].tags.length+"")&&_e(E,m),(!ee||Ie&2)&&de(g,"active",oe[1]==="tags"),(!ee||Ie&1)&&P!==(P=(oe[0].comment_count||"No")+"")&&_e(D,P),(!ee||Ie&2)&&de(L,"active",oe[1]==="comments");let ao=O;O=ut(oe),O===ao?ie[O].p(oe,Ie):(me(),b(ie[ao],1,1,()=>{ie[ao]=null}),ye(),q=ie[O],q?q.p(oe,Ie):(q=ie[O]=te[O](oe),q.c()),w(q,1),q.m(e,null))},i(oe){ee||(w(r.$$.fragment,oe),w(a.$$.fragment,oe),w(h.$$.fragment,oe),w(Z),w(q),ee=!0)},o(oe){b(r.$$.fragment,oe),b(a.$$.fragment,oe),b(h.$$.fragment,oe),b(Z),b(q),ee=!1},d(oe){oe&&C(e),U(r),U(a),U(h),Z&&Z.d(),ie[O].d(),lt=!1,be(ne)}}}function Tk(t,e,n){let{post:r}=e,s="tags";const i=()=>{n(1,s="tags")},o=()=>{n(1,s="comments")};return t.$$set=a=>{"post"in a&&n(0,r=a.post)},[r,s,i,o]}class kk extends Y{constructor(e){super(),Q(this,e,Tk,bk,G,{post:0})}}const _i=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function Sk(t){let e,n,r,s,i,o,a,c;return{c(){e=I("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-82dbjo")},m(l,u){R(l,e,u),t[3](e),a||(c=[B(e,"click",t[4]),B(e,"keyup",Lt(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,be(c)}}}function Ak(t,e,n){let{post:r}=e;const s=nt();let i;Jr(()=>_i.observe(i)),Ei(()=>_i.unobserve(i));function o(l){Ve[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>s("click"),c=()=>s("click");return t.$$set=l=>{"post"in l&&n(0,r=l.post)},[r,i,s,o,a,c]}let Ck=class extends Y{constructor(e){super(),Q(this,e,Ak,Sk,G,{post:0})}};const Rk="/assets/play-f2f6faca.svg",Dk="/assets/load-8440afed.svg",Nk="/assets/pause-6f7851a2.svg";function Ok(t){let e,n;return{c(){e=I("img"),Rt(e.src,n=Rk)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Hg(e,"margin-left","4px")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function Pk(t){let e,n;return{c(){e=I("img"),Rt(e.src,n=Nk)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function $k(t){let e,n;return{c(){e=I("img"),Rt(e.src,n=Dk)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function Mk(t){let e,n,r,s,i;function o(l,u){return l[1]?$k:l[0]?Pk:Ok}let a=o(t),c=a(t);return{c(){e=I("button"),n=I("div"),c.c(),f(n,"class","circle svelte-142dl5p"),f(e,"class",r=Qe(t[3].class)+" svelte-142dl5p"),de(e,"play",t[0]&&!t[1])},m(l,u){R(l,e,u),y(e,n),c.m(n,null),s||(i=B(e,"click",Hs(t[2])),s=!0)},p(l,[u]){a===(a=o(l))&&c?c.p(l,u):(c.d(1),c=a(l),c&&(c.c(),c.m(n,null))),u&8&&r!==(r=Qe(l[3].class)+" svelte-142dl5p")&&f(e,"class",r),u&11&&de(e,"play",l[0]&&!l[1])},i:A,o:A,d(l){l&&C(e),c.d(),s=!1,i()}}}function Lk(t,e,n){let{playing:r}=e,{loading:s}=e;const i=()=>{n(1,s=!0),n(0,r=!r)};return t.$$set=o=>{n(3,e=Vo(Vo({},e),Xc(o))),"playing"in o&&n(0,r=o.playing),"loading"in o&&n(1,s=o.loading)},e=Xc(e),[r,s,i,e]}class Fg extends Y{constructor(e){super(),Q(this,e,Lk,Mk,G,{playing:0,loading:1})}}function Fk(t){let e,n,r,s,i,o,a,c,l,u,h,d,p;function _(E){t[12](E)}function g(E){t[13](E)}let m={class:"center"};return t[2]!==void 0&&(m.playing=t[2]),t[3]!==void 0&&(m.loading=t[3]),a=new Fg({props:m}),Ve.push(()=>At(a,"playing",_)),Ve.push(()=>At(a,"loading",g)),{c(){e=I("div"),n=I("img"),o=$(),V(a.$$.fragment),f(n,"class","media-img svelte-hpmnpx"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",r=t[0].id.toString()),f(n,"width",s=t[0].width),f(n,"height",i=t[0].height),f(n,"tabindex","0"),f(e,"class","container svelte-hpmnpx"),f(e,"style",u=`aspect-ratio: ${t[0].width} / ${t[0].height}`)},m(E,v){R(E,e,v),y(e,n),t[8](n),y(e,o),F(a,e,null),h=!0,d||(p=[B(n,"click",t[9]),B(n,"keyup",Lt(t[10])),B(n,"load",t[11])],d=!0)},p(E,[v]){(!h||v&16)&&f(n,"data-src",E[4]),(!h||v&1&&r!==(r=E[0].id.toString()))&&f(n,"alt",r),(!h||v&1&&s!==(s=E[0].width))&&f(n,"width",s),(!h||v&1&&i!==(i=E[0].height))&&f(n,"height",i);const k={};!c&&v&4&&(c=!0,k.playing=E[2],St(()=>c=!1)),!l&&v&8&&(l=!0,k.loading=E[3],St(()=>l=!1)),a.$set(k),(!h||v&1&&u!==(u=`aspect-ratio: ${E[0].width} / ${E[0].height}`))&&f(e,"style",u)},i(E){h||(w(a.$$.fragment,E),h=!0)},o(E){b(a.$$.fragment,E),h=!1},d(E){E&&C(e),t[8](null),U(a),d=!1,be(p)}}}function Uk(t,e,n){let r,s,i,{post:o}=e;const a=nt();let c,l=!1,u=!1;Jr(()=>_i.observe(c)),Ei(()=>_i.unobserve(c));function h(E){Ve[E?"unshift":"push"](()=>{c=E,n(1,c),n(2,l),n(7,s),n(6,r),n(0,o)})}const d=()=>a("click"),p=()=>a("click"),_=()=>n(3,u=!1);function g(E){l=E,n(2,l)}function m(E){u=E,n(3,u)}return t.$$set=E=>{"post"in E&&n(0,o=E.post)},t.$$.update=()=>{t.$$.dirty&1&&n(6,r=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(7,s=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&196&&n(4,i=l?s:r),t.$$.dirty&198&&c&&n(1,c.src=l?s:r,c)},[o,c,l,u,i,a,r,s,h,d,p,_,g,m]}class xk extends Y{constructor(e){super(),Q(this,e,Uk,Fk,G,{post:0})}}function ih(t){let e,n,r,s=!0,i=!1,o,a,c,l=oh(t[15])+"",u,h,d,p,_,g,m,E,v,k,L;function P(){cancelAnimationFrame(o),e.paused||(o=qg(P),i=!0),t[24].call(e)}function D(O){t[29](O)}function X(O){t[30](O)}let ve={class:"center"};return t[5]!==void 0&&(ve.playing=t[5]),t[6]!==void 0&&(ve.loading=t[6]),g=new Fg({props:ve}),Ve.push(()=>At(g,"playing",D)),Ve.push(()=>At(g,"loading",X)),{c(){e=I("video"),a=$(),c=I("span"),u=ue(l),h=$(),d=I("input"),_=$(),V(g.$$.fragment),f(e,"poster",t[1]),e.loop=t[4],Rt(e.src,n=t[0])||f(e,"src",n),f(e,"preload","metadata"),f(e,"style",r=`aspect-ratio: ${t[2]} / ${t[3]}`),f(e,"class","svelte-1cq87kx"),t[8]===void 0&&Rr(()=>t[25].call(e)),f(c,"class","svelte-1cq87kx"),de(c,"hide",t[12]),f(d,"type","range"),f(d,"min",0),f(d,"max",t[8]),f(d,"step",.0166666),f(d,"style",p=`background-image: linear-gradient(90deg, var(--accent) ${t[13]}%, var(--background-2) ${t[13]}%);}`),f(d,"class","svelte-1cq87kx"),de(d,"hide",t[12])},m(O,q){R(O,e,q),t[22](e),R(O,a,q),R(O,c,q),y(c,u),R(O,h,q),R(O,d,q),dt(d,t[7]),R(O,_,q),F(g,O,q),v=!0,k||(L=[B(e,"play",t[23]),B(e,"pause",t[23]),B(e,"timeupdate",P),B(e,"durationchange",t[25]),B(e,"waiting",t[20]),B(e,"playing",t[21]),B(e,"pause",t[21]),B(e,"ended",t[26]),B(e,"dblclick",Hs(Ta(t[27]))),B(d,"change",t[28]),B(d,"input",t[28]),B(d,"click",Hs(Bk))],k=!0)},p(O,q){(!v||q[0]&2)&&f(e,"poster",O[1]),(!v||q[0]&16)&&(e.loop=O[4]),(!v||q[0]&1&&!Rt(e.src,n=O[0]))&&f(e,"src",n),(!v||q[0]&12&&r!==(r=`aspect-ratio: ${O[2]} / ${O[3]}`))&&f(e,"style",r),q[0]&16384&&s!==(s=O[14])&&e[s?"pause":"play"](),!i&&q[0]&128&&!isNaN(O[7])&&(e.currentTime=O[7]),i=!1,(!v||q[0]&32768)&&l!==(l=oh(O[15])+"")&&_e(u,l),(!v||q[0]&4096)&&de(c,"hide",O[12]),(!v||q[0]&256)&&f(d,"max",O[8]),(!v||q[0]&8192&&p!==(p=`background-image: linear-gradient(90deg, var(--accent) ${O[13]}%, var(--background-2) ${O[13]}%);}`))&&f(d,"style",p),q[0]&128&&dt(d,O[7]),(!v||q[0]&4096)&&de(d,"hide",O[12]);const ee={};!m&&q[0]&32&&(m=!0,ee.playing=O[5],St(()=>m=!1)),!E&&q[0]&64&&(E=!0,ee.loading=O[6],St(()=>E=!1)),g.$set(ee)},i(O){v||(w(g.$$.fragment,O),v=!0)},o(O){b(g.$$.fragment,O),v=!1},d(O){O&&C(e),t[22](null),O&&C(a),O&&C(c),O&&C(h),O&&C(d),O&&C(_),U(g,O),k=!1,be(L)}}}function Vk(t){let e,n,r,s,i,o=t[9]&&ih(t);return{c(){e=I("div"),o&&o.c(),f(e,"tabindex","0"),f(e,"class","player svelte-1cq87kx"),f(e,"style",n=`aspect-ratio: ${t[2]} / ${t[3]}`)},m(a,c){R(a,e,c),o&&o.m(e,null),t[31](e),r=!0,s||(i=[B(e,"click",t[16]),B(e,"keydown",Ta(t[19]))],s=!0)},p(a,c){a[9]?o?(o.p(a,c),c[0]&512&&w(o,1)):(o=ih(a),o.c(),w(o,1),o.m(e,null)):o&&(me(),b(o,1,1,()=>{o=null}),ye()),(!r||c[0]&12&&n!==(n=`aspect-ratio: ${a[2]} / ${a[3]}`))&&f(e,"style",n)},i(a){r||(w(o),r=!0)},o(a){b(o),r=!1},d(a){a&&C(e),o&&o.d(),t[31](null),s=!1,be(i)}}}const oh=t=>{const e=Math.floor(t),n=e%60,r=Math.floor(e/60);return`${ah(r)}:${ah(n)}`},ah=t=>`${t<10?"0":""}${t}`,ch=5,Bk=()=>{};function jk(t,e,n){let r,s,i,o,{src:a}=e,{poster:c}=e,{width:l}=e,{height:u}=e,{loop:h}=e,d,p,_=!1,g=!1,m=0,E=0,v=!1;const k=nt(),L=()=>k("click"),P=()=>{n(7,m=Math.max(0,m-ch))},D=()=>{n(7,m=Math.min(E,m+ch))},X=ae=>{Kc(ae)?L():ae.key===" "?n(5,_=!_):ae.key==="ArrowLeft"?P():ae.key==="ArrowRight"&&D()},ve=new IntersectionObserver(ae=>{for(const Es of ae)Es.isIntersecting?n(9,v=!0):p&&(n(5,_=!1),n(6,g=!1),p.addEventListener("error",()=>{n(9,v=!1)},{once:!0}),n(11,p.src="",p))},{rootMargin:"0px"});Jr(()=>ve.observe(d)),Ei(()=>ve.unobserve(d));const O=()=>{n(6,g=!0)},q=()=>{n(6,g=!1)};function ee(ae){Ve[ae?"unshift":"push"](()=>{p=ae,n(11,p)})}function lt(){s=this.paused,n(14,s),n(5,_),n(9,v)}function ne(){m=this.currentTime,n(7,m)}function Z(){E=this.duration,n(8,E)}const te=()=>{h||(n(6,g=!1),n(5,_=!1))},ie=ae=>{ae.offsetX<ae.target.clientWidth/2?P():D()};function ut(){m=ka(this.value),n(7,m)}function oe(ae){_=ae,n(5,_),n(9,v)}function Ie(ae){g=ae,n(6,g)}function Is(ae){Ve[ae?"unshift":"push"](()=>{d=ae,n(10,d)})}return t.$$set=ae=>{"src"in ae&&n(0,a=ae.src),"poster"in ae&&n(1,c=ae.poster),"width"in ae&&n(2,l=ae.width),"height"in ae&&n(3,u=ae.height),"loop"in ae&&n(4,h=ae.loop)},t.$$.update=()=>{t.$$.dirty[0]&384&&n(15,r=E-m),t.$$.dirty[0]&544&&n(5,_=v&&_),t.$$.dirty[0]&32&&n(14,s=!_),t.$$.dirty[0]&384&&n(13,i=m/E*98+1),t.$$.dirty[0]&96&&n(12,o=_&&!g)},[a,c,l,u,h,_,g,m,E,v,d,p,o,i,s,r,L,P,D,X,O,q,ee,lt,ne,Z,te,ie,ut,oe,Ie,Is]}class qk extends Y{constructor(e){super(),Q(this,e,jk,Vk,G,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function zk(t){let e,n;return e=new xk({props:{post:t[0]}}),e.$on("click",t[2]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Hk(t){let e,n;return e=new qk({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(uh)}}),e.$on("click",t[2]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.src=r[0].file_url),s&1&&(i.poster=r[0].sample_url),s&1&&(i.width=r[0].width),s&1&&(i.height=r[0].height),s&1&&(i.loop=r[0].tags.some(uh)),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Kk(t){let e,n;return e=new Ck({props:{post:t[0]}}),e.$on("click",t[2]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function lh(t){let e,n;return e=new kk({props:{post:t[0]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Gk(t){let e,n,r,s,i;const o=[Kk,Hk,zk],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),r=a[n]=o[n](t);let l=t[1]&&lh(t);return{c(){e=I("div"),r.c(),s=$(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){R(u,e,h),a[n].m(e,null),y(e,s),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(me(),b(a[d],1,1,()=>{a[d]=null}),ye(),r=a[n],r?r.p(u,h):(r=a[n]=o[n](u),r.c()),w(r,1),r.m(e,s)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=lh(u),l.c(),w(l,1),l.m(e,null)):l&&(me(),b(l,1,1,()=>{l=null}),ye())},i(u){i||(w(r),w(l),i=!0)},o(u){b(r),b(l),i=!1},d(u){u&&C(e),a[n].d(),l&&l.d()}}}const uh=t=>t.name=="loop";function Wk(t,e,n){let{post:r}=e,s=!1;const i=()=>{n(1,s=!s)};return t.$$set=o=>{"post"in o&&n(0,r=o.post)},[r,s,i]}class Qk extends Y{constructor(e){super(),Q(this,e,Wk,Gk,G,{post:0})}}function hh(t,e,n){const r=t.slice();return r[1]=e[n],r}function dh(t){let e,n;return e=new Qk({props:{post:t[1]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Yk(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=dh(hh(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=I("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=hh(o,r,c);s[c]?(s[c].p(l,a),w(s[c],1)):(s[c]=dh(l),s[c].c(),w(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)i(c);ye()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)w(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Qt(s,o)}}}function Jk(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class Xk extends Y{constructor(e){super(),Q(this,e,Jk,Yk,G,{posts:0})}}function Zk(t){let e;return{c(){e=I("div")},m(n,r){R(n,e,r),t[1](e)},p:A,i:A,o:A,d(n){n&&C(e),t[1](null)}}}function eS(t,e,n){const r=nt(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&r("visible")},{rootMargin:"1250px"});let i;function o(a){Ve[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class tS extends Y{constructor(e){super(),Q(this,e,eS,Zk,G,{})}}const nS="/assets/shironeko-x-c28cad00.png";function rS(t){let e,n,r,s,i;return{c(){e=I("div"),n=I("img"),s=$(),i=I("span"),i.textContent="You have reached the end",Rt(n.src,r=nS)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){R(o,e,a),y(e,n),y(e,s),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class sS extends Y{constructor(e){super(),Q(this,e,null,rS,G,{})}}const iS="/assets/shironeko-confused-4071d5b2.png";function oS(t){let e,n,r,s,i;return{c(){e=I("div"),n=I("img"),s=$(),i=I("span"),i.textContent="No results found",Rt(n.src,r=iS)||f(n,"src",r),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){R(o,e,a),y(e,n),y(e,s),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class aS extends Y{constructor(e){super(),Q(this,e,null,oS,G,{})}}const fh=()=>({pages:[],nextPage:0,ids:new Set}),cS=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},lS=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},uS=()=>{const{subscribe:t,update:e,set:n}=oo("results",fh(),cS,lS);return{subscribe:t,addPage(r){e(s=>{const i=r.filter(o=>!s.ids.has(o.id));return i.forEach(o=>s.ids.add(o.id)),{pages:[...s.pages,i],nextPage:s.nextPage+1,ids:s.ids}})},reset(){n(fh())}}},wr=uS(),hS=()=>{const{subscribe:t,set:e}=oo("count",null);return{subscribe:t,set:e,reset(){e(0)}}},Qc=hS(),dS={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},fS=()=>{const{subscribe:t,set:e}=Mg("sort",dS);return{subscribe:t,set:e}},Mn=fS();function ph(t,e,n){const r=t.slice();return r[0]=e[n][0],r[3]=e[n][1],r}function gh(t){let e,n=t[3]+"",r,s;return{c(){e=I("option"),r=ue(n),e.__value=s=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){R(i,e,o),y(e,r)},p(i,o){o&2&&n!==(n=i[3]+"")&&_e(r,n),o&2&&s!==(s=i[0])&&(e.__value=s,e.value=e.__value)},d(i){i&&C(e)}}}function pS(t){let e,n,r,s=Object.entries(t[1]),i=[];for(let o=0;o<s.length;o+=1)i[o]=gh(ph(t,s,o));return{c(){e=I("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&Rr(()=>t[2].call(e))},m(o,a){R(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);Zc(e,t[0],!0),n||(r=B(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){s=Object.entries(o[1]);let c;for(c=0;c<s.length;c+=1){const l=ph(o,s,c);i[c]?i[c].p(l,a):(i[c]=gh(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=s.length}a&3&&Zc(e,o[0])},i:A,o:A,d(o){o&&C(e),Qt(i,o),n=!1,r()}}}function gS(t,e,n){let{options:r}=e,{value:s}=e;function i(){s=Kg(this),n(0,s),n(1,r)}return t.$$set=o=>{"options"in o&&n(1,r=o.options),"value"in o&&n(0,s=o.value)},[s,r,i]}class mS extends Y{constructor(e){super(),Q(this,e,gS,pS,G,{options:1,value:0})}}function yS(t){let e,n,r,s;return{c(){e=I("button"),n=ue(t[0]),f(e,"class","svelte-17m158f")},m(i,o){R(i,e,o),y(e,n),r||(s=[B(e,"click",t[1]),B(e,"keyup",Lt(t[1]))],r=!0)},p(i,[o]){o&1&&_e(n,i[0])},i:A,o:A,d(i){i&&C(e),r=!1,be(s)}}}function vS(t,e,n){let r,s,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%r.length),n(2,o=r[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,r=Object.entries(i)),t.$$.dirty&48&&n(0,s=r[a][1])},[s,c,o,i,a,r]}class _S extends Y{constructor(e){super(),Q(this,e,vS,yS,G,{options:3,value:2})}}function mh(t){let e,n;return e=new Sg({props:{$$slots:{default:[wS]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1025&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function wS(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E,v,k,L,P,D,X,ve;function O(te){t[6](te)}let q={options:bS};t[0].sortDirection!==void 0&&(q.value=t[0].sortDirection),o=new Ag({props:q}),Ve.push(()=>At(o,"value",O));function ee(te){t[7](te)}let lt={options:ES};t[0].sortProperty!==void 0&&(lt.value=t[0].sortProperty),l=new mS({props:lt}),Ve.push(()=>At(l,"value",ee));function ne(te){t[8](te)}let Z={options:TS};return t[0].scoreComparator!==void 0&&(Z.value=t[0].scoreComparator),m=new _S({props:Z}),Ve.push(()=>At(m,"value",ne)),P=new Hc({props:{text:"Done",title:"Return to searching."}}),P.$on("click",t[5]),{c(){e=I("div"),n=I("label"),r=I("b"),r.textContent="Sorting",s=$(),i=I("div"),V(o.$$.fragment),c=$(),V(l.$$.fragment),h=$(),d=I("label"),p=I("b"),p.textContent="Score Filtering",_=$(),g=I("div"),V(m.$$.fragment),v=$(),k=I("input"),L=$(),V(P.$$.fragment),f(i,"class","row svelte-1k7zufl"),f(n,"class","svelte-1k7zufl"),f(k,"type","number"),f(k,"min",0),f(k,"max",1e5),f(k,"step",1),f(k,"class","svelte-1k7zufl"),f(g,"class","row svelte-1k7zufl"),f(d,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(te,ie){R(te,e,ie),y(e,n),y(n,r),y(n,s),y(n,i),F(o,i,null),y(i,c),F(l,i,null),y(e,h),y(e,d),y(d,p),y(d,_),y(d,g),F(m,g,null),y(g,v),y(g,k),dt(k,t[0].scoreValue),y(e,L),F(P,e,null),D=!0,X||(ve=[B(k,"input",t[9]),B(k,"keyup",Lt(SS))],X=!0)},p(te,ie){const ut={};!a&&ie&1&&(a=!0,ut.value=te[0].sortDirection,St(()=>a=!1)),o.$set(ut);const oe={};!u&&ie&1&&(u=!0,oe.value=te[0].sortProperty,St(()=>u=!1)),l.$set(oe);const Ie={};!E&&ie&1&&(E=!0,Ie.value=te[0].scoreComparator,St(()=>E=!1)),m.$set(Ie),ie&1&&ka(k.value)!==te[0].scoreValue&&dt(k,te[0].scoreValue)},i(te){D||(w(o.$$.fragment,te),w(l.$$.fragment,te),w(m.$$.fragment,te),w(P.$$.fragment,te),D=!0)},o(te){b(o.$$.fragment,te),b(l.$$.fragment,te),b(m.$$.fragment,te),b(P.$$.fragment,te),D=!1},d(te){te&&C(e),U(o),U(l),U(m),U(P),X=!1,be(ve)}}}function IS(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m=t[1]&&mh(t);return{c(){e=I("button"),n=I("i"),r=$(),s=I("span"),i=ue(t[3]),o=$(),a=I("i"),c=$(),l=I("span"),u=ue(t[2]),h=$(),m&&m.c(),d=at(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(E,v){R(E,e,v),y(e,n),y(e,r),y(e,s),y(s,i),y(e,o),y(e,a),y(e,c),y(e,l),y(l,u),R(E,h,v),m&&m.m(E,v),R(E,d,v),p=!0,_||(g=[B(e,"click",t[4]),B(e,"keypress",Lt(t[4]))],_=!0)},p(E,[v]){(!p||v&8)&&_e(i,E[3]),(!p||v&4)&&_e(u,E[2]),E[1]?m?(m.p(E,v),v&2&&w(m,1)):(m=mh(E),m.c(),w(m,1),m.m(d.parentNode,d)):m&&(me(),b(m,1,1,()=>{m=null}),ye())},i(E){p||(w(m),p=!0)},o(E){b(m),p=!1},d(E){E&&C(e),E&&C(h),m&&m.d(E),E&&C(d),_=!1,be(g)}}}const ES=Object.freeze({id:"Upload",score:"Score",updated:"Change"}),bS=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),TS=Object.freeze({">=":"≥","<=":"≤"}),kS=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),SS=t=>t.target.blur();function AS(t,e,n){let r,s,i;Ue(t,Mn,p=>n(0,i=p));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1);function l(p){t.$$.not_equal(i.sortDirection,p)&&(i.sortDirection=p,Mn.set(i))}function u(p){t.$$.not_equal(i.sortProperty,p)&&(i.sortProperty=p,Mn.set(i))}function h(p){t.$$.not_equal(i.scoreComparator,p)&&(i.scoreComparator=p,Mn.set(i))}function d(){i.scoreValue=ka(this.value),Mn.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,r=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${Mt(i.scoreValue)}`),t.$$.dirty&1&&n(2,s=kS[i.sortProperty][i.sortDirection])},[i,o,s,r,a,c,l,u,h,d]}class CS extends Y{constructor(e){super(),Q(this,e,AS,IS,G,{})}}function RS(t){let e,n,r=Mt(t[0])+"",s,i,o,a,c,l;return c=new CS({}),{c(){e=I("div"),n=I("span"),s=ue(r),i=ue(" results"),a=$(),V(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){R(u,e,h),y(e,n),y(n,s),y(n,i),y(e,a),F(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&r!==(r=Mt(u[0])+"")&&_e(s,r),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(w(c.$$.fragment,u),l=!0)},o(u){b(c.$$.fragment,u),l=!1},d(u){u&&C(e),U(c)}}}function DS(t,e,n){let r;return Ue(t,Qc,s=>n(0,r=s)),[r]}class NS extends Y{constructor(e){super(),Q(this,e,DS,RS,G,{})}}function yh(t,e,n){const r=t.slice();return r[8]=e[n],r}function OS(t){let e,n;return e=new aS({}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function PS(t){let e,n,r,s,i,o,a,c;e=new NS({}),e.$on("configchange",t[6]);let l=t[1].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=vh(yh(t,l,g));const h=g=>b(u[g],1,1,()=>{u[g]=null}),d=[MS,$S],p=[];function _(g,m){return g[3]?0:1}return i=_(t),o=p[i]=d[i](t),{c(){V(e.$$.fragment),n=$(),r=I("ol");for(let g=0;g<u.length;g+=1)u[g].c();s=$(),o.c(),a=at(),f(r,"class","svelte-dsypei")},m(g,m){F(e,g,m),R(g,n,m),R(g,r,m);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(r,null);R(g,s,m),p[i].m(g,m),R(g,a,m),c=!0},p(g,m){if(m&2){l=g[1].pages;let v;for(v=0;v<l.length;v+=1){const k=yh(g,l,v);u[v]?(u[v].p(k,m),w(u[v],1)):(u[v]=vh(k),u[v].c(),w(u[v],1),u[v].m(r,null))}for(me(),v=l.length;v<u.length;v+=1)h(v);ye()}let E=i;i=_(g),i===E?p[i].p(g,m):(me(),b(p[E],1,1,()=>{p[E]=null}),ye(),o=p[i],o?o.p(g,m):(o=p[i]=d[i](g),o.c()),w(o,1),o.m(a.parentNode,a))},i(g){if(!c){w(e.$$.fragment,g);for(let m=0;m<l.length;m+=1)w(u[m]);w(o),c=!0}},o(g){b(e.$$.fragment,g),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)b(u[m]);b(o),c=!1},d(g){U(e,g),g&&C(n),g&&C(r),Qt(u,g),g&&C(s),p[i].d(g),g&&C(a)}}}function vh(t){let e,n;return e=new Xk({props:{posts:t[8]}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.posts=r[8]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function $S(t){let e,n;return e=new sS({}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function MS(t){let e,n;return e=new tS({}),e.$on("visible",t[7]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function LS(t){let e,n,r,s;const i=[PS,OS],o=[];function a(c,l){return c[0]?0:c[2]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),r=at()},m(c,l){~e&&o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(me(),b(o[u],1,1,()=>{o[u]=null}),ye()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(r.parentNode,r)):n=null)},i(c){s||(w(n),s=!0)},o(c){b(n),s=!1},d(c){~e&&o[e].d(c),c&&C(r)}}}function FS(t,e,n){let r,s,i,o,a;Ue(t,Qc,h=>n(0,o=h)),Ue(t,wr,h=>n(1,a=h));const c=nt(),l=()=>c("configchange"),u=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,r=o/Dg),t.$$.dirty&34&&n(3,s=a.pages.length<r),t.$$.dirty&1&&n(2,i=o===0)},[o,a,i,s,c,r,l,u]}class US extends Y{constructor(e){super(),Q(this,e,FS,LS,G,{})}}function xS(t){let e,n,r;return{c(){e=I("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-69q5fy"),de(e,"visible",t[0])},m(s,i){R(s,e,i),n||(r=B(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&de(e,"visible",s[0])},i:A,o:A,d(s){s&&C(e),n=!1,r()}}}function VS(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>0||window.innerHeight+a>=document.body.scrollHeight),r=a};return Jr(()=>{document.addEventListener("scroll",i,{passive:!0})}),Ei(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class BS extends Y{constructor(e){super(),Q(this,e,VS,xS,G,{})}}function jS(t){let e,n,r,s,i,o,a,c,l,u,h;return{c(){e=I("div"),n=I("div"),r=I("i"),i=$(),o=I("div"),a=I("h3"),c=ue(t[2]),l=$(),u=I("span"),h=ue(t[1]),f(r,"class",s=Qe(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){R(d,e,p),y(e,n),y(n,r),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&s!==(s=Qe(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(r,"class",s),p&4&&_e(c,d[2]),p&2&&_e(h,d[1])},i:A,o:A,d(d){d&&C(e)}}}function qS(t,e,n){let{icon:r}=e,{message:s}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,r=o.icon),"message"in o&&n(1,s=o.message),"title"in o&&n(2,i=o.title)},[r,s,i]}class Ug extends Y{constructor(e){super(),Q(this,e,qS,jS,G,{icon:0,message:1,title:2})}}function zS(t){let e;return{c(){e=I("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class HS extends Y{constructor(e){super(),Q(this,e,null,zS,G,{})}}function _h(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function wh(t){let e,n,r,s=t[0],i=[];for(let c=0;c<s.length;c+=1)i[c]=Ih(_h(t,s,c));const o=c=>b(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&Eh(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=$(),a&&a.c(),n=at()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);R(c,e,l),a&&a.m(c,l),R(c,n,l),r=!0},p(c,l){if(l&1){s=c[0];let u;for(u=0;u<s.length;u+=1){const h=_h(c,s,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=Ih(h),i[u].c(),w(i[u],1),i[u].m(e.parentNode,e))}for(me(),u=s.length;u<i.length;u+=1)o(u);ye()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=Eh(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)w(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)b(i[l]);r=!1},d(c){Qt(i,c),c&&C(e),a&&a.d(c),c&&C(n)}}}function Ih(t){let e,n;function r(){return t[3](t[8])}function s(){return t[4](t[6])}return e=new kg({props:{tag:t[6]}}),e.$on("click",r),e.$on("contextmenu",s),{c(){V(e.$$.fragment)},m(i,o){F(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function Eh(t){let e,n,r;return{c(){e=I("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-lsipoc"></i>',f(e,"class","add-supertag svelte-lsipoc"),f(e,"title","Click to create a new supertag")},m(s,i){R(s,e,i),n||(r=B(e,"click",t[5]),n=!0)},p:A,d(s){s&&C(e),n=!1,r()}}}function KS(t){let e,n,r=t[0].length&&wh(t);return{c(){e=I("ul"),r&&r.c(),f(e,"class","svelte-lsipoc")},m(s,i){R(s,e,i),r&&r.m(e,null),n=!0},p(s,[i]){s[0].length?r?(r.p(s,i),i&1&&w(r,1)):(r=wh(s),r.c(),w(r,1),r.m(e,null)):r&&(me(),b(r,1,1,()=>{r=null}),ye())},i(s){n||(w(r),n=!0)},o(s){b(r),n=!1},d(s){s&&C(e),r&&r.d()}}}function GS(t,e,n){let r,s;Ue(t,Ct,l=>n(0,r=l)),Ue(t,wg,l=>n(1,s=l));const i=nt();return[r,s,i,l=>Ct.removeByIndex(l),l=>Ct.addOrReplace(new io(Fb(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class WS extends Y{constructor(e){super(),Q(this,e,GS,KS,G,{})}}const UA=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),QS=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class YS{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=Uo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=Uo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),gT(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=Uo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),mT(this.tagString)}}const bh=()=>new YS,Uo=(t,e,n,r,s,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${s}${r}`,`sort:${e}:${n}`];if(c.length>0){const h=xo(c.map(d=>bg(d)));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${xo(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>QS[p]).map(p=>new so("-",p)),d=xo(h);l.push(d)}const u=l.join("+");return console.log("searching for",u),u},xo=t=>{const e=JS(t);let n=[...Th([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${Th(e["~"]).join(" ~ ")} )`),n.join("+")},JS=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Th=t=>t.map(e=>e.serialize()),XS=()=>{const t=[],{subscribe:e,update:n}=oo("blockedContent",t);return{subscribe:e,toggle(r){n(s=>s.includes(r)?s.filter(i=>i!==r):[...s,r])}}},ZS=XS();function eA(t){let e,n;return e=new US({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function tA(t){let e,n,r,s;const i=[rA,nA],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=at()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(r.parentNode,r))},i(c){s||(w(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function nA(t){let e,n;return e=new Ug({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.message=r[1].message),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function rA(t){let e,n;return e=new Ug({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function kh(t){let e,n;return e=new rT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tags=r[2]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function sA(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E;n=new HS({}),s=new xT({}),s.$on("pick",t[7]),o=new WS({}),o.$on("supertag",t[8]),l=new Hc({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const v=[tA,eA],k=[];function L(D,X){return D[1]!==void 0?0:1}h=L(t),d=k[h]=v[h](t),_=new BS({});let P=t[0]&&kh(t);return{c(){e=I("div"),V(n.$$.fragment),r=$(),V(s.$$.fragment),i=$(),V(o.$$.fragment),a=$(),c=I("div"),V(l.$$.fragment),u=$(),d.c(),p=$(),V(_.$$.fragment),g=$(),P&&P.c(),m=at(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(D,X){R(D,e,X),F(n,e,null),y(e,r),F(s,e,null),y(e,i),F(o,e,null),y(e,a),y(e,c),F(l,c,null),R(D,u,X),k[h].m(D,X),R(D,p,X),F(_,D,X),R(D,g,X),P&&P.m(D,X),R(D,m,X),E=!0},p(D,[X]){let ve=h;h=L(D),h===ve?k[h].p(D,X):(me(),b(k[ve],1,1,()=>{k[ve]=null}),ye(),d=k[h],d?d.p(D,X):(d=k[h]=v[h](D),d.c()),w(d,1),d.m(p.parentNode,p)),D[0]?P?(P.p(D,X),X&1&&w(P,1)):(P=kh(D),P.c(),w(P,1),P.m(m.parentNode,m)):P&&(me(),b(P,1,1,()=>{P=null}),ye())},i(D){E||(w(n.$$.fragment,D),w(s.$$.fragment,D),w(o.$$.fragment,D),w(l.$$.fragment,D),w(d),w(_.$$.fragment,D),w(P),E=!0)},o(D){b(n.$$.fragment,D),b(s.$$.fragment,D),b(o.$$.fragment,D),b(l.$$.fragment,D),b(d),b(_.$$.fragment,D),b(P),E=!1},d(D){D&&C(e),U(n),U(s),U(o),U(l),D&&C(u),k[h].d(D),D&&C(p),U(_,D),D&&C(g),P&&P.d(D),D&&C(m)}}}function iA(t,e,n){let r,s,i,o,a;Ue(t,Mn,v=>n(6,r=v)),Ue(t,ZS,v=>n(12,s=v)),Ue(t,Yr,v=>n(13,i=v)),Ue(t,Ct,v=>n(2,o=v)),Ue(t,wr,v=>n(14,a=v));let c=!1,l,u=!1,h=JSON.stringify(r);const d=async()=>{n(1,l=void 0),u=!0,wr.reset();try{const[v,k]=await bh().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withBlockedContent(s).getPageAndCount();wr.addPage(v),Qc.set(k)}catch(v){n(1,l=v),console.warn(v)}finally{u=!1}},p=async()=>{if(!u){n(1,l=void 0),u=!0;try{const v=await bh().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withBlockedContent(s).getPage();wr.addPage(v)}catch(v){n(1,l=v),console.warn(v)}finally{u=!1}}},_=v=>Ct.addOrReplace(v.detail),g=()=>{n(0,c=!0)},m=v=>{Yr.addSupertag(v.detail),Ct.set([new io("+",v.detail.name,v.detail.tags.length,"supertag")])},E=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const v=JSON.stringify(r);h!==v&&(n(5,h=v),d())}},[c,l,o,d,p,h,r,_,g,m,E]}class oA extends Y{constructor(e){super(),Q(this,e,iA,sA,G,{})}}function aA(t){let e,n;return e=new Gc({}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function cA(t){let e,n,r;var s=t[0];function i(o){return{}}return s&&(e=el(s,i())),{c(){e&&V(e.$$.fragment),n=at()},m(o,a){e&&F(e,o,a),R(o,n,a),r=!0},p(o,a){if(a&1&&s!==(s=o[0])){if(e){me();const c=e;b(c.$$.fragment,1,0,()=>{U(c,1)}),ye()}s?(e=el(s,i()),V(e.$$.fragment),w(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}},i(o){r||(e&&w(e.$$.fragment,o),r=!0)},o(o){e&&b(e.$$.fragment,o),r=!1},d(o){o&&C(n),e&&U(e,o)}}}function lA(t){let e,n,r,s;const i=[cA,aA],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=at()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(r.parentNode,r))},i(c){s||(w(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function uA(t,e,n){let{loadComponent:r}=e,s;return Jr(async()=>{n(0,s=(await r()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,r=i.loadComponent)},[s,r]}class Yc extends Y{constructor(e){super(),Q(this,e,uA,lA,G,{loadComponent:1})}}function hA(t){let e;return{c(){e=I("p"),e.textContent="You got lost..."},m(n,r){R(n,e,r)},i:A,o:A,d(n){n&&C(e)}}}function dA(t){let e,n;return e=new Yc({props:{loadComponent:_A}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function fA(t){let e,n;return e=new Yc({props:{loadComponent:vA}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function pA(t){let e,n;return e=new Yc({props:{loadComponent:yA}}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function gA(t){let e,n;return e=new oA({}),{c(){V(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function mA(t){let e,n,r,s;const i=[gA,pA,fA,dA,hA],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),r=o[n]=i[n](t),{c(){e=I("main"),r.c(),f(e,"class","svelte-628m8p")},m(c,l){R(c,e,l),o[n].m(e,null),s=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),r=o[n],r||(r=o[n]=i[n](c),r.c()),w(r,1),r.m(e,null))},i(c){s||(w(r),s=!0)},o(c){b(r),s=!1},d(c){c&&C(e),o[n].d()}}}const yA=()=>to(()=>import("./Account-00a811b4.js"),["assets/Account-00a811b4.js","assets/Account-2a8151c6.css"]),vA=()=>to(()=>import("./Preferences-280e7acb.js"),["assets/Preferences-280e7acb.js","assets/ParagraphHeading-09ce0034.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),_A=()=>to(()=>import("./Help-424775ec.js"),["assets/Help-424775ec.js","assets/ParagraphHeading-09ce0034.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function wA(t,e,n){let r;return Ue(t,Ln,s=>n(0,r=s)),[r]}class IA extends Y{constructor(e){super(),Q(this,e,wA,mA,G,{})}}function EA(t){let e;return{c(){e=I("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class bA extends Y{constructor(e){super(),Q(this,e,null,EA,G,{})}}const{subscribe:TA,set:kA}=Mg("theme","dark"),Sh={subscribe:TA,set(t){kA(t),SA(t),Yr.setTheme(t)}},SA=t=>{document.documentElement.classList.replace(AA(t),t)},AA=t=>t==="dark"?"light":"dark";function CA(t){let e,n,r,s,i,o;return e=new $b({}),r=new IA({}),i=new bA({}),{c(){V(e.$$.fragment),n=$(),V(r.$$.fragment),s=$(),V(i.$$.fragment)},m(a,c){F(e,a,c),R(a,n,c),F(r,a,c),R(a,s,c),F(i,a,c),o=!0},p:A,i(a){o||(w(e.$$.fragment,a),w(r.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){b(e.$$.fragment,a),b(r.$$.fragment,a),b(i.$$.fragment,a),o=!1},d(a){U(e,a),a&&C(n),U(r,a),a&&C(s),U(i,a)}}}function RA(t){return Sh.subscribe(e=>Sh.set(e))(),[]}class DA extends Y{constructor(e){super(),Q(this,e,RA,CA,G,{})}}function NA(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await to(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r==null||r()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new DA({target:document.getElementById("app")});NA();export{UA as $,F as A,U as B,Hc as C,Sg as D,Ve as E,At as F,St as G,so as H,de as I,Ta as J,Rt as K,wg as L,ju as M,Ue as N,Yr as O,xu as P,Mg as Q,Ch as R,Y as S,xT as T,Nh as U,Oh as V,Dh as W,Sh as X,ZS as Y,OA as Z,mS as _,f as a,kg as a0,io as a1,zT as a2,yi as a3,BS as a4,Wb as a5,R as b,y as c,_e as d,I as e,Zn as f,A as g,C as h,Q as i,PA as j,dt as k,B as l,$ as m,Qe as n,at as o,Lt as p,w as q,me as r,G as s,ue as t,ye as u,b as v,Qt as w,be as x,nt as y,V as z};
