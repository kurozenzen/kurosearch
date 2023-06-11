(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function A(){}function Vo(t,e){for(const n in e)t[n]=e[n];return t}function zg(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Sh(t){return t()}function Jc(){return Object.create(null)}function De(t){t.forEach(Sh)}function vi(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Es;function Ct(t,e){return Es||(Es=document.createElement("a")),Es.href=e,t===Es.href}function Hg(t){return Object.keys(t).length===0}function Kg(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $e(t,e,n){t.$$.on_destroy.push(Kg(e,n))}function Ah(t,e,n,r){if(t){const s=Ch(t,e,n,r);return t[0](s)}}function Ch(t,e,n,r){return t[1]&&r?Vo(n.ctx.slice(),t[1](r(e))):n.ctx}function Rh(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function Dh(t,e,n,r,s,i){if(s){const o=Ch(e,n,r,i);t.p(o,s)}}function Nh(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Xc(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qe(t){return t??""}function BA(t,e,n){return t.set(n),e}const Gg=typeof window<"u";let Wg=Gg?t=>requestAnimationFrame(t):A;function y(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function kn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ue(t){return document.createTextNode(t)}function M(){return ue(" ")}function ot(){return ue("")}function j(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Oh(t){return function(e){return e.preventDefault(),t.call(this,e)}}function zs(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ta(t){return t===""?null:+t}function Qg(t){return Array.from(t.childNodes)}function ve(t,e){e=""+e,t.data!==e&&(t.data=e)}function ht(t,e){t.value=e??""}function Yg(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Zc(t,e,n){for(let r=0;r<t.options.length;r+=1){const s=t.options[r];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Jg(t){const e=t.querySelector(":checked");return e&&e.__value}function de(t,e,n){t.classList[n?"add":"remove"](e)}function Xg(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function el(t,e){return new t(e)}let Rr;function It(t){Rr=t}function wi(){if(!Rr)throw new Error("Function called outside component initialization");return Rr}function Zn(t){wi().$$.on_mount.push(t)}function Ii(t){wi().$$.on_destroy.push(t)}function Mt(){const t=wi();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Xg(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function er(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Nn=[],Me=[];let Fn=[];const Bo=[],Zg=Promise.resolve();let jo=!1;function em(){jo||(jo=!0,Zg.then(ka))}function Dr(t){Fn.push(t)}function kt(t){Bo.push(t)}const co=new Set;let Sn=0;function ka(){if(Sn!==0)return;const t=Rr;do{try{for(;Sn<Nn.length;){const e=Nn[Sn];Sn++,It(e),tm(e.$$)}}catch(e){throw Nn.length=0,Sn=0,e}for(It(null),Nn.length=0,Sn=0;Me.length;)Me.pop()();for(let e=0;e<Fn.length;e+=1){const n=Fn[e];co.has(n)||(co.add(n),n())}Fn.length=0}while(Nn.length);for(;Bo.length;)Bo.pop()();jo=!1,co.clear(),It(t)}function tm(t){if(t.fragment!==null){t.update(),De(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Dr)}}function nm(t){const e=[],n=[];Fn.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Fn=e}const Ps=new Set;let en;function me(){en={r:0,c:[],p:en}}function ye(){en.r||De(en.c),en=en.p}function v(t,e){t&&t.i&&(Ps.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if(Ps.has(t))return;Ps.add(t),en.c.push(()=>{Ps.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Hs(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(me(),b(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ye())}):e.block.d(1),l.c(),v(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&ka()}if(zg(t)){const s=wi();if(t.then(i=>{It(s),r(e.then,1,e.value,i),It(null)},i=>{if(It(s),r(e.catch,2,e.error,i),It(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ph(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function St(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function x(t){t&&t.c()}function F(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||Dr(()=>{const o=t.$$.on_mount.map(Sh).filter(vi);t.$$.on_destroy?t.$$.on_destroy.push(...o):De(o),t.$$.on_mount=[]}),i.forEach(Dr)}function U(t,e){const n=t.$$;n.fragment!==null&&(nm(n.after_update),De(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rm(t,e){t.$$.dirty[0]===-1&&(Nn.push(t),em(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,s,i,o,a=[-1]){const c=Rr;It(t);const l=t.$$={fragment:null,ctx:[],props:i,update:A,not_equal:s,bound:Jc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Jc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const _=p.length?p[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=_)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](_),u&&rm(t,h)),d}):[],l.update(),u=!0,De(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=Qg(e.target);l.fragment&&l.fragment.l(h),h.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&v(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),ka()}It(c)}class Q{$destroy(){U(this,1),this.$destroy=A}$on(e,n){if(!vi(n))return A;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Hg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const An=[];function Xr(t,e=A){let n;const r=new Set;function s(a){if(K(t,a)&&(t=a,n)){const c=!An.length;for(const l of r)l[1](),An.push(l,t);if(c){for(let l=0;l<An.length;l+=2)An[l][0](An[l+1]);An.length=0}}}function i(a){s(a(t))}function o(a,c=A){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||A),a(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const sm=Object.freeze(["search","account","settings","help"]),im=t=>sm.includes(t),om=()=>{const{subscribe:t,set:e}=Xr("search");return{subscribe:t,navigateTo(n){if(!im(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Mn=om();function am(t){let e,n,r,s,i,o;return{c(){e=kn("svg"),n=kn("g"),r=kn("path"),s=kn("defs"),i=kn("clipPath"),o=kn("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){R(a,e,c),y(e,n),y(n,r),y(e,s),y(s,i),y(i,o)},p:A,i:A,o:A,d(a){a&&C(e)}}}class cm extends Q{constructor(e){super(),W(this,e,null,am,K,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $h=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($h(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new um;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class um extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hm=function(t){const e=$h(t);return Mh.encodeByteArray(e,!0)},Ks=function(t){return hm(t).replace(/\./g,"")},Lh=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fm=()=>dm().__FIREBASE_DEFAULTS__,pm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lh(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return fm()||pm()||gm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fh=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mm=t=>{const e=Fh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uh=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},xh=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _m(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ks(JSON.stringify(n)),Ks(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Vh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Im(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bh(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Em(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bm,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Tm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,r)}}function Tm(t,e){return t.replace(km,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const km=/\{\$([^}]+)}/g;function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tl(i)&&tl(o)){if(!Nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Am(t,e){const n=new Cm(t,e);return n.subscribe.bind(n)}class Cm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lo),s.error===void 0&&(s.error=lo),s.complete===void 0&&(s.complete=lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=1e3,Nm=2,Om=4*60*60*1e3,Pm=.5;function nl(t,e=Dm,n=Nm){const r=e*Math.pow(n,t),s=Math.round(Pm*r*(Math.random()-.5)*2);return Math.min(Om,r+s)}/**
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
 */function Ae(t){return t&&t._delegate?t._delegate:t}class rt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ym;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lm(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mm(t){return t===Xt?void 0:t}function Lm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $m(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Um={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},xm=ce.INFO,Vm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Bm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ei{constructor(e){this.name=e,this._logLevel=xm,this._logHandler=Bm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Um[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const jm=(t,e)=>e.some(n=>t instanceof n);let rl,sl;function qm(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zm(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,qo=new WeakMap,zh=new WeakMap,uo=new WeakMap,Aa=new WeakMap;function Hm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qh.set(n,t)}).catch(()=>{}),Aa.set(e,t),e}function Km(t){if(qo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qo.set(t,e)}let zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gm(t){zo=t(zo)}function Wm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ho(this),e,...n);return zh.set(r,e.sort?e.sort():[e]),Bt(r)}:zm().includes(t)?function(...e){return t.apply(ho(this),e),Bt(qh.get(this))}:function(...e){return Bt(t.apply(ho(this),e))}}function Qm(t){return typeof t=="function"?Wm(t):(t instanceof IDBTransaction&&Km(t),jm(t,qm())?new Proxy(t,zo):t)}function Bt(t){if(t instanceof IDBRequest)return Hm(t);if(uo.has(t))return uo.get(t);const e=Qm(t);return e!==t&&(uo.set(t,e),Aa.set(e,t)),e}const ho=t=>Aa.get(t);function Ym(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jm=["get","getKey","getAll","getAllKeys","count"],Xm=["put","add","delete","clear"],fo=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fo.get(e))return fo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fo.set(e,i),i}Gm(t=>({...t,get:(e,n,r)=>il(e,n)||t.get(e,n,r),has:(e,n)=>!!il(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ey(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ey(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ho="@firebase/app",ol="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Ei("@firebase/app"),ty="@firebase/app-compat",ny="@firebase/analytics-compat",ry="@firebase/analytics",sy="@firebase/app-check-compat",iy="@firebase/app-check",oy="@firebase/auth",ay="@firebase/auth-compat",cy="@firebase/database",ly="@firebase/database-compat",uy="@firebase/functions",hy="@firebase/functions-compat",dy="@firebase/installations",fy="@firebase/installations-compat",py="@firebase/messaging",gy="@firebase/messaging-compat",my="@firebase/performance",yy="@firebase/performance-compat",_y="@firebase/remote-config",vy="@firebase/remote-config-compat",wy="@firebase/storage",Iy="@firebase/storage-compat",Ey="@firebase/firestore",by="@firebase/firestore-compat",Ty="firebase",ky="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="[DEFAULT]",Sy={[Ho]:"fire-core",[ty]:"fire-core-compat",[ry]:"fire-analytics",[ny]:"fire-analytics-compat",[iy]:"fire-app-check",[sy]:"fire-app-check-compat",[oy]:"fire-auth",[ay]:"fire-auth-compat",[cy]:"fire-rtdb",[ly]:"fire-rtdb-compat",[uy]:"fire-fn",[hy]:"fire-fn-compat",[dy]:"fire-iid",[fy]:"fire-iid-compat",[py]:"fire-fcm",[gy]:"fire-fcm-compat",[my]:"fire-perf",[yy]:"fire-perf-compat",[_y]:"fire-rc",[vy]:"fire-rc-compat",[wy]:"fire-gcs",[Iy]:"fire-gcs-compat",[Ey]:"fire-fst",[by]:"fire-fst-compat","fire-js":"fire-js",[Ty]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new Map,Go=new Map;function Ay(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(Go.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Go.set(e,t);for(const n of Gs.values())Ay(n,t);return!0}function wn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new vn("app","Firebase",Cy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=ky;function Hh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ko,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(n||(n=Uh()),!n)throw jt.create("no-options");const i=Gs.get(s);if(i){if(Nr(n,i.options)&&Nr(r,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const o=new Fm(s);for(const c of Go.values())o.addComponent(c);const a=new Ry(n,r,o);return Gs.set(s,a),a}function Ca(t=Ko){const e=Gs.get(t);if(!e&&t===Ko&&Uh())return Hh();if(!e)throw jt.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=Sy[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}_t(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dy="firebase-heartbeat-database",Ny=1,Or="firebase-heartbeat-store";let po=null;function Kh(){return po||(po=Ym(Dy,Ny,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}}).catch(t=>{throw jt.create("idb-open",{originalErrorMessage:t.message})})),po}async function Oy(t){try{return await(await Kh()).transaction(Or).objectStore(Or).get(Gh(t))}catch(e){if(e instanceof at)hn.warn(e.message);else{const n=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function al(t,e){try{const r=(await Kh()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Gh(t)),await r.done}catch(n){if(n instanceof at)hn.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function Gh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Py=1024,$y=30*24*60*60*1e3;class My{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$y}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cl(),{heartbeatsToSend:n,unsentEntries:r}=Ly(this._heartbeatsCache.heartbeats),s=Ks(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cl(){return new Date().toISOString().substring(0,10)}function Ly(t,e=Py){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ll(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ll(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bh()?jh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Oy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ll(t){return Ks(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){_t(new rt("platform-logger",e=>new Zm(e),"PRIVATE")),_t(new rt("heartbeat",e=>new My(e),"PRIVATE")),et(Ho,ol,t),et(Ho,ol,"esm2017"),et("fire-js","")}Uy("");function Ra(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xy=Wh,Qh=new vn("auth","Firebase",Wh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Ei("@firebase/auth");function Vy(t,...e){Ws.logLevel<=ce.WARN&&Ws.warn(`Auth (${tr}): ${t}`,...e)}function $s(t,...e){Ws.logLevel<=ce.ERROR&&Ws.error(`Auth (${tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,...e){throw Da(t,...e)}function pt(t,...e){return Da(t,...e)}function Yh(t,e,n){const r=Object.assign(Object.assign({},xy()),{[e]:n});return new vn("auth","Firebase",r).create(e,{appName:t.name})}function By(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(t,"argument-error"),Yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Da(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qh.create(t,...e)}function z(t,e,...n){if(!t)throw Da(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $s(e),new Error(e)}function Rt(t,e){t||Et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jy(){return ul()==="http:"||ul()==="https:"}function ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jy()||Vh()||"connection"in navigator)?navigator.onLine:!0}function zy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=vm()||wm()}get(){return qy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new es(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,s={}){return Xh(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Jh.fetch()(Zh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hy),e);try{const s=new Gy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bs(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yh(t,u,l);tt(t,u)}}catch(s){if(s instanceof at)throw s;tt(t,"network-request-failed",{message:String(s)})}}async function ts(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zh(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Na(t.config,s):`${t.config.apiScheme}://${s}`}class Gy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),Ky.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function Qy(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yy(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),s=Oa(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Er(go(s.auth_time)),issuedAtTime:Er(go(s.iat)),expirationTime:Er(go(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function go(t){return Number(t)*1e3}function Oa(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $s("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lh(n);return s?JSON.parse(s):($s("Failed to decode base64 JWT payload"),null)}catch(s){return $s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jy(t){const e=Oa(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&Xy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pr(t,Qy(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?n_(i.providerUserInfo):[],a=t_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function e_(t){const e=Ae(t);await Qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function n_(t){return t.map(e=>{var{providerId:n}=e,r=Ra(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(t,e){const n=await Xh(t,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zh(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await r_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $r;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ra(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yy(this,e)}reload(){return e_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pr(this,Wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:D,isAnonymous:P,providerData:N,stsTokenManager:X}=n;z(k&&X,e,"internal-error");const _e=$r.fromJSON(this.name,X);z(typeof k=="string",e,"internal-error"),Lt(h,e.name),Lt(d,e.name),z(typeof D=="boolean",e,"internal-error"),z(typeof P=="boolean",e,"internal-error"),Lt(p,e.name),Lt(_,e.name),Lt(g,e.name),Lt(m,e.name),Lt(E,e.name),Lt(I,e.name);const $=new an({uid:k,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:P,photoURL:_,phoneNumber:p,tenantId:g,stsTokenManager:_e,createdAt:E,lastLoginAt:I});return N&&Array.isArray(N)&&($.providerData=N.map(q=>Object.assign({},q))),m&&($._redirectEventId=m),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qs(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ms(t,e,n){return`firebase:${t}:${e}:${n}`}class Un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ms(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ms("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Un(bt(dl),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||bt(dl);const o=Ms(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=an._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Un(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Un(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(Pa(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nd(t=ze()){return/firefox\//i.test(t)}function Pa(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=ze()){return/crios\//i.test(t)}function sd(t=ze()){return/iemobile/i.test(t)}function id(t=ze()){return/android/i.test(t)}function od(t=ze()){return/blackberry/i.test(t)}function ad(t=ze()){return/webos/i.test(t)}function bi(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function s_(t=ze()){var e;return bi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i_(){return Im()&&document.documentMode===10}function cd(t=ze()){return bi(t)||id(t)||ad(t)||od(t)||/windows phone/i.test(t)||sd(t)}function o_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e=[]){let n;switch(t){case"Browser":n=fl(ze());break;case"Worker":n=`${fl(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}async function ud(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}function pl(t){return t!==void 0&&t.enterprise!==void 0}class hd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a_().appendChild(r)})}function c_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const l_="https://www.google.com/recaptcha/enterprise.js?render=",u_="recaptcha-enterprise",h_="NO_RECAPTCHA";class fd{constructor(e){this.type=u_,this.auth=In(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ud(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new hd(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;pl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(h_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&pl(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dd(l_+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ys(t,e,n,r=!1){const s=new fd(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class d_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gl(this),this.idTokenSubscription=new gl(this),this.beforeStateQueue=new d_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}async initializeRecaptchaConfig(){const e=await ud(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new hd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new fd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function In(t){return Ae(t)}class gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Am(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e){const n=wn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nr(i,e??{}))return s;tt(s,"already-initialized")}return n.initialize({options:e})}function g_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m_(t,e,n){const r=In(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=pd(e),{host:o,port:a}=y_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||__()}function pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function y_(t){const e=pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ml(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ml(o)}}}function ml(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function __(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function v_(t,e){return rr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e){return ts(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e){return ts(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function I_(t,e){return ts(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends $a{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Mr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ys(e,r,"signInWithPassword");return mo(e,s)}else return mo(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ys(e,r,"signInWithPassword");return mo(e,i)}else return Promise.reject(s)});case"emailLink":return w_(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return v_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return I_(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e){return ts(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="http://localhost";class dn extends $a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ra(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xn(e,n)}buildRequest(){const e={requestUri:E_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T_(t){const e=pr(gr(t)).link,n=e?pr(gr(e)).deep_link_id:null,r=pr(gr(t)).deep_link_id;return(r?pr(gr(r)).link:null)||r||n||e||t}class Ma{constructor(e){var n,r,s,i,o,a;const c=pr(gr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=b_((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=T_(e);try{return new Ma(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.providerId=sr.PROVIDER_ID}static credential(e,n){return Mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ma.parseLink(n);return z(r,"argument-error"),Mr._fromEmailAndCode(e,r.code,r.tenantId)}}sr.PROVIDER_ID="password";sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends La{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ns{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ns{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ns{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e){return ts(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=yl(r);return new fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yl(r);return new fn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends at{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Js.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Js(e,n,r,s)}}function gd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Js._fromErrorAndOperation(t,i,e,r):i})}async function k_(t,e,n=!1){const r=await Pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Pr(t,gd(r,s,e,t),n);z(i.idToken,r,"internal-error");const o=Oa(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),fn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(t,e,n=!1){const r="signIn",s=await gd(t,r,e),i=await fn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function A_(t,e){return md(In(t),e)}async function C_(t,e,n){var r;const s=In(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ys(s,i,"signUpPassword");o=yo(s,l)}else o=yo(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ys(s,i,"signUpPassword");return yo(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await fn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function R_(t,e,n){return A_(Ae(t),sr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t,e){return Ae(t).setPersistence(e)}function N_(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function O_(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function yd(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function P_(t){return Ae(t).signOut()}const Xs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xs,"1"),this.storage.removeItem(Xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(){const t=ze();return Pa(t)||bi(t)}const M_=1e3,L_=10;class vd extends _d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$_()&&o_(),this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);i_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,L_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},M_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const wd=vd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends _d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Id.type="SESSION";const Ed=Id;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ti(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await F_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ti.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Fa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function x_(t){gt().location.href=t}/**
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
 */function bd(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function j_(){return bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firebaseLocalStorageDb",q_=1,Zs="firebaseLocalStorage",kd="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ki(t,e){return t.transaction([Zs],e?"readwrite":"readonly").objectStore(Zs)}function z_(){const t=indexedDB.deleteDatabase(Td);return new rs(t).toPromise()}function Qo(){const t=indexedDB.open(Td,q_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zs,{keyPath:kd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zs)?e(r):(r.close(),await z_(),e(await Qo()))})})}async function _l(t,e,n){const r=ki(t,!0).put({[kd]:e,value:n});return new rs(r).toPromise()}async function H_(t,e){const n=ki(t,!1).get(e),r=await new rs(n).toPromise();return r===void 0?null:r.value}function vl(t,e){const n=ki(t,!0).delete(e);return new rs(n).toPromise()}const K_=800,G_=3;class Sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>G_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ti._getInstance(j_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new U_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qo();return await _l(e,Xs,"1"),await vl(e,Xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_l(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>H_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ki(s,!1).getAll();return new rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sd.type="LOCAL";const W_=Sd;new es(3e4,6e4);/**
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
 */function Ad(t,e){return e?bt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends $a{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q_(t){return md(t.auth,new Ua(t),t.bypassAuthState)}function Y_(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),S_(n,new Ua(t),t.bypassAuthState)}async function J_(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),k_(n,new Ua(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q_;case"linkViaPopup":case"linkViaRedirect":return J_;case"reauthViaPopup":case"reauthViaRedirect":return Y_;default:tt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new es(2e3,1e4);async function Z_(t,e,n){const r=In(t);By(t,e,La);const s=Ad(r,n);return new tn(r,"signInViaPopup",e,s).executeNotNull()}class tn extends Cd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X_.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="pendingRedirect",Ls=new Map;class tv extends Cd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ls.get(this.auth._key());if(!e){try{const r=await nv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ls.set(this.auth._key(),e)}return this.bypassAuthState||Ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nv(t,e){const n=iv(e),r=sv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rv(t,e){Ls.set(t._key(),e)}function sv(t){return bt(t._redirectPersistence)}function iv(t){return Ms(ev,t.config.apiKey,t.name)}async function ov(t,e,n=!1){const r=In(t),s=Ad(r,e),o=await new tv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=10*60*1e3;class cv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=av&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dv=/^https?/;async function fv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uv(t);for(const n of e)try{if(pv(n))return}catch{}tt(t,"unauthorized-domain")}function pv(t){const e=Wo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dv.test(n))return!1;if(hv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gv=new es(3e4,6e4);function Il(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mv(t){return new Promise((e,n)=>{var r,s,i;function o(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),n(pt(t,"network-request-failed"))},timeout:gv.get()})}if(!((s=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gt().gapi)===null||i===void 0)&&i.load)o();else{const a=c_("iframefcb");return gt()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},dd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fs=null,e})}let Fs=null;function yv(t){return Fs=Fs||mv(t),Fs}/**
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
 */const _v=new es(5e3,15e3),vv="__/auth/iframe",wv="emulator/auth/iframe",Iv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Na(e,wv):`https://${t.config.authDomain}/${vv}`,r={apiKey:e.apiKey,appName:t.name,v:tr},s=Ev.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zr(r).slice(1)}`}async function Tv(t){const e=await yv(t),n=gt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:bv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=gt().setTimeout(()=>{i(o)},_v.get());function c(){gt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const kv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sv=500,Av=600,Cv="_blank",Rv="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dv(t,e,n,r=Sv,s=Av){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ze().toLowerCase();n&&(a=rd(l)?Cv:n),nd(l)&&(e=e||Rv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(s_(l)&&a!=="_self")return Nv(e||"",a),new El(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new El(h)}function Nv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ov="__/auth/handler",Pv="emulator/auth/handler",$v=encodeURIComponent("fac");async function bl(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:tr,eventId:s};if(e instanceof La){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ns){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$v}=${encodeURIComponent(c)}`:"";return`${Mv(t)}?${Zr(a).slice(1)}${l}`}function Mv({config:t}){return t.emulator?Na(t,Pv):`https://${t.authDomain}/${Ov}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="webStorageSupport";class Lv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ed,this._completeRedirectFn=ov,this._overrideRedirectResult=rv}async _openPopup(e,n,r,s){var i;Rt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bl(e,n,r,Wo(),s);return Dv(e,o,Fa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bl(e,n,r,Wo(),s);return x_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tv(e),r=new cv(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_o,{type:_o},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_o];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cd()||Pa()||bi()}}const Fv=Lv;var Tl="@firebase/auth",kl="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vv(t){_t(new rt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ld(t)},l=new f_(r,s,i,c);return g_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_t(new rt("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(r=>new Uv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Tl,kl,xv(t)),et(Tl,kl,"esm2017")}/**
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
 */const Bv=5*60,jv=xh("authIdTokenMaxAge")||Bv;let Sl=null;const qv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jv)return;const s=n==null?void 0:n.token;Sl!==s&&(Sl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zv(t=Ca()){const e=wn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p_(t,{popupRedirectResolver:Fv,persistence:[W_,wd,Ed]}),r=xh("authTokenSyncURL");if(r){const i=qv(r);O_(n,i,()=>i(n.currentUser)),N_(n,o=>i(o))}const s=Fh("auth");return s&&m_(n,`http://${s}`),n}Vv("Browser");const Hv=(t,e)=>e.some(n=>t instanceof n);let Al,Cl;function Kv(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gv(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,Yo=new WeakMap,Nd=new WeakMap,vo=new WeakMap,xa=new WeakMap;function Wv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dd.set(n,t)}).catch(()=>{}),xa.set(e,t),e}function Qv(t){if(Yo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yo.set(t,e)}let Jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yv(t){Jo=t(Jo)}function Jv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wo(this),e,...n);return Nd.set(r,e.sort?e.sort():[e]),qt(r)}:Gv().includes(t)?function(...e){return t.apply(wo(this),e),qt(Dd.get(this))}:function(...e){return qt(t.apply(wo(this),e))}}function Xv(t){return typeof t=="function"?Jv(t):(t instanceof IDBTransaction&&Qv(t),Hv(t,Kv())?new Proxy(t,Jo):t)}function qt(t){if(t instanceof IDBRequest)return Wv(t);if(vo.has(t))return vo.get(t);const e=Xv(t);return e!==t&&(vo.set(t,e),xa.set(e,t)),e}const wo=t=>xa.get(t);function Zv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=qt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const e0=["get","getKey","getAll","getAllKeys","count"],t0=["put","add","delete","clear"],Io=new Map;function Rl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Io.get(e))return Io.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=t0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||e0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Io.set(e,i),i}Yv(t=>({...t,get:(e,n,r)=>Rl(e,n)||t.get(e,n,r),has:(e,n)=>!!Rl(e,n)||t.has(e,n)}));const Od="@firebase/installations",Va="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=1e4,$d=`w:${Va}`,Md="FIS_v2",n0="https://firebaseinstallations.googleapis.com/v1",r0=60*60*1e3,s0="installations",i0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pn=new vn(s0,i0,o0);function Ld(t){return t instanceof at&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd({projectId:t}){return`${n0}/projects/${t}/installations`}function Ud(t){return{token:t.token,requestStatus:2,expiresIn:c0(t.expiresIn),creationTime:Date.now()}}async function xd(t,e){const r=(await e.json()).error;return pn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function a0(t,{refreshToken:e}){const n=Vd(t);return n.append("Authorization",l0(e)),n}async function Bd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function c0(t){return Number(t.replace("s","000"))}function l0(t){return`${Md} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Fd(t),s=Vd(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Md,appId:t.appId,sdkVersion:$d},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ud(l.authToken)}}else throw await xd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function h0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=/^[cdef][\w-]{21}$/,Xo="";function f0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=p0(t);return d0.test(n)?n:Xo}catch{return Xo}}function p0(t){return h0(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map;function zd(t,e){const n=Si(t);Hd(n,e),g0(n,e)}function Hd(t,e){const n=qd.get(t);if(n)for(const r of n)r(e)}function g0(t,e){const n=m0();n&&n.postMessage({key:t,fid:e}),y0()}let nn=null;function m0(){return!nn&&"BroadcastChannel"in self&&(nn=new BroadcastChannel("[Firebase] FID Change"),nn.onmessage=t=>{Hd(t.data.key,t.data.fid)}),nn}function y0(){qd.size===0&&nn&&(nn.close(),nn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebase-installations-database",v0=1,gn="firebase-installations-store";let Eo=null;function Ba(){return Eo||(Eo=Zv(_0,v0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gn)}}})),Eo}async function ei(t,e){const n=Si(t),s=(await Ba()).transaction(gn,"readwrite"),i=s.objectStore(gn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zd(t,e.fid),e}async function Kd(t){const e=Si(t),r=(await Ba()).transaction(gn,"readwrite");await r.objectStore(gn).delete(e),await r.done}async function Ai(t,e){const n=Si(t),s=(await Ba()).transaction(gn,"readwrite"),i=s.objectStore(gn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&zd(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){let e;const n=await Ai(t.appConfig,r=>{const s=w0(r),i=I0(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Xo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function w0(t){const e=t||{fid:f0(),registrationStatus:0};return Gd(e)}function I0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=E0(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b0(t)}:{installationEntry:e}}async function E0(t,e){try{const n=await u0(t,e);return ei(t.appConfig,n)}catch(n){throw Ld(n)&&n.customData.serverCode===409?await Kd(t.appConfig):await ei(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function b0(t){let e=await Dl(t.appConfig);for(;e.registrationStatus===1;)await jd(100),e=await Dl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ja(t);return r||n}return e}function Dl(t){return Ai(t,e=>{if(!e)throw pn.create("installation-not-found");return Gd(e)})}function Gd(t){return T0(t)?{fid:t.fid,registrationStatus:0}:t}function T0(t){return t.registrationStatus===1&&t.registrationTime+Pd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0({appConfig:t,heartbeatServiceProvider:e},n){const r=S0(t,n),s=a0(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:$d,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Ud(l)}else throw await xd("Generate Auth Token",c)}function S0(t,{fid:e}){return`${Fd(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t,e=!1){let n;const r=await Ai(t.appConfig,i=>{if(!Wd(i))throw pn.create("not-registered");const o=i.authToken;if(!e&&R0(o))return i;if(o.requestStatus===1)return n=A0(t,e),i;{if(!navigator.onLine)throw pn.create("app-offline");const a=N0(i);return n=C0(t,a),a}});return n?await n:r.authToken}async function A0(t,e){let n=await Nl(t.appConfig);for(;n.authToken.requestStatus===1;)await jd(100),n=await Nl(t.appConfig);const r=n.authToken;return r.requestStatus===0?qa(t,e):r}function Nl(t){return Ai(t,e=>{if(!Wd(e))throw pn.create("not-registered");const n=e.authToken;return O0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function C0(t,e){try{const n=await k0(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ei(t.appConfig,r),n}catch(n){if(Ld(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kd(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ei(t.appConfig,r)}throw n}}function Wd(t){return t!==void 0&&t.registrationStatus===2}function R0(t){return t.requestStatus===2&&!D0(t)}function D0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+r0}function N0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function O0(t){return t.requestStatus===1&&t.requestTime+Pd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t){const e=t,{installationEntry:n,registrationPromise:r}=await ja(e);return r?r.catch(console.error):qa(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e=!1){const n=t;return await M0(n),(await qa(n,e)).token}async function M0(t){const{registrationPromise:e}=await ja(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){if(!t||!t.options)throw bo("App Configuration");if(!t.name)throw bo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bo(t){return pn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="installations",F0="installations-internal",U0=t=>{const e=t.getProvider("app").getImmediate(),n=L0(e),r=wn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},x0=t=>{const e=t.getProvider("app").getImmediate(),n=wn(e,Qd).getImmediate();return{getId:()=>P0(n),getToken:s=>$0(n,s)}};function V0(){_t(new rt(Qd,U0,"PUBLIC")),_t(new rt(F0,x0,"PRIVATE"))}V0();et(Od,Va);et(Od,Va,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="analytics",B0="firebase_id",j0="origin",q0=60*1e3,z0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",za="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Ei("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new vn("analytics","Analytics",H0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){if(!t.startsWith(za)){const e=Ye.create("invalid-gtag-resource",{gtagURL:t});return Ge.warn(e.message),""}return t}function Yd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function G0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function W0(t,e){const n=G0("firebase-js-sdk-policy",{createScriptURL:K0}),r=document.createElement("script"),s=`${za}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Q0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Y0(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Yd(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ge.error(a)}t("config",s,i)}async function J0(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Yd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ge.error(i)}}function X0(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await J0(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Y0(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ge.error(a)}}return s}function Z0(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=X0(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function ew(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(za)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=30,nw=1e3;class rw{constructor(e={},n=nw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jd=new rw;function sw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function iw(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:sw(r)},i=z0.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ow(t,e=Jd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ye.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new lw;return setTimeout(async()=>{a.abort()},n!==void 0?n:q0),Xd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Xd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Jd){var i;const{appId:o,measurementId:a}=t;try{await aw(r,e)}catch(c){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await iw(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!cw(l)){if(s.deleteThrottleMetadata(o),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?nl(n,s.intervalMillis,tw):nl(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),Ge.debug(`Calling attemptFetch again in ${u} millis`),Xd(t,h,r,s)}}function aw(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cw(t){if(!(t instanceof at)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class lw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uw(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(){if(Bh())try{await jh()}catch(t){return Ge.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ge.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dw(t,e,n,r,s,i,o){var a;const c=ow(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ge.error(p)),e.push(c);const l=hw().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);ew(i)||W0(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[j0]="firebase",d.update=!0,h!=null&&(d[B0]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.app=e}_delete(){return delete br[this.app.options.appId],Promise.resolve()}}let br={},Ol=[];const Pl={};let To="dataLayer",pw="gtag",$l,Zd,Ml=!1;function gw(){const t=[];if(Vh()&&t.push("This is a browser extension environment."),Em()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function mw(t,e,n){gw();const r=t.options.appId;if(!r)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(br[r]!=null)throw Ye.create("already-exists",{id:r});if(!Ml){Q0(To);const{wrappedGtag:i,gtagCore:o}=Z0(br,Ol,Pl,To,pw);Zd=i,$l=o,Ml=!0}return br[r]=dw(t,Ol,Pl,e,$l,To,n),new fw(t)}function yw(t=Ca()){t=Ae(t);const e=wn(t,ti);return e.isInitialized()?e.getImmediate():_w(t)}function _w(t,e={}){const n=wn(t,ti);if(n.isInitialized()){const s=n.getImmediate();if(Nr(e,n.getOptions()))return s;throw Ye.create("already-initialized")}return n.initialize({options:e})}function vw(t,e,n,r){t=Ae(t),uw(Zd,br[t.app.options.appId],e,n,r).catch(s=>Ge.error(s))}const Ll="@firebase/analytics",Fl="0.10.0";function ww(){_t(new rt(ti,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return mw(r,s,n)},"PUBLIC")),_t(new rt("analytics-internal",t,"PRIVATE")),et(Ll,Fl),et(Ll,Fl,"esm2017");function t(e){try{const n=e.getProvider(ti).getImmediate();return{logEvent:(r,s,i)=>vw(n,r,s,i)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}ww();var Iw="firebase",Ew="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Iw,Ew,"app");var bw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Ha=Ha||{},G=bw||self;function Ci(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ss(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Tw(t){return Object.prototype.hasOwnProperty.call(t,ko)&&t[ko]||(t[ko]=++kw)}var ko="closure_uid_"+(1e9*Math.random()>>>0),kw=0;function Sw(t,e,n){return t.call.apply(t.bind,arguments)}function Aw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=Sw:Be=Aw,Be.apply(null,arguments)}function Ts(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Qt(){this.s=this.s,this.o=this.o}var Cw=0;Qt.prototype.s=!1;Qt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Cw!=0)&&Tw(this)};Qt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ef=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ka(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ul(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ci(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Rw=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function Lr(t){return/^[\s\xa0]*$/.test(t)}function Ri(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function ut(t){return Ri().indexOf(t)!=-1}function Ga(t){return Ga[" "](t),t}Ga[" "]=function(){};function Dw(t,e){var n=E1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Nw=ut("Opera"),zn=ut("Trident")||ut("MSIE"),tf=ut("Edge"),Zo=tf||zn,nf=ut("Gecko")&&!(Ri().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),Ow=Ri().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function rf(){var t=G.document;return t?t.documentMode:void 0}var ea;e:{var So="",Ao=function(){var t=Ri();if(nf)return/rv:([^\);]+)(\)|;)/.exec(t);if(tf)return/Edge\/([\d\.]+)/.exec(t);if(zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ow)return/WebKit\/(\S+)/.exec(t);if(Nw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ao&&(So=Ao?Ao[1]:""),zn){var Co=rf();if(Co!=null&&Co>parseFloat(So)){ea=String(Co);break e}}ea=So}var ta;if(G.document&&zn){var xl=rf();ta=xl||parseInt(ea,10)||void 0}else ta=void 0;var Pw=ta;function Fr(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nf){e:{try{Ga(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$w[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fr.$.h.call(this)}}Ne(Fr,je);var $w={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var is="closure_listenable_"+(1e6*Math.random()|0),Mw=0;function Lw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Mw,this.fa=this.ia=!1}function Di(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wa(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Fw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function sf(t){const e={};for(const n in t)e[n]=t[n];return e}const Vl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function of(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Vl.length;i++)n=Vl[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ni(t){this.src=t,this.g={},this.h=0}Ni.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ra(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Lw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function na(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ef(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Di(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ra(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Qa="closure_lm_"+(1e6*Math.random()|0),Ro={};function af(t,e,n,r,s){if(r&&r.once)return lf(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)af(t,e[i],n,r,s);return null}return n=Xa(n),t&&t[is]?t.O(e,n,ss(r)?!!r.capture:!!r,s):cf(t,e,n,!1,r,s)}function cf(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ss(s)?!!s.capture:!!s,a=Ja(t);if(a||(t[Qa]=a=new Ni(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Uw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Rw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uw(){function t(n){return e.call(t.src,t.listener,n)}const e=xw;return t}function lf(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lf(t,e[i],n,r,s);return null}return n=Xa(n),t&&t[is]?t.P(e,n,ss(r)?!!r.capture:!!r,s):cf(t,e,n,!0,r,s)}function uf(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)uf(t,e[i],n,r,s);else r=ss(r)?!!r.capture:!!r,n=Xa(n),t&&t[is]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ra(i,n,r,s),-1<n&&(Di(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ja(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ra(e,n,r,s)),(n=-1<t?e[t]:null)&&Ya(n))}function Ya(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[is])na(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ja(e))?(na(n,t),n.h==0&&(n.src=null,e[Qa]=null)):Di(t)}}}function hf(t){return t in Ro?Ro[t]:Ro[t]="on"+t}function xw(t,e){if(t.fa)t=!0;else{e=new Fr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ya(t),t=n.call(r,e)}return t}function Ja(t){return t=t[Qa],t instanceof Ni?t:null}var Do="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xa(t){return typeof t=="function"?t:(t[Do]||(t[Do]=function(e){return t.handleEvent(e)}),t[Do])}function Re(){Qt.call(this),this.i=new Ni(this),this.S=this,this.J=null}Ne(Re,Qt);Re.prototype[is]=!0;Re.prototype.removeEventListener=function(t,e,n,r){uf(this,t,e,n,r)};function Le(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var s=e;e=new je(r,t),of(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ks(o,r,!0,e)&&s}if(o=e.g=t,s=ks(o,r,!0,e)&&s,s=ks(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ks(o,r,!1,e)&&s}Re.prototype.N=function(){if(Re.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Di(n[r]);delete t.g[e],t.h--}}this.J=null};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ks(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&na(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Za=G.JSON.stringify;class Vw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Bw(){var t=ec;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jw{constructor(){this.h=this.g=null}add(e,n){const r=df.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var df=new Vw(()=>new qw,t=>t.reset());class qw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zw(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Hw(t){G.setTimeout(()=>{throw t},0)}let Ur,xr=!1,ec=new jw,ff=()=>{const t=G.Promise.resolve(void 0);Ur=()=>{t.then(Kw)}};var Kw=()=>{for(var t;t=Bw();){try{t.h.call(t.g)}catch(n){Hw(n)}var e=df;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xr=!1};function Oi(t,e){Re.call(this),this.h=t||1,this.g=e||G,this.j=Be(this.qb,this),this.l=Date.now()}Ne(Oi,Re);O=Oi.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(tc(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Oi.$.N.call(this),tc(this),delete this.g};function nc(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function pf(t){t.g=nc(()=>{t.g=null,t.i&&(t.i=!1,pf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Gw extends Qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pf(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(t){Qt.call(this),this.h=t,this.g={}}Ne(Vr,Qt);var Bl=[];function gf(t,e,n,r){Array.isArray(n)||(n&&(Bl[0]=n.toString()),n=Bl);for(var s=0;s<n.length;s++){var i=af(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mf(t){Wa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ya(e)},t),t.g={}}Vr.prototype.N=function(){Vr.$.N.call(this),mf(this)};Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pi(){this.g=!0}Pi.prototype.Ea=function(){this.g=!1};function Ww(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Qw(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ln(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jw(t,n)+(r?" "+r:"")})}function Yw(t,e){t.info(function(){return"TIMEOUT: "+e})}Pi.prototype.info=function(){};function Jw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Za(n)}catch{return e}}var En={},jl=null;function $i(){return jl=jl||new Re}En.Ta="serverreachability";function yf(t){je.call(this,En.Ta,t)}Ne(yf,je);function Br(t){const e=$i();Le(e,new yf(e))}En.STAT_EVENT="statevent";function _f(t,e){je.call(this,En.STAT_EVENT,t),this.stat=e}Ne(_f,je);function Ke(t){const e=$i();Le(e,new _f(e,t))}En.Ua="timingevent";function vf(t,e){je.call(this,En.Ua,t),this.size=e}Ne(vf,je);function os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Mi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rc(){}rc.prototype.h=null;function ql(t){return t.h||(t.h=t.i())}function If(){}var as={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sc(){je.call(this,"d")}Ne(sc,je);function ic(){je.call(this,"c")}Ne(ic,je);var sa;function Li(){}Ne(Li,rc);Li.prototype.g=function(){return new XMLHttpRequest};Li.prototype.i=function(){return{}};sa=new Li;function cs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Vr(this),this.P=Xw,t=Zo?125:void 0,this.V=new Oi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ef}function Ef(){this.i=null,this.g="",this.h=!1}var Xw=45e3,ia={},ni={};O=cs.prototype;O.setTimeout=function(t){this.P=t};function oa(t,e,n){t.L=1,t.v=Ui(Dt(e)),t.s=n,t.S=!0,bf(t,null)}function bf(t,e){t.G=Date.now(),ls(t),t.A=Dt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Nf(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ef,t.g=Xf(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Gw(Be(t.Pa,t,t.g),t.O)),gf(t.U,t.g,"readystatechange",t.nb),e=t.I?sf(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Br(),Ww(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&dt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=dt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zo||this.g&&(this.h.h||this.g.ja()||Gl(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Br(3):Br(2)),Fi(this);var n=this.g.da();this.ca=n;t:if(Tf(this)){var r=Gl(this.g);t="";var s=r.length,i=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),Tr(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Qw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lr(a)){var l=a;break t}}l=null}if(n=l)Ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,n);else{this.i=!1,this.o=3,Ke(12),rn(this),Tr(this);break e}}this.S?(kf(this,u,o),Zo&&this.i&&u==3&&(gf(this.U,this.V,"tick",this.mb),this.V.start())):(Ln(this.j,this.m,o,null),aa(this,o)),u==4&&rn(this),this.i&&!this.J&&(u==4?Wf(this.l,this):(this.i=!1,ls(this)))}else v1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),rn(this),Tr(this)}}}catch{}finally{}};function Tf(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function kf(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Zw(t,n),s==ni){e==4&&(t.o=4,Ke(14),r=!1),Ln(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ia){t.o=4,Ke(15),Ln(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ln(t.j,t.m,s,null),aa(t,s);Tf(t)&&s!=ni&&s!=ia&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hc(e),e.M=!0,Ke(11))):(Ln(t.j,t.m,n,"[Invalid Chunked Response]"),rn(t),Tr(t))}O.mb=function(){if(this.g){var t=dt(this.g),e=this.g.ja();this.C<e.length&&(Fi(this),kf(this,t,e),this.i&&t!=4&&ls(this))}};function Zw(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ni:(n=Number(e.substring(n,r)),isNaN(n)?ia:(r+=1,r+n>e.length?ni:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,rn(this)};function ls(t){t.Y=Date.now()+t.P,Sf(t,t.P)}function Sf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=os(Be(t.lb,t),e)}function Fi(t){t.B&&(G.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Yw(this.j,this.A),this.L!=2&&(Br(),Ke(17)),rn(this),this.o=2,Tr(this)):Sf(this,this.Y-t)};function Tr(t){t.l.H==0||t.J||Wf(t.l,t)}function rn(t){Fi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tc(t.V),mf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function aa(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ca(n.i,t))){if(!t.K&&ca(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ii(n),Bi(n);else break e;uc(n),Ke(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=os(Be(n.ib,n),6e3));if(1>=$f(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sn(n,11)}else if((t.K||n.g==t)&&ii(n),!Lr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(oc(i,i.h),i.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,fe(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Jf(r,r.J?r.pa:null,r.Y),o.K){Mf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Fi(a),ls(a)),r.g=o}else Kf(r);0<n.j.length&&ji(n)}else l[0]!="stop"&&l[0]!="close"||sn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sn(n,7):lc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Br(4)}catch{}}function e1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ci(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function t1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ci(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Af(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ci(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=t1(t),r=e1(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Cf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cn){this.h=t.h,ri(this,t.j),this.s=t.s,this.g=t.g,si(this,t.m),this.l=t.l;var e=t.i,n=new jr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zl(this,n),this.o=t.o}else t&&(e=String(t).match(Cf))?(this.h=!1,ri(this,e[1]||"",!0),this.s=mr(e[2]||""),this.g=mr(e[3]||"",!0),si(this,e[4]),this.l=mr(e[5]||"",!0),zl(this,e[6]||"",!0),this.o=mr(e[7]||"")):(this.h=!1,this.i=new jr(null,this.h))}cn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yr(e,Hl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yr(e,Hl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(yr(n,n.charAt(0)=="/"?i1:s1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yr(n,a1)),t.join("")};function Dt(t){return new cn(t)}function ri(t,e,n){t.j=n?mr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function si(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zl(t,e,n){e instanceof jr?(t.i=e,c1(t.i,t.h)):(n||(e=yr(e,o1)),t.i=new jr(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function Ui(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,r1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function r1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hl=/[#\/\?@]/g,s1=/[#\?:]/g,i1=/[#\?]/g,o1=/[#\?@]/g,a1=/#/g;function jr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yt(t){t.g||(t.g=new Map,t.h=0,t.i&&n1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=jr.prototype;O.add=function(t,e){Yt(this),this.i=null,t=ir(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rf(t,e){Yt(t),e=ir(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Df(t,e){return Yt(t),e=ir(t,e),t.g.has(e)}O.forEach=function(t,e){Yt(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Yt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Yt(this);let e=[];if(typeof t=="string")Df(this,t)&&(e=e.concat(this.g.get(ir(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Yt(this),this.i=null,t=ir(this,t),Df(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Nf(t,e,n){Rf(t,e),0<n.length&&(t.i=null,t.g.set(ir(t,e),Ka(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ir(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function c1(t,e){e&&!t.j&&(Yt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Rf(this,r),Nf(this,s,n))},t)),t.j=e}var l1=class{constructor(t,e){this.g=t,this.map=e}};function Of(t){this.l=t||u1,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var u1=10;function Pf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $f(t){return t.h?1:t.g?t.g.size:0}function ca(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oc(t,e){t.g?t.g.add(e):t.h=e}function Mf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Of.prototype.cancel=function(){if(this.i=Lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ka(t.i)}var h1=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function d1(){this.g=new h1}function f1(t,e,n){const r=n||"";try{Af(t,function(s,i){let o=s;ss(s)&&(o=Za(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function p1(t,e){const n=new Pi;if(G.Image){const r=new Image;r.onload=Ts(Ss,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ts(Ss,n,r,"TestLoadImage: error",!1,e),r.onabort=Ts(Ss,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ts(Ss,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ss(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function us(t){this.l=t.fc||null,this.j=t.ob||!1}Ne(us,rc);us.prototype.g=function(){return new xi(this.l,this.j)};us.prototype.i=function(t){return function(){return t}}({});function xi(t,e){Re.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ac,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(xi,Re);var ac=0;O=xi.prototype;O.open=function(t,e){if(this.readyState!=ac)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=ac};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ff(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ff(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hs(this):qr(this),this.readyState==3&&Ff(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,hs(this))};O.Ya=function(t){this.g&&(this.response=t,hs(this))};O.ka=function(){this.g&&hs(this)};function hs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var g1=G.JSON.parse;function Ee(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Uf,this.L=this.M=!1}Ne(Ee,Re);var Uf="",m1=/^https?$/i,y1=["POST","PUT"];O=Ee.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sa.g(),this.C=this.u?ql(this.u):ql(sa),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Kl(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=ef(y1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bf(this),0<this.B&&((this.L=_1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=nc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kl(this,i)}};function _1(t){return zn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Ha<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Kl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xf(t),Vi(t)}function xf(t){t.F||(t.F=!0,Le(t,"complete"),Le(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Vi(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vi(this,!0)),Ee.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Vf(this):this.kb())};O.kb=function(){Vf(this)};function Vf(t){if(t.h&&typeof Ha<"u"&&(!t.C[1]||dt(t)!=4||t.da()!=2)){if(t.v&&dt(t)==4)nc(t.La,0,t);else if(Le(t,"readystatechange"),dt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Cf)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!m1.test(s?s.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var i=2<dt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",xf(t)}}finally{Vi(t)}}}}function Vi(t,e){if(t.g){Bf(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=r}catch{}}}function Bf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function dt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),g1(e)}};function Gl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Uf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function v1(t){const e={};t=(t.g&&2<=dt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Lr(t[r]))continue;var n=zw(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Fw(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jf(t){let e="";return Wa(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qf(t){this.Ga=0,this.j=[],this.l=new Pi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dr("baseRetryDelayMs",5e3,t),this.hb=dr("retryDelaySeedMs",1e4,t),this.eb=dr("forwardChannelMaxRetries",2,t),this.xa=dr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Of(t&&t.concurrentRequestLimit),this.Ja=new d1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=qf.prototype;O.ra=8;O.H=1;function lc(t){if(zf(t),t.H==3){var e=t.W++,n=Dt(t.I);if(fe(n,"SID",t.K),fe(n,"RID",e),fe(n,"TYPE","terminate"),ds(t,n),e=new cs(t,t.l,e),e.L=2,e.v=Ui(Dt(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ls(e)}Yf(t)}function Bi(t){t.g&&(hc(t),t.g.cancel(),t.g=null)}function zf(t){Bi(t),t.u&&(G.clearTimeout(t.u),t.u=null),ii(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function ji(t){if(!Pf(t.i)&&!t.m){t.m=!0;var e=t.Na;Ur||ff(),xr||(Ur(),xr=!0),ec.add(e,t),t.C=0}}function w1(t,e){return $f(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=os(Be(t.Na,t,e),Qf(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new cs(this,this.l,t);let i=this.s;if(this.U&&(i?(i=sf(i),of(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hf(this,s,e),n=Dt(this.I),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),ds(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jf(i)))+"&"+e:this.o&&cc(n,this.o,i)),oc(this.i,s),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),s.aa=!0,oa(s,n,null)):oa(s,n,e),this.H=2}}else this.H==3&&(t?Wl(this,t):this.j.length==0||Pf(this.i)||Wl(this))};function Wl(t,e){var n;e?n=e.m:n=t.W++;const r=Dt(t.I);fe(r,"SID",t.K),fe(r,"RID",n),fe(r,"AID",t.V),ds(t,r),t.o&&t.s&&cc(r,t.o,t.s),n=new cs(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Hf(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),oc(t.i,n),oa(n,r,e)}function ds(t,e){t.na&&Wa(t.na,function(n,r){fe(e,r,n)}),t.h&&Af({},function(n,r){fe(e,r,n)})}function Hf(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Be(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{f1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Kf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ur||ff(),xr||(Ur(),xr=!0),ec.add(e,t),t.A=0}}function uc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=os(Be(t.Ma,t),Qf(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,Gf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=os(Be(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ke(10),Bi(this),Gf(this))};function hc(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Gf(t){t.g=new cs(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dt(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.K),fe(e,"AID",t.V),fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&fe(e,"TO",t.qa),fe(e,"TYPE","xmlhttp"),ds(t,e),t.o&&t.s&&cc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ui(Dt(e)),n.s=null,n.S=!0,bf(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Bi(this),uc(this),Ke(19))};function ii(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Wf(t,e){var n=null;if(t.g==e){ii(t),hc(t),t.g=null;var r=2}else if(ca(t.i,e))n=e.F,Mf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=$i(),Le(r,new vf(r,n)),ji(t)}else Kf(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&w1(t,e)||r==2&&uc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:sn(t,5);break;case 4:sn(t,10);break;case 3:sn(t,6);break;default:sn(t,2)}}}function Qf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Be(t.pb,t);n||(n=new cn("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||ri(n,"https"),Ui(n)),p1(n.toString(),r)}else Ke(2);t.H=0,t.h&&t.h.za(e),Yf(t),zf(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ke(2)):(this.l.info("Failed to ping google.com"),Ke(1))};function Yf(t){if(t.H=0,t.ma=[],t.h){const e=Lf(t.i);(e.length!=0||t.j.length!=0)&&(Ul(t.ma,e),Ul(t.ma,t.j),t.i.i.length=0,Ka(t.j),t.j.length=0),t.h.ya()}}function Jf(t,e,n){var r=n instanceof cn?Dt(n):new cn(n);if(r.g!="")e&&(r.g=e+"."+r.g),si(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new cn(null);r&&ri(i,r),e&&(i.g=e),s&&si(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.ra),ds(t,r),r}function Xf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ee(new us({ob:!0})):new Ee(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zf(){}O=Zf.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function oi(){if(zn&&!(10<=Number(Pw)))throw Error("Environmental error: no available transport.")}oi.prototype.g=function(t,e){return new Je(t,e)};function Je(t,e){Re.call(this),this.g=new qf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new or(this)}Ne(Je,Re);Je.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jf(t,null,t.Y),ji(t)};Je.prototype.close=function(){lc(this.g)};Je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Za(t),t=n);e.j.push(new l1(e.fb++,t)),e.H==3&&ji(e)};Je.prototype.N=function(){this.g.h=null,delete this.j,lc(this.g),delete this.g,Je.$.N.call(this)};function ep(t){sc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(ep,sc);function tp(){ic.call(this),this.status=1}Ne(tp,ic);function or(t){this.g=t}Ne(or,Zf);or.prototype.Ba=function(){Le(this.g,"a")};or.prototype.Aa=function(t){Le(this.g,new ep(t))};or.prototype.za=function(t){Le(this.g,new tp)};or.prototype.ya=function(){Le(this.g,"b")};function I1(){this.blockSize=-1}function st(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(st,I1);st.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function No(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}st.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)No(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){No(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){No(this,r),s=0;break}}this.h=s,this.i+=e};st.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var E1={};function dc(t){return-128<=t&&128>t?Dw(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function ft(t){if(isNaN(t)||!isFinite(t))return Vn;if(0>t)return Pe(ft(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=la;return new he(e,0)}function np(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Pe(np(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(e,8)),r=Vn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=ft(Math.pow(e,i)),r=r.R(i).add(ft(o))):(r=r.R(n),r=r.add(ft(o)))}return r}var la=4294967296,Vn=dc(0),ua=dc(1),Ql=dc(16777216);O=he.prototype;O.ea=function(){if(Xe(this))return-Pe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:la+r)*e,e*=la}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Tt(this))return"0";if(Xe(this))return"-"+Pe(this).toString(t);for(var e=ft(Math.pow(t,6)),n=this,r="";;){var s=ci(n,e).g;n=ai(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Tt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Tt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xe(t){return t.h==-1}O.X=function(t){return t=ai(this,t),Xe(t)?-1:Tt(t)?0:1};function Pe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(ua)}O.abs=function(){return Xe(this)?Pe(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new he(n,n[n.length-1]&-2147483648?-1:0)};function ai(t,e){return t.add(Pe(e))}O.R=function(t){if(Tt(this)||Tt(t))return Vn;if(Xe(this))return Xe(t)?Pe(this).R(Pe(t)):Pe(Pe(this).R(t));if(Xe(t))return Pe(this.R(Pe(t)));if(0>this.X(Ql)&&0>t.X(Ql))return ft(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,As(n,2*r+2*s),n[2*r+2*s+1]+=i*c,As(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,As(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,As(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function As(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fr(t,e){this.g=t,this.h=e}function ci(t,e){if(Tt(e))throw Error("division by zero");if(Tt(t))return new fr(Vn,Vn);if(Xe(t))return e=ci(Pe(t),e),new fr(Pe(e.g),Pe(e.h));if(Xe(e))return e=ci(t,Pe(e)),new fr(Pe(e.g),e.h);if(30<t.g.length){if(Xe(t)||Xe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ua,r=e;0>=r.X(t);)n=Yl(n),r=Yl(r);var s=Cn(n,1),i=Cn(r,1);for(r=Cn(r,2),n=Cn(n,2);!Tt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Cn(r,1),n=Cn(n,1)}return e=ai(t,s.R(e)),new fr(s,e)}for(s=Vn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ft(n),o=i.R(e);Xe(o)||0<o.X(t);)n-=r,i=ft(n),o=i.R(e);Tt(i)&&(i=ua),s=s.add(i),t=ai(t,o)}return new fr(s,t)}O.gb=function(t){return ci(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function Yl(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function Cn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new he(s,t.h)}oi.prototype.createWebChannel=oi.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;Mi.NO_ERROR=0;Mi.TIMEOUT=8;Mi.HTTP_ERROR=6;wf.COMPLETE="complete";If.EventType=as;as.OPEN="a";as.CLOSE="b";as.ERROR="c";as.MESSAGE="d";Re.prototype.listen=Re.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;st.prototype.digest=st.prototype.l;st.prototype.reset=st.prototype.reset;st.prototype.update=st.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=ft;he.fromString=np;var b1=function(){return new oi},T1=function(){return $i()},Oo=Mi,k1=wf,S1=En,Jl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},A1=us,Cs=If,C1=Ee,R1=st,Bn=he;const Xl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Ei("@firebase/firestore");function Zl(){return mn.logLevel}function V(t,...e){if(mn.logLevel<=ce.DEBUG){const n=e.map(fc);mn.debug(`Firestore (${ar}): ${t}`,...n)}}function Nt(t,...e){if(mn.logLevel<=ce.ERROR){const n=e.map(fc);mn.error(`Firestore (${ar}): ${t}`,...n)}}function Hn(t,...e){if(mn.logLevel<=ce.WARN){const n=e.map(fc);mn.warn(`Firestore (${ar}): ${t}`,...n)}}function fc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: `+t;throw Nt(e),new Error(e)}function ge(t,e){t||H()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class N1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class O1{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new rp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Ue(e)}}class P1{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class $1{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new P1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L1{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.T=n.token,new M1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=F1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Kn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Se(0,0))}static max(){return new Y(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends zr{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const U1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends zr{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return U1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(pe.fromString(e))}static fromName(e){return new B(pe.fromString(e).popFirst(5))}static empty(){return new B(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new pe(e.slice()))}}function x1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new Ht(s,B.empty(),e)}function V1(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ht(Y.min(),B.empty(),-1)}static max(){return new Ht(Y.max(),B.empty(),-1)}}function B1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==j1)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}pc.ct=-1;function qi(t){return t==null}function li(t){return t===0&&1/t==-1/0}function z1(t){return typeof t=="number"&&Number.isInteger(t)&&!li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Oe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new nt([])}unionWith(e){let n=new qe(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new op("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const H1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(t){if(ge(!!t),typeof t=="string"){let e=0;const n=H1.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yn(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mc(t){const e=t.mapValue.fields.__previous_value__;return gc(e)?mc(e):e}function Hr(t){const e=Kt(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Kr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gc(t)?4:G1(t)?9007199254740991:10:H()}function vt(t,e){if(t===e)return!0;const n=_n(t);if(n!==_n(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hr(t).isEqual(Hr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Kt(r.timestampValue),o=Kt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return yn(r.bytesValue).isEqual(yn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Te(r.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(r.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Te(r.integerValue)===Te(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Te(r.doubleValue),o=Te(s.doubleValue);return i===o?li(i)===li(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Kn(t.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(eu(i)!==eu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!vt(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Gr(t,e){return(t.values||[]).find(n=>vt(n,e))!==void 0}function Gn(t,e){if(t===e)return 0;const n=_n(t),r=_n(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Te(s.integerValue||s.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nu(t.timestampValue,e.timestampValue);case 4:return nu(Hr(t),Hr(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,i){const o=yn(s),a=yn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=le(Te(s.latitude),Te(i.latitude));return o!==0?o:le(Te(s.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Gn(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ds.mapValue&&i===Ds.mapValue)return 0;if(s===Ds.mapValue)return 1;if(i===Ds.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const d=Gn(o[a[u]],c[l[u]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function nu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Kt(t),r=Kt(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function Wn(t){return ha(t)}function ha(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Kt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=ha(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${ha(r.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function ru(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function da(t){return!!t&&"integerValue"in t}function yc(t){return!!t&&"arrayValue"in t}function su(t){return!!t&&"nullValue"in t}function iu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Us(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=kr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function G1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Us(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=Ve.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=kr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Us(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ze(kr(this.value))}}function ap(t){const e=[];return cr(t.fields,(n,r)=>{const s=new Ve([n]);if(Us(r)){const i=ap(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,Y.min(),Y.min(),Y.min(),Ze.empty(),0)}static newFoundDocument(e,n,r,s){return new xe(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new xe(e,2,n,Y.min(),Y.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,Y.min(),Y.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ui{constructor(e,n){this.position=e,this.inclusive=n}}function ou(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Gn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function W1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cp{}class ke extends cp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Y1(e,n,r):n==="array-contains"?new Z1(e,r):n==="in"?new eI(e,r):n==="not-in"?new tI(e,r):n==="array-contains-any"?new nI(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new J1(e,r):new X1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gn(n,this.value)):n!==null&&_n(this.value)===_n(n)&&this.matchesComparison(Gn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class it extends cp{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new it(e,n)}matches(e){return lp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lp(t){return t.op==="and"}function up(t){return Q1(t)&&lp(t)}function Q1(t){for(const e of t.filters)if(e instanceof it)return!1;return!0}function fa(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Wn(t.value);if(up(t))return t.filters.map(e=>fa(e)).join(",");{const e=t.filters.map(n=>fa(n)).join(",");return`${t.op}(${e})`}}function hp(t,e){return t instanceof ke?function(n,r){return r instanceof ke&&n.op===r.op&&n.field.isEqual(r.field)&&vt(n.value,r.value)}(t,e):t instanceof it?function(n,r){return r instanceof it&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&hp(i,r.filters[o]),!0):!1}(t,e):void H()}function dp(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Wn(e.value)}`}(t):t instanceof it?function(e){return e.op.toString()+" {"+e.getFilters().map(dp).join(" ,")+"}"}(t):"Filter"}class Y1 extends ke{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class J1 extends ke{constructor(e,n){super(e,"in",n),this.keys=fp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X1 extends ke{constructor(e,n){super(e,"not-in",n),this.keys=fp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class Z1 extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yc(n)&&Gr(n.arrayValue,this.value)}}class eI extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gr(this.value.arrayValue,n)}}class tI extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gr(this.value.arrayValue,n)}}class nI extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function cu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rI(t,e,n,r,s,i,o)}function _c(t){const e=J(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fa(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wn(r)).join(",")),e.dt=n}return e.dt}function vc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!au(t.startAt,e.startAt)&&au(t.endAt,e.endAt)}function pa(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function sI(t,e,n,r,s,i,o,a){return new gs(t,e,n,r,s,i,o,a)}function wc(t){return new gs(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ic(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function gp(t){return t.collectionGroup!==null}function jn(t){const e=J(t);if(e.wt===null){e.wt=[];const n=Ic(e),r=pp(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Sr(n)),e.wt.push(new Sr(Ve.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Sr(Ve.keyField(),i))}}}return e.wt}function Ot(t){const e=J(t);if(!e._t)if(e.limitType==="F")e._t=cu(e.path,e.collectionGroup,jn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of jn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Sr(i.field,o))}const r=e.endAt?new ui(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ui(e.startAt.position,e.startAt.inclusive):null;e._t=cu(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function ga(t,e){e.getFirstInequalityField(),Ic(t);const n=t.filters.concat([e]);return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ma(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zi(t,e){return vc(Ot(t),Ot(e))&&t.limitType===e.limitType}function mp(t){return`${_c(Ot(t))}|lt:${t.limitType}`}function ya(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>dp(r)).join(", ")}]`),qi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wn(r)).join(",")),`Target(${n})`}(Ot(t))}; limitType=${t.limitType})`}function Hi(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):B.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of jn(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=ou(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,jn(n),r)||n.endAt&&!function(s,i,o){const a=ou(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,jn(n),r))}(t,e)}function iI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yp(t){return(e,n)=>{let r=!1;for(const s of jn(t)){const i=oI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oI(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Gn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ip(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new we(B.comparator);function Pt(){return aI}const _p=new we(B.comparator);function _r(...t){let e=_p;for(const n of t)e=e.insert(n.key,n);return e}function vp(t){let e=_p;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function on(){return Ar()}function wp(){return Ar()}function Ar(){return new lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const cI=new we(B.comparator),lI=new qe(B.comparator);function se(...t){let e=lI;for(const n of t)e=e.add(n);return e}const uI=new qe(le);function hI(){return uI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function Ep(t){return{integerValue:""+t}}function dI(t,e){return z1(e)?Ep(e):Ip(t,e)}/**
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
 */class Ki{constructor(){this._=void 0}}function fI(t,e,n){return t instanceof hi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&gc(s)&&(s=mc(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Wr?Tp(t,e):t instanceof Qr?kp(t,e):function(r,s){const i=bp(r,s),o=uu(i)+uu(r.gt);return da(i)&&da(r.gt)?Ep(o):Ip(r.serializer,o)}(t,e)}function pI(t,e,n){return t instanceof Wr?Tp(t,e):t instanceof Qr?kp(t,e):n}function bp(t,e){return t instanceof di?da(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hi extends Ki{}class Wr extends Ki{constructor(e){super(),this.elements=e}}function Tp(t,e){const n=Sp(e);for(const r of t.elements)n.some(s=>vt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qr extends Ki{constructor(e){super(),this.elements=e}}function kp(t,e){let n=Sp(e);for(const r of t.elements)n=n.filter(s=>!vt(s,r));return{arrayValue:{values:n}}}class di extends Ki{constructor(e,n){super(),this.serializer=e,this.gt=n}}function uu(t){return Te(t.integerValue||t.doubleValue)}function Sp(t){return yc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Wr&&r instanceof Wr||n instanceof Qr&&r instanceof Qr?Kn(n.elements,r.elements,vt):n instanceof di&&r instanceof di?vt(n.gt,r.gt):n instanceof hi&&r instanceof hi}(t.transform,e.transform)}class mI{constructor(e,n){this.version=e,this.transformResults=n}}class mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gi{}function Ap(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ec(t.key,mt.none()):new ms(t.key,t.data,mt.none());{const n=t.data,r=Ze.empty();let s=new qe(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new bn(t.key,r,new nt(s.toArray()),mt.none())}}function yI(t,e,n){t instanceof ms?function(r,s,i){const o=r.value.clone(),a=du(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof bn?function(r,s,i){if(!xs(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=du(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Cp(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Cr(t,e,n,r){return t instanceof ms?function(s,i,o,a){if(!xs(s.precondition,i))return o;const c=s.value.clone(),l=fu(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof bn?function(s,i,o,a){if(!xs(s.precondition,i))return o;const c=fu(s.fieldTransforms,a,i),l=i.data;return l.setAll(Cp(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return xs(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function _I(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bp(r.transform,s||null);i!=null&&(n===null&&(n=Ze.empty()),n.set(r.field,i))}return n||null}function hu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Kn(n,r,(s,i)=>gI(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ms extends Gi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bn extends Gi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function du(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,pI(o,a,n[s]))}return r}function fu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fI(i,o,e))}return r}class Ec extends Gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vI extends Gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ap(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(n,r)=>hu(n,r))&&Kn(this.baseMutations,e.baseMutations,(n,r)=>hu(n,r))}}class bc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=cI;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bc(e,n,r,s)}}/**
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
 */class II{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class EI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ie;function bI(t){switch(t){default:return H();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Rp(t){if(t===void 0)return Nt("GRPC error has no .code"),T.UNKNOWN;switch(t){case be.OK:return T.OK;case be.CANCELLED:return T.CANCELLED;case be.UNKNOWN:return T.UNKNOWN;case be.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case be.INTERNAL:return T.INTERNAL;case be.UNAVAILABLE:return T.UNAVAILABLE;case be.UNAUTHENTICATED:return T.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case be.NOT_FOUND:return T.NOT_FOUND;case be.ALREADY_EXISTS:return T.ALREADY_EXISTS;case be.PERMISSION_DENIED:return T.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case be.ABORTED:return T.ABORTED;case be.OUT_OF_RANGE:return T.OUT_OF_RANGE;case be.UNIMPLEMENTED:return T.UNIMPLEMENTED;case be.DATA_LOSS:return T.DATA_LOSS;default:return H()}}(ie=be||(be={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Tc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ns}static getOrCreateInstance(){return Ns===null&&(Ns=new Tc),Ns}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ns=null;/**
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
 */function TI(){return new TextEncoder}/**
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
 */const kI=new Bn([4294967295,4294967295],0);function pu(t){const e=TI().encode(t),n=new R1;return n.update(e),new Uint8Array(n.digest())}function gu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bn([n,r],0),new Bn([s,i],0)]}class kc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vr(`Invalid padding: ${n}`);if(r<0)throw new vr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Bn.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(Bn.fromNumber(r)));return s.compare(kI)===1&&(s=new Bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kc(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ys.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wi(Y.min(),s,new we(le),Pt(),se())}}class ys{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ys(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class Dp{constructor(e,n){this.targetId=e,this.Vt=n}}class Np{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.St=0,this.Dt=_u(),this.Ct=He.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),r=se();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new ys(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=_u()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class SI{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Pt(),this.zt=yu(),this.Wt=new we(le)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(pa(o))if(s===0){const a=new B(o.path);this.Yt(r,a,xe.newNoDocument(a,Y.min()))}else ge(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=Tc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,_,g,m,E;const I={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(I.bloomFilter={applied:l===0,hashCount:(d=k==null?void 0:k.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(g=(_=(p=k==null?void 0:k.bits)===null||p===void 0?void 0:p.bitmap)===null||_===void 0?void 0:_.length)!==null&&g!==void 0?g:0,padding:(E=(m=k==null?void 0:k.bits)===null||m===void 0?void 0:m.padding)!==null&&E!==void 0?E:0}),I}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=yn(i).toUint8Array()}catch(u){if(u instanceof op)return Hn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new kc(c,o,a)}catch(u){return Hn(u instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&pa(a.target)){const c=new B(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,xe.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=se();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Wi(e,n,this.Wt,this.jt,r);return this.jt=Pt(),this.zt=yu(),this.Wt=new we(le),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new mu,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new qe(le),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new mu),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function yu(){return new we(B.comparator)}function _u(){return new we(B.comparator)}const AI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),CI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RI=(()=>({and:"AND",or:"OR"}))();class DI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _a(t,e){return t.useProto3Json||qi(e)?e:{value:e}}function fi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Op(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NI(t,e){return fi(t,e.toTimestamp())}function yt(t){return ge(!!t),Y.fromTimestamp(function(e){const n=Kt(e);return new Se(n.seconds,n.nanos)}(t))}function Sc(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pp(t){const e=pe.fromString(t);return ge(Fp(e)),e}function va(t,e){return Sc(t.databaseId,e.path)}function Po(t,e){const n=Pp(e);if(n.get(1)!==t.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B($p(n))}function wa(t,e){return Sc(t.databaseId,e)}function OI(t){const e=Pp(t);return e.length===4?pe.emptyPath():$p(e)}function Ia(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $p(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vu(t,e,n){return{name:va(t,e),fields:n.value.mapValue.fields}}function PI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ge(l===void 0||typeof l=="string"),He.fromBase64String(l||"")):(ge(l===void 0||l instanceof Uint8Array),He.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Rp(c.code);return new L(l,c.message||"")}(o);n=new Np(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Po(t,r.document.name),i=yt(r.document.updateTime),o=r.document.createTime?yt(r.document.createTime):Y.min(),a=new Ze({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Vs(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Po(t,r.document),i=r.readTime?yt(r.readTime):Y.min(),o=xe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Vs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Po(t,r.document),i=r.removedTargetIds||[];n=new Vs([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new EI(s,i),a=r.targetId;n=new Dp(a,o)}}return n}function $I(t,e){let n;if(e instanceof ms)n={update:vu(t,e.key,e.value)};else if(e instanceof Ec)n={delete:va(t,e.key)};else if(e instanceof bn)n={update:vu(t,e.key,e.data),updateMask:qI(e.fieldMask)};else{if(!(e instanceof vI))return H();n={verify:va(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof hi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Wr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof di)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:NI(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function MI(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?yt(r.updateTime):yt(s);return i.isEqual(Y.min())&&(i=yt(s)),new mI(i,r.transformResults||[])}(n,e))):[]}function LI(t,e){return{documents:[wa(t,e.path)]}}function FI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Lp(it.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:On(u.field),direction:VI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=_a(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function UI(t){let e=OI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Mp(u);return h instanceof it&&up(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Sr(Pn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,qi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ui(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ui(d,h)}(n.endAt)),sI(e,s,o,i,a,"F",c,l)}function xI(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pn(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Pn(e.unaryFilter.field);return ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pn(e.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pn(e.unaryFilter.field);return ke.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(Pn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return it.create(e.compositeFilter.filters.map(n=>Mp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function VI(t){return AI[t]}function BI(t){return CI[t]}function jI(t){return RI[t]}function On(t){return{fieldPath:t.canonicalString()}}function Pn(t){return Ve.fromServerFormat(t.fieldPath)}function Lp(t){return t instanceof ke?function(e){if(e.op==="=="){if(iu(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NAN"}};if(su(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(iu(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NOT_NAN"}};if(su(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(e.field),op:BI(e.op),value:e.value}}}(t):t instanceof it?function(e){const n=e.getFilters().map(r=>Lp(r));return n.length===1?n[0]:{compositeFilter:{op:jI(e.op),filters:n}}}(t):H()}function qI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=He.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.fe=e}}function HI(t){const e=UI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ma(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.rn=new GI}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Ht.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class GI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Qn(0)}static Mn(){return new Qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.changes=new lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class QI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Cr(r.mutation,s,nt.empty(),Se.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=on();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=on();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Pt();const o=Ar(),a=Ar();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof bn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Cr(u.mutation,l,u.mutation.getFieldMask(),Se.now())):o.set(l.key,nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new QI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ar();let s=new we((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||nt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=wp();u.forEach(d=>{if(!i.has(d)){const p=Ap(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(on());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:vp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let s=_r();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=_r();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(l,u){return new gs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,xe.newInvalidDocument(l)))});let o=_r();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Cr(l.mutation,c,nt.empty(),Se.now()),Hi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:yt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:HI(r.bundledQuery),readTime:yt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class XI{constructor(){this.overlays=new we(B.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=on();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=on(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=on(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=on(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new II(n,r));let i=this.ls.get(n);i===void 0&&(i=se(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.fs=new qe(Ce.ds),this.ws=new qe(Ce._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ce(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ce(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new B(new pe([])),r=new Ce(n,e),s=new Ce(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new pe([])),r=new Ce(n,e),s=new Ce(n,e+1);let i=se();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ce(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||le(e.As,n.As)}static _s(e,n){return le(e.As,n.As)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new qe(Ce.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Ce(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ce(n,0),s=new Ce(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(le);return n.forEach(s=>{const i=new Ce(s,0),o=new Ce(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),S.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Ce(new B(i),0);let a=new qe(le);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return S.forEach(n.mutations,s=>{const i=new Ce(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ce(n,0),s=this.Rs.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.Ds=e,this.docs=new we(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=Pt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xe.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pt();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||B1(V1(u),r)<=0||(s.has(u.key)||Hi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){H()}Cs(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tE(this)}getSize(e){return S.resolve(this.size)}}class tE extends WI{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.persistence=e,this.xs=new lr(n=>_c(n),vc),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Ac,this.targetCount=0,this.Ms=Qn.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Qn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.$s={},this.overlays={},this.Os=new pc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new nE(this),this.indexManager=new KI,this.remoteDocumentCache=function(r){return new eE(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new zI(n),this.qs=new JI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new ZI(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new sE(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return S.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class sE extends q1{constructor(e){super(),this.currentSequenceNumber=e}}class Cc{constructor(e){this.persistence=e,this.Qs=new Ac,this.js=null}static zs(e){return new Cc(e)}get Ws(){if(this.js)return this.js;throw H()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,r=>{const s=B.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Rc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(lu(n))return S.resolve(null);let r=Ot(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ma(n,null,"F"),r=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,ma(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,s){return lu(n)||s.isEqual(Y.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Zl()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ya(n)),this.Wi(e,o,n,x1(s,-1)))})}ji(e,n){let r=new qe(yp(e));return n.forEach((s,i)=>{Hi(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Zl()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ya(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ht.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new we(le),this.Yi=new lr(i=>_c(i),vc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YI(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function aE(t,e,n,r){return new oE(t,e,n,r)}async function Up(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function cE(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(_=>{const g=c.docVersions.get(p);ge(g!==null),_.version.compareTo(g)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xp(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function lE(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(He.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(_,g,m){return _.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(n.Bs.updateTargetData(i,p))});let c=Pt(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(uE(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(Y.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function uE(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function hE(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dE(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new Vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Ea(t,e,n){const r=J(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function wu(t,e,n){const r=J(t);let s=Y.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Yi.get(l);return h!==void 0?S.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,Ot(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:se())).next(a=>(fE(r,iI(e),a),{documents:a,ir:i})))}function fE(t,e,n){let r=t.Xi.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Iu{constructor(){this.activeTargetIds=hI()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pE{constructor(){this.Hr=new Iu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Iu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Os=null;function $o(){return Os===null?Os=268435456+Math.round(2147483648*Math.random()):Os++,"0x"+Os.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class _E extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=$o(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Hn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=mE[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=$o();return new Promise((o,a)=>{const c=new C1;c.setWithCredentials(!0),c.listenOnce(k1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oo.NO_ERROR:const u=c.getResponseJson();V(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Oo.TIMEOUT:V(Fe,`RPC '${e}' ${i} timed out`),a(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const h=c.getStatus();if(V(Fe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new L(_,p.message))}else a(new L(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(T.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{V(Fe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);V(Fe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const s=$o(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=b1(),a=T1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new A1({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");V(Fe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new yE({ro:m=>{p?V(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(V(Fe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),V(Fe,`RPC '${e}' stream ${s} sending:`,m),h.send(m))},oo:()=>h.close()}),g=(m,E,I)=>{m.listen(E,k=>{try{I(k)}catch(D){setTimeout(()=>{throw D},0)}})};return g(h,Cs.EventType.OPEN,()=>{p||V(Fe,`RPC '${e}' stream ${s} transport opened.`)}),g(h,Cs.EventType.CLOSE,()=>{p||(p=!0,V(Fe,`RPC '${e}' stream ${s} transport closed`),_.wo())}),g(h,Cs.EventType.ERROR,m=>{p||(p=!0,Hn(Fe,`RPC '${e}' stream ${s} transport errored:`,m),_.wo(new L(T.UNAVAILABLE,"The operation could not be completed")))}),g(h,Cs.EventType.MESSAGE,m=>{var E;if(!p){const I=m.data[0];ge(!!I);const k=I,D=k.error||((E=k[0])===null||E===void 0?void 0:E.error);if(D){V(Fe,`RPC '${e}' stream ${s} received error:`,D);const P=D.status;let N=function(_e){const $=be[_e];if($!==void 0)return Rp($)}(P),X=D.message;N===void 0&&(N=T.INTERNAL,X="Unknown error status: "+P+" with message "+D.message),p=!0,_.wo(new L(N,X)),h.close()}else V(Fe,`RPC '${e}' stream ${s} received:`,I),_._o(I)}}),g(a,S1.STAT_EVENT,m=>{m.stat===Jl.PROXY?V(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===Jl.NOPROXY&&V(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function Mo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){return new DI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Vp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new L(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vE extends Bp{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=PI(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?yt(i.readTime):Y.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ia(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=pa(a)?{documents:LI(s,a)}:{query:FI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Op(s,i.resumeToken);const c=_a(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(Y.min())>0){o.readTime=fi(s,i.snapshotVersion.toTimestamp());const c=_a(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=xI(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ia(this.serializer),n.removeTarget=e,this.Wo(n)}}class wE extends Bp{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=MI(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.cu(r,n)}return ge(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ia(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$I(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(T.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class EE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class bE{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Tn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.vu.add(4),await _s(c),c.bu.set("Unknown"),c.vu.delete(4),await Yi(c)}(this))})}),this.bu=new EE(r,s)}}async function Yi(t){if(Tn(t))for(const e of t.Ru)await e(!0)}async function _s(t){for(const e of t.Ru)await e(!1)}function jp(t,e){const n=J(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Oc(n)?Nc(n):ur(n).Ko()&&Dc(n,e))}function qp(t,e){const n=J(t),r=ur(n);n.Au.delete(e),r.Ko()&&zp(n,e),n.Au.size===0&&(r.Ko()?r.jo():Tn(n)&&n.bu.set("Unknown"))}function Dc(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ur(t).su(e)}function zp(t,e){t.Vu.qt(e),ur(t).iu(e)}function Nc(t){t.Vu=new SI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ur(t).start(),t.bu.gu()}function Oc(t){return Tn(t)&&!ur(t).Uo()&&t.Au.size>0}function Tn(t){return J(t).vu.size===0}function Hp(t){t.Vu=void 0}async function TE(t){t.Au.forEach((e,n)=>{Dc(t,e)})}async function kE(t,e){Hp(t),Oc(t)?(t.bu.Iu(e),Nc(t)):t.bu.set("Unknown")}async function SE(t,e,n){if(t.bu.set("Online"),e instanceof Np&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pi(t,r)}else if(e instanceof Vs?t.Vu.Ht(e):e instanceof Dp?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Y.min()))try{const r=await xp(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(He.EMPTY_BYTE_STRING,l.snapshotVersion)),zp(s,a);const u=new Vt(l.target,a,c,l.sequenceNumber);Dc(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await pi(t,r)}}async function pi(t,e,n){if(!ps(e))throw e;t.vu.add(1),await _s(t),t.bu.set("Offline"),n||(n=()=>xp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Yi(t)})}function Kp(t,e){return e().catch(n=>pi(t,n,e))}async function Ji(t){const e=J(t),n=Gt(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;AE(e);)try{const s=await hE(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,CE(e,s)}catch(s){await pi(e,s)}Gp(e)&&Wp(e)}function AE(t){return Tn(t)&&t.Eu.length<10}function CE(t,e){t.Eu.push(e);const n=Gt(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Gp(t){return Tn(t)&&!Gt(t).Uo()&&t.Eu.length>0}function Wp(t){Gt(t).start()}async function RE(t){Gt(t).hu()}async function DE(t){const e=Gt(t);for(const n of t.Eu)e.uu(n.mutations)}async function NE(t,e,n){const r=t.Eu.shift(),s=bc.from(r,e,n);await Kp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ji(t)}async function OE(t,e){e&&Gt(t).ou&&await async function(n,r){if(s=r.code,bI(s)&&s!==T.ABORTED){const i=n.Eu.shift();Gt(n).Qo(),await Kp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ji(n)}var s}(t,e),Gp(t)&&Wp(t)}async function bu(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Tn(n);n.vu.add(3),await _s(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Yi(n)}async function PE(t,e){const n=J(t);e?(n.vu.delete(2),await Yi(n)):e||(n.vu.add(2),await _s(n),n.bu.set("Unknown"))}function ur(t){return t.Su||(t.Su=function(e,n,r){const s=J(e);return s.fu(),new vE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:TE.bind(null,t),ao:kE.bind(null,t),nu:SE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Oc(t)?Nc(t):t.bu.set("Unknown")):(await t.Su.stop(),Hp(t))})),t.Su}function Gt(t){return t.Du||(t.Du=function(e,n,r){const s=J(e);return s.fu(),new wE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:RE.bind(null,t),ao:OE.bind(null,t),au:DE.bind(null,t),cu:NE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ji(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Pc(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $c(t,e){if(Nt("AsyncQueue",`${e}: ${t}`),ps(t))return new L(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=_r(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new qn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Cu=new we(B.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):H():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yn{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yn(e,n,qn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.Nu=void 0,this.listeners=[]}}class ME{constructor(){this.queries=new lr(e=>mp(e),zi),this.onlineState="Unknown",this.ku=new Set}}async function LE(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new $E),s)try{i.Nu=await n.onListen(r)}catch(o){const a=$c(o,`Initialization of query '${ya(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Mc(n)}async function FE(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function UE(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&Mc(n)}function xE(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Mc(t){t.ku.forEach(e=>{e.next()})}class VE{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.key=e}}class Yp{constructor(e){this.key=e}}class BE{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=yp(e),this.ec=new qn(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Tu,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Hi(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;d&&p?d.data.isEqual(p.data)?_!==g&&(r.track({type:3,doc:p}),m=!0):this.rc(d,p)||(r.track({type:2,doc:p}),m=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),m=!0):d&&!p&&(r.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Yn(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Tu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Yp(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Qp(r))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Yn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class jE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qE{constructor(e){this.key=e,this.fc=!1}}class zE{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new lr(a=>mp(a),zi),this._c=new Map,this.mc=new Set,this.gc=new we(B.comparator),this.yc=new Map,this.Ic=new Ac,this.Tc={},this.Ec=new Map,this.Ac=Qn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function HE(t,e){const n=tb(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await dE(n.localStore,Ot(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await KE(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&jp(n.remoteStore,o)}return s}async function KE(t,e,n,r,s){t.Rc=(h,d,p)=>async function(_,g,m,E){let I=g.view.sc(m);I.zi&&(I=await wu(_.localStore,g.query,!1).then(({documents:P})=>g.view.sc(P,I)));const k=E&&E.targetChanges.get(g.targetId),D=g.view.applyChanges(I,_.isPrimaryClient,k);return Su(_,g.targetId,D.cc),D.snapshot}(t,h,d,p);const i=await wu(t.localStore,e,!0),o=new BE(e,i.ir),a=o.sc(i.documents),c=ys.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Su(t,n,l.cc);const u=new jE(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function GE(t,e){const n=J(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!zi(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ea(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qp(n.remoteStore,r.targetId),ba(n,r.targetId)}).catch(fs)):(ba(n,r.targetId),await Ea(n.localStore,r.targetId,!0))}async function WE(t,e,n){const r=nb(t);try{const s=await function(i,o){const a=J(i),c=Se.now(),l=o.reduce((d,p)=>d.add(p.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Pt(),_=se();return a.Zi.getEntries(d,l).next(g=>{p=g,p.forEach((m,E)=>{E.isValidDocument()||(_=_.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const m=[];for(const E of o){const I=_I(E,u.get(E.key).overlayedDocument);I!=null&&m.push(new bn(E.key,I,ap(I.value.mapValue),mt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(d,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:vp(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new we(le)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,n),await vs(r,s.changes),await Ji(r.remoteStore)}catch(s){const i=$c(s,"Failed to persist write");n.reject(i)}}async function Jp(t,e){const n=J(t);try{const r=await lE(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?ge(o.fc):s.removedDocuments.size>0&&(ge(o.fc),o.fc=!1))}),await vs(n,r,e)}catch(r){await fs(r)}}function ku(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Mc(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QE(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new we(B.comparator);o=o.insert(i,xe.newNoDocument(i,Y.min()));const a=se().add(i),c=new Wi(Y.min(),new Map,new we(le),o,a);await Jp(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),Lc(r)}else await Ea(r.localStore,e,!1).then(()=>ba(r,e,n)).catch(fs)}async function YE(t,e){const n=J(t),r=e.batch.batchId;try{const s=await cE(n.localStore,e);Zp(n,r,null),Xp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vs(n,s)}catch(s){await fs(s)}}async function JE(t,e,n){const r=J(t);try{const s=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ge(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Zp(r,e,n),Xp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vs(r,s)}catch(s){await fs(s)}}function Xp(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Zp(t,e,n){const r=J(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function ba(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||eg(t,r)})}function eg(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(qp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Lc(t))}function Su(t,e,n){for(const r of n)r instanceof Qp?(t.Ic.addReference(r.key,e),XE(t,r)):r instanceof Yp?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||eg(t,r.key)):H()}function XE(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.mc.add(r),Lc(t))}function Lc(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(pe.fromString(e)),r=t.Ac.next();t.yc.set(r,new qE(n)),t.gc=t.gc.insert(n,r),jp(t.remoteStore,new Vt(Ot(wc(n.path)),r,"TargetPurposeLimboResolution",pc.ct))}}async function vs(t,e,n){const r=J(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Rc.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ps(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,_)}}}(r.localStore,i))}async function ZE(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Up(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(T.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vs(n,r.er)}}function eb(t,e){const n=J(t),r=n.yc.get(e);if(r&&r.fc)return se().add(r.key);{let s=se();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function tb(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QE.bind(null,e),e.dc.nu=UE.bind(null,e.eventManager),e.dc.Pc=xE.bind(null,e.eventManager),e}function nb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JE.bind(null,e),e}class Au{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return aE(this.persistence,new iE,e.initialUser,this.serializer)}createPersistence(e){return new rE(Cc.zs,this.serializer)}createSharedClientState(e){return new pE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ku(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZE.bind(null,this.syncEngine),await PE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ME}createDatastore(e){const n=Qi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new _E(s));var s;return function(i,o,a,c){return new IE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ku(this.syncEngine,a,0),o=Eu.D()?new Eu:new gE,new bE(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new zE(r,s,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await _s(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=sp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$c(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lo(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Up(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ab(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>bu(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>bu(e.remoteStore,i)),t._onlineComponents=e}function ob(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ab(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ob(n))throw n;Hn("Error using user provided cache. Falling back to memory cache: "+n),await Lo(t,new Au)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Lo(t,new Au);return t._offlineComponents}async function tg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Cu(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Cu(t,new rb))),t._onlineComponents}function cb(t){return tg(t).then(e=>e.syncEngine)}async function Ru(t){const e=await tg(t),n=e.eventManager;return n.onListen=HE.bind(null,e.syncEngine),n.onUnlisten=GE.bind(null,e.syncEngine),n}/**
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
 */function rg(t,e,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lb(t,e,n,r){if(e===!0&&r===!0)throw new L(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nu(t){if(!B.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(B.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xi(t);throw new L(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ng((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Zi{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new D1;switch(n.type){case"firstParty":return new $1(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(V("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}function ub(t,e,n,r={}){var s;const i=(t=un(t,Zi))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ue.MOCK_USER;else{a=_m(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ue(l)}t._authCredentials=new N1(new rp(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class zt extends hr{constructor(e,n,r){super(e,n,wc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new B(e))}withConverter(e){return new zt(this.firestore,e,this._path)}}function hb(t,e,...n){if(t=Ae(t),rg("collection","path",e),t instanceof Zi){const r=pe.fromString(e,...n);return Ou(r),new zt(t,null,r)}{if(!(t instanceof We||t instanceof zt))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ou(r),new zt(t.firestore,null,r)}}function Rn(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=sp.A()),rg("doc","path",e),t instanceof Zi){const r=pe.fromString(e,...n);return Nu(r),new We(t,null,new B(r))}{if(!(t instanceof We||t instanceof zt))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Nu(r),new We(t.firestore,t instanceof zt?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Vp(this,"async_queue_retry"),this.Xc=()=>{const n=Mo();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Mo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ln;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ps(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Pc.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&H()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function $u(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Yr extends Zi{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new db,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ig(this),this._firestoreClient.terminate()}}function fb(t,e){const n=typeof t=="object"?t:Ca(),r=typeof t=="string"?t:e||"(default)",s=wn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mm("firestore");i&&ub(s,...i)}return s}function sg(t){return t._firestoreClient||ig(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ig(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new K1(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ng(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ib(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(He.fromBase64String(e))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jn(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=/^__.*__$/;class gb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new bn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ms(e,this.data,n,this.fieldTransforms)}}function ag(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class xc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return gi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ag(this.ca)&&pb.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class mb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qi(e)}ya(e,n,r,s=!1){return new xc({ca:e,methodName:n,ga:r,path:Ve.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cg(t){const e=t._freezeSettings(),n=Qi(t._databaseId);return new mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yb(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);hg("Data must be an object, but it was:",o,r);const a=lg(r,o);let c,l;if(i.merge)c=new nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=vb(e,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ib(u,d)||u.push(d)}c=new nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new gb(new Ze(a),c,l)}function _b(t,e,n,r=!1){return Vc(n,t.ya(r?4:3,e))}function Vc(t,e){if(ug(t=Ae(t)))return hg("Unsupported field value:",e,t),lg(t,e);if(t instanceof og)return function(n,r){if(!ag(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Vc(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dI(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Se.fromDate(n);return{timestampValue:fi(r.serializer,s)}}if(n instanceof Se){const s=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fi(r.serializer,s)}}if(n instanceof Uc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jn)return{bytesValue:Op(r.serializer,n._byteString)};if(n instanceof We){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sc(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Xi(n)}`)}(t,e)}function lg(t,e){const n={};return ip(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cr(t,(r,s)=>{const i=Vc(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ug(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Uc||t instanceof Jn||t instanceof We||t instanceof og)}function hg(t,e,n){if(!ug(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xi(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function vb(t,e,n){if((e=Ae(e))instanceof Fc)return e._internalPath;if(typeof e=="string")return dg(t,e);throw gi("Field path arguments must be of type string or ",t,!1,void 0,n)}const wb=new RegExp("[~\\*/\\[\\]]");function dg(t,e,n){if(e.search(wb)>=0)throw gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fc(...e.split("."))._internalPath}catch{throw gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(T.INVALID_ARGUMENT,a+t+c)}function Ib(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Eb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Eb extends fg{data(){return super.data()}}function pg(t,e){return typeof e=="string"?dg(t,e):e instanceof Fc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bc{}class Tb extends Bc{}function kb(t,e,...n){let r=[];e instanceof Bc&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof qc).length,o=s.filter(a=>a instanceof jc).length;if(i>1||i>0&&o>0)throw new L(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class jc extends Tb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jc(e,n,r)}_apply(e){const n=this._parse(e);return gg(e._query,n),new hr(e.firestore,e.converter,ga(e._query,n))}_parse(e){const n=cg(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Lu(u,l);const d=[];for(const p of u)d.push(Mu(a,s,p));h={arrayValue:{values:d}}}else h=Mu(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Lu(u,l),h=_b(o,i,u,l==="in"||l==="not-in");return ke.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class qc extends Bc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:it.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)gg(i,a),i=ga(i,a)}(e._query,n),new hr(e.firestore,e.converter,ga(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mu(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new L(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gp(e)&&n.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!B.isDocumentKey(r))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ru(t,new B(r))}if(n instanceof We)return ru(t,n._key);throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(n)}.`)}function Lu(t,e){if(!Array.isArray(t)||t.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gg(t,e){if(e.isInequality()){const r=Ic(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new L(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=pp(t);i!==null&&Sb(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Sb(t,e,n){if(!n.isEqual(e))throw new L(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ab{convertValue(e,n="none"){switch(_n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Uc(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const n=Kt(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ge(Fp(r));const s=new Kr(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(n)||Nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mg extends fg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bs extends mg{data(e={}){return super.data(e)}}class Rb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bs(this._firestore,this._userDataWriter,r.key,r,new wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Bs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new wr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Bs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new wr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Db(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Db(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class yg extends Ab{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function Fo(t,e,n){t=un(t,We);const r=un(t.firestore,Yr),s=Cb(t.converter,e,n);return _g(r,[yb(cg(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,mt.none())])}function Fu(t){return _g(un(t.firestore,Yr),[new Ec(t._key,mt.none())])}function Uu(t,...e){var n,r,s;t=Ae(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$u(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($u(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof We)l=un(t.firestore,Yr),u=wc(t._key.path),c={next:h=>{e[o]&&e[o](Nb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=un(t,hr);l=un(h.firestore,Yr),u=h._query;const d=new yg(l);c={next:p=>{e[o]&&e[o](new Rb(l,d,h,p))},error:e[o+1],complete:e[o+2]},bb(t._query)}return function(h,d,p,_){const g=new sb(_),m=new VE(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>LE(await Ru(h),m)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>FE(await Ru(h),m))}}(sg(l),u,a,c)}function _g(t,e){return function(n,r){const s=new ln;return n.asyncQueue.enqueueAndForget(async()=>WE(await cb(n),r,s)),s.promise}(sg(t),e)}function Nb(t,e,n){const r=n.docs.get(e._key),s=new yg(t);return new mg(t,s,e._key,r,new wr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ar=n})(tr),_t(new rt("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Yr(new O1(n.getProvider("auth-internal")),new L1(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),et(Xl,"3.12.2",t),et(Xl,"3.12.2","esm2017")})();const Ob={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},vg=Hh(Ob),Zt=zv(vg);D_(Zt,wd);const Jt=fb(vg);yw();const Pb=new wt,$b=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Xr(t);class r extends Error{constructor(i,o){super(o),this.code=i}}return yd(Zt,s=>{n(s?{loggedIn:!0,user:s}:t)}),{subscribe:e,async signUpWithEmail(s,i){if((i==null?void 0:i.length)<8)throw new r("auth/password-too-short");return C_(Zt,s,i)},async signInWithEmail(s,i){return R_(Zt,s,i)},async signInWithGoogle(){return Z_(Zt,Pb)},async signOut(){return P_(Zt)}}},wg=$b(),xu="/assets/default-user-a40c52dd.png";function Mb(t){let e;return{c(){e=w("i"),f(e,"class","codicon codicon-account")},m(n,r){R(n,e,r)},p:A,d(n){n&&C(e)}}}function Lb(t){let e,n;return{c(){e=w("img"),f(e,"class","profile-picture svelte-1m717b8"),Ct(e.src,n=t[0].user.photoURL??xu)||f(e,"src",n),f(e,"alt","Account")},m(r,s){R(r,e,s)},p(r,s){s&1&&!Ct(e.src,n=r[0].user.photoURL??xu)&&f(e,"src",n)},d(r){r&&C(e)}}}function Fb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E,I;o=new cm({});function k(N,X){return N[0].loggedIn?Lb:Mb}let D=k(t),P=D(t);return{c(){e=w("header"),n=w("div"),r=w("a"),r.innerHTML='<i class="codicon codicon-heart"></i>',s=M(),i=w("a"),x(o.$$.fragment),a=M(),c=w("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=M(),u=w("nav"),h=w("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=M(),p=w("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',_=M(),g=w("button"),P.c(),f(r,"title","Sponsor"),f(r,"href","https://ko-fi.com/kurozenzen"),f(r,"target","_newtab"),f(r,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(N,X){R(N,e,X),y(e,n),y(n,r),y(n,s),y(n,i),F(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,_),y(u,g),P.m(g,null),m=!0,E||(I=[j(c,"click",t[1]),j(h,"click",t[2]),j(p,"click",t[3]),j(g,"click",t[4])],E=!0)},p(N,[X]){D===(D=k(N))&&P?P.p(N,X):(P.d(1),P=D(N),P&&(P.c(),P.m(g,null)))},i(N){m||(v(o.$$.fragment,N),m=!0)},o(N){b(o.$$.fragment,N),m=!1},d(N){N&&C(e),U(o),P.d(),E=!1,De(I)}}}function Ub(t,e,n){let r;return $e(t,wg,c=>n(0,r=c)),[r,()=>Mn.navigateTo("help"),()=>Mn.navigateTo("search"),()=>Mn.navigateTo("settings"),()=>Mn.navigateTo("account")]}class xb extends Q{constructor(e){super(),W(this,e,Ub,Fb,K,{})}}const Vb="modulepreload",Bb=function(t){return"/"+t},Vu={},eo=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Bb(i),i in Vu)return;Vu[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Vb,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},js=Object.freeze(["+","-","~"]),to=t=>js.includes(t),jb=t=>{if(!to(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(js.indexOf(t)+1)%js.length;return js[n]},qb=Object.freeze({"+":"","-":"-","~":""}),zb=t=>{if(!to(t))throw TypeError("Invalid modifier passed to serializeModifier");return qb[t]},Ig=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),Eg=t=>Ig.includes(t),Bu=t=>{const e=Ig.indexOf(t);return e>=0?e:99},Hb=Object.freeze(["artist","character","copyright","source","metadata","rating"]),Kb=t=>Hb.includes(t),ws=t=>typeof t=="string"&&t!=="",no=t=>typeof t=="number",zc=(t,e)=>{let n=Object.freeze({modifier:t,name:e});return bg(n),n},bg=t=>{if(!to(t.modifier))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!ws(t.name))throw TypeError("Invalid name passed to SearchableTag constructor")},Gb=t=>`${zb(t.modifier)}${encodeURIComponent(t.name.replaceAll(" ","_"))}`,ro=(t,e,n,r)=>{if(!to(t))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!ws(e))throw TypeError("Invalid name passed to ActiveTag constructor");if(!no(n))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Eg(r))throw TypeError("Invalid type passed to ActiveTag constructor");return Object.freeze({modifier:t,name:e,count:n,type:r})},Tg=t=>zc(t.modifier,t.name),kg=(t,e,n)=>{if(!ws(t))throw new TypeError("Invalid name passed to Supertag");if(!Wb(n))throw new TypeError("Invalid description passed to Supertag");return Object.freeze({name:t,description:e,tags:[...n]})},Wb=t=>Array.isArray(t)&&t.every(e=>{try{return bg(e),!0}catch{return!1}}),Qb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Xr(t);let r,s=null,i=null;return yd(Zt,async o=>{r=o,o?s=Uu(Rn(Jt,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=kb(hb(Jt,`users/${o.uid}/supertags`));i==null||i(),i=Uu(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(kg(d.id,p.description,Object.entries(p.tags).map(_=>zc(_[1],_[0]))))}),n(d=>(d.supertags=h,d))})}):(s==null||s(),i==null||i(),s=null,i=null)}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");return Fo(Rn(Jt,`users/${r.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async updateSupertag(o,a){if(!r)throw new Error("No user");const c=await Fo(Rn(Jt,`users/${r.uid}/supertags`,a.name),{description:a.description,tags:Object.fromEntries(a.tags.map(l=>[l.name,l.modifier]))});return o===a.name?c:Fu(Rn(Jt,`users/${r.uid}/supertags`,o))},async deleteSupertag(o){if(!r)throw new Error("No user");return Fu(Rn(Jt,`users/${r.uid}/supertags`,o.name))},async setTheme(o){if(r)return Fo(Rn(Jt,"users",r.uid),{preferences:{theme:o}},{merge:!0})}}},Jr=Qb();function Yb(t){let e,n,r,s,i;return{c(){e=w("button"),n=ue(t[0]),f(e,"title",t[1]),f(e,"class",r=Qe(t[3])+" svelte-pssy25"),e.disabled=t[2]},m(o,a){R(o,e,a),y(e,n),s||(i=j(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&ve(n,o[0]),a&2&&f(e,"title",o[1]),a&8&&r!==(r=Qe(o[3])+" svelte-pssy25")&&f(e,"class",r),a&4&&(e.disabled=o[2])},i:A,o:A,d(o){o&&C(e),s=!1,i()}}}function Jb(t,e,n){let{text:r}=e,{title:s}=e,{disabled:i=!1}=e,{type:o="primary"}=e;function a(c){er.call(this,t,c)}return t.$$set=c=>{"text"in c&&n(0,r=c.text),"title"in c&&n(1,s=c.title),"disabled"in c&&n(2,i=c.disabled),"type"in c&&n(3,o=c.type)},[r,s,i,o,a]}class Hc extends Q{constructor(e){super(),W(this,e,Jb,Yb,K,{text:0,title:1,disabled:2,type:3})}}const Kc=t=>e=>{(so(e)||Sg(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},Sg=t=>t.key===" ",so=t=>t.key==="Enter",Ag=t=>{so(t)&&t.target.click()},Xb=Intl.NumberFormat("en",{notation:"compact"}),$t=t=>{if(!no(t))throw new TypeError(`Invalid value passed to formatCount: ${t}`);return Xb.format(t)};function Xn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Zb=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),ju=Object.freeze({"+":"include","-":"exclude","~":"optional"});function qu(t){let e,n=$t(t[0].count)+"",r,s;return{c(){e=ue("("),r=ue(n),s=ue(")")},m(i,o){R(i,e,o),R(i,r,o),R(i,s,o)},p(i,o){o&1&&n!==(n=$t(i[0].count)+"")&&ve(r,n)},d(i){i&&C(e),i&&C(r),i&&C(s)}}}function eT(t){let e,n=Xn(t[0].name)+"",r,s,i,o,a,c=t[0].count&&qu(t);return{c(){e=w("button"),r=ue(n),s=M(),c&&c.c(),f(e,"class",i=Qe(ju[t[0].modifier])+" svelte-qwo7il"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),de(e,"no-icon",t[0].type!=="supertag")},m(l,u){R(l,e,u),y(e,r),y(e,s),c&&c.m(e,null),o||(a=[j(e,"click",t[2]),j(e,"contextmenu",Oh(t[3]))],o=!0)},p(l,[u]){u&1&&n!==(n=Xn(l[0].name)+"")&&ve(r,n),l[0].count?c?c.p(l,u):(c=qu(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&1&&i!==(i=Qe(ju[l[0].modifier])+" svelte-qwo7il")&&f(e,"class",i),u&1&&de(e,"no-icon",l[0].type!=="supertag")},i:A,o:A,d(l){l&&C(e),c&&c.d(),o=!1,De(a)}}}function tT(t,e,n){let{tag:r}=e;const s=Mt();function i(a){er.call(this,t,a)}const o=()=>s("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,r=a.tag)},[r,s,i,o]}class Cg extends Q{constructor(e){super(),W(this,e,tT,eT,K,{tag:0})}}function nT(t){let e,n,r,s,i;const o=t[3].default,a=Ah(o,t,t[2],null);return{c(){e=w("div"),n=w("div"),a&&a.c(),f(n,"tabindex","-1"),f(n,"class","dialog svelte-13lfzv2"),f(e,"class","backdrop svelte-13lfzv2")},m(c,l){R(c,e,l),y(e,n),a&&a.m(n,null),t[4](n),r=!0,s||(i=[j(n,"click",zs(rT)),j(e,"click",t[1]),j(e,"keydown",t[5])],s=!0)},p(c,[l]){a&&a.p&&(!r||l&4)&&Dh(a,o,c,c[2],r?Rh(o,c[2],l,null):Nh(c[2]),null)},i(c){r||(v(a,c),r=!0)},o(c){b(a,c),r=!1},d(c){c&&C(e),a&&a.d(c),t[4](null),s=!1,De(i)}}}const rT=()=>{};function sT(t,e,n){let{$$slots:r={},$$scope:s}=e;const i=Mt(),o=()=>i("close");let a;Zn(()=>{a.focus()});function c(u){Me[u?"unshift":"push"](()=>{a=u,n(0,a)})}const l=u=>{u.code==="Escape"&&o()};return t.$$set=u=>{"$$scope"in u&&n(2,s=u.$$scope)},[a,o,s,r,c,l]}class Rg extends Q{constructor(e){super(),W(this,e,sT,nT,K,{})}}function zu(t,e,n){const r=t.slice();return r[9]=e[n],r}function Hu(t){let e,n;return e=new Cg({props:{tag:t[9]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function iT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E,I,k,D,P,N,X,_e,$,q=t[2],ee=[];for(let re=0;re<q.length;re+=1)ee[re]=Hu(zu(t,q,re));const ct=re=>b(ee[re],1,1,()=>{ee[re]=null});return N=new Hc({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),N.$on("click",t[8]),{c(){e=w("section"),n=w("h3"),n.textContent="Create Supertag",r=M(),s=w("button"),i=M(),o=w("div"),a=w("label"),a.textContent="Name",c=M(),l=w("input"),u=M(),h=w("div"),d=w("label"),d.textContent="Description",p=M(),_=w("input"),g=M(),m=w("div"),E=w("span"),E.textContent="Tags",I=M(),k=w("ol");for(let re=0;re<ee.length;re+=1)ee[re].c();D=M(),P=w("div"),x(N.$$.fragment),f(s,"class",Qe("codicon codicon-close")+" svelte-es7lpj"),f(a,"for","supertag-name"),f(a,"class","svelte-es7lpj"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-es7lpj"),f(o,"class","svelte-es7lpj"),f(d,"for","supertag-description"),f(d,"class","svelte-es7lpj"),f(_,"type","text"),f(_,"placeholder","Short description"),f(_,"id","supertag-description"),f(_,"class","svelte-es7lpj"),f(h,"class","svelte-es7lpj"),f(E,"class","svelte-es7lpj"),f(k,"class","svelte-es7lpj"),f(m,"class","svelte-es7lpj"),f(P,"class","last svelte-es7lpj"),f(e,"class","svelte-es7lpj")},m(re,Z){R(re,e,Z),y(e,n),y(e,r),y(e,s),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),ht(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,_),ht(_,t[1]),y(e,g),y(e,m),y(m,E),y(m,I),y(m,k);for(let te=0;te<ee.length;te+=1)ee[te]&&ee[te].m(k,null);y(e,D),y(e,P),F(N,P,null),X=!0,_e||($=[j(s,"click",t[5]),j(l,"input",t[6]),j(_,"input",t[7])],_e=!0)},p(re,Z){if(Z&1&&l.value!==re[0]&&ht(l,re[0]),Z&2&&_.value!==re[1]&&ht(_,re[1]),Z&4){q=re[2];let oe;for(oe=0;oe<q.length;oe+=1){const lt=zu(re,q,oe);ee[oe]?(ee[oe].p(lt,Z),v(ee[oe],1)):(ee[oe]=Hu(lt),ee[oe].c(),v(ee[oe],1),ee[oe].m(k,null))}for(me(),oe=q.length;oe<ee.length;oe+=1)ct(oe);ye()}const te={};Z&8&&(te.title=re[3]?"Click to create supertag":"Enter a valid name to continue"),Z&8&&(te.disabled=!re[3]),N.$set(te)},i(re){if(!X){for(let Z=0;Z<q.length;Z+=1)v(ee[Z]);v(N.$$.fragment,re),X=!0}},o(re){ee=ee.filter(Boolean);for(let Z=0;Z<ee.length;Z+=1)b(ee[Z]);b(N.$$.fragment,re),X=!1},d(re){re&&C(e),Wt(ee,re),U(N),_e=!1,De($)}}}function oT(t){let e,n;return e=new Rg({props:{$$slots:{default:[iT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,[s]){const i={};s&4111&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function aT(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=Mt(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",kg(s,i,o.map(Tg))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=ws(s))},[s,i,o,r,a,c,l,u,h]}class cT extends Q{constructor(e){super(),W(this,e,aT,oT,K,{name:0,description:1,tags:2})}}function lT(t){let e,n,r,s;return{c(){e=w("button"),f(e,"class",n=Qe(t[0])+" svelte-17m158f")},m(i,o){R(i,e,o),r||(s=j(e,"click",t[1]),r=!0)},p(i,[o]){o&1&&n!==(n=Qe(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:A,o:A,d(i){i&&C(e),r=!1,s()}}}function uT(t,e,n){let r,s,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%r.length),n(2,o=r[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,r=Object.entries(i)),t.$$.dirty&48&&n(0,s=r[a][1])},[s,c,o,i,a,r]}class Dg extends Q{constructor(e){super(),W(this,e,uT,lT,K,{options:3,value:2})}}function hT(t){let e,n,r;function s(o){t[1](o)}let i={options:Zb};return t[0]!==void 0&&(i.value=t[0]),e=new Dg({props:i}),Me.push(()=>St(e,"value",s)),{c(){x(e.$$.fragment)},m(o,a){F(e,o,a),r=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],kt(()=>n=!1)),e.$set(c)},i(o){r||(v(e.$$.fragment,o),r=!0)},o(o){b(e.$$.fragment,o),r=!1},d(o){U(e,o)}}}function dT(t,e,n){let{modifier:r}=e;function s(i){r=i,n(0,r)}return t.$$set=i=>{"modifier"in i&&n(0,r=i.modifier)},[r,s]}class fT extends Q{constructor(e){super(),W(this,e,dT,hT,K,{modifier:0})}}function pT(t){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class Gc extends Q{constructor(e){super(),W(this,e,null,pT,K,{})}}let gT=class{constructor(e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E){this.preview_url=e,this.sample_url=n,this.file_url=r,this.comment_count=s,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=_,this.tags=g,this.width=m,this.type=E,Object.freeze(this)}};const Wc=(t,e)=>{if(!Ng(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!mT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Ng=t=>{try{return new URL(t),!0}catch{return!1}},mT=t=>t===null||t instanceof AbortController,mi=(t,e,n)=>{if(!ws(t))throw TypeError("Invalid name passed to Tag constructor");if(!no(e))throw TypeError("Invalid count passed to Tag constructor");if(!Eg(n))throw TypeError("Invalid type passed to Tag constructor");return Object.freeze({name:t,count:e,type:n})},Og=(t,e)=>ro(e,t.name,t.count,t.type);let yT=null;const Pg=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),r=await Wc(`${e}${n}`,yT);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length===0)throw new Error("No tags found");return s.map(_T)}else throw s.message?new Error(s.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},$g=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),_T=t=>mi($g(t.value),vT(t.label),"ambiguous"),vT=t=>Number(t.substring(t.lastIndexOf("(")+1,t.length-1)),Mg=20;let Lg=null;const Fg=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},wT=async(t,e)=>{const n=await Wc(TT(t,e),Lg);Fg(n);try{return(await n.json()).map(ET)}catch{return[]}},IT=async t=>{const e=await Wc(kT(t),Lg);Fg(e);const n=await e.text(),s=new DOMParser().parseFromString(n,"text/xml"),i=Number(s.getElementsByTagName("posts")[0].getAttribute("count"));return ST(i),i},ET=t=>{const e=t.height,n=t.score,r=t.preview_url,s=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,_=t.comment_count,g=t.status,m=t.source;return new gT(r,o,s,Number(_),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),m,g,bT(u),Number(d),s.endsWith(".webm")||s.endsWith(".mp4")?"video":s.includes(".gif")?"gif":"image")},bT=t=>t.map(e=>mi($g(e.tag),e.count,e.type)).sort((e,n)=>Bu(e.type)-Bu(n.type)),TT=(t,e)=>{const r=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Mg}&pid=${t}`;return e===""?r:`${r}&tags=${e}`},kT=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},ST=t=>{if(!no(t))throw new Error("Unexpected response received in getPage")};let AT=class{constructor(e,n,r){CT(e),DT(n),RT(r),this.author=e,this.createdAt=n,this.content=r,Object.freeze(this)}};const CT=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},RT=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},DT=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Ku="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Gu=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Ku:`${Ku}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const r=await n.text(),i=new DOMParser().parseFromString(r,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(NT(a.attributes));return o},NT=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),r=t.getNamedItem("body");if(e==null||n==null||r==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${r}`);return new AT(e.value,n.value,r.value)};function OT(t){let e,n,r=Xn(t[0].name)+"",s,i,o,a=$t(t[0].count)+"",c,l,u,h;return{c(){e=w("li"),n=w("span"),s=ue(r),i=M(),o=w("span"),c=ue(a),f(n,"class","tag-name svelte-1gc0x48"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-1gc0x48"),de(e,"selected",t[1])},m(d,p){R(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,c),u||(h=[j(e,"click",t[2]),j(e,"keypress",Kc(t[2]))],u=!0)},p(d,[p]){p&1&&r!==(r=Xn(d[0].name)+"")&&ve(s,r),p&1&&a!==(a=$t(d[0].count)+"")&&ve(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&de(e,"selected",d[1])},i:A,o:A,d(d){d&&C(e),u=!1,De(h)}}}function PT(t,e,n){let{tag:r}=e,{selected:s=!1}=e;const i=Mt(),o=()=>i("click",r);return t.$$set=a=>{"tag"in a&&n(0,r=a.tag),"selected"in a&&n(1,s=a.selected)},[r,s,o]}class $T extends Q{constructor(e){super(),W(this,e,PT,OT,K,{tag:0,selected:1})}}function MT(t){let e,n,r;return{c(){e=w("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(s,i){R(s,e,i),n||(r=[j(e,"click",t[0]),j(e,"keyup",Kc(t[0]))],n=!0)},p:A,i:A,o:A,d(s){s&&C(e),n=!1,De(r)}}}function LT(t){return[()=>Mn.navigateTo("help")]}class FT extends Q{constructor(e){super(),W(this,e,LT,MT,K,{})}}function Wu(t,e,n){const r=t.slice();return r[16]=e[n],r[18]=n,r}function UT(t){let e,n,r,s,i=t[19].message+"",o;return{c(){e=w("div"),n=w("i"),r=M(),s=w("span"),o=ue(i),f(n,"class",Qe("codicon codicon-error")+" svelte-au4sej"),f(e,"class","suggestion-footer svelte-au4sej")},m(a,c){R(a,e,c),y(e,n),y(e,r),y(e,s),y(s,o)},p(a,c){c&2&&i!==(i=a[19].message+"")&&ve(o,i)},i:A,o:A,d(a){a&&C(e)}}}function xT(t){let e,n,r,s=t[5],i=[];for(let a=0;a<s.length;a+=1)i[a]=Qu(Wu(t,s,a));const o=a=>b(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=M(),n=w("div"),f(n,"class","suggestion-footer svelte-au4sej")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);R(a,e,c),R(a,n,c),r=!0},p(a,c){if(c&100){s=a[5];let l;for(l=0;l<s.length;l+=1){const u=Wu(a,s,l);i[l]?(i[l].p(u,c),v(i[l],1)):(i[l]=Qu(u),i[l].c(),v(i[l],1),i[l].m(e.parentNode,e))}for(me(),l=s.length;l<i.length;l+=1)o(l);ye()}},i(a){if(!r){for(let c=0;c<s.length;c+=1)v(i[c]);r=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);r=!1},d(a){Wt(i,a),a&&C(e),a&&C(n)}}}function Qu(t){let e,n;return e=new $T({props:{tag:t[16],selected:t[18]===t[2]}}),e.$on("click",function(){vi(t[6](t[16]))&&t[6](t[16]).apply(this,arguments)}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){t=r;const i={};s&32&&(i.tag=t[16]),s&4&&(i.selected=t[18]===t[2]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function VT(t){let e,n,r;return n=new Gc({}),{c(){e=w("div"),x(n.$$.fragment),f(e,"class","suggestion-footer svelte-au4sej")},m(s,i){R(s,e,i),F(n,e,null),r=!0},p:A,i(s){r||(v(n.$$.fragment,s),r=!0)},o(s){b(n.$$.fragment,s),r=!1},d(s){s&&C(e),U(n)}}}function BT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g;function m(k){t[10](k)}let E={};t[3]!==void 0&&(E.modifier=t[3]),o=new fT({props:E}),Me.push(()=>St(o,"modifier",m)),l=new FT({});let I={ctx:t,current:null,token:null,hasCatch:!0,pending:VT,then:xT,catch:UT,error:19,blocks:[,,,]};return Hs(d=t[1],I),{c(){e=w("div"),n=w("i"),r=M(),s=w("input"),i=M(),x(o.$$.fragment),c=M(),x(l.$$.fragment),u=M(),h=w("ol"),I.block.c(),f(n,"class","codicon codicon-search spaced svelte-au4sej"),f(s,"type","text"),f(s,"name","searchbar"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-au4sej"),f(h,"class","svelte-au4sej"),de(h,"open",t[4]),f(e,"class","searchbar svelte-au4sej"),de(e,"open",t[4])},m(k,D){R(k,e,D),y(e,n),y(e,r),y(e,s),ht(s,t[0]),y(e,i),F(o,e,null),y(e,c),F(l,e,null),y(e,u),y(e,h),I.block.m(h,I.anchor=null),I.mount=()=>h,I.anchor=null,p=!0,_||(g=[j(s,"input",t[7]),j(s,"focus",jT),j(s,"blur",t[8]),j(s,"keydown",t[9]),j(e,"blur",t[11])],_=!0)},p(k,[D]){t=k,D&1&&s.value!==t[0]&&ht(s,t[0]);const P={};!a&&D&8&&(a=!0,P.modifier=t[3],kt(()=>a=!1)),o.$set(P),I.ctx=t,D&2&&d!==(d=t[1])&&Hs(d,I)||Ph(I,t,D),(!p||D&16)&&de(h,"open",t[4]),(!p||D&16)&&de(e,"open",t[4])},i(k){p||(v(o.$$.fragment,k),v(l.$$.fragment,k),v(I.block),p=!0)},o(k){b(o.$$.fragment,k),b(l.$$.fragment,k);for(let D=0;D<3;D+=1){const P=I.blocks[D];b(P)}p=!1},d(k){k&&C(e),U(o),U(l),I.block.d(),I.token=null,I=null,_=!1,De(g)}}}const jT=t=>{t.target.scrollIntoView({block:"center",behavior:"smooth"})};function qT(t,e,n){let r;$e(t,Jr,k=>n(12,r=k));const s=Mt();let i,o="",a=0,c="+",l=!1,u=[];const h=k=>()=>{s("pick",Og(k,c)),p()};async function d(k){n(4,l=!0),n(5,u=[...r.supertags.filter(D=>D.name.toLowerCase().includes(k.toLowerCase())).map(D=>mi(D.name,Object.keys(D.tags).length,"supertag")),...await Pg(k)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function _(){o=this.value,n(0,o)}const g=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(4,l=!1)},m=k=>{so(k)?h(u.length>a?u[a]:mi(o,0,"ambiguous"))():k.code==="Escape"?k.target.blur():k.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):k.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)};function E(k){c=k,n(3,c)}const I=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,_,g,m,E,I]}class zT extends Q{constructor(e){super(),W(this,e,qT,BT,K,{})}}const Ug=JSON.parse,xg=JSON.stringify,Vg=(t,e,n=xg,r=Ug)=>{const s=Bg(t,r,e),i=Xr(s??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},io=(t,e,n=xg,r=Ug)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Bg(t,r):null,o=Xr(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Bg=(t,e,n)=>{try{const r=e(localStorage.getItem(t));return typeof r=="object"&&typeof n=="object"?{...n,...r}:r}catch{return null}};function HT(){const t=[],{subscribe:e,update:n,set:r}=io("activeTags",t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:async s=>{let i=ro("+",s,0,"general");try{const o=await Pg(s);o.length>0&&(i=Og(o[0],"+"))}catch{}n(o=>(o.push(i),o))},removeByIndex:s=>n(i=>(i.splice(s,1),i))}}const At=HT(),KT="/assets/shironeko-confused-4071d5b2.png";function GT(t){let e,n,r,s,i;return{c(){e=w("div"),n=w("img"),s=M(),i=w("span"),i.textContent="No results found",Ct(n.src,r=KT)||f(n,"src",r),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){R(o,e,a),y(e,n),y(e,s),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class WT extends Q{constructor(e){super(),W(this,e,null,GT,K,{})}}const QT=()=>{const{subscribe:e,set:n}=io("count",null);return{subscribe:e,set:n,reset(){n(0)}}},oo=QT(),YT=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),Yu=t=>YT[t]??"";function JT(t){let e,n=Xn(t[0].name)+"",r,s,i,o;return{c(){e=w("button"),r=ue(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",s=Qe(Yu(t[0].type))+" svelte-d6seti"),de(e,"active",t[3]),de(e,"icon",t[2]),de(e,"supertag",t[4])},m(a,c){R(a,e,c),y(e,r),i||(o=j(e,"click",function(){vi(t[4]?Ju:t[8])&&(t[4]?Ju:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=Xn(t[0].name)+"")&&ve(r,n),c&1&&s!==(s=Qe(Yu(t[0].type))+" svelte-d6seti")&&f(e,"class",s),c&9&&de(e,"active",t[3]),c&5&&de(e,"icon",t[2]),c&17&&de(e,"supertag",t[4])},i:A,o:A,d(a){a&&C(e),i=!1,o()}}}const Ju=()=>{};function XT(t,e,n){let r,s,i,o,a,c,l;$e(t,At,d=>n(6,c=d)),$e(t,Jr,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?At.removeByIndex(s):At.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,r=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,s=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=r.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=s>=0),t.$$.dirty&1&&n(2,a=Kb(u.type))},[u,s,a,o,i,r,c,l,h]}class ZT extends Q{constructor(e){super(),W(this,e,XT,JT,K,{tag:0})}}function ek(t){let e,n,r,s,i;return{c(){e=w("a"),n=w("i"),r=M(),s=ue(t[1]),f(n,"class","codicon codicon-link"),f(e,"href",i=t[0].toString()),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(o,a){R(o,e,a),y(e,n),y(e,r),y(e,s)},p(o,[a]){a&2&&ve(s,o[1]),a&1&&i!==(i=o[0].toString())&&f(e,"href",i)},i:A,o:A,d(o){o&&C(e)}}}function tk(t,e,n){let r,{url:s}=e;return t.$$set=i=>{"url"in i&&n(0,s=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=s.hostname.replace(/^www./,""))},[s,r]}class nk extends Q{constructor(e){super(),W(this,e,tk,ek,K,{url:0})}}function Xu(t){let e,n;return e=new nk({props:{url:t[0]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.url=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function rk(t){let e,n,r=t[0]&&Xu(t);return{c(){r&&r.c(),e=ot()},m(s,i){r&&r.m(s,i),R(s,e,i),n=!0},p(s,[i]){s[0]?r?(r.p(s,i),i&1&&v(r,1)):(r=Xu(s),r.c(),v(r,1),r.m(e.parentNode,e)):r&&(me(),b(r,1,1,()=>{r=null}),ye())},i(s){n||(v(r),n=!0)},o(s){b(r),n=!1},d(s){r&&r.d(s),s&&C(e)}}}function sk(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(1,s=i.source)},t.$$.update=()=>{t.$$.dirty&2&&n(0,r=Ng(s)?new URL(s):null)},[r,s]}class ik extends Q{constructor(e){super(),W(this,e,sk,rk,K,{source:1})}}function ok(t){let e,n;const r=t[1].default,s=Ah(r,t,t[0],null);return{c(){e=w("div"),s&&s.c(),f(e,"class","svelte-11wqnx2")},m(i,o){R(i,e,o),s&&s.m(e,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&1)&&Dh(s,r,i,i[0],n?Rh(r,i[0],o,null):Nh(i[0]),null)},i(i){n||(v(s,i),n=!0)},o(i){b(s,i),n=!1},d(i){i&&C(e),s&&s.d(i)}}}function ak(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class qs extends Q{constructor(e){super(),W(this,e,ak,ok,K,{})}}const Zu=6e4,yi=t=>{if(!ck(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Zu,r=new Date().getTime()/Zu-e;if(r<1)return"just now";if(r<60)return Dn(r,"minute");const s=r/60;if(s<24)return Dn(s,"hour");const i=s/24;if(i<7)return Dn(i,"day");if(i<30.5)return Dn(i/7,"week");if(i<365.25)return Dn(i/30.5,"month");const o=i/365.25;return Dn(o,"year")},ck=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",Dn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function lk(t){let e,n=yi(t[0])+"",r;return{c(){e=w("span"),r=ue(n),f(e,"class","svelte-1vg7vp7")},m(s,i){R(s,e,i),y(e,r)},p(s,[i]){i&1&&n!==(n=yi(s[0])+"")&&ve(r,n)},i:A,o:A,d(s){s&&C(e)}}}function uk(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class hk extends Q{constructor(e){super(),W(this,e,uk,lk,K,{value:0})}}function dk(t){let e,n=$t(t[0])+"",r,s,i;return{c(){e=w("span"),r=ue(n),s=M(),i=w("i"),f(i,"class","codicon codicon-heart svelte-1fycl9d"),f(e,"class","svelte-1fycl9d")},m(o,a){R(o,e,a),y(e,r),y(e,s),y(e,i)},p(o,[a]){a&1&&n!==(n=$t(o[0])+"")&&ve(r,n)},i:A,o:A,d(o){o&&C(e)}}}function fk(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class pk extends Q{constructor(e){super(),W(this,e,fk,dk,K,{value:0})}}function gk(t){let e,n,r=t[0].author+"",s,i,o,a=yi(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=w("div"),n=w("span"),s=ue(r),i=M(),o=w("span"),c=ue(a),l=M(),u=w("span"),d=ue(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,_){R(p,e,_),y(e,n),y(n,s),y(e,i),y(e,o),y(o,c),y(e,l),y(e,u),y(u,d)},p(p,[_]){_&1&&r!==(r=p[0].author+"")&&ve(s,r),_&1&&a!==(a=yi(p[0].createdAt)+"")&&ve(c,a),_&1&&h!==(h=p[0].content+"")&&ve(d,h)},i:A,o:A,d(p){p&&C(e)}}}function mk(t,e,n){let{comment:r}=e;return t.$$set=s=>{"comment"in s&&n(0,r=s.comment)},[r]}class yk extends Q{constructor(e){super(),W(this,e,mk,gk,K,{comment:0})}}function _k(t){let e,n,r;return{c(){e=w("a"),n=w("i"),r=ue(" File"),f(n,"class","codicon codicon-link-external"),f(e,"href",t[0]),f(e,"target","_newtab"),f(e,"class","svelte-14c4m91")},m(s,i){R(s,e,i),y(e,n),y(e,r)},p(s,[i]){i&1&&f(e,"href",s[0])},i:A,o:A,d(s){s&&C(e)}}}function vk(t,e,n){let{url:r}=e;return t.$$set=s=>{"url"in s&&n(0,r=s.url)},[r]}class wk extends Q{constructor(e){super(),W(this,e,vk,_k,K,{url:0})}}function eh(t,e,n){const r=t.slice();return r[8]=e[n],r}function th(t,e,n){const r=t.slice();return r[4]=e[n],r}function Ik(t){let e,n;return e=new pk({props:{value:t[0].score}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].score),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Ek(t){let e,n;return e=new hk({props:{value:t[0].change}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].change),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function bk(t){let e,n;return e=new wk({props:{url:t[0].file_url}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.url=r[0].file_url),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function nh(t){let e,n,r,s;return r=new qs({props:{$$slots:{default:[Tk]},$$scope:{ctx:t}}}),{c(){e=w("span"),e.textContent="•",n=M(),x(r.$$.fragment),f(e,"class","svelte-9eek1l")},m(i,o){R(i,e,o),R(i,n,o),F(r,i,o),s=!0},p(i,o){const a={};o&2049&&(a.$$scope={dirty:o,ctx:i}),r.$set(a)},i(i){s||(v(r.$$.fragment,i),s=!0)},o(i){b(r.$$.fragment,i),s=!1},d(i){i&&C(e),i&&C(n),U(r,i)}}}function Tk(t){let e,n;return e=new ik({props:{source:t[0].source}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.source=r[0].source),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function kk(t){let e,n,r,s={ctx:t,current:null,token:null,hasCatch:!1,pending:Nk,then:Ck,catch:Ak,value:7,blocks:[,,,]};return Hs(n=Gu(t[0].id),s),{c(){e=ot(),s.block.c()},m(i,o){R(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,r=!0},p(i,o){t=i,s.ctx=t,o&1&&n!==(n=Gu(t[0].id))&&Hs(n,s)||Ph(s,t,o)},i(i){r||(v(s.block),r=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];b(a)}r=!1},d(i){i&&C(e),s.block.d(i),s.token=null,s=null}}}function Sk(t){let e,n,r=t[0].tags,s=[];for(let o=0;o<r.length;o+=1)s[o]=sh(th(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=w("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","tags svelte-9eek1l")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&1){r=o[0].tags;let c;for(c=0;c<r.length;c+=1){const l=th(o,r,c);s[c]?(s[c].p(l,a),v(s[c],1)):(s[c]=sh(l),s[c].c(),v(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)i(c);ye()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)v(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Wt(s,o)}}}function Ak(t){return{c:A,m:A,p:A,i:A,o:A,d:A}}function Ck(t){let e,n,r,s;const i=[Dk,Rk],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=ot()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function Rk(t){let e;return{c(){e=w("span"),e.textContent="Comments for this post are not available",f(e,"class","no-comments svelte-9eek1l")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}function Dk(t){let e,n,r=t[7],s=[];for(let o=0;o<r.length;o+=1)s[o]=rh(eh(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=w("ul");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","comments svelte-9eek1l")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&1){r=o[7];let c;for(c=0;c<r.length;c+=1){const l=eh(o,r,c);s[c]?(s[c].p(l,a),v(s[c],1)):(s[c]=rh(l),s[c].c(),v(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)i(c);ye()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)v(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Wt(s,o)}}}function rh(t){let e,n;return e=new yk({props:{comment:t[8]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.comment=r[8]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Nk(t){let e,n;return e=new Gc({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function sh(t){let e,n;return e=new ZT({props:{tag:t[4]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=r[4]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Ok(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m=t[0].tags.length+"",E,I,k,D,P=(t[0].comment_count||"No")+"",N,X,_e,$,q,ee,ct,re;r=new qs({props:{$$slots:{default:[Ik]},$$scope:{ctx:t}}}),a=new qs({props:{$$slots:{default:[Ek]},$$scope:{ctx:t}}}),h=new qs({props:{$$slots:{default:[bk]},$$scope:{ctx:t}}});let Z=t[0].source&&nh(t);const te=[Sk,kk],oe=[];function lt(ae,Ie){return ae[1]==="tags"?0:1}return $=lt(t),q=oe[$]=te[$](t),{c(){e=w("div"),n=w("div"),x(r.$$.fragment),s=M(),i=w("span"),i.textContent="•",o=M(),x(a.$$.fragment),c=M(),l=w("span"),l.textContent="•",u=M(),x(h.$$.fragment),d=M(),Z&&Z.c(),p=M(),_=w("div"),g=w("button"),E=ue(m),I=ue(" tags"),k=M(),D=w("button"),N=ue(P),X=ue(" comments"),_e=M(),q.c(),f(i,"class","svelte-9eek1l"),f(l,"class","svelte-9eek1l"),f(n,"class","summary svelte-9eek1l"),f(g,"class","codicon codicon-tag svelte-9eek1l"),de(g,"active",t[1]==="tags"),f(D,"class","codicon codicon-comment-discussion svelte-9eek1l"),de(D,"active",t[1]==="comments"),f(_,"class","tabs svelte-9eek1l"),f(e,"class","details svelte-9eek1l")},m(ae,Ie){R(ae,e,Ie),y(e,n),F(r,n,null),y(n,s),y(n,i),y(n,o),F(a,n,null),y(n,c),y(n,l),y(n,u),F(h,n,null),y(n,d),Z&&Z.m(n,null),y(e,p),y(e,_),y(_,g),y(g,E),y(g,I),y(_,k),y(_,D),y(D,N),y(D,X),y(e,_e),oe[$].m(e,null),ee=!0,ct||(re=[j(g,"click",t[2]),j(D,"click",t[3])],ct=!0)},p(ae,[Ie]){const ne={};Ie&2049&&(ne.$$scope={dirty:Ie,ctx:ae}),r.$set(ne);const Is={};Ie&2049&&(Is.$$scope={dirty:Ie,ctx:ae}),a.$set(Is);const Yc={};Ie&2049&&(Yc.$$scope={dirty:Ie,ctx:ae}),h.$set(Yc),ae[0].source?Z?(Z.p(ae,Ie),Ie&1&&v(Z,1)):(Z=nh(ae),Z.c(),v(Z,1),Z.m(n,null)):Z&&(me(),b(Z,1,1,()=>{Z=null}),ye()),(!ee||Ie&1)&&m!==(m=ae[0].tags.length+"")&&ve(E,m),(!ee||Ie&2)&&de(g,"active",ae[1]==="tags"),(!ee||Ie&1)&&P!==(P=(ae[0].comment_count||"No")+"")&&ve(N,P),(!ee||Ie&2)&&de(D,"active",ae[1]==="comments");let ao=$;$=lt(ae),$===ao?oe[$].p(ae,Ie):(me(),b(oe[ao],1,1,()=>{oe[ao]=null}),ye(),q=oe[$],q?q.p(ae,Ie):(q=oe[$]=te[$](ae),q.c()),v(q,1),q.m(e,null))},i(ae){ee||(v(r.$$.fragment,ae),v(a.$$.fragment,ae),v(h.$$.fragment,ae),v(Z),v(q),ee=!0)},o(ae){b(r.$$.fragment,ae),b(a.$$.fragment,ae),b(h.$$.fragment,ae),b(Z),b(q),ee=!1},d(ae){ae&&C(e),U(r),U(a),U(h),Z&&Z.d(),oe[$].d(),ct=!1,De(re)}}}function Pk(t,e,n){let{post:r}=e,s="tags";const i=()=>{n(1,s="tags")},o=()=>{n(1,s="comments")};return t.$$set=a=>{"post"in a&&n(0,r=a.post)},[r,s,i,o]}class $k extends Q{constructor(e){super(),W(this,e,Pk,Ok,K,{post:0})}}const _i=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function Mk(t){let e,n,r,s,i,o,a,c;return{c(){e=w("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-u6tlyz")},m(l,u){R(l,e,u),t[3](e),a||(c=[j(e,"click",t[2]),j(e,"keydown",Ag)],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,De(c)}}}function Lk(t,e,n){let{post:r}=e,s;Zn(()=>_i.observe(s)),Ii(()=>_i.unobserve(s));function i(a){er.call(this,t,a)}function o(a){Me[a?"unshift":"push"](()=>{s=a,n(1,s)})}return t.$$set=a=>{"post"in a&&n(0,r=a.post)},[r,s,i,o]}let Fk=class extends Q{constructor(e){super(),W(this,e,Lk,Mk,K,{post:0})}};const Uk="/assets/play-f2f6faca.svg",xk="/assets/load-8440afed.svg",Vk="/assets/pause-6f7851a2.svg";function Bk(t){let e,n;return{c(){e=w("img"),Ct(e.src,n=Uk)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Yg(e,"margin-left","4px")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function jk(t){let e,n;return{c(){e=w("img"),Ct(e.src,n=Vk)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function qk(t){let e,n;return{c(){e=w("img"),Ct(e.src,n=xk)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(r,s){R(r,e,s)},p:A,d(r){r&&C(e)}}}function zk(t){let e,n,r,s,i;function o(l,u){return l[1]?qk:l[0]?jk:Bk}let a=o(t),c=a(t);return{c(){e=w("button"),n=w("div"),c.c(),f(n,"class","circle svelte-142dl5p"),f(e,"class",r=Qe(t[3].class)+" svelte-142dl5p"),de(e,"play",t[0]&&!t[1])},m(l,u){R(l,e,u),y(e,n),c.m(n,null),s||(i=j(e,"click",zs(t[2])),s=!0)},p(l,[u]){a===(a=o(l))&&c?c.p(l,u):(c.d(1),c=a(l),c&&(c.c(),c.m(n,null))),u&8&&r!==(r=Qe(l[3].class)+" svelte-142dl5p")&&f(e,"class",r),u&11&&de(e,"play",l[0]&&!l[1])},i:A,o:A,d(l){l&&C(e),c.d(),s=!1,i()}}}function Hk(t,e,n){let{playing:r}=e,{loading:s}=e;const i=()=>{n(1,s=!0),n(0,r=!r)};return t.$$set=o=>{n(3,e=Vo(Vo({},e),Xc(o))),"playing"in o&&n(0,r=o.playing),"loading"in o&&n(1,s=o.loading)},e=Xc(e),[r,s,i,e]}class jg extends Q{constructor(e){super(),W(this,e,Hk,zk,K,{playing:0,loading:1})}}function Kk(t){let e,n,r,s,i,o,a,c,l,u,h,d,p;function _(E){t[10](E)}function g(E){t[11](E)}let m={class:"center"};return t[2]!==void 0&&(m.playing=t[2]),t[3]!==void 0&&(m.loading=t[3]),a=new jg({props:m}),Me.push(()=>St(a,"playing",_)),Me.push(()=>St(a,"loading",g)),{c(){e=w("div"),n=w("img"),o=M(),x(a.$$.fragment),f(n,"class","media-img svelte-13nzi3z"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",r=t[0].id.toString()),f(n,"width",s=t[0].width),f(n,"height",i=t[0].height),f(n,"tabindex","0"),f(e,"class","container svelte-13nzi3z"),f(e,"style",u=`aspect-ratio: ${t[0].width} / ${t[0].height}`)},m(E,I){R(E,e,I),y(e,n),t[8](n),y(e,o),F(a,e,null),h=!0,d||(p=[j(n,"click",t[7]),j(n,"keydown",Ag),j(n,"load",t[9])],d=!0)},p(E,[I]){(!h||I&16)&&f(n,"data-src",E[4]),(!h||I&1&&r!==(r=E[0].id.toString()))&&f(n,"alt",r),(!h||I&1&&s!==(s=E[0].width))&&f(n,"width",s),(!h||I&1&&i!==(i=E[0].height))&&f(n,"height",i);const k={};!c&&I&4&&(c=!0,k.playing=E[2],kt(()=>c=!1)),!l&&I&8&&(l=!0,k.loading=E[3],kt(()=>l=!1)),a.$set(k),(!h||I&1&&u!==(u=`aspect-ratio: ${E[0].width} / ${E[0].height}`))&&f(e,"style",u)},i(E){h||(v(a.$$.fragment,E),h=!0)},o(E){b(a.$$.fragment,E),h=!1},d(E){E&&C(e),t[8](null),U(a),d=!1,De(p)}}}function Gk(t,e,n){let r,s,i,{post:o}=e;Mt();let a,c=!1,l=!1;Zn(()=>_i.observe(a)),Ii(()=>_i.unobserve(a));function u(g){er.call(this,t,g)}function h(g){Me[g?"unshift":"push"](()=>{a=g,n(1,a),n(2,c),n(6,s),n(5,r),n(0,o)})}const d=()=>n(3,l=!1);function p(g){c=g,n(2,c)}function _(g){l=g,n(3,l)}return t.$$set=g=>{"post"in g&&n(0,o=g.post)},t.$$.update=()=>{t.$$.dirty&1&&n(5,r=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(6,s=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&100&&n(4,i=c?s:r),t.$$.dirty&102&&a&&n(1,a.src=c?s:r,a)},[o,a,c,l,i,r,s,u,h,d,p,_]}class Wk extends Q{constructor(e){super(),W(this,e,Gk,Kk,K,{post:0})}}function ih(t){let e,n,r,s=!0,i=!1,o,a,c,l=oh(t[15])+"",u,h,d,p,_,g,m,E,I,k,D;function P(){cancelAnimationFrame(o),e.paused||(o=Wg(P),i=!0),t[24].call(e)}function N($){t[29]($)}function X($){t[30]($)}let _e={class:"center"};return t[5]!==void 0&&(_e.playing=t[5]),t[6]!==void 0&&(_e.loading=t[6]),g=new jg({props:_e}),Me.push(()=>St(g,"playing",N)),Me.push(()=>St(g,"loading",X)),{c(){e=w("video"),a=M(),c=w("span"),u=ue(l),h=M(),d=w("input"),_=M(),x(g.$$.fragment),f(e,"poster",t[1]),e.loop=t[4],Ct(e.src,n=t[0])||f(e,"src",n),f(e,"preload","metadata"),f(e,"style",r=`aspect-ratio: ${t[2]} / ${t[3]}`),f(e,"class","svelte-1ghkjuv"),t[8]===void 0&&Dr(()=>t[25].call(e)),f(c,"class","svelte-1ghkjuv"),de(c,"hide",t[12]),f(d,"type","range"),f(d,"min",0),f(d,"max",t[8]),f(d,"step",.0166666),f(d,"style",p=`background-image: linear-gradient(90deg, var(--accent) ${t[13]}%, var(--background-2) ${t[13]}%);}`),f(d,"class","svelte-1ghkjuv"),de(d,"hide",t[12])},m($,q){R($,e,q),t[22](e),R($,a,q),R($,c,q),y(c,u),R($,h,q),R($,d,q),ht(d,t[7]),R($,_,q),F(g,$,q),I=!0,k||(D=[j(e,"play",t[23]),j(e,"pause",t[23]),j(e,"timeupdate",P),j(e,"durationchange",t[25]),j(e,"waiting",t[19]),j(e,"playing",t[20]),j(e,"pause",t[20]),j(e,"ended",t[26]),j(e,"dblclick",zs(Oh(t[27]))),j(d,"change",t[28]),j(d,"input",t[28]),j(d,"click",zs(Yk))],k=!0)},p($,q){(!I||q[0]&2)&&f(e,"poster",$[1]),(!I||q[0]&16)&&(e.loop=$[4]),(!I||q[0]&1&&!Ct(e.src,n=$[0]))&&f(e,"src",n),(!I||q[0]&12&&r!==(r=`aspect-ratio: ${$[2]} / ${$[3]}`))&&f(e,"style",r),q[0]&16384&&s!==(s=$[14])&&e[s?"pause":"play"](),!i&&q[0]&128&&!isNaN($[7])&&(e.currentTime=$[7]),i=!1,(!I||q[0]&32768)&&l!==(l=oh($[15])+"")&&ve(u,l),(!I||q[0]&4096)&&de(c,"hide",$[12]),(!I||q[0]&256)&&f(d,"max",$[8]),(!I||q[0]&8192&&p!==(p=`background-image: linear-gradient(90deg, var(--accent) ${$[13]}%, var(--background-2) ${$[13]}%);}`))&&f(d,"style",p),q[0]&128&&ht(d,$[7]),(!I||q[0]&4096)&&de(d,"hide",$[12]);const ee={};!m&&q[0]&32&&(m=!0,ee.playing=$[5],kt(()=>m=!1)),!E&&q[0]&64&&(E=!0,ee.loading=$[6],kt(()=>E=!1)),g.$set(ee)},i($){I||(v(g.$$.fragment,$),I=!0)},o($){b(g.$$.fragment,$),I=!1},d($){$&&C(e),t[22](null),$&&C(a),$&&C(c),$&&C(h),$&&C(d),$&&C(_),U(g,$),k=!1,De(D)}}}function Qk(t){let e,n,r,s,i,o=t[9]&&ih(t);return{c(){e=w("div"),o&&o.c(),f(e,"tabindex","0"),f(e,"class","player svelte-1ghkjuv"),f(e,"style",n=`aspect-ratio: ${t[2]} / ${t[3]}`)},m(a,c){R(a,e,c),o&&o.m(e,null),t[31](e),r=!0,s||(i=[j(e,"click",t[21]),j(e,"keydown",t[18])],s=!0)},p(a,c){a[9]?o?(o.p(a,c),c[0]&512&&v(o,1)):(o=ih(a),o.c(),v(o,1),o.m(e,null)):o&&(me(),b(o,1,1,()=>{o=null}),ye()),(!r||c[0]&12&&n!==(n=`aspect-ratio: ${a[2]} / ${a[3]}`))&&f(e,"style",n)},i(a){r||(v(o),r=!0)},o(a){b(o),r=!1},d(a){a&&C(e),o&&o.d(),t[31](null),s=!1,De(i)}}}const oh=t=>{const e=Math.floor(t),n=e%60,r=Math.floor(e/60);return`${ah(r)}:${ah(n)}`},ah=t=>`${t<10?"0":""}${t}`,ch=5,Yk=()=>{};function Jk(t,e,n){let r,s,i,o,{src:a}=e,{poster:c}=e,{width:l}=e,{height:u}=e,{loop:h}=e,d,p,_=!1,g=!1,m=0,E=0,I=!1;const k=()=>{n(7,m=Math.max(0,m-ch))},D=()=>{n(7,m=Math.min(E,m+ch))},P=ne=>{so(ne)?ne.target.click():Sg(ne)?(ne.preventDefault(),n(5,_=!_)):ne.key==="ArrowLeft"?k():ne.key==="ArrowRight"&&D()},N=new IntersectionObserver(ne=>{for(const Is of ne)Is.isIntersecting?n(9,I=!0):p&&(n(5,_=!1),n(6,g=!1),p.addEventListener("error",()=>{n(9,I=!1)},{once:!0}),n(11,p.src="",p))},{rootMargin:"0px"});Zn(()=>N.observe(d)),Ii(()=>N.unobserve(d));const X=()=>{n(6,g=!0)},_e=()=>{n(6,g=!1)};function $(ne){er.call(this,t,ne)}function q(ne){Me[ne?"unshift":"push"](()=>{p=ne,n(11,p)})}function ee(){s=this.paused,n(14,s),n(5,_),n(9,I)}function ct(){m=this.currentTime,n(7,m)}function re(){E=this.duration,n(8,E)}const Z=()=>{h||(n(6,g=!1),n(5,_=!1))},te=ne=>{ne.offsetX<ne.target.clientWidth/2?k():D()};function oe(){m=Ta(this.value),n(7,m)}function lt(ne){_=ne,n(5,_),n(9,I)}function ae(ne){g=ne,n(6,g)}function Ie(ne){Me[ne?"unshift":"push"](()=>{d=ne,n(10,d)})}return t.$$set=ne=>{"src"in ne&&n(0,a=ne.src),"poster"in ne&&n(1,c=ne.poster),"width"in ne&&n(2,l=ne.width),"height"in ne&&n(3,u=ne.height),"loop"in ne&&n(4,h=ne.loop)},t.$$.update=()=>{t.$$.dirty[0]&384&&n(15,r=E-m),t.$$.dirty[0]&544&&n(5,_=I&&_),t.$$.dirty[0]&32&&n(14,s=!_),t.$$.dirty[0]&384&&n(13,i=m/E*98+1),t.$$.dirty[0]&96&&n(12,o=_&&!g)},[a,c,l,u,h,_,g,m,E,I,d,p,o,i,s,r,k,D,P,X,_e,$,q,ee,ct,re,Z,te,oe,lt,ae,Ie]}class Xk extends Q{constructor(e){super(),W(this,e,Jk,Qk,K,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function Zk(t){let e,n;return e=new Wk({props:{post:t[0]}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function eS(t){let e,n;return e=new Xk({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(uh)}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.src=r[0].file_url),s&1&&(i.poster=r[0].sample_url),s&1&&(i.width=r[0].width),s&1&&(i.height=r[0].height),s&1&&(i.loop=r[0].tags.some(uh)),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function tS(t){let e,n;return e=new Fk({props:{post:t[0]}}),e.$on("click",t[2]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function lh(t){let e,n;return e=new $k({props:{post:t[0]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function nS(t){let e,n,r,s,i;const o=[tS,eS,Zk],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),r=a[n]=o[n](t);let l=t[1]&&lh(t);return{c(){e=w("div"),r.c(),s=M(),l&&l.c(),f(e,"class","svelte-1u2abt5")},m(u,h){R(u,e,h),a[n].m(e,null),y(e,s),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(me(),b(a[d],1,1,()=>{a[d]=null}),ye(),r=a[n],r?r.p(u,h):(r=a[n]=o[n](u),r.c()),v(r,1),r.m(e,s)),u[1]?l?(l.p(u,h),h&2&&v(l,1)):(l=lh(u),l.c(),v(l,1),l.m(e,null)):l&&(me(),b(l,1,1,()=>{l=null}),ye())},i(u){i||(v(r),v(l),i=!0)},o(u){b(r),b(l),i=!1},d(u){u&&C(e),a[n].d(),l&&l.d()}}}const uh=t=>t.name=="loop";function rS(t,e,n){let{post:r}=e,s=!1;const i=()=>{n(1,s=!s)};return t.$$set=o=>{"post"in o&&n(0,r=o.post)},[r,s,i]}class sS extends Q{constructor(e){super(),W(this,e,rS,nS,K,{post:0})}}function hh(t,e,n){const r=t.slice();return r[1]=e[n],r}function dh(t){let e,n;return e=new sS({props:{post:t[1]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function iS(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=dh(hh(t,r,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){e=w("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-1qswy51")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=hh(o,r,c);s[c]?(s[c].p(l,a),v(s[c],1)):(s[c]=dh(l),s[c].c(),v(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)i(c);ye()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)v(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);n=!1},d(o){o&&C(e),Wt(s,o)}}}function oS(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class aS extends Q{constructor(e){super(),W(this,e,oS,iS,K,{posts:0})}}function cS(t){let e;return{c(){e=w("div")},m(n,r){R(n,e,r),t[1](e)},p:A,i:A,o:A,d(n){n&&C(e),t[1](null)}}}function lS(t,e,n){const r=Mt(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&r("visible")},{rootMargin:"1250px"});let i;function o(a){Me[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class uS extends Q{constructor(e){super(),W(this,e,lS,cS,K,{})}}const hS="/assets/shironeko-x-c28cad00.png";function dS(t){let e,n,r,s,i;return{c(){e=w("div"),n=w("img"),s=M(),i=w("span"),i.textContent="You have reached the end",Ct(n.src,r=hS)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){R(o,e,a),y(e,n),y(e,s),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class fS extends Q{constructor(e){super(),W(this,e,null,dS,K,{})}}const fh=()=>({pages:[],nextPage:0,ids:new Set}),pS=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},gS=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},mS=()=>{const{subscribe:t,update:e,set:n}=io("results",fh(),pS,gS);return{subscribe:t,addPage(r){e(s=>{const i=r.filter(o=>!s.ids.has(o.id));return i.forEach(o=>s.ids.add(o.id)),{pages:[...s.pages,i],nextPage:s.nextPage+1,ids:s.ids}})},reset(){n(fh())}}},Ir=mS(),yS={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},_S=()=>{const{subscribe:t,set:e}=Vg("sort",yS);return{subscribe:t,set:e}},$n=_S();function ph(t,e,n){const r=t.slice();return r[0]=e[n][0],r[3]=e[n][1],r}function gh(t){let e,n=t[3]+"",r,s;return{c(){e=w("option"),r=ue(n),e.__value=s=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){R(i,e,o),y(e,r)},p(i,o){o&2&&n!==(n=i[3]+"")&&ve(r,n),o&2&&s!==(s=i[0])&&(e.__value=s,e.value=e.__value)},d(i){i&&C(e)}}}function vS(t){let e,n,r,s=Object.entries(t[1]),i=[];for(let o=0;o<s.length;o+=1)i[o]=gh(ph(t,s,o));return{c(){e=w("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&Dr(()=>t[2].call(e))},m(o,a){R(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);Zc(e,t[0],!0),n||(r=j(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){s=Object.entries(o[1]);let c;for(c=0;c<s.length;c+=1){const l=ph(o,s,c);i[c]?i[c].p(l,a):(i[c]=gh(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=s.length}a&3&&Zc(e,o[0])},i:A,o:A,d(o){o&&C(e),Wt(i,o),n=!1,r()}}}function wS(t,e,n){let{options:r}=e,{value:s}=e;function i(){s=Jg(this),n(0,s),n(1,r)}return t.$$set=o=>{"options"in o&&n(1,r=o.options),"value"in o&&n(0,s=o.value)},[s,r,i]}class IS extends Q{constructor(e){super(),W(this,e,wS,vS,K,{options:1,value:0})}}function ES(t){let e,n,r,s;return{c(){e=w("button"),n=ue(t[0]),f(e,"class","svelte-17m158f")},m(i,o){R(i,e,o),y(e,n),r||(s=j(e,"click",t[1]),r=!0)},p(i,[o]){o&1&&ve(n,i[0])},i:A,o:A,d(i){i&&C(e),r=!1,s()}}}function bS(t,e,n){let r,s,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%r.length),n(2,o=r[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,r=Object.entries(i)),t.$$.dirty&48&&n(0,s=r[a][1])},[s,c,o,i,a,r]}class TS extends Q{constructor(e){super(),W(this,e,bS,ES,K,{options:3,value:2})}}function mh(t){let e,n;return e=new Rg({props:{$$slots:{default:[kS]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1025&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function kS(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E,I,k,D,P,N,X,_e;function $(te){t[6](te)}let q={options:CS};t[0].sortDirection!==void 0&&(q.value=t[0].sortDirection),o=new Dg({props:q}),Me.push(()=>St(o,"value",$));function ee(te){t[7](te)}let ct={options:AS};t[0].sortProperty!==void 0&&(ct.value=t[0].sortProperty),l=new IS({props:ct}),Me.push(()=>St(l,"value",ee));function re(te){t[8](te)}let Z={options:RS};return t[0].scoreComparator!==void 0&&(Z.value=t[0].scoreComparator),m=new TS({props:Z}),Me.push(()=>St(m,"value",re)),P=new Hc({props:{text:"Done",title:"Return to searching."}}),P.$on("click",t[5]),{c(){e=w("div"),n=w("label"),r=w("b"),r.textContent="Sorting",s=M(),i=w("div"),x(o.$$.fragment),c=M(),x(l.$$.fragment),h=M(),d=w("label"),p=w("b"),p.textContent="Score Filtering",_=M(),g=w("div"),x(m.$$.fragment),I=M(),k=w("input"),D=M(),x(P.$$.fragment),f(i,"class","row svelte-1k7zufl"),f(n,"class","svelte-1k7zufl"),f(k,"type","number"),f(k,"min",0),f(k,"max",1e5),f(k,"step",1),f(k,"class","svelte-1k7zufl"),f(g,"class","row svelte-1k7zufl"),f(d,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(te,oe){R(te,e,oe),y(e,n),y(n,r),y(n,s),y(n,i),F(o,i,null),y(i,c),F(l,i,null),y(e,h),y(e,d),y(d,p),y(d,_),y(d,g),F(m,g,null),y(g,I),y(g,k),ht(k,t[0].scoreValue),y(e,D),F(P,e,null),N=!0,X||(_e=[j(k,"input",t[9]),j(k,"keyup",Kc(NS))],X=!0)},p(te,oe){const lt={};!a&&oe&1&&(a=!0,lt.value=te[0].sortDirection,kt(()=>a=!1)),o.$set(lt);const ae={};!u&&oe&1&&(u=!0,ae.value=te[0].sortProperty,kt(()=>u=!1)),l.$set(ae);const Ie={};!E&&oe&1&&(E=!0,Ie.value=te[0].scoreComparator,kt(()=>E=!1)),m.$set(Ie),oe&1&&Ta(k.value)!==te[0].scoreValue&&ht(k,te[0].scoreValue)},i(te){N||(v(o.$$.fragment,te),v(l.$$.fragment,te),v(m.$$.fragment,te),v(P.$$.fragment,te),N=!0)},o(te){b(o.$$.fragment,te),b(l.$$.fragment,te),b(m.$$.fragment,te),b(P.$$.fragment,te),N=!1},d(te){te&&C(e),U(o),U(l),U(m),U(P),X=!1,De(_e)}}}function SS(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m=t[1]&&mh(t);return{c(){e=w("button"),n=w("i"),r=M(),s=w("span"),i=ue(t[3]),o=M(),a=w("i"),c=M(),l=w("span"),u=ue(t[2]),h=M(),m&&m.c(),d=ot(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(E,I){R(E,e,I),y(e,n),y(e,r),y(e,s),y(s,i),y(e,o),y(e,a),y(e,c),y(e,l),y(l,u),R(E,h,I),m&&m.m(E,I),R(E,d,I),p=!0,_||(g=j(e,"click",t[4]),_=!0)},p(E,[I]){(!p||I&8)&&ve(i,E[3]),(!p||I&4)&&ve(u,E[2]),E[1]?m?(m.p(E,I),I&2&&v(m,1)):(m=mh(E),m.c(),v(m,1),m.m(d.parentNode,d)):m&&(me(),b(m,1,1,()=>{m=null}),ye())},i(E){p||(v(m),p=!0)},o(E){b(m),p=!1},d(E){E&&C(e),E&&C(h),m&&m.d(E),E&&C(d),_=!1,g()}}}const AS=Object.freeze({id:"Upload",score:"Score",updated:"Change"}),CS=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),RS=Object.freeze({">=":"≥","<=":"≤"}),DS=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),NS=t=>t.target.blur();function OS(t,e,n){let r,s,i;$e(t,$n,p=>n(0,i=p));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1);function l(p){t.$$.not_equal(i.sortDirection,p)&&(i.sortDirection=p,$n.set(i))}function u(p){t.$$.not_equal(i.sortProperty,p)&&(i.sortProperty=p,$n.set(i))}function h(p){t.$$.not_equal(i.scoreComparator,p)&&(i.scoreComparator=p,$n.set(i))}function d(){i.scoreValue=Ta(this.value),$n.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,r=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${$t(i.scoreValue)}`),t.$$.dirty&1&&n(2,s=DS[i.sortProperty][i.sortDirection])},[i,o,s,r,a,c,l,u,h,d]}class PS extends Q{constructor(e){super(),W(this,e,OS,SS,K,{})}}function $S(t){let e,n,r=$t(t[0])+"",s,i,o,a,c,l;return c=new PS({}),{c(){e=w("div"),n=w("span"),s=ue(r),i=ue(" results"),a=M(),x(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){R(u,e,h),y(e,n),y(n,s),y(n,i),y(e,a),F(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&r!==(r=$t(u[0])+"")&&ve(s,r),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(v(c.$$.fragment,u),l=!0)},o(u){b(c.$$.fragment,u),l=!1},d(u){u&&C(e),U(c)}}}function MS(t,e,n){let r;return $e(t,oo,s=>n(0,r=s)),[r]}class LS extends Q{constructor(e){super(),W(this,e,MS,$S,K,{})}}function yh(t,e,n){const r=t.slice();return r[6]=e[n],r}function _h(t){let e,n;return e=new aS({props:{posts:t[6]}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.posts=r[6]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function FS(t){let e,n;return e=new fS({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function US(t){let e,n;return e=new uS({}),e.$on("visible",t[5]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function xS(t){let e,n,r,s,i,o,a,c;e=new LS({});let l=t[0].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=_h(yh(t,l,g));const h=g=>b(u[g],1,1,()=>{u[g]=null}),d=[US,FS],p=[];function _(g,m){return g[1]?0:1}return i=_(t),o=p[i]=d[i](t),{c(){x(e.$$.fragment),n=M(),r=w("ol");for(let g=0;g<u.length;g+=1)u[g].c();s=M(),o.c(),a=ot(),f(r,"class","svelte-dsypei")},m(g,m){F(e,g,m),R(g,n,m),R(g,r,m);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(r,null);R(g,s,m),p[i].m(g,m),R(g,a,m),c=!0},p(g,[m]){if(m&1){l=g[0].pages;let I;for(I=0;I<l.length;I+=1){const k=yh(g,l,I);u[I]?(u[I].p(k,m),v(u[I],1)):(u[I]=_h(k),u[I].c(),v(u[I],1),u[I].m(r,null))}for(me(),I=l.length;I<u.length;I+=1)h(I);ye()}let E=i;i=_(g),i===E?p[i].p(g,m):(me(),b(p[E],1,1,()=>{p[E]=null}),ye(),o=p[i],o?o.p(g,m):(o=p[i]=d[i](g),o.c()),v(o,1),o.m(a.parentNode,a))},i(g){if(!c){v(e.$$.fragment,g);for(let m=0;m<l.length;m+=1)v(u[m]);v(o),c=!0}},o(g){b(e.$$.fragment,g),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)b(u[m]);b(o),c=!1},d(g){U(e,g),g&&C(n),g&&C(r),Wt(u,g),g&&C(s),p[i].d(g),g&&C(a)}}}function VS(t,e,n){let r,s,i,o;$e(t,Ir,l=>n(0,i=l)),$e(t,oo,l=>n(4,o=l));const a=Mt(),c=()=>a("endreached");return t.$$.update=()=>{t.$$.dirty&16&&n(3,r=o/Mg),t.$$.dirty&9&&n(1,s=i.pages.length<r)},[i,s,a,r,o,c]}class BS extends Q{constructor(e){super(),W(this,e,VS,xS,K,{})}}function jS(t){let e,n;return e=new BS({}),e.$on("endreached",t[3]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function qS(t){let e,n;return e=new WT({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function zS(t){let e,n,r,s;const i=[qS,jS],o=[];function a(c,l){return c[0]?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),r=ot()},m(c,l){~e&&o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e!==u&&(n&&(me(),b(o[u],1,1,()=>{o[u]=null}),ye()),~e?(n=o[e],n||(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r)):n=null)},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){~e&&o[e].d(c),c&&C(r)}}}function HS(t,e,n){let r,s,i;$e(t,oo,a=>n(2,i=a));function o(a){er.call(this,t,a)}return t.$$.update=()=>{t.$$.dirty&4&&n(1,r=i>=0),t.$$.dirty&4&&n(0,s=i===0)},[s,r,i,o]}class KS extends Q{constructor(e){super(),W(this,e,HS,zS,K,{})}}function GS(t){let e,n,r;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-69q5fy"),de(e,"visible",t[0])},m(s,i){R(s,e,i),n||(r=j(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&de(e,"visible",s[0])},i:A,o:A,d(s){s&&C(e),n=!1,r()}}}function WS(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>0||window.innerHeight+a>=document.body.scrollHeight),r=a};return Zn(()=>{document.addEventListener("scroll",i,{passive:!0})}),Ii(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class QS extends Q{constructor(e){super(),W(this,e,WS,GS,K,{})}}function YS(t){let e,n,r,s,i,o,a,c,l,u,h;return{c(){e=w("div"),n=w("div"),r=w("i"),i=M(),o=w("div"),a=w("h3"),c=ue(t[2]),l=M(),u=w("span"),h=ue(t[1]),f(r,"class",s=Qe(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){R(d,e,p),y(e,n),y(n,r),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&s!==(s=Qe(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(r,"class",s),p&4&&ve(c,d[2]),p&2&&ve(h,d[1])},i:A,o:A,d(d){d&&C(e)}}}function JS(t,e,n){let{icon:r}=e,{message:s}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,r=o.icon),"message"in o&&n(1,s=o.message),"title"in o&&n(2,i=o.title)},[r,s,i]}class qg extends Q{constructor(e){super(),W(this,e,JS,YS,K,{icon:0,message:1,title:2})}}function XS(t){let e;return{c(){e=w("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class ZS extends Q{constructor(e){super(),W(this,e,null,XS,K,{})}}function vh(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function wh(t){let e,n,r,s=t[0],i=[];for(let c=0;c<s.length;c+=1)i[c]=Ih(vh(t,s,c));const o=c=>b(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&Eh(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=M(),a&&a.c(),n=ot()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);R(c,e,l),a&&a.m(c,l),R(c,n,l),r=!0},p(c,l){if(l&1){s=c[0];let u;for(u=0;u<s.length;u+=1){const h=vh(c,s,u);i[u]?(i[u].p(h,l),v(i[u],1)):(i[u]=Ih(h),i[u].c(),v(i[u],1),i[u].m(e.parentNode,e))}for(me(),u=s.length;u<i.length;u+=1)o(u);ye()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=Eh(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)v(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)b(i[l]);r=!1},d(c){Wt(i,c),c&&C(e),a&&a.d(c),c&&C(n)}}}function Ih(t){let e,n;function r(){return t[3](t[8])}function s(){return t[4](t[6])}return e=new Cg({props:{tag:t[6]}}),e.$on("click",r),e.$on("contextmenu",s),{c(){x(e.$$.fragment)},m(i,o){F(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(v(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function Eh(t){let e,n,r;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-lsipoc"></i>',f(e,"class","add-supertag svelte-lsipoc"),f(e,"title","Click to create a new supertag")},m(s,i){R(s,e,i),n||(r=j(e,"click",t[5]),n=!0)},p:A,d(s){s&&C(e),n=!1,r()}}}function eA(t){let e,n,r=t[0].length&&wh(t);return{c(){e=w("ul"),r&&r.c(),f(e,"class","svelte-lsipoc")},m(s,i){R(s,e,i),r&&r.m(e,null),n=!0},p(s,[i]){s[0].length?r?(r.p(s,i),i&1&&v(r,1)):(r=wh(s),r.c(),v(r,1),r.m(e,null)):r&&(me(),b(r,1,1,()=>{r=null}),ye())},i(s){n||(v(r),n=!0)},o(s){b(r),n=!1},d(s){s&&C(e),r&&r.d()}}}function tA(t,e,n){let r,s;$e(t,At,l=>n(0,r=l)),$e(t,wg,l=>n(1,s=l));const i=Mt();return[r,s,i,l=>At.removeByIndex(l),l=>At.addOrReplace(ro(jb(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class nA extends Q{constructor(e){super(),W(this,e,tA,eA,K,{})}}const HA=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),rA=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class sA{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=Uo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=Uo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),wT(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=Uo(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),IT(this.tagString)}}const iA=()=>new sA,Uo=(t,e,n,r,s,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${s}${r}`,`sort:${e}:${n}`];if(c.length>0){const h=xo(c.map(Tg));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${xo(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>rA[p]).map(p=>zc("-",p)),d=xo(h);l.push(d)}return l.join("+")},xo=t=>{const e=oA(t);let n=[...bh([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${bh(e["~"]).join(" ~ ")} )`),n.join("+")},oA=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},bh=t=>t.map(Gb),aA=()=>{const t=[],{subscribe:e,update:n}=io("blockedContent",t);return{subscribe:e,toggle(r){n(s=>s.includes(r)?s.filter(i=>i!==r):[...s,r])}}},cA=aA();function lA(t){let e,n;return e=new KS({}),e.$on("endreached",t[4]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function uA(t){let e,n,r,s;const i=[dA,hA],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=ot()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function hA(t){let e,n;return e=new qg({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.message=r[1].message),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function dA(t){let e,n;return e=new qg({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Th(t){let e,n;return e=new cT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tags=r[2]),e.$set(i)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function fA(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,_,g,m,E;n=new ZS({}),s=new zT({}),s.$on("pick",t[7]),o=new nA({}),o.$on("supertag",t[8]),l=new Hc({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const I=[uA,lA],k=[];function D(N,X){return N[1]!==void 0?0:1}h=D(t),d=k[h]=I[h](t),_=new QS({});let P=t[0]&&Th(t);return{c(){e=w("div"),x(n.$$.fragment),r=M(),x(s.$$.fragment),i=M(),x(o.$$.fragment),a=M(),c=w("div"),x(l.$$.fragment),u=M(),d.c(),p=M(),x(_.$$.fragment),g=M(),P&&P.c(),m=ot(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(N,X){R(N,e,X),F(n,e,null),y(e,r),F(s,e,null),y(e,i),F(o,e,null),y(e,a),y(e,c),F(l,c,null),R(N,u,X),k[h].m(N,X),R(N,p,X),F(_,N,X),R(N,g,X),P&&P.m(N,X),R(N,m,X),E=!0},p(N,[X]){let _e=h;h=D(N),h===_e?k[h].p(N,X):(me(),b(k[_e],1,1,()=>{k[_e]=null}),ye(),d=k[h],d?d.p(N,X):(d=k[h]=I[h](N),d.c()),v(d,1),d.m(p.parentNode,p)),N[0]?P?(P.p(N,X),X&1&&v(P,1)):(P=Th(N),P.c(),v(P,1),P.m(m.parentNode,m)):P&&(me(),b(P,1,1,()=>{P=null}),ye())},i(N){E||(v(n.$$.fragment,N),v(s.$$.fragment,N),v(o.$$.fragment,N),v(l.$$.fragment,N),v(d),v(_.$$.fragment,N),v(P),E=!0)},o(N){b(n.$$.fragment,N),b(s.$$.fragment,N),b(o.$$.fragment,N),b(l.$$.fragment,N),b(d),b(_.$$.fragment,N),b(P),E=!1},d(N){N&&C(e),U(n),U(s),U(o),U(l),N&&C(u),k[h].d(N),N&&C(p),U(_,N),N&&C(g),P&&P.d(N),N&&C(m)}}}function pA(t,e,n){let r,s,i,o,a;$e(t,$n,D=>n(6,r=D)),$e(t,cA,D=>n(12,s=D)),$e(t,Jr,D=>n(13,i=D)),$e(t,At,D=>n(2,o=D)),$e(t,Ir,D=>n(14,a=D));let c=!1,l,u=!1,h=JSON.stringify(r);const d=()=>iA().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withBlockedContent(s),p=async D=>{if(!u){n(1,l=void 0),u=!0;try{await D()}catch(P){n(1,l=P),console.warn(P)}finally{u=!1}}},_=async()=>{Ir.reset(),p(async()=>{const[D,P]=await d().getPageAndCount();Ir.addPage(D),oo.set(P)})},g=async()=>{p(async()=>{const D=await d().getPage();Ir.addPage(D)})},m=D=>At.addOrReplace(D.detail),E=()=>{n(0,c=!0)},I=D=>{Jr.addSupertag(D.detail),At.set([ro("+",D.detail.name,D.detail.tags.length,"supertag")])},k=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const D=JSON.stringify(r);h!==D&&(n(5,h=D),_())}},[c,l,o,_,g,h,r,m,E,I,k]}class gA extends Q{constructor(e){super(),W(this,e,pA,fA,K,{})}}function mA(t){let e,n;return e=new Gc({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},p:A,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function yA(t){let e,n,r;var s=t[0];function i(o){return{}}return s&&(e=el(s,i())),{c(){e&&x(e.$$.fragment),n=ot()},m(o,a){e&&F(e,o,a),R(o,n,a),r=!0},p(o,a){if(a&1&&s!==(s=o[0])){if(e){me();const c=e;b(c.$$.fragment,1,0,()=>{U(c,1)}),ye()}s?(e=el(s,i()),x(e.$$.fragment),v(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}},i(o){r||(e&&v(e.$$.fragment,o),r=!0)},o(o){e&&b(e.$$.fragment,o),r=!1},d(o){o&&C(n),e&&U(e,o)}}}function _A(t){let e,n,r,s;const i=[yA,mA],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=ot()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){s||(v(n),s=!0)},o(c){b(n),s=!1},d(c){o[e].d(c),c&&C(r)}}}function vA(t,e,n){let{loadComponent:r}=e,s;return Zn(async()=>{n(0,s=(await r()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,r=i.loadComponent)},[s,r]}class Qc extends Q{constructor(e){super(),W(this,e,vA,_A,K,{loadComponent:1})}}function wA(t){let e;return{c(){e=w("p"),e.textContent="You got lost..."},m(n,r){R(n,e,r)},i:A,o:A,d(n){n&&C(e)}}}function IA(t){let e,n;return e=new Qc({props:{loadComponent:CA}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function EA(t){let e,n;return e=new Qc({props:{loadComponent:AA}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function bA(t){let e,n;return e=new Qc({props:{loadComponent:SA}}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function TA(t){let e,n;return e=new gA({}),{c(){x(e.$$.fragment)},m(r,s){F(e,r,s),n=!0},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function kA(t){let e,n,r,s;const i=[TA,bA,EA,IA,wA],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),r=o[n]=i[n](t),{c(){e=w("main"),r.c(),f(e,"class","svelte-628m8p")},m(c,l){R(c,e,l),o[n].m(e,null),s=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(me(),b(o[u],1,1,()=>{o[u]=null}),ye(),r=o[n],r||(r=o[n]=i[n](c),r.c()),v(r,1),r.m(e,null))},i(c){s||(v(r),s=!0)},o(c){b(r),s=!1},d(c){c&&C(e),o[n].d()}}}const SA=()=>eo(()=>import("./Account-3a894edd.js"),["assets/Account-3a894edd.js","assets/Account-27dfc757.css"]),AA=()=>eo(()=>import("./Preferences-d87722f2.js"),["assets/Preferences-d87722f2.js","assets/ParagraphHeading-ba1e0123.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),CA=()=>eo(()=>import("./Help-4894a337.js"),["assets/Help-4894a337.js","assets/ParagraphHeading-ba1e0123.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function RA(t,e,n){let r;return $e(t,Mn,s=>n(0,r=s)),[r]}class DA extends Q{constructor(e){super(),W(this,e,RA,kA,K,{})}}function NA(t){let e;return{c(){e=w("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,r){R(n,e,r)},p:A,i:A,o:A,d(n){n&&C(e)}}}class OA extends Q{constructor(e){super(),W(this,e,null,NA,K,{})}}const{subscribe:PA,set:$A}=Vg("theme","dark"),kh={subscribe:PA,set(t){$A(t),MA(t),Jr.setTheme(t)}},MA=t=>{document.documentElement.classList.replace(LA(t),t)},LA=t=>t==="dark"?"light":"dark";function FA(t){let e,n,r,s,i,o;return e=new xb({}),r=new DA({}),i=new OA({}),{c(){x(e.$$.fragment),n=M(),x(r.$$.fragment),s=M(),x(i.$$.fragment)},m(a,c){F(e,a,c),R(a,n,c),F(r,a,c),R(a,s,c),F(i,a,c),o=!0},p:A,i(a){o||(v(e.$$.fragment,a),v(r.$$.fragment,a),v(i.$$.fragment,a),o=!0)},o(a){b(e.$$.fragment,a),b(r.$$.fragment,a),b(i.$$.fragment,a),o=!1},d(a){U(e,a),a&&C(n),U(r,a),a&&C(s),U(i,a)}}}function UA(t){return kh.subscribe(e=>kh.set(e))(),[]}class xA extends Q{constructor(e){super(),W(this,e,UA,FA,K,{})}}function VA(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await eo(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r==null||r()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new xA({target:document.getElementById("app")});VA();export{Cg as $,U as A,Hc as B,Me as C,Rg as D,St as E,kt as F,zc as G,de as H,Oh as I,Ct as J,wg as K,$e as L,ju as M,Jr as N,xu as O,Vg as P,Ah as Q,Dh as R,Q as S,zT as T,Nh as U,Rh as V,kh as W,cA as X,BA as Y,IS as Z,HA as _,f as a,ro as a0,ZT as a1,mi as a2,QS as a3,Zb as a4,R as b,y as c,ve as d,w as e,Xn as f,A as g,C as h,W as i,er as j,ht as k,j as l,M as m,Qe as n,ot as o,v as p,me as q,ye as r,K as s,ue as t,b as u,Wt as v,De as w,Mt as x,x as y,F as z};
