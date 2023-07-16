import{s as $i,f as ht,l as Xt,g as dt,h as Ht,m as Yt,d as L,j as gt,r as Oa,i as nt,u as b,F as pi,Q as wd,n as si,v as _e,K as fu,M as gi,E as pu,p as Ma,a as Q,y as ae,c as X,I as La,P as po,e as mi,x as Ad,C as pn,G as oe}from"../chunks/scheduler.88299003.js";import{S as Ui,i as qi,b as at,d as lt,m as ut,a as k,t as $,e as ct,f as Fa,g as Te,c as Ee}from"../chunks/index.15b414ac.js";import{e as Pn}from"../chunks/each.e59479a4.js";import{C as Bi,l as Is}from"../chunks/localstorage-enabled-store.efe5e438.js";import{D as Rd,r as ws}from"../chunks/Dialog.f8853b6f.js";import{T as xa}from"../chunks/TextInput.151dd205.js";import{S as Pd,n as Sd,s as Qe}from"../chunks/supertags-store.179ba08c.js";import{g as Cd}from"../chunks/tags.7dcf1347.js";import{a as $a}from"../chunks/format-tag.d6c065e3.js";import{M as Ua}from"../chunks/tag-modifier-data.021c0243.js";import{T as Pe}from"../chunks/TextButton.2f318c50.js";import{H as kd}from"../chunks/Heading1.cc3919c5.js";import{H as Hr}from"../chunks/Heading3.581258ce.js";import{b as As}from"../chunks/blocked-content-store.805c4a3d.js";import{t as Rs}from"../chunks/theme-store.7df6ee68.js";import{S as wt}from"../chunks/store-keys.3fb7abd8.js";import{r as sr,i as Vd,g as gu,a as Dd,b as Nd,c as Dt,_ as $s,C as Us,d as go,e as bd,f as mu,h as Od,S as Mn,E as mo,j as Md,k as Ld,q as wr,L as rn,m as ee,n as Fd,o as _u,F as ji,p as xd,s as $d,t as Ud,u as qd,v as Bd,w as jd}from"../chunks/analytics.cc91fa96.js";import{c as Kd,a as zd}from"../chunks/tag-utils.ceb6413c.js";import{w as Gd}from"../chunks/index.07c02568.js";function Wd(n){let t,e=$a(n[0].name)+"",r,i,s,o;return{c(){t=ht("button"),r=Xt(e),this.h()},l(a){t=dt(a,"BUTTON",{class:!0});var l=Ht(t);r=Yt(l,e),l.forEach(L),this.h()},h(){gt(t,"class",i=Oa(Ua[n[0].modifier])+" svelte-2k1w69")},m(a,l){nt(a,t,l),b(t,r),s||(o=[pi(t,"click",n[1]),pi(t,"contextmenu",wd(n[2]))],s=!0)},p(a,[l]){l&1&&e!==(e=$a(a[0].name)+"")&&si(r,e),l&1&&i!==(i=Oa(Ua[a[0].modifier])+" svelte-2k1w69")&&gt(t,"class",i)},i:_e,o:_e,d(a){a&&L(t),s=!1,fu(o)}}}function Hd(n,t,e){let{tag:r}=t;function i(o){gi.call(this,n,o)}function s(o){gi.call(this,n,o)}return n.$$set=o=>{"tag"in o&&e(0,r=o.tag)},[r,i,s]}class yu extends Ui{constructor(t){super(),qi(this,t,Hd,Wd,$i,{tag:0})}}function qa(n,t,e){const r=n.slice();return r[12]=t[e],r[14]=e,r}function Ba(n){let t,e;function r(){return n[7](n[14])}function i(){return n[8](n[14],n[12])}return t=new yu({props:{tag:n[12]}}),t.$on("click",r),t.$on("contextmenu",i),{c(){at(t.$$.fragment)},l(s){lt(t.$$.fragment,s)},m(s,o){ut(t,s,o),e=!0},p(s,o){n=s;const a={};o&1&&(a.tag=n[12]),t.$set(a)},i(s){e||(k(t.$$.fragment,s),e=!0)},o(s){$(t.$$.fragment,s),e=!1},d(s){ct(t,s)}}}function Qd(n){let t;return{c(){t=Xt("Save")},l(e){t=Yt(e,"Save")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function Xd(n){let t;return{c(){t=Xt("Cancel")},l(e){t=Yt(e,"Cancel")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function Yd(n){let t,e,r="Edit Supertag",i,s,o="Name",a,l,u,c,h,d="Description",f,E,_,y,C,W="Add or remove tags",x,G,Y,j,ot,vt,Ot,J,B;function P(V){n[4](V)}let Z={placeholder:"Name",autocomplete:"false"};n[0].name!==void 0&&(Z.value=n[0].name),l=new xa({props:Z}),Ma.push(()=>Fa(l,"value",P));function K(V){n[5](V)}let I={placeholder:"Description",autocomplete:"false"};n[0].description!==void 0&&(I.value=n[0].description),E=new xa({props:I}),Ma.push(()=>Fa(E,"value",K)),G=new Pd({props:{placeholder:"Search for tags",fetchSuggestions:Cd}}),G.$on("pick",n[6]);let A=Pn(n[0].tags),S=[];for(let V=0;V<A.length;V+=1)S[V]=Ba(qa(n,A,V));const Gt=V=>$(S[V],1,1,()=>{S[V]=null});return vt=new Pe({props:{title:"Save changes",$$slots:{default:[Qd]},$$scope:{ctx:n}}}),vt.$on("click",n[9]),J=new Pe({props:{type:"secondary",title:"Cancel",$$slots:{default:[Xd]},$$scope:{ctx:n}}}),J.$on("click",n[2]),{c(){t=ht("div"),e=ht("h3"),e.textContent=r,i=Q(),s=ht("span"),s.textContent=o,a=Q(),at(l.$$.fragment),c=Q(),h=ht("span"),h.textContent=d,f=Q(),at(E.$$.fragment),y=Q(),C=ht("span"),C.textContent=W,x=Q(),at(G.$$.fragment),Y=Q(),j=ht("ul");for(let V=0;V<S.length;V+=1)S[V].c();ot=Q(),at(vt.$$.fragment),Ot=Q(),at(J.$$.fragment),this.h()},l(V){t=dt(V,"DIV",{class:!0});var N=Ht(t);e=dt(N,"H3",{"data-svelte-h":!0}),ae(e)!=="svelte-1q4lkkx"&&(e.textContent=r),i=X(N),s=dt(N,"SPAN",{class:!0,"data-svelte-h":!0}),ae(s)!=="svelte-15ueaex"&&(s.textContent=o),a=X(N),lt(l.$$.fragment,N),c=X(N),h=dt(N,"SPAN",{class:!0,"data-svelte-h":!0}),ae(h)!=="svelte-rmspr8"&&(h.textContent=d),f=X(N),lt(E.$$.fragment,N),y=X(N),C=dt(N,"SPAN",{class:!0,"data-svelte-h":!0}),ae(C)!=="svelte-1ripwej"&&(C.textContent=W),x=X(N),lt(G.$$.fragment,N),Y=X(N),j=dt(N,"UL",{class:!0});var St=Ht(j);for(let _t=0;_t<S.length;_t+=1)S[_t].l(St);St.forEach(L),ot=X(N),lt(vt.$$.fragment,N),Ot=X(N),lt(J.$$.fragment,N),N.forEach(L),this.h()},h(){gt(s,"class","svelte-1hhm2px"),gt(h,"class","svelte-1hhm2px"),gt(C,"class","svelte-1hhm2px"),gt(j,"class","svelte-1hhm2px"),gt(t,"class","svelte-1hhm2px")},m(V,N){nt(V,t,N),b(t,e),b(t,i),b(t,s),b(t,a),ut(l,t,null),b(t,c),b(t,h),b(t,f),ut(E,t,null),b(t,y),b(t,C),b(t,x),ut(G,t,null),b(t,Y),b(t,j);for(let St=0;St<S.length;St+=1)S[St]&&S[St].m(j,null);b(t,ot),ut(vt,t,null),b(t,Ot),ut(J,t,null),B=!0},p(V,N){const St={};!u&&N&1&&(u=!0,St.value=V[0].name,La(()=>u=!1)),l.$set(St);const _t={};if(!_&&N&1&&(_=!0,_t.value=V[0].description,La(()=>_=!1)),E.$set(_t),N&1){A=Pn(V[0].tags);let Mt;for(Mt=0;Mt<A.length;Mt+=1){const Bn=qa(V,A,Mt);S[Mt]?(S[Mt].p(Bn,N),k(S[Mt],1)):(S[Mt]=Ba(Bn),S[Mt].c(),k(S[Mt],1),S[Mt].m(j,null))}for(Te(),Mt=A.length;Mt<S.length;Mt+=1)Gt(Mt);Ee()}const ce={};N&32768&&(ce.$$scope={dirty:N,ctx:V}),vt.$set(ce);const st={};N&32768&&(st.$$scope={dirty:N,ctx:V}),J.$set(st)},i(V){if(!B){k(l.$$.fragment,V),k(E.$$.fragment,V),k(G.$$.fragment,V);for(let N=0;N<A.length;N+=1)k(S[N]);k(vt.$$.fragment,V),k(J.$$.fragment,V),B=!0}},o(V){$(l.$$.fragment,V),$(E.$$.fragment,V),$(G.$$.fragment,V),S=S.filter(Boolean);for(let N=0;N<S.length;N+=1)$(S[N]);$(vt.$$.fragment,V),$(J.$$.fragment,V),B=!1},d(V){V&&L(t),ct(l),ct(E),ct(G),po(S,V),ct(vt),ct(J)}}}function Jd(n){let t,e;return t=new Rd({props:{$$slots:{default:[Yd]},$$scope:{ctx:n}}}),t.$on("close",n[10]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,[i]){const s={};i&32769&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function Zd(n,t,e){const r=pu(),i=()=>r("edit",{oldName:o.name,newSupertag:a}),s=()=>r("close");let{supertag:o}=t,a={...o,tags:[...o.tags]};function l(_){n.$$.not_equal(a.name,_)&&(a.name=_,e(0,a))}function u(_){n.$$.not_equal(a.description,_)&&(a.description=_,e(0,a))}const c=_=>{e(0,a.tags=[...a.tags,{modifier:_.detail.modifier,name:_.detail.name}],a)},h=_=>{a.tags.splice(_,1),e(0,a.tags=[...a.tags],a)},d=(_,y)=>{e(0,a.tags[_].modifier=Sd(y.modifier),a)},f=()=>{i(),s()};function E(_){gi.call(this,n,_)}return n.$$set=_=>{"supertag"in _&&e(3,o=_.supertag)},[a,i,s,o,l,u,c,h,d,f,E]}class tf extends Ui{constructor(t){super(),qi(this,t,Zd,Jd,$i,{supertag:3})}}function ja(n,t,e){const r=n.slice();return r[10]=t[e],r}function Ka(n){let t,e;return t=new yu({props:{tag:n[10]}}),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.tag=r[10]),t.$set(s)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function za(n){let t,e;return t=new Bi({props:{title:"Delete Supertag",warning:"Are you sure? You will not be able to undo it.",labelCancel:"No, keep it!",labelConfirm:"Yes, delete it."}}),t.$on("confirm",n[3]),t.$on("close",n[5]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p:_e,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function Ga(n){let t,e;return t=new tf({props:{supertag:n[0]}}),t.$on("close",n[7]),t.$on("edit",n[8]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.supertag=r[0]),t.$set(s)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function ef(n){let t,e,r=n[0].name+"",i,s,o,a=Object.keys(n[0].tags).length+"",l,u,c,h,d,f,E,_,y=(n[0].description||n[0].name)+"",C,W,x,G,Y,j,ot,vt,Ot,J=Pn(n[0].tags),B=[];for(let I=0;I<J.length;I+=1)B[I]=Ka(ja(n,J,I));const P=I=>$(B[I],1,1,()=>{B[I]=null});let Z=n[1]&&za(n),K=n[2]&&Ga(n);return{c(){t=ht("li"),e=ht("h3"),i=Xt(r),s=Q(),o=ht("small"),l=Xt(a),u=Xt(" tags"),c=Q(),h=ht("button"),d=Q(),f=ht("button"),E=Q(),_=ht("span"),C=Xt(y),W=Q(),x=ht("ol");for(let I=0;I<B.length;I+=1)B[I].c();G=Q(),Z&&Z.c(),Y=Q(),K&&K.c(),j=mi(),this.h()},l(I){t=dt(I,"LI",{class:!0});var A=Ht(t);e=dt(A,"H3",{class:!0});var S=Ht(e);i=Yt(S,r),S.forEach(L),s=X(A),o=dt(A,"SMALL",{class:!0});var Gt=Ht(o);l=Yt(Gt,a),u=Yt(Gt," tags"),Gt.forEach(L),c=X(A),h=dt(A,"BUTTON",{class:!0}),Ht(h).forEach(L),d=X(A),f=dt(A,"BUTTON",{class:!0}),Ht(f).forEach(L),E=X(A),_=dt(A,"SPAN",{class:!0});var V=Ht(_);C=Yt(V,y),V.forEach(L),W=X(A),x=dt(A,"OL",{class:!0});var N=Ht(x);for(let St=0;St<B.length;St+=1)B[St].l(N);N.forEach(L),A.forEach(L),G=X(I),Z&&Z.l(I),Y=X(I),K&&K.l(I),j=mi(),this.h()},h(){gt(e,"class","svelte-t8qa56"),gt(o,"class","svelte-t8qa56"),gt(h,"class","codicon codicon-edit svelte-t8qa56"),gt(f,"class","codicon codicon-close svelte-t8qa56"),gt(_,"class","svelte-t8qa56"),gt(x,"class","svelte-t8qa56"),gt(t,"class","svelte-t8qa56")},m(I,A){nt(I,t,A),b(t,e),b(e,i),b(t,s),b(t,o),b(o,l),b(o,u),b(t,c),b(t,h),b(t,d),b(t,f),b(t,E),b(t,_),b(_,C),b(t,W),b(t,x);for(let S=0;S<B.length;S+=1)B[S]&&B[S].m(x,null);nt(I,G,A),Z&&Z.m(I,A),nt(I,Y,A),K&&K.m(I,A),nt(I,j,A),ot=!0,vt||(Ot=[pi(h,"click",n[6]),pi(f,"click",n[4])],vt=!0)},p(I,[A]){if((!ot||A&1)&&r!==(r=I[0].name+"")&&si(i,r),(!ot||A&1)&&a!==(a=Object.keys(I[0].tags).length+"")&&si(l,a),(!ot||A&1)&&y!==(y=(I[0].description||I[0].name)+"")&&si(C,y),A&1){J=Pn(I[0].tags);let S;for(S=0;S<J.length;S+=1){const Gt=ja(I,J,S);B[S]?(B[S].p(Gt,A),k(B[S],1)):(B[S]=Ka(Gt),B[S].c(),k(B[S],1),B[S].m(x,null))}for(Te(),S=J.length;S<B.length;S+=1)P(S);Ee()}I[1]?Z?(Z.p(I,A),A&2&&k(Z,1)):(Z=za(I),Z.c(),k(Z,1),Z.m(Y.parentNode,Y)):Z&&(Te(),$(Z,1,1,()=>{Z=null}),Ee()),I[2]?K?(K.p(I,A),A&4&&k(K,1)):(K=Ga(I),K.c(),k(K,1),K.m(j.parentNode,j)):K&&(Te(),$(K,1,1,()=>{K=null}),Ee())},i(I){if(!ot){for(let A=0;A<J.length;A+=1)k(B[A]);k(Z),k(K),ot=!0}},o(I){B=B.filter(Boolean);for(let A=0;A<B.length;A+=1)$(B[A]);$(Z),$(K),ot=!1},d(I){I&&(L(t),L(G),L(Y),L(j)),po(B,I),Z&&Z.d(I),K&&K.d(I),vt=!1,fu(Ot)}}}function nf(n,t,e){const r=pu(),i=()=>r("remove",u),s=()=>e(1,c=!0),o=()=>e(1,c=!1),a=()=>e(2,h=!0),l=()=>e(2,h=!1);let{supertag:u}=t,c=!1,h=!1;function d(f){gi.call(this,n,f)}return n.$$set=f=>{"supertag"in f&&e(0,u=f.supertag)},[u,c,h,i,s,o,a,l,d]}class rf extends Ui{constructor(t){super(),qi(this,t,nf,ef,$i,{supertag:0})}}var sf="firebase",of="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(sf,of,"app");const af={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:11fa1fda0e14f1ac2dd021",measurementId:"G-27J3QXZ8YR"};Vd(af);function _o(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function vu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lf=vu,Tu=new mo("auth","Firebase",vu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new _u("@firebase/auth");function uf(n,...t){_i.logLevel<=rn.WARN&&_i.warn(`Auth (${Mn}): ${n}`,...t)}function oi(n,...t){_i.logLevel<=rn.ERROR&&_i.error(`Auth (${Mn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...t){throw yo(n,...t)}function pe(n,...t){return yo(n,...t)}function Eu(n,t,e){const r=Object.assign(Object.assign({},lf()),{[t]:e});return new mo("auth","Firebase",r).create(t,{appName:n.name})}function cf(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ye(n,"argument-error"),Eu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yo(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Tu.create(n,...t)}function U(n,t,...e){if(!n)throw yo(t,...e)}function we(n){const t="INTERNAL ASSERTION FAILED: "+n;throw oi(t),new Error(t)}function Se(n,t){n||we(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hf(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hf()||Od()||"connection"in navigator)?navigator.onLine:!0}function ff(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.shortDelay=t,this.longDelay=e,Se(e>t,"Short delay should be less than long delay!"),this.isMobile=Dd()||Nd()}get(){return df()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Iu{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Ar(3e4,6e4);function wu(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Rr(n,t,e,r,i={}){return Au(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=wr(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Iu.fetch()(Ru(n,n.config.apiHost,e,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Au(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pf),t);try{const i=new _f(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qr(n,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Eu(n,c,u);ye(n,c)}}catch(i){if(i instanceof ji)throw i;ye(n,"network-request-failed",{message:String(i)})}}async function mf(n,t,e,r,i={}){const s=await Rr(n,t,e,r,i);return"mfaPendingCredential"in s&&ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ru(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?vo(n.config,i):`${n.config.apiScheme}://${i}`}class _f{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(pe(this.auth,"network-request-failed")),gf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=pe(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n,t){return Rr(n,"POST","/v1/accounts:delete",t)}async function vf(n,t){return Rr(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Tf(n,t=!1){const e=Dt(n),r=await e.getIdToken(t),i=To(r);U(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jn(Ps(i.auth_time)),issuedAtTime:Jn(Ps(i.iat)),expirationTime:Jn(Ps(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ps(n){return Number(n)*1e3}function To(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=xd(e);return i?JSON.parse(i):(oi("Failed to decode base64 JWT payload"),null)}catch(i){return oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ef(n){const t=To(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof ji&&If(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function If({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await or(n,vf(e,{idToken:r}));U(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Pf(s.providerUserInfo):[],a=Rf(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pu(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function Af(n){const t=Dt(n);await yi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rf(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Pf(n){return n.map(t=>{var{providerId:e}=t,r=_o(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sf(n,t){const e=await Au(n,{},async()=>{const r=wr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ru(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ef(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sf(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new ar;return r&&(U(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class en{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=_o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await or(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Tf(this,t)}reload(){return Af(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await or(this,yf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,l,u,c;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,C=(u=e.createdAt)!==null&&u!==void 0?u:void 0,W=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:x,emailVerified:G,isAnonymous:Y,providerData:j,stsTokenManager:ot}=e;U(x&&ot,t,"internal-error");const vt=ar.fromJSON(this.name,ot);U(typeof x=="string",t,"internal-error"),be(h,t.name),be(d,t.name),U(typeof G=="boolean",t,"internal-error"),U(typeof Y=="boolean",t,"internal-error"),be(f,t.name),be(E,t.name),be(_,t.name),be(y,t.name),be(C,t.name),be(W,t.name);const Ot=new en({uid:x,auth:t,email:d,emailVerified:G,displayName:h,isAnonymous:Y,photoURL:E,phoneNumber:f,tenantId:_,stsTokenManager:vt,createdAt:C,lastLoginAt:W});return j&&Array.isArray(j)&&(Ot.providerData=j.map(J=>Object.assign({},J))),y&&(Ot._redirectEventId=y),Ot}static async _fromIdTokenResponse(t,e,r=!1){const i=new ar;i.updateFromServerResponse(e);const s=new en({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await yi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Su.type="NONE";const Qa=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,t,e){return`firebase:${n}:${t}:${e}`}class Tn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=ai("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?en._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Tn(Ae(Qa),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ae(Qa);const o=ai(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const c=await u._get(o);if(c){const h=en._fromJSON(t,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Tn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Tn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nu(t))return"Blackberry";if(bu(t))return"Webos";if(Eo(t))return"Safari";if((t.includes("chrome/")||ku(t))&&!t.includes("edge/"))return"Chrome";if(Du(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cu(n=ee()){return/firefox\//i.test(n)}function Eo(n=ee()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ku(n=ee()){return/crios\//i.test(n)}function Vu(n=ee()){return/iemobile/i.test(n)}function Du(n=ee()){return/android/i.test(n)}function Nu(n=ee()){return/blackberry/i.test(n)}function bu(n=ee()){return/webos/i.test(n)}function Ki(n=ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cf(n=ee()){var t;return Ki(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kf(){return Fd()&&document.documentMode===10}function Ou(n=ee()){return Ki(n)||Du(n)||bu(n)||Nu(n)||/windows phone/i.test(n)||Vu(n)}function Vf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n,t=[]){let e;switch(n){case"Browser":e=Xa(ee());break;case"Worker":e=`${Xa(ee())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Mn}/${r}`}async function Lu(n,t){return Rr(n,"GET","/v2/recaptchaConfig",wu(n,t))}function Ya(n){return n!==void 0&&n.enterprise!==void 0}class Fu{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(e=>e.provider==="EMAIL_PASSWORD_PROVIDER"&&e.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function xu(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=pe("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Df().appendChild(r)})}function Nf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const bf="https://www.google.com/recaptcha/enterprise.js?render=",Of="recaptcha-enterprise",Mf="NO_RECAPTCHA";class Lf{constructor(t){this.type=Of,this.auth=Pr(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Lu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Fu(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ya(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Mf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&Ya(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xu(bf+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Ff{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ja(this),this.idTokenSubscription=new Ja(this),this.beforeStateQueue=new Ff(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ae(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await yi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ff()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Dt(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(t))})}async initializeRecaptchaConfig(){const t=await Lu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Fu(t);this.tenantId==null?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled&&new Lf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mo("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ae(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[Ae(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof e=="function"?t.addObserver(e,r,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&uf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pr(n){return Dt(n)}class Ja{constructor(t){this.auth=t,this.observer=null,this.addObserver=Md(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,t){const e=go(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Ld(s,t??{}))return i;ye(i,"already-initialized")}return e.initialize({options:t})}function Uf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Ae);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function qf(n,t,e){const r=Pr(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=$u(t),{host:o,port:a}=Bf(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jf()}function $u(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Bf(n){const t=$u(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Za(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Za(o)}}}function Za(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function jf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return we("not implemented")}_getIdTokenResponse(t){return we("not implemented")}_linkToIdToken(t,e){return we("not implemented")}_getReauthenticationResolver(t){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,t){return mf(n,"POST","/v1/accounts:signInWithIdp",wu(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="http://localhost";class sn extends Uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ye("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=_o(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return En(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,En(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,En(t,e)}buildRequest(){const t={requestUri:Kf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=wr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sr extends Io{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Sr{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Oe.credential(t.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return sn._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ie.credential(e,r)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Sr{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Sr{constructor(){super("twitter.com")}static credential(t,e){return sn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Le.credential(e,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vi extends ji{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new vi(t,e,r,i)}}function qu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(n,s,t,r):s})}async function zf(n,t,e=!1){const r=await or(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Sn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await or(n,qu(r,i,t,n),e);U(s.idToken,r,"internal-error");const o=To(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(n.uid===a,r,"user-mismatch"),Sn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(n,t,e=!1){const r="signIn",i=await qu(n,r,t),s=await Sn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n,t){return Dt(n).setPersistence(t)}function Qf(n,t,e,r){return Dt(n).onIdTokenChanged(t,e,r)}function Xf(n,t,e){return Dt(n).beforeAuthStateChanged(t,e)}function Yf(n){return Dt(n).signOut()}const Ti="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Jf(){const n=ee();return Eo(n)||Ki(n)}const Zf=1e3,tp=10;class ju extends Bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jf()&&Vf(),this.fallbackToPolling=Ou(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,tp):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Zf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ju.type="LOCAL";const Ku=ju;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends Bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}zu.type="SESSION";const Gu=zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new zi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),l=await ep(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class np{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wo("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function rp(n){ge().location.href=n}/**
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
 */function Wu(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function ip(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function op(){return Wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="firebaseLocalStorageDb",ap=1,Ei="firebaseLocalStorage",Qu="fbase_key";class Cr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Gi(n,t){return n.transaction([Ei],t?"readwrite":"readonly").objectStore(Ei)}function lp(){const n=indexedDB.deleteDatabase(Hu);return new Cr(n).toPromise()}function Bs(){const n=indexedDB.open(Hu,ap);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ei,{keyPath:Qu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ei)?t(r):(r.close(),await lp(),t(await Bs()))})})}async function el(n,t,e){const r=Gi(n,!0).put({[Qu]:t,value:e});return new Cr(r).toPromise()}async function up(n,t){const e=Gi(n,!1).get(t),r=await new Cr(e).toPromise();return r===void 0?null:r.value}function nl(n,t){const e=Gi(n,!0).delete(t);return new Cr(e).toPromise()}const cp=800,hp=3;class Xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bs(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>hp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(op()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ip(),!this.activeServiceWorker)return;this.sender=new np(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bs();return await el(t,Ti,"1"),await nl(t,Ti),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>el(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>up(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>nl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Gi(i,!1).getAll();return new Cr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xu.type="LOCAL";const dp=Xu;new Ar(3e4,6e4);/**
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
 */function Yu(n,t){return t?Ae(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Uu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return En(t,this._buildIdpRequest())}_linkToIdToken(t,e){return En(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return En(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fp(n){return Wf(n.auth,new Ao(n),n.bypassAuthState)}function pp(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Gf(e,new Ao(n),n.bypassAuthState)}async function gp(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),zf(e,new Ao(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fp;case"linkViaPopup":case"linkViaRedirect":return gp;case"reauthViaPopup":case"reauthViaRedirect":return pp;default:ye(this.auth,"internal-error")}}resolve(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Ar(2e3,1e4);async function _p(n,t,e){const r=Pr(n);cf(n,t,Io);const i=Yu(r,e);return new Xe(r,"signInViaPopup",t,i).executeNotNull()}class Xe extends Ju{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const t=wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,mp.get())};t()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="pendingRedirect",li=new Map;class vp extends Ju{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=li.get(this.auth._key());if(!t){try{const r=await Tp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}li.set(this.auth._key(),t)}return this.bypassAuthState||li.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tp(n,t){const e=wp(t),r=Ip(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function Ep(n,t){li.set(n._key(),t)}function Ip(n){return Ae(n._redirectPersistence)}function wp(n){return ai(yp,n.config.apiKey,n.name)}async function Ap(n,t,e=!1){const r=Pr(n),i=Yu(r,t),o=await new vp(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=10*60*1e3;class Pp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Sp(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Zu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(pe(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Rp&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(t))}saveEventToCache(t){this.cachedEventUids.add(rl(t)),this.lastProcessedEventTime=Date.now()}}function rl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Zu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Sp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,t={}){return Rr(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vp=/^https?/;async function Dp(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Cp(n);for(const e of t)try{if(Np(e))return}catch{}ye(n,"unauthorized-domain")}function Np(n){const t=qs(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Vp.test(e))return!1;if(kp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bp=new Ar(3e4,6e4);function il(){const n=ge().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Op(n){return new Promise((t,e)=>{var r,i,s;function o(){il(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{il(),e(pe(n,"network-request-failed"))},timeout:bp.get()})}if(!((i=(r=ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=Nf("iframefcb");return ge()[a]=()=>{gapi.load?o():e(pe(n,"network-request-failed"))},xu(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw ui=null,t})}let ui=null;function Mp(n){return ui=ui||Op(n),ui}/**
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
 */const Lp=new Ar(5e3,15e3),Fp="__/auth/iframe",xp="emulator/auth/iframe",$p={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Up=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qp(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?vo(t,xp):`https://${n.config.authDomain}/${Fp}`,r={apiKey:t.apiKey,appName:n.name,v:Mn},i=Up.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${wr(r).slice(1)}`}async function Bp(n){const t=await Mp(n),e=ge().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:qp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$p,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},Lp.get());function l(){ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const jp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kp=500,zp=600,Gp="_blank",Wp="http://localhost";class sl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hp(n,t,e,r=Kp,i=zp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jp),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ee().toLowerCase();e&&(a=ku(u)?Gp:e),Cu(u)&&(t=t||Wp,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,E])=>`${d}${f}=${E},`,"");if(Cf(u)&&a!=="_self")return Qp(t||"",a),new sl(null);const h=window.open(t||"",a,c);U(h,n,"popup-blocked");try{h.focus()}catch{}return new sl(h)}function Qp(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Xp="__/auth/handler",Yp="emulator/auth/handler",Jp=encodeURIComponent("fac");async function ol(n,t,e,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Mn,eventId:i};if(t instanceof Io){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",$d(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof Sr){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${Jp}=${encodeURIComponent(l)}`:"";return`${Zp(n)}?${wr(a).slice(1)}${u}`}function Zp({config:n}){return n.emulator?vo(n,Yp):`https://${n.authDomain}/${Xp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="webStorageSupport";class tg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gu,this._completeRedirectFn=Ap,this._overrideRedirectResult=Ep}async _openPopup(t,e,r,i){var s;Se((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ol(t,e,r,qs(),i);return Hp(t,o,wo())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await ol(t,e,r,qs(),i);return rp(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Se(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Bp(t),r=new Pp(t);return e.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ss,{type:Ss},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ss];o!==void 0&&e(!!o),ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Dp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ou()||Eo()||Ki()}}const eg=tg;var al="@firebase/auth",ll="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ig(n){$s(new Us("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mu(n)},u=new xf(r,i,s,l);return Uf(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),$s(new Us("auth-internal",t=>{const e=Pr(t.getProvider("auth").getImmediate());return(r=>new ng(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(al,ll,rg(n)),sr(al,ll,"esm2017")}/**
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
 */const sg=5*60,og=gu("authIdTokenMaxAge")||sg;let ul=null;const ag=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>og)return;const i=e==null?void 0:e.token;ul!==i&&(ul=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function je(n=mu()){const t=go(n,"auth");if(t.isInitialized())return t.getImmediate();const e=$f(n,{popupRedirectResolver:eg,persistence:[dp,Ku,Gu]}),r=gu("authTokenSyncURL");if(r){const s=ag(r);Xf(e,s,()=>s(e.currentUser)),Qf(e,o=>s(o))}const i=bd("auth");return i&&qf(e,`http://${i}`),e}ig("Browser");let lg=new Ie;Hf(je(),Ku);const ug=async()=>_p(je(),lg),cg=async()=>Yf(je());var hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Ro=Ro||{},F=hg||self;function Wi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function kr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function dg(n){return Object.prototype.hasOwnProperty.call(n,Cs)&&n[Cs]||(n[Cs]=++fg)}var Cs="closure_uid_"+(1e9*Math.random()>>>0),fg=0;function pg(n,t,e){return n.call.apply(n.bind,arguments)}function gg(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Bt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Bt=pg:Bt=gg,Bt.apply(null,arguments)}function Xr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function bt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ke(){this.s=this.s,this.o=this.o}var mg=0;Ke.prototype.s=!1;Ke.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mg!=0)&&dg(this)};Ke.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tc=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Po(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function cl(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Wi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function jt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var _g=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{F.addEventListener("test",()=>{},t),F.removeEventListener("test",()=>{},t)}catch{}return n}();function lr(n){return/^[\s\xa0]*$/.test(n)}function Hi(){var n=F.navigator;return n&&(n=n.userAgent)?n:""}function he(n){return Hi().indexOf(n)!=-1}function So(n){return So[" "](n),n}So[" "]=function(){};function yg(n,t){var e=cm;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var vg=he("Opera"),Cn=he("Trident")||he("MSIE"),ec=he("Edge"),js=ec||Cn,nc=he("Gecko")&&!(Hi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),Tg=Hi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function rc(){var n=F.document;return n?n.documentMode:void 0}var Ks;t:{var ks="",Vs=function(){var n=Hi();if(nc)return/rv:([^\);]+)(\)|;)/.exec(n);if(ec)return/Edge\/([\d\.]+)/.exec(n);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Tg)return/WebKit\/(\S+)/.exec(n);if(vg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Vs&&(ks=Vs?Vs[1]:""),Cn){var Ds=rc();if(Ds!=null&&Ds>parseFloat(ks)){Ks=String(Ds);break t}}Ks=ks}var zs;if(F.document&&Cn){var hl=rc();zs=hl||parseInt(Ks,10)||void 0}else zs=void 0;var Eg=zs;function ur(n,t){if(jt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(nc){t:{try{So(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ig[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ur.$.h.call(this)}}bt(ur,jt);var Ig={2:"touch",3:"pen",4:"mouse"};ur.prototype.h=function(){ur.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Vr="closure_listenable_"+(1e6*Math.random()|0),wg=0;function Ag(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++wg,this.fa=this.ia=!1}function Qi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Co(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Rg(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function ic(n){const t={};for(const e in n)t[e]=n[e];return t}const dl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sc(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<dl.length;s++)e=dl[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Xi(n){this.src=n,this.g={},this.h=0}Xi.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ws(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Ag(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Gs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=tc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Ws(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var ko="closure_lm_"+(1e6*Math.random()|0),Ns={};function oc(n,t,e,r,i){if(r&&r.once)return lc(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)oc(n,t[s],e,r,i);return null}return e=No(e),n&&n[Vr]?n.O(t,e,kr(r)?!!r.capture:!!r,i):ac(n,t,e,!1,r,i)}function ac(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=kr(i)?!!i.capture:!!i,a=Do(n);if(a||(n[ko]=a=new Xi(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Pg(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)_g||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(cc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Pg(){function n(e){return t.call(n.src,n.listener,e)}const t=Sg;return n}function lc(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)lc(n,t[s],e,r,i);return null}return e=No(e),n&&n[Vr]?n.P(t,e,kr(r)?!!r.capture:!!r,i):ac(n,t,e,!0,r,i)}function uc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)uc(n,t[s],e,r,i);else r=kr(r)?!!r.capture:!!r,e=No(e),n&&n[Vr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Ws(s,e,r,i),-1<e&&(Qi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Do(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Ws(t,e,r,i)),(e=-1<n?t[n]:null)&&Vo(e))}function Vo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Vr])Gs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(cc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Do(t))?(Gs(e,n),e.h==0&&(e.src=null,t[ko]=null)):Qi(n)}}}function cc(n){return n in Ns?Ns[n]:Ns[n]="on"+n}function Sg(n,t){if(n.fa)n=!0;else{t=new ur(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Vo(n),n=e.call(r,t)}return n}function Do(n){return n=n[ko],n instanceof Xi?n:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(n){return typeof n=="function"?n:(n[bs]||(n[bs]=function(t){return n.handleEvent(t)}),n[bs])}function Nt(){Ke.call(this),this.i=new Xi(this),this.S=this,this.J=null}bt(Nt,Ke);Nt.prototype[Vr]=!0;Nt.prototype.removeEventListener=function(n,t,e,r){uc(this,n,t,e,r)};function xt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new jt(t,n);else if(t instanceof jt)t.target=t.target||n;else{var i=t;t=new jt(r,n),sc(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Yr(o,r,!0,t)&&i}if(o=t.g=n,i=Yr(o,r,!0,t)&&i,i=Yr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Yr(o,r,!1,t)&&i}Nt.prototype.N=function(){if(Nt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Qi(e[r]);delete n.g[t],n.h--}}this.J=null};Nt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Nt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Yr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Gs(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var bo=F.JSON.stringify;class Cg{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function kg(){var n=Oo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Vg{constructor(){this.h=this.g=null}add(t,e){const r=hc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var hc=new Cg(()=>new Dg,n=>n.reset());class Dg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ng(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function bg(n){F.setTimeout(()=>{throw n},0)}let cr,hr=!1,Oo=new Vg,dc=()=>{const n=F.Promise.resolve(void 0);cr=()=>{n.then(Og)}};var Og=()=>{for(var n;n=kg();){try{n.h.call(n.g)}catch(e){bg(e)}var t=hc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}hr=!1};function Yi(n,t){Nt.call(this),this.h=n||1,this.g=t||F,this.j=Bt(this.qb,this),this.l=Date.now()}bt(Yi,Nt);v=Yi.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(Mo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){Yi.$.N.call(this),Mo(this),delete this.g};function Lo(n,t,e){if(typeof n=="function")e&&(n=Bt(n,e));else if(n&&typeof n.handleEvent=="function")n=Bt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(n,t||0)}function fc(n){n.g=Lo(()=>{n.g=null,n.i&&(n.i=!1,fc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Mg extends Ke{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:fc(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dr(n){Ke.call(this),this.h=n,this.g={}}bt(dr,Ke);var fl=[];function pc(n,t,e,r){Array.isArray(e)||(e&&(fl[0]=e.toString()),e=fl);for(var i=0;i<e.length;i++){var s=oc(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function gc(n){Co(n.g,function(t,e){this.g.hasOwnProperty(e)&&Vo(t)},n),n.g={}}dr.prototype.N=function(){dr.$.N.call(this),gc(this)};dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ji(){this.g=!0}Ji.prototype.Ea=function(){this.g=!1};function Lg(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Fg(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function yn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+$g(n,e)+(r?" "+r:"")})}function xg(n,t){n.info(function(){return"TIMEOUT: "+t})}Ji.prototype.info=function(){};function $g(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bo(e)}catch{return t}}var cn={},pl=null;function Zi(){return pl=pl||new Nt}cn.Ta="serverreachability";function mc(n){jt.call(this,cn.Ta,n)}bt(mc,jt);function fr(n){const t=Zi();xt(t,new mc(t))}cn.STAT_EVENT="statevent";function _c(n,t){jt.call(this,cn.STAT_EVENT,n),this.stat=t}bt(_c,jt);function Jt(n){const t=Zi();xt(t,new _c(t,n))}cn.Ua="timingevent";function yc(n,t){jt.call(this,cn.Ua,n),this.size=t}bt(yc,jt);function Dr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){n()},t)}var ts={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fo(){}Fo.prototype.h=null;function gl(n){return n.h||(n.h=n.i())}function Tc(){}var Nr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xo(){jt.call(this,"d")}bt(xo,jt);function $o(){jt.call(this,"c")}bt($o,jt);var Hs;function es(){}bt(es,Fo);es.prototype.g=function(){return new XMLHttpRequest};es.prototype.i=function(){return{}};Hs=new es;function br(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new dr(this),this.P=Ug,n=js?125:void 0,this.V=new Yi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ec}function Ec(){this.i=null,this.g="",this.h=!1}var Ug=45e3,Qs={},Ii={};v=br.prototype;v.setTimeout=function(n){this.P=n};function Xs(n,t,e){n.L=1,n.v=rs(Ce(t)),n.s=e,n.S=!0,Ic(n,null)}function Ic(n,t){n.G=Date.now(),Or(n),n.A=Ce(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Vc(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Ec,n.g=Yc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Mg(Bt(n.Pa,n,n.g),n.O)),pc(n.U,n.g,"readystatechange",n.nb),t=n.I?ic(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),fr(),Lg(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&de(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const c=de(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||js||this.g&&(this.h.h||this.g.ja()||vl(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?fr(3):fr(2)),ns(this);var e=this.g.da();this.ca=e;e:if(wc(this)){var r=vl(this.g);n="";var i=r.length,s=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ye(this),Zn(this);var o="";break e}this.h.i=new F.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Fg(this.j,this.u,this.A,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lr(a)){var u=a;break e}}u=null}if(e=u)yn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ys(this,e);else{this.i=!1,this.o=3,Jt(12),Ye(this),Zn(this);break t}}this.S?(Ac(this,c,o),js&&this.i&&c==3&&(pc(this.U,this.V,"tick",this.mb),this.V.start())):(yn(this.j,this.m,o,null),Ys(this,o)),c==4&&Ye(this),this.i&&!this.J&&(c==4?Wc(this.l,this):(this.i=!1,Or(this)))}else am(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Jt(12)):(this.o=0,Jt(13)),Ye(this),Zn(this)}}}catch{}finally{}};function wc(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Ac(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=qg(n,e),i==Ii){t==4&&(n.o=4,Jt(14),r=!1),yn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Qs){n.o=4,Jt(15),yn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else yn(n.j,n.m,i,null),Ys(n,i);wc(n)&&i!=Ii&&i!=Qs&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Jt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),zo(t),t.M=!0,Jt(11))):(yn(n.j,n.m,e,"[Invalid Chunked Response]"),Ye(n),Zn(n))}v.mb=function(){if(this.g){var n=de(this.g),t=this.g.ja();this.C<t.length&&(ns(this),Ac(this,n,t),this.i&&n!=4&&Or(this))}};function qg(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Ii:(e=Number(t.substring(e,r)),isNaN(e)?Qs:(r+=1,r+e>t.length?Ii:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Ye(this)};function Or(n){n.Y=Date.now()+n.P,Rc(n,n.P)}function Rc(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Dr(Bt(n.lb,n),t)}function ns(n){n.B&&(F.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(xg(this.j,this.A),this.L!=2&&(fr(),Jt(17)),Ye(this),this.o=2,Zn(this)):Rc(this,this.Y-n)};function Zn(n){n.l.H==0||n.J||Wc(n.l,n)}function Ye(n){ns(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Mo(n.V),gc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ys(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Js(e.i,n))){if(!n.K&&Js(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Ri(e),os(e);else break t;Ko(e),Jt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Dr(Bt(e.ib,e),6e3));if(1>=bc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Je(e,11)}else if((n.K||e.g==n)&&Ri(e),!lr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const c=u[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Uo(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ft(r.I,r.F,_))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Xc(r,r.J?r.pa:null,r.Y),o.K){Oc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ns(a),Or(a)),r.g=o}else zc(r);0<e.j.length&&as(e)}else u[0]!="stop"&&u[0]!="close"||Je(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Je(e,7):jo(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}fr(4)}catch{}}function Bg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Wi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function jg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Wi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Pc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Wi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=jg(n),r=Bg(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof nn){this.h=n.h,wi(this,n.j),this.s=n.s,this.g=n.g,Ai(this,n.m),this.l=n.l;var t=n.i,e=new pr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ml(this,e),this.o=n.o}else n&&(t=String(n).match(Sc))?(this.h=!1,wi(this,t[1]||"",!0),this.s=Hn(t[2]||""),this.g=Hn(t[3]||"",!0),Ai(this,t[4]),this.l=Hn(t[5]||"",!0),ml(this,t[6]||"",!0),this.o=Hn(t[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}nn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Qn(t,_l,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Qn(t,_l,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Qn(e,e.charAt(0)=="/"?Wg:Gg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Qn(e,Qg)),n.join("")};function Ce(n){return new nn(n)}function wi(n,t,e){n.j=e?Hn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Ai(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ml(n,t,e){t instanceof pr?(n.i=t,Xg(n.i,n.h)):(e||(t=Qn(t,Hg)),n.i=new pr(t,n.h))}function ft(n,t,e){n.i.set(t,e)}function rs(n){return ft(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Hn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Qn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,zg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function zg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var _l=/[#\/\?@]/g,Gg=/[#\?:]/g,Wg=/[#\?]/g,Hg=/[#\?@]/g,Qg=/#/g;function pr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function ze(n){n.g||(n.g=new Map,n.h=0,n.i&&Kg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=pr.prototype;v.add=function(n,t){ze(this),this.i=null,n=Ln(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Cc(n,t){ze(n),t=Ln(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function kc(n,t){return ze(n),t=Ln(n,t),n.g.has(t)}v.forEach=function(n,t){ze(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){ze(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){ze(this);let t=[];if(typeof n=="string")kc(this,n)&&(t=t.concat(this.g.get(Ln(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return ze(this),this.i=null,n=Ln(this,n),kc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Vc(n,t,e){Cc(n,t),0<e.length&&(n.i=null,n.g.set(Ln(n,t),Po(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Ln(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Xg(n,t){t&&!n.j&&(ze(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Cc(this,r),Vc(this,i,e))},n)),n.j=t}var Yg=class{constructor(n,t){this.g=n,this.map=t}};function Dc(n){this.l=n||Jg,F.PerformanceNavigationTiming?(n=F.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jg=10;function Nc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function bc(n){return n.h?1:n.g?n.g.size:0}function Js(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Uo(n,t){n.g?n.g.add(t):n.h=t}function Oc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Dc.prototype.cancel=function(){if(this.i=Mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Mc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Po(n.i)}var Zg=class{stringify(n){return F.JSON.stringify(n,void 0)}parse(n){return F.JSON.parse(n,void 0)}};function tm(){this.g=new Zg}function em(n,t,e){const r=e||"";try{Pc(n,function(i,s){let o=i;kr(i)&&(o=bo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function nm(n,t){const e=new Ji;if(F.Image){const r=new Image;r.onload=Xr(Jr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Xr(Jr,e,r,"TestLoadImage: error",!1,t),r.onabort=Xr(Jr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Xr(Jr,e,r,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Jr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Mr(n){this.l=n.fc||null,this.j=n.ob||!1}bt(Mr,Fo);Mr.prototype.g=function(){return new is(this.l,this.j)};Mr.prototype.i=function(n){return function(){return n}}({});function is(n,t){Nt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=qo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(is,Nt);var qo=0;v=is.prototype;v.open=function(n,t){if(this.readyState!=qo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,gr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||F).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=qo};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,gr(this)),this.g&&(this.readyState=3,gr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Lc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Lr(this):gr(this),this.readyState==3&&Lc(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,Lr(this))};v.Ya=function(n){this.g&&(this.response=n,Lr(this))};v.ka=function(){this.g&&Lr(this)};function Lr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,gr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function gr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var rm=F.JSON.parse;function yt(n){Nt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fc,this.L=this.M=!1}bt(yt,Nt);var Fc="",im=/^https?$/i,sm=["POST","PUT"];v=yt.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hs.g(),this.C=this.u?gl(this.u):gl(Hs),this.g.onreadystatechange=Bt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){yl(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&n instanceof F.FormData,!(0<=tc(sm,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Uc(this),0<this.B&&((this.L=om(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Bt(this.ua,this)):this.A=Lo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){yl(this,s)}};function om(n){return Cn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof Ro<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function yl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,xc(n),ss(n)}function xc(n){n.F||(n.F=!0,xt(n,"complete"),xt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,xt(this,"complete"),xt(this,"abort"),ss(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ss(this,!0)),yt.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?$c(this):this.kb())};v.kb=function(){$c(this)};function $c(n){if(n.h&&typeof Ro<"u"&&(!n.C[1]||de(n)!=4||n.da()!=2)){if(n.v&&de(n)==4)Lo(n.La,0,n);else if(xt(n,"readystatechange"),de(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Sc)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!im.test(i?i.toLowerCase():"")}e=r}if(e)xt(n,"complete"),xt(n,"success");else{n.m=6;try{var s=2<de(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",xc(n)}}finally{ss(n)}}}}function ss(n,t){if(n.g){Uc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||xt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Uc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(F.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function de(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),rm(t)}};function vl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Fc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function am(n){const t={};n=(n.g&&2<=de(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(lr(n[r]))continue;var e=Ng(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Rg(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qc(n){let t="";return Co(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Bo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=qc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ft(n,t,e))}function zn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Bc(n){this.Ga=0,this.j=[],this.l=new Ji,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,n),this.hb=zn("retryDelaySeedMs",1e4,n),this.eb=zn("forwardChannelMaxRetries",2,n),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Dc(n&&n.concurrentRequestLimit),this.Ja=new tm,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Bc.prototype;v.ra=8;v.H=1;function jo(n){if(jc(n),n.H==3){var t=n.W++,e=Ce(n.I);if(ft(e,"SID",n.K),ft(e,"RID",t),ft(e,"TYPE","terminate"),Fr(n,e),t=new br(n,n.l,t),t.L=2,t.v=rs(Ce(e)),e=!1,F.navigator&&F.navigator.sendBeacon)try{e=F.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&F.Image&&(new Image().src=t.v,e=!0),e||(t.g=Yc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Or(t)}Qc(n)}function os(n){n.g&&(zo(n),n.g.cancel(),n.g=null)}function jc(n){os(n),n.u&&(F.clearTimeout(n.u),n.u=null),Ri(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&F.clearTimeout(n.m),n.m=null)}function as(n){if(!Nc(n.i)&&!n.m){n.m=!0;var t=n.Na;cr||dc(),hr||(cr(),hr=!0),Oo.add(t,n),n.C=0}}function lm(n,t){return bc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Dr(Bt(n.Na,n,t),Hc(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new br(this,this.l,n);let s=this.s;if(this.U&&(s?(s=ic(s),sc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Kc(this,i,t),e=Ce(this.I),ft(e,"RID",n),ft(e,"CVER",22),this.F&&ft(e,"X-HTTP-Session-Id",this.F),Fr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(qc(s)))+"&"+t:this.o&&Bo(e,this.o,s)),Uo(this.i,i),this.bb&&ft(e,"TYPE","init"),this.P?(ft(e,"$req",t),ft(e,"SID","null"),i.aa=!0,Xs(i,e,null)):Xs(i,e,t),this.H=2}}else this.H==3&&(n?Tl(this,n):this.j.length==0||Nc(this.i)||Tl(this))};function Tl(n,t){var e;t?e=t.m:e=n.W++;const r=Ce(n.I);ft(r,"SID",n.K),ft(r,"RID",e),ft(r,"AID",n.V),Fr(n,r),n.o&&n.s&&Bo(r,n.o,n.s),e=new br(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Kc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Uo(n.i,e),Xs(e,r,t)}function Fr(n,t){n.na&&Co(n.na,function(e,r){ft(t,r,e)}),n.h&&Pc({},function(e,r){ft(t,r,e)})}function Kc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Bt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<e;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{em(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function zc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;cr||dc(),hr||(cr(),hr=!0),Oo.add(t,n),n.A=0}}function Ko(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Dr(Bt(n.Ma,n),Hc(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,Gc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Dr(Bt(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Jt(10),os(this),Gc(this))};function zo(n){n.B!=null&&(F.clearTimeout(n.B),n.B=null)}function Gc(n){n.g=new br(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ce(n.wa);ft(t,"RID","rpc"),ft(t,"SID",n.K),ft(t,"AID",n.V),ft(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ft(t,"TO",n.qa),ft(t,"TYPE","xmlhttp"),Fr(n,t),n.o&&n.s&&Bo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=rs(Ce(t)),e.s=null,e.S=!0,Ic(e,n)}v.ib=function(){this.v!=null&&(this.v=null,os(this),Ko(this),Jt(19))};function Ri(n){n.v!=null&&(F.clearTimeout(n.v),n.v=null)}function Wc(n,t){var e=null;if(n.g==t){Ri(n),zo(n),n.g=null;var r=2}else if(Js(n.i,t))e=t.F,Oc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Zi(),xt(r,new yc(r,e)),as(n)}else zc(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&lm(n,t)||r==2&&Ko(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Je(n,5);break;case 4:Je(n,10);break;case 3:Je(n,6);break;default:Je(n,2)}}}function Hc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Je(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Bt(n.pb,n);e||(e=new nn("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||wi(e,"https"),rs(e)),nm(e.toString(),r)}else Jt(2);n.H=0,n.h&&n.h.za(t),Qc(n),jc(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Jt(2)):(this.l.info("Failed to ping google.com"),Jt(1))};function Qc(n){if(n.H=0,n.ma=[],n.h){const t=Mc(n.i);(t.length!=0||n.j.length!=0)&&(cl(n.ma,t),cl(n.ma,n.j),n.i.i.length=0,Po(n.j),n.j.length=0),n.h.ya()}}function Xc(n,t,e){var r=e instanceof nn?Ce(e):new nn(e);if(r.g!="")t&&(r.g=t+"."+r.g),Ai(r,r.m);else{var i=F.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new nn(null);r&&wi(s,r),t&&(s.g=t),i&&Ai(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&ft(r,e,t),ft(r,"VER",n.ra),Fr(n,r),r}function Yc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new yt(new Mr({ob:!0})):new yt(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Jc(){}v=Jc.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Pi(){if(Cn&&!(10<=Number(Eg)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(n,t){return new ie(n,t)};function ie(n,t){Nt.call(this),this.g=new Bc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!lr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!lr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Fn(this)}bt(ie,Nt);ie.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Jt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Xc(n,null,n.Y),as(n)};ie.prototype.close=function(){jo(this.g)};ie.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=bo(n),n=e);t.j.push(new Yg(t.fb++,n)),t.H==3&&as(t)};ie.prototype.N=function(){this.g.h=null,delete this.j,jo(this.g),delete this.g,ie.$.N.call(this)};function Zc(n){xo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}bt(Zc,xo);function th(){$o.call(this),this.status=1}bt(th,$o);function Fn(n){this.g=n}bt(Fn,Jc);Fn.prototype.Ba=function(){xt(this.g,"a")};Fn.prototype.Aa=function(n){xt(this.g,new Zc(n))};Fn.prototype.za=function(n){xt(this.g,new th)};Fn.prototype.ya=function(){xt(this.g,"b")};function um(){this.blockSize=-1}function le(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(le,um);le.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Os(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}le.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Os(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Os(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Os(this,r),i=0;break}}this.h=i,this.i+=t};le.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function it(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var cm={};function Go(n){return-128<=n&&128>n?yg(n,function(t){return new it([t|0],0>t?-1:0)}):new it([n|0],0>n?-1:0)}function fe(n){if(isNaN(n)||!isFinite(n))return In;if(0>n)return Ft(fe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Zs;return new it(t,0)}function eh(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Ft(eh(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=fe(Math.pow(t,8)),r=In,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=fe(Math.pow(t,s)),r=r.R(s).add(fe(o))):(r=r.R(e),r=r.add(fe(o)))}return r}var Zs=4294967296,In=Go(0),to=Go(1),El=Go(16777216);v=it.prototype;v.ea=function(){if(se(this))return-Ft(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Zs+r)*t,t*=Zs}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Re(this))return"0";if(se(this))return"-"+Ft(this).toString(n);for(var t=fe(Math.pow(n,6)),e=this,r="";;){var i=Ci(e,t).g;e=Si(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Re(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Re(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function se(n){return n.h==-1}v.X=function(n){return n=Si(this,n),se(n)?-1:Re(n)?0:1};function Ft(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new it(e,~n.h).add(to)}v.abs=function(){return se(this)?Ft(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new it(e,e[e.length-1]&-2147483648?-1:0)};function Si(n,t){return n.add(Ft(t))}v.R=function(n){if(Re(this)||Re(n))return In;if(se(this))return se(n)?Ft(this).R(Ft(n)):Ft(Ft(this).R(n));if(se(n))return Ft(this.R(Ft(n)));if(0>this.X(El)&&0>n.X(El))return fe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;e[2*r+2*i]+=o*l,Zr(e,2*r+2*i),e[2*r+2*i+1]+=s*l,Zr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Zr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Zr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new it(e,0)};function Zr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Gn(n,t){this.g=n,this.h=t}function Ci(n,t){if(Re(t))throw Error("division by zero");if(Re(n))return new Gn(In,In);if(se(n))return t=Ci(Ft(n),t),new Gn(Ft(t.g),Ft(t.h));if(se(t))return t=Ci(n,Ft(t)),new Gn(Ft(t.g),t.h);if(30<n.g.length){if(se(n)||se(t))throw Error("slowDivide_ only works with positive integers.");for(var e=to,r=t;0>=r.X(n);)e=Il(e),r=Il(r);var i=gn(e,1),s=gn(r,1);for(r=gn(r,2),e=gn(e,2);!Re(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=gn(r,1),e=gn(e,1)}return t=Si(n,i.R(t)),new Gn(i,t)}for(i=In;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fe(e),o=s.R(t);se(o)||0<o.X(n);)e-=r,s=fe(e),o=s.R(t);Re(s)&&(s=to),i=i.add(s),n=Si(n,o)}return new Gn(i,n)}v.gb=function(n){return Ci(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new it(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new it(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new it(e,this.h^n.h)};function Il(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new it(e,n.h)}function gn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new it(i,n.h)}Pi.prototype.createWebChannel=Pi.prototype.g;ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;ts.NO_ERROR=0;ts.TIMEOUT=8;ts.HTTP_ERROR=6;vc.COMPLETE="complete";Tc.EventType=Nr;Nr.OPEN="a";Nr.CLOSE="b";Nr.ERROR="c";Nr.MESSAGE="d";Nt.prototype.listen=Nt.prototype.O;yt.prototype.listenOnce=yt.prototype.P;yt.prototype.getLastError=yt.prototype.Sa;yt.prototype.getLastErrorCode=yt.prototype.Ia;yt.prototype.getStatus=yt.prototype.da;yt.prototype.getResponseJson=yt.prototype.Wa;yt.prototype.getResponseText=yt.prototype.ja;yt.prototype.send=yt.prototype.ha;yt.prototype.setWithCredentials=yt.prototype.Oa;le.prototype.digest=le.prototype.l;le.prototype.reset=le.prototype.reset;le.prototype.update=le.prototype.j;it.prototype.add=it.prototype.add;it.prototype.multiply=it.prototype.R;it.prototype.modulo=it.prototype.gb;it.prototype.compare=it.prototype.X;it.prototype.toNumber=it.prototype.ea;it.prototype.toString=it.prototype.toString;it.prototype.getBits=it.prototype.D;it.fromNumber=fe;it.fromString=eh;var hm=function(){return new Pi},dm=function(){return Zi()},Ms=ts,fm=vc,pm=cn,wl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gm=Mr,ti=Tc,mm=yt,_m=le,wn=it;const Al="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new _u("@firebase/firestore");function Rl(){return on.logLevel}function w(n,...t){if(on.logLevel<=rn.DEBUG){const e=t.map(Wo);on.debug(`Firestore (${xn}): ${n}`,...e)}}function ke(n,...t){if(on.logLevel<=rn.ERROR){const e=t.map(Wo);on.error(`Firestore (${xn}): ${n}`,...e)}}function kn(n,...t){if(on.logLevel<=rn.WARN){const e=t.map(Wo);on.warn(`Firestore (${xn}): ${n}`,...e)}}function Wo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function D(n="Unexpected state"){const t=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+n;throw ke(t),new Error(t)}function rt(n,t){n||D()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends ji{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ym{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ut.UNAUTHENTICATED))}shutdown(){}}class vm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Tm{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new nh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new Ut(t)}}class Em{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Im{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Em(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Am{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new wm(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Rm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function tt(n,t){return n<t?-1:n>t?1:0}function Vn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Ct(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new Ct(0,0))}static max(){return new O(new Ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,r){e===void 0?e=0:e>t.length&&D(),r===void 0?r=t.length-e:r>t.length-e&&D(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return mr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof mr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends mr{construct(t,e,r){return new pt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new T(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const Pm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends mr{construct(t,e,r){return new qt(t,e,r)}static isValidIdentifier(t){return Pm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new T(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qt(e)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.path=t}static fromPath(t){return new R(pt.fromString(t))}static fromName(t){return new R(pt.fromString(t).popFirst(5))}static empty(){return new R(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new R(new pt(t.slice()))}}function Sm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new Ct(e+1,0):new Ct(e,r));return new $e(i,R.empty(),t)}function Cm(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $e(O.min(),R.empty(),-1)}static max(){return new $e(O.max(),R.empty(),-1)}}function km(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=R.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Vm)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof g?e:g.resolve(e)}catch(e){return g.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):g.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):g.reject(e)}static resolve(t){return new g((e,r)=>{e(t)})}static reject(t){return new g((e,r)=>{r(t)})}static waitFor(t){return new g((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},l=>r(l))}),o=!0,s===i&&e()})}static or(t){let e=g.resolve(!1);for(const r of t)e=e.next(i=>i?g.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;e(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new g((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function $r(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ho{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ho.ae=-1;function Ur(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function Nm(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ih(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Lt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ei(this.root,t,this.comparator,!0)}}class ei{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Lt.RED,this.left=i??Lt.EMPTY,this.right=s??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Lt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Sl(this.data.getIterator())}getIteratorFrom(t){return new Sl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Kt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Kt(this.comparator);return e.data=t,e}}class Sl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.fields=t,t.sort(qt.comparator)}static empty(){return new ne([])}unionWith(t){let e=new Kt(qt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sh("Invalid base64 string: "+s):s}}(t);return new zt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new zt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const bm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ue(n){if(rt(!!n),typeof n=="string"){let t=0;const e=bm.exec(n);if(rt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?zt.fromBase64String(n):zt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Xo(n){const t=n.mapValue.fields.__previous_value__;return Qo(t)?Xo(t):t}function _r(n){const t=Ue(n.mapValue.fields.__local_write_time__.timestampValue);return new Ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,e,r,i,s,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class yr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:Mm(n)?9007199254740991:10:D()}function ve(n,t){if(n===t)return!0;const e=ln(n);if(e!==ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _r(n).isEqual(_r(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ue(i.timestampValue),a=Ue(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return an(i.bytesValue).isEqual(an(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return Rt(i.geoPointValue.latitude)===Rt(s.geoPointValue.latitude)&&Rt(i.geoPointValue.longitude)===Rt(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Rt(i.integerValue)===Rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Rt(i.doubleValue),a=Rt(s.doubleValue);return o===a?ki(o)===ki(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Vn(n.arrayValue.values||[],t.arrayValue.values||[],ve);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pl(o)!==Pl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ve(o[l],a[l])))return!1;return!0}(n,t);default:return D()}}function vr(n,t){return(n.values||[]).find(e=>ve(e,t))!==void 0}function Dn(n,t){if(n===t)return 0;const e=ln(n),r=ln(t);if(e!==r)return tt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Rt(s.integerValue||s.doubleValue),l=Rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return Cl(n.timestampValue,t.timestampValue);case 4:return Cl(_r(n),_r(t));case 5:return tt(n.stringValue,t.stringValue);case 6:return function(s,o){const a=an(s),l=an(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=tt(a[u],l[u]);if(c!==0)return c}return tt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=tt(Rt(s.latitude),Rt(o.latitude));return a!==0?a:tt(Rt(s.longitude),Rt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Dn(a[u],l[u]);if(c)return c}return tt(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ni.mapValue&&o===ni.mapValue)return 0;if(s===ni.mapValue)return 1;if(o===ni.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=tt(l[h],c[h]);if(d!==0)return d;const f=Dn(a[l[h]],u[c[h]]);if(f!==0)return f}return tt(l.length,c.length)}(n.mapValue,t.mapValue);default:throw D()}}function Cl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=Ue(n),r=Ue(t),i=tt(e.seconds,r.seconds);return i!==0?i:tt(e.nanos,r.nanos)}function Nn(n){return eo(n)}function eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ue(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return an(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return R.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=eo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${eo(e.fields[o])}`;return i+"}"}(n.mapValue):D()}function kl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function no(n){return!!n&&"integerValue"in n}function Yo(n){return!!n&&"arrayValue"in n}function Vl(n){return!!n&&"nullValue"in n}function Dl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return hn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=tr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Mm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.value=t}static empty(){return new Qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ci(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tr(e)}setAll(t){let e=qt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=tr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ci(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ve(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){hn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Qt(tr(this.value))}}function oh(n){const t=[];return hn(n.fields,(e,r)=>{const i=new qt([e]);if(ci(r)){const s=oh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ne(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vi{constructor(t,e){this.position=t,this.inclusive=e}}function Nl(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),e.key):r=Dn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ve(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ah{}class Pt extends ah{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new xm(t,e,r):e==="array-contains"?new qm(t,r):e==="in"?new Bm(t,r):e==="not-in"?new jm(t,r):e==="array-contains-any"?new Km(t,r):new Pt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new $m(t,r):new Um(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Dn(e,this.value)):e!==null&&ln(this.value)===ln(e)&&this.matchesComparison(Dn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ue extends ah{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new ue(t,e)}matches(t){return lh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function lh(n){return n.op==="and"}function uh(n){return Fm(n)&&lh(n)}function Fm(n){for(const t of n.filters)if(t instanceof ue)return!1;return!0}function ro(n){if(n instanceof Pt)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(uh(n))return n.filters.map(t=>ro(t)).join(",");{const t=n.filters.map(e=>ro(e)).join(",");return`${n.op}(${t})`}}function ch(n,t){return n instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.field.isEqual(i.field)&&ve(r.value,i.value)}(n,t):n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ch(o,i.filters[a]),!0):!1}(n,t):void D()}function hh(n){return n instanceof Pt?function(e){return`${e.field.canonicalString()} ${e.op} ${Nn(e.value)}`}(n):n instanceof ue?function(e){return e.op.toString()+" {"+e.getFilters().map(hh).join(" ,")+"}"}(n):"Filter"}class xm extends Pt{constructor(t,e,r){super(t,e,r),this.key=R.fromName(r.referenceValue)}matches(t){const e=R.comparator(t.key,this.key);return this.matchesComparison(e)}}class $m extends Pt{constructor(t,e){super(t,"in",e),this.keys=dh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Um extends Pt{constructor(t,e){super(t,"not-in",e),this.keys=dh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function dh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>R.fromName(r.referenceValue))}class qm extends Pt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yo(e)&&vr(e.arrayValue,this.value)}}class Bm extends Pt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vr(this.value.arrayValue,e)}}class jm extends Pt{constructor(t,e){super(t,"not-in",e)}matches(t){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vr(this.value.arrayValue,e)}}class Km extends Pt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ol(n,t=null,e=[],r=[],i=null,s=null,o=null){return new zm(n,t,e,r,i,s,o)}function Jo(n){const t=q(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ro(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Nn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Nn(r)).join(",")),t.he=e}return t.he}function Zo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Lm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ch(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!bl(n.startAt,t.startAt)&&bl(n.endAt,t.endAt)}function io(n){return R.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Gm(n,t,e,r,i,s,o,a){return new qr(n,t,e,r,i,s,o,a)}function ta(n){return new qr(n)}function Ml(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ea(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function ph(n){return n.collectionGroup!==null}function An(n){const t=q(n);if(t.Pe===null){t.Pe=[];const e=ea(t),r=fh(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new er(e)),t.Pe.push(new er(qt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new er(qt.keyField(),s))}}}return t.Pe}function Ve(n){const t=q(n);if(!t.Ie)if(t.limitType==="F")t.Ie=Ol(t.path,t.collectionGroup,An(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of An(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new er(s.field,o))}const r=t.endAt?new Vi(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Vi(t.startAt.position,t.startAt.inclusive):null;t.Ie=Ol(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function so(n,t){t.getFirstInequalityField(),ea(n);const e=n.filters.concat([t]);return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function oo(n,t,e){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ls(n,t){return Zo(Ve(n),Ve(t))&&n.limitType===t.limitType}function gh(n){return`${Jo(Ve(n))}|lt:${n.limitType}`}function ao(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>hh(i)).join(", ")}]`),Ur(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Nn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Nn(i)).join(",")),`Target(${r})`}(Ve(n))}; limitType=${n.limitType})`}function us(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):R.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of An(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Nl(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,An(r),i)||r.endAt&&!function(o,a,l){const u=Nl(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,An(r),i))}(n,t)}function Wm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mh(n){return(t,e)=>{let r=!1;for(const i of An(n)){const s=Hm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Hm(n,t,e){const r=n.field.isKeyField()?R.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Dn(l,u):D()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return D()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){hn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new mt(R.comparator);function De(){return Qm}const _h=new mt(R.comparator);function Xn(...n){let t=_h;for(const e of n)t=t.insert(e.key,e);return t}function yh(n){let t=_h;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ze(){return nr()}function vh(){return nr()}function nr(){return new $n(n=>n.toString(),(n,t)=>n.isEqual(t))}const Xm=new mt(R.comparator),Ym=new Kt(R.comparator);function z(...n){let t=Ym;for(const e of n)t=t.add(e);return t}const Jm=new Kt(tt);function Zm(){return Jm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(t)?"-0":t}}function Eh(n){return{integerValue:""+n}}function t_(n,t){return Nm(t)?Eh(t):Th(n,t)}/**
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
 */class cs{constructor(){this._=void 0}}function e_(n,t,e){return n instanceof Di?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qo(s)&&(s=Xo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Tr?wh(n,t):n instanceof Er?Ah(n,t):function(i,s){const o=Ih(i,s),a=Ll(o)+Ll(i.Te);return no(o)&&no(i.Te)?Eh(a):Th(i.serializer,a)}(n,t)}function n_(n,t,e){return n instanceof Tr?wh(n,t):n instanceof Er?Ah(n,t):e}function Ih(n,t){return n instanceof Ni?function(r){return no(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Di extends cs{}class Tr extends cs{constructor(t){super(),this.elements=t}}function wh(n,t){const e=Rh(t);for(const r of n.elements)e.some(i=>ve(i,r))||e.push(r);return{arrayValue:{values:e}}}class Er extends cs{constructor(t){super(),this.elements=t}}function Ah(n,t){let e=Rh(t);for(const r of n.elements)e=e.filter(i=>!ve(i,r));return{arrayValue:{values:e}}}class Ni extends cs{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Ll(n){return Rt(n.integerValue||n.doubleValue)}function Rh(n){return Yo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function r_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Tr&&i instanceof Tr||r instanceof Er&&i instanceof Er?Vn(r.elements,i.elements,ve):r instanceof Ni&&i instanceof Ni?ve(r.Te,i.Te):r instanceof Di&&i instanceof Di}(n.transform,t.transform)}class i_{constructor(t,e){this.version=t,this.transformResults=e}}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hs{}function Ph(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new na(n.key,te.none()):new Br(n.key,n.data,te.none());{const e=n.data,r=Qt.empty();let i=new Kt(qt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ge(n.key,r,new ne(i.toArray()),te.none())}}function s_(n,t,e){n instanceof Br?function(i,s,o){const a=i.value.clone(),l=xl(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ge?function(i,s,o){if(!hi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=xl(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Sh(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function rr(n,t,e,r){return n instanceof Br?function(s,o,a,l){if(!hi(s.precondition,o))return a;const u=s.value.clone(),c=$l(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ge?function(s,o,a,l){if(!hi(s.precondition,o))return a;const u=$l(s.fieldTransforms,l,o),c=o.data;return c.setAll(Sh(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return hi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function o_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Ih(r.transform,i||null);s!=null&&(e===null&&(e=Qt.empty()),e.set(r.field,s))}return e||null}function Fl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vn(r,i,(s,o)=>r_(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Br extends hs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ge extends hs{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function xl(n,t,e){const r=new Map;rt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,n_(o,a,e[i]))}return r}function $l(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,e_(s,o,t))}return r}class na extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ch extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&s_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=vh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const l=Ph(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Vn(this.mutations,t.mutations,(e,r)=>Fl(e,r))&&Vn(this.baseMutations,t.baseMutations,(e,r)=>Fl(e,r))}}class ra{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){rt(t.mutations.length===r.length);let i=function(){return Xm}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ra(t,e,r,i)}}/**
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
 */class l_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class u_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,H;function kh(n){switch(n){default:return D();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Vh(n){if(n===void 0)return ke("GRPC error has no .code"),p.UNKNOWN;switch(n){case At.OK:return p.OK;case At.CANCELLED:return p.CANCELLED;case At.UNKNOWN:return p.UNKNOWN;case At.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case At.INTERNAL:return p.INTERNAL;case At.UNAVAILABLE:return p.UNAVAILABLE;case At.UNAUTHENTICATED:return p.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case At.NOT_FOUND:return p.NOT_FOUND;case At.ALREADY_EXISTS:return p.ALREADY_EXISTS;case At.PERMISSION_DENIED:return p.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case At.ABORTED:return p.ABORTED;case At.OUT_OF_RANGE:return p.OUT_OF_RANGE;case At.UNIMPLEMENTED:return p.UNIMPLEMENTED;case At.DATA_LOSS:return p.DATA_LOSS;default:return D()}}(H=At||(At={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ia{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ri}static getOrCreateInstance(){return ri===null&&(ri=new ia),ri}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let ri=null;/**
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
 */function c_(){return new TextEncoder}/**
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
 */const h_=new wn([4294967295,4294967295],0);function Ul(n){const t=c_().encode(n),e=new _m;return e.update(t),new Uint8Array(e.digest())}function ql(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new wn([e,r],0),new wn([i,s],0)]}class sa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Yn(`Invalid padding: ${e}`);if(r<0)throw new Yn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Yn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Yn(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=wn.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(wn.fromNumber(r)));return i.compare(h_)===1&&(i=new wn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=Ul(t),[r,i]=ql(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new sa(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=Ul(t),[r,i]=ql(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,jr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ds(O.min(),i,new mt(tt),De(),z())}}class jr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jr(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class Dh{constructor(t,e){this.targetId=t,this.pe=e}}class Nh{constructor(t,e,r=zt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Bl{constructor(){this.ye=0,this.we=Kl(),this.Se=zt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=z(),e=z(),r=z();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:D()}}),new jr(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=Kl()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class d_{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=De(),this.$e=jl(),this.Ue=new mt(tt)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:D()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(io(a))if(s===0){const l=new R(a.path);this.ze(i,l,Vt.newNoDocument(l,O.min()))}else rt(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(t,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(e=ia.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,f,E){var _,y,C,W,x,G;const Y={localCacheCount:f,existenceFilterCount:E.count},j=E.unchangedNames;return j&&(Y.bloomFilter={applied:h===0,hashCount:(_=j==null?void 0:j.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(W=(C=(y=j==null?void 0:j.bits)===null||y===void 0?void 0:y.bitmap)===null||C===void 0?void 0:C.length)!==null&&W!==void 0?W:0,padding:(G=(x=j==null?void 0:j.bits)===null||x===void 0?void 0:x.padding)!==null&&G!==void 0?G:0},d&&(Y.bloomFilter.mightContain=d)),Y}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=an(s).toUint8Array()}catch(h){if(h instanceof sh)return kn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new sa(l,o,a)}catch(h){return kn(h instanceof Yn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,c)?0:2,nt:c}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&io(a.target)){const l=new R(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Vt.newNoDocument(l,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=z();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new ds(t,e,this.Ue,this.Ke,r);return this.Ke=De(),this.$e=jl(),this.Ue=new mt(tt),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Bl,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Kt(tt),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||w("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Bl),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function jl(){return new mt(R.comparator)}function Kl(){return new mt(R.comparator)}const f_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),p_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),g_=(()=>({and:"AND",or:"OR"}))();class m_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lo(n,t){return n.useProto3Json||Ur(t)?t:{value:t}}function bi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function __(n,t){return bi(n,t.toTimestamp())}function re(n){return rt(!!n),O.fromTimestamp(function(e){const r=Ue(e);return new Ct(r.seconds,r.nanos)}(n))}function oa(n,t){return function(r){return new pt(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Oh(n){const t=pt.fromString(n);return rt($h(t)),t}function Oi(n,t){return oa(n.databaseId,t.path)}function ir(n,t){const e=Oh(t);if(e.get(1)!==n.databaseId.projectId)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new R(Mh(e))}function uo(n,t){return oa(n.databaseId,t)}function y_(n){const t=Oh(n);return t.length===4?pt.emptyPath():Mh(t)}function Ir(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mh(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function zl(n,t,e){return{name:Oi(n,t),fields:e.value.mapValue.fields}}function v_(n,t){return"found"in t?function(r,i){rt(!!i.found),i.found.name,i.found.updateTime;const s=ir(r,i.found.name),o=re(i.found.updateTime),a=i.found.createTime?re(i.found.createTime):O.min(),l=new Qt({mapValue:{fields:i.found.fields}});return Vt.newFoundDocument(s,o,a,l)}(n,t):"missing"in t?function(r,i){rt(!!i.missing),rt(!!i.readTime);const s=ir(r,i.missing),o=re(i.readTime);return Vt.newNoDocument(s,o)}(n,t):D()}function T_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:D()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(rt(c===void 0||typeof c=="string"),zt.fromBase64String(c||"")):(rt(c===void 0||c instanceof Uint8Array),zt.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:Vh(u.code);return new T(c,u.message||"")}(o);e=new Nh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ir(n,r.document.name),s=re(r.document.updateTime),o=r.document.createTime?re(r.document.createTime):O.min(),a=new Qt({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];e=new di(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ir(n,r.document),s=r.readTime?re(r.readTime):O.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new di([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ir(n,r.document),s=r.removedTargetIds||[];e=new di([],s,i,null)}else{if(!("filter"in t))return D();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new u_(i,s),a=r.targetId;e=new Dh(a,o)}}return e}function Lh(n,t){let e;if(t instanceof Br)e={update:zl(n,t.key,t.value)};else if(t instanceof na)e={delete:Oi(n,t.key)};else if(t instanceof Ge)e={update:zl(n,t.key,t.data),updateMask:k_(t.fieldMask)};else{if(!(t instanceof Ch))return D();e={verify:Oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw D()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:__(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:D()}(n,t.precondition)),e}function E_(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?re(i.updateTime):re(s);return o.isEqual(O.min())&&(o=re(s)),new i_(o,i.transformResults||[])}(e,t))):[]}function I_(n,t){return{documents:[uo(n,t.path)]}}function w_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=uo(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=uo(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return xh(ue.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:mn(h.field),direction:P_(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=lo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),e}function A_(n){let t=y_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){rt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(h){const d=Fh(h);return d instanceof ue&&uh(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new er(_n(E.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ur(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Vi(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Vi(f,d)}(e.endAt)),Gm(t,i,o,s,a,"F",l,u)}function R_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return D()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Fh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=_n(e.unaryFilter.field);return Pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_n(e.unaryFilter.field);return Pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_n(e.unaryFilter.field);return Pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_n(e.unaryFilter.field);return Pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(n):n.fieldFilter!==void 0?function(e){return Pt.create(_n(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ue.create(e.compositeFilter.filters.map(r=>Fh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return D()}}(e.compositeFilter.op))}(n):D()}function P_(n){return f_[n]}function S_(n){return p_[n]}function C_(n){return g_[n]}function mn(n){return{fieldPath:n.canonicalString()}}function _n(n){return qt.fromServerFormat(n.fieldPath)}function xh(n){return n instanceof Pt?function(e){if(e.op==="=="){if(Dl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NAN"}};if(Vl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NAN"}};if(Vl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(e.field),op:S_(e.op),value:e.value}}}(n):n instanceof ue?function(e){const r=e.getFilters().map(i=>xh(i));return r.length===1?r[0]:{compositeFilter:{op:C_(e.op),filters:r}}}(n):D()}function k_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $h(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e,r,i,s=O.min(),o=O.min(),a=zt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Fe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.ct=t}}function D_(n){const t=A_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.sn=new b_}addToCollectionParentIndex(t,e){return this.sn.add(e),g.resolve()}getCollectionParents(t,e){return g.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return g.resolve()}deleteFieldIndex(t,e){return g.resolve()}getDocumentsMatchingTarget(t,e){return g.resolve(null)}getIndexType(t,e){return g.resolve(0)}getFieldIndexes(t,e){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,e){return g.resolve($e.min())}getMinOffsetFromCollectionGroup(t,e){return g.resolve($e.min())}updateCollectionGroup(t,e,r){return g.resolve()}updateIndexEntries(t,e){return g.resolve()}}class b_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Kt(pt.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Kt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class O_{constructor(){this.changes=new $n(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?g.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class M_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&rr(r.mutation,i,ne.empty(),Ct.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const i=Ze();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Xn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Ze();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=De();const o=nr(),a=function(){return nr()}();return e.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ge)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),rr(c.mutation,u,c.mutation.getFieldMask(),Ct.now())):o.set(u.key,ne.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),e.forEach((u,c)=>{var h;return a.set(u,new M_(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=nr();let i=new mt((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let c=r.get(l)||ne.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=vh();c.forEach(d=>{if(!s.has(d)){const f=Ph(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return R.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ph(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):g.resolve(Ze());let a=-1,l=s;return o.next(u=>g.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,z())).next(c=>({batchId:a,changes:yh(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new R(e)).next(r=>{let i=Xn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=Xn();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const l=function(c,h){return new qr(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Vt.newInvalidDocument(u)))});let o=Xn();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&rr(u.mutation,l,ne.empty(),Ct.now()),us(e,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return g.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:re(i.createTime)}}(e)),g.resolve()}getNamedQuery(t,e){return g.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:D_(i.bundledQuery),readTime:re(i.readTime)}}(e)),g.resolve()}}/**
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
 */class x_{constructor(){this.overlays=new mt(R.comparator),this.cr=new Map}getOverlay(t,e){return g.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ze();return g.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),g.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),g.resolve()}getOverlaysForCollection(t,e,r){const i=Ze(),s=e.length+1,o=new R(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return g.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new mt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ze(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ze(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return g.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l_(e,r));let s=this.cr.get(e);s===void 0&&(s=z(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.lr=new Kt(kt.hr),this.Pr=new Kt(kt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new kt(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new kt(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new R(new pt([])),r=new kt(e,t),i=new kt(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new R(new pt([])),r=new kt(e,t),i=new kt(e,t+1);let s=z();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new kt(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return R.comparator(t.key,e.key)||tt(t.mr,e.mr)}static Ir(t,e){return tt(t.mr,e.mr)||R.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Kt(kt.hr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new a_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new kt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,e){return g.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),i=new kt(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Kt(tt);return e.forEach(i=>{const s=new kt(i,0),o=new kt(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),g.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;R.isDocumentKey(s)||(s=s.child(""));const o=new kt(new R(s),0);let a=new Kt(tt);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),g.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){rt(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return g.forEach(e.mutations,i=>{const s=new kt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new kt(e,0),i=this.pr.firstAfterOrEqual(r);return g.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.Dr=t,this.docs=function(){return new mt(R.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return g.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let r=De();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=De();const o=e.path,a=new R(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||km(Cm(c),r)<=0||(i.has(c.key)||us(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,e,r,i){D()}vr(t,e){return g.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new q_(this)}getSize(t){return g.resolve(this.size)}}class q_ extends O_{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),g.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t){this.persistence=t,this.Cr=new $n(e=>Jo(e),Zo),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new aa,this.targetCount=0,this.Or=bn.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),g.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new bn(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,g.resolve()}updateTargetData(t,e){return this.Ln(e),g.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return g.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),g.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),g.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return g.resolve(r)}containsKey(t,e){return g.resolve(this.Mr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,e){this.Nr={},this.overlays={},this.Br=new Ho(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new B_(this),this.indexManager=new N_,this.remoteDocumentCache=function(i){return new U_(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new V_(e),this.Qr=new F_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new x_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new $_(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){w("MemoryPersistence","Starting transaction:",t);const i=new K_(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return g.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class K_ extends Dm{constructor(t){super(),this.currentSequenceNumber=t}}class la{constructor(t){this.persistence=t,this.Wr=new aa,this.Gr=null}static zr(t){return new la(t)}get jr(){if(this.Gr)return this.Gr;throw D()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),g.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),g.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.jr,r=>{const i=R.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,O.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return g.or([()=>g.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class z_{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(Ml(e))return g.resolve(null);let r=Ve(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=oo(e,null,"F"),r=Ve(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=z(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(e,a);return this.zi(e,u,o,l.readTime)?this.$i(t,oo(e,null,"F")):this.ji(t,u,e,l)}))})))}Ui(t,e,r,i){return Ml(e)||i.isEqual(O.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(Rl()<=rn.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ao(e)),this.ji(t,o,e,Sm(i,-1)))})}Gi(t,e){let r=new Kt(mh(t));return e.forEach((i,s)=>{us(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return Rl()<=rn.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ao(e)),this.Ki.getDocumentsMatchingQuery(t,e,$e.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new mt(tt),this.Yi=new $n(s=>Jo(s),Zo),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new L_(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function W_(n,t,e,r){return new G_(n,t,e,r)}async function Uh(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return e.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function H_(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(E=>{f=f.next(()=>c.getEntry(l,E)).next(_=>{const y=u.docVersions.get(E);rt(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function qh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function Q_(n,t){const e=q(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(zt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,y,C){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,c)&&a.push(e.kr.updateTargetData(s,f))});let l=De(),u=z();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(X_(s,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(O.min())){const c=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(e.Ji=i,s))}function X_(n,t,e){let r=z(),i=z();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=De();return e.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(O.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function Y_(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function J_(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new Fe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function co(n,t,e){const r=q(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$r(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Gl(n,t,e){const r=q(n);let i=O.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=q(l),d=h.Yi.get(c);return d!==void 0?g.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,Ve(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:O.min(),e?s:z())).next(a=>(Z_(r,Wm(t),a),{documents:a,ss:s})))}function Z_(n,t,e){let r=n.Zi.get(t)||O.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}class Wl{constructor(){this.activeTargetIds=Zm()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ty{constructor(){this.Hs=new Wl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Wl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ii=null;function Ls(){return ii===null?ii=function(){return 268435456+Math.round(2147483648*Math.random())}():ii++,"0x"+ii.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class iy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.To=r+"://"+e.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(e,r,i,s,o){const a=Ls(),l=this.Vo(e,r);w("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={};return this.mo(u,s,o),this.fo(e,l,u,i).then(c=>(w("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw kn("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}po(e,r,i,s,o,a){return this.Ro(e,r,i,s,o)}mo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}Vo(e,r){const i=ny[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}fo(t,e,r,i){const s=Ls();return new Promise((o,a)=>{const l=new mm;l.setWithCredentials(!0),l.listenOnce(fm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ms.NO_ERROR:const c=l.getResponseJson();w($t,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ms.TIMEOUT:w($t,`RPC '${t}' ${s} timed out`),a(new T(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const h=l.getStatus();if(w($t,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(y){const C=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(C)>=0?C:p.UNKNOWN}(f.status);a(new T(E,f.message))}else a(new T(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(p.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{w($t,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);w($t,`RPC '${t}' ${s} sending request:`,i),l.send(e,"POST",u,r,15)})}yo(t,e,r){const i=Ls(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=hm(),a=dm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new gm({})),this.mo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const c=s.join("");w($t,`Creating RPC '${t}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const E=new ry({so:y=>{f?w($t,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(d||(w($t,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),w($t,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),_=(y,C,W)=>{y.listen(C,x=>{try{W(x)}catch(G){setTimeout(()=>{throw G},0)}})};return _(h,ti.EventType.OPEN,()=>{f||w($t,`RPC '${t}' stream ${i} transport opened.`)}),_(h,ti.EventType.CLOSE,()=>{f||(f=!0,w($t,`RPC '${t}' stream ${i} transport closed`),E.Po())}),_(h,ti.EventType.ERROR,y=>{f||(f=!0,kn($t,`RPC '${t}' stream ${i} transport errored:`,y),E.Po(new T(p.UNAVAILABLE,"The operation could not be completed")))}),_(h,ti.EventType.MESSAGE,y=>{var C;if(!f){const W=y.data[0];rt(!!W);const x=W,G=x.error||((C=x[0])===null||C===void 0?void 0:C.error);if(G){w($t,`RPC '${t}' stream ${i} received error:`,G);const Y=G.status;let j=function(Ot){const J=At[Ot];if(J!==void 0)return Vh(J)}(Y),ot=G.message;j===void 0&&(j=p.INTERNAL,ot="Unknown error status: "+Y+" with message "+G.message),f=!0,E.Po(new T(j,ot)),h.close()}else w($t,`RPC '${t}' stream ${i} received:`,W),E.Io(W)}}),_(a,pm.STAT_EVENT,y=>{y.stat===wl.PROXY?w($t,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===wl.NOPROXY&&w($t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}function Fs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){return new m_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const e=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-r);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,r,i,s,o,a,l){this.ii=t,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new ca(t,e)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(t,e){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,t!==4?this.Qo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(ke(e.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Yo(){}auth(){this.state=1;const t=this.Zo(this.Lo),e=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===e&&this.Xo(r,i)},r=>{t(()=>{const i=new T(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(t,e){const r=this.Zo(this.Lo);this.stream=this.t_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Zo(t){return e=>{this.ii.enqueueAndForget(()=>this.Lo===t?e():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sy extends Bh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}t_(t,e){return this.connection.yo("Listen",t,e)}onMessage(t){this.Qo.reset();const e=T_(this.serializer,t),r=function(s){if(!("targetChange"in s))return O.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?O.min():o.readTime?re(o.readTime):O.min()}(t);return this.listener.n_(e,r)}r_(t){const e={};e.database=Ir(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=io(l)?{documents:I_(s,l)}:{query:w_(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bh(s,o.resumeToken);const u=lo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(O.min())>0){a.readTime=bi(s,o.snapshotVersion.toTimestamp());const u=lo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=R_(this.serializer,t);r&&(e.labels=r),this.jo(e)}i_(t){const e={};e.database=Ir(this.serializer),e.removeTarget=t,this.jo(e)}}class oy extends Bh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if(rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.s_){this.Qo.reset();const e=E_(t.writeResults,t.commitTime),r=re(t.commitTime);return this.listener.a_(r,e)}return rt(!t.writeResults||t.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const t={};t.database=Ir(this.serializer),this.jo(t)}__(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Lh(this.serializer,r))};this.jo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(t,e,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(p.UNKNOWN,i.toString())})}po(t,e,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(p.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class ly{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(t){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.A_("Offline")))}set(t){this.m_(),this.I_=0,t==="Online"&&(this.E_=!1),this.A_(t)}A_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}R_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(ke(e),this.E_=!1):w("OnlineStateTracker",e)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{dn(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=q(l);u.p_.add(4),await Kr(u),u.S_.set("Unknown"),u.p_.delete(4),await ps(u)}(this))})}),this.S_=new ly(r,i)}}async function ps(n){if(dn(n))for(const t of n.y_)await t(!0)}async function Kr(n){for(const t of n.y_)await t(!1)}function jh(n,t){const e=q(n);e.g_.has(t.targetId)||(e.g_.set(t.targetId,t),fa(e)?da(e):Un(e).$o()&&ha(e,t))}function Kh(n,t){const e=q(n),r=Un(e);e.g_.delete(t),r.$o()&&zh(e,t),e.g_.size===0&&(r.$o()?r.Go():dn(e)&&e.S_.set("Unknown"))}function ha(n,t){if(n.b_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Un(n).r_(t)}function zh(n,t){n.b_.Be(t),Un(n).i_(t)}function da(n){n.b_=new d_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.g_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.S_.d_()}function fa(n){return dn(n)&&!Un(n).Ko()&&n.g_.size>0}function dn(n){return q(n).p_.size===0}function Gh(n){n.b_=void 0}async function cy(n){n.g_.forEach((t,e)=>{ha(n,t)})}async function hy(n,t){Gh(n),fa(n)?(n.S_.V_(t),da(n)):n.S_.set("Unknown")}async function dy(n,t,e){if(n.S_.set("Online"),t instanceof Nh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,t)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mi(n,r)}else if(t instanceof di?n.b_.We(t):t instanceof Dh?n.b_.Ze(t):n.b_.je(t),!e.isEqual(O.min()))try{const r=await qh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.g_.get(u);c&&s.g_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.g_.get(l);if(!c)return;s.g_.set(l,c.withResumeToken(zt.EMPTY_BYTE_STRING,c.snapshotVersion)),zh(s,l);const h=new Fe(c.target,l,u,c.sequenceNumber);ha(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){w("RemoteStore","Failed to raise snapshot:",r),await Mi(n,r)}}async function Mi(n,t,e){if(!$r(t))throw t;n.p_.add(1),await Kr(n),n.S_.set("Offline"),e||(e=()=>qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await e(),n.p_.delete(1),await ps(n)})}function Wh(n,t){return t().catch(e=>Mi(n,e,t))}async function gs(n){const t=q(n),e=qe(t);let r=t.f_.length>0?t.f_[t.f_.length-1].batchId:-1;for(;fy(t);)try{const i=await Y_(t.localStore,r);if(i===null){t.f_.length===0&&e.Go();break}r=i.batchId,py(t,i)}catch(i){await Mi(t,i)}Hh(t)&&Qh(t)}function fy(n){return dn(n)&&n.f_.length<10}function py(n,t){n.f_.push(t);const e=qe(n);e.$o()&&e.o_&&e.__(t.mutations)}function Hh(n){return dn(n)&&!qe(n).Ko()&&n.f_.length>0}function Qh(n){qe(n).start()}async function gy(n){qe(n).c_()}async function my(n){const t=qe(n);for(const e of n.f_)t.__(e.mutations)}async function _y(n,t,e){const r=n.f_.shift(),i=ra.from(r,t,e);await Wh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await gs(n)}async function yy(n,t){t&&qe(n).o_&&await async function(r,i){if(function(o){return kh(o)&&o!==p.ABORTED}(i.code)){const s=r.f_.shift();qe(r).Wo(),await Wh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gs(r)}}(n,t),Hh(n)&&Qh(n)}async function Ql(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const r=dn(e);e.p_.add(3),await Kr(e),r&&e.S_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.p_.delete(3),await ps(e)}async function vy(n,t){const e=q(n);t?(e.p_.delete(2),await ps(e)):t||(e.p_.add(2),await Kr(e),e.S_.set("Unknown"))}function Un(n){return n.D_||(n.D_=function(e,r,i){const s=q(e);return s.h_(),new sy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:cy.bind(null,n),uo:hy.bind(null,n),n_:dy.bind(null,n)}),n.y_.push(async t=>{t?(n.D_.Wo(),fa(n)?da(n):n.S_.set("Unknown")):(await n.D_.stop(),Gh(n))})),n.D_}function qe(n){return n.v_||(n.v_=function(e,r,i){const s=q(e);return s.h_(),new oy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:gy.bind(null,n),uo:yy.bind(null,n),u_:my.bind(null,n),a_:_y.bind(null,n)}),n.y_.push(async t=>{t?(n.v_.Wo(),await gs(n)):(await n.v_.stop(),n.f_.length>0&&(w("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new pa(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,t){if(ke("AsyncQueue",`${t}: ${n}`),$r(n))return new T(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||R.comparator(e.key,r.key):(e,r)=>R.comparator(e.key,r.key),this.keyedMap=Xn(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new Rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Xl{constructor(){this.C_=new mt(R.comparator)}track(t){const e=t.doc.key,r=this.C_.get(e);r?t.type!==0&&r.type===3?this.C_=this.C_.insert(e,t):t.type===3&&r.type!==1?this.C_=this.C_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.C_=this.C_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.C_=this.C_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.C_=this.C_.remove(e):t.type===1&&r.type===2?this.C_=this.C_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.C_=this.C_.insert(e,{type:2,doc:t.doc}):D():this.C_=this.C_.insert(e,t)}F_(){const t=[];return this.C_.inorderTraversal((e,r)=>{t.push(r)}),t}}class On{constructor(t,e,r,i,s,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new On(t,e,Rn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ls(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.M_=void 0,this.listeners=[]}}class Ey{constructor(){this.queries=new $n(t=>gh(t),ls),this.onlineState="Unknown",this.x_=new Set}}async function Xh(n,t){const e=q(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Ty),i)try{s.M_=await e.onListen(r)}catch(o){const a=ga(o,`Initialization of query '${ao(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.O_(e.onlineState),s.M_&&t.N_(s.M_)&&ma(e)}async function Yh(n,t){const e=q(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function Iy(n,t){const e=q(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&ma(e)}function wy(n,t,e){const r=q(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function ma(n){n.x_.forEach(t=>{t.next()})}class Jh{constructor(t,e,r){this.query=t,this.B_=e,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new On(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.L_?this.q_(t)&&(this.B_.next(t),e=!0):this.Q_(t,this.onlineState)&&(this.K_(t),e=!0),this.k_=t,e}onError(t){this.B_.error(t)}O_(t){this.onlineState=t;let e=!1;return this.k_&&!this.L_&&this.Q_(this.k_,t)&&(this.K_(this.k_),e=!0),e}Q_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.U_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}q_(t){if(t.docChanges.length>0)return!0;const e=this.k_&&this.k_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}K_(t){t=On.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.L_=!0,this.B_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.key=t}}class td{constructor(t){this.key=t}}class Ay{constructor(t,e){this.query=t,this.Z_=e,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=z(),this.mutatedKeys=z(),this.ta=mh(t),this.na=new Rn(this.ta)}get ra(){return this.Z_}ia(t,e){const r=e?e.sa:new Xl,i=e?e.na:this.na;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=us(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?E!==_&&(r.track({type:3,doc:f}),y=!0):this.oa(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.ta(f,l)>0||u&&this.ta(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.na;this.na=t.na,this.mutatedKeys=t.mutatedKeys;const s=t.sa.F_();s.sort((u,c)=>function(d,f){const E=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return E(d)-E(f)}(u.type,c.type)||this.ta(u.doc,c.doc)),this._a(r);const o=e?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new On(this.query,t.na,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new Xl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(t){return!this.Z_.has(t)&&!!this.na.has(t)&&!this.na.get(t).hasLocalMutations}_a(t){t&&(t.addedDocuments.forEach(e=>this.Z_=this.Z_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Z_=this.Z_.delete(e)),this.current=t.current)}aa(){if(!this.current)return[];const t=this.ea;this.ea=z(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const e=[];return t.forEach(r=>{this.ea.has(r)||e.push(new td(r))}),this.ea.forEach(r=>{t.has(r)||e.push(new Zh(r))}),e}la(t){this.Z_=t.ss,this.ea=z();const e=this.ia(t.documents);return this.applyChanges(e,!0)}ha(){return On.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class Ry{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Py{constructor(t){this.key=t,this.Pa=!1}}class Sy{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new $n(a=>gh(a),ls),this.Ea=new Map,this.da=new Set,this.Aa=new mt(R.comparator),this.Ra=new Map,this.Va=new aa,this.ma={},this.fa=new Map,this.ga=bn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function Cy(n,t){const e=xy(n);let r,i;const s=e.Ta.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await J_(e.localStore,Ve(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ky(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&jh(e.remoteStore,o)}return i}async function ky(n,t,e,r,i){n.ya=(h,d,f)=>async function(_,y,C,W){let x=y.view.ia(C);x.zi&&(x=await Gl(_.localStore,y.query,!1).then(({documents:j})=>y.view.ia(j,x)));const G=W&&W.targetChanges.get(y.targetId),Y=y.view.applyChanges(x,_.isPrimaryClient,G);return Jl(_,y.targetId,Y.ua),Y.snapshot}(n,h,d,f);const s=await Gl(n.localStore,t,!0),o=new Ay(t,s.ss),a=o.ia(s.documents),l=jr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);Jl(n,e,u.ua);const c=new Ry(t,e,o);return n.Ta.set(t,c),n.Ea.has(e)?n.Ea.get(e).push(t):n.Ea.set(e,[t]),u.snapshot}async function Vy(n,t){const e=q(n),r=e.Ta.get(t),i=e.Ea.get(r.targetId);if(i.length>1)return e.Ea.set(r.targetId,i.filter(s=>!ls(s,t))),void e.Ta.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await co(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Kh(e.remoteStore,r.targetId),ho(e,r.targetId)}).catch(xr)):(ho(e,r.targetId),await co(e.localStore,r.targetId,!0))}async function Dy(n,t,e){const r=$y(n);try{const i=await function(o,a){const l=q(o),u=Ct.now(),c=a.reduce((f,E)=>f.add(E.key),z());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=De(),_=z();return l.Xi.getEntries(f,c).next(y=>{E=y,E.forEach((C,W)=>{W.isValidDocument()||(_=_.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,E)).next(y=>{h=y;const C=[];for(const W of a){const x=o_(W,h.get(W.key).overlayedDocument);x!=null&&C.push(new Ge(W.key,x,oh(x.value.mapValue),te.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,C,a)}).next(y=>{d=y;const C=y.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,y.batchId,C)})}).then(()=>({batchId:d.batchId,changes:yh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ma[o.currentUser.toKey()];u||(u=new mt(tt)),u=u.insert(a,l),o.ma[o.currentUser.toKey()]=u}(r,i.batchId,e),await zr(r,i.changes),await gs(r.remoteStore)}catch(i){const s=ga(i,"Failed to persist write");e.reject(s)}}async function ed(n,t){const e=q(n);try{const r=await Q_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Ra.get(s);o&&(rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?rt(o.Pa):i.removedDocuments.size>0&&(rt(o.Pa),o.Pa=!1))}),await zr(e,r,t)}catch(r){await xr(r)}}function Yl(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=q(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.O_(a)&&(u=!0)}),u&&ma(l)}(r.eventManager,t),i.length&&r.Ia.n_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ny(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ra.get(t),s=i&&i.key;if(s){let o=new mt(R.comparator);o=o.insert(s,Vt.newNoDocument(s,O.min()));const a=z().add(s),l=new ds(O.min(),new Map,new mt(tt),o,a);await ed(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(t),_a(r)}else await co(r.localStore,t,!1).then(()=>ho(r,t,e)).catch(xr)}async function by(n,t){const e=q(n),r=t.batch.batchId;try{const i=await H_(e.localStore,t);rd(e,r,null),nd(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zr(e,i)}catch(i){await xr(i)}}async function Oy(n,t,e){const r=q(n);try{const i=await function(o,a){const l=q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(rt(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);rd(r,t,e),nd(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zr(r,i)}catch(i){await xr(i)}}function nd(n,t){(n.fa.get(t)||[]).forEach(e=>{e.resolve()}),n.fa.delete(t)}function rd(n,t,e){const r=q(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.ma[r.currentUser.toKey()]=i}}function ho(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ea.get(t))n.Ta.delete(r),e&&n.Ia.wa(r,e);n.Ea.delete(t),n.isPrimaryClient&&n.Va.Ar(t).forEach(r=>{n.Va.containsKey(r)||id(n,r)})}function id(n,t){n.da.delete(t.path.canonicalString());const e=n.Aa.get(t);e!==null&&(Kh(n.remoteStore,e),n.Aa=n.Aa.remove(t),n.Ra.delete(e),_a(n))}function Jl(n,t,e){for(const r of e)r instanceof Zh?(n.Va.addReference(r.key,t),My(n,r)):r instanceof td?(w("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,t),n.Va.containsKey(r.key)||id(n,r.key)):D()}function My(n,t){const e=t.key,r=e.path.canonicalString();n.Aa.get(e)||n.da.has(r)||(w("SyncEngine","New document in limbo: "+e),n.da.add(r),_a(n))}function _a(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const t=n.da.values().next().value;n.da.delete(t);const e=new R(pt.fromString(t)),r=n.ga.next();n.Ra.set(r,new Py(e)),n.Aa=n.Aa.insert(e,r),jh(n.remoteStore,new Fe(Ve(ta(e.path)),r,"TargetPurposeLimboResolution",Ho.ae))}}async function zr(n,t,e){const r=q(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ua.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,u){const c=q(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Li,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!$r(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.Ji.get(d),E=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(E);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function Ly(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const r=await Uh(e.localStore,t);e.currentUser=t,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new T(p.CANCELLED,o))})}),s.fa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zr(e,r.ts)}}function Fy(n,t){const e=q(n),r=e.Ra.get(t);if(r&&r.Pa)return z().add(r.key);{let i=z();const s=e.Ea.get(t);if(!s)return i;for(const o of s){const a=e.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function xy(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ny.bind(null,t),t.Ia.n_=Iy.bind(null,t.eventManager),t.Ia.wa=wy.bind(null,t.eventManager),t}function $y(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=by.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Oy.bind(null,t),t}class Zl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return W_(this.persistence,new z_,t.initialUser,this.serializer)}createPersistence(t){return new j_(la.zr,this.serializer)}createSharedClientState(t){return new ty}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ly.bind(null,this.syncEngine),await vy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ey}()}createDatastore(t){const e=fs(t.databaseInfo.databaseId),r=function(s){return new iy(s)}(t.databaseInfo);return function(s,o,a,l){return new ay(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new uy(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Yl(this.syncEngine,e,0),function(){return Hl.v()?new Hl:new ey}())}createSyncEngine(t,e){return function(i,s,o,a,l,u,c){const h=new Sy(i,s,o,a,l,u);return c&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=q(e);w("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Kr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Da(this.observer.next,t)}error(t){this.observer.error?this.Da(this.observer.error,t):ke("Uncaught Error in snapshot listener:",t.toString())}va(){this.muted=!0}Da(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=q(i),a=Ir(o.serializer)+"/documents",l={documents:s.map(d=>Oi(o.serializer,d))},u=await o.po("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=v_(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());rt(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new na(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=R.fromPath(r);this.mutations.push(new Ch(i,this.precondition(i)))}),await async function(r,i){const s=q(r),o=Ir(s.serializer)+"/documents",a={writes:i.map(l=>Lh(s.serializer,l))};await s.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw D();e=O.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new T(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(O.min())?te.exists(!1):te.updateTime(e):te.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(O.min()))throw new T(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return te.updateTime(e)}return te.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.ka=r.maxAttempts,this.Qo=new ca(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const t=new qy(this.datastore),e=this.Qa(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ka(i)}))}).catch(r=>{this.Ka(r)})})}Qa(t){try{const e=this.updateFunction(t);return!Ur(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ka(t){this.ka>0&&this.$a(t)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(t)}$a(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!kh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=rh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{w("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(w("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ga(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function xs(n,t){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Uh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function tu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zy(n);w("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Ql(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ql(t.remoteStore,s)),n._onlineComponents=t}function Ky(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function zy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await xs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ky(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await xs(n,new Zl)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await xs(n,new Zl);return n._offlineComponents}async function ya(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await tu(n,n._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await tu(n,new Uy))),n._onlineComponents}function Gy(n){return ya(n).then(t=>t.syncEngine)}function Wy(n){return ya(n).then(t=>t.datastore)}async function od(n){const t=await ya(n),e=t.eventManager;return e.onListen=Cy.bind(null,t.syncEngine),e.onUnlisten=Vy.bind(null,t.syncEngine),e}function Hy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new sd({next:d=>{o.enqueueAndForget(()=>Yh(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Jh(ta(a.path),c,{includeMetadataChanges:!0,U_:!0});return Xh(s,h)}(await od(n),n.asyncQueue,t,e,r)),r.promise}function Qy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new sd({next:d=>{o.enqueueAndForget(()=>Yh(s,h)),d.fromCache&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Jh(a,c,{includeMetadataChanges:!0,U_:!0});return Xh(s,h)}(await od(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function ad(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ld(n,t,e){if(!e)throw new T(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Xy(n,t,e,r){if(t===!0&&r===!0)throw new T(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function nu(n){if(!R.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ru(n){if(R.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":D()}function Be(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new T(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ms(n);throw new T(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new T(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Xy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ad((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _s{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ym;switch(r.type){case"firstParty":return new Im(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=eu.get(e);r&&(w("ComponentProvider","Removing Datastore"),eu.delete(e),r.terminate())}(this),Promise.resolve()}}function Yy(n,t,e,r={}){var i;const s=(n=Be(n,_s))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ut.MOCK_USER;else{a=qd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ut(u)}n._authCredentials=new vm(new nh(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qn(this.firestore,t,this._query)}}class Zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zt(this.firestore,t,this._key)}}class xe extends qn{constructor(t,e,r){super(t,e,ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zt(this.firestore,null,new R(t))}withConverter(t){return new xe(this.firestore,t,this._path)}}function ud(n,t,...e){if(n=Dt(n),ld("collection","path",t),n instanceof _s){const r=pt.fromString(t,...e);return ru(r),new xe(n,null,r)}{if(!(n instanceof Zt||n instanceof xe))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return ru(r),new xe(n.firestore,null,r)}}function Li(n,t,...e){if(n=Dt(n),arguments.length===1&&(t=rh.V()),ld("doc","path",t),n instanceof _s){const r=pt.fromString(t,...e);return nu(r),new Zt(n,null,new R(r))}{if(!(n instanceof Zt||n instanceof xe))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return nu(r),new Zt(n.firestore,n instanceof xe?n.converter:null,new R(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new ca(this,"async_queue_retry"),this.Za=()=>{const e=Fs();e&&w("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Qo.Oo()};const t=Fs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const e=Fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const e=new me;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!$r(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const e=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=e,e}enqueueAfterDelay(t,e,r){this.Xa(),this.Ya.indexOf(t)>-1&&(e=0);const i=pa.createAndSchedule(this,t,e,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&D()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const e of this.za)if(e.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.za)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const e=this.za.indexOf(t);this.za.splice(e,1)}}class Gr extends _s{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Jy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cd(this),this._firestoreClient.terminate()}}function tn(n,t){const e=typeof n=="object"?n:mu(),r=typeof n=="string"?n:t||"(default)",i=go(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ud("firestore");s&&Yy(i,...s)}return i}function ys(n){return n._firestoreClient||cd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function cd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,l,u,c){return new Om(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ad(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new jy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new un(zt.fromBase64String(t))}catch(e){throw new T(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new un(zt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new T(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ta{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=/^__.*__$/;class tv{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Br(t,this.data,e,this.fieldTransforms)}}class hd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function dd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class Ea{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(t){return new Ea(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.uu({path:r,lu:!1});return i.hu(t),i}Pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(t){return this.uu({path:void 0,lu:!0})}Tu(t){return Fi(t,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_u(){if(this.path)for(let t=0;t<this.path.length;t++)this.hu(this.path.get(t))}hu(t){if(t.length===0)throw this.Tu("Document fields must not be empty");if(dd(this.au)&&Zy.test(t))throw this.Tu('Document fields cannot begin and end with "__"')}}class ev{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||fs(t)}Au(t,e,r,i=!1){return new Ea({au:t,methodName:e,du:r,path:qt.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ia(n){const t=n._freezeSettings(),e=fs(n._databaseId);return new ev(n._databaseId,!!t.ignoreUndefinedProperties,e)}function fd(n,t,e,r,i,s={}){const o=n.Au(s.merge||s.mergeFields?2:0,t,e,i);wa("Data must be an object, but it was:",o,r);const a=pd(r,o);let l,u;if(s.merge)l=new ne(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=fo(t,h,e);if(!o.contains(d))throw new T(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);md(c,d)||c.push(d)}l=new ne(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new tv(new Qt(a),l,u)}class Ts extends va{_toFieldTransform(t){if(t.au!==2)throw t.au===1?t.Tu(`${this._methodName}() can only appear at the top level of your update data`):t.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ts}}function nv(n,t,e,r){const i=n.Au(1,t,e);wa("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();hn(r,(l,u)=>{const c=Aa(t,l,e);u=Dt(u);const h=i.Pu(c);if(u instanceof Ts)s.push(c);else{const d=Wr(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ne(s);return new hd(o,a,i.fieldTransforms)}function rv(n,t,e,r,i,s){const o=n.Au(1,t,e),a=[fo(t,r,e)],l=[i];if(s.length%2!=0)throw new T(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(fo(t,s[d])),l.push(s[d+1]);const u=[],c=Qt.empty();for(let d=a.length-1;d>=0;--d)if(!md(u,a[d])){const f=a[d];let E=l[d];E=Dt(E);const _=o.Pu(f);if(E instanceof Ts)u.push(f);else{const y=Wr(E,_);y!=null&&(u.push(f),c.set(f,y))}}const h=new ne(u);return new hd(c,h,o.fieldTransforms)}function iv(n,t,e,r=!1){return Wr(e,n.Au(r?4:3,t))}function Wr(n,t){if(gd(n=Dt(n)))return wa("Unsupported field value:",t,n),pd(n,t);if(n instanceof va)return function(r,i){if(!dd(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.lu&&t.au!==4)throw t.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Wr(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ct.fromDate(r);return{timestampValue:bi(i.serializer,s)}}if(r instanceof Ct){const s=new Ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bi(i.serializer,s)}}if(r instanceof Ta)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:bh(i.serializer,r._byteString)};if(r instanceof Zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:oa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${ms(r)}`)}(n,t)}function pd(n,t){const e={};return ih(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hn(n,(r,i)=>{const s=Wr(i,t.cu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function gd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof Ta||n instanceof un||n instanceof Zt||n instanceof va)}function wa(n,t,e){if(!gd(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ms(e);throw r==="an object"?t.Tu(n+" a custom object"):t.Tu(n+" "+r)}}function fo(n,t,e){if((t=Dt(t))instanceof vs)return t._internalPath;if(typeof t=="string")return Aa(n,t);throw Fi("Field path arguments must be of type string or ",n,!1,void 0,e)}const sv=new RegExp("[~\\*/\\[\\]]");function Aa(n,t,e){if(t.search(sv)>=0)throw Fi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new vs(...t.split("."))._internalPath}catch{throw Fi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Fi(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new T(p.INVALID_ARGUMENT,a+n+l)}function md(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ov(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_d("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ov extends xi{data(){return super.data()}}function _d(n,t){return typeof t=="string"?Aa(n,t):t instanceof vs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ra{}class lv extends Ra{}function yd(n,t,...e){let r=[];t instanceof Ra&&r.push(t),r=r.concat(e),function(s){const o=s.filter(l=>l instanceof Sa).length,a=s.filter(l=>l instanceof Pa).length;if(o>1||o>0&&a>0)throw new T(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Pa extends lv{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Pa(t,e,r)}_apply(t){const e=this._parse(t);return vd(t._query,e),new qn(t.firestore,t.converter,so(t._query,e))}_parse(t){const e=Ia(t.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ou(h,c);const f=[];for(const E of h)f.push(su(l,s,E));d={arrayValue:{values:f}}}else d=su(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ou(h,c),d=iv(a,o,h,c==="in"||c==="not-in");return Pt.create(u,c,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Sa extends Ra{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Sa(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ue.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)vd(o,l),o=so(o,l)}(t._query,e),new qn(t.firestore,t.converter,so(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function su(n,t,e){if(typeof(e=Dt(e))=="string"){if(e==="")throw new T(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ph(t)&&e.indexOf("/")!==-1)throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(pt.fromString(e));if(!R.isDocumentKey(r))throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kl(n,new R(r))}if(e instanceof Zt)return kl(n,e._key);throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ms(e)}.`)}function ou(n,t){if(!Array.isArray(n)||n.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vd(n,t){if(t.isInequality()){const r=ea(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new T(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=fh(n);s!==null&&uv(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function uv(n,t,e){if(!e.isEqual(t))throw new T(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}class Td{convertValue(t,e="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(an(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw D()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Ta(Rt(t.latitude),Rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Xo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_r(t));default:return null}}convertTimestamp(t){const e=Ue(t);return new Ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=pt.fromString(t);rt($h(r));const i=new yr(r.get(1),r.get(3)),s=new R(r.popFirst(5));return i.isEqual(e)||ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class cv extends Td{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ca extends xi{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(_d("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class fi extends Ca{data(t={}){return super.data(t)}}class hv{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new fi(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:dv(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){n=Be(n,Zt);const t=Be(n.firestore,Gr);return Hy(ys(t),n._key).then(e=>mv(t,n,e))}class ka extends Td{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}function Id(n){n=Be(n,qn);const t=Be(n.firestore,Gr),e=ys(t),r=new ka(t);return av(n._query),Qy(e,n._query).then(i=>new hv(t,r,n,i))}function pv(n,t,e){n=Be(n,Zt);const r=Be(n.firestore,Gr),i=Ed(n.converter,t,e);return gv(r,[fd(Ia(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,te.none())])}function gv(n,t){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>Dy(await Gy(r),i,s)),s.promise}(ys(n),t)}function mv(n,t,e){const r=e.docs.get(t._key),i=new ka(n);return new Ca(n,i,t._key,r,new vn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const _v={maxAttempts:5};function Wn(n,t){if((n=Dt(n)).firestore!==t)throw new T(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yv extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Ia(e)}get(e){const r=Wn(e,this._firestore),i=new cv(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return D();const o=s[0];if(o.isFoundDocument())return new xi(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new xi(this._firestore,i,r._key,null,r.converter);throw D()})}set(e,r,i){const s=Wn(e,this._firestore),o=Ed(s.converter,r,i),a=fd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=Wn(e,this._firestore);let a;return a=typeof(r=Dt(r))=="string"||r instanceof vs?rv(this._dataReader,"Transaction.update",o._key,r,i,s):nv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Wn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Wn(t,this._firestore),r=new ka(this._firestore);return super.get(t).then(i=>new Ca(this._firestore,r,e._key,i._document,new vn(!1,!1),e.converter))}}function vv(n,t,e){n=Be(n,Gr);const r=Object.assign(Object.assign({},_v),e);return function(s){if(s.maxAttempts<1)throw new T(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new me;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Wy(s);new By(s.asyncQueue,u,a,o,l).run()}),l.promise}(ys(n),i=>t(new yv(n,i)),r)}(function(t,e=!0){(function(i){xn=i})(Mn),$s(new Us("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Gr(new Tm(r.getProvider("auth-internal")),new Am(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sr(Al,"4.0.0",t),sr(Al,"4.0.0","esm2017")})();const Tv=async()=>{Bd();const n=await Ev(),t=await wv();return{settings:n,supertags:t}},Ev=async()=>{var n;try{const{currentUser:t}=je();if(t)return(n=(await fv(Li(tn(),"users",t.uid))).data())==null?void 0:n.preferences}catch(t){console.warn("Failed to get user document:",t);return}},Iv=async n=>{try{const{currentUser:t}=je();t&&await pv(Li(tn(),"users",t.uid),n,{merge:!0})}catch(t){console.warn("Failed to save user document:",t)}},wv=async()=>{try{const{currentUser:n}=je();if(n){const t=await Id(yd(ud(tn(),`users/${n.uid}/supertags`))),e=[];return t.forEach(r=>{const i=r.data();e.push(Kd(r.id,i.description,Object.entries(i.tags).map(s=>zd(s[1],s[0]))))}),e}}catch(n){console.warn("Failed to get user document:",n);return}},Av=async n=>{try{const{currentUser:t}=je();t&&await vv(tn(),async e=>{(await Id(yd(ud(tn(),`users/${t.uid}/supertags`)))).forEach(async i=>e.delete(Li(tn(),`users/${t.uid}/supertags/${i.id}`))),n.map(i=>e.set(Li(tn(),`users/${t.uid}/supertags`,i.name),{description:i.description,tags:Object.fromEntries(i.tags.map(s=>[s.name,s.modifier]))}))})}catch(t){console.warn("Failed to save user document:",t)}},Rv=async(n,t)=>{jd(),await Iv(n),await Av(t)},Pv=()=>{const n=Gd(!1);return je().onAuthStateChanged(t=>{n.set(t!==null)}),n},Sv=Pv();function au(n,t,e){const r=n.slice();return r[25]=t[e],r}function Cv(n){let t;return{c(){t=Xt("Account")},l(e){t=Yt(e,"Account")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function kv(n){let t;return{c(){t=Xt("Supertags")},l(e){t=Yt(e,"Supertags")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function lu(n){let t,e=`You don't have any supertags yet. You can create them when you have more than one tag
				active.`;return{c(){t=ht("span"),t.textContent=e},l(r){t=dt(r,"SPAN",{"data-svelte-h":!0}),ae(t)!=="svelte-skkb3i"&&(t.textContent=e)},m(r,i){nt(r,t,i)},d(r){r&&L(t)}}}function uu(n){let t,e;return t=new rf({props:{supertag:n[25]}}),t.$on("remove",n[13]),t.$on("edit",n[14]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&8&&(s.supertag=r[25]),t.$set(s)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function Vv(n){let t;return{c(){t=Xt("Import/Export Data")},l(e){t=Yt(e,"Import/Export Data")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function Dv(n){let t,e="Download Config File";return{c(){t=ht("span"),t.textContent=e,this.h()},l(r){t=dt(r,"SPAN",{class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-wwbsqq"&&(t.textContent=e),this.h()},h(){gt(t,"class","codicon codicon-file svelte-fmsaqr")},m(r,i){nt(r,t,i)},p:_e,d(r){r&&L(t)}}}function Nv(n){let t,e="Load Config File";return{c(){t=ht("span"),t.textContent=e,this.h()},l(r){t=dt(r,"SPAN",{class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-1ld4bre"&&(t.textContent=e),this.h()},h(){gt(t,"class","codicon codicon-file svelte-fmsaqr")},m(r,i){nt(r,t,i)},p:_e,d(r){r&&L(t)}}}function bv(n){let t;return{c(){t=Xt("Google Account Syncing")},l(e){t=Yt(e,"Google Account Syncing")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function Ov(n){let t,e;return t=new Pe({props:{title:"Sign in with google to backup data",$$slots:{default:[Lv]},$$scope:{ctx:n}}}),t.$on("click",n[18]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&268435456&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function Mv(n){let t,e,r,i,s,o;return t=new Pe({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Fv]},$$scope:{ctx:n}}}),t.$on("click",n[15]),r=new Pe({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[xv]},$$scope:{ctx:n}}}),r.$on("click",n[16]),s=new Pe({props:{title:"Sign out",$$slots:{default:[$v]},$$scope:{ctx:n}}}),s.$on("click",n[17]),{c(){at(t.$$.fragment),e=Q(),at(r.$$.fragment),i=Q(),at(s.$$.fragment)},l(a){lt(t.$$.fragment,a),e=X(a),lt(r.$$.fragment,a),i=X(a),lt(s.$$.fragment,a)},m(a,l){ut(t,a,l),nt(a,e,l),ut(r,a,l),nt(a,i,l),ut(s,a,l),o=!0},p(a,l){const u={};l&268435456&&(u.$$scope={dirty:l,ctx:a}),t.$set(u);const c={};l&268435456&&(c.$$scope={dirty:l,ctx:a}),r.$set(c);const h={};l&268435456&&(h.$$scope={dirty:l,ctx:a}),s.$set(h)},i(a){o||(k(t.$$.fragment,a),k(r.$$.fragment,a),k(s.$$.fragment,a),o=!0)},o(a){$(t.$$.fragment,a),$(r.$$.fragment,a),$(s.$$.fragment,a),o=!1},d(a){a&&(L(e),L(i)),ct(t,a),ct(r,a),ct(s,a)}}}function Lv(n){let t;return{c(){t=Xt("Connect Google User")},l(e){t=Yt(e,"Connect Google User")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function Fv(n){let t,e="Load Config";return{c(){t=ht("span"),t.textContent=e,this.h()},l(r){t=dt(r,"SPAN",{class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-g2l2uz"&&(t.textContent=e),this.h()},h(){gt(t,"class","codicon codicon-cloud svelte-fmsaqr")},m(r,i){nt(r,t,i)},p:_e,d(r){r&&L(t)}}}function xv(n){let t,e="Save config";return{c(){t=ht("span"),t.textContent=e,this.h()},l(r){t=dt(r,"SPAN",{class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-kmcvvq"&&(t.textContent=e),this.h()},h(){gt(t,"class","codicon codicon-cloud svelte-fmsaqr")},m(r,i){nt(r,t,i)},p:_e,d(r){r&&L(t)}}}function $v(n){let t;return{c(){t=Xt("Sign Out")},l(e){t=Yt(e,"Sign Out")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function Uv(n){let t;return{c(){t=Xt("Delete Data")},l(e){t=Yt(e,"Delete Data")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function qv(n){let t;return{c(){t=Xt("Delete Data")},l(e){t=Yt(e,"Delete Data")},m(e,r){nt(e,t,r)},d(e){e&&L(t)}}}function cu(n){let t,e;return t=new Bi({props:{title:"Load Data",warning:"This will replace all your current settings with settings save online. Are you sure you want to do that?",labelConfirm:"Yes, load settings.",labelCancel:"Cancel"}}),t.$on("confirm",n[20]),t.$on("close",n[21]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p:_e,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function hu(n){let t,e;return t=new Bi({props:{title:"Save data online",warning:"This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?",labelConfirm:"Yes, backup online",labelCancel:"Cancel"}}),t.$on("confirm",n[22]),t.$on("close",n[23]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p:_e,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function du(n){let t,e;return t=new Bi({props:{title:"Delete Data",warning:"This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?",labelConfirm:"Yes, delete it.",labelCancel:"Cancel"}}),t.$on("confirm",n[9]),t.$on("close",n[24]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p:_e,i(r){e||(k(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ct(t,r)}}}function Bv(n){let t,e,r,i,s,o,a,l,u,c,h,d,f,E="Load and save preferences and supertags to and from a file.",_,y,C,W,x,G,Y,j,ot,vt="Load and save preferences and supertags to and from Google.",Ot,J,B,P,Z,K,I,A,S,Gt,V,N,St;r=new kd({props:{$$slots:{default:[Cv]},$$scope:{ctx:n}}}),s=new Hr({props:{$$slots:{default:[kv]},$$scope:{ctx:n}}});let _t=n[3].items.length===0&&lu(),ce=Pn(n[3].items),st=[];for(let m=0;m<ce.length;m+=1)st[m]=uu(au(n,ce,m));const Mt=m=>$(st[m],1,1,()=>{st[m]=null});h=new Hr({props:{$$slots:{default:[Vv]},$$scope:{ctx:n}}}),C=new Pe({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Dv]},$$scope:{ctx:n}}}),C.$on("click",n[11]),x=new Pe({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Nv]},$$scope:{ctx:n}}}),x.$on("click",n[12]),Y=new Hr({props:{$$slots:{default:[bv]},$$scope:{ctx:n}}});const Bn=[Mv,Ov],Ne=[];function Va(m,M){return m[8]?0:1}B=Va(n),P=Ne[B]=Bn[B](n),K=new Hr({props:{$$slots:{default:[Uv]},$$scope:{ctx:n}}}),A=new Pe({props:{title:"Delete all your data.",$$slots:{default:[qv]},$$scope:{ctx:n}}}),A.$on("click",n[19]);let Tt=n[1]&&cu(n),Et=n[2]&&hu(n),It=n[0]&&du(n);return{c(){t=Q(),e=ht("section"),at(r.$$.fragment),i=Q(),at(s.$$.fragment),o=Q(),a=ht("div"),_t&&_t.c(),l=Q(),u=ht("ul");for(let m=0;m<st.length;m+=1)st[m].c();c=Q(),at(h.$$.fragment),d=Q(),f=ht("p"),f.textContent=E,_=Q(),y=ht("div"),at(C.$$.fragment),W=Q(),at(x.$$.fragment),G=Q(),at(Y.$$.fragment),j=Q(),ot=ht("p"),ot.textContent=vt,Ot=Q(),J=ht("div"),P.c(),Z=Q(),at(K.$$.fragment),I=Q(),at(A.$$.fragment),S=Q(),Tt&&Tt.c(),Gt=Q(),Et&&Et.c(),V=Q(),It&&It.c(),N=mi(),this.h()},l(m){Ad("svelte-814hib",document.head).forEach(L),t=X(m),e=dt(m,"SECTION",{class:!0});var et=Ht(e);lt(r.$$.fragment,et),i=X(et),lt(s.$$.fragment,et),o=X(et),a=dt(et,"DIV",{class:!0});var We=Ht(a);_t&&_t.l(We),l=X(We),u=dt(We,"UL",{});var jn=Ht(u);for(let fn=0;fn<st.length;fn+=1)st[fn].l(jn);jn.forEach(L),We.forEach(L),c=X(et),lt(h.$$.fragment,et),d=X(et),f=dt(et,"P",{class:!0,"data-svelte-h":!0}),ae(f)!=="svelte-rgkk1o"&&(f.textContent=E),_=X(et),y=dt(et,"DIV",{class:!0});var He=Ht(y);lt(C.$$.fragment,He),W=X(He),lt(x.$$.fragment,He),He.forEach(L),G=X(et),lt(Y.$$.fragment,et),j=X(et),ot=dt(et,"P",{class:!0,"data-svelte-h":!0}),ae(ot)!=="svelte-pw0g5c"&&(ot.textContent=vt),Ot=X(et),J=dt(et,"DIV",{class:!0});var Kn=Ht(J);P.l(Kn),Kn.forEach(L),Z=X(et),lt(K.$$.fragment,et),I=X(et),lt(A.$$.fragment,et),et.forEach(L),S=X(m),Tt&&Tt.l(m),Gt=X(m),Et&&Et.l(m),V=X(m),It&&It.l(m),N=mi(),this.h()},h(){document.title="kurosearch - Account",gt(a,"class","supertags"),gt(f,"class","svelte-fmsaqr"),gt(y,"class","button-row svelte-fmsaqr"),gt(ot,"class","svelte-fmsaqr"),gt(J,"class","button-row svelte-fmsaqr"),gt(e,"class","svelte-fmsaqr")},m(m,M){nt(m,t,M),nt(m,e,M),ut(r,e,null),b(e,i),ut(s,e,null),b(e,o),b(e,a),_t&&_t.m(a,null),b(a,l),b(a,u);for(let et=0;et<st.length;et+=1)st[et]&&st[et].m(u,null);b(e,c),ut(h,e,null),b(e,d),b(e,f),b(e,_),b(e,y),ut(C,y,null),b(y,W),ut(x,y,null),b(e,G),ut(Y,e,null),b(e,j),b(e,ot),b(e,Ot),b(e,J),Ne[B].m(J,null),b(e,Z),ut(K,e,null),b(e,I),ut(A,e,null),nt(m,S,M),Tt&&Tt.m(m,M),nt(m,Gt,M),Et&&Et.m(m,M),nt(m,V,M),It&&It.m(m,M),nt(m,N,M),St=!0},p(m,[M]){const et={};M&268435456&&(et.$$scope={dirty:M,ctx:m}),r.$set(et);const We={};if(M&268435456&&(We.$$scope={dirty:M,ctx:m}),s.$set(We),m[3].items.length===0?_t||(_t=lu(),_t.c(),_t.m(a,l)):_t&&(_t.d(1),_t=null),M&8){ce=Pn(m[3].items);let Wt;for(Wt=0;Wt<ce.length;Wt+=1){const ba=au(m,ce,Wt);st[Wt]?(st[Wt].p(ba,M),k(st[Wt],1)):(st[Wt]=uu(ba),st[Wt].c(),k(st[Wt],1),st[Wt].m(u,null))}for(Te(),Wt=ce.length;Wt<st.length;Wt+=1)Mt(Wt);Ee()}const jn={};M&268435456&&(jn.$$scope={dirty:M,ctx:m}),h.$set(jn);const He={};M&268435456&&(He.$$scope={dirty:M,ctx:m}),C.$set(He);const Kn={};M&268435456&&(Kn.$$scope={dirty:M,ctx:m}),x.$set(Kn);const fn={};M&268435456&&(fn.$$scope={dirty:M,ctx:m}),Y.$set(fn);let Es=B;B=Va(m),B===Es?Ne[B].p(m,M):(Te(),$(Ne[Es],1,1,()=>{Ne[Es]=null}),Ee(),P=Ne[B],P?P.p(m,M):(P=Ne[B]=Bn[B](m),P.c()),k(P,1),P.m(J,null));const Da={};M&268435456&&(Da.$$scope={dirty:M,ctx:m}),K.$set(Da);const Na={};M&268435456&&(Na.$$scope={dirty:M,ctx:m}),A.$set(Na),m[1]?Tt?(Tt.p(m,M),M&2&&k(Tt,1)):(Tt=cu(m),Tt.c(),k(Tt,1),Tt.m(Gt.parentNode,Gt)):Tt&&(Te(),$(Tt,1,1,()=>{Tt=null}),Ee()),m[2]?Et?(Et.p(m,M),M&4&&k(Et,1)):(Et=hu(m),Et.c(),k(Et,1),Et.m(V.parentNode,V)):Et&&(Te(),$(Et,1,1,()=>{Et=null}),Ee()),m[0]?It?(It.p(m,M),M&1&&k(It,1)):(It=du(m),It.c(),k(It,1),It.m(N.parentNode,N)):It&&(Te(),$(It,1,1,()=>{It=null}),Ee())},i(m){if(!St){k(r.$$.fragment,m),k(s.$$.fragment,m);for(let M=0;M<ce.length;M+=1)k(st[M]);k(h.$$.fragment,m),k(C.$$.fragment,m),k(x.$$.fragment,m),k(Y.$$.fragment,m),k(P),k(K.$$.fragment,m),k(A.$$.fragment,m),k(Tt),k(Et),k(It),St=!0}},o(m){$(r.$$.fragment,m),$(s.$$.fragment,m),st=st.filter(Boolean);for(let M=0;M<st.length;M+=1)$(st[M]);$(h.$$.fragment,m),$(C.$$.fragment,m),$(x.$$.fragment,m),$(Y.$$.fragment,m),$(P),$(K.$$.fragment,m),$(A.$$.fragment,m),$(Tt),$(Et),$(It),St=!1},d(m){m&&(L(t),L(e),L(S),L(Gt),L(V),L(N)),ct(r),ct(s),_t&&_t.d(),po(st,m),ct(h),ct(C),ct(x),ct(Y),Ne[B].d(),ct(K),ct(A),Tt&&Tt.d(m),Et&&Et.d(m),It&&It.d(m)}}}function jv(n,t,e){let r,i,s,o,a,l;pn(n,Qe,P=>e(3,r=P)),pn(n,ws,P=>e(4,i=P)),pn(n,As,P=>e(5,s=P)),pn(n,Rs,P=>e(6,o=P)),pn(n,Is,P=>e(7,a=P)),pn(n,Sv,P=>e(8,l=P));let u=!1,c=!1,h=!1;const d=()=>{Qe.reset()},f=()=>({[wt.LocalstorageEnabled]:a,[wt.Theme]:o,[wt.BlockedContent]:s,[wt.ResultColumns]:i,[wt.Supertags]:r});return[u,c,h,r,i,s,o,a,l,d,f,async()=>{const P=f();try{const K=await(await showSaveFilePicker({suggestedName:"kurosearch-config.json"})).createWritable(),I=JSON.stringify(P,void 0,2);await K.write(I),await K.close();return}catch(Z){console.error(Z)}},async()=>{try{const[P]=await showOpenFilePicker(),K=await(await P.getFile()).text(),I=JSON.parse(K);oe(Is,a=I[wt.LocalstorageEnabled],a),oe(Rs,o=I[wt.Theme],o),oe(As,s=I[wt.BlockedContent],s),oe(ws,i=I[wt.ResultColumns],i),oe(Qe,r=I[wt.Supertags],r)}catch(P){console.error(P)}},P=>Qe.remove(P.detail),P=>{console.log(P),Qe.update(P.detail.oldName,P.detail.newSupertag)},()=>e(1,c=!0),()=>e(2,h=!0),()=>cg(),()=>ug(),()=>e(0,u=!0),async()=>{const P=await Tv();P.settings&&(P.settings[wt.LocalstorageEnabled]&&oe(Is,a=P.settings[wt.LocalstorageEnabled],a),P.settings[wt.Theme]&&oe(Rs,o=P.settings[wt.Theme],o),P.settings[wt.BlockedContent]&&oe(As,s=P.settings[wt.BlockedContent],s),P.settings[wt.ResultColumns]&&oe(ws,i=P.settings[wt.ResultColumns],i),P.settings[wt.Supertags]&&oe(Qe,r=P.settings[wt.Supertags],r)),P.supertags&&oe(Qe,r.items=P.supertags,r)},()=>e(1,c=!1),async()=>{await Rv(f(),r.items)},()=>e(2,h=!1),()=>e(0,u=!1)]}class fT extends Ui{constructor(t){super(),qi(this,t,jv,Bv,$i,{})}}export{fT as component};
