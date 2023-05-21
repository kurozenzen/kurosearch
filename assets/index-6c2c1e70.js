(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function D(){}function oo(t,e){for(const n in e)t[n]=e[n];return t}function Up(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Cu(t){return t()}function lc(){return Object.create(null)}function me(t){t.forEach(Cu)}function Qr(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let tr;function Jt(t,e){return tr||(tr=document.createElement("a")),tr.href=e,t===tr.href}function Fp(t){return Object.keys(t).length===0}function xp(t,...e){if(t==null)return D;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Oe(t,e,n){t.$$.on_destroy.push(xp(e,n))}function Du(t,e,n,s){if(t){const r=Ru(t,e,n,s);return t[0](r)}}function Ru(t,e,n,s){return t[1]&&s?oo(n.ctx.slice(),t[1](s(e))):n.ctx}function Nu(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Ou(t,e,n,s,r,i){if(r){const o=Ru(e,n,s,i);t.p(o,r)}}function $u(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function uc(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ge(t){return t??""}function fS(t,e,n){return t.set(n),e}const Vp=typeof window<"u";let Bp=Vp?t=>requestAnimationFrame(t):D;function y(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function fn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function re(t){return document.createTextNode(t)}function $(){return re(" ")}function Ze(){return re("")}function V(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function jp(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jo(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qo(t){return t===""?null:+t}function qp(t){return Array.from(t.childNodes)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function st(t,e){t.value=e??""}function zp(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function hc(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Hp(t){const e=t.querySelector(":checked");return e&&e.__value}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function Kp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function dc(t,e){return new t(e)}let cs;function dt(t){cs=t}function Yr(){if(!cs)throw new Error("Function called outside component initialization");return cs}function Cs(t){Yr().$$.on_mount.push(t)}function Xr(t){Yr().$$.on_destroy.push(t)}function Qe(){const t=Yr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Kp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const yn=[],Pe=[];let Tn=[];const ao=[],Gp=Promise.resolve();let co=!1;function Wp(){co||(co=!0,Gp.then(zo))}function ls(t){Tn.push(t)}function mt(t){ao.push(t)}const Mi=new Set;let pn=0;function zo(){if(pn!==0)return;const t=cs;do{try{for(;pn<yn.length;){const e=yn[pn];pn++,dt(e),Qp(e.$$)}}catch(e){throw yn.length=0,pn=0,e}for(dt(null),yn.length=0,pn=0;Pe.length;)Pe.pop()();for(let e=0;e<Tn.length;e+=1){const n=Tn[e];Mi.has(n)||(Mi.add(n),n())}Tn.length=0}while(yn.length);for(;ao.length;)ao.pop()();co=!1,Mi.clear(),dt(t)}function Qp(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ls)}}function Yp(t){const e=[],n=[];Tn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Tn=e}const hr=new Set;let Bt;function ce(){Bt={r:0,c:[],p:Bt}}function le(){Bt.r||me(Bt.c),Bt=Bt.p}function v(t,e){t&&t.i&&(hr.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(hr.has(t))return;hr.add(t),Bt.c.push(()=>{hr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Ir(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ce(),T(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),le())}):e.block.d(1),l.c(),v(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&zo()}if(Up(t)){const r=Yr();if(t.then(i=>{dt(r),s(e.then,1,e.value,i),dt(null)},i=>{if(dt(r),s(e.catch,2,e.error,i),dt(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Pu(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function yt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function F(t){t&&t.c()}function L(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||ls(()=>{const o=t.$$.on_mount.map(Cu).filter(Qr);t.$$.on_destroy?t.$$.on_destroy.push(...o):me(o),t.$$.on_mount=[]}),i.forEach(ls)}function M(t,e){const n=t.$$;n.fragment!==null&&(Yp(n.after_update),me(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xp(t,e){t.$$.dirty[0]===-1&&(yn.push(t),Wp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,r,i,o,a=[-1]){const c=cs;dt(t);const l=t.$$={fragment:null,ctx:[],props:i,update:D,not_equal:r,bound:lc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:lc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const _=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=_)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](_),u&&Xp(t,h)),d}):[],l.update(),u=!0,me(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=qp(e.target);l.fragment&&l.fragment.l(h),h.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&v(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),zo()}dt(c)}class W{$destroy(){M(this,1),this.$destroy=D}$on(e,n){if(!Qr(n))return D;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Fp(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gn=[];function Ds(t,e=D){let n;const s=new Set;function r(a){if(K(t,a)&&(t=a,n)){const c=!gn.length;for(const l of s)l[1](),gn.push(l,t);if(c){for(let l=0;l<gn.length;l+=2)gn[l][0](gn[l+1]);gn.length=0}}}function i(a){r(a(t))}function o(a,c=D){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||D),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Jp=Object.freeze(["search","account","settings","help"]),Zp=t=>Jp.includes(t),eg=()=>{const{subscribe:t,set:e}=Ds("search");return{subscribe:t,navigateTo(n){if(!Zp(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},bn=eg();function tg(t){let e,n,s,r,i,o;return{c(){e=fn("svg"),n=fn("g"),s=fn("path"),r=fn("defs"),i=fn("clipPath"),o=fn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){C(a,e,c),y(e,n),y(n,s),y(e,r),y(r,i),y(i,o)},p:D,i:D,o:D,d(a){a&&A(e)}}}class ng extends W{constructor(e){super(),G(this,e,null,tg,K,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new rg;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(t){const e=Lu(t);return Mu.encodeByteArray(e,!0)},Tr=function(t){return ig(t).replace(/\./g,"")},Uu=function(t){try{return Mu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ag=()=>og().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uu(t[1]);return e&&JSON.parse(e)},Ho=()=>{try{return ag()||cg()||lg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fu=t=>{var e,n;return(n=(e=Ho())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ug=t=>{const e=Fu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},hg=()=>{var t;return(t=Ho())===null||t===void 0?void 0:t.config},xu=t=>{var e;return(e=Ho())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Tr(JSON.stringify(n)),Tr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Vu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mg(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bu(){try{return typeof indexedDB=="object"}catch{return!1}}function ju(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function yg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="FirebaseError";class et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_g,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?vg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new et(r,a,s)}}function vg(t,e){return t.replace(wg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wg=/\{\$([^}]+)}/g;function bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function us(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(fc(i)&&fc(o)){if(!us(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function fc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ig(t,e){const n=new Tg(t,e);return n.subscribe.bind(n)}class Tg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Eg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ui),r.error===void 0&&(r.error=Ui),r.complete===void 0&&(r.complete=Ui);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ui(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=1e3,Sg=2,Ag=4*60*60*1e3,Cg=.5;function pc(t,e=kg,n=Sg){const s=e*Math.pow(n,t),r=Math.round(Cg*s*(Math.random()-.5)*2);return Math.min(Ag,s+r)}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Xe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ng(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(t){return t===xt?void 0:t}function Ng(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const $g={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Pg=ne.INFO,Lg={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Mg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Lg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jr{constructor(e){this.name=e,this._logLevel=Pg,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$g[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Ug=(t,e)=>e.some(n=>t instanceof n);let gc,mc;function Fg(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,lo=new WeakMap,zu=new WeakMap,Fi=new WeakMap,Ko=new WeakMap;function Vg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qu.set(n,t)}).catch(()=>{}),Ko.set(e,t),e}function Bg(t){if(lo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lo.set(t,e)}let uo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jg(t){uo=t(uo)}function qg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xi(this),e,...n);return zu.set(s,e.sort?e.sort():[e]),Dt(s)}:xg().includes(t)?function(...e){return t.apply(xi(this),e),Dt(qu.get(this))}:function(...e){return Dt(t.apply(xi(this),e))}}function zg(t){return typeof t=="function"?qg(t):(t instanceof IDBTransaction&&Bg(t),Ug(t,Fg())?new Proxy(t,uo):t)}function Dt(t){if(t instanceof IDBRequest)return Vg(t);if(Fi.has(t))return Fi.get(t);const e=zg(t);return e!==t&&(Fi.set(t,e),Ko.set(e,t)),e}const xi=t=>Ko.get(t);function Hu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Dt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Hg=["get","getKey","getAll","getAllKeys","count"],Kg=["put","add","delete","clear"],Vi=new Map;function yc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Kg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Hg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Vi.set(e,i),i}jg(t=>({...t,get:(e,n,s)=>yc(e,n)||t.get(e,n,s),has:(e,n)=>!!yc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",_c="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Jr("@firebase/app"),Qg="@firebase/app-compat",Yg="@firebase/analytics-compat",Xg="@firebase/analytics",Jg="@firebase/app-check-compat",Zg="@firebase/app-check",em="@firebase/auth",tm="@firebase/auth-compat",nm="@firebase/database",sm="@firebase/database-compat",rm="@firebase/functions",im="@firebase/functions-compat",om="@firebase/installations",am="@firebase/installations-compat",cm="@firebase/messaging",lm="@firebase/messaging-compat",um="@firebase/performance",hm="@firebase/performance-compat",dm="@firebase/remote-config",fm="@firebase/remote-config-compat",pm="@firebase/storage",gm="@firebase/storage-compat",mm="@firebase/firestore",ym="@firebase/firestore-compat",_m="firebase",vm="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="[DEFAULT]",wm={[ho]:"fire-core",[Qg]:"fire-core-compat",[Xg]:"fire-analytics",[Yg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Jg]:"fire-app-check-compat",[em]:"fire-auth",[tm]:"fire-auth-compat",[nm]:"fire-rtdb",[sm]:"fire-rtdb-compat",[rm]:"fire-fn",[im]:"fire-fn-compat",[om]:"fire-iid",[am]:"fire-iid-compat",[cm]:"fire-fcm",[lm]:"fire-fcm-compat",[um]:"fire-perf",[hm]:"fire-perf-compat",[dm]:"fire-rc",[fm]:"fire-rc-compat",[pm]:"fire-gcs",[gm]:"fire-gcs-compat",[mm]:"fire-fst",[ym]:"fire-fst-compat","fire-js":"fire-js",[_m]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,po=new Map;function bm(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ct(t){const e=t.name;if(po.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;po.set(e,t);for(const n of Er.values())bm(n,t);return!0}function cn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new an("app","Firebase",Im);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=vm;function Ku(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=hg()),!n)throw Rt.create("no-options");const i=Er.get(r);if(i){if(us(n,i.options)&&us(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new Og(r);for(const c of po.values())o.addComponent(c);const a=new Tm(n,s,o);return Er.set(r,a),a}function Go(t=fo){const e=Er.get(t);if(!e&&t===fo)return Ku();if(!e)throw Rt.create("no-app",{appName:t});return e}function He(t,e,n){var s;let r=(s=wm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}ct(new Xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Em="firebase-heartbeat-database",km=1,hs="firebase-heartbeat-store";let Bi=null;function Gu(){return Bi||(Bi=Hu(Em,km,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hs)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),Bi}async function Sm(t){try{return(await Gu()).transaction(hs).objectStore(hs).get(Wu(t))}catch(e){if(e instanceof et)Zt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function vc(t,e){try{const s=(await Gu()).transaction(hs,"readwrite");return await s.objectStore(hs).put(e,Wu(t)),s.done}catch(n){if(n instanceof et)Zt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function Wu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Am=1024,Cm=30*24*60*60*1e3;class Dm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Cm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wc(),{heartbeatsToSend:n,unsentEntries:s}=Rm(this._heartbeatsCache.heartbeats),r=Tr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wc(){return new Date().toISOString().substring(0,10)}function Rm(t,e=Am){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),bc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),bc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bu()?ju().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bc(t){return Tr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){ct(new Xe("platform-logger",e=>new Gg(e),"PRIVATE")),ct(new Xe("heartbeat",e=>new Dm(e),"PRIVATE")),He(ho,_c,t),He(ho,_c,"esm2017"),He("fire-js","")}Om("");function Wo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Qu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $m=Qu,Yu=new an("auth","Firebase",Qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Jr("@firebase/auth");function dr(t,...e){Ic.logLevel<=ne.ERROR&&Ic.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,...e){throw Qo(t,...e)}function rt(t,...e){return Qo(t,...e)}function Xu(t,e,n){const s=Object.assign(Object.assign({},$m()),{[e]:n});return new an("auth","Firebase",s).create(e,{appName:t.name})}function Pm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&We(t,"argument-error"),Xu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yu.create(t,...e)}function j(t,e,...n){if(!t)throw Qo(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dr(e),new Error(e)}function vt(t,e){t||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map;function pt(t){vt(t instanceof Function,"Expected a class definition");let e=Tc.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t,e){const n=cn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(us(i,e??{}))return r;We(r,"already-initialized")}return n.initialize({options:e})}function Mm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Um(){return Ec()==="http:"||Ec()==="https:"}function Ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Um()||Vu()||"connection"in navigator)?navigator.onLine:!0}function xm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=pg()||gg()}get(){return Fm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Os(3e4,6e4);function $s(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,s,r={}){return Zu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ju.fetch()(eh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Zu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Vm),e);try{const r=new jm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw nr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xu(t,u,l);We(t,u)}}catch(r){if(r instanceof et)throw r;We(t,"internal-error",{message:String(r)})}}async function Ls(t,e,n,s,r={}){const i=await Ps(t,e,n,s,r);return"mfaPendingCredential"in i&&We(t,"multi-factor-auth-required",{_serverResponse:i}),i}function eh(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Yo(t.config,r):`${t.config.apiScheme}://${r}`}class jm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rt(this.auth,"network-request-failed")),Bm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=rt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function zm(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hm(t,e=!1){const n=Ie(t),s=await n.getIdToken(e),r=Xo(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ts(ji(r.auth_time)),issuedAtTime:ts(ji(r.iat)),expirationTime:ts(ji(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ji(t){return Number(t)*1e3}function Xo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Uu(n);return r?JSON.parse(r):(dr("Failed to decode base64 JWT payload"),null)}catch(r){return dr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Km(t){const e=Xo(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof et&&Gm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Gm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ds(t,zm(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xm(i.providerUserInfo):[],a=Ym(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new th(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Qm(t){const e=Ie(t);await kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ym(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Xm(t){return t.map(e=>{var{providerId:n}=e,s=Wo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(t,e){const n=await Zu(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=eh(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ju.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Jm(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new fs;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new th(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hm(this,e)}reload(){return Qm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ds(this,qm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:E,isAnonymous:N,providerData:O,stsTokenManager:X}=n;j(k&&X,e,"internal-error");const fe=fs.fromJSON(this.name,X);j(typeof k=="string",e,"internal-error"),kt(h,e.name),kt(d,e.name),j(typeof E=="boolean",e,"internal-error"),j(typeof N=="boolean",e,"internal-error"),kt(p,e.name),kt(_,e.name),kt(g,e.name),kt(m,e.name),kt(I,e.name),kt(b,e.name);const tt=new Gt({uid:k,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:N,photoURL:_,phoneNumber:p,tenantId:g,stsTokenManager:fe,createdAt:I,lastLoginAt:b});return O&&Array.isArray(O)&&(tt.providerData=O.map(Ve=>Object.assign({},Ve))),m&&(tt._redirectEventId=m),tt}static async _fromIdTokenResponse(e,n,s=!1){const r=new fs;r.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await kr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nh.type="NONE";const kc=nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=fr(this.userKey,r.apiKey,i),this.fullPersistenceKey=fr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new En(pt(kc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||pt(kc);const o=fr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Gt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ih(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ah(e))return"Blackberry";if(ch(e))return"Webos";if(Jo(e))return"Safari";if((e.includes("chrome/")||rh(e))&&!e.includes("edge/"))return"Chrome";if(oh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sh(t=Ue()){return/firefox\//i.test(t)}function Jo(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rh(t=Ue()){return/crios\//i.test(t)}function ih(t=Ue()){return/iemobile/i.test(t)}function oh(t=Ue()){return/android/i.test(t)}function ah(t=Ue()){return/blackberry/i.test(t)}function ch(t=Ue()){return/webos/i.test(t)}function Zr(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zm(t=Ue()){var e;return Zr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ey(){return mg()&&document.documentMode===10}function lh(t=Ue()){return Zr(t)||oh(t)||ch(t)||ah(t)||/windows phone/i.test(t)||ih(t)}function ty(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e=[]){let n;switch(t){case"Browser":n=Sc(Ue());break;case"Worker":n=`${Sc(Ue())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${s}`}/**
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
 */class ny{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ac(this),this.idTokenSubscription=new Ac(this),this.beforeStateQueue=new ny(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Un(t){return Ie(t)}class Ac{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ig(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ry(t,e,n){const s=Un(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=hh(e),{host:o,port:a}=iy(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||oy()}function hh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iy(t){const e=hh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Cc(o)}}}function Cc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function ay(t,e){return Ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t,e){return Ls(t,"POST","/v1/accounts:signInWithPassword",$s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(t,e){return Ls(t,"POST","/v1/accounts:signInWithEmailLink",$s(t,e))}async function uy(t,e){return Ls(t,"POST","/v1/accounts:signInWithEmailLink",$s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Zo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ps(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ps(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ly(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ay(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uy(e,{idToken:n,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e){return Ls(t,"POST","/v1/accounts:signInWithIdp",$s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="http://localhost";class en extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Wo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new en(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,kn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kn(e,n)}buildRequest(){const e={requestUri:hy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fy(t){const e=Wn(Qn(t)).link,n=e?Wn(Qn(e)).deep_link_id:null,s=Wn(Qn(t)).deep_link_id;return(s?Wn(Qn(s)).link:null)||s||n||e||t}class ea{constructor(e){var n,s,r,i,o,a;const c=Wn(Qn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=dy((r=c.mode)!==null&&r!==void 0?r:null);j(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fy(e);try{return new ea(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.providerId=Fn.PROVIDER_ID}static credential(e,n){return ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ea.parseLink(n);return j(s,"argument-error"),ps._fromEmailAndCode(e,s.code,s.tenantId)}}Fn.PROVIDER_ID="password";Fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends ta{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ms{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ht.credential(n,s)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Ms{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Ms{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ct.credential(n,s)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t,e){return Ls(t,"POST","/v1/accounts:signUp",$s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Gt._fromIdTokenResponse(e,s,r),o=Dc(s);return new tn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Dc(s);return new tn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Dc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends et{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Sr(e,n,s,r)}}function dh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(t,i,e,s):i})}async function gy(t,e,n=!1){const s=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ds(t,dh(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Xo(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),tn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(t,e,n=!1){const s="signIn",r=await dh(t,s,e),i=await tn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function yy(t,e){return fh(Un(t),e)}async function _y(t,e,n){const s=Un(t),r=await py(s,{returnSecureToken:!0,email:e,password:n}),i=await tn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function vy(t,e,n){return yy(Ie(t),Fn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e){return Ie(t).setPersistence(e)}function by(t,e,n,s){return Ie(t).onIdTokenChanged(e,n,s)}function Iy(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function ph(t,e,n,s){return Ie(t).onAuthStateChanged(e,n,s)}function Ty(t){return Ie(t).signOut()}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){const t=Ue();return Jo(t)||Zr(t)}const ky=1e3,Sy=10;class mh extends gh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ey()&&ty(),this.fallbackToPolling=lh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ey()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Sy):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mh.type="LOCAL";const yh=mh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h extends gh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_h.type="SESSION";const vh=_h;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ei(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ay(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ei.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=na("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function Dy(t){it().location.href=t}/**
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
 */function wh(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function Ry(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ny(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Oy(){return wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="firebaseLocalStorageDb",$y=1,Cr="firebaseLocalStorage",Ih="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ti(t,e){return t.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function Py(){const t=indexedDB.deleteDatabase(bh);return new Us(t).toPromise()}function mo(){const t=indexedDB.open(bh,$y);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Cr,{keyPath:Ih})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Cr)?e(s):(s.close(),await Py(),e(await mo()))})})}async function Rc(t,e,n){const s=ti(t,!0).put({[Ih]:e,value:n});return new Us(s).toPromise()}async function Ly(t,e){const n=ti(t,!1).get(e),s=await new Us(n).toPromise();return s===void 0?null:s.value}function Nc(t,e){const n=ti(t,!0).delete(e);return new Us(n).toPromise()}const My=800,Uy=3;class Th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Uy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ei._getInstance(Oy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ry(),!this.activeServiceWorker)return;this.sender=new Cy(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ny()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mo();return await Rc(e,Ar,"1"),await Nc(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ly(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ti(r,!1).getAll();return new Us(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),My)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Th.type="LOCAL";const Fy=Th;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=rt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",xy().appendChild(s)})}function By(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Os(3e4,6e4);/**
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
 */function Eh(t,e){return e?pt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jy(t){return fh(t.auth,new sa(t),t.bypassAuthState)}function qy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),my(n,new sa(t),t.bypassAuthState)}async function zy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),gy(n,new sa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jy;case"linkViaPopup":case"linkViaRedirect":return zy;case"reauthViaPopup":case"reauthViaRedirect":return qy;default:We(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Os(2e3,1e4);async function Ky(t,e,n){const s=Un(t);Pm(t,e,ta);const r=Eh(s,n);return new jt(s,"signInViaPopup",e,r).executeNotNull()}class jt extends kh{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=na();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hy.get())};e()}}jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="pendingRedirect",pr=new Map;class Wy extends kh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=pr.get(this.auth._key());if(!e){try{const s=await Qy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}pr.set(this.auth._key(),e)}return this.bypassAuthState||pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qy(t,e){const n=Jy(e),s=Xy(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Yy(t,e){pr.set(t._key(),e)}function Xy(t){return pt(t._redirectPersistence)}function Jy(t){return fr(Gy,t.config.apiKey,t.name)}async function Zy(t,e,n=!1){const s=Un(t),r=Eh(s,e),o=await new Wy(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=10*60*1e3;class t_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sh(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oc(e))}saveEventToCache(e){this.cachedEventUids.add(Oc(e)),this.lastProcessedEventTime=Date.now()}}function Oc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i_=/^https?/;async function o_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await s_(t);for(const n of e)try{if(a_(n))return}catch{}We(t,"unauthorized-domain")}function a_(t){const e=go(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!i_.test(n))return!1;if(r_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const c_=new Os(3e4,6e4);function $c(){const t=it().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function l_(t){return new Promise((e,n)=>{var s,r,i;function o(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),n(rt(t,"network-request-failed"))},timeout:c_.get()})}if(!((r=(s=it().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)o();else{const a=By("iframefcb");return it()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},Vy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gr=null,e})}let gr=null;function u_(t){return gr=gr||l_(t),gr}/**
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
 */const h_=new Os(5e3,15e3),d_="__/auth/iframe",f_="emulator/auth/iframe",p_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yo(e,f_):`https://${t.config.authDomain}/${d_}`,s={apiKey:e.apiKey,appName:t.name,v:Ns},r=g_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Rs(s).slice(1)}`}async function y_(t){const e=await u_(t),n=it().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:m_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=it().setTimeout(()=>{i(o)},h_.get());function c(){it().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const __={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v_=500,w_=600,b_="_blank",I_="http://localhost";class Pc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T_(t,e,n,s=v_,r=w_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},__),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ue().toLowerCase();n&&(a=rh(l)?b_:n),sh(l)&&(e=e||I_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(Zm(l)&&a!=="_self")return E_(e||"",a),new Pc(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Pc(h)}function E_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const k_="__/auth/handler",S_="emulator/auth/handler";function Lc(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ns,eventId:r};if(e instanceof ta){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ms){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${A_(t)}?${Rs(a).slice(1)}`}function A_({config:t}){return t.emulator?Yo(t,S_):`https://${t.authDomain}/${k_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="webStorageSupport";class C_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vh,this._completeRedirectFn=Zy,this._overrideRedirectResult=Yy}async _openPopup(e,n,s,r){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Lc(e,n,s,go(),r);return T_(e,o,na())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Dy(Lc(e,n,s,go(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await y_(e),s=new t_(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qi,{type:qi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qi];o!==void 0&&n(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lh()||Jo()||Zr()}}const D_=C_;var Mc="@firebase/auth",Uc="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function O_(t){ct(new Xe("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uh(t)},u=new sy(a,c,l);return Mm(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ct(new Xe("auth-internal",e=>{const n=Un(e.getProvider("auth").getImmediate());return(s=>new R_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Mc,Uc,N_(t)),He(Mc,Uc,"esm2017")}/**
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
 */const $_=5*60,P_=xu("authIdTokenMaxAge")||$_;let Fc=null;const L_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>P_)return;const r=n==null?void 0:n.token;Fc!==r&&(Fc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function M_(t=Go()){const e=cn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lm(t,{popupRedirectResolver:D_,persistence:[Fy,yh,vh]}),s=xu("authTokenSyncURL");if(s){const i=L_(s);Iy(n,i,()=>i(n.currentUser)),by(n,o=>i(o))}const r=Fu("auth");return r&&ry(n,`http://${r}`),n}O_("Browser");const Ah="@firebase/installations",ra="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=1e4,Dh=`w:${ra}`,Rh="FIS_v2",U_="https://firebaseinstallations.googleapis.com/v1",F_=60*60*1e3,x_="installations",V_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},nn=new an(x_,V_,B_);function Nh(t){return t instanceof et&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh({projectId:t}){return`${U_}/projects/${t}/installations`}function $h(t){return{token:t.token,requestStatus:2,expiresIn:q_(t.expiresIn),creationTime:Date.now()}}async function Ph(t,e){const s=(await e.json()).error;return nn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Lh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function j_(t,{refreshToken:e}){const n=Lh(t);return n.append("Authorization",z_(e)),n}async function Mh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function q_(t){return Number(t.replace("s","000"))}function z_(t){return`${Rh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Oh(t),r=Lh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Rh,appId:t.appId,sdkVersion:Dh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Mh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:$h(l.authToken)}}else throw await Ph("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=/^[cdef][\w-]{21}$/,yo="";function W_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Q_(t);return G_.test(n)?n:yo}catch{return yo}}function Q_(t){return K_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new Map;function xh(t,e){const n=ni(t);Vh(n,e),Y_(n,e)}function Vh(t,e){const n=Fh.get(t);if(n)for(const s of n)s(e)}function Y_(t,e){const n=X_();n&&n.postMessage({key:t,fid:e}),J_()}let qt=null;function X_(){return!qt&&"BroadcastChannel"in self&&(qt=new BroadcastChannel("[Firebase] FID Change"),qt.onmessage=t=>{Vh(t.data.key,t.data.fid)}),qt}function J_(){Fh.size===0&&qt&&(qt.close(),qt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebase-installations-database",ev=1,sn="firebase-installations-store";let zi=null;function ia(){return zi||(zi=Hu(Z_,ev,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sn)}}})),zi}async function Dr(t,e){const n=ni(t),r=(await ia()).transaction(sn,"readwrite"),i=r.objectStore(sn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&xh(t,e.fid),e}async function Bh(t){const e=ni(t),s=(await ia()).transaction(sn,"readwrite");await s.objectStore(sn).delete(e),await s.done}async function si(t,e){const n=ni(t),r=(await ia()).transaction(sn,"readwrite"),i=r.objectStore(sn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&xh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){let e;const n=await si(t.appConfig,s=>{const r=tv(s),i=nv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===yo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tv(t){const e=t||{fid:W_(),registrationStatus:0};return jh(e)}function nv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rv(t)}:{installationEntry:e}}async function sv(t,e){try{const n=await H_(t,e);return Dr(t.appConfig,n)}catch(n){throw Nh(n)&&n.customData.serverCode===409?await Bh(t.appConfig):await Dr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rv(t){let e=await xc(t.appConfig);for(;e.registrationStatus===1;)await Uh(100),e=await xc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await oa(t);return s||n}return e}function xc(t){return si(t,e=>{if(!e)throw nn.create("installation-not-found");return jh(e)})}function jh(t){return iv(t)?{fid:t.fid,registrationStatus:0}:t}function iv(t){return t.registrationStatus===1&&t.registrationTime+Ch<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov({appConfig:t,heartbeatServiceProvider:e},n){const s=av(t,n),r=j_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Dh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Mh(()=>fetch(s,a));if(c.ok){const l=await c.json();return $h(l)}else throw await Ph("Generate Auth Token",c)}function av(t,{fid:e}){return`${Oh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e=!1){let n;const s=await si(t.appConfig,i=>{if(!qh(i))throw nn.create("not-registered");const o=i.authToken;if(!e&&uv(o))return i;if(o.requestStatus===1)return n=cv(t,e),i;{if(!navigator.onLine)throw nn.create("app-offline");const a=dv(i);return n=lv(t,a),a}});return n?await n:s.authToken}async function cv(t,e){let n=await Vc(t.appConfig);for(;n.authToken.requestStatus===1;)await Uh(100),n=await Vc(t.appConfig);const s=n.authToken;return s.requestStatus===0?aa(t,e):s}function Vc(t){return si(t,e=>{if(!qh(e))throw nn.create("not-registered");const n=e.authToken;return fv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lv(t,e){try{const n=await ov(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Dr(t.appConfig,s),n}catch(n){if(Nh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Dr(t.appConfig,s)}throw n}}function qh(t){return t!==void 0&&t.registrationStatus===2}function uv(t){return t.requestStatus===2&&!hv(t)}function hv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+F_}function dv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fv(t){return t.requestStatus===1&&t.requestTime+Ch<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(t){const e=t,{installationEntry:n,registrationPromise:s}=await oa(e);return s?s.catch(console.error):aa(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t,e=!1){const n=t;return await mv(n),(await aa(n,e)).token}async function mv(t){const{registrationPromise:e}=await oa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){if(!t||!t.options)throw Hi("App Configuration");if(!t.name)throw Hi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hi(t){return nn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="installations",_v="installations-internal",vv=t=>{const e=t.getProvider("app").getImmediate(),n=yv(e),s=cn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wv=t=>{const e=t.getProvider("app").getImmediate(),n=cn(e,zh).getImmediate();return{getId:()=>pv(n),getToken:r=>gv(n,r)}};function bv(){ct(new Xe(zh,vv,"PUBLIC")),ct(new Xe(_v,wv,"PRIVATE"))}bv();He(Ah,ra);He(Ah,ra,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="analytics",Iv="firebase_id",Tv="origin",Ev=60*1e3,kv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Jr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Sv(t,e){const n=document.createElement("script");n.src=`${Hh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Av(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Cv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Kh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){je.error(a)}t("config",r,i)}async function Dv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Kh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){je.error(i)}}function Rv(t,e,n,s){async function r(i,o,a){try{i==="event"?await Dv(t,e,n,o,a):i==="config"?await Cv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){je.error(c)}}return r}function Nv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Rv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Ov(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Hh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ke=new an("analytics","Analytics",$v);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=30,Lv=1e3;class Mv{constructor(e={},n=Lv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gh=new Mv;function Uv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Fv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Uv(s)},i=kv.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xv(t,e=Gh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ke.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ke.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ev),Wh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Wh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Gh){var i;const{appId:o,measurementId:a}=t;try{await Vv(s,e)}catch(c){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Fv(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Bv(l)){if(r.deleteThrottleMetadata(o),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?pc(n,r.intervalMillis,Pv):pc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),je.debug(`Calling attemptFetch again in ${u} millis`),Wh(t,h,s,r)}}function Vv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bv(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(){if(Bu())try{await ju()}catch(t){return je.warn(Ke.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return je.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hv(t,e,n,s,r,i,o){var a;const c=xv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>je.error(p)),e.push(c);const l=zv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);Ov(i)||Sv(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Tv]="firebase",d.update=!0,h!=null&&(d[Iv]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.app=e}_delete(){return delete ns[this.app.options.appId],Promise.resolve()}}let ns={},Bc=[];const jc={};let Ki="dataLayer",Gv="gtag",qc,Qh,zc=!1;function Wv(){const t=[];if(Vu()&&t.push("This is a browser extension environment."),yg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ke.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function Qv(t,e,n){Wv();const s=t.options.appId;if(!s)throw Ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(ns[s]!=null)throw Ke.create("already-exists",{id:s});if(!zc){Av(Ki);const{wrappedGtag:i,gtagCore:o}=Nv(ns,Bc,jc,Ki,Gv);Qh=i,qc=o,zc=!0}return ns[s]=Hv(t,Bc,jc,e,qc,Ki,n),new Kv(t)}function Yv(t=Go()){t=Ie(t);const e=cn(t,Rr);return e.isInitialized()?e.getImmediate():Xv(t)}function Xv(t,e={}){const n=cn(t,Rr);if(n.isInitialized()){const r=n.getImmediate();if(us(e,n.getOptions()))return r;throw Ke.create("already-initialized")}return n.initialize({options:e})}function Jv(t,e,n,s){t=Ie(t),qv(Qh,ns[t.app.options.appId],e,n,s).catch(r=>je.error(r))}const Hc="@firebase/analytics",Kc="0.9.4";function Zv(){ct(new Xe(Rr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Qv(s,r,n)},"PUBLIC")),ct(new Xe("analytics-internal",t,"PRIVATE")),He(Hc,Kc),He(Hc,Kc,"esm2017");function t(e){try{const n=e.getProvider(Rr).getImmediate();return{logEvent:(s,r,i)=>Jv(n,s,r,i)}}catch(n){throw Ke.create("interop-component-reg-failed",{reason:n})}}}Zv();var ew="firebase",tw="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(ew,tw,"app");var nw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,ca=ca||{},H=nw||self;function Nr(){}function ri(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sw(t){return Object.prototype.hasOwnProperty.call(t,Gi)&&t[Gi]||(t[Gi]=++rw)}var Gi="closure_uid_"+(1e9*Math.random()>>>0),rw=0;function iw(t,e,n){return t.call.apply(t.bind,arguments)}function ow(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=iw:Le=ow,Le.apply(null,arguments)}function sr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Mt(){this.s=this.s,this.o=this.o}var aw=0;Mt.prototype.s=!1;Mt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aw!=0)&&sw(this)};Mt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function la(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Gc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ri(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var cw=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Nr,e),H.removeEventListener("test",Nr,e)}catch{}return t}();function Or(t){return/^[\s\xa0]*$/.test(t)}var Wc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wi(t,e){return t<e?-1:t>e?1:0}function ii(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function nt(t){return ii().indexOf(t)!=-1}function ua(t){return ua[" "](t),t}ua[" "]=Nr;function lw(t){var e=dw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uw=nt("Opera"),Cn=nt("Trident")||nt("MSIE"),Xh=nt("Edge"),_o=Xh||Cn,Jh=nt("Gecko")&&!(ii().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge"))&&!(nt("Trident")||nt("MSIE"))&&!nt("Edge"),hw=ii().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge");function Zh(){var t=H.document;return t?t.documentMode:void 0}var $r;e:{var Qi="",Yi=function(){var t=ii();if(Jh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xh)return/Edge\/([\d\.]+)/.exec(t);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hw)return/WebKit\/(\S+)/.exec(t);if(uw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yi&&(Qi=Yi?Yi[1]:""),Cn){var Xi=Zh();if(Xi!=null&&Xi>parseFloat(Qi)){$r=String(Xi);break e}}$r=Qi}var dw={};function fw(){return lw(function(){let t=0;const e=Wc(String($r)).split("."),n=Wc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Wi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Wi(r[2].length==0,i[2].length==0)||Wi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var vo;if(H.document&&Cn){var Qc=Zh();vo=Qc||parseInt($r,10)||void 0}else vo=void 0;var pw=vo;function gs(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jh){e:{try{ua(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gs.X.h.call(this)}}Ce(gs,Me);var gw={2:"touch",3:"pen",4:"mouse"};gs.prototype.h=function(){gs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xs="closure_listenable_"+(1e6*Math.random()|0),mw=0;function yw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++mw,this.ba=this.ea=!1}function oi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ha(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ed(t){const e={};for(const n in t)e[n]=t[n];return e}const Yc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function td(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Yc.length;i++)n=Yc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ai(t){this.src=t,this.g={},this.h=0}ai.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=bo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new yw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function wo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Yh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(oi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var da="closure_lm_"+(1e6*Math.random()|0),Ji={};function nd(t,e,n,s,r){if(s&&s.once)return rd(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)nd(t,e[i],n,s,r);return null}return n=ga(n),t&&t[xs]?t.N(e,n,Fs(s)?!!s.capture:!!s,r):sd(t,e,n,!1,s,r)}function sd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Fs(r)?!!r.capture:!!r,a=pa(t);if(a||(t[da]=a=new ai(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=_w(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(od(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _w(){function t(n){return e.call(t.src,t.listener,n)}const e=vw;return t}function rd(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rd(t,e[i],n,s,r);return null}return n=ga(n),t&&t[xs]?t.O(e,n,Fs(s)?!!s.capture:!!s,r):sd(t,e,n,!0,s,r)}function id(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)id(t,e[i],n,s,r);else s=Fs(s)?!!s.capture:!!s,n=ga(n),t&&t[xs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=bo(i,n,s,r),-1<n&&(oi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=pa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bo(e,n,s,r)),(n=-1<t?e[t]:null)&&fa(n))}function fa(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xs])wo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(od(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=pa(e))?(wo(n,t),n.h==0&&(n.src=null,e[da]=null)):oi(t)}}}function od(t){return t in Ji?Ji[t]:Ji[t]="on"+t}function vw(t,e){if(t.ba)t=!0;else{e=new gs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&fa(t),t=n.call(s,e)}return t}function pa(t){return t=t[da],t instanceof ai?t:null}var Zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(t){return typeof t=="function"?t:(t[Zi]||(t[Zi]=function(e){return t.handleEvent(e)}),t[Zi])}function ke(){Mt.call(this),this.i=new ai(this),this.P=this,this.I=null}Ce(ke,Mt);ke.prototype[xs]=!0;ke.prototype.removeEventListener=function(t,e,n,s){id(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var r=e;e=new Me(s,t),td(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=rr(o,s,!0,e)&&r}if(o=e.g=t,r=rr(o,s,!0,e)&&r,r=rr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=rr(o,s,!1,e)&&r}ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)oi(n[s]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function rr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&wo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ma=H.JSON.stringify;function ww(){var t=ld;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bw{constructor(){this.h=this.g=null}add(e,n){const s=ad.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ad=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Iw,t=>t.reset());class Iw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Tw(t){H.setTimeout(()=>{throw t},0)}function cd(t,e){Io||Ew(),To||(Io(),To=!0),ld.add(t,e)}var Io;function Ew(){var t=H.Promise.resolve(void 0);Io=function(){t.then(kw)}}var To=!1,ld=new bw;function kw(){for(var t;t=ww();){try{t.h.call(t.g)}catch(n){Tw(n)}var e=ad;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}To=!1}function ci(t,e){ke.call(this),this.h=t||1,this.g=e||H,this.j=Le(this.lb,this),this.l=Date.now()}Ce(ci,ke);U=ci.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(ya(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ya(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){ci.X.M.call(this),ya(this),delete this.g};function _a(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function ud(t){t.g=_a(()=>{t.g=null,t.i&&(t.i=!1,ud(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sw extends Mt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ud(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(t){Mt.call(this),this.h=t,this.g={}}Ce(ms,Mt);var Xc=[];function hd(t,e,n,s){Array.isArray(n)||(n&&(Xc[0]=n.toString()),n=Xc);for(var r=0;r<n.length;r++){var i=nd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dd(t){ha(t.g,function(e,n){this.g.hasOwnProperty(n)&&fa(e)},t),t.g={}}ms.prototype.M=function(){ms.X.M.call(this),dd(this)};ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function li(){this.g=!0}li.prototype.Aa=function(){this.g=!1};function Aw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Cw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function In(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rw(t,n)+(s?" "+s:"")})}function Dw(t,e){t.info(function(){return"TIMEOUT: "+e})}li.prototype.info=function(){};function Rw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ma(n)}catch{return e}}var ln={},Jc=null;function ui(){return Jc=Jc||new ke}ln.Pa="serverreachability";function fd(t){Me.call(this,ln.Pa,t)}Ce(fd,Me);function ys(t){const e=ui();Ae(e,new fd(e))}ln.STAT_EVENT="statevent";function pd(t,e){Me.call(this,ln.STAT_EVENT,t),this.stat=e}Ce(pd,Me);function xe(t){const e=ui();Ae(e,new pd(e,t))}ln.Qa="timingevent";function gd(t,e){Me.call(this,ln.Qa,t),this.size=e}Ce(gd,Me);function Vs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var hi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},md={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function va(){}va.prototype.h=null;function Zc(t){return t.h||(t.h=t.i())}function yd(){}var Bs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function wa(){Me.call(this,"d")}Ce(wa,Me);function ba(){Me.call(this,"c")}Ce(ba,Me);var Eo;function di(){}Ce(di,va);di.prototype.g=function(){return new XMLHttpRequest};di.prototype.i=function(){return{}};Eo=new di;function js(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ms(this),this.O=Nw,t=_o?125:void 0,this.T=new ci(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _d}function _d(){this.i=null,this.g="",this.h=!1}var Nw=45e3,ko={},Pr={};U=js.prototype;U.setTimeout=function(t){this.O=t};function So(t,e,n){t.K=1,t.v=pi(wt(e)),t.s=n,t.P=!0,vd(t,null)}function vd(t,e){t.F=Date.now(),qs(t),t.A=wt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ad(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _d,t.g=Wd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Sw(Le(t.La,t,t.g),t.N)),hd(t.S,t.g,"readystatechange",t.ib),e=t.H?ed(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ys(),Aw(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&gt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=gt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||_o||this.g&&(this.h.h||this.g.fa()||sl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ys(3):ys(2)),fi(this);var n=this.g.aa();this.Y=n;t:if(wd(this)){var s=sl(this.g);t="";var r=s.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),ss(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Cw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Or(a)){var l=a;break t}}l=null}if(n=l)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ao(this,n);else{this.i=!1,this.o=3,xe(12),zt(this),ss(this);break e}}this.P?(bd(this,u,o),_o&&this.i&&u==3&&(hd(this.S,this.T,"tick",this.hb),this.T.start())):(In(this.j,this.m,o,null),Ao(this,o)),u==4&&zt(this),this.i&&!this.I&&(u==4?zd(this.l,this):(this.i=!1,qs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xe(12)):(this.o=0,xe(13)),zt(this),ss(this)}}}catch{}finally{}};function wd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function bd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Ow(t,n),r==Pr){e==4&&(t.o=4,xe(14),s=!1),In(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ko){t.o=4,xe(15),In(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else In(t.j,t.m,r,null),Ao(t,r);wd(t)&&r!=Pr&&r!=ko&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ca(e),e.K=!0,xe(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),zt(t),ss(t))}U.hb=function(){if(this.g){var t=gt(this.g),e=this.g.fa();this.C<e.length&&(fi(this),bd(this,t,e),this.i&&t!=4&&qs(this))}};function Ow(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Pr:(n=Number(e.substring(n,s)),isNaN(n)?ko:(s+=1,s+n>e.length?Pr:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,zt(this)};function qs(t){t.V=Date.now()+t.O,Id(t,t.O)}function Id(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vs(Le(t.gb,t),e)}function fi(t){t.B&&(H.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Dw(this.j,this.A),this.K!=2&&(ys(),xe(17)),zt(this),this.o=2,ss(this)):Id(this,this.V-t)};function ss(t){t.l.G==0||t.I||zd(t.l,t)}function zt(t){fi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ya(t.T),dd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ao(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Co(n.h,t))){if(!t.J&&Co(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ur(n),yi(n);else break e;Aa(n),xe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Vs(Le(n.cb,n),6e3));if(1>=Rd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ht(n,11)}else if((t.J||n.g==t)&&Ur(n),!Or(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.h;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ia(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,he(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gd(s,s.H?s.ka:null,s.V),o.J){Nd(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(fi(a),qs(a)),s.g=o}else jd(s);0<n.i.length&&_i(n)}else l[0]!="stop"&&l[0]!="close"||Ht(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ht(n,7):Sa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ys(4)}catch{}}function $w(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ri(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Pw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ri(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Td(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ri(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Pw(t),s=$w(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ed=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wt){this.h=e!==void 0?e:t.h,Lr(this,t.j),this.s=t.s,this.g=t.g,Mr(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),el(this,n),this.o=t.o}else t&&(n=String(t).match(Ed))?(this.h=!!e,Lr(this,n[1]||"",!0),this.s=Yn(n[2]||""),this.g=Yn(n[3]||"",!0),Mr(this,n[4]),this.l=Yn(n[5]||"",!0),el(this,n[6]||"",!0),this.o=Yn(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}Wt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,tl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,tl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?Fw:Uw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,Vw)),t.join("")};function wt(t){return new Wt(t)}function Lr(t,e,n){t.j=n?Yn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function el(t,e,n){e instanceof _s?(t.i=e,Bw(t.i,t.h)):(n||(e=Xn(e,xw)),t.i=new _s(e,t.h))}function he(t,e,n){t.i.set(e,n)}function pi(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Mw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Mw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tl=/[#\/\?@]/g,Uw=/[#\?:]/g,Fw=/[#\?]/g,xw=/[#\?@]/g,Vw=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ut(t){t.g||(t.g=new Map,t.h=0,t.i&&Lw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=_s.prototype;U.add=function(t,e){Ut(this),this.i=null,t=xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kd(t,e){Ut(t),e=xn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sd(t,e){return Ut(t),e=xn(t,e),t.g.has(e)}U.forEach=function(t,e){Ut(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Ut(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Ut(this);let e=[];if(typeof t=="string")Sd(this,t)&&(e=e.concat(this.g.get(xn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Ut(this),this.i=null,t=xn(this,t),Sd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ad(t,e,n){kd(t,e),0<n.length&&(t.i=null,t.g.set(xn(t,e),la(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bw(t,e){e&&!t.j&&(Ut(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(kd(this,s),Ad(this,r,n))},t)),t.j=e}var jw=class{constructor(e,n){this.h=e,this.g=n}};function Cd(t){this.l=t||qw,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ga&&H.g.Ga()&&H.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qw=10;function Dd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rd(t){return t.h?1:t.g?t.g.size:0}function Co(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ia(t,e){t.g?t.g.add(e):t.h=e}function Nd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cd.prototype.cancel=function(){if(this.i=Od(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Od(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return la(t.i)}function Ta(){}Ta.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Ta.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function zw(){this.g=new Ta}function Hw(t,e,n){const s=n||"";try{Td(t,function(r,i){let o=r;Fs(r)&&(o=ma(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Kw(t,e){const n=new li;if(H.Image){const s=new Image;s.onload=sr(ir,n,s,"TestLoadImage: loaded",!0,e),s.onerror=sr(ir,n,s,"TestLoadImage: error",!1,e),s.onabort=sr(ir,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=sr(ir,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ir(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function zs(t){this.l=t.ac||null,this.j=t.jb||!1}Ce(zs,va);zs.prototype.g=function(){return new gi(this.l,this.j)};zs.prototype.i=function(t){return function(){return t}}({});function gi(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(gi,ke);var Ea=0;U=gi.prototype;U.open=function(t,e){if(this.readyState!=Ea)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vs(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=Ea};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$d(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function $d(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hs(this):vs(this),this.readyState==3&&$d(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Hs(this))};U.Ua=function(t){this.g&&(this.response=t,Hs(this))};U.ga=function(){this.g&&Hs(this)};function Hs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vs(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Gw=H.JSON.parse;function de(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pd,this.K=this.L=!1}Ce(de,ke);var Pd="",Ww=/^https?$/i,Qw=["POST","PUT"];U=de.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Eo.g(),this.C=this.u?Zc(this.u):Zc(Eo),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){nl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=H.FormData&&t instanceof H.FormData,!(0<=Yh(Qw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ud(this),0<this.B&&((this.K=Yw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=_a(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){nl(this,i)}};function Yw(t){return Cn&&fw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof ca<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function nl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ld(t),mi(t)}function Ld(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),mi(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mi(this,!0)),de.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Md(this):this.fb())};U.fb=function(){Md(this)};function Md(t){if(t.h&&typeof ca<"u"&&(!t.C[1]||gt(t)!=4||t.aa()!=2)){if(t.v&&gt(t)==4)_a(t.Ha,0,t);else if(Ae(t,"readystatechange"),gt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Ed)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ww.test(r?r.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ld(t)}}finally{mi(t)}}}}function mi(t,e){if(t.g){Ud(t);const n=t.g,s=t.C[0]?Nr:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ud(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function gt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Gw(e)}};function sl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Pd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fd(t){let e="";return ha(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ka(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Fd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xd(t){this.Ca=0,this.i=[],this.j=new li,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Kn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Kn("baseRetryDelayMs",5e3,t),this.bb=Kn("retryDelaySeedMs",1e4,t),this.$a=Kn("forwardChannelMaxRetries",2,t),this.ta=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Cd(t&&t.concurrentRequestLimit),this.Fa=new zw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=xd.prototype;U.ma=8;U.G=1;function Sa(t){if(Vd(t),t.G==3){var e=t.U++,n=wt(t.F);he(n,"SID",t.I),he(n,"RID",e),he(n,"TYPE","terminate"),Ks(t,n),e=new js(t,t.j,e,void 0),e.K=2,e.v=pi(wt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wd(e.l,null),e.g.da(e.v)),e.F=Date.now(),qs(e)}Kd(t)}function yi(t){t.g&&(Ca(t),t.g.cancel(),t.g=null)}function Vd(t){yi(t),t.u&&(H.clearTimeout(t.u),t.u=null),Ur(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function _i(t){Dd(t.h)||t.m||(t.m=!0,cd(t.Ja,t),t.C=0)}function Xw(t,e){return Rd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Vs(Le(t.Ja,t,e),Hd(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new js(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ed(i),td(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bd(this,r,e),n=wt(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),Ks(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Fd(i)))+"&"+e:this.o&&ka(n,this.o,i)),Ia(this.h,r),this.Ya&&he(n,"TYPE","init"),this.O?(he(n,"$req",e),he(n,"SID","null"),r.Z=!0,So(r,n,null)):So(r,n,e),this.G=2}}else this.G==3&&(t?rl(this,t):this.i.length==0||Dd(this.h)||rl(this))};function rl(t,e){var n;e?n=e.m:n=t.U++;const s=wt(t.F);he(s,"SID",t.I),he(s,"RID",n),he(s,"AID",t.T),Ks(t,s),t.o&&t.s&&ka(s,t.o,t.s),n=new js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Bd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ia(t.h,n),So(n,s,e)}function Ks(t,e){t.ia&&ha(t.ia,function(n,s){he(e,s,n)}),t.l&&Td({},function(n,s){he(e,s,n)})}function Bd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Le(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Hw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jd(t){t.g||t.u||(t.Z=1,cd(t.Ia,t),t.A=0)}function Aa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Vs(Le(t.Ia,t),Hd(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,qd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Vs(Le(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,xe(10),yi(this),qd(this))};function Ca(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function qd(t){t.g=new js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wt(t.sa);he(e,"RID","rpc"),he(e,"SID",t.I),he(e,"CI",t.L?"0":"1"),he(e,"AID",t.T),he(e,"TYPE","xmlhttp"),Ks(t,e),t.o&&t.s&&ka(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=pi(wt(e)),n.s=null,n.P=!0,vd(n,t)}U.cb=function(){this.v!=null&&(this.v=null,yi(this),Aa(this),xe(19))};function Ur(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function zd(t,e){var n=null;if(t.g==e){Ur(t),Ca(t),t.g=null;var s=2}else if(Co(t.h,e))n=e.D,Nd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ui(),Ae(s,new gd(s,n)),_i(t)}else jd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Xw(t,e)||s==2&&Aa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ht(t,5);break;case 4:Ht(t,10);break;case 3:Ht(t,6);break;default:Ht(t,2)}}}function Hd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ht(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Le(t.kb,t);n||(n=new Wt("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Lr(n,"https"),pi(n)),Kw(n.toString(),s)}else xe(2);t.G=0,t.l&&t.l.va(e),Kd(t),Vd(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Kd(t){if(t.G=0,t.la=[],t.l){const e=Od(t.h);(e.length!=0||t.i.length!=0)&&(Gc(t.la,e),Gc(t.la,t.i),t.h.i.length=0,la(t.i),t.i.length=0),t.l.ua()}}function Gd(t,e,n){var s=n instanceof Wt?wt(n):new Wt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Mr(s,s.m);else{var r=H.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Wt(null,void 0);s&&Lr(i,s),e&&(i.g=e),r&&Mr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&he(s,n,e),he(s,"VER",t.ma),Ks(t,s),s}function Wd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new de(new zs({jb:!0})):new de(t.ra),e.Ka(t.H),e}function Qd(){}U=Qd.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Fr(){if(Cn&&!(10<=Number(pw)))throw Error("Environmental error: no available transport.")}Fr.prototype.g=function(t,e){return new qe(t,e)};function qe(t,e){ke.call(this),this.g=new xd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Or(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Or(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vn(this)}Ce(qe,ke);qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;xe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gd(t,null,t.V),_i(t)};qe.prototype.close=function(){Sa(this.g)};qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ma(t),t=n);e.i.push(new jw(e.ab++,t)),e.G==3&&_i(e)};qe.prototype.M=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,qe.X.M.call(this)};function Yd(t){wa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(Yd,wa);function Xd(){ba.call(this),this.status=1}Ce(Xd,ba);function Vn(t){this.g=t}Ce(Vn,Qd);Vn.prototype.xa=function(){Ae(this.g,"a")};Vn.prototype.wa=function(t){Ae(this.g,new Yd(t))};Vn.prototype.va=function(t){Ae(this.g,new Xd)};Vn.prototype.ua=function(){Ae(this.g,"b")};Fr.prototype.createWebChannel=Fr.prototype.g;qe.prototype.send=qe.prototype.u;qe.prototype.open=qe.prototype.m;qe.prototype.close=qe.prototype.close;hi.NO_ERROR=0;hi.TIMEOUT=8;hi.HTTP_ERROR=6;md.COMPLETE="complete";yd.EventType=Bs;Bs.OPEN="a";Bs.CLOSE="b";Bs.ERROR="c";Bs.MESSAGE="d";ke.prototype.listen=ke.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.Oa;de.prototype.getLastErrorCode=de.prototype.Ea;de.prototype.getStatus=de.prototype.aa;de.prototype.getResponseJson=de.prototype.Sa;de.prototype.getResponseText=de.prototype.fa;de.prototype.send=de.prototype.da;de.prototype.setWithCredentials=de.prototype.Ka;var Jw=function(){return new Fr},Zw=function(){return ui()},eo=hi,e0=md,t0=ln,il={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},n0=zs,or=yd,s0=de;const ol="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Jr("@firebase/firestore");function al(){return rn.logLevel}function x(t,...e){if(rn.logLevel<=ne.DEBUG){const n=e.map(Da);rn.debug(`Firestore (${Bn}): ${t}`,...n)}}function bt(t,...e){if(rn.logLevel<=ne.ERROR){const n=e.map(Da);rn.error(`Firestore (${Bn}): ${t}`,...n)}}function Do(t,...e){if(rn.logLevel<=ne.WARN){const n=e.map(Da);rn.warn(`Firestore (${Bn}): ${t}`,...n)}}function Da(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: `+t;throw bt(e),new Error(e)}function oe(t,e){t||q()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class i0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o0{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string"),new Jd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Re(e)}}class a0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class c0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new a0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.A=n.token,new l0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=h0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function Dn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new we(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new we(0,0))}static max(){return new Q(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ws{construct(e,n,s){return new ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const d0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ws{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return d0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ae.fromString(e))}static fromName(e){return new B(ae.fromString(e).popFirst(5))}static empty(){return new B(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ae(e.slice()))}}function f0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Ot(r,B.empty(),e)}function p0(t){return new Ot(t.readTime,t.key,-1)}class Ot{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ot(Q.min(),B.empty(),-1)}static max(){return new Ot(Q.max(),B.empty(),-1)}}function g0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==m0)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ra.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ef(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return t==null}function xr(t){return t===0&&1/t==-1/0}function v0(t){return typeof t=="number"&&Number.isInteger(t)&&!xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class w0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new w0("Invalid base64 string: "+r):r}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const b0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(oe(!!t),typeof t=="string"){let e=0;const n=b0.exec(t);if(oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rn(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nf(t){const e=t.mapValue.fields.__previous_value__;return tf(e)?nf(e):e}function Is(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function on(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tf(t)?4:I0(t)?9007199254740991:10:q()}function lt(t,e){if(t===e)return!0;const n=on(t);if(n!==on(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$t(s.timestampValue),o=$t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Rn(s.bytesValue).isEqual(Rn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=_e(s.doubleValue),o=_e(r.doubleValue);return i===o?xr(i)===xr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Dn(t.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(cl(i)!==cl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!lt(i[a],o[a])))return!1;return!0}(t,e);default:return q()}}function Ts(t,e){return(t.values||[]).find(n=>lt(n,e))!==void 0}function Nn(t,e){if(t===e)return 0;const n=on(t),s=on(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=_e(r.integerValue||r.doubleValue),a=_e(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ll(t.timestampValue,e.timestampValue);case 4:return ll(Is(t),Is(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Rn(r),a=Rn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(_e(r.latitude),_e(i.latitude));return o!==0?o:se(_e(r.longitude),_e(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ar.mapValue&&i===ar.mapValue)return 0;if(r===ar.mapValue)return 1;if(i===ar.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=se(a[u],l[u]);if(h!==0)return h;const d=Nn(o[a[u]],c[l[u]]);if(d!==0)return d}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function ll(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=$t(t),s=$t(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function On(t){return Ro(t)}function Ro(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$t(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ro(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ro(s.fields[a])}`;return i+"}"}(t.mapValue):q();var e,n}function ul(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function No(t){return!!t&&"integerValue"in t}function Na(t){return!!t&&"arrayValue"in t}function hl(t){return!!t&&"nullValue"in t}function dl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mr(t){return!!t&&"mapValue"in t}function rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=rs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function I0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vr{constructor(e,n){this.position=e,this.inclusive=n}}function fl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Nn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function pl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sf{}class ve extends sf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new E0(e,n,s):n==="array-contains"?new A0(e,s):n==="in"?new C0(e,s):n==="not-in"?new D0(e,s):n==="array-contains-any"?new R0(e,s):new ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new k0(e,s):new S0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nn(n,this.value)):n!==null&&on(this.value)===on(n)&&this.matchesComparison(Nn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Je extends sf{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Je(e,n)}matches(e){return rf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function rf(t){return t.op==="and"}function of(t){return T0(t)&&rf(t)}function T0(t){for(const e of t.filters)if(e instanceof Je)return!1;return!0}function Oo(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+On(t.value);if(of(t))return t.filters.map(e=>Oo(e)).join(",");{const e=t.filters.map(n=>Oo(n)).join(",");return`${t.op}(${e})`}}function af(t,e){return t instanceof ve?function(n,s){return s instanceof ve&&n.op===s.op&&n.field.isEqual(s.field)&&lt(n.value,s.value)}(t,e):t instanceof Je?function(n,s){return s instanceof Je&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&af(i,s.filters[o]),!0):!1}(t,e):void q()}function cf(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${On(e.value)}`}(t):t instanceof Je?function(e){return e.op.toString()+" {"+e.getFilters().map(cf).join(" ,")+"}"}(t):"Filter"}class E0 extends ve{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class k0 extends ve{constructor(e,n){super(e,"in",n),this.keys=lf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class S0 extends ve{constructor(e,n){super(e,"not-in",n),this.keys=lf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class A0 extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Na(n)&&Ts(n.arrayValue,this.value)}}class C0 extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class D0 extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class R0 extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Na(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ts(this.value.arrayValue,s))}}/**
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
 */class is{constructor(e,n="asc"){this.field=e,this.dir=n}}function N0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}}class cr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gl(this.data.getIterator())}getIteratorFrom(e){return new gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Ye([])}unionWith(e){let n=new be($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ye(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(n)}setAll(e){let n=$e.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=rs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());mr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];mr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){jn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ze(rs(this.value))}}function uf(t){const e=[];return jn(t.fields,(n,s)=>{const r=new $e([n]);if(mr(s)){const i=uf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,Q.min(),Q.min(),Q.min(),ze.empty(),0)}static newFoundDocument(e,n,s,r){return new Ne(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new Ne(e,2,n,Q.min(),Q.min(),ze.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,Q.min(),Q.min(),ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function ml(t,e=null,n=[],s=[],r=null,i=null,o=null){return new O0(t,e,n,s,r,i,o)}function Oa(t){const e=Y(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Oo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),vi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>On(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>On(s)).join(",")),e._t=n}return e._t}function $a(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!N0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!af(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pl(t.startAt,e.startAt)&&pl(t.endAt,e.endAt)}function $o(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function $0(t,e,n,s,r,i,o,a){return new Qs(t,e,n,s,r,i,o,a)}function Pa(t){return new Qs(t)}function yl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function La(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function df(t){return t.collectionGroup!==null}function Sn(t){const e=Y(t);if(e.wt===null){e.wt=[];const n=La(e),s=hf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new is(n)),e.wt.push(new is($e.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new is($e.keyField(),i))}}}return e.wt}function It(t){const e=Y(t);if(!e.gt)if(e.limitType==="F")e.gt=ml(e.path,e.collectionGroup,Sn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Sn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new is(i.field,o))}const s=e.endAt?new Vr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Vr(e.startAt.position,e.startAt.inclusive):null;e.gt=ml(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Po(t,e){e.getFirstInequalityField(),La(t);const n=t.filters.concat([e]);return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lo(t,e,n){return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wi(t,e){return $a(It(t),It(e))&&t.limitType===e.limitType}function ff(t){return`${Oa(It(t))}|lt:${t.limitType}`}function Mo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>cf(s)).join(", ")}]`),vi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>On(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>On(s)).join(",")),`Target(${n})`}(It(t))}; limitType=${t.limitType})`}function bi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Sn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=fl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Sn(n),s)||n.endAt&&!function(r,i,o){const a=fl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Sn(n),s))}(t,e)}function P0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pf(t){return(e,n)=>{let s=!1;for(const r of Sn(t)){const i=L0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function L0(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Nn(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function mf(t){return{integerValue:""+t}}function M0(t,e){return v0(e)?mf(e):gf(t,e)}/**
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
 */class Ii{constructor(){this._=void 0}}function U0(t,e,n){return t instanceof Br?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Es?_f(t,e):t instanceof ks?vf(t,e):function(s,r){const i=yf(s,r),o=_l(i)+_l(s.It);return No(i)&&No(s.It)?mf(o):gf(s.Tt,o)}(t,e)}function F0(t,e,n){return t instanceof Es?_f(t,e):t instanceof ks?vf(t,e):n}function yf(t,e){return t instanceof jr?No(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Br extends Ii{}class Es extends Ii{constructor(e){super(),this.elements=e}}function _f(t,e){const n=wf(e);for(const s of t.elements)n.some(r=>lt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ks extends Ii{constructor(e){super(),this.elements=e}}function vf(t,e){let n=wf(e);for(const s of t.elements)n=n.filter(r=>!lt(r,s));return{arrayValue:{values:n}}}class jr extends Ii{constructor(e,n){super(),this.Tt=e,this.It=n}}function _l(t){return _e(t.integerValue||t.doubleValue)}function wf(t){return Na(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function x0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Es&&s instanceof Es||n instanceof ks&&s instanceof ks?Dn(n.elements,s.elements,lt):n instanceof jr&&s instanceof jr?lt(n.It,s.It):n instanceof Br&&s instanceof Br}(t.transform,e.transform)}class V0{constructor(e,n){this.version=e,this.transformResults=n}}class ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ti{}function bf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ma(t.key,ot.none()):new Ys(t.key,t.data,ot.none());{const n=t.data,s=ze.empty();let r=new be($e.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new un(t.key,s,new Ye(r.toArray()),ot.none())}}function B0(t,e,n){t instanceof Ys?function(s,r,i){const o=s.value.clone(),a=wl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof un?function(s,r,i){if(!yr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=wl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(If(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function os(t,e,n,s){return t instanceof Ys?function(r,i,o,a){if(!yr(r.precondition,i))return o;const c=r.value.clone(),l=bl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof un?function(r,i,o,a){if(!yr(r.precondition,i))return o;const c=bl(r.fieldTransforms,a,i),l=i.data;return l.setAll(If(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return yr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function j0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=yf(s.transform,r||null);i!=null&&(n===null&&(n=ze.empty()),n.set(s.field,i))}return n||null}function vl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Dn(n,s,(r,i)=>x0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ys extends Ti{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class un extends Ti{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function If(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function wl(t,e,n){const s=new Map;oe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,F0(o,a,n[r]))}return s}function bl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,U0(i,o,e))}return s}class Ma extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q0 extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ee;function H0(t){switch(t){default:return q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Tf(t){if(t===void 0)return bt("GRPC error has no .code"),S.UNKNOWN;switch(t){case ye.OK:return S.OK;case ye.CANCELLED:return S.CANCELLED;case ye.UNKNOWN:return S.UNKNOWN;case ye.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ye.INTERNAL:return S.INTERNAL;case ye.UNAVAILABLE:return S.UNAVAILABLE;case ye.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ye.NOT_FOUND:return S.NOT_FOUND;case ye.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ye.ABORTED:return S.ABORTED;case ye.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ye.DATA_LOSS:return S.DATA_LOSS;default:return q()}}(ee=ye||(ye={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Te(B.comparator);function Tt(){return K0}const Ef=new Te(B.comparator);function Jn(...t){let e=Ef;for(const n of t)e=e.insert(n.key,n);return e}function kf(t){let e=Ef;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kt(){return as()}function Sf(){return as()}function as(){return new qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const G0=new Te(B.comparator),W0=new be(B.comparator);function Z(...t){let e=W0;for(const n of t)e=e.add(n);return e}const Q0=new be(se);function Af(){return Q0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Xs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ei(Q.min(),r,Af(),Tt(),Z())}}class Xs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Xs(s,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Cf{constructor(e,n){this.targetId=e,this.Rt=n}}class Df{constructor(e,n,s=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Il{constructor(){this.Pt=0,this.vt=El(),this.bt=Fe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=Z(),n=Z(),s=Z();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:q()}}),new Xs(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=El()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class Y0{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Tt(),this.Kt=Tl(),this.Gt=new be(se)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if($o(i))if(s===0){const o=new B(i.path);this.zt(n,o,Ne.newNoDocument(o,Q.min()))}else oe(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&$o(a.target)){const c=new B(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ne.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=Z();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ei(e,n,this.Gt,this.Ut,s);return this.Ut=Tt(),this.Kt=Tl(),this.Gt=new be(se),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new Il,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new be(se),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Il),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Tl(){return new Te(B.comparator)}function El(){return new Te(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),J0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Z0=(()=>({and:"AND",or:"OR"}))();class eb{constructor(e,n){this.databaseId=e,this.yt=n}}function qr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function tb(t,e){return qr(t,e.toTimestamp())}function at(t){return oe(!!t),Q.fromTimestamp(function(e){const n=$t(e);return new we(n.seconds,n.nanos)}(t))}function Ua(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Nf(t){const e=ae.fromString(t);return oe(Lf(e)),e}function Uo(t,e){return Ua(t.databaseId,e.path)}function to(t,e){const n=Nf(e);if(n.get(1)!==t.databaseId.projectId)throw new P(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Of(n))}function Fo(t,e){return Ua(t.databaseId,e)}function nb(t){const e=Nf(t);return e.length===4?ae.emptyPath():Of(e)}function xo(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Of(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kl(t,e,n){return{name:Uo(t,e),fields:n.value.mapValue.fields}}function sb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(oe(l===void 0||typeof l=="string"),Fe.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),Fe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:Tf(c.code);return new P(l,c.message||"")}(o);n=new Df(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=to(t,s.document.name),i=at(s.document.updateTime),o=s.document.createTime?at(s.document.createTime):Q.min(),a=new ze({mapValue:{fields:s.document.fields}}),c=Ne.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new _r(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=to(t,s.document),i=s.readTime?at(s.readTime):Q.min(),o=Ne.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _r([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=to(t,s.document),i=s.removedTargetIds||[];n=new _r([],i,r,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new z0(r),o=s.targetId;n=new Cf(o,i)}}return n}function rb(t,e){let n;if(e instanceof Ys)n={update:kl(t,e.key,e.value)};else if(e instanceof Ma)n={delete:Uo(t,e.key)};else if(e instanceof un)n={update:kl(t,e.key,e.data),updateMask:fb(e.fieldMask)};else{if(!(e instanceof q0))return q();n={verify:Uo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Br)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Es)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ks)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:tb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q()}(t,e.precondition)),n}function ib(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?at(s.updateTime):at(r);return i.isEqual(Q.min())&&(i=at(r)),new V0(i,s.transformResults||[])}(n,e))):[]}function ob(t,e){return{documents:[Fo(t,e.path)]}}function ab(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Fo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Pf(Je.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:_n(u.field),direction:ub(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||vi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function cb(t){let e=nb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){oe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=$f(u);return h instanceof Je&&of(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new is(vn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,vi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Vr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Vr(d,h)}(n.endAt)),$0(e,r,o,i,a,"F",c,l)}function lb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function $f(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vn(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=vn(e.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vn(e.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vn(e.unaryFilter.field);return ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(vn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Je.create(e.compositeFilter.filters.map(n=>$f(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function ub(t){return X0[t]}function hb(t){return J0[t]}function db(t){return Z0[t]}function _n(t){return{fieldPath:t.canonicalString()}}function vn(t){return $e.fromServerFormat(t.fieldPath)}function Pf(t){return t instanceof ve?function(e){if(e.op==="=="){if(dl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(hl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(hl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:hb(e.op),value:e.value}}}(t):t instanceof Je?function(e){const n=e.getFilters().map(s=>Pf(s));return n.length===1?n[0]:{compositeFilter:{op:db(e.op),filters:n}}}(t):q()}function fb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&B0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=os(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=os(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Sf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=bf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(n,s)=>vl(n,s))&&Dn(this.baseMutations,e.baseMutations,(n,s)=>vl(n,s))}}class Fa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){oe(e.mutations.length===s.length);let r=G0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fa(e,n,s,r)}}/**
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
 */class gb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Yt{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.oe=e}}function yb(t){const e=cb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.Ze=new vb}addToCollectionParentIndex(e,n){return this.Ze.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Ot.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class vb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new be(ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new be(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new $n(0)}static Sn(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.changes=new qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&os(s.mutation,r,Ye.empty(),we.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Z()){const r=Kt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Jn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Z()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Tt();const o=as(),a=as();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof un)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),os(u.mutation,l,u.mutation.getFieldMask(),we.now())):o.set(l.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new bb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=as();let r=new Te((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ye.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Z()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Sf();u.forEach(d=>{if(!i.has(d)){const p=bf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):df(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(Kt());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:kf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=Jn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Jn();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new Qs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ne.newInvalidDocument(l)))});let o=Jn();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&os(l.mutation,c,Ye.empty(),we.now()),bi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return R.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:at(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:yb(s.bundledQuery),readTime:at(s.readTime)}}(n)),R.resolve()}}/**
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
 */class Eb{constructor(){this.overlays=new Te(B.comparator),this.ss=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kt();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=Kt(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Te((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Kt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gb(n,s));let i=this.ss.get(n);i===void 0&&(i=Z(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.rs=new be(Ee.os),this.us=new be(Ee.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ee(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ee(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new B(new ae([])),s=new Ee(n,e),r=new Ee(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new B(new ae([])),s=new Ee(n,e),r=new Ee(n,e+1);let i=Z();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ee(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return B.comparator(e.key,n.key)||se(e.gs,n.gs)}static cs(e,n){return se(e.gs,n.gs)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new be(Ee.os)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ee(n,0),r=new Ee(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new be(se);return n.forEach(r=>{const i=new Ee(r,0),o=new Ee(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),R.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new B(i),0);let a=new be(se);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),R.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){oe(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return R.forEach(n.mutations,r=>{const i=new Ee(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new Ee(n,0),r=this.ps.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.Rs=e,this.docs=new Te(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let s=Tt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ne.newInvalidDocument(r))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Tt();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||g0(p0(u),s)<=0||(r.has(u.key)||bi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,s,r){q()}Ps(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Ab(this)}getSize(e){return R.resolve(this.size)}}class Ab extends wb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.persistence=e,this.vs=new qn(n=>Oa(n),$a),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Vs=new xa,this.targetCount=0,this.Ss=$n.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),R.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new $n(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.xn(n),R.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ra(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Cb(this),this.indexManager=new _b,this.remoteDocumentCache=function(s){return new Sb(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new mb(n),this.$s=new Tb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Eb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new kb(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){x("MemoryPersistence","Starting transaction:",e);const r=new Rb(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return R.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Rb extends y0{constructor(e){super(),this.currentSequenceNumber=e}}class Va{constructor(e){this.persistence=e,this.Bs=new xa,this.Ls=null}static qs(e){return new Va(e)}get Us(){if(this.Ls)return this.Ls;throw q()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),R.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Us,s=>{const r=B.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return R.or([()=>R.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ba(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(yl(n))return R.resolve(null);let s=It(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Lo(n,null,"F"),s=It(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Z(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Lo(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return yl(n)||r.isEqual(Q.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(al()<=ne.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mo(n)),this.qi(e,o,n,f0(r,-1)))})}Bi(e,n){let s=new be(pf(e));return n.forEach((r,i)=>{bi(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return al()<=ne.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Mo(n)),this.$i.getDocumentsMatchingQuery(e,n,Ot.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Te(se),this.Gi=new qn(i=>Oa(i),$a),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ib(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function $b(t,e,n,s){return new Ob(t,e,n,s)}async function Mf(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Z();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Pb(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=R.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(_=>{const g=c.docVersions.get(p);oe(g!==null),_.version.compareTo(g)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Uf(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Lb(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Fe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(_,g,m){return _.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=Tt(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Mb(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(Q.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function Mb(t,e,n){let s=Z(),r=Z();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Tt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Ub(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Fb(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Yt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Vo(t,e,n){const s=Y(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ws(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Sl(t,e,n){const s=Y(t);let r=Q.min(),i=Z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.Gi.get(l);return h!==void 0?R.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,It(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:Z())).next(a=>(xb(s,P0(e),a),{documents:a,Yi:i})))}function xb(t,e,n){let s=t.Qi.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Al{constructor(){this.activeTargetIds=Af()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vb{constructor(){this.Ur=new Al,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Al,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lr=null;function no(){return lr===null?lr=268435456+Math.round(2147483648*Math.random()):lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class zb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=no(),a=this.fo(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(x("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Do("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=jb[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=no();return new Promise((o,a)=>{const c=new s0;c.setWithCredentials(!0),c.listenOnce(e0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case eo.NO_ERROR:const u=c.getResponseJson();x(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case eo.TIMEOUT:x(De,`RPC '${e}' ${i} timed out`),a(new P(S.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const h=c.getStatus();if(x(De,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(p.status);a(new P(_,p.message))}else a(new P(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new P(S.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{x(De,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);x(De,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=no(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jw(),a=Zw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new n0({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");x(De,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new qb({Yr:g=>{d?x(De,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(x(De,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),x(De,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),_=(g,m,I)=>{g.listen(m,b=>{try{I(b)}catch(k){setTimeout(()=>{throw k},0)}})};return _(u,or.EventType.OPEN,()=>{d||x(De,`RPC '${e}' stream ${r} transport opened.`)}),_(u,or.EventType.CLOSE,()=>{d||(d=!0,x(De,`RPC '${e}' stream ${r} transport closed`),p.oo())}),_(u,or.EventType.ERROR,g=>{d||(d=!0,Do(De,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new P(S.UNAVAILABLE,"The operation could not be completed")))}),_(u,or.EventType.MESSAGE,g=>{var m;if(!d){const I=g.data[0];oe(!!I);const b=I,k=b.error||((m=b[0])===null||m===void 0?void 0:m.error);if(k){x(De,`RPC '${e}' stream ${r} received error:`,k);const E=k.status;let N=function(X){const fe=ye[X];if(fe!==void 0)return Tf(fe)}(E),O=k.message;N===void 0&&(N=S.INTERNAL,O="Unknown error status: "+E+" with message "+k.message),d=!0,p.oo(new P(N,O)),u.close()}else x(De,`RPC '${e}' stream ${r} received:`,I),p.uo(I)}}),_(a,t0.STAT_EVENT,g=>{g.stat===il.PROXY?x(De,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===il.NOPROXY&&x(De,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function so(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){return new eb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ff(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(bt(n.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new P(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hb extends xf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=sb(this.Tt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?at(i.readTime):Q.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=xo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=$o(a)?{documents:ob(r,a)}:{query:ab(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Rf(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=qr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=lb(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=xo(this.Tt),n.removeTarget=e,this.qo(n)}}class Kb extends xf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=ib(e.writeResults,e.commitTime),s=at(e.commitTime);return this.listener.eu(s,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=xo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>rb(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new P(S.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(S.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(S.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class Wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(bt(n),this.cu=!1):x("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{hn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.mu.add(4),await Js(c),c.pu.set("Unknown"),c.mu.delete(4),await Si(c)}(this))})}),this.pu=new Wb(s,r)}}async function Si(t){if(hn(t))for(const e of t.gu)await e(!0)}async function Js(t){for(const e of t.gu)await e(!1)}function Vf(t,e){const n=Y(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),za(n)?qa(n):zn(n).Mo()&&ja(n,e))}function Bf(t,e){const n=Y(t),s=zn(n);n.wu.delete(e),s.Mo()&&jf(n,e),n.wu.size===0&&(s.Mo()?s.Bo():hn(n)&&n.pu.set("Unknown"))}function ja(t,e){t.Iu.Ot(e.targetId),zn(t).Jo(e)}function jf(t,e){t.Iu.Ot(e),zn(t).Yo(e)}function qa(t){t.Iu=new Y0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),zn(t).start(),t.pu.au()}function za(t){return hn(t)&&!zn(t).$o()&&t.wu.size>0}function hn(t){return Y(t).mu.size===0}function qf(t){t.Iu=void 0}async function Yb(t){t.wu.forEach((e,n)=>{ja(t,e)})}async function Xb(t,e){qf(t),za(t)?(t.pu.fu(e),qa(t)):t.pu.set("Unknown")}async function Jb(t,e,n){if(t.pu.set("Online"),e instanceof Df&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zr(t,s)}else if(e instanceof _r?t.Iu.Qt(e):e instanceof Cf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Q.min()))try{const s=await Uf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Fe.EMPTY_BYTE_STRING,c.snapshotVersion)),jf(r,a);const l=new Yt(c.target,a,1,c.sequenceNumber);ja(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await zr(t,s)}}async function zr(t,e,n){if(!Ws(e))throw e;t.mu.add(1),await Js(t),t.pu.set("Offline"),n||(n=()=>Uf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Si(t)})}function zf(t,e){return e().catch(n=>zr(t,n,e))}async function Ai(t){const e=Y(t),n=Pt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Zb(e);)try{const r=await Ub(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,eI(e,r)}catch(r){await zr(e,r)}Hf(e)&&Kf(e)}function Zb(t){return hn(t)&&t._u.length<10}function eI(t,e){t._u.push(e);const n=Pt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Hf(t){return hn(t)&&!Pt(t).$o()&&t._u.length>0}function Kf(t){Pt(t).start()}async function tI(t){Pt(t).su()}async function nI(t){const e=Pt(t);for(const n of t._u)e.tu(n.mutations)}async function sI(t,e,n){const s=t._u.shift(),r=Fa.from(s,e,n);await zf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ai(t)}async function rI(t,e){e&&Pt(t).Xo&&await async function(n,s){if(r=s.code,H0(r)&&r!==S.ABORTED){const i=n._u.shift();Pt(n).Fo(),await zf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ai(n)}var r}(t,e),Hf(t)&&Kf(t)}async function Dl(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=hn(n);n.mu.add(3),await Js(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Si(n)}async function iI(t,e){const n=Y(t);e?(n.mu.delete(2),await Si(n)):e||(n.mu.add(2),await Js(n),n.pu.set("Unknown"))}function zn(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.ru(),new Hb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Yb.bind(null,t),no:Xb.bind(null,t),Ho:Jb.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),za(t)?qa(t):t.pu.set("Unknown")):(await t.Tu.stop(),qf(t))})),t.Tu}function Pt(t){return t.Eu||(t.Eu=function(e,n,s){const r=Y(e);return r.ru(),new Kb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:tI.bind(null,t),no:rI.bind(null,t),nu:nI.bind(null,t),eu:sI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ai(t)):(await t.Eu.stop(),t._u.length>0&&(x("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ha(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ka(t,e){if(bt("AsyncQueue",`${e}: ${t}`),Ws(t))return new P(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=Jn(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new An(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof An)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new An;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.Au=new Te(B.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):q():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Pn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pn(e,n,An.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.Pu=void 0,this.listeners=[]}}class aI{constructor(){this.queries=new qn(e=>ff(e),wi),this.onlineState="Unknown",this.vu=new Set}}async function cI(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new oI),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Ka(o,`Initialization of query '${Mo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&Ga(n)}async function lI(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function uI(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&Ga(n)}function hI(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ga(t){t.vu.forEach(e=>{e.next()})}class dI{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Pn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.key=e}}class Wf{constructor(e){this.key=e}}class fI{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Z(),this.mutatedKeys=Z(),this.ju=pf(e),this.zu=new An(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Rl,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=bi(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;d&&p?d.data.isEqual(p.data)?_!==g&&(s.track({type:3,doc:p}),m=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),m=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),m=!0):d&&!p&&(s.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Pn(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Rl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Z(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Wf(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Gf(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=Z();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Pn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class pI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class gI{constructor(e){this.key=e,this.ic=!1}}class mI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new qn(a=>ff(a),wi),this.uc=new Map,this.cc=new Set,this.ac=new Te(B.comparator),this.hc=new Map,this.lc=new xa,this.fc={},this.dc=new Map,this._c=$n.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function yI(t,e){const n=AI(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Fb(n.localStore,It(e));n.isPrimaryClient&&Vf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await _I(n,e,s,a==="current",o.resumeToken)}return r}async function _I(t,e,n,s,r){t.mc=(h,d,p)=>async function(_,g,m,I){let b=g.view.Hu(m);b.Li&&(b=await Sl(_.localStore,g.query,!1).then(({documents:N})=>g.view.Hu(N,b)));const k=I&&I.targetChanges.get(g.targetId),E=g.view.applyChanges(b,_.isPrimaryClient,k);return Ol(_,g.targetId,E.tc),E.snapshot}(t,h,d,p);const i=await Sl(t.localStore,e,!0),o=new fI(e,i.Yi),a=o.Hu(i.documents),c=Xs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Ol(t,n,l.tc);const u=new pI(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function vI(t,e){const n=Y(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!wi(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Bf(n.remoteStore,s.targetId),Bo(n,s.targetId)}).catch(Gs)):(Bo(n,s.targetId),await Vo(n.localStore,s.targetId,!0))}async function wI(t,e,n){const s=CI(t);try{const r=await function(i,o){const a=Y(i),c=we.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tt(),_=Z();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((m,I)=>{I.isValidDocument()||(_=_.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const m=[];for(const I of o){const b=j0(I,u.get(I.key).overlayedDocument);b!=null&&m.push(new un(I.key,b,uf(b.value.mapValue),ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(d,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:kf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Te(se)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Zs(s,r.changes),await Ai(s.remoteStore)}catch(r){const i=Ka(r,"Failed to persist write");n.reject(i)}}async function Qf(t,e){const n=Y(t);try{const s=await Lb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?oe(o.ic):r.removedDocuments.size>0&&(oe(o.ic),o.ic=!1))}),await Zs(n,s,e)}catch(s){await Gs(s)}}function Nl(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Ga(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bI(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Te(B.comparator);o=o.insert(i,Ne.newNoDocument(i,Q.min()));const a=Z().add(i),c=new Ei(Q.min(),new Map,new be(se),o,a);await Qf(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Wa(s)}else await Vo(s.localStore,e,!1).then(()=>Bo(s,e,n)).catch(Gs)}async function II(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await Pb(n.localStore,e);Xf(n,s,null),Yf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zs(n,r)}catch(r){await Gs(r)}}async function TI(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Xf(s,e,n),Yf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zs(s,r)}catch(r){await Gs(r)}}function Yf(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Xf(t,e,n){const s=Y(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Jf(t,s)})}function Jf(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Bf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Wa(t))}function Ol(t,e,n){for(const s of n)s instanceof Gf?(t.lc.addReference(s.key,e),EI(t,s)):s instanceof Wf?(x("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Jf(t,s.key)):q()}function EI(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(x("SyncEngine","New document in limbo: "+n),t.cc.add(s),Wa(t))}function Wa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new B(ae.fromString(e)),s=t._c.next();t.hc.set(s,new gI(n)),t.ac=t.ac.insert(n,s),Vf(t.remoteStore,new Yt(It(Pa(n.path)),s,2,Ra.at))}}async function Zs(t,e,n){const s=Y(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ba.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ws(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,_)}}}(s.localStore,i))}async function kI(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await Mf(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new P(S.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zs(n,s.Wi)}}function SI(t,e){const n=Y(t),s=n.hc.get(e);if(s&&s.ic)return Z().add(s.key);{let r=Z();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function AI(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bI.bind(null,e),e.rc.Ho=uI.bind(null,e.eventManager),e.rc.gc=hI.bind(null,e.eventManager),e}function CI(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=II.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TI.bind(null,e),e}class DI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ki(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return $b(this.persistence,new Nb,e.initialUser,this.Tt)}Tc(e){return new Db(Va.qs,this.Tt)}Ic(e){return new Vb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Nl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kI.bind(null,this.syncEngine),await iI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aI}createDatastore(e){const n=ki(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new zb(r));var r;return function(i,o,a,c){return new Gb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Nl(this.syncEngine,a,0),o=Cl.C()?new Cl:new Bb,new Qb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new mI(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);x("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Js(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=Zd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ka(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function $I(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Mf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function PI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LI(t);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Dl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dl(e.remoteStore,i)),t.onlineComponents=e}async function LI(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await $I(t,new DI)),t.offlineComponents}async function Zf(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await PI(t,new RI)),t.onlineComponents}function MI(t){return Zf(t).then(e=>e.syncEngine)}async function $l(t){const e=await Zf(t),n=e.eventManager;return n.onListen=yI.bind(null,e.syncEngine),n.onUnlisten=vI.bind(null,e.syncEngine),n}const Pl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e,n){if(!n)throw new P(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UI(t,e,n,s){if(e===!0&&s===!0)throw new P(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ll(t){if(!B.isDocumentKey(t))throw new P(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ml(t){if(B.isDocumentKey(t))throw new P(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ci(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ci(t);throw new P(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,UI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ul({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ul(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new r0;switch(n.type){case"gapi":const s=n.client;return new c0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pl.get(e);n&&(x("ComponentProvider","Removing Datastore"),Pl.delete(e),n.terminate())}(this),Promise.resolve()}}function FI(t,e,n,s={}){var r;const i=(t=Xt(t,Di))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Do("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Re.MOCK_USER;else{o=fg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new P(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Re(c)}t._authCredentials=new i0(new Jd(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class Hn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class Nt extends Hn{constructor(e,n,s){super(e,n,Pa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new B(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function xI(t,e,...n){if(t=Ie(t),ep("collection","path",e),t instanceof Di){const s=ae.fromString(e,...n);return Ml(s),new Nt(t,null,s)}{if(!(t instanceof Be||t instanceof Nt))throw new P(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return Ml(s),new Nt(t.firestore,null,s)}}function ur(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=Zd.R()),ep("doc","path",e),t instanceof Di){const s=ae.fromString(e,...n);return Ll(s),new Be(t,null,new B(s))}{if(!(t instanceof Be||t instanceof Nt))throw new P(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return Ll(s),new Be(t.firestore,t instanceof Nt?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ff(this,"async_queue_retry"),this.Hc=()=>{const n=so();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=so();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=so();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Qt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ws(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw bt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Ha.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&q()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Fl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ss extends Di{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new VI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||np(this),this._firestoreClient.terminate()}}function BI(t,e){const n=typeof t=="object"?t:Go(),s=typeof t=="string"?t:e||"(default)",r=cn(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ug("firestore");i&&FI(r,...i)}return r}function tp(t){return t._firestoreClient||np(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function np(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new _0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new OI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Fe.fromBase64String(e))}catch(n){throw new P(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ln(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=/^__.*__$/;class qI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ys(e,this.data,n,this.fieldTransforms)}}function rp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Xa{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Xa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Hr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(rp(this.ra)&&jI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class zI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ki(e)}wa(e,n,s,r=!1){return new Xa({ra:e,methodName:n,_a:s,path:$e.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function ip(t){const e=t._freezeSettings(),n=ki(t._databaseId);return new zI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);cp("Data must be an object, but it was:",o,s);const a=op(s,o);let c,l;if(i.merge)c=new Ye(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=GI(e,h,n);if(!o.contains(d))throw new P(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);QI(u,d)||u.push(d)}c=new Ye(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new qI(new ze(a),c,l)}function KI(t,e,n,s=!1){return Ja(n,t.wa(s?4:3,e))}function Ja(t,e){if(ap(t=Ie(t)))return cp("Unsupported field value:",e,t),op(t,e);if(t instanceof sp)return function(n,s){if(!rp(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ja(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return M0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=we.fromDate(n);return{timestampValue:qr(s.Tt,r)}}if(n instanceof we){const r=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qr(s.Tt,r)}}if(n instanceof Ya)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ln)return{bytesValue:Rf(s.Tt,n._byteString)};if(n instanceof Be){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ua(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Ci(n)}`)}(t,e)}function op(t,e){const n={};return ef(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(t,(s,r)=>{const i=Ja(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ap(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Ya||t instanceof Ln||t instanceof Be||t instanceof sp)}function cp(t,e,n){if(!ap(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ci(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function GI(t,e,n){if((e=Ie(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return lp(t,e);throw Hr("Field path arguments must be of type string or ",t,!1,void 0,n)}const WI=new RegExp("[~\\*/\\[\\]]");function lp(t,e,n){if(e.search(WI)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qa(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(S.INVALID_ARGUMENT,a+t+c)}function QI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YI extends up{data(){return super.data()}}function hp(t,e){return typeof e=="string"?lp(t,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Za{}class JI extends Za{}function ZI(t,e,...n){let s=[];e instanceof Za&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof tc).length,o=r.filter(a=>a instanceof ec).length;if(i>1||i>0&&o>0)throw new P(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ec extends JI{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ec(e,n,s)}_apply(e){const n=this._parse(e);return dp(e._query,n),new Hn(e.firestore,e.converter,Po(e._query,n))}_parse(e){const n=ip(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Vl(u,l);const d=[];for(const p of u)d.push(xl(a,r,p));h={arrayValue:{values:d}}}else h=xl(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Vl(u,l),h=KI(o,i,u,l==="in"||l==="not-in");return ve.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class tc extends Za{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Je.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)dp(i,a),i=Po(i,a)}(e._query,n),new Hn(e.firestore,e.converter,Po(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xl(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new P(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!df(e)&&n.indexOf("/")!==-1)throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ae.fromString(n));if(!B.isDocumentKey(s))throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ul(t,new B(s))}if(n instanceof Be)return ul(t,n._key);throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ci(n)}.`)}function Vl(t,e){if(!Array.isArray(t)||t.length===0)throw new P(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dp(t,e){if(e.isInequality()){const s=La(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new P(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=hf(t);i!==null&&eT(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function eT(t,e,n){if(!n.isEqual(e))throw new P(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class tT{convertValue(e,n="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const s={};return jn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ya(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=$t(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ae.fromString(e);oe(Lf(s));const r=new bs(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||bt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fp extends up{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(hp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vr extends fp{data(e={}){return super.data(e)}}class sT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Zn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vr(this._firestore,this._userDataWriter,s.key,s,new Zn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:rT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class pp extends tT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function Bl(t,e,n){t=Xt(t,Be);const s=Xt(t.firestore,Ss),r=nT(t.converter,e,n);return gp(s,[HI(ip(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ot.none())])}function iT(t){return gp(Xt(t.firestore,Ss),[new Ma(t._key,ot.none())])}function jl(t,...e){var n,s,r;t=Ie(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Fl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Fl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Be)l=Xt(t.firestore,Ss),u=Pa(t._key.path),c={next:h=>{e[o]&&e[o](oT(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Xt(t,Hn);l=Xt(h.firestore,Ss),u=h._query;const d=new pp(l);c={next:p=>{e[o]&&e[o](new sT(l,d,h,p))},error:e[o+1],complete:e[o+2]},XI(t._query)}return function(h,d,p,_){const g=new NI(_),m=new dI(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>cI(await $l(h),m)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>lI(await $l(h),m))}}(tp(l),u,a,c)}function gp(t,e){return function(n,s){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>wI(await MI(n),s,r)),r.promise}(tp(t),e)}function oT(t,e,n){const s=n.docs.get(e._key),r=new pp(t);return new fp(t,r,e._key,s,new Zn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Bn=n})(Ns),ct(new Xe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ss(new o0(n.getProvider("auth-internal")),new u0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),He(ol,"3.9.0",t),He(ol,"3.9.0","esm2017")})();const aT={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},mp=Ku(aT),Vt=M_(mp);wy(Vt,yh);const Gn=BI(mp);Yv();const cT=new ht,lT=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Ds(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return ph(Vt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return _y(Vt,r,i)},async signInWithEmail(r,i){return vy(Vt,r,i)},async signInWithGoogle(){return Ky(Vt,cT)},async signOut(){return Ty(Vt)}}},yp=lT(),ql="/assets/default-user-a40c52dd.png";function uT(t){let e;return{c(){e=w("i"),f(e,"class","codicon codicon-account")},m(n,s){C(n,e,s)},p:D,d(n){n&&A(e)}}}function hT(t){let e,n;return{c(){e=w("img"),f(e,"class","profile-picture svelte-1m717b8"),Jt(e.src,n=t[0].user.photoURL??ql)||f(e,"src",n),f(e,"alt","Account")},m(s,r){C(s,e,r)},p(s,r){r&1&&!Jt(e.src,n=s[0].user.photoURL??ql)&&f(e,"src",n)},d(s){s&&A(e)}}}function dT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_,g,m,I,b;o=new ng({});function k(O,X){return O[0].loggedIn?hT:uT}let E=k(t),N=E(t);return{c(){e=w("header"),n=w("div"),s=w("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=$(),i=w("a"),F(o.$$.fragment),a=$(),c=w("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=$(),u=w("nav"),h=w("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=$(),p=w("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',_=$(),g=w("button"),N.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(O,X){C(O,e,X),y(e,n),y(n,s),y(n,r),y(n,i),L(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,_),y(u,g),N.m(g,null),m=!0,I||(b=[V(c,"click",t[1]),V(h,"click",t[2]),V(p,"click",t[3]),V(g,"click",t[4])],I=!0)},p(O,[X]){E===(E=k(O))&&N?N.p(O,X):(N.d(1),N=E(O),N&&(N.c(),N.m(g,null)))},i(O){m||(v(o.$$.fragment,O),m=!0)},o(O){T(o.$$.fragment,O),m=!1},d(O){O&&A(e),M(o),N.d(),I=!1,me(b)}}}function fT(t,e,n){let s;return Oe(t,yp,c=>n(0,s=c)),[s,()=>bn.navigateTo("help"),()=>bn.navigateTo("search"),()=>bn.navigateTo("settings"),()=>bn.navigateTo("account")]}class pT extends W{constructor(e){super(),G(this,e,fT,dT,K,{})}}const gT="modulepreload",mT=function(t){return"/"+t},zl={},Ri=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=mT(i),i in zl)return;zl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":gT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},wr=Object.freeze(["+","-","~"]),Ni=t=>wr.includes(t),yT=t=>{if(!Ni(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(wr.indexOf(t)+1)%wr.length;return wr[n]},_T=Object.freeze({"+":"","-":"-","~":""}),vT=t=>{if(!Ni(t))throw TypeError("Invalid modifier passed to serializeModifier");return _T[t]},er=t=>typeof t=="string"&&t!=="",Oi=t=>typeof t=="number";class $i{constructor(e,n){if(!Ni(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!er(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${vT(this.modifier)}${encodeURIComponent(this.name.replaceAll(" ","_"))}`}}const _p=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),vp=t=>_p.includes(t),Hl=t=>{const e=_p.indexOf(t);return e>=0?e:99},wT=Object.freeze(["artist","character","copyright","source","metadata","rating"]),bT=t=>wT.includes(t);let Pi=class{constructor(e,n,s,r){if(!Ni(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!er(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Oi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!vp(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const wp=t=>new $i(t.modifier,t.name);class bp{constructor(e,n,s){if(!er(e))throw new TypeError("Invalid name passed to Supertag");if(!IT(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const IT=t=>Array.isArray(t)&&t.every(e=>e instanceof $i),TT=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Ds(t);let s,r=null,i=null;return ph(Vt,async o=>{s=o,o?r=jl(ur(Gn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=ZI(xI(Gn,`users/${o.uid}/supertags`));i==null||i(),i=jl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new bp(d.id,p.description,Object.entries(p.tags).map(_=>new $i(_[1],_[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return Bl(ur(Gn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return iT(ur(Gn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return Bl(ur(Gn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},As=TT();function ET(t){let e,n,s,r;return{c(){e=w("button"),n=re(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){C(i,e,o),y(e,n),s||(r=V(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&ge(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:D,o:D,d(i){i&&A(e),s=!1,r()}}}function kT(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Qe(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class nc extends W{constructor(e){super(),G(this,e,kT,ET,K,{text:0,title:1,disabled:2})}}const ut=t=>e=>{(Ip(e)||ST(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},ST=t=>t.code==="Space",Ip=t=>t.code==="Enter"||t.key==="Enter",AT=Intl.NumberFormat("en",{notation:"compact"}),Et=t=>{if(!Oi(t))throw new TypeError(`Invalid value passed to formatCount: ${t}`);return AT.format(t)};function Mn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const CT=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),Kl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Gl(t){let e,n=Et(t[0].count)+"",s,r;return{c(){e=re("("),s=re(n),r=re(")")},m(i,o){C(i,e,o),C(i,s,o),C(i,r,o)},p(i,o){o&1&&n!==(n=Et(i[0].count)+"")&&ge(s,n)},d(i){i&&A(e),i&&A(s),i&&A(r)}}}function DT(t){let e,n=Mn(t[0].name)+"",s,r,i,o,a,c=t[0].count&&Gl(t);return{c(){e=w("li"),s=re(n),r=$(),c&&c.c(),f(e,"class",i=Ge(Kl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),ue(e,"no-icon",t[0].type!=="supertag")},m(l,u){C(l,e,u),y(e,s),y(e,r),c&&c.m(e,null),o||(a=[V(e,"click",t[2]),V(e,"contextmenu",jp(t[3]))],o=!0)},p(l,[u]){u&1&&n!==(n=Mn(l[0].name)+"")&&ge(s,n),l[0].count?c?c.p(l,u):(c=Gl(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&1&&i!==(i=Ge(Kl[l[0].modifier])+" svelte-13vl0re")&&f(e,"class",i),u&1&&ue(e,"no-icon",l[0].type!=="supertag")},i:D,o:D,d(l){l&&A(e),c&&c.d(),o=!1,me(a)}}}function RT(t,e,n){let{tag:s}=e;const r=Qe(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Tp extends W{constructor(e){super(),G(this,e,RT,DT,K,{tag:0})}}function NT(t){let e,n,s,r,i;const o=t[2].default,a=Du(o,t,t[1],null);return{c(){e=w("div"),n=w("div"),a&&a.c(),f(n,"class","dialog svelte-upm3o"),f(e,"class","backdrop svelte-upm3o")},m(c,l){C(c,e,l),y(e,n),a&&a.m(n,null),s=!0,r||(i=[V(n,"click",jo(OT)),V(e,"click",t[0]),V(e,"keyup",t[3])],r=!0)},p(c,[l]){a&&a.p&&(!s||l&2)&&Ou(a,o,c,c[1],s?Nu(o,c[1],l,null):$u(c[1]),null)},i(c){s||(v(a,c),s=!0)},o(c){T(a,c),s=!1},d(c){c&&A(e),a&&a.d(c),r=!1,me(i)}}}const OT=()=>{};function $T(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=Qe(),o=()=>i("close"),a=c=>{c.code==="Escape"&&o()};return t.$$set=c=>{"$$scope"in c&&n(1,r=c.$$scope)},[o,r,s,a]}class Ep extends W{constructor(e){super(),G(this,e,$T,NT,K,{})}}function Wl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Ql(t){let e,n;return e=new Tp({props:{tag:t[9]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function PT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_,g,m,I,b,k,E,N,O,X,fe,tt,Ve=t[2],ie=[];for(let te=0;te<Ve.length;te+=1)ie[te]=Ql(Wl(t,Ve,te));const dn=te=>T(ie[te],1,1,()=>{ie[te]=null});return O=new nc({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),O.$on("click",t[8]),{c(){e=w("section"),n=w("h3"),n.textContent="Create Supertag",s=$(),r=w("i"),i=$(),o=w("div"),a=w("label"),a.textContent="Name",c=$(),l=w("input"),u=$(),h=w("div"),d=w("label"),d.textContent="Description",p=$(),_=w("input"),g=$(),m=w("div"),I=w("span"),I.textContent="Tags",b=$(),k=w("ol");for(let te=0;te<ie.length;te+=1)ie[te].c();E=$(),N=w("div"),F(O.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",Ge("codicon codicon-close")+" svelte-1nylv2m"),f(a,"for","supertag-name"),f(a,"class","svelte-1nylv2m"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-1nylv2m"),f(o,"class","svelte-1nylv2m"),f(d,"for","supertag-description"),f(d,"class","svelte-1nylv2m"),f(_,"type","text"),f(_,"placeholder","Short description"),f(_,"id","supertag-description"),f(_,"class","svelte-1nylv2m"),f(h,"class","svelte-1nylv2m"),f(I,"class","svelte-1nylv2m"),f(k,"class","svelte-1nylv2m"),f(m,"class","svelte-1nylv2m"),f(N,"class","last svelte-1nylv2m"),f(e,"class","svelte-1nylv2m")},m(te,pe){C(te,e,pe),y(e,n),y(e,s),y(e,r),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),st(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,_),st(_,t[1]),y(e,g),y(e,m),y(m,I),y(m,b),y(m,k);for(let J=0;J<ie.length;J+=1)ie[J]&&ie[J].m(k,null);y(e,E),y(e,N),L(O,N,null),X=!0,fe||(tt=[V(r,"click",t[5]),V(r,"keyup",ut(t[5])),V(l,"input",t[6]),V(_,"input",t[7])],fe=!0)},p(te,pe){if(pe&1&&l.value!==te[0]&&st(l,te[0]),pe&2&&_.value!==te[1]&&st(_,te[1]),pe&4){Ve=te[2];let z;for(z=0;z<Ve.length;z+=1){const Ft=Wl(te,Ve,z);ie[z]?(ie[z].p(Ft,pe),v(ie[z],1)):(ie[z]=Ql(Ft),ie[z].c(),v(ie[z],1),ie[z].m(k,null))}for(ce(),z=Ve.length;z<ie.length;z+=1)dn(z);le()}const J={};pe&8&&(J.title=te[3]?"Click to create supertag":"Enter a valid name to continue"),pe&8&&(J.disabled=!te[3]),O.$set(J)},i(te){if(!X){for(let pe=0;pe<Ve.length;pe+=1)v(ie[pe]);v(O.$$.fragment,te),X=!0}},o(te){ie=ie.filter(Boolean);for(let pe=0;pe<ie.length;pe+=1)T(ie[pe]);T(O.$$.fragment,te),X=!1},d(te){te&&A(e),Lt(ie,te),M(O),fe=!1,me(tt)}}}function LT(t){let e,n;return e=new Ep({props:{$$slots:{default:[PT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,[r]){const i={};r&4111&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function MT(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Qe(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new bp(r,i,o.map(wp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=er(r))},[r,i,o,s,a,c,l,u,h]}class UT extends W{constructor(e){super(),G(this,e,MT,LT,K,{name:0,description:1,tags:2})}}function FT(t){let e,n,s,r;return{c(){e=w("button"),f(e,"class",n=Ge(t[0])+" svelte-17m158f")},m(i,o){C(i,e,o),s||(r=[V(e,"click",t[1]),V(e,"keyup",ut(t[1]))],s=!0)},p(i,[o]){o&1&&n!==(n=Ge(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:D,o:D,d(i){i&&A(e),s=!1,me(r)}}}function xT(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class kp extends W{constructor(e){super(),G(this,e,xT,FT,K,{options:3,value:2})}}function VT(t){let e,n,s;function r(o){t[1](o)}let i={options:CT};return t[0]!==void 0&&(i.value=t[0]),e=new kp({props:i}),Pe.push(()=>yt(e,"value",r)),{c(){F(e.$$.fragment)},m(o,a){L(e,o,a),s=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],mt(()=>n=!1)),e.$set(c)},i(o){s||(v(e.$$.fragment,o),s=!0)},o(o){T(e.$$.fragment,o),s=!1},d(o){M(e,o)}}}function BT(t,e,n){let{modifier:s}=e;function r(i){s=i,n(0,s)}return t.$$set=i=>{"modifier"in i&&n(0,s=i.modifier)},[s,r]}class jT extends W{constructor(e){super(),G(this,e,BT,VT,K,{modifier:0})}}function qT(t){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){C(n,e,s)},p:D,i:D,o:D,d(n){n&&A(e)}}}class sc extends W{constructor(e){super(),G(this,e,null,qT,K,{})}}let zT=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,_,g,m,I){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=_,this.tags=g,this.width=m,this.type=I,Object.freeze(this)}};const rc=(t,e)=>{if(!Sp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!HT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Sp=t=>{try{return new URL(t),!0}catch{return!1}},HT=t=>t===null||t instanceof AbortController;class Kr{constructor(e,n,s){if(!er(e))throw TypeError("Invalid name passed to Tag constructor");if(!Oi(n))throw TypeError("Invalid count passed to Tag constructor");if(!vp(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const KT=(t,e)=>new Pi(e,t.name,t.count,t.type);let GT=null;const WT=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await rc(`${e}${n}`,GT);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Kr(Ap(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Ap=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),Cp=20;let Dp=null;const Rp=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},QT=async(t,e)=>{const n=await rc(ZT(t,e),Dp);Rp(n);try{return(await n.json()).map(XT)}catch{return[]}},YT=async t=>{const e=await rc(eE(t),Dp);Rp(e);const n=await e.text(),r=new DOMParser().parseFromString(n,"text/xml"),i=Number(r.getElementsByTagName("posts")[0].getAttribute("count"));return tE(i),i},XT=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,_=t.comment_count,g=t.status,m=t.source;return new zT(s,o,r,Number(_),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),m,g,JT(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},JT=t=>t.map(e=>new Kr(Ap(e.tag),e.count,e.type)).sort((e,n)=>Hl(e.type)-Hl(n.type)),ZT=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Cp}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},eE=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},tE=t=>{if(!Oi(t))throw new Error("Unexpected response received in getPage")};let nE=class{constructor(e,n,s){sE(e),iE(n),rE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const sE=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},rE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},iE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Yl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Xl=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Yl:`${Yl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(oE(a.attributes));return o},oE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new nE(e.value,n.value,s.value)};function aE(t){let e,n,s=Mn(t[0].name)+"",r,i,o,a=Et(t[0].count)+"",c,l,u,h;return{c(){e=w("li"),n=w("span"),r=re(s),i=$(),o=w("span"),c=re(a),f(n,"class","tag-name svelte-1gc0x48"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-1gc0x48"),ue(e,"selected",t[1])},m(d,p){C(d,e,p),y(e,n),y(n,r),y(e,i),y(e,o),y(o,c),u||(h=[V(e,"click",t[2]),V(e,"keypress",ut(t[2]))],u=!0)},p(d,[p]){p&1&&s!==(s=Mn(d[0].name)+"")&&ge(r,s),p&1&&a!==(a=Et(d[0].count)+"")&&ge(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&ue(e,"selected",d[1])},i:D,o:D,d(d){d&&A(e),u=!1,me(h)}}}function cE(t,e,n){let{tag:s}=e,{selected:r=!1}=e;const i=Qe(),o=()=>i("click",s);return t.$$set=a=>{"tag"in a&&n(0,s=a.tag),"selected"in a&&n(1,r=a.selected)},[s,r,o]}class lE extends W{constructor(e){super(),G(this,e,cE,aE,K,{tag:0,selected:1})}}function uE(t){let e,n,s;return{c(){e=w("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(r,i){C(r,e,i),n||(s=[V(e,"click",t[0]),V(e,"keyup",ut(t[0]))],n=!0)},p:D,i:D,o:D,d(r){r&&A(e),n=!1,me(s)}}}function hE(t){return[()=>bn.navigateTo("help")]}class dE extends W{constructor(e){super(),G(this,e,hE,uE,K,{})}}function Jl(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function fE(t){let e,n,s,r,i=t[20].message+"",o;return{c(){e=w("div"),n=w("i"),s=$(),r=w("span"),o=re(i),f(n,"class",Ge("codicon codicon-error")+" svelte-9l8t0y"),f(e,"class","suggestion-footer svelte-9l8t0y")},m(a,c){C(a,e,c),y(e,n),y(e,s),y(e,r),y(r,o)},p(a,c){c&2&&i!==(i=a[20].message+"")&&ge(o,i)},i:D,o:D,d(a){a&&A(e)}}}function pE(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=Zl(Jl(t,r,a));const o=a=>T(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=$(),n=w("div"),f(n,"class","suggestion-footer svelte-9l8t0y")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);C(a,e,c),C(a,n,c),s=!0},p(a,c){if(c&100){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=Jl(a,r,l);i[l]?(i[l].p(u,c),v(i[l],1)):(i[l]=Zl(u),i[l].c(),v(i[l],1),i[l].m(e.parentNode,e))}for(ce(),l=r.length;l<i.length;l+=1)o(l);le()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)v(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)T(i[c]);s=!1},d(a){Lt(i,a),a&&A(e),a&&A(n)}}}function Zl(t){let e,n;return e=new lE({props:{tag:t[17],selected:t[19]===t[2]}}),e.$on("click",function(){Qr(t[6](t[17]))&&t[6](t[17]).apply(this,arguments)}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){t=s;const i={};r&32&&(i.tag=t[17]),r&4&&(i.selected=t[19]===t[2]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function gE(t){let e,n,s;return n=new sc({}),{c(){e=w("div"),F(n.$$.fragment),f(e,"class","suggestion-footer svelte-9l8t0y")},m(r,i){C(r,e,i),L(n,e,null),s=!0},p:D,i(r){s||(v(n.$$.fragment,r),s=!0)},o(r){T(n.$$.fragment,r),s=!1},d(r){r&&A(e),M(n)}}}function mE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_,g;function m(k){t[11](k)}let I={};t[3]!==void 0&&(I.modifier=t[3]),o=new jT({props:I}),Pe.push(()=>yt(o,"modifier",m)),l=new dE({});let b={ctx:t,current:null,token:null,hasCatch:!0,pending:gE,then:pE,catch:fE,error:20,blocks:[,,,]};return Ir(d=t[1],b),{c(){e=w("div"),n=w("i"),s=$(),r=w("input"),i=$(),F(o.$$.fragment),c=$(),F(l.$$.fragment),u=$(),h=w("ol"),b.block.c(),f(n,"class","codicon codicon-search spaced svelte-9l8t0y"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-9l8t0y"),f(h,"class","svelte-9l8t0y"),ue(h,"open",t[4]),f(e,"class","searchbar svelte-9l8t0y"),ue(e,"open",t[4])},m(k,E){C(k,e,E),y(e,n),y(e,s),y(e,r),st(r,t[0]),y(e,i),L(o,e,null),y(e,c),L(l,e,null),y(e,u),y(e,h),b.block.m(h,b.anchor=null),b.mount=()=>h,b.anchor=null,p=!0,_||(g=[V(r,"input",t[7]),V(r,"focus",t[8]),V(r,"blur",t[9]),V(r,"keyup",t[10]),V(e,"blur",t[12])],_=!0)},p(k,[E]){t=k,E&1&&r.value!==t[0]&&st(r,t[0]);const N={};!a&&E&8&&(a=!0,N.modifier=t[3],mt(()=>a=!1)),o.$set(N),b.ctx=t,E&2&&d!==(d=t[1])&&Ir(d,b)||Pu(b,t,E),(!p||E&16)&&ue(h,"open",t[4]),(!p||E&16)&&ue(e,"open",t[4])},i(k){p||(v(o.$$.fragment,k),v(l.$$.fragment,k),v(b.block),p=!0)},o(k){T(o.$$.fragment,k),T(l.$$.fragment,k);for(let E=0;E<3;E+=1){const N=b.blocks[E];T(N)}p=!1},d(k){k&&A(e),M(o),M(l),b.block.d(),b.token=null,b=null,_=!1,me(g)}}}function yE(t,e,n){let s;Oe(t,As,E=>n(13,s=E));const r=Qe();let i,o="",a=0,c="+",l=!1,u=[];const h=E=>()=>{r("pick",KT(E,c)),p()};async function d(E){n(4,l=!0),n(5,u=[...s.supertags.filter(N=>N.name.toLowerCase().includes(E.toLowerCase())).map(N=>new Kr(N.name,Object.keys(N.tags).length,"supertag")),...await WT(E)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function _(){o=this.value,n(0,o)}const g=()=>{document.getElementById("title").scrollIntoView()},m=E=>{(!E.relatedTarget||!E.target.parentNode.contains(E.relatedTarget))&&n(4,l=!1)},I=E=>{Ip(E)?h(u.length>a?u[a]:new Kr(o,0,"ambiguous"))():E.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):E.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)};function b(E){c=E,n(3,c)}const k=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,_,g,m,I,b,k]}class _E extends W{constructor(e){super(),G(this,e,yE,mE,K,{})}}const Np=JSON.parse,Op=JSON.stringify,$p=(t,e,n=Op,s=Np)=>{const r=Pp(t,s,e),i=Ds(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},Li=(t,e,n=Op,s=Np)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Pp(t,s):null,o=Ds(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Pp=(t,e,n)=>{try{const s=e(localStorage.getItem(t));return typeof s=="object"&&typeof n=="object"?{...n,...s}:s}catch{return null}};function vE(){const t=[],{subscribe:e,update:n,set:s}=Li("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Pi("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const _t=vE(),wE=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),eu=t=>wE[t]??"";function bE(t){let e,n=Mn(t[0].name)+"",s,r,i,o;return{c(){e=w("button"),s=re(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",r=Ge(eu(t[0].type))+" svelte-d6seti"),ue(e,"active",t[3]),ue(e,"icon",t[2]),ue(e,"supertag",t[4])},m(a,c){C(a,e,c),y(e,s),i||(o=V(e,"click",function(){Qr(t[4]?tu:t[8])&&(t[4]?tu:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=Mn(t[0].name)+"")&&ge(s,n),c&1&&r!==(r=Ge(eu(t[0].type))+" svelte-d6seti")&&f(e,"class",r),c&9&&ue(e,"active",t[3]),c&5&&ue(e,"icon",t[2]),c&17&&ue(e,"supertag",t[4])},i:D,o:D,d(a){a&&A(e),i=!1,o()}}}const tu=()=>{};function IE(t,e,n){let s,r,i,o,a,c,l;Oe(t,_t,d=>n(6,c=d)),Oe(t,As,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?_t.removeByIndex(r):_t.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,s=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,r=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=s.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=r>=0),t.$$.dirty&1&&n(2,a=bT(u.type))},[u,r,a,o,i,s,c,l,h]}class TE extends W{constructor(e){super(),G(this,e,IE,bE,K,{tag:0})}}function EE(t){let e,n,s,r,i;return{c(){e=w("i"),n=$(),s=w("a"),r=re(t[1]),f(e,"class","codicon codicon-link"),f(s,"href",i=t[0].toString()),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),y(s,r)},p(o,[a]){a&2&&ge(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(s,"href",i)},i:D,o:D,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function kE(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class SE extends W{constructor(e){super(),G(this,e,kE,EE,K,{url:0})}}function AE(t){let e,n,s,r;return{c(){e=w("i"),n=$(),s=w("span"),r=re(t[0]),f(e,"class","codicon codicon-link")},m(i,o){C(i,e,o),C(i,n,o),C(i,s,o),y(s,r)},p(i,o){o&1&&ge(r,i[0])},i:D,o:D,d(i){i&&A(e),i&&A(n),i&&A(s)}}}function CE(t){let e,n;return e=new SE({props:{url:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.url=s[1]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function DE(t){let e,n,s,r;const i=[CE,AE],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Ze()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),T(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function RE(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=Sp(r)?new URL(r):null)},[r,s]}class NE extends W{constructor(e){super(),G(this,e,RE,DE,K,{source:0})}}function OE(t){let e,n;const s=t[1].default,r=Du(s,t,t[0],null);return{c(){e=w("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){C(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Ou(r,s,i,i[0],n?Nu(s,i[0],o,null):$u(i[0]),null)},i(i){n||(v(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&A(e),r&&r.d(i)}}}function $E(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class br extends W{constructor(e){super(),G(this,e,$E,OE,K,{})}}const nu=6e4,Gr=t=>{if(!PE(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/nu,s=new Date().getTime()/nu-e;if(s<1)return"just now";if(s<60)return mn(s,"minute");const r=s/60;if(r<24)return mn(r,"hour");const i=r/24;if(i<7)return mn(i,"day");if(i<30.5)return mn(i/7,"week");if(i<365.25)return mn(i/30.5,"month");const o=i/365.25;return mn(o,"year")},PE=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",mn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function LE(t){let e,n,s,r=Gr(t[0])+"",i;return{c(){e=w("i"),n=$(),s=w("span"),i=re(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Gr(o[0])+"")&&ge(i,r)},i:D,o:D,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function ME(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class UE extends W{constructor(e){super(),G(this,e,ME,LE,K,{value:0})}}function FE(t){let e,n,s,r=Et(t[0])+"",i;return{c(){e=w("i"),n=$(),s=w("span"),i=re(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Et(o[0])+"")&&ge(i,r)},i:D,o:D,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function xE(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class VE extends W{constructor(e){super(),G(this,e,xE,FE,K,{value:0})}}function BE(t){let e,n,s=t[0].author+"",r,i,o,a=Gr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=w("div"),n=w("span"),r=re(s),i=$(),o=w("span"),c=re(a),l=$(),u=w("span"),d=re(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,_){C(p,e,_),y(e,n),y(n,r),y(e,i),y(e,o),y(o,c),y(e,l),y(e,u),y(u,d)},p(p,[_]){_&1&&s!==(s=p[0].author+"")&&ge(r,s),_&1&&a!==(a=Gr(p[0].createdAt)+"")&&ge(c,a),_&1&&h!==(h=p[0].content+"")&&ge(d,h)},i:D,o:D,d(p){p&&A(e)}}}function jE(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class qE extends W{constructor(e){super(),G(this,e,jE,BE,K,{comment:0})}}function zE(t){let e,n,s,r;return{c(){e=w("i"),n=$(),s=w("a"),r=re("rule34.xxx"),f(e,"class","codicon codicon-link-external"),f(s,"href",t[0]),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(i,o){C(i,e,o),C(i,n,o),C(i,s,o),y(s,r)},p(i,[o]){o&1&&f(s,"href",i[0])},i:D,o:D,d(i){i&&A(e),i&&A(n),i&&A(s)}}}function HE(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class KE extends W{constructor(e){super(),G(this,e,HE,zE,K,{url:0})}}function su(t,e,n){const s=t.slice();return s[8]=e[n],s}function ru(t,e,n){const s=t.slice();return s[4]=e[n],s}function iu(t){let e,n,s,r,i;return{c(){e=w("i"),n=$(),s=w("i"),f(e,"class","codicon codicon-tag svelte-1mq2skj"),ue(e,"active",t[1]==="tags"),f(s,"class","codicon codicon-comment-discussion svelte-1mq2skj"),ue(s,"active",t[1]==="comments")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),r||(i=[V(e,"click",t[2]),V(s,"click",t[3])],r=!0)},p(o,a){a&2&&ue(e,"active",o[1]==="tags"),a&2&&ue(s,"active",o[1]==="comments")},d(o){o&&A(e),o&&A(n),o&&A(s),r=!1,me(i)}}}function GE(t){let e,n;return e=new UE({props:{value:t[0].change}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function WE(t){let e,n;return e=new VE({props:{value:t[0].score}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function QE(t){let e,n;return e=new KE({props:{url:t[0].file_url}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function ou(t){let e,n;return e=new br({props:{$$slots:{default:[YE]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function YE(t){let e,n;return e=new NE({props:{source:t[0].source}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function XE(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:s1,then:e1,catch:ZE,value:7,blocks:[,,,]};return Ir(n=Xl(t[0].id),r),{c(){e=Ze(),r.block.c()},m(i,o){C(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=Xl(t[0].id))&&Ir(n,r)||Pu(r,t,o)},i(i){s||(v(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];T(a)}s=!1},d(i){i&&A(e),r.block.d(i),r.token=null,r=null}}}function JE(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=cu(ru(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=ru(o,s,c);r[c]?(r[c].p(l,a),v(r[c],1)):(r[c]=cu(l),r[c].c(),v(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)v(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),Lt(r,o)}}}function ZE(t){return{c:D,m:D,p:D,i:D,o:D,d:D}}function e1(t){let e,n,s,r;const i=[n1,t1],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Ze()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),T(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function t1(t){let e;return{c(){e=w("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){C(n,e,s)},p:D,i:D,o:D,d(n){n&&A(e)}}}function n1(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=au(su(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=su(o,s,c);r[c]?(r[c].p(l,a),v(r[c],1)):(r[c]=au(l),r[c].c(),v(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)v(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),Lt(r,o)}}}function au(t){let e,n;return e=new qE({props:{comment:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function s1(t){let e,n;return e=new sc({}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function cu(t){let e,n;return e=new TE({props:{tag:t[4]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function r1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_=t[0].comment_count>0&&iu(t);r=new br({props:{$$slots:{default:[GE]},$$scope:{ctx:t}}}),o=new br({props:{$$slots:{default:[WE]},$$scope:{ctx:t}}}),c=new br({props:{$$slots:{default:[QE]},$$scope:{ctx:t}}});let g=t[0].source&&ou(t);const m=[JE,XE],I=[];function b(k,E){return k[1]==="tags"?0:1}return h=b(t),d=I[h]=m[h](t),{c(){e=w("div"),n=w("div"),_&&_.c(),s=$(),F(r.$$.fragment),i=$(),F(o.$$.fragment),a=$(),F(c.$$.fragment),l=$(),g&&g.c(),u=$(),d.c(),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(k,E){C(k,e,E),y(e,n),_&&_.m(n,null),y(n,s),L(r,n,null),y(n,i),L(o,n,null),y(n,a),L(c,n,null),y(n,l),g&&g.m(n,null),y(e,u),I[h].m(e,null),p=!0},p(k,[E]){k[0].comment_count>0?_?_.p(k,E):(_=iu(k),_.c(),_.m(n,s)):_&&(_.d(1),_=null);const N={};E&2049&&(N.$$scope={dirty:E,ctx:k}),r.$set(N);const O={};E&2049&&(O.$$scope={dirty:E,ctx:k}),o.$set(O);const X={};E&2049&&(X.$$scope={dirty:E,ctx:k}),c.$set(X),k[0].source?g?(g.p(k,E),E&1&&v(g,1)):(g=ou(k),g.c(),v(g,1),g.m(n,null)):g&&(ce(),T(g,1,1,()=>{g=null}),le());let fe=h;h=b(k),h===fe?I[h].p(k,E):(ce(),T(I[fe],1,1,()=>{I[fe]=null}),le(),d=I[h],d?d.p(k,E):(d=I[h]=m[h](k),d.c()),v(d,1),d.m(e,null))},i(k){p||(v(r.$$.fragment,k),v(o.$$.fragment,k),v(c.$$.fragment,k),v(g),v(d),p=!0)},o(k){T(r.$$.fragment,k),T(o.$$.fragment,k),T(c.$$.fragment,k),T(g),T(d),p=!1},d(k){k&&A(e),_&&_.d(),M(r),M(o),M(c),g&&g.d(),I[h].d()}}}function i1(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class o1 extends W{constructor(e){super(),G(this,e,i1,r1,K,{post:0})}}const Wr=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function a1(t){let e,n,s,r,i,o,a,c;return{c(){e=w("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-4xosj1")},m(l,u){C(l,e,u),t[3](e),a||(c=[V(e,"click",t[4]),V(e,"keyup",ut(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:D,o:D,d(l){l&&A(e),t[3](null),a=!1,me(c)}}}function c1(t,e,n){let{post:s}=e;const r=Qe();let i;Cs(()=>Wr.observe(i)),Xr(()=>Wr.unobserve(i));function o(l){Pe[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>r("click"),c=()=>r("click");return t.$$set=l=>{"post"in l&&n(0,s=l.post)},[s,i,r,o,a,c]}let l1=class extends W{constructor(e){super(),G(this,e,c1,a1,K,{post:0})}};const u1="/assets/play-f2f6faca.svg",h1="/assets/load-8440afed.svg",d1="/assets/pause-6f7851a2.svg";function f1(t){let e,n;return{c(){e=w("img"),Jt(e.src,n=u1)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),zp(e,"margin-left","4px")},m(s,r){C(s,e,r)},p:D,d(s){s&&A(e)}}}function p1(t){let e,n;return{c(){e=w("img"),Jt(e.src,n=d1)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){C(s,e,r)},p:D,d(s){s&&A(e)}}}function g1(t){let e,n;return{c(){e=w("img"),Jt(e.src,n=h1)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){C(s,e,r)},p:D,d(s){s&&A(e)}}}function m1(t){let e,n,s,r,i;function o(l,u){return l[1]?g1:l[0]?p1:f1}let a=o(t),c=a(t);return{c(){e=w("button"),n=w("div"),c.c(),f(n,"class","circle svelte-142dl5p"),f(e,"class",s=Ge(t[3].class)+" svelte-142dl5p"),ue(e,"play",t[0]&&!t[1])},m(l,u){C(l,e,u),y(e,n),c.m(n,null),r||(i=V(e,"click",jo(t[2])),r=!0)},p(l,[u]){a===(a=o(l))&&c?c.p(l,u):(c.d(1),c=a(l),c&&(c.c(),c.m(n,null))),u&8&&s!==(s=Ge(l[3].class)+" svelte-142dl5p")&&f(e,"class",s),u&11&&ue(e,"play",l[0]&&!l[1])},i:D,o:D,d(l){l&&A(e),c.d(),r=!1,i()}}}function y1(t,e,n){let{playing:s}=e,{loading:r}=e;const i=()=>{n(1,r=!0),n(0,s=!s)};return t.$$set=o=>{n(3,e=oo(oo({},e),uc(o))),"playing"in o&&n(0,s=o.playing),"loading"in o&&n(1,r=o.loading)},e=uc(e),[s,r,i,e]}class Lp extends W{constructor(e){super(),G(this,e,y1,m1,K,{playing:0,loading:1})}}function _1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p;function _(I){t[12](I)}function g(I){t[13](I)}let m={class:"center"};return t[2]!==void 0&&(m.playing=t[2]),t[3]!==void 0&&(m.loading=t[3]),c=new Lp({props:m}),Pe.push(()=>yt(c,"playing",_)),Pe.push(()=>yt(c,"loading",g)),{c(){e=w("div"),n=w("img"),a=$(),F(c.$$.fragment),f(n,"class","media-img svelte-1itvuez"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",s=t[0].id.toString()),f(n,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(n,"width",i=t[0].width),f(n,"height",o=t[0].height),f(n,"tabindex","0"),f(e,"class","container svelte-1itvuez")},m(I,b){C(I,e,b),y(e,n),t[8](n),y(e,a),L(c,e,null),h=!0,d||(p=[V(n,"click",t[9]),V(n,"keyup",ut(t[10])),V(n,"load",t[11])],d=!0)},p(I,[b]){(!h||b&16)&&f(n,"data-src",I[4]),(!h||b&1&&s!==(s=I[0].id.toString()))&&f(n,"alt",s),(!h||b&1&&r!==(r=`aspect-ratio: ${I[0].width} / ${I[0].height}`))&&f(n,"style",r),(!h||b&1&&i!==(i=I[0].width))&&f(n,"width",i),(!h||b&1&&o!==(o=I[0].height))&&f(n,"height",o);const k={};!l&&b&4&&(l=!0,k.playing=I[2],mt(()=>l=!1)),!u&&b&8&&(u=!0,k.loading=I[3],mt(()=>u=!1)),c.$set(k)},i(I){h||(v(c.$$.fragment,I),h=!0)},o(I){T(c.$$.fragment,I),h=!1},d(I){I&&A(e),t[8](null),M(c),d=!1,me(p)}}}function v1(t,e,n){let s,r,i,{post:o}=e;const a=Qe();let c,l=!1,u=!1;Cs(()=>Wr.observe(c)),Xr(()=>Wr.unobserve(c));function h(I){Pe[I?"unshift":"push"](()=>{c=I,n(1,c),n(2,l),n(7,r),n(6,s),n(0,o)})}const d=()=>a("click"),p=()=>a("click"),_=()=>n(3,u=!1);function g(I){l=I,n(2,l)}function m(I){u=I,n(3,u)}return t.$$set=I=>{"post"in I&&n(0,o=I.post)},t.$$.update=()=>{t.$$.dirty&1&&n(6,s=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(7,r=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&196&&n(4,i=l?r:s),t.$$.dirty&198&&c&&n(1,c.src=l?r:s,c)},[o,c,l,u,i,a,s,r,h,d,p,_,g,m]}class w1 extends W{constructor(e){super(),G(this,e,v1,_1,K,{post:0})}}function lu(t){let e,n,s=!0,r=!1,i,o,a,c,l,u,h,d,p,_,g;function m(){cancelAnimationFrame(i),e.paused||(i=Bp(m),r=!0),t[21].call(e)}function I(E){t[24](E)}function b(E){t[25](E)}let k={class:"center"};return t[4]!==void 0&&(k.playing=t[4]),t[10]!==void 0&&(k.loading=t[10]),u=new Lp({props:k}),Pe.push(()=>yt(u,"playing",I)),Pe.push(()=>yt(u,"loading",b)),{c(){e=w("video"),o=$(),a=w("input"),l=$(),F(u.$$.fragment),f(e,"preload","metadata"),f(e,"poster",t[0]),f(e,"style",n=`aspect-ratio: ${t[1]} / ${t[2]}`),e.loop=t[3],f(e,"class","svelte-1vw1vwb"),t[6]===void 0&&ls(()=>t[22].call(e)),f(a,"type","range"),f(a,"min",0),f(a,"step",.0166666),f(a,"max",t[6]),f(a,"style",c=`background-image: linear-gradient(90deg, var(--accent) ${t[12]}%, var(--background-2) ${t[12]}%);}`),f(a,"class","svelte-1vw1vwb"),ue(a,"play",t[4]&&!t[10])},m(E,N){C(E,e,N),t[15](e),C(E,o,N),C(E,a,N),st(a,t[5]),C(E,l,N),L(u,E,N),p=!0,_||(g=[V(e,"waiting",t[16]),V(e,"playing",t[17]),V(e,"pause",t[18]),V(e,"ended",t[19]),V(e,"play",t[20]),V(e,"pause",t[20]),V(e,"timeupdate",m),V(e,"durationchange",t[22]),V(a,"change",t[23]),V(a,"input",t[23]),V(a,"click",jo(I1))],_=!0)},p(E,N){(!p||N&1)&&f(e,"poster",E[0]),(!p||N&6&&n!==(n=`aspect-ratio: ${E[1]} / ${E[2]}`))&&f(e,"style",n),(!p||N&8)&&(e.loop=E[3]),N&2048&&s!==(s=E[11])&&e[s?"pause":"play"](),!r&&N&32&&!isNaN(E[5])&&(e.currentTime=E[5]),r=!1,(!p||N&64)&&f(a,"max",E[6]),(!p||N&4096&&c!==(c=`background-image: linear-gradient(90deg, var(--accent) ${E[12]}%, var(--background-2) ${E[12]}%);}`))&&f(a,"style",c),N&32&&st(a,E[5]),(!p||N&1040)&&ue(a,"play",E[4]&&!E[10]);const O={};!h&&N&16&&(h=!0,O.playing=E[4],mt(()=>h=!1)),!d&&N&1024&&(d=!0,O.loading=E[10],mt(()=>d=!1)),u.$set(O)},i(E){p||(v(u.$$.fragment,E),p=!0)},o(E){T(u.$$.fragment,E),p=!1},d(E){E&&A(e),t[15](null),E&&A(o),E&&A(a),E&&A(l),M(u,E),_=!1,me(g)}}}function b1(t){let e,n,s,r,i,o=t[8]&&lu(t);return{c(){e=w("div"),o&&o.c(),f(e,"class","player svelte-1vw1vwb"),f(e,"tabindex","0"),f(e,"style",n=`aspect-ratio: ${t[1]} / ${t[2]}`)},m(a,c){C(a,e,c),o&&o.m(e,null),t[26](e),s=!0,r||(i=[V(e,"click",t[13]),V(e,"keypress",ut(t[13]))],r=!0)},p(a,[c]){a[8]?o?(o.p(a,c),c&256&&v(o,1)):(o=lu(a),o.c(),v(o,1),o.m(e,null)):o&&(ce(),T(o,1,1,()=>{o=null}),le()),(!s||c&6&&n!==(n=`aspect-ratio: ${a[1]} / ${a[2]}`))&&f(e,"style",n)},i(a){s||(v(o),s=!0)},o(a){T(o),s=!1},d(a){a&&A(e),o&&o.d(),t[26](null),r=!1,me(i)}}}const I1=()=>{};function T1(t,e,n){let s,r,{src:i}=e,{poster:o}=e,{width:a}=e,{height:c}=e,{loop:l}=e,u,h=!1,d=!1,p=0,_=0,g,m=!1;const I=Qe(),b=()=>I("click"),k=new IntersectionObserver(z=>{for(const Ft of z)Ft.isIntersecting?n(8,m=!0):(n(7,g.src="",g),n(4,h=!1),n(10,d=!1),g.addEventListener("error",()=>n(8,m=!1),{once:!0}))},{rootMargin:"0px"});Cs(()=>k.observe(u)),Xr(()=>k.unobserve(u));function E(z){Pe[z?"unshift":"push"](()=>{g=z,n(7,g),n(8,m),n(14,i)})}const N=()=>n(10,d=!0),O=()=>n(10,d=!1),X=()=>n(10,d=!1),fe=()=>{l||(n(10,d=!1),n(4,h=!1))};function tt(){r=this.paused,n(11,r),n(4,h),n(8,m)}function Ve(){p=this.currentTime,n(5,p)}function ie(){_=this.duration,n(6,_)}function dn(){p=qo(this.value),n(5,p)}function te(z){h=z,n(4,h),n(8,m)}function pe(z){d=z,n(10,d)}function J(z){Pe[z?"unshift":"push"](()=>{u=z,n(9,u)})}return t.$$set=z=>{"src"in z&&n(14,i=z.src),"poster"in z&&n(0,o=z.poster),"width"in z&&n(1,a=z.width),"height"in z&&n(2,c=z.height),"loop"in z&&n(3,l=z.loop)},t.$$.update=()=>{t.$$.dirty&96&&n(12,s=p/_*98+1),t.$$.dirty&272&&n(4,h=m&&h),t.$$.dirty&16&&n(11,r=!h),t.$$.dirty&16768&&g&&m&&n(7,g.src=i,g)},[o,a,c,l,h,p,_,g,m,u,d,r,s,b,i,E,N,O,X,fe,tt,Ve,ie,dn,te,pe,J]}class E1 extends W{constructor(e){super(),G(this,e,T1,b1,K,{src:14,poster:0,width:1,height:2,loop:3})}}function k1(t){let e,n;return e=new w1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function S1(t){let e,n;return e=new E1({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(hu)}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.src=s[0].file_url),r&1&&(i.poster=s[0].sample_url),r&1&&(i.width=s[0].width),r&1&&(i.height=s[0].height),r&1&&(i.loop=s[0].tags.some(hu)),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function A1(t){let e,n;return e=new l1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function uu(t){let e,n;return e=new o1({props:{post:t[0]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function C1(t){let e,n,s,r,i;const o=[A1,S1,k1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&uu(t);return{c(){e=w("div"),s.c(),r=$(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){C(u,e,h),a[n].m(e,null),y(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ce(),T(a[d],1,1,()=>{a[d]=null}),le(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),v(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&v(l,1)):(l=uu(u),l.c(),v(l,1),l.m(e,null)):l&&(ce(),T(l,1,1,()=>{l=null}),le())},i(u){i||(v(s),v(l),i=!0)},o(u){T(s),T(l),i=!1},d(u){u&&A(e),a[n].d(),l&&l.d()}}}const hu=t=>t.name=="loop";function D1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class R1 extends W{constructor(e){super(),G(this,e,D1,C1,K,{post:0})}}function du(t,e,n){const s=t.slice();return s[1]=e[n],s}function fu(t){let e,n;return e=new R1({props:{post:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function N1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=fu(du(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=du(o,s,c);r[c]?(r[c].p(l,a),v(r[c],1)):(r[c]=fu(l),r[c].c(),v(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)v(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&A(e),Lt(r,o)}}}function O1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class $1 extends W{constructor(e){super(),G(this,e,O1,N1,K,{posts:0})}}function P1(t){let e;return{c(){e=w("div")},m(n,s){C(n,e,s),t[1](e)},p:D,i:D,o:D,d(n){n&&A(e),t[1](null)}}}function L1(t,e,n){const s=Qe(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){Pe[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class M1 extends W{constructor(e){super(),G(this,e,L1,P1,K,{})}}const U1="/assets/shironeko-x-c28cad00.png";function F1(t){let e,n,s,r,i;return{c(){e=w("div"),n=w("img"),r=$(),i=w("span"),i.textContent="You have reached the end",Jt(n.src,s=U1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){C(o,e,a),y(e,n),y(e,r),y(e,i)},p:D,i:D,o:D,d(o){o&&A(e)}}}class x1 extends W{constructor(e){super(),G(this,e,null,F1,K,{})}}const V1="/assets/shironeko-confused-4071d5b2.png";function B1(t){let e,n,s,r,i;return{c(){e=w("div"),n=w("img"),r=$(),i=w("span"),i.textContent="No results found",Jt(n.src,s=V1)||f(n,"src",s),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){C(o,e,a),y(e,n),y(e,r),y(e,i)},p:D,i:D,o:D,d(o){o&&A(e)}}}class j1 extends W{constructor(e){super(),G(this,e,null,B1,K,{})}}const pu=()=>({pages:[],nextPage:0,ids:new Set}),q1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},z1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},H1=()=>{const{subscribe:t,update:e,set:n}=Li("results",pu(),q1,z1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(pu())}}},es=H1(),K1=()=>{const{subscribe:t,set:e}=Li("count",null);return{subscribe:t,set:e,reset(){e(0)}}},ic=K1(),G1={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},W1=()=>{const{subscribe:t,set:e}=$p("sort",G1);return{subscribe:t,set:e}},wn=W1();function gu(t,e,n){const s=t.slice();return s[0]=e[n][0],s[3]=e[n][1],s}function mu(t){let e,n=t[3]+"",s,r;return{c(){e=w("option"),s=re(n),e.__value=r=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){C(i,e,o),y(e,s)},p(i,o){o&2&&n!==(n=i[3]+"")&&ge(s,n),o&2&&r!==(r=i[0])&&(e.__value=r,e.value=e.__value)},d(i){i&&A(e)}}}function Q1(t){let e,n,s,r=Object.entries(t[1]),i=[];for(let o=0;o<r.length;o+=1)i[o]=mu(gu(t,r,o));return{c(){e=w("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&ls(()=>t[2].call(e))},m(o,a){C(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);hc(e,t[0],!0),n||(s=V(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){r=Object.entries(o[1]);let c;for(c=0;c<r.length;c+=1){const l=gu(o,r,c);i[c]?i[c].p(l,a):(i[c]=mu(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}a&3&&hc(e,o[0])},i:D,o:D,d(o){o&&A(e),Lt(i,o),n=!1,s()}}}function Y1(t,e,n){let{options:s}=e,{value:r}=e;function i(){r=Hp(this),n(0,r),n(1,s)}return t.$$set=o=>{"options"in o&&n(1,s=o.options),"value"in o&&n(0,r=o.value)},[r,s,i]}class X1 extends W{constructor(e){super(),G(this,e,Y1,Q1,K,{options:1,value:0})}}function J1(t){let e,n,s,r;return{c(){e=w("button"),n=re(t[0]),f(e,"class","svelte-17m158f")},m(i,o){C(i,e,o),y(e,n),s||(r=[V(e,"click",t[1]),V(e,"keyup",ut(t[1]))],s=!0)},p(i,[o]){o&1&&ge(n,i[0])},i:D,o:D,d(i){i&&A(e),s=!1,me(r)}}}function Z1(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class ek extends W{constructor(e){super(),G(this,e,Z1,J1,K,{options:3,value:2})}}function yu(t){let e,n;return e=new Ep({props:{$$slots:{default:[tk]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1025&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function tk(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_,g,m,I,b,k,E,N,O,X,fe;function tt(J){t[6](J)}let Ve={options:rk};t[0].sortDirection!==void 0&&(Ve.value=t[0].sortDirection),o=new kp({props:Ve}),Pe.push(()=>yt(o,"value",tt));function ie(J){t[7](J)}let dn={options:sk};t[0].sortProperty!==void 0&&(dn.value=t[0].sortProperty),l=new X1({props:dn}),Pe.push(()=>yt(l,"value",ie));function te(J){t[8](J)}let pe={options:ik};return t[0].scoreComparator!==void 0&&(pe.value=t[0].scoreComparator),m=new ek({props:pe}),Pe.push(()=>yt(m,"value",te)),N=new nc({props:{text:"Done",title:"Return to searching."}}),N.$on("click",t[5]),{c(){e=w("div"),n=w("label"),s=w("b"),s.textContent="Sorting",r=$(),i=w("div"),F(o.$$.fragment),c=$(),F(l.$$.fragment),h=$(),d=w("label"),p=w("b"),p.textContent="Score Filtering",_=$(),g=w("div"),F(m.$$.fragment),b=$(),k=w("input"),E=$(),F(N.$$.fragment),f(i,"class","row svelte-1k7zufl"),f(n,"class","svelte-1k7zufl"),f(k,"type","number"),f(k,"min",0),f(k,"max",1e5),f(k,"step",1),f(k,"class","svelte-1k7zufl"),f(g,"class","row svelte-1k7zufl"),f(d,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(J,z){C(J,e,z),y(e,n),y(n,s),y(n,r),y(n,i),L(o,i,null),y(i,c),L(l,i,null),y(e,h),y(e,d),y(d,p),y(d,_),y(d,g),L(m,g,null),y(g,b),y(g,k),st(k,t[0].scoreValue),y(e,E),L(N,e,null),O=!0,X||(fe=[V(k,"input",t[9]),V(k,"keyup",ut(ak))],X=!0)},p(J,z){const Ft={};!a&&z&1&&(a=!0,Ft.value=J[0].sortDirection,mt(()=>a=!1)),o.$set(Ft);const ac={};!u&&z&1&&(u=!0,ac.value=J[0].sortProperty,mt(()=>u=!1)),l.$set(ac);const cc={};!I&&z&1&&(I=!0,cc.value=J[0].scoreComparator,mt(()=>I=!1)),m.$set(cc),z&1&&qo(k.value)!==J[0].scoreValue&&st(k,J[0].scoreValue)},i(J){O||(v(o.$$.fragment,J),v(l.$$.fragment,J),v(m.$$.fragment,J),v(N.$$.fragment,J),O=!0)},o(J){T(o.$$.fragment,J),T(l.$$.fragment,J),T(m.$$.fragment,J),T(N.$$.fragment,J),O=!1},d(J){J&&A(e),M(o),M(l),M(m),M(N),X=!1,me(fe)}}}function nk(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_,g,m=t[1]&&yu(t);return{c(){e=w("button"),n=w("i"),s=$(),r=w("span"),i=re(t[3]),o=$(),a=w("i"),c=$(),l=w("span"),u=re(t[2]),h=$(),m&&m.c(),d=Ze(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(I,b){C(I,e,b),y(e,n),y(e,s),y(e,r),y(r,i),y(e,o),y(e,a),y(e,c),y(e,l),y(l,u),C(I,h,b),m&&m.m(I,b),C(I,d,b),p=!0,_||(g=[V(e,"click",t[4]),V(e,"keypress",ut(t[4]))],_=!0)},p(I,[b]){(!p||b&8)&&ge(i,I[3]),(!p||b&4)&&ge(u,I[2]),I[1]?m?(m.p(I,b),b&2&&v(m,1)):(m=yu(I),m.c(),v(m,1),m.m(d.parentNode,d)):m&&(ce(),T(m,1,1,()=>{m=null}),le())},i(I){p||(v(m),p=!0)},o(I){T(m),p=!1},d(I){I&&A(e),I&&A(h),m&&m.d(I),I&&A(d),_=!1,me(g)}}}const sk=Object.freeze({id:"Upload",score:"Score",updated:"Change"}),rk=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),ik=Object.freeze({">=":"≥","<=":"≤"}),ok=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),ak=t=>t.target.blur();function ck(t,e,n){let s,r,i;Oe(t,wn,p=>n(0,i=p));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1);function l(p){t.$$.not_equal(i.sortDirection,p)&&(i.sortDirection=p,wn.set(i))}function u(p){t.$$.not_equal(i.sortProperty,p)&&(i.sortProperty=p,wn.set(i))}function h(p){t.$$.not_equal(i.scoreComparator,p)&&(i.scoreComparator=p,wn.set(i))}function d(){i.scoreValue=qo(this.value),wn.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,s=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${Et(i.scoreValue)}`),t.$$.dirty&1&&n(2,r=ok[i.sortProperty][i.sortDirection])},[i,o,r,s,a,c,l,u,h,d]}class lk extends W{constructor(e){super(),G(this,e,ck,nk,K,{})}}function uk(t){let e,n,s=Et(t[0])+"",r,i,o,a,c,l;return c=new lk({}),{c(){e=w("div"),n=w("span"),r=re(s),i=re(" results"),a=$(),F(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){C(u,e,h),y(e,n),y(n,r),y(n,i),y(e,a),L(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&s!==(s=Et(u[0])+"")&&ge(r,s),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(v(c.$$.fragment,u),l=!0)},o(u){T(c.$$.fragment,u),l=!1},d(u){u&&A(e),M(c)}}}function hk(t,e,n){let s;return Oe(t,ic,r=>n(0,s=r)),[s]}class dk extends W{constructor(e){super(),G(this,e,hk,uk,K,{})}}function _u(t,e,n){const s=t.slice();return s[8]=e[n],s}function fk(t){let e,n;return e=new j1({}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function pk(t){let e,n,s,r,i,o,a,c;e=new dk({}),e.$on("configchange",t[6]);let l=t[1].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=vu(_u(t,l,g));const h=g=>T(u[g],1,1,()=>{u[g]=null}),d=[mk,gk],p=[];function _(g,m){return g[3]?0:1}return i=_(t),o=p[i]=d[i](t),{c(){F(e.$$.fragment),n=$(),s=w("ol");for(let g=0;g<u.length;g+=1)u[g].c();r=$(),o.c(),a=Ze(),f(s,"class","svelte-dsypei")},m(g,m){L(e,g,m),C(g,n,m),C(g,s,m);for(let I=0;I<u.length;I+=1)u[I]&&u[I].m(s,null);C(g,r,m),p[i].m(g,m),C(g,a,m),c=!0},p(g,m){if(m&2){l=g[1].pages;let b;for(b=0;b<l.length;b+=1){const k=_u(g,l,b);u[b]?(u[b].p(k,m),v(u[b],1)):(u[b]=vu(k),u[b].c(),v(u[b],1),u[b].m(s,null))}for(ce(),b=l.length;b<u.length;b+=1)h(b);le()}let I=i;i=_(g),i===I?p[i].p(g,m):(ce(),T(p[I],1,1,()=>{p[I]=null}),le(),o=p[i],o?o.p(g,m):(o=p[i]=d[i](g),o.c()),v(o,1),o.m(a.parentNode,a))},i(g){if(!c){v(e.$$.fragment,g);for(let m=0;m<l.length;m+=1)v(u[m]);v(o),c=!0}},o(g){T(e.$$.fragment,g),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)T(u[m]);T(o),c=!1},d(g){M(e,g),g&&A(n),g&&A(s),Lt(u,g),g&&A(r),p[i].d(g),g&&A(a)}}}function vu(t){let e,n;return e=new $1({props:{posts:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.posts=s[8]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function gk(t){let e,n;return e=new x1({}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function mk(t){let e,n;return e=new M1({}),e.$on("visible",t[7]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function yk(t){let e,n,s,r;const i=[pk,fk],o=[];function a(c,l){return c[0]?0:c[2]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=Ze()},m(c,l){~e&&o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ce(),T(o[u],1,1,()=>{o[u]=null}),le()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(v(n),r=!0)},o(c){T(n),r=!1},d(c){~e&&o[e].d(c),c&&A(s)}}}function _k(t,e,n){let s,r,i,o,a;Oe(t,ic,h=>n(0,o=h)),Oe(t,es,h=>n(1,a=h));const c=Qe(),l=()=>c("configchange"),u=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o/Cp),t.$$.dirty&34&&n(3,r=a.pages.length<s),t.$$.dirty&1&&n(2,i=o===0)},[o,a,i,r,c,s,l,u]}class vk extends W{constructor(e){super(),G(this,e,_k,yk,K,{})}}function wk(t){let e,n,s;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-1b7u605"),ue(e,"visible",t[0])},m(r,i){C(r,e,i),n||(s=V(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&ue(e,"visible",r[0])},i:D,o:D,d(r){r&&A(e),n=!1,s()}}}function bk(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Cs(()=>{document.addEventListener("scroll",i,{passive:!0})}),Xr(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class Ik extends W{constructor(e){super(),G(this,e,bk,wk,K,{})}}function Tk(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=w("div"),n=w("div"),s=w("i"),i=$(),o=w("div"),a=w("h3"),c=re(t[2]),l=$(),u=w("span"),h=re(t[1]),f(s,"class",r=Ge(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){C(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&r!==(r=Ge(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&ge(c,d[2]),p&2&&ge(h,d[1])},i:D,o:D,d(d){d&&A(e)}}}function Ek(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Mp extends W{constructor(e){super(),G(this,e,Ek,Tk,K,{icon:0,message:1,title:2})}}function kk(t){let e;return{c(){e=w("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,s){C(n,e,s)},p:D,i:D,o:D,d(n){n&&A(e)}}}class Sk extends W{constructor(e){super(),G(this,e,null,kk,K,{})}}function wu(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function bu(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=Iu(wu(t,r,c));const o=c=>T(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&Tu(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=$(),a&&a.c(),n=Ze()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);C(c,e,l),a&&a.m(c,l),C(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=wu(c,r,u);i[u]?(i[u].p(h,l),v(i[u],1)):(i[u]=Iu(h),i[u].c(),v(i[u],1),i[u].m(e.parentNode,e))}for(ce(),u=r.length;u<i.length;u+=1)o(u);le()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=Tu(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)v(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)T(i[l]);s=!1},d(c){Lt(i,c),c&&A(e),a&&a.d(c),c&&A(n)}}}function Iu(t){let e,n;function s(){return t[3](t[8])}function r(){return t[4](t[6])}return e=new Tp({props:{tag:t[6]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){F(e.$$.fragment)},m(i,o){L(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(v(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){M(e,i)}}}function Tu(t){let e,n,s;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-lsipoc"></i>',f(e,"class","add-supertag svelte-lsipoc"),f(e,"title","Click to create a new supertag")},m(r,i){C(r,e,i),n||(s=V(e,"click",t[5]),n=!0)},p:D,d(r){r&&A(e),n=!1,s()}}}function Ak(t){let e,n,s=t[0].length&&bu(t);return{c(){e=w("ul"),s&&s.c(),f(e,"class","svelte-lsipoc")},m(r,i){C(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&v(s,1)):(s=bu(r),s.c(),v(s,1),s.m(e,null)):s&&(ce(),T(s,1,1,()=>{s=null}),le())},i(r){n||(v(s),n=!0)},o(r){T(s),n=!1},d(r){r&&A(e),s&&s.d()}}}function Ck(t,e,n){let s,r;Oe(t,_t,l=>n(0,s=l)),Oe(t,yp,l=>n(1,r=l));const i=Qe();return[s,r,i,l=>_t.removeByIndex(l),l=>_t.addOrReplace(new Pi(yT(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class Dk extends W{constructor(e){super(),G(this,e,Ck,Ak,K,{})}}const vS=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),Rk=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class Nk{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=ro(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=ro(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),QT(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=ro(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),YT(this.tagString)}}const Eu=()=>new Nk,ro=(t,e,n,s,r,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${r}${s}`,`sort:${e}:${n}`];if(c.length>0){const h=io(c.map(d=>wp(d)));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${io(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>Rk[p]).map(p=>new $i("-",p)),d=io(h);l.push(d)}const u=l.join("+");return console.log("searching for",u),u},io=t=>{const e=Ok(t);let n=[...ku([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${ku(e["~"]).join(" ~ ")} )`),n.join("+")},Ok=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},ku=t=>t.map(e=>e.serialize()),$k=()=>{const t=[],{subscribe:e,update:n}=Li("blockedContent",t);return{subscribe:e,toggle(s){n(r=>r.includes(s)?r.filter(i=>i!==s):[...r,s])}}},Pk=$k();function Lk(t){let e,n;return e=new vk({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Mk(t){let e,n,s,r;const i=[Fk,Uk],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Ze()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),T(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function Uk(t){let e,n;return e=new Mp({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Fk(t){let e,n;return e=new Mp({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Su(t){let e,n;return e=new UT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function xk(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,_,g,m,I;n=new Sk({}),r=new _E({}),r.$on("pick",t[7]),o=new Dk({}),o.$on("supertag",t[8]),l=new nc({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const b=[Mk,Lk],k=[];function E(O,X){return O[1]!==void 0?0:1}h=E(t),d=k[h]=b[h](t),_=new Ik({});let N=t[0]&&Su(t);return{c(){e=w("div"),F(n.$$.fragment),s=$(),F(r.$$.fragment),i=$(),F(o.$$.fragment),a=$(),c=w("div"),F(l.$$.fragment),u=$(),d.c(),p=$(),F(_.$$.fragment),g=$(),N&&N.c(),m=Ze(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(O,X){C(O,e,X),L(n,e,null),y(e,s),L(r,e,null),y(e,i),L(o,e,null),y(e,a),y(e,c),L(l,c,null),C(O,u,X),k[h].m(O,X),C(O,p,X),L(_,O,X),C(O,g,X),N&&N.m(O,X),C(O,m,X),I=!0},p(O,[X]){let fe=h;h=E(O),h===fe?k[h].p(O,X):(ce(),T(k[fe],1,1,()=>{k[fe]=null}),le(),d=k[h],d?d.p(O,X):(d=k[h]=b[h](O),d.c()),v(d,1),d.m(p.parentNode,p)),O[0]?N?(N.p(O,X),X&1&&v(N,1)):(N=Su(O),N.c(),v(N,1),N.m(m.parentNode,m)):N&&(ce(),T(N,1,1,()=>{N=null}),le())},i(O){I||(v(n.$$.fragment,O),v(r.$$.fragment,O),v(o.$$.fragment,O),v(l.$$.fragment,O),v(d),v(_.$$.fragment,O),v(N),I=!0)},o(O){T(n.$$.fragment,O),T(r.$$.fragment,O),T(o.$$.fragment,O),T(l.$$.fragment,O),T(d),T(_.$$.fragment,O),T(N),I=!1},d(O){O&&A(e),M(n),M(r),M(o),M(l),O&&A(u),k[h].d(O),O&&A(p),M(_,O),O&&A(g),N&&N.d(O),O&&A(m)}}}function Vk(t,e,n){let s,r,i,o,a;Oe(t,wn,b=>n(6,s=b)),Oe(t,Pk,b=>n(12,r=b)),Oe(t,As,b=>n(13,i=b)),Oe(t,_t,b=>n(2,o=b)),Oe(t,es,b=>n(14,a=b));let c=!1,l,u=!1,h=JSON.stringify(s);const d=async()=>{n(1,l=void 0),u=!0,es.reset();try{const[b,k]=await Eu().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPageAndCount();es.addPage(b),ic.set(k)}catch(b){n(1,l=b),console.warn(b)}finally{u=!1}},p=async()=>{if(!u){n(1,l=void 0),u=!0;try{const b=await Eu().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPage();es.addPage(b)}catch(b){n(1,l=b),console.warn(b)}finally{u=!1}}},_=b=>_t.addOrReplace(b.detail),g=()=>{n(0,c=!0)},m=b=>{As.addSupertag(b.detail),_t.set([new Pi("+",b.detail.name,b.detail.tags.length,"supertag")])},I=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const b=JSON.stringify(s);h!==b&&(n(5,h=b),d())}},[c,l,o,d,p,h,s,_,g,m,I]}class Bk extends W{constructor(e){super(),G(this,e,Vk,xk,K,{})}}function jk(t){let e,n;return e=new sc({}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:D,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function qk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=dc(r,i())),{c(){e&&F(e.$$.fragment),n=Ze()},m(o,a){e&&L(e,o,a),C(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){ce();const c=e;T(c.$$.fragment,1,0,()=>{M(c,1)}),le()}r?(e=dc(r,i()),F(e.$$.fragment),v(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}},i(o){s||(e&&v(e.$$.fragment,o),s=!0)},o(o){e&&T(e.$$.fragment,o),s=!1},d(o){o&&A(n),e&&M(e,o)}}}function zk(t){let e,n,s,r;const i=[qk,jk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Ze()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),T(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function Hk(t,e,n){let{loadComponent:s}=e,r;return Cs(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class oc extends W{constructor(e){super(),G(this,e,Hk,zk,K,{loadComponent:1})}}function Kk(t){let e;return{c(){e=w("p"),e.textContent="You got lost..."},m(n,s){C(n,e,s)},i:D,o:D,d(n){n&&A(e)}}}function Gk(t){let e,n;return e=new oc({props:{loadComponent:eS}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Wk(t){let e,n;return e=new oc({props:{loadComponent:Zk}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Qk(t){let e,n;return e=new oc({props:{loadComponent:Jk}}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Yk(t){let e,n;return e=new Bk({}),{c(){F(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Xk(t){let e,n,s,r;const i=[Yk,Qk,Wk,Gk,Kk],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=w("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){C(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ce(),T(o[u],1,1,()=>{o[u]=null}),le(),s=o[n],s||(s=o[n]=i[n](c),s.c()),v(s,1),s.m(e,null))},i(c){r||(v(s),r=!0)},o(c){T(s),r=!1},d(c){c&&A(e),o[n].d()}}}const Jk=()=>Ri(()=>import("./Account-898e1f2f.js"),["assets/Account-898e1f2f.js","assets/Account-0bbfdf36.css"]),Zk=()=>Ri(()=>import("./Preferences-77cada8f.js"),["assets/Preferences-77cada8f.js","assets/ParagraphHeading-ddab9c15.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),eS=()=>Ri(()=>import("./Help-398aca33.js"),["assets/Help-398aca33.js","assets/ParagraphHeading-ddab9c15.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function tS(t,e,n){let s;return Oe(t,bn,r=>n(0,s=r)),[s]}class nS extends W{constructor(e){super(),G(this,e,tS,Xk,K,{})}}function sS(t){let e;return{c(){e=w("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){C(n,e,s)},p:D,i:D,o:D,d(n){n&&A(e)}}}class rS extends W{constructor(e){super(),G(this,e,null,sS,K,{})}}const{subscribe:iS,set:oS}=$p("theme","dark"),Au={subscribe:iS,set(t){oS(t),aS(t),As.setTheme(t)}},aS=t=>{document.documentElement.classList.replace(cS(t),t)},cS=t=>t==="dark"?"light":"dark";function lS(t){let e,n,s,r,i,o;return e=new pT({}),s=new nS({}),i=new rS({}),{c(){F(e.$$.fragment),n=$(),F(s.$$.fragment),r=$(),F(i.$$.fragment)},m(a,c){L(e,a,c),C(a,n,c),L(s,a,c),C(a,r,c),L(i,a,c),o=!0},p:D,i(a){o||(v(e.$$.fragment,a),v(s.$$.fragment,a),v(i.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),T(s.$$.fragment,a),T(i.$$.fragment,a),o=!1},d(a){M(e,a),a&&A(n),M(s,a),a&&A(r),M(i,a)}}}function uS(t){return Au.subscribe(e=>Au.set(e))(),[]}class hS extends W{constructor(e){super(),G(this,e,uS,lS,K,{})}}function dS(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Ri(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new hS({target:document.getElementById("app")});dS();export{TE as $,ue as A,nc as B,jp as C,Ep as D,Pe as E,yt as F,mt as G,st as H,Jt as I,yp as J,Oe as K,As as L,Kl as M,ql as N,$p as O,Du as P,Ou as Q,$u as R,W as S,Nu as T,Au as U,Pk as V,fS as W,X1 as X,vS as Y,Tp as Z,Pi as _,f as a,Kr as a0,Ik as a1,CT as a2,C as b,y as c,ge as d,w as e,Mn as f,D as g,A as h,G as i,$ as j,Ze as k,V as l,v as m,Ge as n,ut as o,ce as p,le as q,T as r,K as s,re as t,Lt as u,me as v,Qe as w,F as x,L as y,M as z};
