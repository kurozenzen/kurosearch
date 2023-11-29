import{s as Us,f as it,l as Yt,g as ot,h as Ht,m as Xt,d as M,j as dt,r as ba,i as X,u as b,F as ds,R as gd,n as rs,v as ve,H as hu,M as fs,D as du,p as Oa,a as G,y as oe,c as W,L as Ma,G as po,e as ps,x as _d,C as pn,O as ae}from"../chunks/scheduler.32f194ce.js";import{S as $s,i as qs,b as lt,d as ut,m as ct,a as k,t as U,e as ht,f as La,g as Ie,c as we}from"../chunks/index.aa0a4971.js";import{g as yd}from"../chunks/firebase.ac72eb03.js";import{e as Pn}from"../chunks/each.e59479a4.js";import{C as js,l as wi}from"../chunks/localstorage-enabled-store.10c75f0a.js";import{D as vd,r as Ai}from"../chunks/result-columns-store.456395b2.js";import{T as xa}from"../chunks/TextInput.f775e214.js";import{S as Td}from"../chunks/Searchbar.f617b69a.js";import{g as Ed}from"../chunks/tags.49324235.js";import{a as Fa}from"../chunks/format-tag.7e313273.js";import{M as Ua}from"../chunks/tag-modifier-data.021c0243.js";import{T as Ce}from"../chunks/TextButton.bf64be78.js";import{n as Id,s as Ye}from"../chunks/supertags-store.5b66bb0f.js";import{H as wd,a as Kr}from"../chunks/Heading3.b8e77da3.js";import{g as fu,i as Ad,a as Rd,b as Nt,_ as $i,C as qi,r as ms,c as mo,d as Pd,e as pu,f as Sd,S as Mn,E as go,h as Cd,j as kd,q as Ar,L as he,k as ee,l as Vd,m as mu,F as Bs,n as Nd,o as Dd,p as bd,s as Od}from"../chunks/index.esm2017.b35d87a0.js";import{c as Md,a as Ld}from"../chunks/tag-utils.ceb6413c.js";import{a as xd,b as Fd}from"../chunks/analytics.b280da65.js";import{b as Ri}from"../chunks/blocked-content-store.4020ee6a.js";import{w as Ud}from"../chunks/index.fb84d337.js";import{S as It}from"../chunks/store-keys.010b89a6.js";import{t as Pi}from"../chunks/theme-store.69ddfb31.js";function $d(n){let t,e=Fa(n[0].name)+"",r,s,i,o;return{c(){t=it("button"),r=Yt(e),this.h()},l(a){t=ot(a,"BUTTON",{class:!0});var l=Ht(t);r=Xt(l,e),l.forEach(M),this.h()},h(){dt(t,"class",s=ba(Ua[n[0].modifier])+" svelte-1kb5f0w")},m(a,l){X(a,t,l),b(t,r),i||(o=[ds(t,"click",n[1]),ds(t,"contextmenu",gd(n[2]))],i=!0)},p(a,[l]){l&1&&e!==(e=Fa(a[0].name)+"")&&rs(r,e),l&1&&s!==(s=ba(Ua[a[0].modifier])+" svelte-1kb5f0w")&&dt(t,"class",s)},i:ve,o:ve,d(a){a&&M(t),i=!1,hu(o)}}}function qd(n,t,e){let{tag:r}=t;function s(o){fs.call(this,n,o)}function i(o){fs.call(this,n,o)}return n.$$set=o=>{"tag"in o&&e(0,r=o.tag)},[r,s,i]}class gu extends $s{constructor(t){super(),qs(this,t,qd,$d,Us,{tag:0})}}function $a(n,t,e){const r=n.slice();return r[12]=t[e],r[14]=e,r}function qa(n){let t,e;function r(){return n[7](n[14])}function s(){return n[8](n[14],n[12])}return t=new gu({props:{tag:n[12]}}),t.$on("click",r),t.$on("contextmenu",s),{c(){lt(t.$$.fragment)},l(i){ut(t.$$.fragment,i)},m(i,o){ct(t,i,o),e=!0},p(i,o){n=i;const a={};o&1&&(a.tag=n[12]),t.$set(a)},i(i){e||(k(t.$$.fragment,i),e=!0)},o(i){U(t.$$.fragment,i),e=!1},d(i){ht(t,i)}}}function jd(n){let t;return{c(){t=Yt("Save")},l(e){t=Xt(e,"Save")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function Bd(n){let t;return{c(){t=Yt("Cancel")},l(e){t=Xt(e,"Cancel")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function zd(n){let t,e,r="Edit Supertag",s,i,o="Name",a,l,u,c,h,d="Description",f,E,_,v,D,J="Add or remove tags",B,H,tt,et,at,yt,Ot,Q,j;function Mt(C){n[4](C)}let I={placeholder:"Name",autocomplete:"false"};n[0].name!==void 0&&(I.value=n[0].name),l=new xa({props:I}),Oa.push(()=>La(l,"value",Mt));function F(C){n[5](C)}let w={placeholder:"Description",autocomplete:"false"};n[0].description!==void 0&&(w.value=n[0].description),E=new xa({props:w}),Oa.push(()=>La(E,"value",F)),H=new Td({props:{placeholder:"Search for tags",fetchSuggestions:Ed}}),H.$on("pick",n[6]);let A=Pn(n[0].tags),P=[];for(let C=0;C<A.length;C+=1)P[C]=qa($a(n,A,C));const Ct=C=>U(P[C],1,1,()=>{P[C]=null});return yt=new Ce({props:{title:"Save changes",$$slots:{default:[jd]},$$scope:{ctx:n}}}),yt.$on("click",n[9]),Q=new Ce({props:{type:"secondary",title:"Cancel",$$slots:{default:[Bd]},$$scope:{ctx:n}}}),Q.$on("click",n[2]),{c(){t=it("div"),e=it("h3"),e.textContent=r,s=G(),i=it("span"),i.textContent=o,a=G(),lt(l.$$.fragment),c=G(),h=it("span"),h.textContent=d,f=G(),lt(E.$$.fragment),v=G(),D=it("span"),D.textContent=J,B=G(),lt(H.$$.fragment),tt=G(),et=it("ul");for(let C=0;C<P.length;C+=1)P[C].c();at=G(),lt(yt.$$.fragment),Ot=G(),lt(Q.$$.fragment),this.h()},l(C){t=ot(C,"DIV",{class:!0});var V=Ht(t);e=ot(V,"H3",{"data-svelte-h":!0}),oe(e)!=="svelte-1q4lkkx"&&(e.textContent=r),s=W(V),i=ot(V,"SPAN",{class:!0,"data-svelte-h":!0}),oe(i)!=="svelte-15ueaex"&&(i.textContent=o),a=W(V),ut(l.$$.fragment,V),c=W(V),h=ot(V,"SPAN",{class:!0,"data-svelte-h":!0}),oe(h)!=="svelte-rmspr8"&&(h.textContent=d),f=W(V),ut(E.$$.fragment,V),v=W(V),D=ot(V,"SPAN",{class:!0,"data-svelte-h":!0}),oe(D)!=="svelte-1ripwej"&&(D.textContent=J),B=W(V),ut(H.$$.fragment,V),tt=W(V),et=ot(V,"UL",{class:!0});var Pt=Ht(et);for(let gt=0;gt<P.length;gt+=1)P[gt].l(Pt);Pt.forEach(M),at=W(V),ut(yt.$$.fragment,V),Ot=W(V),ut(Q.$$.fragment,V),V.forEach(M),this.h()},h(){dt(i,"class","svelte-1hhm2px"),dt(h,"class","svelte-1hhm2px"),dt(D,"class","svelte-1hhm2px"),dt(et,"class","svelte-1hhm2px"),dt(t,"class","svelte-1hhm2px")},m(C,V){X(C,t,V),b(t,e),b(t,s),b(t,i),b(t,a),ct(l,t,null),b(t,c),b(t,h),b(t,f),ct(E,t,null),b(t,v),b(t,D),b(t,B),ct(H,t,null),b(t,tt),b(t,et);for(let Pt=0;Pt<P.length;Pt+=1)P[Pt]&&P[Pt].m(et,null);b(t,at),ct(yt,t,null),b(t,Ot),ct(Q,t,null),j=!0},p(C,V){const Pt={};!u&&V&1&&(u=!0,Pt.value=C[0].name,Ma(()=>u=!1)),l.$set(Pt);const gt={};if(!_&&V&1&&(_=!0,gt.value=C[0].description,Ma(()=>_=!1)),E.$set(gt),V&1){A=Pn(C[0].tags);let Lt;for(Lt=0;Lt<A.length;Lt+=1){const Bn=$a(C,A,Lt);P[Lt]?(P[Lt].p(Bn,V),k(P[Lt],1)):(P[Lt]=qa(Bn),P[Lt].c(),k(P[Lt],1),P[Lt].m(et,null))}for(Ie(),Lt=A.length;Lt<P.length;Lt+=1)Ct(Lt);we()}const ce={};V&32768&&(ce.$$scope={dirty:V,ctx:C}),yt.$set(ce);const st={};V&32768&&(st.$$scope={dirty:V,ctx:C}),Q.$set(st)},i(C){if(!j){k(l.$$.fragment,C),k(E.$$.fragment,C),k(H.$$.fragment,C);for(let V=0;V<A.length;V+=1)k(P[V]);k(yt.$$.fragment,C),k(Q.$$.fragment,C),j=!0}},o(C){U(l.$$.fragment,C),U(E.$$.fragment,C),U(H.$$.fragment,C),P=P.filter(Boolean);for(let V=0;V<P.length;V+=1)U(P[V]);U(yt.$$.fragment,C),U(Q.$$.fragment,C),j=!1},d(C){C&&M(t),ht(l),ht(E),ht(H),po(P,C),ht(yt),ht(Q)}}}function Gd(n){let t,e;return t=new vd({props:{$$slots:{default:[zd]},$$scope:{ctx:n}}}),t.$on("close",n[10]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,[s]){const i={};s&32769&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Wd(n,t,e){const r=du(),s=()=>r("edit",{oldName:o.name,newSupertag:a}),i=()=>r("close");let{supertag:o}=t,a={...o,tags:[...o.tags]};function l(_){n.$$.not_equal(a.name,_)&&(a.name=_,e(0,a))}function u(_){n.$$.not_equal(a.description,_)&&(a.description=_,e(0,a))}const c=_=>{e(0,a.tags=[...a.tags,{modifier:_.detail.modifier,name:_.detail.label}],a)},h=_=>{a.tags.splice(_,1),e(0,a.tags=[...a.tags],a)},d=(_,v)=>{e(0,a.tags[_].modifier=Id(v.modifier),a)},f=()=>{s(),i()};function E(_){fs.call(this,n,_)}return n.$$set=_=>{"supertag"in _&&e(3,o=_.supertag)},[a,s,i,o,l,u,c,h,d,f,E]}class Kd extends $s{constructor(t){super(),qs(this,t,Wd,Gd,Us,{supertag:3})}}function ja(n,t,e){const r=n.slice();return r[10]=t[e],r}function Ba(n){let t,e;return t=new gu({props:{tag:n[10]}}),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s&1&&(i.tag=r[10]),t.$set(i)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function za(n){let t,e;return t=new js({props:{title:"Delete Supertag",warning:"Are you sure? You will not be able to undo it.",labelCancel:"No, keep it!",labelConfirm:"Yes, delete it."}}),t.$on("confirm",n[3]),t.$on("close",n[5]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:ve,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Ga(n){let t,e;return t=new Kd({props:{supertag:n[0]}}),t.$on("close",n[7]),t.$on("edit",n[8]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s&1&&(i.supertag=r[0]),t.$set(i)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Hd(n){let t,e,r=n[0].name+"",s,i,o,a=Object.keys(n[0].tags).length+"",l,u,c,h,d,f,E,_,v=(n[0].description||n[0].name)+"",D,J,B,H,tt,et,at,yt,Ot,Q=Pn(n[0].tags),j=[];for(let w=0;w<Q.length;w+=1)j[w]=Ba(ja(n,Q,w));const Mt=w=>U(j[w],1,1,()=>{j[w]=null});let I=n[1]&&za(n),F=n[2]&&Ga(n);return{c(){t=it("li"),e=it("h3"),s=Yt(r),i=G(),o=it("small"),l=Yt(a),u=Yt(" tags"),c=G(),h=it("button"),d=G(),f=it("button"),E=G(),_=it("span"),D=Yt(v),J=G(),B=it("ol");for(let w=0;w<j.length;w+=1)j[w].c();H=G(),I&&I.c(),tt=G(),F&&F.c(),et=ps(),this.h()},l(w){t=ot(w,"LI",{class:!0});var A=Ht(t);e=ot(A,"H3",{class:!0});var P=Ht(e);s=Xt(P,r),P.forEach(M),i=W(A),o=ot(A,"SMALL",{class:!0});var Ct=Ht(o);l=Xt(Ct,a),u=Xt(Ct," tags"),Ct.forEach(M),c=W(A),h=ot(A,"BUTTON",{class:!0}),Ht(h).forEach(M),d=W(A),f=ot(A,"BUTTON",{class:!0}),Ht(f).forEach(M),E=W(A),_=ot(A,"SPAN",{class:!0});var C=Ht(_);D=Xt(C,v),C.forEach(M),J=W(A),B=ot(A,"OL",{class:!0});var V=Ht(B);for(let Pt=0;Pt<j.length;Pt+=1)j[Pt].l(V);V.forEach(M),A.forEach(M),H=W(w),I&&I.l(w),tt=W(w),F&&F.l(w),et=ps(),this.h()},h(){dt(e,"class","svelte-1u6eufx"),dt(o,"class","svelte-1u6eufx"),dt(h,"class","codicon codicon-edit svelte-1u6eufx"),dt(f,"class","codicon codicon-close svelte-1u6eufx"),dt(_,"class","svelte-1u6eufx"),dt(B,"class","svelte-1u6eufx"),dt(t,"class","svelte-1u6eufx")},m(w,A){X(w,t,A),b(t,e),b(e,s),b(t,i),b(t,o),b(o,l),b(o,u),b(t,c),b(t,h),b(t,d),b(t,f),b(t,E),b(t,_),b(_,D),b(t,J),b(t,B);for(let P=0;P<j.length;P+=1)j[P]&&j[P].m(B,null);X(w,H,A),I&&I.m(w,A),X(w,tt,A),F&&F.m(w,A),X(w,et,A),at=!0,yt||(Ot=[ds(h,"click",n[6]),ds(f,"click",n[4])],yt=!0)},p(w,[A]){if((!at||A&1)&&r!==(r=w[0].name+"")&&rs(s,r),(!at||A&1)&&a!==(a=Object.keys(w[0].tags).length+"")&&rs(l,a),(!at||A&1)&&v!==(v=(w[0].description||w[0].name)+"")&&rs(D,v),A&1){Q=Pn(w[0].tags);let P;for(P=0;P<Q.length;P+=1){const Ct=ja(w,Q,P);j[P]?(j[P].p(Ct,A),k(j[P],1)):(j[P]=Ba(Ct),j[P].c(),k(j[P],1),j[P].m(B,null))}for(Ie(),P=Q.length;P<j.length;P+=1)Mt(P);we()}w[1]?I?(I.p(w,A),A&2&&k(I,1)):(I=za(w),I.c(),k(I,1),I.m(tt.parentNode,tt)):I&&(Ie(),U(I,1,1,()=>{I=null}),we()),w[2]?F?(F.p(w,A),A&4&&k(F,1)):(F=Ga(w),F.c(),k(F,1),F.m(et.parentNode,et)):F&&(Ie(),U(F,1,1,()=>{F=null}),we())},i(w){if(!at){for(let A=0;A<Q.length;A+=1)k(j[A]);k(I),k(F),at=!0}},o(w){j=j.filter(Boolean);for(let A=0;A<j.length;A+=1)U(j[A]);U(I),U(F),at=!1},d(w){w&&(M(t),M(H),M(tt),M(et)),po(j,w),I&&I.d(w),F&&F.d(w),yt=!1,hu(Ot)}}}function Qd(n,t,e){const r=du(),s=()=>r("remove",u),i=()=>e(1,c=!0),o=()=>e(1,c=!1),a=()=>e(2,h=!0),l=()=>e(2,h=!1);let{supertag:u}=t,c=!1,h=!1;function d(f){fs.call(this,n,f)}return n.$$set=f=>{"supertag"in f&&e(0,u=f.supertag)},[u,c,h,s,i,o,a,l,d]}class Yd extends $s{constructor(t){super(),qs(this,t,Qd,Hd,Us,{supertag:0})}}function _o(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(e[r[s]]=n[r[s]]);return e}function _u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xd=_u,yu=new go("auth","Firebase",_u());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new mu("@firebase/auth");function Jd(n,...t){gs.logLevel<=he.WARN&&gs.warn(`Auth (${Mn}): ${n}`,...t)}function ss(n,...t){gs.logLevel<=he.ERROR&&gs.error(`Auth (${Mn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n,...t){throw yo(n,...t)}function me(n,...t){return yo(n,...t)}function vu(n,t,e){const r=Object.assign(Object.assign({},Xd()),{[t]:e});return new go("auth","Firebase",r).create(t,{appName:n.name})}function Zd(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Te(n,"argument-error"),vu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yo(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return yu.create(n,...t)}function $(n,t,...e){if(!n)throw yo(t,...e)}function Re(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ss(t),new Error(t)}function ke(n,t){n||Re(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tf(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tf()||Sd()||"connection"in navigator)?navigator.onLine:!0}function nf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e){this.shortDelay=t,this.longDelay=e,ke(e>t,"Short delay should be less than long delay!"),this.isMobile=Ad()||Rd()}get(){return ef()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,t){ke(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new Rr(3e4,6e4);function To(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ln(n,t,e,r,s={}){return Eu(n,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ar(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Tu.fetch()(Iu(n,n.config.apiHost,e,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function Eu(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},rf),t);try{const s=new af(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hr(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hr(n,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vu(n,c,u);Te(n,c)}}catch(s){if(s instanceof Bs)throw s;Te(n,"network-request-failed",{message:String(s)})}}async function of(n,t,e,r,s={}){const i=await Ln(n,t,e,r,s);return"mfaPendingCredential"in i&&Te(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Iu(n,t,e,r){const s=`${t}${e}?${r}`;return n.config.emulator?vo(n.config,s):`${n.config.apiScheme}://${s}`}class af{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),sf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=me(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n,t){return Ln(n,"POST","/v1/accounts:delete",t)}async function uf(n,t){return Ln(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function cf(n,t=!1){const e=Nt(n),r=await e.getIdToken(t),s=Eo(r);$(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:tr(Si(s.auth_time)),issuedAtTime:tr(Si(s.iat)),expirationTime:tr(Si(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Si(n){return Number(n)*1e3}function Eo(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ss("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nd(e);return s?JSON.parse(s):(ss("Failed to decode base64 JWT payload"),null)}catch(s){return ss("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hf(n){const t=Eo(n);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Bs&&df(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function df({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n){var t;const e=n.auth,r=await n.getIdToken(),s=await ar(n,uf(e,{idToken:r}));$(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?gf(i.providerUserInfo):[],a=mf(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function pf(n){const t=Nt(n);await _s(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mf(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function gf(n){return n.map(t=>{var{providerId:e}=t,r=_o(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n,t){const e=await Eu(n,{},async()=>{const r=Ar({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Iu(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function yf(n,t){return Ln(n,"POST","/v2/accounts:revokeToken",To(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await _f(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,o=new lr;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return Re("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,t){$(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,i=_o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ff(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await ar(this,this.stsTokenManager.getToken(this.auth,t));return $(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return cf(this,t)}reload(){return pf(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await _s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ar(this,lf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,i,o,a,l,u,c;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(s=e.email)!==null&&s!==void 0?s:void 0,f=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,D=(u=e.createdAt)!==null&&u!==void 0?u:void 0,J=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:B,emailVerified:H,isAnonymous:tt,providerData:et,stsTokenManager:at}=e;$(B&&at,t,"internal-error");const yt=lr.fromJSON(this.name,at);$(typeof B=="string",t,"internal-error"),Oe(h,t.name),Oe(d,t.name),$(typeof H=="boolean",t,"internal-error"),$(typeof tt=="boolean",t,"internal-error"),Oe(f,t.name),Oe(E,t.name),Oe(_,t.name),Oe(v,t.name),Oe(D,t.name),Oe(J,t.name);const Ot=new nn({uid:B,auth:t,email:d,emailVerified:H,displayName:h,isAnonymous:tt,photoURL:E,phoneNumber:f,tenantId:_,stsTokenManager:yt,createdAt:D,lastLoginAt:J});return et&&Array.isArray(et)&&(Ot.providerData=et.map(Q=>Object.assign({},Q))),v&&(Ot._redirectEventId=v),Ot}static async _fromIdTokenResponse(t,e,r=!1){const s=new lr;s.updateFromServerResponse(e);const i=new nn({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await _s(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map;function Pe(n){ke(n instanceof Function,"Expected a class definition");let t=Ka.get(n);return t?(ke(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ka.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Au.type="NONE";const Ha=Au;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n,t,e){return`firebase:${n}:${t}:${e}`}class En{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=is(this.userKey,s.apiKey,i),this.fullPersistenceKey=is("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new En(Pe(Ha),t,r);const s=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Pe(Ha);const o=is(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const c=await u._get(o);if(c){const h=nn._fromJSON(t,c);u!==i&&(a=h),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new En(i,t,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new En(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Su(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ru(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ku(t))return"Blackberry";if(Vu(t))return"Webos";if(Io(t))return"Safari";if((t.includes("chrome/")||Pu(t))&&!t.includes("edge/"))return"Chrome";if(Cu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ru(n=ee()){return/firefox\//i.test(n)}function Io(n=ee()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pu(n=ee()){return/crios\//i.test(n)}function Su(n=ee()){return/iemobile/i.test(n)}function Cu(n=ee()){return/android/i.test(n)}function ku(n=ee()){return/blackberry/i.test(n)}function Vu(n=ee()){return/webos/i.test(n)}function zs(n=ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vf(n=ee()){var t;return zs(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Tf(){return Vd()&&document.documentMode===10}function Nu(n=ee()){return zs(n)||Cu(n)||Vu(n)||ku(n)||/windows phone/i.test(n)||Su(n)}function Ef(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n,t=[]){let e;switch(n){case"Browser":e=Qa(ee());break;case"Worker":e=`${Qa(ee())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Mn}/${r}`}/**
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
 */class If{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((o,a)=>{try{const l=t(i);o(l)}catch(l){a(l)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wf(n,t={}){return Ln(n,"GET","/v2/passwordPolicy",To(n,t))}/**
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
 */const Af=6;class Rf{constructor(t){var e,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:Af,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(e=l.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ya(this),this.idTokenSubscription=new Ya(this),this.beforeStateQueue=new If(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Pe(e)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await En.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await _s(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Nt(t):null;return e&&$(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wf(this),e=new Rf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new go("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await yf(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Pe(t)||this._popupRedirectResolver;$(e,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[Pe(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,r,s);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Jd(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gs(n){return Nt(n)}class Ya{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cd(e=>this.observer=e)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Cf(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=me("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Sf().appendChild(r)})}function kf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n,t){const e=mo(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(kd(i,t??{}))return s;Te(s,"already-initialized")}return e.initialize({options:t})}function Nf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Pe);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Df(n,t,e){const r=Gs(n);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(e!=null&&e.disableWarnings),i=bu(t),{host:o,port:a}=bf(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Of()}function bu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function bf(n){const t=bu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xa(o)}}}function Xa(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Of(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Re("not implemented")}_getIdTokenResponse(t){return Re("not implemented")}_linkToIdToken(t,e){return Re("not implemented")}_getReauthenticationResolver(t){return Re("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n,t){return of(n,"POST","/v1/accounts:signInWithIdp",To(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="http://localhost";class sn extends Ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Te("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=e,i=_o(e,["providerId","signInMethod"]);if(!r||!s)return null;const o=new sn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return In(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,In(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,In(t,e)}buildRequest(){const t={requestUri:Mf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ar(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends wo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Pr{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return sn._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ae.credential(e,r)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Pr{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Le.credential(t.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Pr{constructor(){super("twitter.com")}static credential(t,e){return sn._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return xe.credential(e,r)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await nn._fromIdTokenResponse(t,r,s),o=Ja(r);return new Sn({user:i,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Ja(r);return new Sn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Ja(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Bs{constructor(t,e,r,s){var i;super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new ys(t,e,r,s)}}function Mu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(n,i,t,r):i})}async function Lf(n,t,e=!1){const r=await ar(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Sn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(n,t,e=!1){const{auth:r}=n,s="reauthenticate";try{const i=await ar(n,Mu(r,s,t,n),e);$(i.idToken,r,"internal-error");const o=Eo(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(n.uid===a,r,"user-mismatch"),Sn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Te(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n,t,e=!1){const r="signIn",s=await Mu(n,r,t),i=await Sn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,t){return Nt(n).setPersistence(t)}function $f(n,t,e,r){return Nt(n).onIdTokenChanged(t,e,r)}function qf(n,t,e){return Nt(n).beforeAuthStateChanged(t,e)}function jf(n){return Nt(n).signOut()}const vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(vs,"1"),this.storage.removeItem(vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){const n=ee();return Io(n)||zs(n)}const zf=1e3,Gf=10;class xu extends Lu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bf()&&Ef(),this.fallbackToPolling=Nu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const s=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Tf()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Gf):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},zf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}xu.type="LOCAL";const Fu=xu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Lu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Uu.type="SESSION";const $u=Uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Ws(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(e.origin,i)),l=await Wf(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ao("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function Hf(n){ge().location.href=n}/**
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
 */function qu(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function Qf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xf(){return qu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="firebaseLocalStorageDb",Jf=1,Ts="firebaseLocalStorage",Bu="fbase_key";class Sr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ks(n,t){return n.transaction([Ts],t?"readwrite":"readonly").objectStore(Ts)}function Zf(){const n=indexedDB.deleteDatabase(ju);return new Sr(n).toPromise()}function Bi(){const n=indexedDB.open(ju,Jf);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ts,{keyPath:Bu})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ts)?t(r):(r.close(),await Zf(),t(await Bi()))})})}async function Za(n,t,e){const r=Ks(n,!0).put({[Bu]:t,value:e});return new Sr(r).toPromise()}async function tp(n,t){const e=Ks(n,!1).get(t),r=await new Sr(e).toPromise();return r===void 0?null:r.value}function tl(n,t){const e=Ks(n,!0).delete(t);return new Sr(e).toPromise()}const ep=800,np=3;class zu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>np)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(Xf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Qf(),!this.activeServiceWorker)return;this.sender=new Kf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Yf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bi();return await Za(t,vs,"1"),await tl(t,vs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Za(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>tp(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>tl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Sr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ep)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zu.type="LOCAL";const rp=zu;new Rr(3e4,6e4);/**
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
 */function Gu(n,t){return t?Pe(t):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Ou{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return In(t,this._buildIdpRequest())}_linkToIdToken(t,e){return In(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return In(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sp(n){return Ff(n.auth,new Ro(n),n.bypassAuthState)}function ip(n){const{auth:t,user:e}=n;return $(e,t,"internal-error"),xf(e,new Ro(n),n.bypassAuthState)}async function op(n){const{auth:t,user:e}=n;return $(e,t,"internal-error"),Lf(e,new Ro(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sp;case"linkViaPopup":case"linkViaRedirect":return op;case"reauthViaPopup":case"reauthViaRedirect":return ip;default:Te(this.auth,"internal-error")}}resolve(t){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Rr(2e3,1e4);async function lp(n,t,e){const r=Gs(n);Zd(n,t,wo);const s=Gu(r,e);return new Xe(r,"signInViaPopup",t,s).executeNotNull()}class Xe extends Wu{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const t=Ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ap.get())};t()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="pendingRedirect",os=new Map;class cp extends Wu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=os.get(this.auth._key());if(!t){try{const r=await hp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}os.set(this.auth._key(),t)}return this.bypassAuthState||os.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hp(n,t){const e=pp(t),r=fp(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function dp(n,t){os.set(n._key(),t)}function fp(n){return Pe(n._redirectPersistence)}function pp(n){return is(up,n.config.apiKey,n.name)}async function mp(n,t,e=!1){const r=Gs(n),s=Gu(r,t),o=await new cp(r,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=10*60*1e3;class _p{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!yp(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Ku(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(me(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gp&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(t))}saveEventToCache(t){this.cachedEventUids.add(el(t)),this.lastProcessedEventTime=Date.now()}}function el(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Ku({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function yp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ku(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,t={}){return Ln(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ep=/^https?/;async function Ip(n){if(n.config.emulator)return;const{authorizedDomains:t}=await vp(n);for(const e of t)try{if(wp(e))return}catch{}Te(n,"unauthorized-domain")}function wp(n){const t=ji(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Ep.test(e))return!1;if(Tp.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ap=new Rr(3e4,6e4);function nl(){const n=ge().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Rp(n){return new Promise((t,e)=>{var r,s,i;function o(){nl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nl(),e(me(n,"network-request-failed"))},timeout:Ap.get()})}if(!((s=(r=ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ge().gapi)===null||i===void 0)&&i.load)o();else{const a=kf("iframefcb");return ge()[a]=()=>{gapi.load?o():e(me(n,"network-request-failed"))},Cf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw as=null,t})}let as=null;function Pp(n){return as=as||Rp(n),as}/**
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
 */const Sp=new Rr(5e3,15e3),Cp="__/auth/iframe",kp="emulator/auth/iframe",Vp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Np=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dp(n){const t=n.config;$(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?vo(t,kp):`https://${n.config.authDomain}/${Cp}`,r={apiKey:t.apiKey,appName:n.name,v:Mn},s=Np.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${Ar(r).slice(1)}`}async function bp(n){const t=await Pp(n),e=ge().gapi;return $(e,n,"internal-error"),t.open({where:document.body,url:Dp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=me(n,"network-request-failed"),a=ge().setTimeout(()=>{i(o)},Sp.get());function l(){ge().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Op={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mp=500,Lp=600,xp="_blank",Fp="http://localhost";class rl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Up(n,t,e,r=Mp,s=Lp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Op),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ee().toLowerCase();e&&(a=Pu(u)?xp:e),Ru(u)&&(t=t||Fp,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,E])=>`${d}${f}=${E},`,"");if(vf(u)&&a!=="_self")return $p(t||"",a),new rl(null);const h=window.open(t||"",a,c);$(h,n,"popup-blocked");try{h.focus()}catch{}return new rl(h)}function $p(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const qp="__/auth/handler",jp="emulator/auth/handler",Bp=encodeURIComponent("fac");async function sl(n,t,e,r,s,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Mn,eventId:s};if(t instanceof wo){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Dd(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(i||{}))o[c]=h}if(t instanceof Pr){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${Bp}=${encodeURIComponent(l)}`:"";return`${zp(n)}?${Ar(a).slice(1)}${u}`}function zp({config:n}){return n.emulator?vo(n,jp):`https://${n.authDomain}/${qp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="webStorageSupport";class Gp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=mp,this._overrideRedirectResult=dp}async _openPopup(t,e,r,s){var i;ke((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sl(t,e,r,ji(),s);return Up(t,o,Ao())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await sl(t,e,r,ji(),s);return Hf(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(ke(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await bp(t),r=new _p(t);return e.register("authEvent",s=>($(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ci,{type:Ci},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ci];o!==void 0&&e(!!o),Te(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ip(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Nu()||Io()||zs()}}const Wp=Gp;var il="@firebase/auth",ol="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qp(n){$i(new qi("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Du(n)},u=new Pf(r,s,i,l);return Nf(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),$i(new qi("auth-internal",t=>{const e=Gs(t.getProvider("auth").getImmediate());return(r=>new Kp(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ms(il,ol,Hp(n)),ms(il,ol,"esm2017")}/**
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
 */const Yp=5*60,Xp=fu("authIdTokenMaxAge")||Yp;let al=null;const Jp=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Xp)return;const s=e==null?void 0:e.token;al!==s&&(al=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ze(n=pu()){const t=mo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Vf(n,{popupRedirectResolver:Wp,persistence:[rp,Fu,$u]}),r=fu("authTokenSyncURL");if(r){const i=Jp(r);qf(e,i,()=>i(e.currentUser)),$f(e,o=>i(o))}const s=Pd("auth");return s&&Df(e,`http://${s}`),e}Qp("Browser");let Zp=new Ae;Uf(ze(),Fu);const tm=async()=>lp(ze(),Zp),em=async()=>jf(ze());var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Po=Po||{},x=nm||self;function Hs(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Cr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function rm(n){return Object.prototype.hasOwnProperty.call(n,ki)&&n[ki]||(n[ki]=++sm)}var ki="closure_uid_"+(1e9*Math.random()>>>0),sm=0;function im(n,t,e){return n.call.apply(n.bind,arguments)}function om(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function zt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=im:zt=om,zt.apply(null,arguments)}function Qr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function bt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ge(){this.s=this.s,this.o=this.o}var am=0;Ge.prototype.s=!1;Ge.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),am!=0)&&rm(this)};Ge.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hu=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function So(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function ll(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Hs(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Gt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Gt.prototype.h=function(){this.defaultPrevented=!0};var lm=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return n}();function ur(n){return/^[\s\xa0]*$/.test(n)}function Qs(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function de(n){return Qs().indexOf(n)!=-1}function Co(n){return Co[" "](n),n}Co[" "]=function(){};function um(n,t){var e=eg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var cm=de("Opera"),Cn=de("Trident")||de("MSIE"),Qu=de("Edge"),zi=Qu||Cn,Yu=de("Gecko")&&!(Qs().toLowerCase().indexOf("webkit")!=-1&&!de("Edge"))&&!(de("Trident")||de("MSIE"))&&!de("Edge"),hm=Qs().toLowerCase().indexOf("webkit")!=-1&&!de("Edge");function Xu(){var n=x.document;return n?n.documentMode:void 0}var Gi;t:{var Vi="",Ni=function(){var n=Qs();if(Yu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Qu)return/Edge\/([\d\.]+)/.exec(n);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(hm)return/WebKit\/(\S+)/.exec(n);if(cm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ni&&(Vi=Ni?Ni[1]:""),Cn){var Di=Xu();if(Di!=null&&Di>parseFloat(Vi)){Gi=String(Di);break t}}Gi=Vi}var Wi;if(x.document&&Cn){var ul=Xu();Wi=ul||parseInt(Gi,10)||void 0}else Wi=void 0;var dm=Wi;function cr(n,t){if(Gt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Yu){t:{try{Co(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:fm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&cr.$.h.call(this)}}bt(cr,Gt);var fm={2:"touch",3:"pen",4:"mouse"};cr.prototype.h=function(){cr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),pm=0;function mm(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++pm,this.fa=this.ia=!1}function Ys(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ko(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function gm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Ju(n){const t={};for(const e in n)t[e]=n[e];return t}const cl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zu(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<cl.length;i++)e=cl[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Xs(n){this.src=n,this.g={},this.h=0}Xs.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Hi(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new mm(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function Ki(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=Hu(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ys(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Hi(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var Vo="closure_lm_"+(1e6*Math.random()|0),bi={};function tc(n,t,e,r,s){if(r&&r.once)return nc(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)tc(n,t[i],e,r,s);return null}return e=bo(e),n&&n[kr]?n.O(t,e,Cr(r)?!!r.capture:!!r,s):ec(n,t,e,!1,r,s)}function ec(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=Cr(s)?!!s.capture:!!s,a=Do(n);if(a||(n[Vo]=a=new Xs(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=_m(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)lm||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(sc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function _m(){function n(e){return t.call(n.src,n.listener,e)}const t=ym;return n}function nc(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)nc(n,t[i],e,r,s);return null}return e=bo(e),n&&n[kr]?n.P(t,e,Cr(r)?!!r.capture:!!r,s):ec(n,t,e,!0,r,s)}function rc(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)rc(n,t[i],e,r,s);else r=Cr(r)?!!r.capture:!!r,e=bo(e),n&&n[kr]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=Hi(i,e,r,s),-1<e&&(Ys(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=Do(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Hi(t,e,r,s)),(e=-1<n?t[n]:null)&&No(e))}function No(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[kr])Ki(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(sc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Do(t))?(Ki(e,n),e.h==0&&(e.src=null,t[Vo]=null)):Ys(n)}}}function sc(n){return n in bi?bi[n]:bi[n]="on"+n}function ym(n,t){if(n.fa)n=!0;else{t=new cr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&No(n),n=e.call(r,t)}return n}function Do(n){return n=n[Vo],n instanceof Xs?n:null}var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(n){return typeof n=="function"?n:(n[Oi]||(n[Oi]=function(t){return n.handleEvent(t)}),n[Oi])}function Dt(){Ge.call(this),this.i=new Xs(this),this.S=this,this.J=null}bt(Dt,Ge);Dt.prototype[kr]=!0;Dt.prototype.removeEventListener=function(n,t,e,r){rc(this,n,t,e,r)};function $t(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Gt(t,n);else if(t instanceof Gt)t.target=t.target||n;else{var s=t;t=new Gt(r,n),Zu(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=Yr(o,r,!0,t)&&s}if(o=t.g=n,s=Yr(o,r,!0,t)&&s,s=Yr(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=Yr(o,r,!1,t)&&s}Dt.prototype.N=function(){if(Dt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Ys(e[r]);delete n.g[t],n.h--}}this.J=null};Dt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Dt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Yr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Ki(n.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Oo=x.JSON.stringify;class vm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Tm(){var n=Mo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Em{constructor(){this.h=this.g=null}add(t,e){const r=ic.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ic=new vm(()=>new Im,n=>n.reset());class Im{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function wm(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Am(n){x.setTimeout(()=>{throw n},0)}let hr,dr=!1,Mo=new Em,oc=()=>{const n=x.Promise.resolve(void 0);hr=()=>{n.then(Rm)}};var Rm=()=>{for(var n;n=Tm();){try{n.h.call(n.g)}catch(e){Am(e)}var t=ic;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}dr=!1};function Js(n,t){Dt.call(this),this.h=n||1,this.g=t||x,this.j=zt(this.qb,this),this.l=Date.now()}bt(Js,Dt);y=Js.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$t(this,"tick"),this.ga&&(Lo(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){Js.$.N.call(this),Lo(this),delete this.g};function xo(n,t,e){if(typeof n=="function")e&&(n=zt(n,e));else if(n&&typeof n.handleEvent=="function")n=zt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(n,t||0)}function ac(n){n.g=xo(()=>{n.g=null,n.i&&(n.i=!1,ac(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Pm extends Ge{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ac(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fr(n){Ge.call(this),this.h=n,this.g={}}bt(fr,Ge);var hl=[];function lc(n,t,e,r){Array.isArray(e)||(e&&(hl[0]=e.toString()),e=hl);for(var s=0;s<e.length;s++){var i=tc(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function uc(n){ko(n.g,function(t,e){this.g.hasOwnProperty(e)&&No(t)},n),n.g={}}fr.prototype.N=function(){fr.$.N.call(this),uc(this)};fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zs(){this.g=!0}Zs.prototype.Ea=function(){this.g=!1};function Sm(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function Cm(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function vn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Vm(n,e)+(r?" "+r:"")})}function km(n,t){n.info(function(){return"TIMEOUT: "+t})}Zs.prototype.info=function(){};function Vm(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Oo(e)}catch{return t}}var cn={},dl=null;function ti(){return dl=dl||new Dt}cn.Ta="serverreachability";function cc(n){Gt.call(this,cn.Ta,n)}bt(cc,Gt);function pr(n){const t=ti();$t(t,new cc(t))}cn.STAT_EVENT="statevent";function hc(n,t){Gt.call(this,cn.STAT_EVENT,n),this.stat=t}bt(hc,Gt);function Jt(n){const t=ti();$t(t,new hc(t,n))}cn.Ua="timingevent";function dc(n,t){Gt.call(this,cn.Ua,n),this.size=t}bt(dc,Gt);function Vr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},t)}var ei={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fo(){}Fo.prototype.h=null;function fl(n){return n.h||(n.h=n.i())}function pc(){}var Nr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Uo(){Gt.call(this,"d")}bt(Uo,Gt);function $o(){Gt.call(this,"c")}bt($o,Gt);var Qi;function ni(){}bt(ni,Fo);ni.prototype.g=function(){return new XMLHttpRequest};ni.prototype.i=function(){return{}};Qi=new ni;function Dr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new fr(this),this.P=Nm,n=zi?125:void 0,this.V=new Js(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mc}function mc(){this.i=null,this.g="",this.h=!1}var Nm=45e3,Yi={},Es={};y=Dr.prototype;y.setTimeout=function(n){this.P=n};function Xi(n,t,e){n.L=1,n.v=si(Ve(t)),n.s=e,n.S=!0,gc(n,null)}function gc(n,t){n.G=Date.now(),br(n),n.A=Ve(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Ac(e.i,"t",r),n.C=0,e=n.l.J,n.h=new mc,n.g=Gc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Pm(zt(n.Pa,n,n.g),n.O)),lc(n.U,n.g,"readystatechange",n.nb),t=n.I?Ju(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),pr(),Sm(n.j,n.u,n.A,n.m,n.W,n.s)}y.nb=function(n){n=n.target;const t=this.M;t&&fe(n)==3?t.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)t:{const c=fe(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||zi||this.g&&(this.h.h||this.g.ja()||_l(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?pr(3):pr(2)),ri(this);var e=this.g.da();this.ca=e;e:if(_c(this)){var r=_l(this.g);n="";var s=r.length,i=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Je(this),er(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Cm(this.j,this.u,this.A,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ur(a)){var u=a;break e}}u=null}if(e=u)vn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ji(this,e);else{this.i=!1,this.o=3,Jt(12),Je(this),er(this);break t}}this.S?(yc(this,c,o),zi&&this.i&&c==3&&(lc(this.U,this.V,"tick",this.mb),this.V.start())):(vn(this.j,this.m,o,null),Ji(this,o)),c==4&&Je(this),this.i&&!this.J&&(c==4?qc(this.l,this):(this.i=!1,br(this)))}else Jm(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Jt(12)):(this.o=0,Jt(13)),Je(this),er(this)}}}catch{}finally{}};function _c(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function yc(n,t,e){let r=!0,s;for(;!n.J&&n.C<e.length;)if(s=Dm(n,e),s==Es){t==4&&(n.o=4,Jt(14),r=!1),vn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Yi){n.o=4,Jt(15),vn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else vn(n.j,n.m,s,null),Ji(n,s);_c(n)&&s!=Es&&s!=Yi&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Jt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Wo(t),t.M=!0,Jt(11))):(vn(n.j,n.m,e,"[Invalid Chunked Response]"),Je(n),er(n))}y.mb=function(){if(this.g){var n=fe(this.g),t=this.g.ja();this.C<t.length&&(ri(this),yc(this,n,t),this.i&&n!=4&&br(this))}};function Dm(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Es:(e=Number(t.substring(e,r)),isNaN(e)?Yi:(r+=1,r+e>t.length?Es:(t=t.slice(r,r+e),n.C=r+e,t)))}y.cancel=function(){this.J=!0,Je(this)};function br(n){n.Y=Date.now()+n.P,vc(n,n.P)}function vc(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Vr(zt(n.lb,n),t)}function ri(n){n.B&&(x.clearTimeout(n.B),n.B=null)}y.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(km(this.j,this.A),this.L!=2&&(pr(),Jt(17)),Je(this),this.o=2,er(this)):vc(this,this.Y-n)};function er(n){n.l.H==0||n.J||qc(n.l,n)}function Je(n){ri(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Lo(n.V),uc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ji(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Zi(e.i,n))){if(!n.K&&Zi(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)As(e),ai(e);else break t;Go(e),Jt(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=Vr(zt(e.ib,e),6e3));if(1>=Sc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ze(e,11)}else if((n.K||e.g==n)&&As(e),!ur(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const c=u[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(qo(i,i.h),i.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ft(r.I,r.F,_))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=zc(r,r.J?r.pa:null,r.Y),o.K){Cc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ri(a),br(a)),r.g=o}else Uc(r);0<e.j.length&&li(e)}else u[0]!="stop"&&u[0]!="close"||Ze(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ze(e,7):zo(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}pr(4)}catch{}}function bm(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Hs(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Om(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Hs(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Tc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Hs(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Om(n),r=bm(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mm(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function rn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof rn){this.h=n.h,Is(this,n.j),this.s=n.s,this.g=n.g,ws(this,n.m),this.l=n.l;var t=n.i,e=new mr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),pl(this,e),this.o=n.o}else n&&(t=String(n).match(Ec))?(this.h=!1,Is(this,t[1]||"",!0),this.s=Yn(t[2]||""),this.g=Yn(t[3]||"",!0),ws(this,t[4]),this.l=Yn(t[5]||"",!0),pl(this,t[6]||"",!0),this.o=Yn(t[7]||"")):(this.h=!1,this.i=new mr(null,this.h))}rn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Xn(t,ml,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Xn(t,ml,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Xn(e,e.charAt(0)=="/"?Fm:xm,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Xn(e,$m)),n.join("")};function Ve(n){return new rn(n)}function Is(n,t,e){n.j=e?Yn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function ws(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function pl(n,t,e){t instanceof mr?(n.i=t,qm(n.i,n.h)):(e||(t=Xn(t,Um)),n.i=new mr(t,n.h))}function ft(n,t,e){n.i.set(t,e)}function si(n){return ft(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Yn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Xn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Lm),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Lm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ml=/[#\/\?@]/g,xm=/[#\?:]/g,Fm=/[#\?]/g,Um=/[#\?@]/g,$m=/#/g;function mr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function We(n){n.g||(n.g=new Map,n.h=0,n.i&&Mm(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}y=mr.prototype;y.add=function(n,t){We(this),this.i=null,n=xn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Ic(n,t){We(n),t=xn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function wc(n,t){return We(n),t=xn(n,t),n.g.has(t)}y.forEach=function(n,t){We(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};y.ta=function(){We(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};y.Z=function(n){We(this);let t=[];if(typeof n=="string")wc(this,n)&&(t=t.concat(this.g.get(xn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};y.set=function(n,t){return We(this),this.i=null,n=xn(this,n),wc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};y.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Ac(n,t,e){Ic(n,t),0<e.length&&(n.i=null,n.g.set(xn(n,t),So(e)),n.h+=e.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function xn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function qm(n,t){t&&!n.j&&(We(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Ic(this,r),Ac(this,s,e))},n)),n.j=t}var jm=class{constructor(n,t){this.g=n,this.map=t}};function Rc(n){this.l=n||Bm,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bm=10;function Pc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sc(n){return n.h?1:n.g?n.g.size:0}function Zi(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function qo(n,t){n.g?n.g.add(t):n.h=t}function Cc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Rc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function kc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return So(n.i)}var zm=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function Gm(){this.g=new zm}function Wm(n,t,e){const r=e||"";try{Tc(n,function(s,i){let o=s;Cr(s)&&(o=Oo(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Km(n,t){const e=new Zs;if(x.Image){const r=new Image;r.onload=Qr(Xr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Qr(Xr,e,r,"TestLoadImage: error",!1,t),r.onabort=Qr(Xr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Qr(Xr,e,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Xr(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Or(n){this.l=n.ec||null,this.j=n.ob||!1}bt(Or,Fo);Or.prototype.g=function(){return new ii(this.l,this.j)};Or.prototype.i=function(n){return function(){return n}}({});function ii(n,t){Dt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=jo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(ii,Dt);var jo=0;y=ii.prototype;y.open=function(n,t){if(this.readyState!=jo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,gr(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=jo};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,gr(this)),this.g&&(this.readyState=3,gr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Vc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Mr(this):gr(this),this.readyState==3&&Vc(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,Mr(this))};y.Ya=function(n){this.g&&(this.response=n,Mr(this))};y.ka=function(){this.g&&Mr(this)};function Mr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,gr(n)}y.setRequestHeader=function(n,t){this.v.append(n,t)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function gr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Hm=x.JSON.parse;function _t(n){Dt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nc,this.L=this.M=!1}bt(_t,Dt);var Nc="",Qm=/^https?$/i,Ym=["POST","PUT"];y=_t.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qi.g(),this.C=this.u?fl(this.u):fl(Qi),this.g.onreadystatechange=zt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){gl(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=x.FormData&&n instanceof x.FormData,!(0<=Hu(Ym,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Oc(this),0<this.B&&((this.L=Xm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.ua,this)):this.A=xo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){gl(this,i)}};function Xm(n){return Cn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof Po<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$t(this,"timeout"),this.abort(8))};function gl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Dc(n),oi(n)}function Dc(n){n.F||(n.F=!0,$t(n,"complete"),$t(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,$t(this,"complete"),$t(this,"abort"),oi(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oi(this,!0)),_t.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?bc(this):this.kb())};y.kb=function(){bc(this)};function bc(n){if(n.h&&typeof Po<"u"&&(!n.C[1]||fe(n)!=4||n.da()!=2)){if(n.v&&fe(n)==4)xo(n.La,0,n);else if($t(n,"readystatechange"),fe(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(Ec)[1]||null;!s&&x.self&&x.self.location&&(s=x.self.location.protocol.slice(0,-1)),r=!Qm.test(s?s.toLowerCase():"")}e=r}if(e)$t(n,"complete"),$t(n,"success");else{n.m=6;try{var i=2<fe(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",Dc(n)}}finally{oi(n)}}}}function oi(n,t){if(n.g){Oc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||$t(n,"ready");try{e.onreadystatechange=r}catch{}}}function Oc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}y.isActive=function(){return!!this.g};function fe(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Hm(t)}};function _l(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Nc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Jm(n){const t={};n=(n.g&&2<=fe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(ur(n[r]))continue;var e=wm(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}gm(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mc(n){let t="";return ko(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Bo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Mc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ft(n,t,e))}function Wn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Lc(n){this.Ga=0,this.j=[],this.l=new Zs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wn("baseRetryDelayMs",5e3,n),this.hb=Wn("retryDelaySeedMs",1e4,n),this.eb=Wn("forwardChannelMaxRetries",2,n),this.xa=Wn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Rc(n&&n.concurrentRequestLimit),this.Ja=new Gm,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Lc.prototype;y.ra=8;y.H=1;function zo(n){if(xc(n),n.H==3){var t=n.W++,e=Ve(n.I);if(ft(e,"SID",n.K),ft(e,"RID",t),ft(e,"TYPE","terminate"),Lr(n,e),t=new Dr(n,n.l,t),t.L=2,t.v=si(Ve(e)),e=!1,x.navigator&&x.navigator.sendBeacon)try{e=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&x.Image&&(new Image().src=t.v,e=!0),e||(t.g=Gc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),br(t)}Bc(n)}function ai(n){n.g&&(Wo(n),n.g.cancel(),n.g=null)}function xc(n){ai(n),n.u&&(x.clearTimeout(n.u),n.u=null),As(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function li(n){if(!Pc(n.i)&&!n.m){n.m=!0;var t=n.Na;hr||oc(),dr||(hr(),dr=!0),Mo.add(t,n),n.C=0}}function Zm(n,t){return Sc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Vr(zt(n.Na,n,t),jc(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Dr(this,this.l,n);let i=this.s;if(this.U&&(i?(i=Ju(i),Zu(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Fc(this,s,t),e=Ve(this.I),ft(e,"RID",n),ft(e,"CVER",22),this.F&&ft(e,"X-HTTP-Session-Id",this.F),Lr(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(Mc(i)))+"&"+t:this.o&&Bo(e,this.o,i)),qo(this.i,s),this.bb&&ft(e,"TYPE","init"),this.P?(ft(e,"$req",t),ft(e,"SID","null"),s.aa=!0,Xi(s,e,null)):Xi(s,e,t),this.H=2}}else this.H==3&&(n?yl(this,n):this.j.length==0||Pc(this.i)||yl(this))};function yl(n,t){var e;t?e=t.m:e=n.W++;const r=Ve(n.I);ft(r,"SID",n.K),ft(r,"RID",e),ft(r,"AID",n.V),Lr(n,r),n.o&&n.s&&Bo(r,n.o,n.s),e=new Dr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Fc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),qo(n.i,e),Xi(e,r,t)}function Lr(n,t){n.na&&ko(n.na,function(e,r){ft(t,r,e)}),n.h&&Tc({},function(e,r){ft(t,r,e)})}function Fc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?zt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<e;l++){let u=s[l].g;const c=s[l].map;if(u-=i,0>u)i=Math.max(0,s[l].g-100),a=!1;else try{Wm(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Uc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;hr||oc(),dr||(hr(),dr=!0),Mo.add(t,n),n.A=0}}function Go(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Vr(zt(n.Ma,n),jc(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,$c(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Vr(zt(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Jt(10),ai(this),$c(this))};function Wo(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function $c(n){n.g=new Dr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ve(n.wa);ft(t,"RID","rpc"),ft(t,"SID",n.K),ft(t,"AID",n.V),ft(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ft(t,"TO",n.qa),ft(t,"TYPE","xmlhttp"),Lr(n,t),n.o&&n.s&&Bo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=si(Ve(t)),e.s=null,e.S=!0,gc(e,n)}y.ib=function(){this.v!=null&&(this.v=null,ai(this),Go(this),Jt(19))};function As(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function qc(n,t){var e=null;if(n.g==t){As(n),Wo(n),n.g=null;var r=2}else if(Zi(n.i,t))e=t.F,Cc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var s=n.C;r=ti(),$t(r,new dc(r,e)),li(n)}else Uc(n);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&Zm(n,t)||r==2&&Go(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:Ze(n,5);break;case 4:Ze(n,10);break;case 3:Ze(n,6);break;default:Ze(n,2)}}}function jc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ze(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=zt(n.pb,n);e||(e=new rn("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Is(e,"https"),si(e)),Km(e.toString(),r)}else Jt(2);n.H=0,n.h&&n.h.za(t),Bc(n),xc(n)}y.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Jt(2)):(this.l.info("Failed to ping google.com"),Jt(1))};function Bc(n){if(n.H=0,n.ma=[],n.h){const t=kc(n.i);(t.length!=0||n.j.length!=0)&&(ll(n.ma,t),ll(n.ma,n.j),n.i.i.length=0,So(n.j),n.j.length=0),n.h.ya()}}function zc(n,t,e){var r=e instanceof rn?Ve(e):new rn(e);if(r.g!="")t&&(r.g=t+"."+r.g),ws(r,r.m);else{var s=x.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new rn(null);r&&Is(i,r),t&&(i.g=t),s&&ws(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&ft(r,e,t),ft(r,"VER",n.ra),Lr(n,r),r}function Gc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new _t(new Or({ob:!0})):new _t(n.va),t.Oa(n.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wc(){}y=Wc.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function Rs(){if(Cn&&!(10<=Number(dm)))throw Error("Environmental error: no available transport.")}Rs.prototype.g=function(n,t){return new se(n,t)};function se(n,t){Dt.call(this),this.g=new Lc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!ur(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ur(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Fn(this)}bt(se,Dt);se.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Jt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=zc(n,null,n.Y),li(n)};se.prototype.close=function(){zo(this.g)};se.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Oo(n),n=e);t.j.push(new jm(t.fb++,n)),t.H==3&&li(t)};se.prototype.N=function(){this.g.h=null,delete this.j,zo(this.g),delete this.g,se.$.N.call(this)};function Kc(n){Uo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}bt(Kc,Uo);function Hc(){$o.call(this),this.status=1}bt(Hc,$o);function Fn(n){this.g=n}bt(Fn,Wc);Fn.prototype.Ba=function(){$t(this.g,"a")};Fn.prototype.Aa=function(n){$t(this.g,new Kc(n))};Fn.prototype.za=function(n){$t(this.g,new Hc)};Fn.prototype.ya=function(){$t(this.g,"b")};function tg(){this.blockSize=-1}function le(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(le,tg);le.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mi(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}le.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)Mi(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Mi(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){Mi(this,r),s=0;break}}this.h=s,this.i+=t};le.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function rt(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var eg={};function Ko(n){return-128<=n&&128>n?um(n,function(t){return new rt([t|0],0>t?-1:0)}):new rt([n|0],0>n?-1:0)}function pe(n){if(isNaN(n)||!isFinite(n))return wn;if(0>n)return Ft(pe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=to;return new rt(t,0)}function Qc(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Ft(Qc(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=pe(Math.pow(t,8)),r=wn,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=pe(Math.pow(t,i)),r=r.R(i).add(pe(o))):(r=r.R(e),r=r.add(pe(o)))}return r}var to=4294967296,wn=Ko(0),eo=Ko(1),vl=Ko(16777216);y=rt.prototype;y.ea=function(){if(ie(this))return-Ft(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:to+r)*t,t*=to}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Se(this))return"0";if(ie(this))return"-"+Ft(this).toString(n);for(var t=pe(Math.pow(n,6)),e=this,r="";;){var s=Ss(e,t).g;e=Ps(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,Se(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Se(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ie(n){return n.h==-1}y.X=function(n){return n=Ps(this,n),ie(n)?-1:Se(n)?0:1};function Ft(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new rt(e,~n.h).add(eo)}y.abs=function(){return ie(this)?Ft(this):this};y.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new rt(e,e[e.length-1]&-2147483648?-1:0)};function Ps(n,t){return n.add(Ft(t))}y.R=function(n){if(Se(this)||Se(n))return wn;if(ie(this))return ie(n)?Ft(this).R(Ft(n)):Ft(Ft(this).R(n));if(ie(n))return Ft(this.R(Ft(n)));if(0>this.X(vl)&&0>n.X(vl))return pe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;e[2*r+2*s]+=o*l,Jr(e,2*r+2*s),e[2*r+2*s+1]+=i*l,Jr(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,Jr(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,Jr(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new rt(e,0)};function Jr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Kn(n,t){this.g=n,this.h=t}function Ss(n,t){if(Se(t))throw Error("division by zero");if(Se(n))return new Kn(wn,wn);if(ie(n))return t=Ss(Ft(n),t),new Kn(Ft(t.g),Ft(t.h));if(ie(t))return t=Ss(n,Ft(t)),new Kn(Ft(t.g),t.h);if(30<n.g.length){if(ie(n)||ie(t))throw Error("slowDivide_ only works with positive integers.");for(var e=eo,r=t;0>=r.X(n);)e=Tl(e),r=Tl(r);var s=mn(e,1),i=mn(r,1);for(r=mn(r,2),e=mn(e,2);!Se(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=mn(r,1),e=mn(e,1)}return t=Ps(n,s.R(t)),new Kn(s,t)}for(s=wn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=pe(e),o=i.R(t);ie(o)||0<o.X(n);)e-=r,i=pe(e),o=i.R(t);Se(i)&&(i=eo),s=s.add(i),n=Ps(n,o)}return new Kn(s,n)}y.gb=function(n){return Ss(this,n).h};y.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new rt(e,this.h&n.h)};y.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new rt(e,this.h|n.h)};y.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new rt(e,this.h^n.h)};function Tl(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new rt(e,n.h)}function mn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new rt(s,n.h)}Rs.prototype.createWebChannel=Rs.prototype.g;se.prototype.send=se.prototype.u;se.prototype.open=se.prototype.m;se.prototype.close=se.prototype.close;ei.NO_ERROR=0;ei.TIMEOUT=8;ei.HTTP_ERROR=6;fc.COMPLETE="complete";pc.EventType=Nr;Nr.OPEN="a";Nr.CLOSE="b";Nr.ERROR="c";Nr.MESSAGE="d";Dt.prototype.listen=Dt.prototype.O;_t.prototype.listenOnce=_t.prototype.P;_t.prototype.getLastError=_t.prototype.Sa;_t.prototype.getLastErrorCode=_t.prototype.Ia;_t.prototype.getStatus=_t.prototype.da;_t.prototype.getResponseJson=_t.prototype.Wa;_t.prototype.getResponseText=_t.prototype.ja;_t.prototype.send=_t.prototype.ha;_t.prototype.setWithCredentials=_t.prototype.Oa;le.prototype.digest=le.prototype.l;le.prototype.reset=le.prototype.reset;le.prototype.update=le.prototype.j;rt.prototype.add=rt.prototype.add;rt.prototype.multiply=rt.prototype.R;rt.prototype.modulo=rt.prototype.gb;rt.prototype.compare=rt.prototype.X;rt.prototype.toNumber=rt.prototype.ea;rt.prototype.toString=rt.prototype.toString;rt.prototype.getBits=rt.prototype.D;rt.fromNumber=pe;rt.fromString=Qc;var ng=function(){return new Rs},rg=function(){return ti()},Li=ei,sg=fc,ig=cn,El={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},og=Or,Zr=pc,ag=_t,lg=le,An=rt;const Il="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new mu("@firebase/firestore");function Hn(){return on.logLevel}function R(n,...t){if(on.logLevel<=he.DEBUG){const e=t.map(Ho);on.debug(`Firestore (${Un}): ${n}`,...e)}}function Ne(n,...t){if(on.logLevel<=he.ERROR){const e=t.map(Ho);on.error(`Firestore (${Un}): ${n}`,...e)}}function kn(n,...t){if(on.logLevel<=he.WARN){const e=t.map(Ho);on.warn(`Firestore (${Un}): ${n}`,...e)}}function Ho(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function N(n="Unexpected state"){const t=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+n;throw Ne(t),new Error(t)}function nt(n,t){n||N()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Bs{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ug{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Bt.UNAUTHENTICATED))}shutdown(){}}class cg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hg{constructor(t){this.t=t,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new _e;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _e,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _e)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new Yc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new Bt(t)}}class dg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new dg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new pg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=gg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function Y(n,t){return n<t?-1:n>t?1:0}function Vn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new St(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _r{constructor(t,e,r){e===void 0?e=0:e>t.length&&N(),r===void 0?r=t.length-e:r>t.length-e&&N(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return _r.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _r?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends _r{construct(t,e,r){return new pt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new T(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const _g=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends _r{construct(t,e,r){return new Ut(t,e,r)}static isValidIdentifier(t){return _g.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new T(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new T(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ut(e)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(pt.fromString(t))}static fromName(t){return new S(pt.fromString(t).popFirst(5))}static empty(){return new S(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new pt(t.slice()))}}function yg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=O.fromTimestamp(r===1e9?new St(e+1,0):new St(e,r));return new $e(s,S.empty(),t)}function vg(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $e(O.min(),S.empty(),-1)}static max(){return new $e(O.max(),S.empty(),-1)}}function Tg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=S.comparator(n.documentKey,t.documentKey),e!==0?e:Y(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ig{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Eg)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},l=>r(l))}),o=!0,i===s&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(s=>s?m.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new m((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;e(t[u]).next(c=>{o[u]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,e){return new m((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function Fr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Qo._e=-1;function Ur(n){return n==null}function Cs(n){return n===0&&1/n==-1/0}function wg(n){return typeof n=="number"&&Number.isInteger(n)&&!Cs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Jc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){this.comparator=t,this.root=e||xt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ts(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ts(this.root,t,this.comparator,!1)}getReverseIterator(){return new ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ts(this.root,t,this.comparator,!0)}}class ts{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new xt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw N();const t=this.left.check();if(t!==this.right.check())throw N();return t+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(t,e,r,s,i){return this}insert(t,e,r){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(t){return new Al(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class Al{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.fields=t,t.sort(Ut.comparator)}static empty(){return new ne([])}unionWith(t){let e=new qt(Ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Zc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zc("Invalid base64 string: "+i):i}}(t);return new Wt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Y(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const Ag=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qe(n){if(nt(!!n),typeof n=="string"){let t=0;const e=Ag.exec(n);if(nt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Wt.fromBase64String(n):Wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Xo(n){const t=n.mapValue.fields.__previous_value__;return Yo(t)?Xo(t):t}function yr(n){const t=qe(n.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,e,r,s,i,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class vr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yo(n)?4:Pg(n)?9007199254740991:10:N()}function Ee(n,t){if(n===t)return!0;const e=ln(n);if(e!==ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yr(n).isEqual(yr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=qe(s.timestampValue),a=qe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return At(s.geoPointValue.latitude)===At(i.geoPointValue.latitude)&&At(s.geoPointValue.longitude)===At(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return At(s.integerValue)===At(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=At(s.doubleValue),a=At(i.doubleValue);return o===a?Cs(o)===Cs(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Vn(n.arrayValue.values||[],t.arrayValue.values||[],Ee);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wl(o)!==wl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ee(o[l],a[l])))return!1;return!0}(n,t);default:return N()}}function Tr(n,t){return(n.values||[]).find(e=>Ee(e,t))!==void 0}function Nn(n,t){if(n===t)return 0;const e=ln(n),r=ln(t);if(e!==r)return Y(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=At(i.integerValue||i.doubleValue),l=At(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return Rl(n.timestampValue,t.timestampValue);case 4:return Rl(yr(n),yr(t));case 5:return Y(n.stringValue,t.stringValue);case 6:return function(i,o){const a=an(i),l=an(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Y(a[u],l[u]);if(c!==0)return c}return Y(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=Y(At(i.latitude),At(o.latitude));return a!==0?a:Y(At(i.longitude),At(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Nn(a[u],l[u]);if(c)return c}return Y(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===es.mapValue&&o===es.mapValue)return 0;if(i===es.mapValue)return 1;if(o===es.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Y(l[h],c[h]);if(d!==0)return d;const f=Nn(a[l[h]],u[c[h]]);if(f!==0)return f}return Y(l.length,c.length)}(n.mapValue,t.mapValue);default:throw N()}}function Rl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Y(n,t);const e=qe(n),r=qe(t),s=Y(e.seconds,r.seconds);return s!==0?s:Y(e.nanos,r.nanos)}function Dn(n){return no(n)}function no(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=qe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return an(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return S.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=no(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${no(e.fields[o])}`;return s+"}"}(n.mapValue):N()}function Pl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ro(n){return!!n&&"integerValue"in n}function Jo(n){return!!n&&"arrayValue"in n}function Sl(n){return!!n&&"nullValue"in n}function Cl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ls(n){return!!n&&"mapValue"in n}function nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return hn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=nr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Pg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.value=t}static empty(){return new Qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ls(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nr(e)}setAll(t){let e=Ut.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=nr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());ls(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ls(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){hn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Qt(nr(this.value))}}function th(n){const t=[];return hn(n.fields,(e,r)=>{const s=new Ut([e]);if(ls(r)){const i=th(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ne(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Vt(t,0,O.min(),O.min(),O.min(),Qt.empty(),0)}static newFoundDocument(t,e,r,s){return new Vt(t,1,e,O.min(),r,s,0)}static newNoDocument(t,e){return new Vt(t,2,e,O.min(),O.min(),Qt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,O.min(),O.min(),Qt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ks{constructor(t,e){this.position=t,this.inclusive=e}}function kl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),e.key):r=Nn(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ee(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Vs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Sg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class eh{}class Rt extends eh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new kg(t,e,r):e==="array-contains"?new Dg(t,r):e==="in"?new bg(t,r):e==="not-in"?new Og(t,r):e==="array-contains-any"?new Mg(t,r):new Rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Vg(t,r):new Ng(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Nn(e,this.value)):e!==null&&ln(this.value)===ln(e)&&this.matchesComparison(Nn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends eh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ue(t,e)}matches(t){return nh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function nh(n){return n.op==="and"}function rh(n){return Cg(n)&&nh(n)}function Cg(n){for(const t of n.filters)if(t instanceof ue)return!1;return!0}function so(n){if(n instanceof Rt)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(rh(n))return n.filters.map(t=>so(t)).join(",");{const t=n.filters.map(e=>so(e)).join(",");return`${n.op}(${t})`}}function sh(n,t){return n instanceof Rt?function(r,s){return s instanceof Rt&&r.op===s.op&&r.field.isEqual(s.field)&&Ee(r.value,s.value)}(n,t):n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&sh(o,s.filters[a]),!0):!1}(n,t):void N()}function ih(n){return n instanceof Rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Dn(e.value)}`}(n):n instanceof ue?function(e){return e.op.toString()+" {"+e.getFilters().map(ih).join(" ,")+"}"}(n):"Filter"}class kg extends Rt{constructor(t,e,r){super(t,e,r),this.key=S.fromName(r.referenceValue)}matches(t){const e=S.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vg extends Rt{constructor(t,e){super(t,"in",e),this.keys=oh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ng extends Rt{constructor(t,e){super(t,"not-in",e),this.keys=oh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>S.fromName(r.referenceValue))}class Dg extends Rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Jo(e)&&Tr(e.arrayValue,this.value)}}class bg extends Rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tr(this.value.arrayValue,e)}}class Og extends Rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Tr(this.value.arrayValue,e)}}class Mg extends Rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Jo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Tr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Nl(n,t=null,e=[],r=[],s=null,i=null,o=null){return new Lg(n,t,e,r,s,i,o)}function Zo(n){const t=q(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>so(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Dn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Dn(r)).join(",")),t.ce=e}return t.ce}function ta(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Sg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!sh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Vl(n.startAt,t.startAt)&&Vl(n.endAt,t.endAt)}function io(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function xg(n,t,e,r,s,i,o,a){return new $r(n,t,e,r,s,i,o,a)}function ea(n){return new $r(n)}function Dl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ah(n){return n.collectionGroup!==null}function rr(n){const t=q(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qt(Ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new Vs(i,r))}),e.has(Ut.keyField().canonicalString())||t.le.push(new Vs(Ut.keyField(),r))}return t.le}function ye(n){const t=q(n);return t.he||(t.he=Fg(t,rr(n))),t.he}function Fg(n,t){if(n.limitType==="F")return Nl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vs(s.field,i)});const e=n.endAt?new ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ks(n.startAt.position,n.startAt.inclusive):null;return Nl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function oo(n,t){const e=n.filters.concat([t]);return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ao(n,t,e){return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ui(n,t){return ta(ye(n),ye(t))&&n.limitType===t.limitType}function lh(n){return`${Zo(ye(n))}|lt:${n.limitType}`}function gn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ih(s)).join(", ")}]`),Ur(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Dn(s)).join(",")),`Target(${r})`}(ye(n))}; limitType=${n.limitType})`}function ci(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):S.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of rr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=kl(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,rr(r),s)||r.endAt&&!function(o,a,l){const u=kl(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,rr(r),s))}(n,t)}function Ug(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uh(n){return(t,e)=>{let r=!1;for(const s of rr(n)){const i=$g(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $g(n,t,e){const r=n.field.isKeyField()?S.comparator(t.key,e.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Nn(l,u):N()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){hn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Jc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new mt(S.comparator);function De(){return qg}const ch=new mt(S.comparator);function Jn(...n){let t=ch;for(const e of n)t=t.insert(e.key,e);return t}function hh(n){let t=ch;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function tn(){return sr()}function dh(){return sr()}function sr(){return new $n(n=>n.toString(),(n,t)=>n.isEqual(t))}const jg=new mt(S.comparator),Bg=new qt(S.comparator);function z(...n){let t=Bg;for(const e of n)t=t.add(e);return t}const zg=new qt(Y);function Gg(){return zg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cs(t)?"-0":t}}function ph(n){return{integerValue:""+n}}function Wg(n,t){return wg(t)?ph(t):fh(n,t)}/**
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
 */class hi{constructor(){this._=void 0}}function Kg(n,t,e){return n instanceof Ns?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yo(i)&&(i=Xo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof Er?gh(n,t):n instanceof Ir?_h(n,t):function(s,i){const o=mh(s,i),a=bl(o)+bl(s.Ie);return ro(o)&&ro(s.Ie)?ph(a):fh(s.serializer,a)}(n,t)}function Hg(n,t,e){return n instanceof Er?gh(n,t):n instanceof Ir?_h(n,t):e}function mh(n,t){return n instanceof Ds?function(r){return ro(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ns extends hi{}class Er extends hi{constructor(t){super(),this.elements=t}}function gh(n,t){const e=yh(t);for(const r of n.elements)e.some(s=>Ee(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ir extends hi{constructor(t){super(),this.elements=t}}function _h(n,t){let e=yh(t);for(const r of n.elements)e=e.filter(s=>!Ee(s,r));return{arrayValue:{values:e}}}class Ds extends hi{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function bl(n){return At(n.integerValue||n.doubleValue)}function yh(n){return Jo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Er&&s instanceof Er||r instanceof Ir&&s instanceof Ir?Vn(r.elements,s.elements,Ee):r instanceof Ds&&s instanceof Ds?Ee(r.Ie,s.Ie):r instanceof Ns&&s instanceof Ns}(n.transform,t.transform)}class Yg{constructor(t,e){this.version=t,this.transformResults=e}}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function us(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class di{}function vh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new na(n.key,te.none()):new qr(n.key,n.data,te.none());{const e=n.data,r=Qt.empty();let s=new qt(Ut.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ke(n.key,r,new ne(s.toArray()),te.none())}}function Xg(n,t,e){n instanceof qr?function(s,i,o){const a=s.value.clone(),l=Ml(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ke?function(s,i,o){if(!us(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ml(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Th(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function ir(n,t,e,r){return n instanceof qr?function(i,o,a,l){if(!us(i.precondition,o))return a;const u=i.value.clone(),c=Ll(i.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ke?function(i,o,a,l){if(!us(i.precondition,o))return a;const u=Ll(i.fieldTransforms,l,o),c=o.data;return c.setAll(Th(i)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return us(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Jg(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=mh(r.transform,s||null);i!=null&&(e===null&&(e=Qt.empty()),e.set(r.field,i))}return e||null}function Ol(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vn(r,s,(i,o)=>Qg(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class qr extends di{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ke extends di{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Th(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ml(n,t,e){const r=new Map;nt(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Hg(o,a,e[s]))}return r}function Ll(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,Kg(i,o,t))}return r}class na extends di{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends di{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Xg(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ir(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ir(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=dh();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const l=vh(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Vn(this.mutations,t.mutations,(e,r)=>Ol(e,r))&&Vn(this.baseMutations,t.baseMutations,(e,r)=>Ol(e,r))}}class ra{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){nt(t.mutations.length===r.length);let s=function(){return jg}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ra(t,e,r,s)}}/**
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
 */class t_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class e_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,K;function Ih(n){switch(n){default:return N();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function wh(n){if(n===void 0)return Ne("GRPC error has no .code"),p.UNKNOWN;switch(n){case wt.OK:return p.OK;case wt.CANCELLED:return p.CANCELLED;case wt.UNKNOWN:return p.UNKNOWN;case wt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case wt.INTERNAL:return p.INTERNAL;case wt.UNAVAILABLE:return p.UNAVAILABLE;case wt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case wt.NOT_FOUND:return p.NOT_FOUND;case wt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case wt.ABORTED:return p.ABORTED;case wt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case wt.DATA_LOSS:return p.DATA_LOSS;default:return N()}}(K=wt||(wt={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function n_(){return new TextEncoder}/**
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
 */const r_=new An([4294967295,4294967295],0);function xl(n){const t=n_().encode(n),e=new lg;return e.update(t),new Uint8Array(e.digest())}function Fl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new An([e,r],0),new An([s,i],0)]}class sa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Zn(`Invalid padding: ${e}`);if(r<0)throw new Zn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=An.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(An.fromNumber(r)));return s.compare(r_)===1&&(s=new An([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=xl(t),[r,s]=Fl(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new sa(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=xl(t),[r,s]=Fl(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,jr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new fi(O.min(),s,new mt(Y),De(),z())}}class jr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jr(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class Ah{constructor(t,e){this.targetId=t,this.fe=e}}class Rh{constructor(t,e,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ul{constructor(){this.ge=0,this.pe=ql(),this.ye=Wt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=z(),e=z(),r=z();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:N()}}),new jr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=ql()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class s_{constructor(t){this.Le=t,this.ke=new Map,this.qe=De(),this.Qe=$l(),this.Ke=new mt(Y)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:N()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(io(i))if(r===0){const o=new S(i.path);this.We(e,o,Vt.newNoDocument(o,O.min()))}else nt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,u)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=an(r).toUint8Array()}catch(l){if(l instanceof Zc)return kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new sa(o,s,i)}catch(l){return kn(l instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&io(a.target)){const l=new S(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Vt.newNoDocument(l,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=z();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new fi(t,e,this.Ke,this.qe,r);return this.qe=De(),this.Qe=$l(),this.Ke=new mt(Y),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Ul,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new qt(Y),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||R("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ul),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function $l(){return new mt(S.comparator)}function ql(){return new mt(S.comparator)}const i_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),o_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),a_=(()=>({and:"AND",or:"OR"}))();class l_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lo(n,t){return n.useProto3Json||Ur(t)?t:{value:t}}function bs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ph(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function u_(n,t){return bs(n,t.toTimestamp())}function re(n){return nt(!!n),O.fromTimestamp(function(e){const r=qe(e);return new St(r.seconds,r.nanos)}(n))}function ia(n,t){return function(r){return new pt(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Sh(n){const t=pt.fromString(n);return nt(Dh(t)),t}function Os(n,t){return ia(n.databaseId,t.path)}function or(n,t){const e=Sh(t);if(e.get(1)!==n.databaseId.projectId)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new S(Ch(e))}function uo(n,t){return ia(n.databaseId,t)}function c_(n){const t=Sh(n);return t.length===4?pt.emptyPath():Ch(t)}function wr(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jl(n,t,e){return{name:Os(n,t),fields:e.value.mapValue.fields}}function h_(n,t){return"found"in t?function(r,s){nt(!!s.found),s.found.name,s.found.updateTime;const i=or(r,s.found.name),o=re(s.found.updateTime),a=s.found.createTime?re(s.found.createTime):O.min(),l=new Qt({mapValue:{fields:s.found.fields}});return Vt.newFoundDocument(i,o,a,l)}(n,t):"missing"in t?function(r,s){nt(!!s.missing),nt(!!s.readTime);const i=or(r,s.missing),o=re(s.readTime);return Vt.newNoDocument(i,o)}(n,t):N()}function d_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:N()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(nt(c===void 0||typeof c=="string"),Wt.fromBase64String(c||"")):(nt(c===void 0||c instanceof Uint8Array),Wt.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:wh(u.code);return new T(c,u.message||"")}(o);e=new Rh(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=or(n,r.document.name),i=re(r.document.updateTime),o=r.document.createTime?re(r.document.createTime):O.min(),a=new Qt({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(s,i,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];e=new cs(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=or(n,r.document),i=r.readTime?re(r.readTime):O.min(),o=Vt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new cs([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=or(n,r.document),i=r.removedTargetIds||[];e=new cs([],i,s,null)}else{if(!("filter"in t))return N();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new e_(s,i),a=r.targetId;e=new Ah(a,o)}}return e}function kh(n,t){let e;if(t instanceof qr)e={update:jl(n,t.key,t.value)};else if(t instanceof na)e={delete:Os(n,t.key)};else if(t instanceof Ke)e={update:jl(n,t.key,t.data),updateMask:E_(t.fieldMask)};else{if(!(t instanceof Eh))return N();e={verify:Os(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Er)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ir)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw N()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:u_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:N()}(n,t.precondition)),e}function f_(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?re(s.updateTime):re(i);return o.isEqual(O.min())&&(o=re(i)),new Yg(o,s.transformResults||[])}(e,t))):[]}function p_(n,t){return{documents:[uo(n,t.path)]}}function m_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=uo(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=uo(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Nh(ue.create(l,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:_n(h.field),direction:y_(h.dir)}}(u))}(t.orderBy);i&&(e.structuredQuery.orderBy=i);const o=lo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),e}function g_(n){let t=c_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1);const c=e.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];e.where&&(i=function(h){const d=Vh(h);return d instanceof ue&&rh(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new Vs(yn(E.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ur(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ks(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new ks(f,d)}(e.endAt)),xg(t,s,o,i,a,"F",l,u)}function __(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=yn(e.unaryFilter.field);return Rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(e.unaryFilter.field);return Rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yn(e.unaryFilter.field);return Rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yn(e.unaryFilter.field);return Rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(n):n.fieldFilter!==void 0?function(e){return Rt.create(yn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ue.create(e.compositeFilter.filters.map(r=>Vh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return N()}}(e.compositeFilter.op))}(n):N()}function y_(n){return i_[n]}function v_(n){return o_[n]}function T_(n){return a_[n]}function _n(n){return{fieldPath:n.canonicalString()}}function yn(n){return Ut.fromServerFormat(n.fieldPath)}function Nh(n){return n instanceof Rt?function(e){if(e.op==="=="){if(Cl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(Sl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(Sl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:v_(e.op),value:e.value}}}(n):n instanceof ue?function(e){const r=e.getFilters().map(s=>Nh(s));return r.length===1?r[0]:{compositeFilter:{op:T_(e.op),filters:r}}}(n):N()}function E_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Dh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e,r,s,i=O.min(),o=O.min(),a=Wt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Fe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t){this.ut=t}}function w_(n){const t=g_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ao(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.on=new R_}addToCollectionParentIndex(t,e){return this.on.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve($e.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve($e.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class R_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new qt(pt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new qt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new bn(0)}static Nn(){return new bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.changes=new $n(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class S_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&ir(r.mutation,s,ne.empty(),St.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const s=tn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=Jn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=tn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=De();const o=sr(),a=function(){return sr()}();return e.forEach((l,u)=>{const c=r.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof Ke)?i=i.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ir(c.mutation,u,c.mutation.getFieldMask(),St.now())):o.set(u.key,ne.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((u,c)=>o.set(u,c)),e.forEach((u,c)=>{var h;return a.set(u,new S_(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=sr();let s=new mt((o,a)=>o-a),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let c=r.get(l)||ne.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(s.get(a.batchId)||z()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=dh();c.forEach(d=>{if(!i.has(d)){const f=vh(e.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return S.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ah(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):m.resolve(tn());let a=-1,l=i;return o.next(u=>m.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?m.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,l,u,z())).next(c=>({batchId:a,changes:hh(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new S(e)).next(r=>{let s=Jn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=Jn();return this.indexManager.getCollectionParents(t,i).next(a=>m.forEach(a,l=>{const u=function(h,d){return new $r(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Vt.newInvalidDocument(c)))});let a=Jn();return o.forEach((l,u)=>{const c=i.get(l);c!==void 0&&ir(c.mutation,u,ne.empty(),St.now()),ci(e,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return m.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(s){return{id:s.id,version:s.version,createTime:re(s.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(s){return{name:s.name,query:w_(s.bundledQuery),readTime:re(s.readTime)}}(e)),m.resolve()}}/**
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
 */class V_{constructor(){this.overlays=new mt(S.comparator),this.lr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=tn();return m.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.lt(t,e,i)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const s=tn(),i=e.length+1,o=new S(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return m.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new mt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=tn(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=tn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return m.resolve(a)}lt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new t_(e,r));let i=this.lr.get(e);i===void 0&&(i=z(),this.lr.set(e,i)),this.lr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.hr=new qt(kt.Pr),this.Ir=new qt(kt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new kt(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new kt(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new S(new pt([])),r=new kt(e,t),s=new kt(e,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new S(new pt([])),r=new kt(e,t),s=new kt(e,t+1);let i=z();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new kt(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return S.comparator(t.key,e.key)||Y(t.gr,e.gr)}static Tr(t,e){return Y(t.gr,e.gr)||S.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new qt(kt.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zg(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new kt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Sr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),s=new kt(e,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new qt(Y);return e.forEach(s=>{const i=new kt(s,0),o=new kt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;S.isDocumentKey(i)||(i=i.child(""));const o=new kt(new S(i),0);let a=new qt(Y);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.gr)),!0)},o),m.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){nt(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(e.mutations,s=>{const i=new kt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new kt(e,0),s=this.yr.firstAfterOrEqual(r);return m.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t){this.Cr=t,this.docs=function(){return new mt(S.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let r=De();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Vt.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=De();const o=e.path,a=new S(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Tg(vg(c),r)<=0||(s.has(c.key)||ci(e,c))&&(i=i.insert(c.key,c.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,e,r,s){N()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new b_(this)}getSize(t){return m.resolve(this.size)}}class b_ extends P_{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.persistence=t,this.Fr=new $n(e=>Zo(e),ta),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Mr=0,this.Or=new oa,this.targetCount=0,this.Nr=bn.On()}forEachTarget(t,e){return this.Fr.forEach((r,s)=>e(s)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),m.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new bn(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.kn(e),m.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Qo(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new O_(this),this.indexManager=new A_,this.remoteDocumentCache=function(s){return new D_(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new I_(e),this.Kr=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new V_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new N_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const s=new L_(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,e){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class L_ extends Ig{constructor(t){super(),this.currentSequenceNumber=t}}class aa{constructor(t){this.persistence=t,this.Gr=new oa,this.zr=null}static jr(t){return new aa(t)}get Hr(){if(this.zr)return this.zr;throw N()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const s=S.fromPath(r);return this.Jr(t,s).next(i=>{i||e.removeEntry(s,O.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return m.or([()=>m.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=s}static Qi(t,e){let r=z(),s=z();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new la(t,e.fromCache,r,s)}}/**
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
 */class x_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.zi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new x_;return this.Hi(t,e,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>i.result)}Ji(t,e,r,s){return r.documentReadCount<this.Ui?(Hn()<=he.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",gn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(Hn()<=he.DEBUG&&R("QueryEngine","Query:",gn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Hn()<=he.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",gn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ye(e))):m.resolve())}zi(t,e){if(Dl(e))return m.resolve(null);let r=ye(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ao(e,null,"F"),r=ye(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=z(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(e,a);return this.Zi(e,u,o,l.readTime)?this.zi(t,ao(e,null,"F")):this.Xi(t,u,e,l)}))})))}ji(t,e,r,s){return Dl(e)||s.isEqual(O.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(e,i);return this.Zi(e,o,r,s)?m.resolve(null):(Hn()<=he.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gn(e)),this.Xi(t,o,e,yg(s,-1)).next(a=>a))})}Yi(t,e){let r=new qt(uh(t));return e.forEach((s,i)=>{ci(t,i)&&(r=r.add(i))}),r}Zi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,e,r){return Hn()<=he.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",gn(e)),this.Gi.getDocumentsMatchingQuery(t,e,$e.min(),r)}Xi(t,e,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t,e,r,s){this.persistence=t,this.es=e,this.serializer=s,this.ts=new mt(Y),this.ns=new $n(i=>Zo(i),ta),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new C_(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function $_(n,t,e,r){return new U_(n,t,e,r)}async function bh(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=z();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return e.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function q_(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(E=>{f=f.next(()=>c.getEntry(l,E)).next(_=>{const v=u.docVersions.get(E);nt(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Oh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function j_(n,t){const e=q(n),r=t.snapshotVersion;let s=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});s=e.ts;const a=[];t.targetChanges.forEach((c,h)=>{const d=s.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(i,c.removedDocuments,h).next(()=>e.qr.addMatchingKeys(i,c.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Wt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),s=s.insert(h,f),function(_,v,D){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,f,c)&&a.push(e.qr.updateTargetData(i,f))});let l=De(),u=z();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(B_(i,o,t.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(O.min())){const c=e.qr.getLastRemoteSnapshotVersion(i).next(h=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(e.ts=s,i))}function B_(n,t,e){let r=z(),s=z();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=De();return e.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(O.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:s}})}function z_(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function G_(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.qr.getTargetData(r,t).next(i=>i?(s=i,m.resolve(s)):e.qr.allocateTargetId(r).next(o=>(s=new Fe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function co(n,t,e){const r=q(n),s=r.ts.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function Bl(n,t,e){const r=q(n);let s=O.min(),i=z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=q(l),d=h.ns.get(c);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,ye(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?s:O.min(),e?i:z())).next(a=>(W_(r,Ug(t),a),{documents:a,ls:i})))}function W_(n,t,e){let r=n.rs.get(t)||O.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.rs.set(t,r)}class zl{constructor(){this.activeTargetIds=Gg()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class K_{constructor(){this.eo=new zl,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new zl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ns=null;function xi(){return ns===null?ns=function(){return 268435456+Math.round(2147483648*Math.random())}():ns++,"0x"+ns.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class X_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(e,r,s,i,o){const a=xi(),l=this.So(e,r);R("RestConnection",`Sending RPC '${e}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,i,o),this.Do(e,l,u,s).then(c=>(R("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw kn("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",s),c})}Co(e,r,s,i,o,a){return this.wo(e,r,s,i,o)}bo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}So(e,r){const s=Q_[e];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,s){const i=xi();return new Promise((o,a)=>{const l=new ag;l.setWithCredentials(!0),l.listenOnce(sg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Li.NO_ERROR:const c=l.getResponseJson();R(jt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case Li.TIMEOUT:R(jt,`RPC '${t}' ${i} timed out`),a(new T(p.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const h=l.getStatus();if(R(jt,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(D)>=0?D:p.UNKNOWN}(f.status);a(new T(E,f.message))}else a(new T(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(p.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{R(jt,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);R(jt,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",u,r,15)})}vo(t,e,r){const s=xi(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ng(),a=rg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new og({})),this.bo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const c=i.join("");R(jt,`Creating RPC '${t}' stream ${s}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const E=new Y_({co:v=>{f?R(jt,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(d||(R(jt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),R(jt,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),_=(v,D,J)=>{v.listen(D,B=>{try{J(B)}catch(H){setTimeout(()=>{throw H},0)}})};return _(h,Zr.EventType.OPEN,()=>{f||R(jt,`RPC '${t}' stream ${s} transport opened.`)}),_(h,Zr.EventType.CLOSE,()=>{f||(f=!0,R(jt,`RPC '${t}' stream ${s} transport closed`),E.Ro())}),_(h,Zr.EventType.ERROR,v=>{f||(f=!0,kn(jt,`RPC '${t}' stream ${s} transport errored:`,v),E.Ro(new T(p.UNAVAILABLE,"The operation could not be completed")))}),_(h,Zr.EventType.MESSAGE,v=>{var D;if(!f){const J=v.data[0];nt(!!J);const B=J,H=B.error||((D=B[0])===null||D===void 0?void 0:D.error);if(H){R(jt,`RPC '${t}' stream ${s} received error:`,H);const tt=H.status;let et=function(Ot){const Q=wt[Ot];if(Q!==void 0)return wh(Q)}(tt),at=H.message;et===void 0&&(et=p.INTERNAL,at="Unknown error status: "+tt+" with message "+H.message),f=!0,E.Ro(new T(et,at)),h.close()}else R(jt,`RPC '${t}' stream ${s} received:`,J),E.Vo(J)}}),_(a,ig.STAT_EVENT,v=>{v.stat===El.PROXY?R(jt,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===El.NOPROXY&&R(jt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ao()},0),E}}function Fi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){return new l_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,e-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,r,s,i,o,a,l){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ua(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(Ne(e.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===e&&this.s_(r,s)},r=>{t(()=>{const s=new T(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J_ extends Mh{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=d_(this.serializer,t),r=function(i){if(!("targetChange"in i))return O.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?O.min():o.readTime?re(o.readTime):O.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=wr(this.serializer),e.addTarget=function(i,o){let a;const l=o.target;if(a=io(l)?{documents:p_(i,l)}:{query:m_(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ph(i,o.resumeToken);const u=lo(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(O.min())>0){a.readTime=bs(i,o.snapshotVersion.toTimestamp());const u=lo(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=__(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=wr(this.serializer),e.removeTarget=t,this.e_(e)}}class Z_ extends Mh{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=f_(t.writeResults,t.commitTime),r=re(t.commitTime);return this.listener.I_(r,e)}return nt(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=wr(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>kh(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,e,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(p.UNKNOWN,s.toString())})}Co(t,e,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,e,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(p.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class ey{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ne(e),this.f_=!1):R("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{dn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=q(l);u.C_.add(4),await Br(u),u.M_.set("Unknown"),u.C_.delete(4),await mi(u)}(this))})}),this.M_=new ey(r,s)}}async function mi(n){if(dn(n))for(const t of n.v_)await t(!0)}async function Br(n){for(const t of n.v_)await t(!1)}function Lh(n,t){const e=q(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),da(e)?ha(e):qn(e).Ho()&&ca(e,t))}function xh(n,t){const e=q(n),r=qn(e);e.D_.delete(t),r.Ho()&&Fh(e,t),e.D_.size===0&&(r.Ho()?r.Zo():dn(e)&&e.M_.set("Unknown"))}function ca(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qn(n).u_(t)}function Fh(n,t){n.x_.Oe(t),qn(n).c_(t)}function ha(n){n.x_=new s_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.M_.g_()}function da(n){return dn(n)&&!qn(n).jo()&&n.D_.size>0}function dn(n){return q(n).C_.size===0}function Uh(n){n.x_=void 0}async function ry(n){n.D_.forEach((t,e)=>{ca(n,t)})}async function sy(n,t){Uh(n),da(n)?(n.M_.w_(t),ha(n)):n.M_.set("Unknown")}async function iy(n,t,e){if(n.M_.set("Online"),t instanceof Rh&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(n,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ms(n,r)}else if(t instanceof cs?n.x_.$e(t):t instanceof Ah?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(O.min()))try{const r=await Oh(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=i.D_.get(u);c&&i.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=i.D_.get(l);if(!c)return;i.D_.set(l,c.withResumeToken(Wt.EMPTY_BYTE_STRING,c.snapshotVersion)),Fh(i,l);const h=new Fe(c.target,l,u,c.sequenceNumber);ca(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Ms(n,r)}}async function Ms(n,t,e){if(!Fr(t))throw t;n.C_.add(1),await Br(n),n.M_.set("Offline"),e||(e=()=>Oh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await mi(n)})}function $h(n,t){return t().catch(e=>Ms(n,e,t))}async function gi(n){const t=q(n),e=je(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;oy(t);)try{const s=await z_(t.localStore,r);if(s===null){t.b_.length===0&&e.Zo();break}r=s.batchId,ay(t,s)}catch(s){await Ms(t,s)}qh(t)&&jh(t)}function oy(n){return dn(n)&&n.b_.length<10}function ay(n,t){n.b_.push(t);const e=je(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function qh(n){return dn(n)&&!je(n).jo()&&n.b_.length>0}function jh(n){je(n).start()}async function ly(n){je(n).E_()}async function uy(n){const t=je(n);for(const e of n.b_)t.P_(e.mutations)}async function cy(n,t,e){const r=n.b_.shift(),s=ra.from(r,t,e);await $h(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await gi(n)}async function hy(n,t){t&&je(n).h_&&await async function(r,s){if(function(o){return Ih(o)&&o!==p.ABORTED}(s.code)){const i=r.b_.shift();je(r).Yo(),await $h(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gi(r)}}(n,t),qh(n)&&jh(n)}async function Wl(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=dn(e);e.C_.add(3),await Br(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await mi(e)}async function dy(n,t){const e=q(n);t?(e.C_.delete(2),await mi(e)):t||(e.C_.add(2),await Br(e),e.M_.set("Unknown"))}function qn(n){return n.O_||(n.O_=function(e,r,s){const i=q(e);return i.A_(),new J_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:ry.bind(null,n),Io:sy.bind(null,n),a_:iy.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),da(n)?ha(n):n.M_.set("Unknown")):(await n.O_.stop(),Uh(n))})),n.O_}function je(n){return n.N_||(n.N_=function(e,r,s){const i=q(e);return i.A_(),new Z_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:ly.bind(null,n),Io:hy.bind(null,n),T_:uy.bind(null,n),I_:cy.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await gi(n)):(await n.N_.stop(),n.b_.length>0&&(R("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new fa(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(n,t){if(Ne("AsyncQueue",`${t}: ${n}`),Fr(n))return new T(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||S.comparator(e.key,r.key):(e,r)=>S.comparator(e.key,r.key),this.keyedMap=Jn(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new Rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Kl{constructor(){this.B_=new mt(S.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):N():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class On{constructor(t,e,r,s,i,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new On(t,e,Rn.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ui(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.k_=void 0,this.listeners=[]}}class py{constructor(){this.queries=new $n(t=>lh(t),ui),this.onlineState="Unknown",this.q_=new Set}}async function Bh(n,t){const e=q(n),r=t.query;let s=!1,i=e.queries.get(r);if(i||(s=!0,i=new fy),s)try{i.k_=await e.onListen(r)}catch(o){const a=pa(o,`Initialization of query '${gn(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.listeners.push(t),t.Q_(e.onlineState),i.k_&&t.K_(i.k_)&&ma(e)}async function zh(n,t){const e=q(n),r=t.query;let s=!1;const i=e.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return e.queries.delete(r),e.onUnlisten(r)}function my(n,t){const e=q(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&ma(e)}function gy(n,t,e){const r=q(n),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(e);r.queries.delete(t)}function ma(n){n.q_.forEach(t=>{t.next()})}class Gh{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new On(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=On.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.key=t}}class Kh{constructor(t){this.key=t}}class _y{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=z(),this.mutatedKeys=z(),this._a=uh(t),this.aa=new Rn(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new Kl,s=e?e.aa:this.aa;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,h)=>{const d=s.get(c),f=ci(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?E!==_&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this._a(f,l)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),i=_?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const i=t.la.L_();i.sort((u,c)=>function(d,f){const E=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return E(d)-E(f)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,i.length!==0||l?{snapshot:new On(this.query,t.aa,s,i,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Kl,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=z(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new Kh(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new Wh(r))}),e}da(t){this.ia=t.ls,this.oa=z();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return On.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class yy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class vy{constructor(t){this.key=t,this.Ra=!1}}class Ty{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new $n(a=>lh(a),ui),this.fa=new Map,this.ga=new Set,this.pa=new mt(S.comparator),this.ya=new Map,this.wa=new oa,this.Sa={},this.ba=new Map,this.Da=bn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Ey(n,t){const e=Ny(n);let r,s;const i=e.ma.get(t);if(i)r=i.targetId,e.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await G_(e.localStore,ye(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Iy(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Lh(e.remoteStore,o)}return s}async function Iy(n,t,e,r,s){n.va=(h,d,f)=>async function(_,v,D,J){let B=v.view.ca(D);B.Zi&&(B=await Bl(_.localStore,v.query,!1).then(({documents:et})=>v.view.ca(et,B)));const H=J&&J.targetChanges.get(v.targetId),tt=v.view.applyChanges(B,_.isPrimaryClient,H);return Ql(_,v.targetId,tt.Ta),tt.snapshot}(n,h,d,f);const i=await Bl(n.localStore,t,!0),o=new _y(t,i.ls),a=o.ca(i.documents),l=jr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,l);Ql(n,e,u.Ta);const c=new yy(t,e,o);return n.ma.set(t,c),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),u.snapshot}async function wy(n,t){const e=q(n),r=e.ma.get(t),s=e.fa.get(r.targetId);if(s.length>1)return e.fa.set(r.targetId,s.filter(i=>!ui(i,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await co(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),xh(e.remoteStore,r.targetId),ho(e,r.targetId)}).catch(xr)):(ho(e,r.targetId),await co(e.localStore,r.targetId,!0))}async function Ay(n,t,e){const r=Dy(n);try{const s=await function(o,a){const l=q(o),u=St.now(),c=a.reduce((f,E)=>f.add(E.key),z());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=De(),_=z();return l.ss.getEntries(f,c).next(v=>{E=v,E.forEach((D,J)=>{J.isValidDocument()||(_=_.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,E)).next(v=>{h=v;const D=[];for(const J of a){const B=Jg(J,h.get(J.key).overlayedDocument);B!=null&&D.push(new Ke(J.key,B,th(B.value.mapValue),te.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:hh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new mt(Y)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,s.batchId,e),await zr(r,s.changes),await gi(r.remoteStore)}catch(s){const i=pa(s,"Failed to persist write");e.reject(i)}}async function Hh(n,t){const e=q(n);try{const r=await j_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.ya.get(i);o&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?nt(o.Ra):s.removedDocuments.size>0&&(nt(o.Ra),o.Ra=!1))}),await zr(e,r,t)}catch(r){await xr(r)}}function Hl(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=q(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&ma(l)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ry(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new mt(S.comparator);o=o.insert(i,Vt.newNoDocument(i,O.min()));const a=z().add(i),l=new fi(O.min(),new Map,new mt(Y),o,a);await Hh(r,l),r.pa=r.pa.remove(i),r.ya.delete(t),ga(r)}else await co(r.localStore,t,!1).then(()=>ho(r,t,e)).catch(xr)}async function Py(n,t){const e=q(n),r=t.batch.batchId;try{const s=await q_(e.localStore,t);Yh(e,r,null),Qh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zr(e,s)}catch(s){await xr(s)}}async function Sy(n,t,e){const r=q(n);try{const s=await function(o,a){const l=q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(nt(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);Yh(r,t,e),Qh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zr(r,s)}catch(s){await xr(s)}}function Qh(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function Yh(n,t,e){const r=q(n);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Sa[r.currentUser.toKey()]=s}}function ho(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||Xh(n,r)})}function Xh(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(xh(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),ga(n))}function Ql(n,t,e){for(const r of e)r instanceof Wh?(n.wa.addReference(r.key,t),Cy(n,r)):r instanceof Kh?(R("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||Xh(n,r.key)):N()}function Cy(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(R("SyncEngine","New document in limbo: "+e),n.ga.add(r),ga(n))}function ga(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new S(pt.fromString(t)),r=n.Da.next();n.ya.set(r,new vy(e)),n.pa=n.pa.insert(e,r),Lh(n.remoteStore,new Fe(ye(ea(e.path)),r,"TargetPurposeLimboResolution",Qo._e))}}async function zr(n,t,e){const r=q(n),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=la.Qi(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,u){const c=q(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Fr(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),E=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(E);c.ts=c.ts.insert(d,_)}}}(r.localStore,i))}async function ky(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await bh(e.localStore,t);e.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new T(p.CANCELLED,o))})}),i.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zr(e,r._s)}}function Vy(n,t){const e=q(n),r=e.ya.get(t);if(r&&r.Ra)return z().add(r.key);{let s=z();const i=e.fa.get(t);if(!i)return s;for(const o of i){const a=e.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Ny(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ry.bind(null,t),t.Va.a_=my.bind(null,t.eventManager),t.Va.Fa=gy.bind(null,t.eventManager),t}function Dy(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Py.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sy.bind(null,t),t}class Yl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=pi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return $_(this.persistence,new F_,t.initialUser,this.serializer)}createPersistence(t){return new M_(aa.jr,this.serializer)}createSharedClientState(t){return new K_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class by{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ky.bind(null,this.syncEngine),await dy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new py}()}createDatastore(t){const e=pi(t.databaseInfo.databaseId),r=function(i){return new X_(i)}(t.databaseInfo);return function(i,o,a,l){return new ty(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new ny(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Hl(this.syncEngine,e,0),function(){return Gl.D()?new Gl:new H_}())}createSyncEngine(t,e){return function(s,i,o,a,l,u,c){const h=new Ty(s,i,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=q(e);R("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Br(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Ne("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(s,i){const o=q(s),a=wr(o.serializer)+"/documents",l={documents:i.map(d=>Os(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,l,i.length),c=new Map;u.forEach(d=>{const f=h_(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return i.forEach(d=>{const f=c.get(d.toString());nt(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new na(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=S.fromPath(r);this.mutations.push(new Eh(s,this.precondition(s)))}),await async function(r,s){const i=q(r),o=wr(i.serializer)+"/documents",a={writes:s.map(l=>kh(i.serializer,l))};await i.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw N();e=O.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new T(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(O.min())?te.exists(!1):te.updateTime(e):te.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(O.min()))throw new T(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return te.updateTime(e)}return te.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.Wa=r.maxAttempts,this.zo=new ua(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const t=new Oy(this.datastore),e=this.za(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.ja(s)}))}).catch(r=>{this.ja(r)})})}za(t){try{const e=this.updateFunction(t);return!Ur(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(t){this.Wa>0&&this.Ha(t)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(t)}Ha(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Ih(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Bt.UNAUTHENTICATED,this.clientId=Xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=pa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ui(n,t){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Xl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Fy(n);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(s=>Wl(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Wl(t.remoteStore,i)),n._onlineComponents=t}function xy(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Fy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ui(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!xy(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await Ui(n,new Yl)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Ui(n,new Yl);return n._offlineComponents}async function _a(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Xl(n,n._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Xl(n,new by))),n._onlineComponents}function Uy(n){return _a(n).then(t=>t.syncEngine)}function $y(n){return _a(n).then(t=>t.datastore)}async function Zh(n){const t=await _a(n),e=t.eventManager;return e.onListen=Ey.bind(null,t.syncEngine),e.onUnlisten=wy.bind(null,t.syncEngine),e}function qy(n,t,e={}){const r=new _e;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const c=new Jh({next:d=>{o.enqueueAndForget(()=>zh(i,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gh(ea(a.path),c,{includeMetadataChanges:!0,J_:!0});return Bh(i,h)}(await Zh(n),n.asyncQueue,t,e,r)),r.promise}function jy(n,t,e={}){const r=new _e;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const c=new Jh({next:d=>{o.enqueueAndForget(()=>zh(i,h)),d.fromCache&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gh(a,c,{includeMetadataChanges:!0,J_:!0});return Bh(i,h)}(await Zh(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function td(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,t,e){if(!e)throw new T(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function By(n,t,e,r){if(t===!0&&r===!0)throw new T(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Zl(n){if(!S.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tu(n){if(S.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _i(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":N()}function Be(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new T(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=_i(n);throw new T(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new T(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}By("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=td((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ug;switch(r.type){case"firstParty":return new fg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Jl.get(e);r&&(R("ComponentProvider","Removing Datastore"),Jl.delete(e),r.terminate())}(this),Promise.resolve()}}function zy(n,t,e,r={}){var s;const i=(n=Be(n,yi))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Bt.MOCK_USER;else{a=Od(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Bt(u)}n._authCredentials=new cg(new Yc(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new jn(this.firestore,t,this._query)}}class Zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zt(this.firestore,t,this._key)}}class Ue extends jn{constructor(t,e,r){super(t,e,ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zt(this.firestore,null,new S(t))}withConverter(t){return new Ue(this.firestore,t,this._path)}}function nd(n,t,...e){if(n=Nt(n),ed("collection","path",t),n instanceof yi){const r=pt.fromString(t,...e);return tu(r),new Ue(n,null,r)}{if(!(n instanceof Zt||n instanceof Ue))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return tu(r),new Ue(n.firestore,null,r)}}function Ls(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=Xc.newId()),ed("doc","path",t),n instanceof yi){const r=pt.fromString(t,...e);return Zl(r),new Zt(n,null,new S(r))}{if(!(n instanceof Zt||n instanceof Ue))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return Zl(r),new Zt(n.firestore,n instanceof Ue?n.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ua(this,"async_queue_retry"),this.iu=()=>{const e=Fi();e&&R("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=Fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Fi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new _e;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Fr(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ne("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const s=fa.createAndSchedule(this,t,e,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&N()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class Gr extends yi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Gy}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rd(this),this._firestoreClient.terminate()}}function en(n,t){const e=typeof n=="object"?n:pu(),r=typeof n=="string"?n:t||"(default)",s=mo(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bd("firestore");i&&zy(s,...i)}return s}function vi(n){return n._firestoreClient||rd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function rd(n){var t,e,r;const s=n._freezeSettings(),i=function(a,l,u,c){return new Rg(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,td(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Ly(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new un(Wt.fromBase64String(t))}catch(e){throw new T(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new un(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new T(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Y(this._lat,t._lat)||Y(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=/^__.*__$/;class Ky{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new qr(t,this.data,e,this.fieldTransforms)}}class sd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function id(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class Ta{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Ta(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return xs(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(id(this.Iu)&&Wy.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Hy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||pi(t)}pu(t,e,r,s=!1){return new Ta({Iu:t,methodName:e,gu:r,path:Ut.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ea(n){const t=n._freezeSettings(),e=pi(n._databaseId);return new Hy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function od(n,t,e,r,s,i={}){const o=n.pu(i.merge||i.mergeFields?2:0,t,e,s);Ia("Data must be an object, but it was:",o,r);const a=ad(r,o);let l,u;if(i.merge)l=new ne(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=fo(t,h,e);if(!o.contains(d))throw new T(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ud(c,d)||c.push(d)}l=new ne(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Ky(new Qt(a),l,u)}class Ei extends ya{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ei}}function Qy(n,t,e,r){const s=n.pu(1,t,e);Ia("Data must be an object, but it was:",s,r);const i=[],o=Qt.empty();hn(r,(l,u)=>{const c=wa(t,l,e);u=Nt(u);const h=s.Ru(c);if(u instanceof Ei)i.push(c);else{const d=Wr(u,h);d!=null&&(i.push(c),o.set(c,d))}});const a=new ne(i);return new sd(o,a,s.fieldTransforms)}function Yy(n,t,e,r,s,i){const o=n.pu(1,t,e),a=[fo(t,r,e)],l=[s];if(i.length%2!=0)throw new T(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(fo(t,i[d])),l.push(i[d+1]);const u=[],c=Qt.empty();for(let d=a.length-1;d>=0;--d)if(!ud(u,a[d])){const f=a[d];let E=l[d];E=Nt(E);const _=o.Ru(f);if(E instanceof Ei)u.push(f);else{const v=Wr(E,_);v!=null&&(u.push(f),c.set(f,v))}}const h=new ne(u);return new sd(c,h,o.fieldTransforms)}function Xy(n,t,e,r=!1){return Wr(e,n.pu(r?4:3,t))}function Wr(n,t){if(ld(n=Nt(n)))return Ia("Unsupported field value:",t,n),ad(n,t);if(n instanceof ya)return function(r,s){if(!id(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Wr(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=St.fromDate(r);return{timestampValue:bs(s.serializer,i)}}if(r instanceof St){const i=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bs(s.serializer,i)}}if(r instanceof va)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:Ph(s.serializer,r._byteString)};if(r instanceof Zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ia(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${_i(r)}`)}(n,t)}function ad(n,t){const e={};return Jc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hn(n,(r,s)=>{const i=Wr(s,t.Eu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof va||n instanceof un||n instanceof Zt||n instanceof ya)}function Ia(n,t,e){if(!ld(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=_i(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function fo(n,t,e){if((t=Nt(t))instanceof Ti)return t._internalPath;if(typeof t=="string")return wa(n,t);throw xs("Field path arguments must be of type string or ",n,!1,void 0,e)}const Jy=new RegExp("[~\\*/\\[\\]]");function wa(n,t,e){if(t.search(Jy)>=0)throw xs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ti(...t.split("."))._internalPath}catch{throw xs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function xs(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new T(p.INVALID_ARGUMENT,a+n+l)}function ud(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Zy extends Fs{data(){return super.data()}}function cd(n,t){return typeof t=="string"?wa(n,t):t instanceof Ti?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aa{}class ev extends Aa{}function hd(n,t,...e){let r=[];t instanceof Aa&&r.push(t),r=r.concat(e),function(i){const o=i.filter(l=>l instanceof Pa).length,a=i.filter(l=>l instanceof Ra).length;if(o>1||o>0&&a>0)throw new T(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ra extends ev{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ra(t,e,r)}_apply(t){const e=this._parse(t);return dd(t._query,e),new jn(t.firestore,t.converter,oo(t._query,e))}_parse(t){const e=Ea(t.firestore);return function(i,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ru(h,c);const f=[];for(const E of h)f.push(nu(l,i,E));d={arrayValue:{values:f}}}else d=nu(l,i,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ru(h,c),d=Xy(a,o,h,c==="in"||c==="not-in");return Rt.create(u,c,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Pa extends Aa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Pa(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ue.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)dd(o,l),o=oo(o,l)}(t._query,e),new jn(t.firestore,t.converter,oo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function nu(n,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new T(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ah(t)&&e.indexOf("/")!==-1)throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(pt.fromString(e));if(!S.isDocumentKey(r))throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pl(n,new S(r))}if(e instanceof Zt)return Pl(n,e._key);throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_i(e)}.`)}function ru(n,t){if(!Array.isArray(n)||n.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dd(n,t){const e=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class fd{convertValue(t,e="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(an(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw N()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new va(At(t.latitude),At(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Xo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yr(t));default:return null}}convertTimestamp(t){const e=qe(t);return new St(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=pt.fromString(t);nt(Dh(r));const s=new vr(r.get(1),r.get(3)),i=new S(r.popFirst(5));return s.isEqual(e)||Ne(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class nv extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sa extends Fs{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(cd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class hs extends Sa{data(t={}){return super.data(t)}}class rv{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Tn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new hs(this._firestore,this._userDataWriter,r.key,r,new Tn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new hs(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Tn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new hs(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Tn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:sv(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function sv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){n=Be(n,Zt);const t=Be(n.firestore,Gr);return qy(vi(t),n._key).then(e=>lv(t,n,e))}class Ca extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}function md(n){n=Be(n,jn);const t=Be(n.firestore,Gr),e=vi(t),r=new Ca(t);return tv(n._query),jy(e,n._query).then(s=>new rv(t,r,n,s))}function ov(n,t,e){n=Be(n,Zt);const r=Be(n.firestore,Gr),s=pd(n.converter,t,e);return av(r,[od(Ea(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,te.none())])}function av(n,t){return function(r,s){const i=new _e;return r.asyncQueue.enqueueAndForget(async()=>Ay(await Uy(r),s,i)),i.promise}(vi(n),t)}function lv(n,t,e){const r=e.docs.get(t._key),s=new Ca(n);return new Sa(n,s,t._key,r,new Tn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const uv={maxAttempts:5};function Qn(n,t){if((n=Nt(n)).firestore!==t)throw new T(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cv extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Ea(e)}get(e){const r=Qn(e,this._firestore),s=new nv(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return N();const o=i[0];if(o.isFoundDocument())return new Fs(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Fs(this._firestore,s,r._key,null,r.converter);throw N()})}set(e,r,s){const i=Qn(e,this._firestore),o=pd(i.converter,r,s),a=od(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(e,r,s,...i){const o=Qn(e,this._firestore);let a;return a=typeof(r=Nt(r))=="string"||r instanceof Ti?Yy(this._dataReader,"Transaction.update",o._key,r,s,i):Qy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Qn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Qn(t,this._firestore),r=new Ca(this._firestore);return super.get(t).then(s=>new Sa(this._firestore,r,e._key,s._document,new Tn(!1,!1),e.converter))}}function hv(n,t,e){n=Be(n,Gr);const r=Object.assign(Object.assign({},uv),e);return function(i){if(i.maxAttempts<1)throw new T(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const l=new _e;return i.asyncQueue.enqueueAndForget(async()=>{const u=await $y(i);new My(i.asyncQueue,u,a,o,l).run()}),l.promise}(vi(n),s=>t(new cv(n,s)),r)}(function(t,e=!0){(function(s){Un=s})(Mn),$i(new qi("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Gr(new hg(r.getProvider("auth-internal")),new mg(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vr(u.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ms(Il,"4.3.2",t),ms(Il,"4.3.2","esm2017")})();const dv=async()=>{xd();const n=await fv(),t=await mv();return{settings:n,supertags:t}},fv=async()=>{var n;try{const{currentUser:t}=ze();if(t)return(n=(await iv(Ls(en(),"users",t.uid))).data())==null?void 0:n.preferences}catch(t){console.warn("Failed to get user document:",t);return}},pv=async n=>{try{const{currentUser:t}=ze();t&&await ov(Ls(en(),"users",t.uid),n,{merge:!0})}catch(t){console.warn("Failed to save user document:",t)}},mv=async()=>{try{const{currentUser:n}=ze();if(n){const t=await md(hd(nd(en(),`users/${n.uid}/supertags`))),e=[];return t.forEach(r=>{const s=r.data();e.push(Md(r.id,s.description,Object.entries(s.tags).map(i=>Ld(i[1],i[0]))))}),e}}catch(n){console.warn("Failed to get user document:",n);return}},gv=async n=>{try{const{currentUser:t}=ze();t&&await hv(en(),async e=>{(await md(hd(nd(en(),`users/${t.uid}/supertags`)))).forEach(async s=>e.delete(Ls(en(),`users/${t.uid}/supertags/${s.id}`))),n.map(s=>e.set(Ls(en(),`users/${t.uid}/supertags`,s.name),{description:s.description,tags:Object.fromEntries(s.tags.map(i=>[i.name,i.modifier]))}))})}catch(t){console.warn("Failed to save user document:",t)}},_v=async(n,t)=>{Fd(),await pv(n),await gv(t)},yv=()=>{const n=Ud(!1);return ze().onAuthStateChanged(t=>{n.set(t!==null)}),n},vv=yv();const{document:su}=yd;function iu(n,t,e){const r=n.slice();return r[26]=t[e],r}function Tv(n){let t;return{c(){t=Yt("Account")},l(e){t=Xt(e,"Account")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function Ev(n){let t;return{c(){t=Yt("Supertags")},l(e){t=Xt(e,"Supertags")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function ou(n){let t,e=`You don't have any supertags yet. You can create them when you have more than one tag
				active.`,r,s,i="NOTE: If you had supertags before, please try signing in with Google below and loading them.";return{c(){t=it("p"),t.textContent=e,r=G(),s=it("p"),s.textContent=i,this.h()},l(o){t=ot(o,"P",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-u30t20"&&(t.textContent=e),r=W(o),s=ot(o,"P",{class:!0,"data-svelte-h":!0}),oe(s)!=="svelte-1p8u7b5"&&(s.textContent=i),this.h()},h(){dt(t,"class","svelte-1jfbuy4"),dt(s,"class","svelte-1jfbuy4")},m(o,a){X(o,t,a),X(o,r,a),X(o,s,a)},d(o){o&&(M(t),M(r),M(s))}}}function au(n){let t,e;return t=new Yd({props:{supertag:n[26]}}),t.$on("remove",n[13]),t.$on("edit",n[14]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.supertag=r[26]),t.$set(i)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Iv(n){let t;return{c(){t=Yt("Import/Export Data")},l(e){t=Xt(e,"Import/Export Data")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function wv(n){let t,e="Download Config File";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-wwbsqq"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,s){X(r,t,s)},p:ve,d(r){r&&M(t)}}}function Av(n){let t,e="Load Config File";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-1ld4bre"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,s){X(r,t,s)},p:ve,d(r){r&&M(t)}}}function Rv(n){let t;return{c(){t=Yt("Google Account Syncing")},l(e){t=Xt(e,"Google Account Syncing")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function Pv(n){let t,e;return t=new Ce({props:{title:"Sign in with google to backup data",$$slots:{default:[Cv]},$$scope:{ctx:n}}}),t.$on("click",n[18]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s&536870912&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Sv(n){let t,e,r,s,i,o;return t=new Ce({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[kv]},$$scope:{ctx:n}}}),t.$on("click",n[15]),r=new Ce({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Vv]},$$scope:{ctx:n}}}),r.$on("click",n[16]),i=new Ce({props:{title:"Sign out",$$slots:{default:[Nv]},$$scope:{ctx:n}}}),i.$on("click",n[17]),{c(){lt(t.$$.fragment),e=G(),lt(r.$$.fragment),s=G(),lt(i.$$.fragment)},l(a){ut(t.$$.fragment,a),e=W(a),ut(r.$$.fragment,a),s=W(a),ut(i.$$.fragment,a)},m(a,l){ct(t,a,l),X(a,e,l),ct(r,a,l),X(a,s,l),ct(i,a,l),o=!0},p(a,l){const u={};l&536870912&&(u.$$scope={dirty:l,ctx:a}),t.$set(u);const c={};l&536870912&&(c.$$scope={dirty:l,ctx:a}),r.$set(c);const h={};l&536870912&&(h.$$scope={dirty:l,ctx:a}),i.$set(h)},i(a){o||(k(t.$$.fragment,a),k(r.$$.fragment,a),k(i.$$.fragment,a),o=!0)},o(a){U(t.$$.fragment,a),U(r.$$.fragment,a),U(i.$$.fragment,a),o=!1},d(a){a&&(M(e),M(s)),ht(t,a),ht(r,a),ht(i,a)}}}function Cv(n){let t;return{c(){t=Yt("Connect Google User")},l(e){t=Xt(e,"Connect Google User")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function kv(n){let t,e="Load Config";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-g2l2uz"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,s){X(r,t,s)},p:ve,d(r){r&&M(t)}}}function Vv(n){let t,e="Save config";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=ot(r,"SPAN",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-kmcvvq"&&(t.textContent=e),this.h()},h(){dt(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,s){X(r,t,s)},p:ve,d(r){r&&M(t)}}}function Nv(n){let t;return{c(){t=Yt("Sign Out")},l(e){t=Xt(e,"Sign Out")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function Dv(n){let t;return{c(){t=Yt("Delete Data")},l(e){t=Xt(e,"Delete Data")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function bv(n){let t;return{c(){t=Yt("Delete Data")},l(e){t=Xt(e,"Delete Data")},m(e,r){X(e,t,r)},d(e){e&&M(t)}}}function lu(n){let t,e;return t=new js({props:{title:"Load Data",warning:"This will replace all your current settings with settings save online. Are you sure you want to do that?",labelConfirm:"Yes, load settings.",labelCancel:"Cancel"}}),t.$on("confirm",n[20]),t.$on("close",n[21]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:ve,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function uu(n){let t,e;return t=new js({props:{title:"Save data online",warning:"This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?",labelConfirm:"Yes, backup online",labelCancel:"Cancel"}}),t.$on("confirm",n[22]),t.$on("close",n[23]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:ve,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function cu(n){let t,e;return t=new js({props:{title:"Delete Data",warning:"This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?",labelConfirm:"Yes, delete it.",labelCancel:"Cancel"}}),t.$on("confirm",n[9]),t.$on("close",n[24]),{c(){lt(t.$$.fragment)},l(r){ut(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:ve,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){ht(t,r)}}}function Ov(n){let t,e,r,s,i,o,a,l,u,c,h,d,f,E="Load and save preferences and supertags to and from a file.",_,v,D,J,B,H,tt,et,at,yt="Load and save preferences and supertags to and from Google.",Ot,Q,j,Mt,I,F,w,A,P,Ct,C,V,Pt;r=new wd({props:{$$slots:{default:[Tv]},$$scope:{ctx:n}}}),i=new Kr({props:{$$slots:{default:[Ev]},$$scope:{ctx:n}}});let gt=n[3].items.length===0&&ou(),ce=Pn(n[3].items),st=[];for(let g=0;g<ce.length;g+=1)st[g]=au(iu(n,ce,g));const Lt=g=>U(st[g],1,1,()=>{st[g]=null});h=new Kr({props:{$$slots:{default:[Iv]},$$scope:{ctx:n}}}),D=new Ce({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[wv]},$$scope:{ctx:n}}}),D.$on("click",n[11]),B=new Ce({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Av]},$$scope:{ctx:n}}}),B.$on("click",n[12]),tt=new Kr({props:{$$slots:{default:[Rv]},$$scope:{ctx:n}}});const Bn=[Sv,Pv],be=[];function ka(g,L){return g[8]?0:1}j=ka(n),Mt=be[j]=Bn[j](n),F=new Kr({props:{$$slots:{default:[Dv]},$$scope:{ctx:n}}}),A=new Ce({props:{title:"Delete all your data.",$$slots:{default:[bv]},$$scope:{ctx:n}}}),A.$on("click",n[19]);let vt=n[1]&&lu(n),Tt=n[2]&&uu(n),Et=n[0]&&cu(n);return{c(){t=G(),e=it("section"),lt(r.$$.fragment),s=G(),lt(i.$$.fragment),o=G(),a=it("div"),gt&&gt.c(),l=G(),u=it("ul");for(let g=0;g<st.length;g+=1)st[g].c();c=G(),lt(h.$$.fragment),d=G(),f=it("p"),f.textContent=E,_=G(),v=it("div"),lt(D.$$.fragment),J=G(),lt(B.$$.fragment),H=G(),lt(tt.$$.fragment),et=G(),at=it("p"),at.textContent=yt,Ot=G(),Q=it("div"),Mt.c(),I=G(),lt(F.$$.fragment),w=G(),lt(A.$$.fragment),P=G(),vt&&vt.c(),Ct=G(),Tt&&Tt.c(),C=G(),Et&&Et.c(),V=ps(),this.h()},l(g){_d("svelte-814hib",su.head).forEach(M),t=W(g),e=ot(g,"SECTION",{class:!0});var Z=Ht(e);ut(r.$$.fragment,Z),s=W(Z),ut(i.$$.fragment,Z),o=W(Z),a=ot(Z,"DIV",{class:!0});var He=Ht(a);gt&&gt.l(He),l=W(He),u=ot(He,"UL",{});var zn=Ht(u);for(let fn=0;fn<st.length;fn+=1)st[fn].l(zn);zn.forEach(M),He.forEach(M),c=W(Z),ut(h.$$.fragment,Z),d=W(Z),f=ot(Z,"P",{class:!0,"data-svelte-h":!0}),oe(f)!=="svelte-rgkk1o"&&(f.textContent=E),_=W(Z),v=ot(Z,"DIV",{class:!0});var Qe=Ht(v);ut(D.$$.fragment,Qe),J=W(Qe),ut(B.$$.fragment,Qe),Qe.forEach(M),H=W(Z),ut(tt.$$.fragment,Z),et=W(Z),at=ot(Z,"P",{class:!0,"data-svelte-h":!0}),oe(at)!=="svelte-pw0g5c"&&(at.textContent=yt),Ot=W(Z),Q=ot(Z,"DIV",{class:!0});var Gn=Ht(Q);Mt.l(Gn),Gn.forEach(M),I=W(Z),ut(F.$$.fragment,Z),w=W(Z),ut(A.$$.fragment,Z),Z.forEach(M),P=W(g),vt&&vt.l(g),Ct=W(g),Tt&&Tt.l(g),C=W(g),Et&&Et.l(g),V=ps(),this.h()},h(){su.title="kurosearch - Account",dt(a,"class","supertags"),dt(f,"class","svelte-1jfbuy4"),dt(v,"class","button-row svelte-1jfbuy4"),dt(at,"class","svelte-1jfbuy4"),dt(Q,"class","button-row svelte-1jfbuy4"),dt(e,"class","svelte-1jfbuy4")},m(g,L){X(g,t,L),X(g,e,L),ct(r,e,null),b(e,s),ct(i,e,null),b(e,o),b(e,a),gt&&gt.m(a,null),b(a,l),b(a,u);for(let Z=0;Z<st.length;Z+=1)st[Z]&&st[Z].m(u,null);b(e,c),ct(h,e,null),b(e,d),b(e,f),b(e,_),b(e,v),ct(D,v,null),b(v,J),ct(B,v,null),b(e,H),ct(tt,e,null),b(e,et),b(e,at),b(e,Ot),b(e,Q),be[j].m(Q,null),b(e,I),ct(F,e,null),b(e,w),ct(A,e,null),X(g,P,L),vt&&vt.m(g,L),X(g,Ct,L),Tt&&Tt.m(g,L),X(g,C,L),Et&&Et.m(g,L),X(g,V,L),Pt=!0},p(g,[L]){const Z={};L&536870912&&(Z.$$scope={dirty:L,ctx:g}),r.$set(Z);const He={};if(L&536870912&&(He.$$scope={dirty:L,ctx:g}),i.$set(He),g[3].items.length===0?gt||(gt=ou(),gt.c(),gt.m(a,l)):gt&&(gt.d(1),gt=null),L&8){ce=Pn(g[3].items);let Kt;for(Kt=0;Kt<ce.length;Kt+=1){const Da=iu(g,ce,Kt);st[Kt]?(st[Kt].p(Da,L),k(st[Kt],1)):(st[Kt]=au(Da),st[Kt].c(),k(st[Kt],1),st[Kt].m(u,null))}for(Ie(),Kt=ce.length;Kt<st.length;Kt+=1)Lt(Kt);we()}const zn={};L&536870912&&(zn.$$scope={dirty:L,ctx:g}),h.$set(zn);const Qe={};L&536870912&&(Qe.$$scope={dirty:L,ctx:g}),D.$set(Qe);const Gn={};L&536870912&&(Gn.$$scope={dirty:L,ctx:g}),B.$set(Gn);const fn={};L&536870912&&(fn.$$scope={dirty:L,ctx:g}),tt.$set(fn);let Ii=j;j=ka(g),j===Ii?be[j].p(g,L):(Ie(),U(be[Ii],1,1,()=>{be[Ii]=null}),we(),Mt=be[j],Mt?Mt.p(g,L):(Mt=be[j]=Bn[j](g),Mt.c()),k(Mt,1),Mt.m(Q,null));const Va={};L&536870912&&(Va.$$scope={dirty:L,ctx:g}),F.$set(Va);const Na={};L&536870912&&(Na.$$scope={dirty:L,ctx:g}),A.$set(Na),g[1]?vt?(vt.p(g,L),L&2&&k(vt,1)):(vt=lu(g),vt.c(),k(vt,1),vt.m(Ct.parentNode,Ct)):vt&&(Ie(),U(vt,1,1,()=>{vt=null}),we()),g[2]?Tt?(Tt.p(g,L),L&4&&k(Tt,1)):(Tt=uu(g),Tt.c(),k(Tt,1),Tt.m(C.parentNode,C)):Tt&&(Ie(),U(Tt,1,1,()=>{Tt=null}),we()),g[0]?Et?(Et.p(g,L),L&1&&k(Et,1)):(Et=cu(g),Et.c(),k(Et,1),Et.m(V.parentNode,V)):Et&&(Ie(),U(Et,1,1,()=>{Et=null}),we())},i(g){if(!Pt){k(r.$$.fragment,g),k(i.$$.fragment,g);for(let L=0;L<ce.length;L+=1)k(st[L]);k(h.$$.fragment,g),k(D.$$.fragment,g),k(B.$$.fragment,g),k(tt.$$.fragment,g),k(Mt),k(F.$$.fragment,g),k(A.$$.fragment,g),k(vt),k(Tt),k(Et),Pt=!0}},o(g){U(r.$$.fragment,g),U(i.$$.fragment,g),st=st.filter(Boolean);for(let L=0;L<st.length;L+=1)U(st[L]);U(h.$$.fragment,g),U(D.$$.fragment,g),U(B.$$.fragment,g),U(tt.$$.fragment,g),U(Mt),U(F.$$.fragment,g),U(A.$$.fragment,g),U(vt),U(Tt),U(Et),Pt=!1},d(g){g&&(M(t),M(e),M(P),M(Ct),M(C),M(V)),ht(r),ht(i),gt&&gt.d(),po(st,g),ht(h),ht(D),ht(B),ht(tt),be[j].d(),ht(F),ht(A),vt&&vt.d(g),Tt&&Tt.d(g),Et&&Et.d(g)}}}function Mv(n,t,e){let r,s,i,o,a,l;pn(n,Ye,I=>e(3,r=I)),pn(n,Ai,I=>e(4,s=I)),pn(n,Ri,I=>e(5,i=I)),pn(n,Pi,I=>e(6,o=I)),pn(n,wi,I=>e(7,a=I)),pn(n,vv,I=>e(8,l=I));let u=!1,c=!1,h=!1;const d=()=>{Ye.reset()},f=()=>({[It.LocalstorageEnabled]:a,[It.Theme]:o,[It.BlockedContent]:i,[It.ResultColumns]:s,[It.Supertags]:r}),E=async()=>{const I=f();try{const F=JSON.stringify(I,void 0,2),w="kurosearch-config.json";if("showSaveFilePicker"in window){const P=await(await showSaveFilePicker({suggestedName:w})).createWritable();await P.write(F),await P.close()}else{const A=document.createElement("a"),P=new Blob([F],{type:"text/plain"});A.href=URL.createObjectURL(P),A.download=w,A.click(),URL.revokeObjectURL(A.href)}}catch(F){console.error(F)}},_=async()=>new Promise(async(I,F)=>{try{if("showOpenFilePicker"in window){const[w]=await showOpenFilePicker(),A=await w.getFile();I(await A.text())}else{let w;const A=P=>{var Ct=P.target.files[0];if(Ct){var C=new FileReader;C.onload=V=>{I(V.target.result),document.body.removeChild(w)},C.readAsText(Ct)}};w=document.createElement("input"),w.type="file",w.style.display="none",w.onchange=A,document.body.appendChild(w),w.click()}}catch(w){F(w)}});return[u,c,h,r,s,i,o,a,l,d,f,E,async()=>{try{const I=await _(),F=JSON.parse(I);ae(wi,a=F[It.LocalstorageEnabled],a),ae(Pi,o=F[It.Theme],o),ae(Ri,i=F[It.BlockedContent],i),ae(Ai,s=F[It.ResultColumns],s),ae(Ye,r=F[It.Supertags],r)}catch(I){console.error(I)}},I=>Ye.remove(I.detail),I=>{Ye.update(I.detail.oldName,I.detail.newSupertag)},()=>e(1,c=!0),()=>e(2,h=!0),()=>em(),()=>tm(),()=>e(0,u=!0),async()=>{const I=await dv();I.settings&&(I.settings[It.LocalstorageEnabled]&&ae(wi,a=I.settings[It.LocalstorageEnabled],a),I.settings[It.Theme]&&ae(Pi,o=I.settings[It.Theme],o),I.settings[It.BlockedContent]&&ae(Ri,i=I.settings[It.BlockedContent],i),I.settings[It.ResultColumns]&&ae(Ai,s=I.settings[It.ResultColumns],s),I.settings[It.Supertags]&&ae(Ye,r=I.settings[It.Supertags],r)),I.supertags&&ae(Ye,r.items=I.supertags,r)},()=>e(1,c=!1),async()=>{await _v(f(),r.items)},()=>e(2,h=!1),()=>e(0,u=!1)]}class aT extends $s{constructor(t){super(),qs(this,t,Mv,Ov,Us,{})}}export{aT as component};
