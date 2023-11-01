import{s as $i,f as st,l as Xt,g as ot,h as Ht,m as Yt,d as M,j as dt,r as Oa,i as tt,u as b,F as fi,Q as Ad,n as ii,v as _e,H as pu,M as pi,D as gu,p as Ma,a as W,y as oe,c as H,L as La,G as po,e as gi,x as Rd,C as pn,O as ae}from"../chunks/scheduler.85675055.js";import{S as Ui,i as qi,b as lt,d as ut,m as ct,a as V,t as U,e as ht,f as xa,g as Te,c as Ee}from"../chunks/index.ea0af91c.js";import{g as Pd}from"../chunks/firebase.5dd7cec4.js";import{e as Pn}from"../chunks/each.e59479a4.js";import{C as ji,l as Is}from"../chunks/localstorage-enabled-store.c871ad81.js";import{D as Sd,r as ws}from"../chunks/result-columns-store.a3e4d2a4.js";import{T as Fa}from"../chunks/TextInput.0e0532ff.js";import{S as Cd,n as kd,s as Qe}from"../chunks/supertags-store.beaa1017.js";import{g as Vd}from"../chunks/tags.49324235.js";import{a as $a}from"../chunks/format-tag.7e313273.js";import{M as Ua}from"../chunks/tag-modifier-data.021c0243.js";import{T as Pe}from"../chunks/TextButton.a96d38ad.js";import{H as Dd,a as Wr}from"../chunks/Heading3.e51933aa.js";import{g as mu,i as Nd,a as bd,b as Dt,_ as $s,C as Us,r as mi,c as go,d as Od,e as _u,f as Md,S as Mn,E as mo,h as Ld,j as xd,q as Ir,L as rn,k as ee,l as Fd,m as yu,F as Bi,n as $d,o as Ud,p as qd,s as jd}from"../chunks/index.esm2017.45e8812c.js";import{c as Bd,a as Kd}from"../chunks/tag-utils.ceb6413c.js";import{a as zd,b as Gd}from"../chunks/analytics.eca95ce1.js";import{b as As}from"../chunks/blocked-content-store.d3c5af58.js";import{w as Wd}from"../chunks/index.b18ee826.js";import{S as It}from"../chunks/store-keys.4d300505.js";import{t as Rs}from"../chunks/theme-store.81f4485e.js";function Hd(n){let t,e=$a(n[0].name)+"",r,i,s,o;return{c(){t=st("button"),r=Xt(e),this.h()},l(a){t=ot(a,"BUTTON",{class:!0});var l=Ht(t);r=Yt(l,e),l.forEach(M),this.h()},h(){dt(t,"class",i=Oa(Ua[n[0].modifier])+" svelte-1kb5f0w")},m(a,l){tt(a,t,l),b(t,r),s||(o=[fi(t,"click",n[1]),fi(t,"contextmenu",Ad(n[2]))],s=!0)},p(a,[l]){l&1&&e!==(e=$a(a[0].name)+"")&&ii(r,e),l&1&&i!==(i=Oa(Ua[a[0].modifier])+" svelte-1kb5f0w")&&dt(t,"class",i)},i:_e,o:_e,d(a){a&&M(t),s=!1,pu(o)}}}function Qd(n,t,e){let{tag:r}=t;function i(o){pi.call(this,n,o)}function s(o){pi.call(this,n,o)}return n.$$set=o=>{"tag"in o&&e(0,r=o.tag)},[r,i,s]}class vu extends Ui{constructor(t){super(),qi(this,t,Qd,Hd,$i,{tag:0})}}function qa(n,t,e){const r=n.slice();return r[12]=t[e],r[14]=e,r}function ja(n){let t,e;function r(){return n[7](n[14])}function i(){return n[8](n[14],n[12])}return t=new vu({props:{tag:n[12]}}),t.$on("click",r),t.$on("contextmenu",i),{c(){lt(t.$$.fragment)},l(s){ut(t.$$.fragment,s)},m(s,o){ct(t,s,o),e=!0},p(s,o){n=s;const a={};o&1&&(a.tag=n[12]),t.$set(a)},i(s){e||(V(t.$$.fragment,s),e=!0)},o(s){U(t.$$.fragment,s),e=!1},d(s){ht(t,s)}}}function Xd(n){let t;return{c(){t=Xt("Save")},l(e){t=Yt(e,"Save")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function Yd(n){let t;return{c(){t=Xt("Cancel")},l(e){t=Yt(e,"Cancel")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function Jd(n){let t,e,r="Edit Supertag",i,s,o="Name",a,l,u,c,h,d="Description",f,E,_,y,k,Q="Add or remove tags",F,G,Y,K,at,yt,Ot,J,B;function Mt(C){n[4](C)}let I={placeholder:"Name",autocomplete:"false"};n[0].name!==void 0&&(I.value=n[0].name),l=new Fa({props:I}),Ma.push(()=>xa(l,"value",Mt));function $(C){n[5](C)}let w={placeholder:"Description",autocomplete:"false"};n[0].description!==void 0&&(w.value=n[0].description),E=new Fa({props:w}),Ma.push(()=>xa(E,"value",$)),G=new Cd({props:{placeholder:"Search for tags",fetchSuggestions:Vd}}),G.$on("pick",n[6]);let A=Pn(n[0].tags),R=[];for(let C=0;C<A.length;C+=1)R[C]=ja(qa(n,A,C));const Ct=C=>U(R[C],1,1,()=>{R[C]=null});return yt=new Pe({props:{title:"Save changes",$$slots:{default:[Xd]},$$scope:{ctx:n}}}),yt.$on("click",n[9]),J=new Pe({props:{type:"secondary",title:"Cancel",$$slots:{default:[Yd]},$$scope:{ctx:n}}}),J.$on("click",n[2]),{c(){t=st("div"),e=st("h3"),e.textContent=r,i=W(),s=st("span"),s.textContent=o,a=W(),lt(l.$$.fragment),c=W(),h=st("span"),h.textContent=d,f=W(),lt(E.$$.fragment),y=W(),k=st("span"),k.textContent=Q,F=W(),lt(G.$$.fragment),Y=W(),K=st("ul");for(let C=0;C<R.length;C+=1)R[C].c();at=W(),lt(yt.$$.fragment),Ot=W(),lt(J.$$.fragment),this.h()},l(C){t=ot(C,"DIV",{class:!0});var D=Ht(t);e=ot(D,"H3",{"data-svelte-h":!0}),oe(e)!=="svelte-1q4lkkx"&&(e.textContent=r),i=H(D),s=ot(D,"SPAN",{class:!0,"data-svelte-h":!0}),oe(s)!=="svelte-15ueaex"&&(s.textContent=o),a=H(D),ut(l.$$.fragment,D),c=H(D),h=ot(D,"SPAN",{class:!0,"data-svelte-h":!0}),oe(h)!=="svelte-rmspr8"&&(h.textContent=d),f=H(D),ut(E.$$.fragment,D),y=H(D),k=ot(D,"SPAN",{class:!0,"data-svelte-h":!0}),oe(k)!=="svelte-1ripwej"&&(k.textContent=Q),F=H(D),ut(G.$$.fragment,D),Y=H(D),K=ot(D,"UL",{class:!0});var Pt=Ht(K);for(let mt=0;mt<R.length;mt+=1)R[mt].l(Pt);Pt.forEach(M),at=H(D),ut(yt.$$.fragment,D),Ot=H(D),ut(J.$$.fragment,D),D.forEach(M),this.h()},h(){dt(s,"class","svelte-1hhm2px"),dt(h,"class","svelte-1hhm2px"),dt(k,"class","svelte-1hhm2px"),dt(K,"class","svelte-1hhm2px"),dt(t,"class","svelte-1hhm2px")},m(C,D){tt(C,t,D),b(t,e),b(t,i),b(t,s),b(t,a),ct(l,t,null),b(t,c),b(t,h),b(t,f),ct(E,t,null),b(t,y),b(t,k),b(t,F),ct(G,t,null),b(t,Y),b(t,K);for(let Pt=0;Pt<R.length;Pt+=1)R[Pt]&&R[Pt].m(K,null);b(t,at),ct(yt,t,null),b(t,Ot),ct(J,t,null),B=!0},p(C,D){const Pt={};!u&&D&1&&(u=!0,Pt.value=C[0].name,La(()=>u=!1)),l.$set(Pt);const mt={};if(!_&&D&1&&(_=!0,mt.value=C[0].description,La(()=>_=!1)),E.$set(mt),D&1){A=Pn(C[0].tags);let Lt;for(Lt=0;Lt<A.length;Lt+=1){const jn=qa(C,A,Lt);R[Lt]?(R[Lt].p(jn,D),V(R[Lt],1)):(R[Lt]=ja(jn),R[Lt].c(),V(R[Lt],1),R[Lt].m(K,null))}for(Te(),Lt=A.length;Lt<R.length;Lt+=1)Ct(Lt);Ee()}const ce={};D&32768&&(ce.$$scope={dirty:D,ctx:C}),yt.$set(ce);const it={};D&32768&&(it.$$scope={dirty:D,ctx:C}),J.$set(it)},i(C){if(!B){V(l.$$.fragment,C),V(E.$$.fragment,C),V(G.$$.fragment,C);for(let D=0;D<A.length;D+=1)V(R[D]);V(yt.$$.fragment,C),V(J.$$.fragment,C),B=!0}},o(C){U(l.$$.fragment,C),U(E.$$.fragment,C),U(G.$$.fragment,C),R=R.filter(Boolean);for(let D=0;D<R.length;D+=1)U(R[D]);U(yt.$$.fragment,C),U(J.$$.fragment,C),B=!1},d(C){C&&M(t),ht(l),ht(E),ht(G),po(R,C),ht(yt),ht(J)}}}function Zd(n){let t,e;return t=new Sd({props:{$$slots:{default:[Jd]},$$scope:{ctx:n}}}),t.$on("close",n[10]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p(r,[i]){const s={};i&32769&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function tf(n,t,e){const r=gu(),i=()=>r("edit",{oldName:o.name,newSupertag:a}),s=()=>r("close");let{supertag:o}=t,a={...o,tags:[...o.tags]};function l(_){n.$$.not_equal(a.name,_)&&(a.name=_,e(0,a))}function u(_){n.$$.not_equal(a.description,_)&&(a.description=_,e(0,a))}const c=_=>{e(0,a.tags=[...a.tags,{modifier:_.detail.modifier,name:_.detail.label}],a)},h=_=>{a.tags.splice(_,1),e(0,a.tags=[...a.tags],a)},d=(_,y)=>{e(0,a.tags[_].modifier=kd(y.modifier),a)},f=()=>{i(),s()};function E(_){pi.call(this,n,_)}return n.$$set=_=>{"supertag"in _&&e(3,o=_.supertag)},[a,i,s,o,l,u,c,h,d,f,E]}class ef extends Ui{constructor(t){super(),qi(this,t,tf,Zd,$i,{supertag:3})}}function Ba(n,t,e){const r=n.slice();return r[10]=t[e],r}function Ka(n){let t,e;return t=new vu({props:{tag:n[10]}}),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.tag=r[10]),t.$set(s)},i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function za(n){let t,e;return t=new ji({props:{title:"Delete Supertag",warning:"Are you sure? You will not be able to undo it.",labelCancel:"No, keep it!",labelConfirm:"Yes, delete it."}}),t.$on("confirm",n[3]),t.$on("close",n[5]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p:_e,i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Ga(n){let t,e;return t=new ef({props:{supertag:n[0]}}),t.$on("close",n[7]),t.$on("edit",n[8]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.supertag=r[0]),t.$set(s)},i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function nf(n){let t,e,r=n[0].name+"",i,s,o,a=Object.keys(n[0].tags).length+"",l,u,c,h,d,f,E,_,y=(n[0].description||n[0].name)+"",k,Q,F,G,Y,K,at,yt,Ot,J=Pn(n[0].tags),B=[];for(let w=0;w<J.length;w+=1)B[w]=Ka(Ba(n,J,w));const Mt=w=>U(B[w],1,1,()=>{B[w]=null});let I=n[1]&&za(n),$=n[2]&&Ga(n);return{c(){t=st("li"),e=st("h3"),i=Xt(r),s=W(),o=st("small"),l=Xt(a),u=Xt(" tags"),c=W(),h=st("button"),d=W(),f=st("button"),E=W(),_=st("span"),k=Xt(y),Q=W(),F=st("ol");for(let w=0;w<B.length;w+=1)B[w].c();G=W(),I&&I.c(),Y=W(),$&&$.c(),K=gi(),this.h()},l(w){t=ot(w,"LI",{class:!0});var A=Ht(t);e=ot(A,"H3",{class:!0});var R=Ht(e);i=Yt(R,r),R.forEach(M),s=H(A),o=ot(A,"SMALL",{class:!0});var Ct=Ht(o);l=Yt(Ct,a),u=Yt(Ct," tags"),Ct.forEach(M),c=H(A),h=ot(A,"BUTTON",{class:!0}),Ht(h).forEach(M),d=H(A),f=ot(A,"BUTTON",{class:!0}),Ht(f).forEach(M),E=H(A),_=ot(A,"SPAN",{class:!0});var C=Ht(_);k=Yt(C,y),C.forEach(M),Q=H(A),F=ot(A,"OL",{class:!0});var D=Ht(F);for(let Pt=0;Pt<B.length;Pt+=1)B[Pt].l(D);D.forEach(M),A.forEach(M),G=H(w),I&&I.l(w),Y=H(w),$&&$.l(w),K=gi(),this.h()},h(){dt(e,"class","svelte-1u6eufx"),dt(o,"class","svelte-1u6eufx"),dt(h,"class","codicon codicon-edit svelte-1u6eufx"),dt(f,"class","codicon codicon-close svelte-1u6eufx"),dt(_,"class","svelte-1u6eufx"),dt(F,"class","svelte-1u6eufx"),dt(t,"class","svelte-1u6eufx")},m(w,A){tt(w,t,A),b(t,e),b(e,i),b(t,s),b(t,o),b(o,l),b(o,u),b(t,c),b(t,h),b(t,d),b(t,f),b(t,E),b(t,_),b(_,k),b(t,Q),b(t,F);for(let R=0;R<B.length;R+=1)B[R]&&B[R].m(F,null);tt(w,G,A),I&&I.m(w,A),tt(w,Y,A),$&&$.m(w,A),tt(w,K,A),at=!0,yt||(Ot=[fi(h,"click",n[6]),fi(f,"click",n[4])],yt=!0)},p(w,[A]){if((!at||A&1)&&r!==(r=w[0].name+"")&&ii(i,r),(!at||A&1)&&a!==(a=Object.keys(w[0].tags).length+"")&&ii(l,a),(!at||A&1)&&y!==(y=(w[0].description||w[0].name)+"")&&ii(k,y),A&1){J=Pn(w[0].tags);let R;for(R=0;R<J.length;R+=1){const Ct=Ba(w,J,R);B[R]?(B[R].p(Ct,A),V(B[R],1)):(B[R]=Ka(Ct),B[R].c(),V(B[R],1),B[R].m(F,null))}for(Te(),R=J.length;R<B.length;R+=1)Mt(R);Ee()}w[1]?I?(I.p(w,A),A&2&&V(I,1)):(I=za(w),I.c(),V(I,1),I.m(Y.parentNode,Y)):I&&(Te(),U(I,1,1,()=>{I=null}),Ee()),w[2]?$?($.p(w,A),A&4&&V($,1)):($=Ga(w),$.c(),V($,1),$.m(K.parentNode,K)):$&&(Te(),U($,1,1,()=>{$=null}),Ee())},i(w){if(!at){for(let A=0;A<J.length;A+=1)V(B[A]);V(I),V($),at=!0}},o(w){B=B.filter(Boolean);for(let A=0;A<B.length;A+=1)U(B[A]);U(I),U($),at=!1},d(w){w&&(M(t),M(G),M(Y),M(K)),po(B,w),I&&I.d(w),$&&$.d(w),yt=!1,pu(Ot)}}}function rf(n,t,e){const r=gu(),i=()=>r("remove",u),s=()=>e(1,c=!0),o=()=>e(1,c=!1),a=()=>e(2,h=!0),l=()=>e(2,h=!1);let{supertag:u}=t,c=!1,h=!1;function d(f){pi.call(this,n,f)}return n.$$set=f=>{"supertag"in f&&e(0,u=f.supertag)},[u,c,h,i,s,o,a,l,d]}class sf extends Ui{constructor(t){super(),qi(this,t,rf,nf,$i,{supertag:0})}}function _o(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const of=Tu,Eu=new mo("auth","Firebase",Tu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new yu("@firebase/auth");function af(n,...t){_i.logLevel<=rn.WARN&&_i.warn(`Auth (${Mn}): ${n}`,...t)}function si(n,...t){_i.logLevel<=rn.ERROR&&_i.error(`Auth (${Mn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...t){throw yo(n,...t)}function pe(n,...t){return yo(n,...t)}function Iu(n,t,e){const r=Object.assign(Object.assign({},of()),{[t]:e});return new mo("auth","Firebase",r).create(t,{appName:n.name})}function lf(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ye(n,"argument-error"),Iu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yo(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Eu.create(n,...t)}function q(n,t,...e){if(!n)throw yo(t,...e)}function we(n){const t="INTERNAL ASSERTION FAILED: "+n;throw si(t),new Error(t)}function Se(n,t){n||we(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function uf(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uf()||Md()||"connection"in navigator)?navigator.onLine:!0}function hf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Se(e>t,"Short delay should be less than long delay!"),this.isMobile=Nd()||bd()}get(){return cf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,t){Se(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new wr(3e4,6e4);function Au(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ar(n,t,e,r,i={}){return Ru(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ir(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),wu.fetch()(Pu(n,n.config.apiHost,e,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ru(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},df),t);try{const i=new gf(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hr(n,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iu(n,c,u);ye(n,c)}}catch(i){if(i instanceof Bi)throw i;ye(n,"network-request-failed",{message:String(i)})}}async function pf(n,t,e,r,i={}){const s=await Ar(n,t,e,r,i);return"mfaPendingCredential"in s&&ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Pu(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?vo(n.config,i):`${n.config.apiScheme}://${i}`}class gf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(pe(this.auth,"network-request-failed")),ff.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=pe(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n,t){return Ar(n,"POST","/v1/accounts:delete",t)}async function _f(n,t){return Ar(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yf(n,t=!1){const e=Dt(n),r=await e.getIdToken(t),i=To(r);q(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jn(Ps(i.auth_time)),issuedAtTime:Jn(Ps(i.iat)),expirationTime:Jn(Ps(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ps(n){return Number(n)*1e3}function To(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const i=$d(e);return i?JSON.parse(i):(si("Failed to decode base64 JWT payload"),null)}catch(i){return si("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vf(n){const t=To(n);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Bi&&Tf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Tf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await sr(n,_f(e,{idToken:r}));q(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Af(s.providerUserInfo):[],a=wf(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function If(n){const t=Dt(n);await yi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wf(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Af(n){return n.map(t=>{var{providerId:e}=t,r=_o(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(n,t){const e=await Ru(n,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Pu(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return q(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Rf(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new or;return r&&(q(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,t){q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class en{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=_o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ef(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Su(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await sr(this,this.stsTokenManager.getToken(this.auth,t));return q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return yf(this,t)}reload(){return If(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await sr(this,mf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,l,u,c;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,k=(u=e.createdAt)!==null&&u!==void 0?u:void 0,Q=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:F,emailVerified:G,isAnonymous:Y,providerData:K,stsTokenManager:at}=e;q(F&&at,t,"internal-error");const yt=or.fromJSON(this.name,at);q(typeof F=="string",t,"internal-error"),be(h,t.name),be(d,t.name),q(typeof G=="boolean",t,"internal-error"),q(typeof Y=="boolean",t,"internal-error"),be(f,t.name),be(E,t.name),be(_,t.name),be(y,t.name),be(k,t.name),be(Q,t.name);const Ot=new en({uid:F,auth:t,email:d,emailVerified:G,displayName:h,isAnonymous:Y,photoURL:E,phoneNumber:f,tenantId:_,stsTokenManager:yt,createdAt:k,lastLoginAt:Q});return K&&Array.isArray(K)&&(Ot.providerData=K.map(J=>Object.assign({},J))),y&&(Ot._redirectEventId=y),Ot}static async _fromIdTokenResponse(t,e,r=!1){const i=new or;i.updateFromServerResponse(e);const s=new en({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await yi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map;function Ae(n){Se(n instanceof Function,"Expected a class definition");let t=Ha.get(n);return t?(Se(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ha.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Cu.type="NONE";const Qa=Cu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n,t,e){return`firebase:${n}:${t}:${e}`}class Tn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oi(this.userKey,i.apiKey,s),this.fullPersistenceKey=oi("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?en._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Tn(Ae(Qa),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ae(Qa);const o=oi(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const c=await u._get(o);if(c){const h=en._fromJSON(t,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Tn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Tn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Du(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ku(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bu(t))return"Blackberry";if(Ou(t))return"Webos";if(Eo(t))return"Safari";if((t.includes("chrome/")||Vu(t))&&!t.includes("edge/"))return"Chrome";if(Nu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ku(n=ee()){return/firefox\//i.test(n)}function Eo(n=ee()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vu(n=ee()){return/crios\//i.test(n)}function Du(n=ee()){return/iemobile/i.test(n)}function Nu(n=ee()){return/android/i.test(n)}function bu(n=ee()){return/blackberry/i.test(n)}function Ou(n=ee()){return/webos/i.test(n)}function Ki(n=ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pf(n=ee()){var t;return Ki(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Sf(){return Fd()&&document.documentMode===10}function Mu(n=ee()){return Ki(n)||Nu(n)||Ou(n)||bu(n)||/windows phone/i.test(n)||Du(n)}function Cf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,t=[]){let e;switch(n){case"Browser":e=Xa(ee());break;case"Worker":e=`${Xa(ee())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Mn}/${r}`}async function xu(n,t){return Ar(n,"GET","/v2/recaptchaConfig",Au(n,t))}function Ya(n){return n!==void 0&&n.enterprise!==void 0}class Fu{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(e=>e.provider==="EMAIL_PASSWORD_PROVIDER"&&e.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function $u(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=pe("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",kf().appendChild(r)})}function Vf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Df="https://www.google.com/recaptcha/enterprise.js?render=",Nf="recaptcha-enterprise",bf="NO_RECAPTCHA";class Of{constructor(t){this.type=Nf,this.auth=Rr(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Fu(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ya(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(bf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&Ya(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$u(Df+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Mf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ja(this),this.idTokenSubscription=new Ja(this),this.beforeStateQueue=new Mf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ae(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await yi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Dt(t):null;return e&&q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(t))})}async initializeRecaptchaConfig(){const t=await xu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Fu(t);this.tenantId==null?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled&&new Of(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mo("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ae(t)||this._popupRedirectResolver;q(e,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[Ae(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof e=="function"?t.addObserver(e,r,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&af(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rr(n){return Dt(n)}class Ja{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ld(e=>this.observer=e)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,t){const e=go(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(xd(s,t??{}))return i;ye(i,"already-initialized")}return e.initialize({options:t})}function Ff(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Ae);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function $f(n,t,e){const r=Rr(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=Uu(t),{host:o,port:a}=Uf(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qf()}function Uu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Uf(n){const t=Uu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Za(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Za(o)}}}function Za(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function qf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return we("not implemented")}_getIdTokenResponse(t){return we("not implemented")}_linkToIdToken(t,e){return we("not implemented")}_getReauthenticationResolver(t){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,t){return pf(n,"POST","/v1/accounts:signInWithIdp",Au(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="http://localhost";class sn extends qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ye("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=_o(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return En(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,En(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,En(t,e)}buildRequest(){const t={requestUri:jf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ir(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Io{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Pr{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Oe.credential(t.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return sn._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ie.credential(e,r)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Pr{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Pr{constructor(){super("twitter.com")}static credential(t,e){return sn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Le.credential(e,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await en._fromIdTokenResponse(t,r,i),o=tl(r);return new Sn({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=tl(r);return new Sn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function tl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Bi{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new vi(t,e,r,i)}}function ju(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(n,s,t,r):s})}async function Bf(n,t,e=!1){const r=await sr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Sn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await sr(n,ju(r,i,t,n),e);q(s.idToken,r,"internal-error");const o=To(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(n.uid===a,r,"user-mismatch"),Sn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(n,t,e=!1){const r="signIn",i=await ju(n,r,t),s=await Sn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,t){return Dt(n).setPersistence(t)}function Wf(n,t,e,r){return Dt(n).onIdTokenChanged(t,e,r)}function Hf(n,t,e){return Dt(n).beforeAuthStateChanged(t,e)}function Qf(n){return Dt(n).signOut()}const Ti="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){const n=ee();return Eo(n)||Ki(n)}const Yf=1e3,Jf=10;class Ku extends Bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xf()&&Cf(),this.fallbackToPolling=Mu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Sf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Jf):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Yf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ku.type="LOCAL";const zu=Ku;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Gu.type="SESSION";const Wu=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new zi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),l=await Zf(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wo("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function ep(n){ge().location.href=n}/**
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
 */function Hu(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ip(){return Hu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="firebaseLocalStorageDb",sp=1,Ei="firebaseLocalStorage",Xu="fbase_key";class Sr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Gi(n,t){return n.transaction([Ei],t?"readwrite":"readonly").objectStore(Ei)}function op(){const n=indexedDB.deleteDatabase(Qu);return new Sr(n).toPromise()}function js(){const n=indexedDB.open(Qu,sp);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ei,{keyPath:Xu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ei)?t(r):(r.close(),await op(),t(await js()))})})}async function el(n,t,e){const r=Gi(n,!0).put({[Xu]:t,value:e});return new Sr(r).toPromise()}async function ap(n,t){const e=Gi(n,!1).get(t),r=await new Sr(e).toPromise();return r===void 0?null:r.value}function nl(n,t){const e=Gi(n,!0).delete(t);return new Sr(e).toPromise()}const lp=800,up=3;class Yu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>up)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(ip()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await np(),!this.activeServiceWorker)return;this.sender=new tp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await js();return await el(t,Ti,"1"),await nl(t,Ti),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>el(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>ap(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>nl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Gi(i,!1).getAll();return new Sr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yu.type="LOCAL";const cp=Yu;new wr(3e4,6e4);/**
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
 */function Ju(n,t){return t?Ae(t):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends qu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return En(t,this._buildIdpRequest())}_linkToIdToken(t,e){return En(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return En(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function hp(n){return zf(n.auth,new Ao(n),n.bypassAuthState)}function dp(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),Kf(e,new Ao(n),n.bypassAuthState)}async function fp(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),Bf(e,new Ao(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hp;case"linkViaPopup":case"linkViaRedirect":return fp;case"reauthViaPopup":case"reauthViaRedirect":return dp;default:ye(this.auth,"internal-error")}}resolve(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new wr(2e3,1e4);async function gp(n,t,e){const r=Rr(n);lf(n,t,Io);const i=Ju(r,e);return new Xe(r,"signInViaPopup",t,i).executeNotNull()}class Xe extends Zu{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const t=wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pp.get())};t()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="pendingRedirect",ai=new Map;class _p extends Zu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=ai.get(this.auth._key());if(!t){try{const r=await yp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}ai.set(this.auth._key(),t)}return this.bypassAuthState||ai.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yp(n,t){const e=Ep(t),r=Tp(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function vp(n,t){ai.set(n._key(),t)}function Tp(n){return Ae(n._redirectPersistence)}function Ep(n){return oi(mp,n.config.apiKey,n.name)}async function Ip(n,t,e=!1){const r=Rr(n),i=Ju(r,t),o=await new _p(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=10*60*1e3;class Ap{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Rp(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!tc(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(pe(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wp&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(t))}saveEventToCache(t){this.cachedEventUids.add(rl(t)),this.lastProcessedEventTime=Date.now()}}function rl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function tc({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Rp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(n,t={}){return Ar(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cp=/^https?/;async function kp(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Pp(n);for(const e of t)try{if(Vp(e))return}catch{}ye(n,"unauthorized-domain")}function Vp(n){const t=qs(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Cp.test(e))return!1;if(Sp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Dp=new wr(3e4,6e4);function il(){const n=ge().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Np(n){return new Promise((t,e)=>{var r,i,s;function o(){il(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{il(),e(pe(n,"network-request-failed"))},timeout:Dp.get()})}if(!((i=(r=ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=Vf("iframefcb");return ge()[a]=()=>{gapi.load?o():e(pe(n,"network-request-failed"))},$u(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw li=null,t})}let li=null;function bp(n){return li=li||Np(n),li}/**
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
 */const Op=new wr(5e3,15e3),Mp="__/auth/iframe",Lp="emulator/auth/iframe",xp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $p(n){const t=n.config;q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?vo(t,Lp):`https://${n.config.authDomain}/${Mp}`,r={apiKey:t.apiKey,appName:n.name,v:Mn},i=Fp.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Ir(r).slice(1)}`}async function Up(n){const t=await bp(n),e=ge().gapi;return q(e,n,"internal-error"),t.open({where:document.body,url:$p(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},Op.get());function l(){ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const qp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jp=500,Bp=600,Kp="_blank",zp="http://localhost";class sl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gp(n,t,e,r=jp,i=Bp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qp),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ee().toLowerCase();e&&(a=Vu(u)?Kp:e),ku(u)&&(t=t||zp,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,E])=>`${d}${f}=${E},`,"");if(Pf(u)&&a!=="_self")return Wp(t||"",a),new sl(null);const h=window.open(t||"",a,c);q(h,n,"popup-blocked");try{h.focus()}catch{}return new sl(h)}function Wp(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Hp="__/auth/handler",Qp="emulator/auth/handler",Xp=encodeURIComponent("fac");async function ol(n,t,e,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Mn,eventId:i};if(t instanceof Io){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Ud(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof Pr){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${Xp}=${encodeURIComponent(l)}`:"";return`${Yp(n)}?${Ir(a).slice(1)}${u}`}function Yp({config:n}){return n.emulator?vo(n,Qp):`https://${n.authDomain}/${Hp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="webStorageSupport";class Jp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wu,this._completeRedirectFn=Ip,this._overrideRedirectResult=vp}async _openPopup(t,e,r,i){var s;Se((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ol(t,e,r,qs(),i);return Gp(t,o,wo())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await ol(t,e,r,qs(),i);return ep(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Se(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Up(t),r=new Ap(t);return e.register("authEvent",i=>(q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ss,{type:Ss},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ss];o!==void 0&&e(!!o),ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Mu()||Eo()||Ki()}}const Zp=Jp;var al="@firebase/auth",ll="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ng(n){$s(new Us("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lu(n)},u=new Lf(r,i,s,l);return Ff(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),$s(new Us("auth-internal",t=>{const e=Rr(t.getProvider("auth").getImmediate());return(r=>new tg(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(al,ll,eg(n)),mi(al,ll,"esm2017")}/**
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
 */const rg=5*60,ig=mu("authIdTokenMaxAge")||rg;let ul=null;const sg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>ig)return;const i=e==null?void 0:e.token;ul!==i&&(ul=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Be(n=_u()){const t=go(n,"auth");if(t.isInitialized())return t.getImmediate();const e=xf(n,{popupRedirectResolver:Zp,persistence:[cp,zu,Wu]}),r=mu("authTokenSyncURL");if(r){const s=sg(r);Hf(e,s,()=>s(e.currentUser)),Wf(e,o=>s(o))}const i=Od("auth");return i&&$f(e,`http://${i}`),e}ng("Browser");let og=new Ie;Gf(Be(),zu);const ag=async()=>gp(Be(),og),lg=async()=>Qf(Be());var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Ro=Ro||{},x=ug||self;function Wi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Cr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function cg(n){return Object.prototype.hasOwnProperty.call(n,Cs)&&n[Cs]||(n[Cs]=++hg)}var Cs="closure_uid_"+(1e9*Math.random()>>>0),hg=0;function dg(n,t,e){return n.call.apply(n.bind,arguments)}function fg(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Bt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Bt=dg:Bt=fg,Bt.apply(null,arguments)}function Qr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function bt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ke(){this.s=this.s,this.o=this.o}var pg=0;Ke.prototype.s=!1;Ke.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pg!=0)&&cg(this)};Ke.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ec=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Po(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function cl(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Wi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Kt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};var gg=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return n}();function ar(n){return/^[\s\xa0]*$/.test(n)}function Hi(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function he(n){return Hi().indexOf(n)!=-1}function So(n){return So[" "](n),n}So[" "]=function(){};function mg(n,t){var e=lm;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var _g=he("Opera"),Cn=he("Trident")||he("MSIE"),nc=he("Edge"),Bs=nc||Cn,rc=he("Gecko")&&!(Hi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),yg=Hi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function ic(){var n=x.document;return n?n.documentMode:void 0}var Ks;t:{var ks="",Vs=function(){var n=Hi();if(rc)return/rv:([^\);]+)(\)|;)/.exec(n);if(nc)return/Edge\/([\d\.]+)/.exec(n);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(yg)return/WebKit\/(\S+)/.exec(n);if(_g)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Vs&&(ks=Vs?Vs[1]:""),Cn){var Ds=ic();if(Ds!=null&&Ds>parseFloat(ks)){Ks=String(Ds);break t}}Ks=ks}var zs;if(x.document&&Cn){var hl=ic();zs=hl||parseInt(Ks,10)||void 0}else zs=void 0;var vg=zs;function lr(n,t){if(Kt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(rc){t:{try{So(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Tg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&lr.$.h.call(this)}}bt(lr,Kt);var Tg={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),Eg=0;function Ig(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Eg,this.fa=this.ia=!1}function Qi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Co(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function wg(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function sc(n){const t={};for(const e in n)t[e]=n[e];return t}const dl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oc(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<dl.length;s++)e=dl[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Xi(n){this.src=n,this.g={},this.h=0}Xi.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ws(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Ig(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Gs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=ec(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Ws(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var ko="closure_lm_"+(1e6*Math.random()|0),Ns={};function ac(n,t,e,r,i){if(r&&r.once)return uc(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ac(n,t[s],e,r,i);return null}return e=No(e),n&&n[kr]?n.O(t,e,Cr(r)?!!r.capture:!!r,i):lc(n,t,e,!1,r,i)}function lc(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Cr(i)?!!i.capture:!!i,a=Do(n);if(a||(n[ko]=a=new Xi(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Ag(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)gg||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(hc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Ag(){function n(e){return t.call(n.src,n.listener,e)}const t=Rg;return n}function uc(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)uc(n,t[s],e,r,i);return null}return e=No(e),n&&n[kr]?n.P(t,e,Cr(r)?!!r.capture:!!r,i):lc(n,t,e,!0,r,i)}function cc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)cc(n,t[s],e,r,i);else r=Cr(r)?!!r.capture:!!r,e=No(e),n&&n[kr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Ws(s,e,r,i),-1<e&&(Qi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Do(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Ws(t,e,r,i)),(e=-1<n?t[n]:null)&&Vo(e))}function Vo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[kr])Gs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(hc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Do(t))?(Gs(e,n),e.h==0&&(e.src=null,t[ko]=null)):Qi(n)}}}function hc(n){return n in Ns?Ns[n]:Ns[n]="on"+n}function Rg(n,t){if(n.fa)n=!0;else{t=new lr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Vo(n),n=e.call(r,t)}return n}function Do(n){return n=n[ko],n instanceof Xi?n:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(n){return typeof n=="function"?n:(n[bs]||(n[bs]=function(t){return n.handleEvent(t)}),n[bs])}function Nt(){Ke.call(this),this.i=new Xi(this),this.S=this,this.J=null}bt(Nt,Ke);Nt.prototype[kr]=!0;Nt.prototype.removeEventListener=function(n,t,e,r){cc(this,n,t,e,r)};function $t(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Kt(t,n);else if(t instanceof Kt)t.target=t.target||n;else{var i=t;t=new Kt(r,n),oc(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Xr(o,r,!0,t)&&i}if(o=t.g=n,i=Xr(o,r,!0,t)&&i,i=Xr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Xr(o,r,!1,t)&&i}Nt.prototype.N=function(){if(Nt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Qi(e[r]);delete n.g[t],n.h--}}this.J=null};Nt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Nt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Xr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Gs(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var bo=x.JSON.stringify;class Pg{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Sg(){var n=Oo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Cg{constructor(){this.h=this.g=null}add(t,e){const r=dc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var dc=new Pg(()=>new kg,n=>n.reset());class kg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Vg(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Dg(n){x.setTimeout(()=>{throw n},0)}let ur,cr=!1,Oo=new Cg,fc=()=>{const n=x.Promise.resolve(void 0);ur=()=>{n.then(Ng)}};var Ng=()=>{for(var n;n=Sg();){try{n.h.call(n.g)}catch(e){Dg(e)}var t=dc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}cr=!1};function Yi(n,t){Nt.call(this),this.h=n||1,this.g=t||x,this.j=Bt(this.qb,this),this.l=Date.now()}bt(Yi,Nt);v=Yi.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$t(this,"tick"),this.ga&&(Mo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){Yi.$.N.call(this),Mo(this),delete this.g};function Lo(n,t,e){if(typeof n=="function")e&&(n=Bt(n,e));else if(n&&typeof n.handleEvent=="function")n=Bt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(n,t||0)}function pc(n){n.g=Lo(()=>{n.g=null,n.i&&(n.i=!1,pc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class bg extends Ke{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:pc(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(n){Ke.call(this),this.h=n,this.g={}}bt(hr,Ke);var fl=[];function gc(n,t,e,r){Array.isArray(e)||(e&&(fl[0]=e.toString()),e=fl);for(var i=0;i<e.length;i++){var s=ac(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function mc(n){Co(n.g,function(t,e){this.g.hasOwnProperty(e)&&Vo(t)},n),n.g={}}hr.prototype.N=function(){hr.$.N.call(this),mc(this)};hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ji(){this.g=!0}Ji.prototype.Ea=function(){this.g=!1};function Og(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Mg(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function yn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+xg(n,e)+(r?" "+r:"")})}function Lg(n,t){n.info(function(){return"TIMEOUT: "+t})}Ji.prototype.info=function(){};function xg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bo(e)}catch{return t}}var cn={},pl=null;function Zi(){return pl=pl||new Nt}cn.Ta="serverreachability";function _c(n){Kt.call(this,cn.Ta,n)}bt(_c,Kt);function dr(n){const t=Zi();$t(t,new _c(t))}cn.STAT_EVENT="statevent";function yc(n,t){Kt.call(this,cn.STAT_EVENT,n),this.stat=t}bt(yc,Kt);function Jt(n){const t=Zi();$t(t,new yc(t,n))}cn.Ua="timingevent";function vc(n,t){Kt.call(this,cn.Ua,n),this.size=t}bt(vc,Kt);function Vr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},t)}var ts={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xo(){}xo.prototype.h=null;function gl(n){return n.h||(n.h=n.i())}function Ec(){}var Dr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fo(){Kt.call(this,"d")}bt(Fo,Kt);function $o(){Kt.call(this,"c")}bt($o,Kt);var Hs;function es(){}bt(es,xo);es.prototype.g=function(){return new XMLHttpRequest};es.prototype.i=function(){return{}};Hs=new es;function Nr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new hr(this),this.P=Fg,n=Bs?125:void 0,this.V=new Yi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ic}function Ic(){this.i=null,this.g="",this.h=!1}var Fg=45e3,Qs={},Ii={};v=Nr.prototype;v.setTimeout=function(n){this.P=n};function Xs(n,t,e){n.L=1,n.v=rs(Ce(t)),n.s=e,n.S=!0,wc(n,null)}function wc(n,t){n.G=Date.now(),br(n),n.A=Ce(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Dc(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Ic,n.g=Jc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new bg(Bt(n.Pa,n,n.g),n.O)),gc(n.U,n.g,"readystatechange",n.nb),t=n.I?sc(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),dr(),Og(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&de(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const c=de(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Bs||this.g&&(this.h.h||this.g.ja()||vl(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?dr(3):dr(2)),ns(this);var e=this.g.da();this.ca=e;e:if(Ac(this)){var r=vl(this.g);n="";var i=r.length,s=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ye(this),Zn(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Mg(this.j,this.u,this.A,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ar(a)){var u=a;break e}}u=null}if(e=u)yn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ys(this,e);else{this.i=!1,this.o=3,Jt(12),Ye(this),Zn(this);break t}}this.S?(Rc(this,c,o),Bs&&this.i&&c==3&&(gc(this.U,this.V,"tick",this.mb),this.V.start())):(yn(this.j,this.m,o,null),Ys(this,o)),c==4&&Ye(this),this.i&&!this.J&&(c==4?Hc(this.l,this):(this.i=!1,br(this)))}else sm(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Jt(12)):(this.o=0,Jt(13)),Ye(this),Zn(this)}}}catch{}finally{}};function Ac(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Rc(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=$g(n,e),i==Ii){t==4&&(n.o=4,Jt(14),r=!1),yn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Qs){n.o=4,Jt(15),yn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else yn(n.j,n.m,i,null),Ys(n,i);Ac(n)&&i!=Ii&&i!=Qs&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Jt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),zo(t),t.M=!0,Jt(11))):(yn(n.j,n.m,e,"[Invalid Chunked Response]"),Ye(n),Zn(n))}v.mb=function(){if(this.g){var n=de(this.g),t=this.g.ja();this.C<t.length&&(ns(this),Rc(this,n,t),this.i&&n!=4&&br(this))}};function $g(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Ii:(e=Number(t.substring(e,r)),isNaN(e)?Qs:(r+=1,r+e>t.length?Ii:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Ye(this)};function br(n){n.Y=Date.now()+n.P,Pc(n,n.P)}function Pc(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Vr(Bt(n.lb,n),t)}function ns(n){n.B&&(x.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Lg(this.j,this.A),this.L!=2&&(dr(),Jt(17)),Ye(this),this.o=2,Zn(this)):Pc(this,this.Y-n)};function Zn(n){n.l.H==0||n.J||Hc(n.l,n)}function Ye(n){ns(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Mo(n.V),mc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ys(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Js(e.i,n))){if(!n.K&&Js(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Ri(e),os(e);else break t;Ko(e),Jt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Vr(Bt(e.ib,e),6e3));if(1>=Oc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Je(e,11)}else if((n.K||e.g==n)&&Ri(e),!ar(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const c=u[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Uo(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ft(r.I,r.F,_))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Yc(r,r.J?r.pa:null,r.Y),o.K){Mc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ns(a),br(a)),r.g=o}else Gc(r);0<e.j.length&&as(e)}else u[0]!="stop"&&u[0]!="close"||Je(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Je(e,7):Bo(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}dr(4)}catch{}}function Ug(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Wi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function qg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Wi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Sc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Wi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=qg(n),r=Ug(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof nn){this.h=n.h,wi(this,n.j),this.s=n.s,this.g=n.g,Ai(this,n.m),this.l=n.l;var t=n.i,e=new fr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ml(this,e),this.o=n.o}else n&&(t=String(n).match(Cc))?(this.h=!1,wi(this,t[1]||"",!0),this.s=Hn(t[2]||""),this.g=Hn(t[3]||"",!0),Ai(this,t[4]),this.l=Hn(t[5]||"",!0),ml(this,t[6]||"",!0),this.o=Hn(t[7]||"")):(this.h=!1,this.i=new fr(null,this.h))}nn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Qn(t,_l,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Qn(t,_l,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Qn(e,e.charAt(0)=="/"?zg:Kg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Qn(e,Wg)),n.join("")};function Ce(n){return new nn(n)}function wi(n,t,e){n.j=e?Hn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Ai(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ml(n,t,e){t instanceof fr?(n.i=t,Hg(n.i,n.h)):(e||(t=Qn(t,Gg)),n.i=new fr(t,n.h))}function ft(n,t,e){n.i.set(t,e)}function rs(n){return ft(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Hn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Qn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Bg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Bg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var _l=/[#\/\?@]/g,Kg=/[#\?:]/g,zg=/[#\?]/g,Gg=/[#\?@]/g,Wg=/#/g;function fr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function ze(n){n.g||(n.g=new Map,n.h=0,n.i&&jg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=fr.prototype;v.add=function(n,t){ze(this),this.i=null,n=Ln(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function kc(n,t){ze(n),t=Ln(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Vc(n,t){return ze(n),t=Ln(n,t),n.g.has(t)}v.forEach=function(n,t){ze(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){ze(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){ze(this);let t=[];if(typeof n=="string")Vc(this,n)&&(t=t.concat(this.g.get(Ln(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return ze(this),this.i=null,n=Ln(this,n),Vc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Dc(n,t,e){kc(n,t),0<e.length&&(n.i=null,n.g.set(Ln(n,t),Po(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Ln(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Hg(n,t){t&&!n.j&&(ze(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(kc(this,r),Dc(this,i,e))},n)),n.j=t}var Qg=class{constructor(n,t){this.g=n,this.map=t}};function Nc(n){this.l=n||Xg,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xg=10;function bc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Oc(n){return n.h?1:n.g?n.g.size:0}function Js(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Uo(n,t){n.g?n.g.add(t):n.h=t}function Mc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Nc.prototype.cancel=function(){if(this.i=Lc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Lc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Po(n.i)}var Yg=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function Jg(){this.g=new Yg}function Zg(n,t,e){const r=e||"";try{Sc(n,function(i,s){let o=i;Cr(i)&&(o=bo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function tm(n,t){const e=new Ji;if(x.Image){const r=new Image;r.onload=Qr(Yr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Qr(Yr,e,r,"TestLoadImage: error",!1,t),r.onabort=Qr(Yr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Qr(Yr,e,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Yr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Or(n){this.l=n.fc||null,this.j=n.ob||!1}bt(Or,xo);Or.prototype.g=function(){return new is(this.l,this.j)};Or.prototype.i=function(n){return function(){return n}}({});function is(n,t){Nt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=qo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(is,Nt);var qo=0;v=is.prototype;v.open=function(n,t){if(this.readyState!=qo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,pr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=qo};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function xc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Mr(this):pr(this),this.readyState==3&&xc(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,Mr(this))};v.Ya=function(n){this.g&&(this.response=n,Mr(this))};v.ka=function(){this.g&&Mr(this)};function Mr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,pr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function pr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var em=x.JSON.parse;function _t(n){Nt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fc,this.L=this.M=!1}bt(_t,Nt);var Fc="",nm=/^https?$/i,rm=["POST","PUT"];v=_t.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hs.g(),this.C=this.u?gl(this.u):gl(Hs),this.g.onreadystatechange=Bt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){yl(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&n instanceof x.FormData,!(0<=ec(rm,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{qc(this),0<this.B&&((this.L=im(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Bt(this.ua,this)):this.A=Lo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){yl(this,s)}};function im(n){return Cn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof Ro<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$t(this,"timeout"),this.abort(8))};function yl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,$c(n),ss(n)}function $c(n){n.F||(n.F=!0,$t(n,"complete"),$t(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,$t(this,"complete"),$t(this,"abort"),ss(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ss(this,!0)),_t.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Uc(this):this.kb())};v.kb=function(){Uc(this)};function Uc(n){if(n.h&&typeof Ro<"u"&&(!n.C[1]||de(n)!=4||n.da()!=2)){if(n.v&&de(n)==4)Lo(n.La,0,n);else if($t(n,"readystatechange"),de(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Cc)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!nm.test(i?i.toLowerCase():"")}e=r}if(e)$t(n,"complete"),$t(n,"success");else{n.m=6;try{var s=2<de(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",$c(n)}}finally{ss(n)}}}}function ss(n,t){if(n.g){qc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||$t(n,"ready");try{e.onreadystatechange=r}catch{}}}function qc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function de(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),em(t)}};function vl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Fc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function sm(n){const t={};n=(n.g&&2<=de(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(ar(n[r]))continue;var e=Vg(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}wg(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jc(n){let t="";return Co(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function jo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=jc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ft(n,t,e))}function zn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Bc(n){this.Ga=0,this.j=[],this.l=new Ji,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,n),this.hb=zn("retryDelaySeedMs",1e4,n),this.eb=zn("forwardChannelMaxRetries",2,n),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Nc(n&&n.concurrentRequestLimit),this.Ja=new Jg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Bc.prototype;v.ra=8;v.H=1;function Bo(n){if(Kc(n),n.H==3){var t=n.W++,e=Ce(n.I);if(ft(e,"SID",n.K),ft(e,"RID",t),ft(e,"TYPE","terminate"),Lr(n,e),t=new Nr(n,n.l,t),t.L=2,t.v=rs(Ce(e)),e=!1,x.navigator&&x.navigator.sendBeacon)try{e=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&x.Image&&(new Image().src=t.v,e=!0),e||(t.g=Jc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),br(t)}Xc(n)}function os(n){n.g&&(zo(n),n.g.cancel(),n.g=null)}function Kc(n){os(n),n.u&&(x.clearTimeout(n.u),n.u=null),Ri(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function as(n){if(!bc(n.i)&&!n.m){n.m=!0;var t=n.Na;ur||fc(),cr||(ur(),cr=!0),Oo.add(t,n),n.C=0}}function om(n,t){return Oc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Vr(Bt(n.Na,n,t),Qc(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Nr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=sc(s),oc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=zc(this,i,t),e=Ce(this.I),ft(e,"RID",n),ft(e,"CVER",22),this.F&&ft(e,"X-HTTP-Session-Id",this.F),Lr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(jc(s)))+"&"+t:this.o&&jo(e,this.o,s)),Uo(this.i,i),this.bb&&ft(e,"TYPE","init"),this.P?(ft(e,"$req",t),ft(e,"SID","null"),i.aa=!0,Xs(i,e,null)):Xs(i,e,t),this.H=2}}else this.H==3&&(n?Tl(this,n):this.j.length==0||bc(this.i)||Tl(this))};function Tl(n,t){var e;t?e=t.m:e=n.W++;const r=Ce(n.I);ft(r,"SID",n.K),ft(r,"RID",e),ft(r,"AID",n.V),Lr(n,r),n.o&&n.s&&jo(r,n.o,n.s),e=new Nr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=zc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Uo(n.i,e),Xs(e,r,t)}function Lr(n,t){n.na&&Co(n.na,function(e,r){ft(t,r,e)}),n.h&&Sc({},function(e,r){ft(t,r,e)})}function zc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Bt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<e;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Zg(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Gc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;ur||fc(),cr||(ur(),cr=!0),Oo.add(t,n),n.A=0}}function Ko(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Vr(Bt(n.Ma,n),Qc(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,Wc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Vr(Bt(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Jt(10),os(this),Wc(this))};function zo(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function Wc(n){n.g=new Nr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ce(n.wa);ft(t,"RID","rpc"),ft(t,"SID",n.K),ft(t,"AID",n.V),ft(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ft(t,"TO",n.qa),ft(t,"TYPE","xmlhttp"),Lr(n,t),n.o&&n.s&&jo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=rs(Ce(t)),e.s=null,e.S=!0,wc(e,n)}v.ib=function(){this.v!=null&&(this.v=null,os(this),Ko(this),Jt(19))};function Ri(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function Hc(n,t){var e=null;if(n.g==t){Ri(n),zo(n),n.g=null;var r=2}else if(Js(n.i,t))e=t.F,Mc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Zi(),$t(r,new vc(r,e)),as(n)}else Gc(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&om(n,t)||r==2&&Ko(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Je(n,5);break;case 4:Je(n,10);break;case 3:Je(n,6);break;default:Je(n,2)}}}function Qc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Je(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Bt(n.pb,n);e||(e=new nn("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||wi(e,"https"),rs(e)),tm(e.toString(),r)}else Jt(2);n.H=0,n.h&&n.h.za(t),Xc(n),Kc(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Jt(2)):(this.l.info("Failed to ping google.com"),Jt(1))};function Xc(n){if(n.H=0,n.ma=[],n.h){const t=Lc(n.i);(t.length!=0||n.j.length!=0)&&(cl(n.ma,t),cl(n.ma,n.j),n.i.i.length=0,Po(n.j),n.j.length=0),n.h.ya()}}function Yc(n,t,e){var r=e instanceof nn?Ce(e):new nn(e);if(r.g!="")t&&(r.g=t+"."+r.g),Ai(r,r.m);else{var i=x.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new nn(null);r&&wi(s,r),t&&(s.g=t),i&&Ai(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&ft(r,e,t),ft(r,"VER",n.ra),Lr(n,r),r}function Jc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new _t(new Or({ob:!0})):new _t(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zc(){}v=Zc.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Pi(){if(Cn&&!(10<=Number(vg)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(n,t){return new ie(n,t)};function ie(n,t){Nt.call(this),this.g=new Bc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!ar(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ar(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new xn(this)}bt(ie,Nt);ie.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Jt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Yc(n,null,n.Y),as(n)};ie.prototype.close=function(){Bo(this.g)};ie.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=bo(n),n=e);t.j.push(new Qg(t.fb++,n)),t.H==3&&as(t)};ie.prototype.N=function(){this.g.h=null,delete this.j,Bo(this.g),delete this.g,ie.$.N.call(this)};function th(n){Fo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}bt(th,Fo);function eh(){$o.call(this),this.status=1}bt(eh,$o);function xn(n){this.g=n}bt(xn,Zc);xn.prototype.Ba=function(){$t(this.g,"a")};xn.prototype.Aa=function(n){$t(this.g,new th(n))};xn.prototype.za=function(n){$t(this.g,new eh)};xn.prototype.ya=function(){$t(this.g,"b")};function am(){this.blockSize=-1}function le(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(le,am);le.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Os(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}le.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Os(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Os(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Os(this,r),i=0;break}}this.h=i,this.i+=t};le.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function rt(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var lm={};function Go(n){return-128<=n&&128>n?mg(n,function(t){return new rt([t|0],0>t?-1:0)}):new rt([n|0],0>n?-1:0)}function fe(n){if(isNaN(n)||!isFinite(n))return In;if(0>n)return Ft(fe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Zs;return new rt(t,0)}function nh(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Ft(nh(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=fe(Math.pow(t,8)),r=In,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=fe(Math.pow(t,s)),r=r.R(s).add(fe(o))):(r=r.R(e),r=r.add(fe(o)))}return r}var Zs=4294967296,In=Go(0),to=Go(1),El=Go(16777216);v=rt.prototype;v.ea=function(){if(se(this))return-Ft(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Zs+r)*t,t*=Zs}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Re(this))return"0";if(se(this))return"-"+Ft(this).toString(n);for(var t=fe(Math.pow(n,6)),e=this,r="";;){var i=Ci(e,t).g;e=Si(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Re(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Re(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function se(n){return n.h==-1}v.X=function(n){return n=Si(this,n),se(n)?-1:Re(n)?0:1};function Ft(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new rt(e,~n.h).add(to)}v.abs=function(){return se(this)?Ft(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new rt(e,e[e.length-1]&-2147483648?-1:0)};function Si(n,t){return n.add(Ft(t))}v.R=function(n){if(Re(this)||Re(n))return In;if(se(this))return se(n)?Ft(this).R(Ft(n)):Ft(Ft(this).R(n));if(se(n))return Ft(this.R(Ft(n)));if(0>this.X(El)&&0>n.X(El))return fe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;e[2*r+2*i]+=o*l,Jr(e,2*r+2*i),e[2*r+2*i+1]+=s*l,Jr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Jr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Jr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new rt(e,0)};function Jr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Gn(n,t){this.g=n,this.h=t}function Ci(n,t){if(Re(t))throw Error("division by zero");if(Re(n))return new Gn(In,In);if(se(n))return t=Ci(Ft(n),t),new Gn(Ft(t.g),Ft(t.h));if(se(t))return t=Ci(n,Ft(t)),new Gn(Ft(t.g),t.h);if(30<n.g.length){if(se(n)||se(t))throw Error("slowDivide_ only works with positive integers.");for(var e=to,r=t;0>=r.X(n);)e=Il(e),r=Il(r);var i=gn(e,1),s=gn(r,1);for(r=gn(r,2),e=gn(e,2);!Re(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=gn(r,1),e=gn(e,1)}return t=Si(n,i.R(t)),new Gn(i,t)}for(i=In;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fe(e),o=s.R(t);se(o)||0<o.X(n);)e-=r,s=fe(e),o=s.R(t);Re(s)&&(s=to),i=i.add(s),n=Si(n,o)}return new Gn(i,n)}v.gb=function(n){return Ci(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new rt(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new rt(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new rt(e,this.h^n.h)};function Il(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new rt(e,n.h)}function gn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new rt(i,n.h)}Pi.prototype.createWebChannel=Pi.prototype.g;ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;ts.NO_ERROR=0;ts.TIMEOUT=8;ts.HTTP_ERROR=6;Tc.COMPLETE="complete";Ec.EventType=Dr;Dr.OPEN="a";Dr.CLOSE="b";Dr.ERROR="c";Dr.MESSAGE="d";Nt.prototype.listen=Nt.prototype.O;_t.prototype.listenOnce=_t.prototype.P;_t.prototype.getLastError=_t.prototype.Sa;_t.prototype.getLastErrorCode=_t.prototype.Ia;_t.prototype.getStatus=_t.prototype.da;_t.prototype.getResponseJson=_t.prototype.Wa;_t.prototype.getResponseText=_t.prototype.ja;_t.prototype.send=_t.prototype.ha;_t.prototype.setWithCredentials=_t.prototype.Oa;le.prototype.digest=le.prototype.l;le.prototype.reset=le.prototype.reset;le.prototype.update=le.prototype.j;rt.prototype.add=rt.prototype.add;rt.prototype.multiply=rt.prototype.R;rt.prototype.modulo=rt.prototype.gb;rt.prototype.compare=rt.prototype.X;rt.prototype.toNumber=rt.prototype.ea;rt.prototype.toString=rt.prototype.toString;rt.prototype.getBits=rt.prototype.D;rt.fromNumber=fe;rt.fromString=nh;var um=function(){return new Pi},cm=function(){return Zi()},Ms=ts,hm=Tc,dm=cn,wl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fm=Or,Zr=Ec,pm=_t,gm=le,wn=rt;const Al="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new yu("@firebase/firestore");function Rl(){return on.logLevel}function P(n,...t){if(on.logLevel<=rn.DEBUG){const e=t.map(Wo);on.debug(`Firestore (${Fn}): ${n}`,...e)}}function ke(n,...t){if(on.logLevel<=rn.ERROR){const e=t.map(Wo);on.error(`Firestore (${Fn}): ${n}`,...e)}}function kn(n,...t){if(on.logLevel<=rn.WARN){const e=t.map(Wo);on.warn(`Firestore (${Fn}): ${n}`,...e)}}function Wo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(n="Unexpected state"){const t=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: `+n;throw ke(t),new Error(t)}function nt(n,t){n||N()}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Bi{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(qt.UNAUTHENTICATED))}shutdown(){}}class _m{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ym{constructor(t){this.t=t,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new rh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new qt(t)}}class vm{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new vm(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Em{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Im{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new Em(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=wm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function Z(n,t){return n<t?-1:n>t?1:0}function Vn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new St(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new St(0,0))}static max(){return new O(new St(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,r){e===void 0?e=0:e>t.length&&N(),r===void 0?r=t.length-e:r>t.length-e&&N(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends gr{construct(t,e,r){return new pt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new T(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const Am=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends gr{construct(t,e,r){return new jt(t,e,r)}static isValidIdentifier(t){return Am.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new T(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new jt(e)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(pt.fromString(t))}static fromName(t){return new S(pt.fromString(t).popFirst(5))}static empty(){return new S(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new pt(t.slice()))}}function Rm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new St(e+1,0):new St(e,r));return new $e(i,S.empty(),t)}function Pm(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $e(O.min(),S.empty(),-1)}static max(){return new $e(O.max(),S.empty(),-1)}}function Sm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=S.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class km{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Cm)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof g?e:g.resolve(e)}catch(e){return g.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):g.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):g.reject(e)}static resolve(t){return new g((e,r)=>{e(t)})}static reject(t){return new g((e,r)=>{r(t)})}static waitFor(t){return new g((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},l=>r(l))}),o=!0,s===i&&e()})}static or(t){let e=g.resolve(!1);for(const r of t)e=e.next(i=>i?g.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;e(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new g((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Fr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ho{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ho.ae=-1;function $r(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function Vm(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function sh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e){this.comparator=t,this.root=e||xt.EMPTY}insert(t,e){return new gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(t){return new gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ti(this.root,t,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ti(this.root,t,this.comparator,!0)}}class ti{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??xt.RED,this.left=i??xt.EMPTY,this.right=s??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new xt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw N();const t=this.left.check();if(t!==this.right.check())throw N();return t+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(t,e,r,i,s){return this}insert(t,e,r){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.comparator=t,this.data=new gt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Sl(this.data.getIterator())}getIteratorFrom(t){return new Sl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new zt(this.comparator);return e.data=t,e}}class Sl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.fields=t,t.sort(jt.comparator)}static empty(){return new ne([])}unionWith(t){let e=new zt(jt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class oh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oh("Invalid base64 string: "+s):s}}(t);return new Gt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const Dm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ue(n){if(nt(!!n),typeof n=="string"){let t=0;const e=Dm.exec(n);if(nt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Xo(n){const t=n.mapValue.fields.__previous_value__;return Qo(t)?Xo(t):t}function mr(n){const t=Ue(n.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e,r,i,s,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class _r{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _r&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:bm(n)?9007199254740991:10:N()}function ve(n,t){if(n===t)return!0;const e=ln(n);if(e!==ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return mr(n).isEqual(mr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ue(i.timestampValue),a=Ue(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return an(i.bytesValue).isEqual(an(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return At(i.geoPointValue.latitude)===At(s.geoPointValue.latitude)&&At(i.geoPointValue.longitude)===At(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return At(i.integerValue)===At(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=At(i.doubleValue),a=At(s.doubleValue);return o===a?ki(o)===ki(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Vn(n.arrayValue.values||[],t.arrayValue.values||[],ve);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pl(o)!==Pl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ve(o[l],a[l])))return!1;return!0}(n,t);default:return N()}}function yr(n,t){return(n.values||[]).find(e=>ve(e,t))!==void 0}function Dn(n,t){if(n===t)return 0;const e=ln(n),r=ln(t);if(e!==r)return Z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=At(s.integerValue||s.doubleValue),l=At(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return Cl(n.timestampValue,t.timestampValue);case 4:return Cl(mr(n),mr(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,o){const a=an(s),l=an(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=Z(At(s.latitude),At(o.latitude));return a!==0?a:Z(At(s.longitude),At(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Dn(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ei.mapValue&&o===ei.mapValue)return 0;if(s===ei.mapValue)return 1;if(o===ei.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Z(l[h],c[h]);if(d!==0)return d;const f=Dn(a[l[h]],u[c[h]]);if(f!==0)return f}return Z(l.length,c.length)}(n.mapValue,t.mapValue);default:throw N()}}function Cl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=Ue(n),r=Ue(t),i=Z(e.seconds,r.seconds);return i!==0?i:Z(e.nanos,r.nanos)}function Nn(n){return eo(n)}function eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ue(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return an(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return S.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=eo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${eo(e.fields[o])}`;return i+"}"}(n.mapValue):N()}function kl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function no(n){return!!n&&"integerValue"in n}function Yo(n){return!!n&&"arrayValue"in n}function Vl(n){return!!n&&"nullValue"in n}function Dl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ui(n){return!!n&&"mapValue"in n}function tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return hn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=tr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function bm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.value=t}static empty(){return new Qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ui(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tr(e)}setAll(t){let e=jt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=tr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ui(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ve(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ui(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){hn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Qt(tr(this.value))}}function ah(n){const t=[];return hn(n.fields,(e,r)=>{const i=new jt([e]);if(ui(r)){const s=ah(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ne(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Vt(t,0,O.min(),O.min(),O.min(),Qt.empty(),0)}static newFoundDocument(t,e,r,i){return new Vt(t,1,e,O.min(),r,i,0)}static newNoDocument(t,e){return new Vt(t,2,e,O.min(),O.min(),Qt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,O.min(),O.min(),Qt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vi{constructor(t,e){this.position=t,this.inclusive=e}}function Nl(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),e.key):r=Dn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ve(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function Om(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class lh{}class Rt extends lh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Lm(t,e,r):e==="array-contains"?new $m(t,r):e==="in"?new Um(t,r):e==="not-in"?new qm(t,r):e==="array-contains-any"?new jm(t,r):new Rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new xm(t,r):new Fm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Dn(e,this.value)):e!==null&&ln(this.value)===ln(e)&&this.matchesComparison(Dn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ue extends lh{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new ue(t,e)}matches(t){return uh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function uh(n){return n.op==="and"}function ch(n){return Mm(n)&&uh(n)}function Mm(n){for(const t of n.filters)if(t instanceof ue)return!1;return!0}function ro(n){if(n instanceof Rt)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(ch(n))return n.filters.map(t=>ro(t)).join(",");{const t=n.filters.map(e=>ro(e)).join(",");return`${n.op}(${t})`}}function hh(n,t){return n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.field.isEqual(i.field)&&ve(r.value,i.value)}(n,t):n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&hh(o,i.filters[a]),!0):!1}(n,t):void N()}function dh(n){return n instanceof Rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Nn(e.value)}`}(n):n instanceof ue?function(e){return e.op.toString()+" {"+e.getFilters().map(dh).join(" ,")+"}"}(n):"Filter"}class Lm extends Rt{constructor(t,e,r){super(t,e,r),this.key=S.fromName(r.referenceValue)}matches(t){const e=S.comparator(t.key,this.key);return this.matchesComparison(e)}}class xm extends Rt{constructor(t,e){super(t,"in",e),this.keys=fh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Fm extends Rt{constructor(t,e){super(t,"not-in",e),this.keys=fh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>S.fromName(r.referenceValue))}class $m extends Rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yo(e)&&yr(e.arrayValue,this.value)}}class Um extends Rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yr(this.value.arrayValue,e)}}class qm extends Rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!yr(this.value.arrayValue,e)}}class jm extends Rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ol(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Bm(n,t,e,r,i,s,o)}function Jo(n){const t=j(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ro(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Nn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Nn(r)).join(",")),t.he=e}return t.he}function Zo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Om(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!hh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!bl(n.startAt,t.startAt)&&bl(n.endAt,t.endAt)}function io(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Km(n,t,e,r,i,s,o,a){return new Ur(n,t,e,r,i,s,o,a)}function ta(n){return new Ur(n)}function Ml(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ph(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ea(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function gh(n){return n.collectionGroup!==null}function An(n){const t=j(n);if(t.Pe===null){t.Pe=[];const e=ea(t),r=ph(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new er(e)),t.Pe.push(new er(jt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new er(jt.keyField(),s))}}}return t.Pe}function Ve(n){const t=j(n);if(!t.Ie)if(t.limitType==="F")t.Ie=Ol(t.path,t.collectionGroup,An(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of An(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new er(s.field,o))}const r=t.endAt?new Vi(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Vi(t.startAt.position,t.startAt.inclusive):null;t.Ie=Ol(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function so(n,t){t.getFirstInequalityField(),ea(n);const e=n.filters.concat([t]);return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function oo(n,t,e){return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ls(n,t){return Zo(Ve(n),Ve(t))&&n.limitType===t.limitType}function mh(n){return`${Jo(Ve(n))}|lt:${n.limitType}`}function ao(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>dh(i)).join(", ")}]`),$r(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Nn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Nn(i)).join(",")),`Target(${r})`}(Ve(n))}; limitType=${n.limitType})`}function us(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):S.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of An(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Nl(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,An(r),i)||r.endAt&&!function(o,a,l){const u=Nl(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,An(r),i))}(n,t)}function zm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _h(n){return(t,e)=>{let r=!1;for(const i of An(n)){const s=Gm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gm(n,t,e){const r=n.field.isKeyField()?S.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Dn(l,u):N()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){hn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return sh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new gt(S.comparator);function De(){return Wm}const yh=new gt(S.comparator);function Xn(...n){let t=yh;for(const e of n)t=t.insert(e.key,e);return t}function vh(n){let t=yh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ze(){return nr()}function Th(){return nr()}function nr(){return new $n(n=>n.toString(),(n,t)=>n.isEqual(t))}const Hm=new gt(S.comparator),Qm=new zt(S.comparator);function z(...n){let t=Qm;for(const e of n)t=t.add(e);return t}const Xm=new zt(Z);function Ym(){return Xm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(t)?"-0":t}}function Ih(n){return{integerValue:""+n}}function Jm(n,t){return Vm(t)?Ih(t):Eh(n,t)}/**
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
 */class cs{constructor(){this._=void 0}}function Zm(n,t,e){return n instanceof Di?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qo(s)&&(s=Xo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof vr?Ah(n,t):n instanceof Tr?Rh(n,t):function(i,s){const o=wh(i,s),a=Ll(o)+Ll(i.Te);return no(o)&&no(i.Te)?Ih(a):Eh(i.serializer,a)}(n,t)}function t_(n,t,e){return n instanceof vr?Ah(n,t):n instanceof Tr?Rh(n,t):e}function wh(n,t){return n instanceof Ni?function(r){return no(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Di extends cs{}class vr extends cs{constructor(t){super(),this.elements=t}}function Ah(n,t){const e=Ph(t);for(const r of n.elements)e.some(i=>ve(i,r))||e.push(r);return{arrayValue:{values:e}}}class Tr extends cs{constructor(t){super(),this.elements=t}}function Rh(n,t){let e=Ph(t);for(const r of n.elements)e=e.filter(i=>!ve(i,r));return{arrayValue:{values:e}}}class Ni extends cs{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Ll(n){return At(n.integerValue||n.doubleValue)}function Ph(n){return Yo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function e_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof vr&&i instanceof vr||r instanceof Tr&&i instanceof Tr?Vn(r.elements,i.elements,ve):r instanceof Ni&&i instanceof Ni?ve(r.Te,i.Te):r instanceof Di&&i instanceof Di}(n.transform,t.transform)}class n_{constructor(t,e){this.version=t,this.transformResults=e}}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ci(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hs{}function Sh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new na(n.key,te.none()):new qr(n.key,n.data,te.none());{const e=n.data,r=Qt.empty();let i=new zt(jt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ge(n.key,r,new ne(i.toArray()),te.none())}}function r_(n,t,e){n instanceof qr?function(i,s,o){const a=i.value.clone(),l=Fl(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ge?function(i,s,o){if(!ci(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fl(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ch(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function rr(n,t,e,r){return n instanceof qr?function(s,o,a,l){if(!ci(s.precondition,o))return a;const u=s.value.clone(),c=$l(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ge?function(s,o,a,l){if(!ci(s.precondition,o))return a;const u=$l(s.fieldTransforms,l,o),c=o.data;return c.setAll(Ch(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return ci(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function i_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=wh(r.transform,i||null);s!=null&&(e===null&&(e=Qt.empty()),e.set(r.field,s))}return e||null}function xl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vn(r,i,(s,o)=>e_(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class qr extends hs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ge extends hs{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ch(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Fl(n,t,e){const r=new Map;nt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,t_(o,a,e[i]))}return r}function $l(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Zm(s,o,t))}return r}class na extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kh extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&r_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Th();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const l=Sh(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Vn(this.mutations,t.mutations,(e,r)=>xl(e,r))&&Vn(this.baseMutations,t.baseMutations,(e,r)=>xl(e,r))}}class ra{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){nt(t.mutations.length===r.length);let i=function(){return Hm}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ra(t,e,r,i)}}/**
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
 */class o_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class a_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,X;function Vh(n){switch(n){default:return N();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Dh(n){if(n===void 0)return ke("GRPC error has no .code"),p.UNKNOWN;switch(n){case wt.OK:return p.OK;case wt.CANCELLED:return p.CANCELLED;case wt.UNKNOWN:return p.UNKNOWN;case wt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case wt.INTERNAL:return p.INTERNAL;case wt.UNAVAILABLE:return p.UNAVAILABLE;case wt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case wt.NOT_FOUND:return p.NOT_FOUND;case wt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case wt.ABORTED:return p.ABORTED;case wt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case wt.DATA_LOSS:return p.DATA_LOSS;default:return N()}}(X=wt||(wt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ia{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ni}static getOrCreateInstance(){return ni===null&&(ni=new ia),ni}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let ni=null;/**
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
 */function l_(){return new TextEncoder}/**
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
 */const u_=new wn([4294967295,4294967295],0);function Ul(n){const t=l_().encode(n),e=new gm;return e.update(t),new Uint8Array(e.digest())}function ql(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new wn([e,r],0),new wn([i,s],0)]}class sa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Yn(`Invalid padding: ${e}`);if(r<0)throw new Yn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Yn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Yn(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=wn.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(wn.fromNumber(r)));return i.compare(u_)===1&&(i=new wn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=Ul(t),[r,i]=ql(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new sa(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=Ul(t),[r,i]=ql(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,jr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ds(O.min(),i,new gt(Z),De(),z())}}class jr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jr(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class Nh{constructor(t,e){this.targetId=t,this.pe=e}}class bh{constructor(t,e,r=Gt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class jl{constructor(){this.ye=0,this.we=Kl(),this.Se=Gt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=z(),e=z(),r=z();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:N()}}),new jr(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=Kl()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class c_{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=De(),this.$e=Bl(),this.Ue=new gt(Z)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:N()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(io(a))if(s===0){const l=new S(a.path);this.ze(i,l,Vt.newNoDocument(l,O.min()))}else nt(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(t,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(e=ia.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,f,E){var _,y,k,Q,F,G;const Y={localCacheCount:f,existenceFilterCount:E.count},K=E.unchangedNames;return K&&(Y.bloomFilter={applied:h===0,hashCount:(_=K==null?void 0:K.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(Q=(k=(y=K==null?void 0:K.bits)===null||y===void 0?void 0:y.bitmap)===null||k===void 0?void 0:k.length)!==null&&Q!==void 0?Q:0,padding:(G=(F=K==null?void 0:K.bits)===null||F===void 0?void 0:F.padding)!==null&&G!==void 0?G:0},d&&(Y.bloomFilter.mightContain=d)),Y}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=an(s).toUint8Array()}catch(h){if(h instanceof oh)return kn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new sa(l,o,a)}catch(h){return kn(h instanceof Yn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,c)?0:2,nt:c}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&io(a.target)){const l=new S(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Vt.newNoDocument(l,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=z();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new ds(t,e,this.Ue,this.Ke,r);return this.Ke=De(),this.$e=Bl(),this.Ue=new gt(Z),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new jl,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new zt(Z),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||P("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new jl),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Bl(){return new gt(S.comparator)}function Kl(){return new gt(S.comparator)}const h_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),d_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),f_=(()=>({and:"AND",or:"OR"}))();class p_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lo(n,t){return n.useProto3Json||$r(t)?t:{value:t}}function bi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Oh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function g_(n,t){return bi(n,t.toTimestamp())}function re(n){return nt(!!n),O.fromTimestamp(function(e){const r=Ue(e);return new St(r.seconds,r.nanos)}(n))}function oa(n,t){return function(r){return new pt(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Mh(n){const t=pt.fromString(n);return nt(Uh(t)),t}function Oi(n,t){return oa(n.databaseId,t.path)}function ir(n,t){const e=Mh(t);if(e.get(1)!==n.databaseId.projectId)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new S(Lh(e))}function uo(n,t){return oa(n.databaseId,t)}function m_(n){const t=Mh(n);return t.length===4?pt.emptyPath():Lh(t)}function Er(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lh(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function zl(n,t,e){return{name:Oi(n,t),fields:e.value.mapValue.fields}}function __(n,t){return"found"in t?function(r,i){nt(!!i.found),i.found.name,i.found.updateTime;const s=ir(r,i.found.name),o=re(i.found.updateTime),a=i.found.createTime?re(i.found.createTime):O.min(),l=new Qt({mapValue:{fields:i.found.fields}});return Vt.newFoundDocument(s,o,a,l)}(n,t):"missing"in t?function(r,i){nt(!!i.missing),nt(!!i.readTime);const s=ir(r,i.missing),o=re(i.readTime);return Vt.newNoDocument(s,o)}(n,t):N()}function y_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:N()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(nt(c===void 0||typeof c=="string"),Gt.fromBase64String(c||"")):(nt(c===void 0||c instanceof Uint8Array),Gt.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:Dh(u.code);return new T(c,u.message||"")}(o);e=new bh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ir(n,r.document.name),s=re(r.document.updateTime),o=r.document.createTime?re(r.document.createTime):O.min(),a=new Qt({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];e=new hi(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ir(n,r.document),s=r.readTime?re(r.readTime):O.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new hi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ir(n,r.document),s=r.removedTargetIds||[];e=new hi([],s,i,null)}else{if(!("filter"in t))return N();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new a_(i,s),a=r.targetId;e=new Nh(a,o)}}return e}function xh(n,t){let e;if(t instanceof qr)e={update:zl(n,t.key,t.value)};else if(t instanceof na)e={delete:Oi(n,t.key)};else if(t instanceof Ge)e={update:zl(n,t.key,t.data),updateMask:S_(t.fieldMask)};else{if(!(t instanceof kh))return N();e={verify:Oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof vr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw N()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:g_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:N()}(n,t.precondition)),e}function v_(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?re(i.updateTime):re(s);return o.isEqual(O.min())&&(o=re(s)),new n_(o,i.transformResults||[])}(e,t))):[]}function T_(n,t){return{documents:[uo(n,t.path)]}}function E_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=uo(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=uo(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return $h(ue.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:mn(h.field),direction:A_(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=lo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),e}function I_(n){let t=m_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(h){const d=Fh(h);return d instanceof ue&&ch(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new er(_n(E.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,$r(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Vi(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Vi(f,d)}(e.endAt)),Km(t,i,o,s,a,"F",l,u)}function w_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Fh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=_n(e.unaryFilter.field);return Rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_n(e.unaryFilter.field);return Rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_n(e.unaryFilter.field);return Rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_n(e.unaryFilter.field);return Rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(n):n.fieldFilter!==void 0?function(e){return Rt.create(_n(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ue.create(e.compositeFilter.filters.map(r=>Fh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return N()}}(e.compositeFilter.op))}(n):N()}function A_(n){return h_[n]}function R_(n){return d_[n]}function P_(n){return f_[n]}function mn(n){return{fieldPath:n.canonicalString()}}function _n(n){return jt.fromServerFormat(n.fieldPath)}function $h(n){return n instanceof Rt?function(e){if(e.op==="=="){if(Dl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NAN"}};if(Vl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NAN"}};if(Vl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(e.field),op:R_(e.op),value:e.value}}}(n):n instanceof ue?function(e){const r=e.getFilters().map(i=>$h(i));return r.length===1?r[0]:{compositeFilter:{op:P_(e.op),filters:r}}}(n):N()}function S_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Uh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e,r,i,s=O.min(),o=O.min(),a=Gt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new xe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t){this.ct=t}}function k_(n){const t=I_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.sn=new D_}addToCollectionParentIndex(t,e){return this.sn.add(e),g.resolve()}getCollectionParents(t,e){return g.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return g.resolve()}deleteFieldIndex(t,e){return g.resolve()}getDocumentsMatchingTarget(t,e){return g.resolve(null)}getIndexType(t,e){return g.resolve(0)}getFieldIndexes(t,e){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,e){return g.resolve($e.min())}getMinOffsetFromCollectionGroup(t,e){return g.resolve($e.min())}updateCollectionGroup(t,e,r){return g.resolve()}updateIndexEntries(t,e){return g.resolve()}}class D_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new zt(pt.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new zt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new bn(0)}static On(){return new bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.changes=new $n(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?g.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class b_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&rr(r.mutation,i,ne.empty(),St.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const i=Ze();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Xn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Ze();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=De();const o=nr(),a=function(){return nr()}();return e.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ge)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),rr(c.mutation,u,c.mutation.getFieldMask(),St.now())):o.set(u.key,ne.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),e.forEach((u,c)=>{var h;return a.set(u,new b_(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=nr();let i=new gt((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let c=r.get(l)||ne.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Th();c.forEach(d=>{if(!s.has(d)){const f=Sh(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return S.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):g.resolve(Ze());let a=-1,l=s;return o.next(u=>g.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,z())).next(c=>({batchId:a,changes:vh(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new S(e)).next(r=>{let i=Xn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=Xn();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const l=function(c,h){return new Ur(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Vt.newInvalidDocument(u)))});let o=Xn();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&rr(u.mutation,l,ne.empty(),St.now()),us(e,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return g.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:re(i.createTime)}}(e)),g.resolve()}getNamedQuery(t,e){return g.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:k_(i.bundledQuery),readTime:re(i.readTime)}}(e)),g.resolve()}}/**
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
 */class L_{constructor(){this.overlays=new gt(S.comparator),this.cr=new Map}getOverlay(t,e){return g.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ze();return g.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),g.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),g.resolve()}getOverlaysForCollection(t,e,r){const i=Ze(),s=e.length+1,o=new S(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return g.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new gt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ze(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ze(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return g.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new o_(e,r));let s=this.cr.get(e);s===void 0&&(s=z(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.lr=new zt(kt.hr),this.Pr=new zt(kt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new kt(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new kt(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new S(new pt([])),r=new kt(e,t),i=new kt(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new S(new pt([])),r=new kt(e,t),i=new kt(e,t+1);let s=z();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new kt(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return S.comparator(t.key,e.key)||Z(t.mr,e.mr)}static Ir(t,e){return Z(t.mr,e.mr)||S.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new zt(kt.hr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new kt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,e){return g.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),i=new kt(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new zt(Z);return e.forEach(i=>{const s=new kt(i,0),o=new kt(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),g.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;S.isDocumentKey(s)||(s=s.child(""));const o=new kt(new S(s),0);let a=new zt(Z);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),g.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return g.forEach(e.mutations,i=>{const s=new kt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new kt(e,0),i=this.pr.firstAfterOrEqual(r);return g.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t){this.Dr=t,this.docs=function(){return new gt(S.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return g.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let r=De();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=De();const o=e.path,a=new S(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Sm(Pm(c),r)<=0||(i.has(c.key)||us(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,e,r,i){N()}vr(t,e){return g.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new $_(this)}getSize(t){return g.resolve(this.size)}}class $_ extends N_{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),g.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.persistence=t,this.Cr=new $n(e=>Jo(e),Zo),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new aa,this.targetCount=0,this.Or=bn.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),g.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new bn(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,g.resolve()}updateTargetData(t,e){return this.Ln(e),g.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return g.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),g.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),g.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return g.resolve(r)}containsKey(t,e){return g.resolve(this.Mr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,e){this.Nr={},this.overlays={},this.Br=new Ho(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new U_(this),this.indexManager=new V_,this.remoteDocumentCache=function(i){return new F_(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new C_(e),this.Qr=new M_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new L_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new x_(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){P("MemoryPersistence","Starting transaction:",t);const i=new j_(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return g.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class j_ extends km{constructor(t){super(),this.currentSequenceNumber=t}}class la{constructor(t){this.persistence=t,this.Wr=new aa,this.Gr=null}static zr(t){return new la(t)}get jr(){if(this.Gr)return this.Gr;throw N()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),g.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),g.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.jr,r=>{const i=S.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,O.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return g.or([()=>g.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Li=r,this.ki=i}static qi(t,e){let r=z(),i=z();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ua(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(Ml(e))return g.resolve(null);let r=Ve(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=oo(e,null,"F"),r=Ve(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=z(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(e,a);return this.zi(e,u,o,l.readTime)?this.$i(t,oo(e,null,"F")):this.ji(t,u,e,l)}))})))}Ui(t,e,r,i){return Ml(e)||i.isEqual(O.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(Rl()<=rn.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ao(e)),this.ji(t,o,e,Rm(i,-1)))})}Gi(t,e){let r=new zt(_h(t));return e.forEach((i,s)=>{us(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return Rl()<=rn.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",ao(e)),this.Ki.getDocumentsMatchingQuery(t,e,$e.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new gt(Z),this.Yi=new $n(s=>Jo(s),Zo),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new O_(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function z_(n,t,e,r){return new K_(n,t,e,r)}async function qh(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return e.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function G_(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(E=>{f=f.next(()=>c.getEntry(l,E)).next(_=>{const y=u.docVersions.get(E);nt(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function jh(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function W_(n,t){const e=j(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Gt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,y,k){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,c)&&a.push(e.kr.updateTargetData(s,f))});let l=De(),u=z();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(H_(s,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(O.min())){const c=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(e.Ji=i,s))}function H_(n,t,e){let r=z(),i=z();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=De();return e.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(O.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function Q_(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function X_(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new xe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function co(n,t,e){const r=j(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fr(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Gl(n,t,e){const r=j(n);let i=O.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=j(l),d=h.Yi.get(c);return d!==void 0?g.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,Ve(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:O.min(),e?s:z())).next(a=>(Y_(r,zm(t),a),{documents:a,ss:s})))}function Y_(n,t,e){let r=n.Zi.get(t)||O.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}class Wl{constructor(){this.activeTargetIds=Ym()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class J_{constructor(){this.Hs=new Wl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Wl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ri=null;function Ls(){return ri===null?ri=function(){return 268435456+Math.round(2147483648*Math.random())}():ri++,"0x"+ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class ny extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.To=r+"://"+e.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(e,r,i,s,o){const a=Ls(),l=this.Vo(e,r);P("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={};return this.mo(u,s,o),this.fo(e,l,u,i).then(c=>(P("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw kn("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}po(e,r,i,s,o,a){return this.Ro(e,r,i,s,o)}mo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}Vo(e,r){const i=ty[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}fo(t,e,r,i){const s=Ls();return new Promise((o,a)=>{const l=new pm;l.setWithCredentials(!0),l.listenOnce(hm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ms.NO_ERROR:const c=l.getResponseJson();P(Ut,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ms.TIMEOUT:P(Ut,`RPC '${t}' ${s} timed out`),a(new T(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const h=l.getStatus();if(P(Ut,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(y){const k=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(k)>=0?k:p.UNKNOWN}(f.status);a(new T(E,f.message))}else a(new T(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(p.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{P(Ut,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);P(Ut,`RPC '${t}' ${s} sending request:`,i),l.send(e,"POST",u,r,15)})}yo(t,e,r){const i=Ls(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=um(),a=cm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new fm({})),this.mo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const c=s.join("");P(Ut,`Creating RPC '${t}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const E=new ey({so:y=>{f?P(Ut,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(d||(P(Ut,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),P(Ut,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),_=(y,k,Q)=>{y.listen(k,F=>{try{Q(F)}catch(G){setTimeout(()=>{throw G},0)}})};return _(h,Zr.EventType.OPEN,()=>{f||P(Ut,`RPC '${t}' stream ${i} transport opened.`)}),_(h,Zr.EventType.CLOSE,()=>{f||(f=!0,P(Ut,`RPC '${t}' stream ${i} transport closed`),E.Po())}),_(h,Zr.EventType.ERROR,y=>{f||(f=!0,kn(Ut,`RPC '${t}' stream ${i} transport errored:`,y),E.Po(new T(p.UNAVAILABLE,"The operation could not be completed")))}),_(h,Zr.EventType.MESSAGE,y=>{var k;if(!f){const Q=y.data[0];nt(!!Q);const F=Q,G=F.error||((k=F[0])===null||k===void 0?void 0:k.error);if(G){P(Ut,`RPC '${t}' stream ${i} received error:`,G);const Y=G.status;let K=function(Ot){const J=wt[Ot];if(J!==void 0)return Dh(J)}(Y),at=G.message;K===void 0&&(K=p.INTERNAL,at="Unknown error status: "+Y+" with message "+G.message),f=!0,E.Po(new T(K,at)),h.close()}else P(Ut,`RPC '${t}' stream ${i} received:`,Q),E.Io(Q)}}),_(a,dm.STAT_EVENT,y=>{y.stat===wl.PROXY?P(Ut,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===wl.NOPROXY&&P(Ut,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){return new p_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const e=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,r,i,s,o,a,l){this.ii=t,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new ca(t,e)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(t,e){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,t!==4?this.Qo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(ke(e.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Yo(){}auth(){this.state=1;const t=this.Zo(this.Lo),e=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===e&&this.Xo(r,i)},r=>{t(()=>{const i=new T(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(t,e){const r=this.Zo(this.Lo);this.stream=this.t_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(t){return P("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Zo(t){return e=>{this.ii.enqueueAndForget(()=>this.Lo===t?e():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ry extends Bh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}t_(t,e){return this.connection.yo("Listen",t,e)}onMessage(t){this.Qo.reset();const e=y_(this.serializer,t),r=function(s){if(!("targetChange"in s))return O.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?O.min():o.readTime?re(o.readTime):O.min()}(t);return this.listener.n_(e,r)}r_(t){const e={};e.database=Er(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=io(l)?{documents:T_(s,l)}:{query:E_(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Oh(s,o.resumeToken);const u=lo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(O.min())>0){a.readTime=bi(s,o.snapshotVersion.toTimestamp());const u=lo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=w_(this.serializer,t);r&&(e.labels=r),this.jo(e)}i_(t){const e={};e.database=Er(this.serializer),e.removeTarget=t,this.jo(e)}}class iy extends Bh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if(nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.s_){this.Qo.reset();const e=v_(t.writeResults,t.commitTime),r=re(t.commitTime);return this.listener.a_(r,e)}return nt(!t.writeResults||t.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const t={};t.database=Er(this.serializer),this.jo(t)}__(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>xh(this.serializer,r))};this.jo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(t,e,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(p.UNKNOWN,i.toString())})}po(t,e,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(p.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class oy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(t){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.A_("Offline")))}set(t){this.m_(),this.I_=0,t==="Online"&&(this.E_=!1),this.A_(t)}A_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}R_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(ke(e),this.E_=!1):P("OnlineStateTracker",e)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{dn(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=j(l);u.p_.add(4),await Br(u),u.S_.set("Unknown"),u.p_.delete(4),await ps(u)}(this))})}),this.S_=new oy(r,i)}}async function ps(n){if(dn(n))for(const t of n.y_)await t(!0)}async function Br(n){for(const t of n.y_)await t(!1)}function Kh(n,t){const e=j(n);e.g_.has(t.targetId)||(e.g_.set(t.targetId,t),fa(e)?da(e):Un(e).$o()&&ha(e,t))}function zh(n,t){const e=j(n),r=Un(e);e.g_.delete(t),r.$o()&&Gh(e,t),e.g_.size===0&&(r.$o()?r.Go():dn(e)&&e.S_.set("Unknown"))}function ha(n,t){if(n.b_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Un(n).r_(t)}function Gh(n,t){n.b_.Be(t),Un(n).i_(t)}function da(n){n.b_=new c_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.g_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.S_.d_()}function fa(n){return dn(n)&&!Un(n).Ko()&&n.g_.size>0}function dn(n){return j(n).p_.size===0}function Wh(n){n.b_=void 0}async function ly(n){n.g_.forEach((t,e)=>{ha(n,t)})}async function uy(n,t){Wh(n),fa(n)?(n.S_.V_(t),da(n)):n.S_.set("Unknown")}async function cy(n,t,e){if(n.S_.set("Online"),t instanceof bh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,t)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mi(n,r)}else if(t instanceof hi?n.b_.We(t):t instanceof Nh?n.b_.Ze(t):n.b_.je(t),!e.isEqual(O.min()))try{const r=await jh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.g_.get(u);c&&s.g_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.g_.get(l);if(!c)return;s.g_.set(l,c.withResumeToken(Gt.EMPTY_BYTE_STRING,c.snapshotVersion)),Gh(s,l);const h=new xe(c.target,l,u,c.sequenceNumber);ha(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Mi(n,r)}}async function Mi(n,t,e){if(!Fr(t))throw t;n.p_.add(1),await Br(n),n.S_.set("Offline"),e||(e=()=>jh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await e(),n.p_.delete(1),await ps(n)})}function Hh(n,t){return t().catch(e=>Mi(n,e,t))}async function gs(n){const t=j(n),e=qe(t);let r=t.f_.length>0?t.f_[t.f_.length-1].batchId:-1;for(;hy(t);)try{const i=await Q_(t.localStore,r);if(i===null){t.f_.length===0&&e.Go();break}r=i.batchId,dy(t,i)}catch(i){await Mi(t,i)}Qh(t)&&Xh(t)}function hy(n){return dn(n)&&n.f_.length<10}function dy(n,t){n.f_.push(t);const e=qe(n);e.$o()&&e.o_&&e.__(t.mutations)}function Qh(n){return dn(n)&&!qe(n).Ko()&&n.f_.length>0}function Xh(n){qe(n).start()}async function fy(n){qe(n).c_()}async function py(n){const t=qe(n);for(const e of n.f_)t.__(e.mutations)}async function gy(n,t,e){const r=n.f_.shift(),i=ra.from(r,t,e);await Hh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await gs(n)}async function my(n,t){t&&qe(n).o_&&await async function(r,i){if(function(o){return Vh(o)&&o!==p.ABORTED}(i.code)){const s=r.f_.shift();qe(r).Wo(),await Hh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gs(r)}}(n,t),Qh(n)&&Xh(n)}async function Ql(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=dn(e);e.p_.add(3),await Br(e),r&&e.S_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.p_.delete(3),await ps(e)}async function _y(n,t){const e=j(n);t?(e.p_.delete(2),await ps(e)):t||(e.p_.add(2),await Br(e),e.S_.set("Unknown"))}function Un(n){return n.D_||(n.D_=function(e,r,i){const s=j(e);return s.h_(),new ry(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:ly.bind(null,n),uo:uy.bind(null,n),n_:cy.bind(null,n)}),n.y_.push(async t=>{t?(n.D_.Wo(),fa(n)?da(n):n.S_.set("Unknown")):(await n.D_.stop(),Wh(n))})),n.D_}function qe(n){return n.v_||(n.v_=function(e,r,i){const s=j(e);return s.h_(),new iy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:fy.bind(null,n),uo:my.bind(null,n),u_:py.bind(null,n),a_:gy.bind(null,n)}),n.y_.push(async t=>{t?(n.v_.Wo(),await gs(n)):(await n.v_.stop(),n.f_.length>0&&(P("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new pa(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,t){if(ke("AsyncQueue",`${t}: ${n}`),Fr(n))return new T(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||S.comparator(e.key,r.key):(e,r)=>S.comparator(e.key,r.key),this.keyedMap=Xn(),this.sortedSet=new gt(this.comparator)}static emptySet(t){return new Rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Rn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.C_=new gt(S.comparator)}track(t){const e=t.doc.key,r=this.C_.get(e);r?t.type!==0&&r.type===3?this.C_=this.C_.insert(e,t):t.type===3&&r.type!==1?this.C_=this.C_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.C_=this.C_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.C_=this.C_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.C_=this.C_.remove(e):t.type===1&&r.type===2?this.C_=this.C_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.C_=this.C_.insert(e,{type:2,doc:t.doc}):N():this.C_=this.C_.insert(e,t)}F_(){const t=[];return this.C_.inorderTraversal((e,r)=>{t.push(r)}),t}}class On{constructor(t,e,r,i,s,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new On(t,e,Rn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ls(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.M_=void 0,this.listeners=[]}}class vy{constructor(){this.queries=new $n(t=>mh(t),ls),this.onlineState="Unknown",this.x_=new Set}}async function Yh(n,t){const e=j(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new yy),i)try{s.M_=await e.onListen(r)}catch(o){const a=ga(o,`Initialization of query '${ao(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.O_(e.onlineState),s.M_&&t.N_(s.M_)&&ma(e)}async function Jh(n,t){const e=j(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function Ty(n,t){const e=j(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&ma(e)}function Ey(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function ma(n){n.x_.forEach(t=>{t.next()})}class Zh{constructor(t,e,r){this.query=t,this.B_=e,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new On(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.L_?this.q_(t)&&(this.B_.next(t),e=!0):this.Q_(t,this.onlineState)&&(this.K_(t),e=!0),this.k_=t,e}onError(t){this.B_.error(t)}O_(t){this.onlineState=t;let e=!1;return this.k_&&!this.L_&&this.Q_(this.k_,t)&&(this.K_(this.k_),e=!0),e}Q_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.U_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}q_(t){if(t.docChanges.length>0)return!0;const e=this.k_&&this.k_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}K_(t){t=On.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.L_=!0,this.B_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.key=t}}class ed{constructor(t){this.key=t}}class Iy{constructor(t,e){this.query=t,this.Z_=e,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=z(),this.mutatedKeys=z(),this.ta=_h(t),this.na=new Rn(this.ta)}get ra(){return this.Z_}ia(t,e){const r=e?e.sa:new Xl,i=e?e.na:this.na;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=us(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?E!==_&&(r.track({type:3,doc:f}),y=!0):this.oa(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.ta(f,l)>0||u&&this.ta(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.na;this.na=t.na,this.mutatedKeys=t.mutatedKeys;const s=t.sa.F_();s.sort((u,c)=>function(d,f){const E=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return E(d)-E(f)}(u.type,c.type)||this.ta(u.doc,c.doc)),this._a(r);const o=e?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new On(this.query,t.na,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new Xl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(t){return!this.Z_.has(t)&&!!this.na.has(t)&&!this.na.get(t).hasLocalMutations}_a(t){t&&(t.addedDocuments.forEach(e=>this.Z_=this.Z_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Z_=this.Z_.delete(e)),this.current=t.current)}aa(){if(!this.current)return[];const t=this.ea;this.ea=z(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const e=[];return t.forEach(r=>{this.ea.has(r)||e.push(new ed(r))}),this.ea.forEach(r=>{t.has(r)||e.push(new td(r))}),e}la(t){this.Z_=t.ss,this.ea=z();const e=this.ia(t.documents);return this.applyChanges(e,!0)}ha(){return On.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class wy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ay{constructor(t){this.key=t,this.Pa=!1}}class Ry{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new $n(a=>mh(a),ls),this.Ea=new Map,this.da=new Set,this.Aa=new gt(S.comparator),this.Ra=new Map,this.Va=new aa,this.ma={},this.fa=new Map,this.ga=bn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function Py(n,t){const e=Ly(n);let r,i;const s=e.Ta.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await X_(e.localStore,Ve(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Sy(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Kh(e.remoteStore,o)}return i}async function Sy(n,t,e,r,i){n.ya=(h,d,f)=>async function(_,y,k,Q){let F=y.view.ia(k);F.zi&&(F=await Gl(_.localStore,y.query,!1).then(({documents:K})=>y.view.ia(K,F)));const G=Q&&Q.targetChanges.get(y.targetId),Y=y.view.applyChanges(F,_.isPrimaryClient,G);return Jl(_,y.targetId,Y.ua),Y.snapshot}(n,h,d,f);const s=await Gl(n.localStore,t,!0),o=new Iy(t,s.ss),a=o.ia(s.documents),l=jr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);Jl(n,e,u.ua);const c=new wy(t,e,o);return n.Ta.set(t,c),n.Ea.has(e)?n.Ea.get(e).push(t):n.Ea.set(e,[t]),u.snapshot}async function Cy(n,t){const e=j(n),r=e.Ta.get(t),i=e.Ea.get(r.targetId);if(i.length>1)return e.Ea.set(r.targetId,i.filter(s=>!ls(s,t))),void e.Ta.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await co(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),zh(e.remoteStore,r.targetId),ho(e,r.targetId)}).catch(xr)):(ho(e,r.targetId),await co(e.localStore,r.targetId,!0))}async function ky(n,t,e){const r=xy(n);try{const i=await function(o,a){const l=j(o),u=St.now(),c=a.reduce((f,E)=>f.add(E.key),z());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=De(),_=z();return l.Xi.getEntries(f,c).next(y=>{E=y,E.forEach((k,Q)=>{Q.isValidDocument()||(_=_.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,E)).next(y=>{h=y;const k=[];for(const Q of a){const F=i_(Q,h.get(Q.key).overlayedDocument);F!=null&&k.push(new Ge(Q.key,F,ah(F.value.mapValue),te.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,k,a)}).next(y=>{d=y;const k=y.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,y.batchId,k)})}).then(()=>({batchId:d.batchId,changes:vh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ma[o.currentUser.toKey()];u||(u=new gt(Z)),u=u.insert(a,l),o.ma[o.currentUser.toKey()]=u}(r,i.batchId,e),await Kr(r,i.changes),await gs(r.remoteStore)}catch(i){const s=ga(i,"Failed to persist write");e.reject(s)}}async function nd(n,t){const e=j(n);try{const r=await W_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Ra.get(s);o&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?nt(o.Pa):i.removedDocuments.size>0&&(nt(o.Pa),o.Pa=!1))}),await Kr(e,r,t)}catch(r){await xr(r)}}function Yl(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.O_(a)&&(u=!0)}),u&&ma(l)}(r.eventManager,t),i.length&&r.Ia.n_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vy(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ra.get(t),s=i&&i.key;if(s){let o=new gt(S.comparator);o=o.insert(s,Vt.newNoDocument(s,O.min()));const a=z().add(s),l=new ds(O.min(),new Map,new gt(Z),o,a);await nd(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(t),_a(r)}else await co(r.localStore,t,!1).then(()=>ho(r,t,e)).catch(xr)}async function Dy(n,t){const e=j(n),r=t.batch.batchId;try{const i=await G_(e.localStore,t);id(e,r,null),rd(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(e,i)}catch(i){await xr(i)}}async function Ny(n,t,e){const r=j(n);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(nt(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);id(r,t,e),rd(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Kr(r,i)}catch(i){await xr(i)}}function rd(n,t){(n.fa.get(t)||[]).forEach(e=>{e.resolve()}),n.fa.delete(t)}function id(n,t,e){const r=j(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.ma[r.currentUser.toKey()]=i}}function ho(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ea.get(t))n.Ta.delete(r),e&&n.Ia.wa(r,e);n.Ea.delete(t),n.isPrimaryClient&&n.Va.Ar(t).forEach(r=>{n.Va.containsKey(r)||sd(n,r)})}function sd(n,t){n.da.delete(t.path.canonicalString());const e=n.Aa.get(t);e!==null&&(zh(n.remoteStore,e),n.Aa=n.Aa.remove(t),n.Ra.delete(e),_a(n))}function Jl(n,t,e){for(const r of e)r instanceof td?(n.Va.addReference(r.key,t),by(n,r)):r instanceof ed?(P("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,t),n.Va.containsKey(r.key)||sd(n,r.key)):N()}function by(n,t){const e=t.key,r=e.path.canonicalString();n.Aa.get(e)||n.da.has(r)||(P("SyncEngine","New document in limbo: "+e),n.da.add(r),_a(n))}function _a(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const t=n.da.values().next().value;n.da.delete(t);const e=new S(pt.fromString(t)),r=n.ga.next();n.Ra.set(r,new Ay(e)),n.Aa=n.Aa.insert(e,r),Kh(n.remoteStore,new xe(Ve(ta(e.path)),r,"TargetPurposeLimboResolution",Ho.ae))}}async function Kr(n,t,e){const r=j(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ua.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,u){const c=j(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Li,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Fr(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.Ji.get(d),E=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(E);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function Oy(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){P("SyncEngine","User change. New user:",t.toKey());const r=await qh(e.localStore,t);e.currentUser=t,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new T(p.CANCELLED,o))})}),s.fa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Kr(e,r.ts)}}function My(n,t){const e=j(n),r=e.Ra.get(t);if(r&&r.Pa)return z().add(r.key);{let i=z();const s=e.Ea.get(t);if(!s)return i;for(const o of s){const a=e.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function Ly(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=nd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=My.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vy.bind(null,t),t.Ia.n_=Ty.bind(null,t.eventManager),t.Ia.wa=Ey.bind(null,t.eventManager),t}function xy(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ny.bind(null,t),t}class Zl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return z_(this.persistence,new B_,t.initialUser,this.serializer)}createPersistence(t){return new q_(la.zr,this.serializer)}createSharedClientState(t){return new J_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Oy.bind(null,this.syncEngine),await _y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new vy}()}createDatastore(t){const e=fs(t.databaseInfo.databaseId),r=function(s){return new ny(s)}(t.databaseInfo);return function(s,o,a,l){return new sy(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new ay(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Yl(this.syncEngine,e,0),function(){return Hl.v()?new Hl:new Z_}())}createSyncEngine(t,e){return function(i,s,o,a,l,u,c){const h=new Ry(i,s,o,a,l,u);return c&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=j(e);P("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Br(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class od{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Da(this.observer.next,t)}error(t){this.observer.error?this.Da(this.observer.error,t):ke("Uncaught Error in snapshot listener:",t.toString())}va(){this.muted=!0}Da(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=j(i),a=Er(o.serializer)+"/documents",l={documents:s.map(d=>Oi(o.serializer,d))},u=await o.po("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=__(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());nt(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new na(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=S.fromPath(r);this.mutations.push(new kh(i,this.precondition(i)))}),await async function(r,i){const s=j(r),o=Er(s.serializer)+"/documents",a={writes:i.map(l=>xh(s.serializer,l))};await s.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw N();e=O.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new T(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(O.min())?te.exists(!1):te.updateTime(e):te.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(O.min()))throw new T(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return te.updateTime(e)}return te.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.ka=r.maxAttempts,this.Qo=new ca(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const t=new $y(this.datastore),e=this.Qa(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ka(i)}))}).catch(r=>{this.Ka(r)})})}Qa(t){try{const e=this.updateFunction(t);return!$r(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ka(t){this.ka>0&&this.$a(t)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(t)}$a(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Vh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=qt.UNAUTHENTICATED,this.clientId=ih.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ga(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Fs(n,t){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function tu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await By(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Ql(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ql(t.remoteStore,s)),n._onlineComponents=t}function jy(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function By(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!jy(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await Fs(n,new Zl)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Fs(n,new Zl);return n._offlineComponents}async function ya(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await tu(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await tu(n,new Fy))),n._onlineComponents}function Ky(n){return ya(n).then(t=>t.syncEngine)}function zy(n){return ya(n).then(t=>t.datastore)}async function ad(n){const t=await ya(n),e=t.eventManager;return e.onListen=Py.bind(null,t.syncEngine),e.onUnlisten=Cy.bind(null,t.syncEngine),e}function Gy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new od({next:d=>{o.enqueueAndForget(()=>Jh(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Zh(ta(a.path),c,{includeMetadataChanges:!0,U_:!0});return Yh(s,h)}(await ad(n),n.asyncQueue,t,e,r)),r.promise}function Wy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new od({next:d=>{o.enqueueAndForget(()=>Jh(s,h)),d.fromCache&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Zh(a,c,{includeMetadataChanges:!0,U_:!0});return Yh(s,h)}(await ad(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function ld(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,t,e){if(!e)throw new T(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hy(n,t,e,r){if(t===!0&&r===!0)throw new T(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function nu(n){if(!S.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ru(n){if(S.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":N()}function je(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new T(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ms(n);throw new T(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new T(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ld((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _s{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mm;switch(r.type){case"firstParty":return new Tm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=eu.get(e);r&&(P("ComponentProvider","Removing Datastore"),eu.delete(e),r.terminate())}(this),Promise.resolve()}}function Qy(n,t,e,r={}){var i;const s=(n=je(n,_s))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qt.MOCK_USER;else{a=jd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qt(u)}n._authCredentials=new _m(new rh(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qn(this.firestore,t,this._query)}}class Zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zt(this.firestore,t,this._key)}}class Fe extends qn{constructor(t,e,r){super(t,e,ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zt(this.firestore,null,new S(t))}withConverter(t){return new Fe(this.firestore,t,this._path)}}function cd(n,t,...e){if(n=Dt(n),ud("collection","path",t),n instanceof _s){const r=pt.fromString(t,...e);return ru(r),new Fe(n,null,r)}{if(!(n instanceof Zt||n instanceof Fe))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return ru(r),new Fe(n.firestore,null,r)}}function Li(n,t,...e){if(n=Dt(n),arguments.length===1&&(t=ih.V()),ud("doc","path",t),n instanceof _s){const r=pt.fromString(t,...e);return nu(r),new Zt(n,null,new S(r))}{if(!(n instanceof Zt||n instanceof Fe))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return nu(r),new Zt(n.firestore,n instanceof Fe?n.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new ca(this,"async_queue_retry"),this.Za=()=>{const e=xs();e&&P("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Qo.Oo()};const t=xs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const e=xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const e=new me;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!Fr(t))throw t;P("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const e=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=e,e}enqueueAfterDelay(t,e,r){this.Xa(),this.Ya.indexOf(t)>-1&&(e=0);const i=pa.createAndSchedule(this,t,e,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&N()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const e of this.za)if(e.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.za)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const e=this.za.indexOf(t);this.za.splice(e,1)}}class zr extends _s{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Xy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hd(this),this._firestoreClient.terminate()}}function tn(n,t){const e=typeof n=="object"?n:_u(),r=typeof n=="string"?n:t||"(default)",i=go(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qd("firestore");s&&Qy(i,...s)}return i}function ys(n){return n._firestoreClient||hd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function hd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,l,u,c){return new Nm(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ld(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new qy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new un(Gt.fromBase64String(t))}catch(e){throw new T(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new un(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new T(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=/^__.*__$/;class Jy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new qr(t,this.data,e,this.fieldTransforms)}}class dd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function fd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class Ea{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(t){return new Ea(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.uu({path:r,lu:!1});return i.hu(t),i}Pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(t){return this.uu({path:void 0,lu:!0})}Tu(t){return xi(t,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_u(){if(this.path)for(let t=0;t<this.path.length;t++)this.hu(this.path.get(t))}hu(t){if(t.length===0)throw this.Tu("Document fields must not be empty");if(fd(this.au)&&Yy.test(t))throw this.Tu('Document fields cannot begin and end with "__"')}}class Zy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||fs(t)}Au(t,e,r,i=!1){return new Ea({au:t,methodName:e,du:r,path:jt.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ia(n){const t=n._freezeSettings(),e=fs(n._databaseId);return new Zy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function pd(n,t,e,r,i,s={}){const o=n.Au(s.merge||s.mergeFields?2:0,t,e,i);wa("Data must be an object, but it was:",o,r);const a=gd(r,o);let l,u;if(s.merge)l=new ne(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=fo(t,h,e);if(!o.contains(d))throw new T(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_d(c,d)||c.push(d)}l=new ne(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Jy(new Qt(a),l,u)}class Ts extends va{_toFieldTransform(t){if(t.au!==2)throw t.au===1?t.Tu(`${this._methodName}() can only appear at the top level of your update data`):t.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ts}}function tv(n,t,e,r){const i=n.Au(1,t,e);wa("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();hn(r,(l,u)=>{const c=Aa(t,l,e);u=Dt(u);const h=i.Pu(c);if(u instanceof Ts)s.push(c);else{const d=Gr(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ne(s);return new dd(o,a,i.fieldTransforms)}function ev(n,t,e,r,i,s){const o=n.Au(1,t,e),a=[fo(t,r,e)],l=[i];if(s.length%2!=0)throw new T(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(fo(t,s[d])),l.push(s[d+1]);const u=[],c=Qt.empty();for(let d=a.length-1;d>=0;--d)if(!_d(u,a[d])){const f=a[d];let E=l[d];E=Dt(E);const _=o.Pu(f);if(E instanceof Ts)u.push(f);else{const y=Gr(E,_);y!=null&&(u.push(f),c.set(f,y))}}const h=new ne(u);return new dd(c,h,o.fieldTransforms)}function nv(n,t,e,r=!1){return Gr(e,n.Au(r?4:3,t))}function Gr(n,t){if(md(n=Dt(n)))return wa("Unsupported field value:",t,n),gd(n,t);if(n instanceof va)return function(r,i){if(!fd(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.lu&&t.au!==4)throw t.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Gr(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=St.fromDate(r);return{timestampValue:bi(i.serializer,s)}}if(r instanceof St){const s=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bi(i.serializer,s)}}if(r instanceof Ta)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:Oh(i.serializer,r._byteString)};if(r instanceof Zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:oa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${ms(r)}`)}(n,t)}function gd(n,t){const e={};return sh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hn(n,(r,i)=>{const s=Gr(i,t.cu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof Ta||n instanceof un||n instanceof Zt||n instanceof va)}function wa(n,t,e){if(!md(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ms(e);throw r==="an object"?t.Tu(n+" a custom object"):t.Tu(n+" "+r)}}function fo(n,t,e){if((t=Dt(t))instanceof vs)return t._internalPath;if(typeof t=="string")return Aa(n,t);throw xi("Field path arguments must be of type string or ",n,!1,void 0,e)}const rv=new RegExp("[~\\*/\\[\\]]");function Aa(n,t,e){if(t.search(rv)>=0)throw xi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new vs(...t.split("."))._internalPath}catch{throw xi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function xi(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new T(p.INVALID_ARGUMENT,a+n+l)}function _d(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class iv extends Fi{data(){return super.data()}}function yd(n,t){return typeof t=="string"?Aa(n,t):t instanceof vs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ra{}class ov extends Ra{}function vd(n,t,...e){let r=[];t instanceof Ra&&r.push(t),r=r.concat(e),function(s){const o=s.filter(l=>l instanceof Sa).length,a=s.filter(l=>l instanceof Pa).length;if(o>1||o>0&&a>0)throw new T(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Pa extends ov{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Pa(t,e,r)}_apply(t){const e=this._parse(t);return Td(t._query,e),new qn(t.firestore,t.converter,so(t._query,e))}_parse(t){const e=Ia(t.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ou(h,c);const f=[];for(const E of h)f.push(su(l,s,E));d={arrayValue:{values:f}}}else d=su(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ou(h,c),d=nv(a,o,h,c==="in"||c==="not-in");return Rt.create(u,c,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Sa extends Ra{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Sa(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ue.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Td(o,l),o=so(o,l)}(t._query,e),new qn(t.firestore,t.converter,so(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function su(n,t,e){if(typeof(e=Dt(e))=="string"){if(e==="")throw new T(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gh(t)&&e.indexOf("/")!==-1)throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(pt.fromString(e));if(!S.isDocumentKey(r))throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kl(n,new S(r))}if(e instanceof Zt)return kl(n,e._key);throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ms(e)}.`)}function ou(n,t){if(!Array.isArray(n)||n.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Td(n,t){if(t.isInequality()){const r=ea(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new T(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ph(n);s!==null&&av(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function av(n,t,e){if(!e.isEqual(t))throw new T(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}class Ed{convertValue(t,e="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(an(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw N()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Ta(At(t.latitude),At(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Xo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(mr(t));default:return null}}convertTimestamp(t){const e=Ue(t);return new St(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=pt.fromString(t);nt(Uh(r));const i=new _r(r.get(1),r.get(3)),s=new S(r.popFirst(5));return i.isEqual(e)||ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class lv extends Ed{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ca extends Fi{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(yd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class di extends Ca{data(t={}){return super.data(t)}}class uv{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new di(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new di(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new di(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:cv(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function cv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){n=je(n,Zt);const t=je(n.firestore,zr);return Gy(ys(t),n._key).then(e=>pv(t,n,e))}class ka extends Ed{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}function wd(n){n=je(n,qn);const t=je(n.firestore,zr),e=ys(t),r=new ka(t);return sv(n._query),Wy(e,n._query).then(i=>new uv(t,r,n,i))}function dv(n,t,e){n=je(n,Zt);const r=je(n.firestore,zr),i=Id(n.converter,t,e);return fv(r,[pd(Ia(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,te.none())])}function fv(n,t){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>ky(await Ky(r),i,s)),s.promise}(ys(n),t)}function pv(n,t,e){const r=e.docs.get(t._key),i=new ka(n);return new Ca(n,i,t._key,r,new vn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const gv={maxAttempts:5};function Wn(n,t){if((n=Dt(n)).firestore!==t)throw new T(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mv extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Ia(e)}get(e){const r=Wn(e,this._firestore),i=new lv(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return N();const o=s[0];if(o.isFoundDocument())return new Fi(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Fi(this._firestore,i,r._key,null,r.converter);throw N()})}set(e,r,i){const s=Wn(e,this._firestore),o=Id(s.converter,r,i),a=pd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=Wn(e,this._firestore);let a;return a=typeof(r=Dt(r))=="string"||r instanceof vs?ev(this._dataReader,"Transaction.update",o._key,r,i,s):tv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Wn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Wn(t,this._firestore),r=new ka(this._firestore);return super.get(t).then(i=>new Ca(this._firestore,r,e._key,i._document,new vn(!1,!1),e.converter))}}function _v(n,t,e){n=je(n,zr);const r=Object.assign(Object.assign({},gv),e);return function(s){if(s.maxAttempts<1)throw new T(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new me;return s.asyncQueue.enqueueAndForget(async()=>{const u=await zy(s);new Uy(s.asyncQueue,u,a,o,l).run()}),l.promise}(ys(n),i=>t(new mv(n,i)),r)}(function(t,e=!0){(function(i){Fn=i})(Mn),$s(new Us("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zr(new ym(r.getProvider("auth-internal")),new Im(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),mi(Al,"4.0.0",t),mi(Al,"4.0.0","esm2017")})();const yv=async()=>{zd();const n=await vv(),t=await Ev();return{settings:n,supertags:t}},vv=async()=>{var n;try{const{currentUser:t}=Be();if(t)return(n=(await hv(Li(tn(),"users",t.uid))).data())==null?void 0:n.preferences}catch(t){console.warn("Failed to get user document:",t);return}},Tv=async n=>{try{const{currentUser:t}=Be();t&&await dv(Li(tn(),"users",t.uid),n,{merge:!0})}catch(t){console.warn("Failed to save user document:",t)}},Ev=async()=>{try{const{currentUser:n}=Be();if(n){const t=await wd(vd(cd(tn(),`users/${n.uid}/supertags`))),e=[];return t.forEach(r=>{const i=r.data();e.push(Bd(r.id,i.description,Object.entries(i.tags).map(s=>Kd(s[1],s[0]))))}),e}}catch(n){console.warn("Failed to get user document:",n);return}},Iv=async n=>{try{const{currentUser:t}=Be();t&&await _v(tn(),async e=>{(await wd(vd(cd(tn(),`users/${t.uid}/supertags`)))).forEach(async i=>e.delete(Li(tn(),`users/${t.uid}/supertags/${i.id}`))),n.map(i=>e.set(Li(tn(),`users/${t.uid}/supertags`,i.name),{description:i.description,tags:Object.fromEntries(i.tags.map(s=>[s.name,s.modifier]))}))})}catch(t){console.warn("Failed to save user document:",t)}},wv=async(n,t)=>{Gd(),await Tv(n),await Iv(t)},Av=()=>{const n=Wd(!1);return Be().onAuthStateChanged(t=>{n.set(t!==null)}),n},Rv=Av();const{document:au}=Pd;function lu(n,t,e){const r=n.slice();return r[26]=t[e],r}function Pv(n){let t;return{c(){t=Xt("Account")},l(e){t=Yt(e,"Account")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function Sv(n){let t;return{c(){t=Xt("Supertags")},l(e){t=Yt(e,"Supertags")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function uu(n){let t,e=`You don't have any supertags yet. You can create them when you have more than one tag
				active.`,r,i,s="NOTE: If you had supertags before, please try signing in with Google below and loading them.";return{c(){t=st("p"),t.textContent=e,r=W(),i=st("p"),i.textContent=s,this.h()},l(o){t=ot(o,"P",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-u30t20"&&(t.textContent=e),r=H(o),i=ot(o,"P",{class:!0,"data-svelte-h":!0}),oe(i)!=="svelte-1p8u7b5"&&(i.textContent=s),this.h()},h(){dt(t,"class","svelte-1jfbuy4"),dt(i,"class","svelte-1jfbuy4")},m(o,a){tt(o,t,a),tt(o,r,a),tt(o,i,a)},d(o){o&&(M(t),M(r),M(i))}}}function cu(n){let t,e;return t=new sf({props:{supertag:n[26]}}),t.$on("remove",n[13]),t.$on("edit",n[14]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p(r,i){const s={};i&8&&(s.supertag=r[26]),t.$set(s)},i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Cv(n){let t;return{c(){t=Xt("Import/Export Data")},l(e){t=Yt(e,"Import/Export Data")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function kv(n){let t,e="Download Config File";return{c(){t=st("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-wwbsqq"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,i){tt(r,t,i)},p:_e,d(r){r&&M(t)}}}function Vv(n){let t,e="Load Config File";return{c(){t=st("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-1ld4bre"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,i){tt(r,t,i)},p:_e,d(r){r&&M(t)}}}function Dv(n){let t;return{c(){t=Xt("Google Account Syncing")},l(e){t=Yt(e,"Google Account Syncing")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function Nv(n){let t,e;return t=new Pe({props:{title:"Sign in with google to backup data",$$slots:{default:[Ov]},$$scope:{ctx:n}}}),t.$on("click",n[18]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p(r,i){const s={};i&536870912&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function bv(n){let t,e,r,i,s,o;return t=new Pe({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Mv]},$$scope:{ctx:n}}}),t.$on("click",n[15]),r=new Pe({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Lv]},$$scope:{ctx:n}}}),r.$on("click",n[16]),s=new Pe({props:{title:"Sign out",$$slots:{default:[xv]},$$scope:{ctx:n}}}),s.$on("click",n[17]),{c(){lt(t.$$.fragment),e=W(),lt(r.$$.fragment),i=W(),lt(s.$$.fragment)},l(a){ut(t.$$.fragment,a),e=H(a),ut(r.$$.fragment,a),i=H(a),ut(s.$$.fragment,a)},m(a,l){ct(t,a,l),tt(a,e,l),ct(r,a,l),tt(a,i,l),ct(s,a,l),o=!0},p(a,l){const u={};l&536870912&&(u.$$scope={dirty:l,ctx:a}),t.$set(u);const c={};l&536870912&&(c.$$scope={dirty:l,ctx:a}),r.$set(c);const h={};l&536870912&&(h.$$scope={dirty:l,ctx:a}),s.$set(h)},i(a){o||(V(t.$$.fragment,a),V(r.$$.fragment,a),V(s.$$.fragment,a),o=!0)},o(a){U(t.$$.fragment,a),U(r.$$.fragment,a),U(s.$$.fragment,a),o=!1},d(a){a&&(M(e),M(i)),ht(t,a),ht(r,a),ht(s,a)}}}function Ov(n){let t;return{c(){t=Xt("Connect Google User")},l(e){t=Yt(e,"Connect Google User")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function Mv(n){let t,e="Load Config";return{c(){t=st("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-g2l2uz"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,i){tt(r,t,i)},p:_e,d(r){r&&M(t)}}}function Lv(n){let t,e="Save config";return{c(){t=st("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-kmcvvq"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,i){tt(r,t,i)},p:_e,d(r){r&&M(t)}}}function xv(n){let t;return{c(){t=Xt("Sign Out")},l(e){t=Yt(e,"Sign Out")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function Fv(n){let t;return{c(){t=Xt("Delete Data")},l(e){t=Yt(e,"Delete Data")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function $v(n){let t;return{c(){t=Xt("Delete Data")},l(e){t=Yt(e,"Delete Data")},m(e,r){tt(e,t,r)},d(e){e&&M(t)}}}function hu(n){let t,e;return t=new ji({props:{title:"Load Data",warning:"This will replace all your current settings with settings save online. Are you sure you want to do that?",labelConfirm:"Yes, load settings.",labelCancel:"Cancel"}}),t.$on("confirm",n[20]),t.$on("close",n[21]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p:_e,i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function du(n){let t,e;return t=new ji({props:{title:"Save data online",warning:"This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?",labelConfirm:"Yes, backup online",labelCancel:"Cancel"}}),t.$on("confirm",n[22]),t.$on("close",n[23]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p:_e,i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function fu(n){let t,e;return t=new ji({props:{title:"Delete Data",warning:"This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?",labelConfirm:"Yes, delete it.",labelCancel:"Cancel"}}),t.$on("confirm",n[9]),t.$on("close",n[24]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,i){ct(t,r,i),e=!0},p:_e,i(r){e||(V(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Uv(n){let t,e,r,i,s,o,a,l,u,c,h,d,f,E="Load and save preferences and supertags to and from a file.",_,y,k,Q,F,G,Y,K,at,yt="Load and save preferences and supertags to and from Google.",Ot,J,B,Mt,I,$,w,A,R,Ct,C,D,Pt;r=new Dd({props:{$$slots:{default:[Pv]},$$scope:{ctx:n}}}),s=new Wr({props:{$$slots:{default:[Sv]},$$scope:{ctx:n}}});let mt=n[3].items.length===0&&uu(),ce=Pn(n[3].items),it=[];for(let m=0;m<ce.length;m+=1)it[m]=cu(lu(n,ce,m));const Lt=m=>U(it[m],1,1,()=>{it[m]=null});h=new Wr({props:{$$slots:{default:[Cv]},$$scope:{ctx:n}}}),k=new Pe({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[kv]},$$scope:{ctx:n}}}),k.$on("click",n[11]),F=new Pe({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Vv]},$$scope:{ctx:n}}}),F.$on("click",n[12]),Y=new Wr({props:{$$slots:{default:[Dv]},$$scope:{ctx:n}}});const jn=[bv,Nv],Ne=[];function Va(m,L){return m[8]?0:1}B=Va(n),Mt=Ne[B]=jn[B](n),$=new Wr({props:{$$slots:{default:[Fv]},$$scope:{ctx:n}}}),A=new Pe({props:{title:"Delete all your data.",$$slots:{default:[$v]},$$scope:{ctx:n}}}),A.$on("click",n[19]);let vt=n[1]&&hu(n),Tt=n[2]&&du(n),Et=n[0]&&fu(n);return{c(){t=W(),e=st("section"),lt(r.$$.fragment),i=W(),lt(s.$$.fragment),o=W(),a=st("div"),mt&&mt.c(),l=W(),u=st("ul");for(let m=0;m<it.length;m+=1)it[m].c();c=W(),lt(h.$$.fragment),d=W(),f=st("p"),f.textContent=E,_=W(),y=st("div"),lt(k.$$.fragment),Q=W(),lt(F.$$.fragment),G=W(),lt(Y.$$.fragment),K=W(),at=st("p"),at.textContent=yt,Ot=W(),J=st("div"),Mt.c(),I=W(),lt($.$$.fragment),w=W(),lt(A.$$.fragment),R=W(),vt&&vt.c(),Ct=W(),Tt&&Tt.c(),C=W(),Et&&Et.c(),D=gi(),this.h()},l(m){Rd("svelte-814hib",au.head).forEach(M),t=H(m),e=ot(m,"SECTION",{class:!0});var et=Ht(e);ut(r.$$.fragment,et),i=H(et),ut(s.$$.fragment,et),o=H(et),a=ot(et,"DIV",{class:!0});var We=Ht(a);mt&&mt.l(We),l=H(We),u=ot(We,"UL",{});var Bn=Ht(u);for(let fn=0;fn<it.length;fn+=1)it[fn].l(Bn);Bn.forEach(M),We.forEach(M),c=H(et),ut(h.$$.fragment,et),d=H(et),f=ot(et,"P",{class:!0,"data-svelte-h":!0}),oe(f)!=="svelte-rgkk1o"&&(f.textContent=E),_=H(et),y=ot(et,"DIV",{class:!0});var He=Ht(y);ut(k.$$.fragment,He),Q=H(He),ut(F.$$.fragment,He),He.forEach(M),G=H(et),ut(Y.$$.fragment,et),K=H(et),at=ot(et,"P",{class:!0,"data-svelte-h":!0}),oe(at)!=="svelte-pw0g5c"&&(at.textContent=yt),Ot=H(et),J=ot(et,"DIV",{class:!0});var Kn=Ht(J);Mt.l(Kn),Kn.forEach(M),I=H(et),ut($.$$.fragment,et),w=H(et),ut(A.$$.fragment,et),et.forEach(M),R=H(m),vt&&vt.l(m),Ct=H(m),Tt&&Tt.l(m),C=H(m),Et&&Et.l(m),D=gi(),this.h()},h(){au.title="kurosearch - Account",dt(a,"class","supertags"),dt(f,"class","svelte-1jfbuy4"),dt(y,"class","button-row svelte-1jfbuy4"),dt(at,"class","svelte-1jfbuy4"),dt(J,"class","button-row svelte-1jfbuy4"),dt(e,"class","svelte-1jfbuy4")},m(m,L){tt(m,t,L),tt(m,e,L),ct(r,e,null),b(e,i),ct(s,e,null),b(e,o),b(e,a),mt&&mt.m(a,null),b(a,l),b(a,u);for(let et=0;et<it.length;et+=1)it[et]&&it[et].m(u,null);b(e,c),ct(h,e,null),b(e,d),b(e,f),b(e,_),b(e,y),ct(k,y,null),b(y,Q),ct(F,y,null),b(e,G),ct(Y,e,null),b(e,K),b(e,at),b(e,Ot),b(e,J),Ne[B].m(J,null),b(e,I),ct($,e,null),b(e,w),ct(A,e,null),tt(m,R,L),vt&&vt.m(m,L),tt(m,Ct,L),Tt&&Tt.m(m,L),tt(m,C,L),Et&&Et.m(m,L),tt(m,D,L),Pt=!0},p(m,[L]){const et={};L&536870912&&(et.$$scope={dirty:L,ctx:m}),r.$set(et);const We={};if(L&536870912&&(We.$$scope={dirty:L,ctx:m}),s.$set(We),m[3].items.length===0?mt||(mt=uu(),mt.c(),mt.m(a,l)):mt&&(mt.d(1),mt=null),L&8){ce=Pn(m[3].items);let Wt;for(Wt=0;Wt<ce.length;Wt+=1){const ba=lu(m,ce,Wt);it[Wt]?(it[Wt].p(ba,L),V(it[Wt],1)):(it[Wt]=cu(ba),it[Wt].c(),V(it[Wt],1),it[Wt].m(u,null))}for(Te(),Wt=ce.length;Wt<it.length;Wt+=1)Lt(Wt);Ee()}const Bn={};L&536870912&&(Bn.$$scope={dirty:L,ctx:m}),h.$set(Bn);const He={};L&536870912&&(He.$$scope={dirty:L,ctx:m}),k.$set(He);const Kn={};L&536870912&&(Kn.$$scope={dirty:L,ctx:m}),F.$set(Kn);const fn={};L&536870912&&(fn.$$scope={dirty:L,ctx:m}),Y.$set(fn);let Es=B;B=Va(m),B===Es?Ne[B].p(m,L):(Te(),U(Ne[Es],1,1,()=>{Ne[Es]=null}),Ee(),Mt=Ne[B],Mt?Mt.p(m,L):(Mt=Ne[B]=jn[B](m),Mt.c()),V(Mt,1),Mt.m(J,null));const Da={};L&536870912&&(Da.$$scope={dirty:L,ctx:m}),$.$set(Da);const Na={};L&536870912&&(Na.$$scope={dirty:L,ctx:m}),A.$set(Na),m[1]?vt?(vt.p(m,L),L&2&&V(vt,1)):(vt=hu(m),vt.c(),V(vt,1),vt.m(Ct.parentNode,Ct)):vt&&(Te(),U(vt,1,1,()=>{vt=null}),Ee()),m[2]?Tt?(Tt.p(m,L),L&4&&V(Tt,1)):(Tt=du(m),Tt.c(),V(Tt,1),Tt.m(C.parentNode,C)):Tt&&(Te(),U(Tt,1,1,()=>{Tt=null}),Ee()),m[0]?Et?(Et.p(m,L),L&1&&V(Et,1)):(Et=fu(m),Et.c(),V(Et,1),Et.m(D.parentNode,D)):Et&&(Te(),U(Et,1,1,()=>{Et=null}),Ee())},i(m){if(!Pt){V(r.$$.fragment,m),V(s.$$.fragment,m);for(let L=0;L<ce.length;L+=1)V(it[L]);V(h.$$.fragment,m),V(k.$$.fragment,m),V(F.$$.fragment,m),V(Y.$$.fragment,m),V(Mt),V($.$$.fragment,m),V(A.$$.fragment,m),V(vt),V(Tt),V(Et),Pt=!0}},o(m){U(r.$$.fragment,m),U(s.$$.fragment,m),it=it.filter(Boolean);for(let L=0;L<it.length;L+=1)U(it[L]);U(h.$$.fragment,m),U(k.$$.fragment,m),U(F.$$.fragment,m),U(Y.$$.fragment,m),U(Mt),U($.$$.fragment,m),U(A.$$.fragment,m),U(vt),U(Tt),U(Et),Pt=!1},d(m){m&&(M(t),M(e),M(R),M(Ct),M(C),M(D)),ht(r),ht(s),mt&&mt.d(),po(it,m),ht(h),ht(k),ht(F),ht(Y),Ne[B].d(),ht($),ht(A),vt&&vt.d(m),Tt&&Tt.d(m),Et&&Et.d(m)}}}function qv(n,t,e){let r,i,s,o,a,l;pn(n,Qe,I=>e(3,r=I)),pn(n,ws,I=>e(4,i=I)),pn(n,As,I=>e(5,s=I)),pn(n,Rs,I=>e(6,o=I)),pn(n,Is,I=>e(7,a=I)),pn(n,Rv,I=>e(8,l=I));let u=!1,c=!1,h=!1;const d=()=>{Qe.reset()},f=()=>({[It.LocalstorageEnabled]:a,[It.Theme]:o,[It.BlockedContent]:s,[It.ResultColumns]:i,[It.Supertags]:r}),E=async()=>{const I=f();try{const $=JSON.stringify(I,void 0,2),w="kurosearch-config.json";if("showSaveFilePicker"in window){const R=await(await showSaveFilePicker({suggestedName:w})).createWritable();await R.write($),await R.close()}else{const A=document.createElement("a"),R=new Blob([$],{type:"text/plain"});A.href=URL.createObjectURL(R),A.download=w,A.click(),URL.revokeObjectURL(A.href)}}catch($){console.error($)}},_=async()=>new Promise(async(I,$)=>{try{if("showOpenFilePicker"in window){const[w]=await showOpenFilePicker(),A=await w.getFile();I(await A.text())}else{let w;const A=R=>{var Ct=R.target.files[0];if(Ct){var C=new FileReader;C.onload=D=>{I(D.target.result),document.body.removeChild(w)},C.readAsText(Ct)}};w=document.createElement("input"),w.type="file",w.style.display="none",w.onchange=A,document.body.appendChild(w),w.click()}}catch(w){$(w)}});return[u,c,h,r,i,s,o,a,l,d,f,E,async()=>{try{const I=await _(),$=JSON.parse(I);ae(Is,a=$[It.LocalstorageEnabled],a),ae(Rs,o=$[It.Theme],o),ae(As,s=$[It.BlockedContent],s),ae(ws,i=$[It.ResultColumns],i),ae(Qe,r=$[It.Supertags],r)}catch(I){console.error(I)}},I=>Qe.remove(I.detail),I=>{Qe.update(I.detail.oldName,I.detail.newSupertag)},()=>e(1,c=!0),()=>e(2,h=!0),()=>lg(),()=>ag(),()=>e(0,u=!0),async()=>{const I=await yv();I.settings&&(I.settings[It.LocalstorageEnabled]&&ae(Is,a=I.settings[It.LocalstorageEnabled],a),I.settings[It.Theme]&&ae(Rs,o=I.settings[It.Theme],o),I.settings[It.BlockedContent]&&ae(As,s=I.settings[It.BlockedContent],s),I.settings[It.ResultColumns]&&ae(ws,i=I.settings[It.ResultColumns],i),I.settings[It.Supertags]&&ae(Qe,r=I.settings[It.Supertags],r)),I.supertags&&ae(Qe,r.items=I.supertags,r)},()=>e(1,c=!1),async()=>{await wv(f(),r.items)},()=>e(2,h=!1),()=>e(0,u=!1)]}class dT extends Ui{constructor(t){super(),qi(this,t,qv,Uv,$i,{})}}export{dT as component};
