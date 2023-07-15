import{s as Ni,f as dt,l as zt,g as ft,h as jt,m as Gt,d as q,j as yt,r as Sa,i as rt,u as x,F as ai,Q as md,n as Jr,v as de,K as ou,M as li,E as au,p as Ca,a as Y,y as ye,c as J,I as ka,P as oo,e as ui,C as ln,G as ne}from"../chunks/scheduler.6c5d9662.js";import{S as bi,i as Oi,b as ot,d as at,m as lt,a as C,t as F,e as ut,f as Va,g as ge,c as me}from"../chunks/index.8c724fb2.js";import{e as Tn}from"../chunks/each.e59479a4.js";import{C as Mi,l as gs}from"../chunks/localstorage-enabled-store.3ef89c8f.js";import{D as _d,r as ms}from"../chunks/Dialog.249a2b75.js";import{T as Da}from"../chunks/TextInput.32d03d64.js";import{S as yd,n as vd,s as je}from"../chunks/supertags-store.f14c9892.js";import{g as Td}from"../chunks/tags.afa77e19.js";import{a as Na}from"../chunks/format-tag.d6c065e3.js";import{M as ba}from"../chunks/tag-modifier-data.021c0243.js";import{T as Ie}from"../chunks/TextButton.53e352d9.js";import{H as Ed,a as qr}from"../chunks/Heading1.a729be81.js";import{b as _s}from"../chunks/blocked-content-store.64bd99a1.js";import{t as ys}from"../chunks/theme-store.0f902d3d.js";import{S as Et}from"../chunks/store-keys.e70c3dff.js";import{r as Jn,h as Id,j as lu,k as wd,l as Ad,g as Ct,_ as Ns,C as bs,a as ao,m as Rd,e as uu,i as Pd,S as kn,E as lo,n as Sd,f as Cd,q as mr,o as Ye,p as Xt,s as kd,L as cu,F as Li,t as Vd,u as Dd,w as Nd,x as bd}from"../chunks/index.esm2017.edf8478c.js";import{c as Od,a as Md}from"../chunks/tag-utils.ceb6413c.js";import{w as Ld}from"../chunks/index.ec6ffced.js";function Fd(n){let t,e=Na(n[0].name)+"",r,i,s,o;return{c(){t=dt("button"),r=zt(e),this.h()},l(a){t=ft(a,"BUTTON",{class:!0});var l=jt(t);r=Gt(l,e),l.forEach(q),this.h()},h(){yt(t,"class",i=Sa(ba[n[0].modifier])+" svelte-2k1w69")},m(a,l){rt(a,t,l),x(t,r),s||(o=[ai(t,"click",n[1]),ai(t,"contextmenu",md(n[2]))],s=!0)},p(a,[l]){l&1&&e!==(e=Na(a[0].name)+"")&&Jr(r,e),l&1&&i!==(i=Sa(ba[a[0].modifier])+" svelte-2k1w69")&&yt(t,"class",i)},i:de,o:de,d(a){a&&q(t),s=!1,ou(o)}}}function xd(n,t,e){let{tag:r}=t;function i(o){li.call(this,n,o)}function s(o){li.call(this,n,o)}return n.$$set=o=>{"tag"in o&&e(0,r=o.tag)},[r,i,s]}class hu extends bi{constructor(t){super(),Oi(this,t,xd,Fd,Ni,{tag:0})}}function Oa(n,t,e){const r=n.slice();return r[12]=t[e],r[14]=e,r}function Ma(n){let t,e;function r(){return n[7](n[14])}function i(){return n[8](n[14],n[12])}return t=new hu({props:{tag:n[12]}}),t.$on("click",r),t.$on("contextmenu",i),{c(){ot(t.$$.fragment)},l(s){at(t.$$.fragment,s)},m(s,o){lt(t,s,o),e=!0},p(s,o){n=s;const a={};o&1&&(a.tag=n[12]),t.$set(a)},i(s){e||(C(t.$$.fragment,s),e=!0)},o(s){F(t.$$.fragment,s),e=!1},d(s){ut(t,s)}}}function $d(n){let t;return{c(){t=zt("Save")},l(e){t=Gt(e,"Save")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function Ud(n){let t;return{c(){t=zt("Cancel")},l(e){t=Gt(e,"Cancel")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function qd(n){let t,e,r="Edit Supertag",i,s,o="Name",a,l,u,c,h,d="Description",f,I,_,w,k,W="Add or remove tags",B,L,j,K,it,Tt,pt,nt,z;function N(O){n[4](O)}let H={placeholder:"Name",autocomplete:"false"};n[0].name!==void 0&&(H.value=n[0].name),l=new Da({props:H}),Ca.push(()=>Va(l,"value",N));function X(O){n[5](O)}let E={placeholder:"Description",autocomplete:"false"};n[0].description!==void 0&&(E.value=n[0].description),I=new Da({props:E}),Ca.push(()=>Va(I,"value",X)),L=new yd({props:{placeholder:"Search for tags",fetchSuggestions:Td}}),L.$on("pick",n[6]);let S=Tn(n[0].tags),v=[];for(let O=0;O<S.length;O+=1)v[O]=Ma(Oa(n,S,O));const se=O=>F(v[O],1,1,()=>{v[O]=null});return Tt=new Ie({props:{title:"Save changes",$$slots:{default:[$d]},$$scope:{ctx:n}}}),Tt.$on("click",n[9]),nt=new Ie({props:{type:"secondary",title:"Cancel",$$slots:{default:[Ud]},$$scope:{ctx:n}}}),nt.$on("click",n[2]),{c(){t=dt("div"),e=dt("h3"),e.textContent=r,i=Y(),s=dt("span"),s.textContent=o,a=Y(),ot(l.$$.fragment),c=Y(),h=dt("span"),h.textContent=d,f=Y(),ot(I.$$.fragment),w=Y(),k=dt("span"),k.textContent=W,B=Y(),ot(L.$$.fragment),j=Y(),K=dt("ul");for(let O=0;O<v.length;O+=1)v[O].c();it=Y(),ot(Tt.$$.fragment),pt=Y(),ot(nt.$$.fragment),this.h()},l(O){t=ft(O,"DIV",{class:!0});var V=jt(t);e=ft(V,"H3",{["data-svelte-h"]:!0}),ye(e)!=="svelte-1q4lkkx"&&(e.textContent=r),i=J(V),s=ft(V,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(s)!=="svelte-15ueaex"&&(s.textContent=o),a=J(V),at(l.$$.fragment,V),c=J(V),h=ft(V,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(h)!=="svelte-rmspr8"&&(h.textContent=d),f=J(V),at(I.$$.fragment,V),w=J(V),k=ft(V,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(k)!=="svelte-1ripwej"&&(k.textContent=W),B=J(V),at(L.$$.fragment,V),j=J(V),K=ft(V,"UL",{class:!0});var Dt=jt(K);for(let st=0;st<v.length;st+=1)v[st].l(Dt);Dt.forEach(q),it=J(V),at(Tt.$$.fragment,V),pt=J(V),at(nt.$$.fragment,V),V.forEach(q),this.h()},h(){yt(s,"class","svelte-1hhm2px"),yt(h,"class","svelte-1hhm2px"),yt(k,"class","svelte-1hhm2px"),yt(K,"class","svelte-1hhm2px"),yt(t,"class","svelte-1hhm2px")},m(O,V){rt(O,t,V),x(t,e),x(t,i),x(t,s),x(t,a),lt(l,t,null),x(t,c),x(t,h),x(t,f),lt(I,t,null),x(t,w),x(t,k),x(t,B),lt(L,t,null),x(t,j),x(t,K);for(let Dt=0;Dt<v.length;Dt+=1)v[Dt]&&v[Dt].m(K,null);x(t,it),lt(Tt,t,null),x(t,pt),lt(nt,t,null),z=!0},p(O,V){const Dt={};!u&&V&1&&(u=!0,Dt.value=O[0].name,ka(()=>u=!1)),l.$set(Dt);const st={};if(!_&&V&1&&(_=!0,st.value=O[0].description,ka(()=>_=!1)),I.$set(st),V&1){S=Tn(O[0].tags);let g;for(g=0;g<S.length;g+=1){const A=Oa(O,S,g);v[g]?(v[g].p(A,V),C(v[g],1)):(v[g]=Ma(A),v[g].c(),C(v[g],1),v[g].m(K,null))}for(ge(),g=S.length;g<v.length;g+=1)se(g);me()}const gt={};V&32768&&(gt.$$scope={dirty:V,ctx:O}),Tt.$set(gt);const mt={};V&32768&&(mt.$$scope={dirty:V,ctx:O}),nt.$set(mt)},i(O){if(!z){C(l.$$.fragment,O),C(I.$$.fragment,O),C(L.$$.fragment,O);for(let V=0;V<S.length;V+=1)C(v[V]);C(Tt.$$.fragment,O),C(nt.$$.fragment,O),z=!0}},o(O){F(l.$$.fragment,O),F(I.$$.fragment,O),F(L.$$.fragment,O),v=v.filter(Boolean);for(let V=0;V<v.length;V+=1)F(v[V]);F(Tt.$$.fragment,O),F(nt.$$.fragment,O),z=!1},d(O){O&&q(t),ut(l),ut(I),ut(L),oo(v,O),ut(Tt),ut(nt)}}}function Bd(n){let t,e;return t=new _d({props:{$$slots:{default:[qd]},$$scope:{ctx:n}}}),t.$on("close",n[10]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p(r,[i]){const s={};i&32769&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function jd(n,t,e){const r=au(),i=()=>r("edit",{oldName:o.name,newSupertag:a}),s=()=>r("close");let{supertag:o}=t,a={...o,tags:[...o.tags]};function l(_){n.$$.not_equal(a.name,_)&&(a.name=_,e(0,a))}function u(_){n.$$.not_equal(a.description,_)&&(a.description=_,e(0,a))}const c=_=>{e(0,a.tags=[...a.tags,{modifier:_.detail.modifier,name:_.detail.name}],a)},h=_=>{a.tags.splice(_,1),e(0,a.tags=[...a.tags],a)},d=(_,w)=>{e(0,a.tags[_].modifier=vd(w.modifier),a)},f=()=>{i(),s()};function I(_){li.call(this,n,_)}return n.$$set=_=>{"supertag"in _&&e(3,o=_.supertag)},[a,i,s,o,l,u,c,h,d,f,I]}class Kd extends bi{constructor(t){super(),Oi(this,t,jd,Bd,Ni,{supertag:3})}}function La(n,t,e){const r=n.slice();return r[10]=t[e],r}function Fa(n){let t,e;return t=new hu({props:{tag:n[10]}}),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.tag=r[10]),t.$set(s)},i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function xa(n){let t,e;return t=new Mi({props:{title:"Delete Supertag",warning:"Are you sure? You will not be able to undo it.",labelCancel:"No, keep it!",labelConfirm:"Yes, delete it."}}),t.$on("confirm",n[3]),t.$on("close",n[5]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p:de,i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function $a(n){let t,e;return t=new Kd({props:{supertag:n[0]}}),t.$on("close",n[7]),t.$on("edit",n[8]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.supertag=r[0]),t.$set(s)},i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function zd(n){let t,e,r=n[0].name+"",i,s,o,a=Object.keys(n[0].tags).length+"",l,u,c,h,d,f,I,_,w=(n[0].description||n[0].name)+"",k,W,B,L,j,K,it,Tt,pt,nt=Tn(n[0].tags),z=[];for(let E=0;E<nt.length;E+=1)z[E]=Fa(La(n,nt,E));const N=E=>F(z[E],1,1,()=>{z[E]=null});let H=n[1]&&xa(n),X=n[2]&&$a(n);return{c(){t=dt("li"),e=dt("h3"),i=zt(r),s=Y(),o=dt("small"),l=zt(a),u=zt(" tags"),c=Y(),h=dt("button"),d=Y(),f=dt("button"),I=Y(),_=dt("span"),k=zt(w),W=Y(),B=dt("ol");for(let E=0;E<z.length;E+=1)z[E].c();L=Y(),H&&H.c(),j=Y(),X&&X.c(),K=ui(),this.h()},l(E){t=ft(E,"LI",{class:!0});var S=jt(t);e=ft(S,"H3",{class:!0});var v=jt(e);i=Gt(v,r),v.forEach(q),s=J(S),o=ft(S,"SMALL",{class:!0});var se=jt(o);l=Gt(se,a),u=Gt(se," tags"),se.forEach(q),c=J(S),h=ft(S,"BUTTON",{class:!0}),jt(h).forEach(q),d=J(S),f=ft(S,"BUTTON",{class:!0}),jt(f).forEach(q),I=J(S),_=ft(S,"SPAN",{class:!0});var O=jt(_);k=Gt(O,w),O.forEach(q),W=J(S),B=ft(S,"OL",{class:!0});var V=jt(B);for(let Dt=0;Dt<z.length;Dt+=1)z[Dt].l(V);V.forEach(q),S.forEach(q),L=J(E),H&&H.l(E),j=J(E),X&&X.l(E),K=ui(),this.h()},h(){yt(e,"class","svelte-t8qa56"),yt(o,"class","svelte-t8qa56"),yt(h,"class","codicon codicon-edit svelte-t8qa56"),yt(f,"class","codicon codicon-close svelte-t8qa56"),yt(_,"class","svelte-t8qa56"),yt(B,"class","svelte-t8qa56"),yt(t,"class","svelte-t8qa56")},m(E,S){rt(E,t,S),x(t,e),x(e,i),x(t,s),x(t,o),x(o,l),x(o,u),x(t,c),x(t,h),x(t,d),x(t,f),x(t,I),x(t,_),x(_,k),x(t,W),x(t,B);for(let v=0;v<z.length;v+=1)z[v]&&z[v].m(B,null);rt(E,L,S),H&&H.m(E,S),rt(E,j,S),X&&X.m(E,S),rt(E,K,S),it=!0,Tt||(pt=[ai(h,"click",n[6]),ai(f,"click",n[4])],Tt=!0)},p(E,[S]){if((!it||S&1)&&r!==(r=E[0].name+"")&&Jr(i,r),(!it||S&1)&&a!==(a=Object.keys(E[0].tags).length+"")&&Jr(l,a),(!it||S&1)&&w!==(w=(E[0].description||E[0].name)+"")&&Jr(k,w),S&1){nt=Tn(E[0].tags);let v;for(v=0;v<nt.length;v+=1){const se=La(E,nt,v);z[v]?(z[v].p(se,S),C(z[v],1)):(z[v]=Fa(se),z[v].c(),C(z[v],1),z[v].m(B,null))}for(ge(),v=nt.length;v<z.length;v+=1)N(v);me()}E[1]?H?(H.p(E,S),S&2&&C(H,1)):(H=xa(E),H.c(),C(H,1),H.m(j.parentNode,j)):H&&(ge(),F(H,1,1,()=>{H=null}),me()),E[2]?X?(X.p(E,S),S&4&&C(X,1)):(X=$a(E),X.c(),C(X,1),X.m(K.parentNode,K)):X&&(ge(),F(X,1,1,()=>{X=null}),me())},i(E){if(!it){for(let S=0;S<nt.length;S+=1)C(z[S]);C(H),C(X),it=!0}},o(E){z=z.filter(Boolean);for(let S=0;S<z.length;S+=1)F(z[S]);F(H),F(X),it=!1},d(E){E&&(q(t),q(L),q(j),q(K)),oo(z,E),H&&H.d(E),X&&X.d(E),Tt=!1,ou(pt)}}}function Gd(n,t,e){const r=au(),i=()=>r("remove",u),s=()=>e(1,c=!0),o=()=>e(1,c=!1),a=()=>e(2,h=!0),l=()=>e(2,h=!1);let{supertag:u}=t,c=!1,h=!1;function d(f){li.call(this,n,f)}return n.$$set=f=>{"supertag"in f&&e(0,u=f.supertag)},[u,c,h,i,s,o,a,l,d]}class Wd extends bi{constructor(t){super(),Oi(this,t,Gd,zd,Ni,{supertag:0})}}var Hd="firebase",Qd="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(Hd,Qd,"app");const Xd={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:11fa1fda0e14f1ac2dd021",measurementId:"G-27J3QXZ8YR"};Id(Xd);function uo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function du(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yd=du,fu=new lo("auth","Firebase",du());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new cu("@firebase/auth");function Jd(n,...t){ci.logLevel<=Ye.WARN&&ci.warn(`Auth (${kn}): ${n}`,...t)}function Zr(n,...t){ci.logLevel<=Ye.ERROR&&ci.error(`Auth (${kn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,...t){throw co(n,...t)}function ue(n,...t){return co(n,...t)}function pu(n,t,e){const r=Object.assign(Object.assign({},Yd()),{[t]:e});return new lo("auth","Firebase",r).create(t,{appName:n.name})}function Zd(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&fe(n,"argument-error"),pu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function co(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return fu.create(n,...t)}function $(n,t,...e){if(!n)throw co(t,...e)}function ve(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Zr(t),new Error(t)}function we(n,t){n||ve(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tf(){return Ua()==="http:"||Ua()==="https:"}function Ua(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tf()||Pd()||"connection"in navigator)?navigator.onLine:!0}function nf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.shortDelay=t,this.longDelay=e,we(e>t,"Short delay should be less than long delay!"),this.isMobile=wd()||Ad()}get(){return ef()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n,t){we(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new _r(3e4,6e4);function mu(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function yr(n,t,e,r,i={}){return _u(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=mr(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),gu.fetch()(yu(n,n.config.apiHost,e,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function _u(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},rf),t);try{const i=new af(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Br(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Br(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Br(n,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pu(n,c,u);fe(n,c)}}catch(i){if(i instanceof Li)throw i;fe(n,"network-request-failed",{message:String(i)})}}async function of(n,t,e,r,i={}){const s=await yr(n,t,e,r,i);return"mfaPendingCredential"in s&&fe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function yu(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?ho(n.config,i):`${n.config.apiScheme}://${i}`}class af{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ue(this.auth,"network-request-failed")),sf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Br(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=ue(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n,t){return yr(n,"POST","/v1/accounts:delete",t)}async function uf(n,t){return yr(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function cf(n,t=!1){const e=Ct(n),r=await e.getIdToken(t),i=fo(r);$(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zn(vs(i.auth_time)),issuedAtTime:zn(vs(i.iat)),expirationTime:zn(vs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vs(n){return Number(n)*1e3}function fo(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vd(e);return i?JSON.parse(i):(Zr("Failed to decode base64 JWT payload"),null)}catch(i){return Zr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hf(n){const t=fo(n);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Li&&df(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function df({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Zn(n,uf(e,{idToken:r}));$(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?mf(s.providerUserInfo):[],a=gf(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vu(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function pf(n){const t=Ct(n);await hi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gf(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function mf(n){return n.map(t=>{var{providerId:e}=t,r=uo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n,t){const e=await _u(n,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yu(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await _f(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new tr;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,t){$(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Qe{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=uo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ff(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Zn(this,this.stsTokenManager.getToken(this.auth,t));return $(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return cf(this,t)}reload(){return pf(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Qe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Zn(this,lf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,l,u,c;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,w=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,k=(u=e.createdAt)!==null&&u!==void 0?u:void 0,W=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:B,emailVerified:L,isAnonymous:j,providerData:K,stsTokenManager:it}=e;$(B&&it,t,"internal-error");const Tt=tr.fromJSON(this.name,it);$(typeof B=="string",t,"internal-error"),Ce(h,t.name),Ce(d,t.name),$(typeof L=="boolean",t,"internal-error"),$(typeof j=="boolean",t,"internal-error"),Ce(f,t.name),Ce(I,t.name),Ce(_,t.name),Ce(w,t.name),Ce(k,t.name),Ce(W,t.name);const pt=new Qe({uid:B,auth:t,email:d,emailVerified:L,displayName:h,isAnonymous:j,photoURL:I,phoneNumber:f,tenantId:_,stsTokenManager:Tt,createdAt:k,lastLoginAt:W});return K&&Array.isArray(K)&&(pt.providerData=K.map(nt=>Object.assign({},nt))),w&&(pt._redirectEventId=w),pt}static async _fromIdTokenResponse(t,e,r=!1){const i=new tr;i.updateFromServerResponse(e);const s=new Qe({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await hi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;function Te(n){we(n instanceof Function,"Expected a class definition");let t=qa.get(n);return t?(we(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,qa.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Tu.type="NONE";const Ba=Tu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,t,e){return`firebase:${n}:${t}:${e}`}class pn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ti(this.userKey,i.apiKey,s),this.fullPersistenceKey=ti("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Qe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new pn(Te(Ba),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Te(Ba);const o=ti(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const c=await u._get(o);if(c){const h=Qe._fromJSON(t,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new pn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Eu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ru(t))return"Blackberry";if(Pu(t))return"Webos";if(po(t))return"Safari";if((t.includes("chrome/")||Iu(t))&&!t.includes("edge/"))return"Chrome";if(Au(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Eu(n=Xt()){return/firefox\//i.test(n)}function po(n=Xt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Iu(n=Xt()){return/crios\//i.test(n)}function wu(n=Xt()){return/iemobile/i.test(n)}function Au(n=Xt()){return/android/i.test(n)}function Ru(n=Xt()){return/blackberry/i.test(n)}function Pu(n=Xt()){return/webos/i.test(n)}function Fi(n=Xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yf(n=Xt()){var t;return Fi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function vf(){return kd()&&document.documentMode===10}function Su(n=Xt()){return Fi(n)||Au(n)||Pu(n)||Ru(n)||/windows phone/i.test(n)||wu(n)}function Tf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n,t=[]){let e;switch(n){case"Browser":e=ja(Xt());break;case"Worker":e=`${ja(Xt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${kn}/${r}`}async function ku(n,t){return yr(n,"GET","/v2/recaptchaConfig",mu(n,t))}function Ka(n){return n!==void 0&&n.enterprise!==void 0}class Vu{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(e=>e.provider==="EMAIL_PASSWORD_PROVIDER"&&e.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Du(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=ue("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Ef().appendChild(r)})}function If(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const wf="https://www.google.com/recaptcha/enterprise.js?render=",Af="recaptcha-enterprise",Rf="NO_RECAPTCHA";class Pf{constructor(t){this.type=Af,this.auth=vr(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ku(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Vu(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ka(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Rf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&Ka(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Du(wf+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Sf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new za(this),this.idTokenSubscription=new za(this),this.beforeStateQueue=new Sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Te(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await hi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ct(t):null;return e&&$(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(t))})}async initializeRecaptchaConfig(){const t=await ku(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Vu(t);this.tenantId==null?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled&&new Pf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new lo("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Te(t)||this._popupRedirectResolver;$(e,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[Te(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof e=="function"?t.addObserver(e,r,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Cu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Jd(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vr(n){return Ct(n)}class za{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sd(e=>this.observer=e)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,t){const e=ao(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Cd(s,t??{}))return i;fe(i,"already-initialized")}return e.initialize({options:t})}function Vf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Te);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Df(n,t,e){const r=vr(n);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=Nu(t),{host:o,port:a}=Nf(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bf()}function Nu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Nf(n){const t=Nu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ga(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ga(o)}}}function Ga(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function bf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ve("not implemented")}_getIdTokenResponse(t){return ve("not implemented")}_linkToIdToken(t,e){return ve("not implemented")}_getReauthenticationResolver(t){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n,t){return of(n,"POST","/v1/accounts:signInWithIdp",mu(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="http://localhost";class Je extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Je(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):fe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=uo(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Je(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return gn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,gn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gn(t,e)}buildRequest(){const t={requestUri:Of,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=mr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends go{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Tr{constructor(){super("facebook.com")}static credential(t){return Je._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ke.credentialFromTaggedObject(t)}static credentialFromError(t){return ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ke.credential(t.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Je._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return _e.credential(e,r)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Tr{constructor(){super("github.com")}static credential(t){return Je._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ve.credentialFromTaggedObject(t)}static credentialFromError(t){return Ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ve.credential(t.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Tr{constructor(){super("twitter.com")}static credential(t,e){return Je._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return De.credential(e,r)}catch{return null}}}De.TWITTER_SIGN_IN_METHOD="twitter.com";De.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await Qe._fromIdTokenResponse(t,r,i),o=Wa(r);return new En({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Wa(r);return new En({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Wa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Li{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,di.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new di(t,e,r,i)}}function Ou(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,s,t,r):s})}async function Mf(n,t,e=!1){const r=await Zn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return En._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Zn(n,Ou(r,i,t,n),e);$(s.idToken,r,"internal-error");const o=fo(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(n.uid===a,r,"user-mismatch"),En._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n,t,e=!1){const r="signIn",i=await Ou(n,r,t),s=await En._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,t){return Ct(n).setPersistence(t)}function $f(n,t,e,r){return Ct(n).onIdTokenChanged(t,e,r)}function Uf(n,t,e){return Ct(n).beforeAuthStateChanged(t,e)}function qf(n){return Ct(n).signOut()}const fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){const n=Xt();return po(n)||Fi(n)}const jf=1e3,Kf=10;class Lu extends Mu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bf()&&Tf(),this.fallbackToPolling=Su(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Kf):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},jf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Lu.type="LOCAL";const Fu=Lu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Mu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}xu.type="SESSION";const $u=xu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new xi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),l=await zf(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=mo("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return window}function Wf(n){ce().location.href=n}/**
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
 */function Uu(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Hf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xf(){return Uu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="firebaseLocalStorageDb",Yf=1,pi="firebaseLocalStorage",Bu="fbase_key";class Er{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function $i(n,t){return n.transaction([pi],t?"readwrite":"readonly").objectStore(pi)}function Jf(){const n=indexedDB.deleteDatabase(qu);return new Er(n).toPromise()}function Ms(){const n=indexedDB.open(qu,Yf);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pi,{keyPath:Bu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pi)?t(r):(r.close(),await Jf(),t(await Ms()))})})}async function Ha(n,t,e){const r=$i(n,!0).put({[Bu]:t,value:e});return new Er(r).toPromise()}async function Zf(n,t){const e=$i(n,!1).get(t),r=await new Er(e).toPromise();return r===void 0?null:r.value}function Qa(n,t){const e=$i(n,!0).delete(t);return new Er(e).toPromise()}const tp=800,ep=3;class ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>ep)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xi._getInstance(Xf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Hf(),!this.activeServiceWorker)return;this.sender=new Gf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ms();return await Ha(t,fi,"1"),await Qa(t,fi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ha(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Zf(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Qa(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=$i(i,!1).getAll();return new Er(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ju.type="LOCAL";const np=ju;new _r(3e4,6e4);/**
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
 */function Ku(n,t){return t?Te(t):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends bu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function rp(n){return Ff(n.auth,new _o(n),n.bypassAuthState)}function ip(n){const{auth:t,user:e}=n;return $(e,t,"internal-error"),Lf(e,new _o(n),n.bypassAuthState)}async function sp(n){const{auth:t,user:e}=n;return $(e,t,"internal-error"),Mf(e,new _o(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rp;case"linkViaPopup":case"linkViaRedirect":return sp;case"reauthViaPopup":case"reauthViaRedirect":return ip;default:fe(this.auth,"internal-error")}}resolve(t){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new _r(2e3,1e4);async function ap(n,t,e){const r=vr(n);Zd(n,t,go);const i=Ku(r,e);return new Ke(r,"signInViaPopup",t,i).executeNotNull()}class Ke extends zu{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const t=mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,op.get())};t()}}Ke.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="pendingRedirect",ei=new Map;class up extends zu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=ei.get(this.auth._key());if(!t){try{const r=await cp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}ei.set(this.auth._key(),t)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cp(n,t){const e=fp(t),r=dp(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function hp(n,t){ei.set(n._key(),t)}function dp(n){return Te(n._redirectPersistence)}function fp(n){return ti(lp,n.config.apiKey,n.name)}async function pp(n,t,e=!1){const r=vr(n),i=Ku(r,t),o=await new up(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=10*60*1e3;class mp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_p(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Gu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ue(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xa(t))}saveEventToCache(t){this.cachedEventUids.add(Xa(t)),this.lastProcessedEventTime=Date.now()}}function Xa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Gu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function _p(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(n,t={}){return yr(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tp=/^https?/;async function Ep(n){if(n.config.emulator)return;const{authorizedDomains:t}=await yp(n);for(const e of t)try{if(Ip(e))return}catch{}fe(n,"unauthorized-domain")}function Ip(n){const t=Os(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Tp.test(e))return!1;if(vp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wp=new _r(3e4,6e4);function Ya(){const n=ce().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Ap(n){return new Promise((t,e)=>{var r,i,s;function o(){Ya(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ya(),e(ue(n,"network-request-failed"))},timeout:wp.get()})}if(!((i=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ce().gapi)===null||s===void 0)&&s.load)o();else{const a=If("iframefcb");return ce()[a]=()=>{gapi.load?o():e(ue(n,"network-request-failed"))},Du(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw ni=null,t})}let ni=null;function Rp(n){return ni=ni||Ap(n),ni}/**
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
 */const Pp=new _r(5e3,15e3),Sp="__/auth/iframe",Cp="emulator/auth/iframe",kp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dp(n){const t=n.config;$(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?ho(t,Cp):`https://${n.config.authDomain}/${Sp}`,r={apiKey:t.apiKey,appName:n.name,v:kn},i=Vp.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${mr(r).slice(1)}`}async function Np(n){const t=await Rp(n),e=ce().gapi;return $(e,n,"internal-error"),t.open({where:document.body,url:Dp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ue(n,"network-request-failed"),a=ce().setTimeout(()=>{s(o)},Pp.get());function l(){ce().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const bp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Op=500,Mp=600,Lp="_blank",Fp="http://localhost";class Ja{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xp(n,t,e,r=Op,i=Mp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bp),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xt().toLowerCase();e&&(a=Iu(u)?Lp:e),Eu(u)&&(t=t||Fp,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,I])=>`${d}${f}=${I},`,"");if(yf(u)&&a!=="_self")return $p(t||"",a),new Ja(null);const h=window.open(t||"",a,c);$(h,n,"popup-blocked");try{h.focus()}catch{}return new Ja(h)}function $p(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Up="__/auth/handler",qp="emulator/auth/handler",Bp=encodeURIComponent("fac");async function Za(n,t,e,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:kn,eventId:i};if(t instanceof go){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Dd(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof Tr){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${Bp}=${encodeURIComponent(l)}`:"";return`${jp(n)}?${mr(a).slice(1)}${u}`}function jp({config:n}){return n.emulator?ho(n,qp):`https://${n.authDomain}/${Up}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="webStorageSupport";class Kp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=pp,this._overrideRedirectResult=hp}async _openPopup(t,e,r,i){var s;we((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Za(t,e,r,Os(),i);return xp(t,o,mo())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Za(t,e,r,Os(),i);return Wf(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(we(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Np(t),r=new mp(t);return e.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ts,{type:Ts},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ts];o!==void 0&&e(!!o),fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ep(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Su()||po()||Fi()}}const zp=Kp;var tl="@firebase/auth",el="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hp(n){Ns(new bs("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cu(n)},u=new Cf(r,i,s,l);return Vf(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Ns(new bs("auth-internal",t=>{const e=vr(t.getProvider("auth").getImmediate());return(r=>new Gp(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(tl,el,Wp(n)),Jn(tl,el,"esm2017")}/**
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
 */const Qp=5*60,Xp=lu("authIdTokenMaxAge")||Qp;let nl=null;const Yp=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Xp)return;const i=e==null?void 0:e.token;nl!==i&&(nl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xe(n=uu()){const t=ao(n,"auth");if(t.isInitialized())return t.getImmediate();const e=kf(n,{popupRedirectResolver:zp,persistence:[np,Fu,$u]}),r=lu("authTokenSyncURL");if(r){const s=Yp(r);Uf(e,s,()=>s(e.currentUser)),$f(e,o=>s(o))}const i=Rd("auth");return i&&Df(e,`http://${i}`),e}Hp("Browser");let Jp=new _e;xf(xe(),Fu);const Zp=async()=>ap(xe(),Jp),tg=async()=>qf(xe());var eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,yo=yo||{},M=eg||self;function Ui(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Ir(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function ng(n){return Object.prototype.hasOwnProperty.call(n,Es)&&n[Es]||(n[Es]=++rg)}var Es="closure_uid_"+(1e9*Math.random()>>>0),rg=0;function ig(n,t,e){return n.call.apply(n.bind,arguments)}function sg(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function xt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=ig:xt=sg,xt.apply(null,arguments)}function jr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Vt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function $e(){this.s=this.s,this.o=this.o}var og=0;$e.prototype.s=!1;$e.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),og!=0)&&ng(this)};$e.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wu=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function vo(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function rl(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Ui(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function $t(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}$t.prototype.h=function(){this.defaultPrevented=!0};var ag=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{M.addEventListener("test",()=>{},t),M.removeEventListener("test",()=>{},t)}catch{}return n}();function er(n){return/^[\s\xa0]*$/.test(n)}function qi(){var n=M.navigator;return n&&(n=n.userAgent)?n:""}function oe(n){return qi().indexOf(n)!=-1}function To(n){return To[" "](n),n}To[" "]=function(){};function lg(n,t){var e=tm;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var ug=oe("Opera"),In=oe("Trident")||oe("MSIE"),Hu=oe("Edge"),Ls=Hu||In,Qu=oe("Gecko")&&!(qi().toLowerCase().indexOf("webkit")!=-1&&!oe("Edge"))&&!(oe("Trident")||oe("MSIE"))&&!oe("Edge"),cg=qi().toLowerCase().indexOf("webkit")!=-1&&!oe("Edge");function Xu(){var n=M.document;return n?n.documentMode:void 0}var Fs;t:{var Is="",ws=function(){var n=qi();if(Qu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Hu)return/Edge\/([\d\.]+)/.exec(n);if(In)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(cg)return/WebKit\/(\S+)/.exec(n);if(ug)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ws&&(Is=ws?ws[1]:""),In){var As=Xu();if(As!=null&&As>parseFloat(Is)){Fs=String(As);break t}}Fs=Is}var xs;if(M.document&&In){var il=Xu();xs=il||parseInt(Fs,10)||void 0}else xs=void 0;var hg=xs;function nr(n,t){if($t.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Qu){t:{try{To(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:dg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&nr.$.h.call(this)}}Vt(nr,$t);var dg={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),fg=0;function pg(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++fg,this.fa=this.ia=!1}function Bi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Eo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function gg(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Yu(n){const t={};for(const e in n)t[e]=n[e];return t}const sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ju(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<sl.length;s++)e=sl[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function ji(n){this.src=n,this.g={},this.h=0}ji.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Us(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new pg(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function $s(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Wu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Bi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Us(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Io="closure_lm_"+(1e6*Math.random()|0),Rs={};function Zu(n,t,e,r,i){if(r&&r.once)return ec(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Zu(n,t[s],e,r,i);return null}return e=Ro(e),n&&n[wr]?n.O(t,e,Ir(r)?!!r.capture:!!r,i):tc(n,t,e,!1,r,i)}function tc(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Ir(i)?!!i.capture:!!i,a=Ao(n);if(a||(n[Io]=a=new ji(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=mg(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)ag||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(rc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function mg(){function n(e){return t.call(n.src,n.listener,e)}const t=_g;return n}function ec(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ec(n,t[s],e,r,i);return null}return e=Ro(e),n&&n[wr]?n.P(t,e,Ir(r)?!!r.capture:!!r,i):tc(n,t,e,!0,r,i)}function nc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)nc(n,t[s],e,r,i);else r=Ir(r)?!!r.capture:!!r,e=Ro(e),n&&n[wr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Us(s,e,r,i),-1<e&&(Bi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Ao(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Us(t,e,r,i)),(e=-1<n?t[n]:null)&&wo(e))}function wo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[wr])$s(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(rc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Ao(t))?($s(e,n),e.h==0&&(e.src=null,t[Io]=null)):Bi(n)}}}function rc(n){return n in Rs?Rs[n]:Rs[n]="on"+n}function _g(n,t){if(n.fa)n=!0;else{t=new nr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&wo(n),n=e.call(r,t)}return n}function Ao(n){return n=n[Io],n instanceof ji?n:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(n){return typeof n=="function"?n:(n[Ps]||(n[Ps]=function(t){return n.handleEvent(t)}),n[Ps])}function kt(){$e.call(this),this.i=new ji(this),this.S=this,this.J=null}Vt(kt,$e);kt.prototype[wr]=!0;kt.prototype.removeEventListener=function(n,t,e,r){nc(this,n,t,e,r)};function Ot(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new $t(t,n);else if(t instanceof $t)t.target=t.target||n;else{var i=t;t=new $t(r,n),Ju(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Kr(o,r,!0,t)&&i}if(o=t.g=n,i=Kr(o,r,!0,t)&&i,i=Kr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Kr(o,r,!1,t)&&i}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Bi(e[r]);delete n.g[t],n.h--}}this.J=null};kt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};kt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Kr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&$s(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Po=M.JSON.stringify;class yg{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function vg(){var n=So;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Tg{constructor(){this.h=this.g=null}add(t,e){const r=ic.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ic=new yg(()=>new Eg,n=>n.reset());class Eg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ig(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function wg(n){M.setTimeout(()=>{throw n},0)}let rr,ir=!1,So=new Tg,sc=()=>{const n=M.Promise.resolve(void 0);rr=()=>{n.then(Ag)}};var Ag=()=>{for(var n;n=vg();){try{n.h.call(n.g)}catch(e){wg(e)}var t=ic;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}ir=!1};function Ki(n,t){kt.call(this),this.h=n||1,this.g=t||M,this.j=xt(this.qb,this),this.l=Date.now()}Vt(Ki,kt);y=Ki.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ot(this,"tick"),this.ga&&(Co(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Co(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){Ki.$.N.call(this),Co(this),delete this.g};function ko(n,t,e){if(typeof n=="function")e&&(n=xt(n,e));else if(n&&typeof n.handleEvent=="function")n=xt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:M.setTimeout(n,t||0)}function oc(n){n.g=ko(()=>{n.g=null,n.i&&(n.i=!1,oc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Rg extends $e{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:oc(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(n){$e.call(this),this.h=n,this.g={}}Vt(sr,$e);var ol=[];function ac(n,t,e,r){Array.isArray(e)||(e&&(ol[0]=e.toString()),e=ol);for(var i=0;i<e.length;i++){var s=Zu(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function lc(n){Eo(n.g,function(t,e){this.g.hasOwnProperty(e)&&wo(t)},n),n.g={}}sr.prototype.N=function(){sr.$.N.call(this),lc(this)};sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zi(){this.g=!0}zi.prototype.Ea=function(){this.g=!1};function Pg(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Sg(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function dn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+kg(n,e)+(r?" "+r:"")})}function Cg(n,t){n.info(function(){return"TIMEOUT: "+t})}zi.prototype.info=function(){};function kg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Po(e)}catch{return t}}var rn={},al=null;function Gi(){return al=al||new kt}rn.Ta="serverreachability";function uc(n){$t.call(this,rn.Ta,n)}Vt(uc,$t);function or(n){const t=Gi();Ot(t,new uc(t))}rn.STAT_EVENT="statevent";function cc(n,t){$t.call(this,rn.STAT_EVENT,n),this.stat=t}Vt(cc,$t);function Wt(n){const t=Gi();Ot(t,new cc(t,n))}rn.Ua="timingevent";function hc(n,t){$t.call(this,rn.Ua,n),this.size=t}Vt(hc,$t);function Ar(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){n()},t)}var Wi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},dc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vo(){}Vo.prototype.h=null;function ll(n){return n.h||(n.h=n.i())}function fc(){}var Rr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Do(){$t.call(this,"d")}Vt(Do,$t);function No(){$t.call(this,"c")}Vt(No,$t);var qs;function Hi(){}Vt(Hi,Vo);Hi.prototype.g=function(){return new XMLHttpRequest};Hi.prototype.i=function(){return{}};qs=new Hi;function Pr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new sr(this),this.P=Vg,n=Ls?125:void 0,this.V=new Ki(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pc}function pc(){this.i=null,this.g="",this.h=!1}var Vg=45e3,Bs={},gi={};y=Pr.prototype;y.setTimeout=function(n){this.P=n};function js(n,t,e){n.L=1,n.v=Xi(Ae(t)),n.s=e,n.S=!0,gc(n,null)}function gc(n,t){n.G=Date.now(),Sr(n),n.A=Ae(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),wc(e.i,"t",r),n.C=0,e=n.l.J,n.h=new pc,n.g=Kc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Rg(xt(n.Pa,n,n.g),n.O)),ac(n.U,n.g,"readystatechange",n.nb),t=n.I?Yu(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),or(),Pg(n.j,n.u,n.A,n.m,n.W,n.s)}y.nb=function(n){n=n.target;const t=this.M;t&&ae(n)==3?t.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)t:{const c=ae(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ls||this.g&&(this.h.h||this.g.ja()||dl(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?or(3):or(2)),Qi(this);var e=this.g.da();this.ca=e;e:if(mc(this)){var r=dl(this.g);n="";var i=r.length,s=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ze(this),Gn(this);var o="";break e}this.h.i=new M.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Sg(this.j,this.u,this.A,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!er(a)){var u=a;break e}}u=null}if(e=u)dn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ks(this,e);else{this.i=!1,this.o=3,Wt(12),ze(this),Gn(this);break t}}this.S?(_c(this,c,o),Ls&&this.i&&c==3&&(ac(this.U,this.V,"tick",this.mb),this.V.start())):(dn(this.j,this.m,o,null),Ks(this,o)),c==4&&ze(this),this.i&&!this.J&&(c==4?Uc(this.l,this):(this.i=!1,Sr(this)))}else Yg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),ze(this),Gn(this)}}}catch{}finally{}};function mc(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function _c(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=Dg(n,e),i==gi){t==4&&(n.o=4,Wt(14),r=!1),dn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Bs){n.o=4,Wt(15),dn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else dn(n.j,n.m,i,null),Ks(n,i);mc(n)&&i!=gi&&i!=Bs&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Wt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),xo(t),t.M=!0,Wt(11))):(dn(n.j,n.m,e,"[Invalid Chunked Response]"),ze(n),Gn(n))}y.mb=function(){if(this.g){var n=ae(this.g),t=this.g.ja();this.C<t.length&&(Qi(this),_c(this,n,t),this.i&&n!=4&&Sr(this))}};function Dg(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?gi:(e=Number(t.substring(e,r)),isNaN(e)?Bs:(r+=1,r+e>t.length?gi:(t=t.slice(r,r+e),n.C=r+e,t)))}y.cancel=function(){this.J=!0,ze(this)};function Sr(n){n.Y=Date.now()+n.P,yc(n,n.P)}function yc(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ar(xt(n.lb,n),t)}function Qi(n){n.B&&(M.clearTimeout(n.B),n.B=null)}y.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Cg(this.j,this.A),this.L!=2&&(or(),Wt(17)),ze(this),this.o=2,Gn(this)):yc(this,this.Y-n)};function Gn(n){n.l.H==0||n.J||Uc(n.l,n)}function ze(n){Qi(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Co(n.V),lc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ks(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||zs(e.i,n))){if(!n.K&&zs(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)yi(e),Zi(e);else break t;Fo(e),Wt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Ar(xt(e.ib,e),6e3));if(1>=Pc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ge(e,11)}else if((n.K||e.g==n)&&yi(e),!er(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const c=u[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bo(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ct(r.I,r.F,_))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=jc(r,r.J?r.pa:null,r.Y),o.K){Sc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Qi(a),Sr(a)),r.g=o}else xc(r);0<e.j.length&&ts(e)}else u[0]!="stop"&&u[0]!="close"||Ge(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ge(e,7):Lo(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}or(4)}catch{}}function Ng(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ui(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function bg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ui(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function vc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Ui(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=bg(n),r=Ng(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Og(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xe(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Xe){this.h=n.h,mi(this,n.j),this.s=n.s,this.g=n.g,_i(this,n.m),this.l=n.l;var t=n.i,e=new ar;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ul(this,e),this.o=n.o}else n&&(t=String(n).match(Tc))?(this.h=!1,mi(this,t[1]||"",!0),this.s=qn(t[2]||""),this.g=qn(t[3]||"",!0),_i(this,t[4]),this.l=qn(t[5]||"",!0),ul(this,t[6]||"",!0),this.o=qn(t[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Xe.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Bn(t,cl,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Bn(t,cl,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Bn(e,e.charAt(0)=="/"?Fg:Lg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Bn(e,$g)),n.join("")};function Ae(n){return new Xe(n)}function mi(n,t,e){n.j=e?qn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function _i(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ul(n,t,e){t instanceof ar?(n.i=t,Ug(n.i,n.h)):(e||(t=Bn(t,xg)),n.i=new ar(t,n.h))}function ct(n,t,e){n.i.set(t,e)}function Xi(n){return ct(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function qn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Bn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Mg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Mg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var cl=/[#\/\?@]/g,Lg=/[#\?:]/g,Fg=/[#\?]/g,xg=/[#\?@]/g,$g=/#/g;function ar(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ue(n){n.g||(n.g=new Map,n.h=0,n.i&&Og(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}y=ar.prototype;y.add=function(n,t){Ue(this),this.i=null,n=Vn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Ec(n,t){Ue(n),t=Vn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Ic(n,t){return Ue(n),t=Vn(n,t),n.g.has(t)}y.forEach=function(n,t){Ue(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};y.ta=function(){Ue(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};y.Z=function(n){Ue(this);let t=[];if(typeof n=="string")Ic(this,n)&&(t=t.concat(this.g.get(Vn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};y.set=function(n,t){return Ue(this),this.i=null,n=Vn(this,n),Ic(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};y.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function wc(n,t,e){Ec(n,t),0<e.length&&(n.i=null,n.g.set(Vn(n,t),vo(e)),n.h+=e.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Vn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Ug(n,t){t&&!n.j&&(Ue(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Ec(this,r),wc(this,i,e))},n)),n.j=t}var qg=class{constructor(n,t){this.g=n,this.map=t}};function Ac(n){this.l=n||Bg,M.PerformanceNavigationTiming?(n=M.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bg=10;function Rc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Pc(n){return n.h?1:n.g?n.g.size:0}function zs(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function bo(n,t){n.g?n.g.add(t):n.h=t}function Sc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Ac.prototype.cancel=function(){if(this.i=Cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Cc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return vo(n.i)}var jg=class{stringify(n){return M.JSON.stringify(n,void 0)}parse(n){return M.JSON.parse(n,void 0)}};function Kg(){this.g=new jg}function zg(n,t,e){const r=e||"";try{vc(n,function(i,s){let o=i;Ir(i)&&(o=Po(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Gg(n,t){const e=new zi;if(M.Image){const r=new Image;r.onload=jr(zr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=jr(zr,e,r,"TestLoadImage: error",!1,t),r.onabort=jr(zr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=jr(zr,e,r,"TestLoadImage: timeout",!1,t),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function zr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Cr(n){this.l=n.fc||null,this.j=n.ob||!1}Vt(Cr,Vo);Cr.prototype.g=function(){return new Yi(this.l,this.j)};Cr.prototype.i=function(n){return function(){return n}}({});function Yi(n,t){kt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Oo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vt(Yi,kt);var Oo=0;y=Yi.prototype;y.open=function(n,t){if(this.readyState!=Oo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,lr(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||M).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=Oo};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function kc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?kr(this):lr(this),this.readyState==3&&kc(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,kr(this))};y.Ya=function(n){this.g&&(this.response=n,kr(this))};y.ka=function(){this.g&&kr(this)};function kr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,lr(n)}y.setRequestHeader=function(n,t){this.v.append(n,t)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function lr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Wg=M.JSON.parse;function vt(n){kt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vc,this.L=this.M=!1}Vt(vt,kt);var Vc="",Hg=/^https?$/i,Qg=["POST","PUT"];y=vt.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qs.g(),this.C=this.u?ll(this.u):ll(qs),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){hl(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&n instanceof M.FormData,!(0<=Wu(Qg,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bc(this),0<this.B&&((this.L=Xg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=ko(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){hl(this,s)}};function Xg(n){return In&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof yo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))};function hl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Dc(n),Ji(n)}function Dc(n){n.F||(n.F=!0,Ot(n,"complete"),Ot(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ot(this,"complete"),Ot(this,"abort"),Ji(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ji(this,!0)),vt.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Nc(this):this.kb())};y.kb=function(){Nc(this)};function Nc(n){if(n.h&&typeof yo<"u"&&(!n.C[1]||ae(n)!=4||n.da()!=2)){if(n.v&&ae(n)==4)ko(n.La,0,n);else if(Ot(n,"readystatechange"),ae(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Tc)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!Hg.test(i?i.toLowerCase():"")}e=r}if(e)Ot(n,"complete"),Ot(n,"success");else{n.m=6;try{var s=2<ae(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Dc(n)}}finally{Ji(n)}}}}function Ji(n,t){if(n.g){bc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Ot(n,"ready");try{e.onreadystatechange=r}catch{}}}function bc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(M.clearTimeout(n.A),n.A=null)}y.isActive=function(){return!!this.g};function ae(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Wg(t)}};function dl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Vc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Yg(n){const t={};n=(n.g&&2<=ae(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(er(n[r]))continue;var e=Ig(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}gg(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Oc(n){let t="";return Eo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Mo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Oc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ct(n,t,e))}function xn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Mc(n){this.Ga=0,this.j=[],this.l=new zi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xn("baseRetryDelayMs",5e3,n),this.hb=xn("retryDelaySeedMs",1e4,n),this.eb=xn("forwardChannelMaxRetries",2,n),this.xa=xn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Ac(n&&n.concurrentRequestLimit),this.Ja=new Kg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Mc.prototype;y.ra=8;y.H=1;function Lo(n){if(Lc(n),n.H==3){var t=n.W++,e=Ae(n.I);if(ct(e,"SID",n.K),ct(e,"RID",t),ct(e,"TYPE","terminate"),Vr(n,e),t=new Pr(n,n.l,t),t.L=2,t.v=Xi(Ae(e)),e=!1,M.navigator&&M.navigator.sendBeacon)try{e=M.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&M.Image&&(new Image().src=t.v,e=!0),e||(t.g=Kc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Sr(t)}Bc(n)}function Zi(n){n.g&&(xo(n),n.g.cancel(),n.g=null)}function Lc(n){Zi(n),n.u&&(M.clearTimeout(n.u),n.u=null),yi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&M.clearTimeout(n.m),n.m=null)}function ts(n){if(!Rc(n.i)&&!n.m){n.m=!0;var t=n.Na;rr||sc(),ir||(rr(),ir=!0),So.add(t,n),n.C=0}}function Jg(n,t){return Pc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ar(xt(n.Na,n,t),qc(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Pr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Yu(s),Ju(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Fc(this,i,t),e=Ae(this.I),ct(e,"RID",n),ct(e,"CVER",22),this.F&&ct(e,"X-HTTP-Session-Id",this.F),Vr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Oc(s)))+"&"+t:this.o&&Mo(e,this.o,s)),bo(this.i,i),this.bb&&ct(e,"TYPE","init"),this.P?(ct(e,"$req",t),ct(e,"SID","null"),i.aa=!0,js(i,e,null)):js(i,e,t),this.H=2}}else this.H==3&&(n?fl(this,n):this.j.length==0||Rc(this.i)||fl(this))};function fl(n,t){var e;t?e=t.m:e=n.W++;const r=Ae(n.I);ct(r,"SID",n.K),ct(r,"RID",e),ct(r,"AID",n.V),Vr(n,r),n.o&&n.s&&Mo(r,n.o,n.s),e=new Pr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Fc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),bo(n.i,e),js(e,r,t)}function Vr(n,t){n.na&&Eo(n.na,function(e,r){ct(t,r,e)}),n.h&&vc({},function(e,r){ct(t,r,e)})}function Fc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?xt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<e;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{zg(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function xc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;rr||sc(),ir||(rr(),ir=!0),So.add(t,n),n.A=0}}function Fo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ar(xt(n.Ma,n),qc(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,$c(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ar(xt(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Wt(10),Zi(this),$c(this))};function xo(n){n.B!=null&&(M.clearTimeout(n.B),n.B=null)}function $c(n){n.g=new Pr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ae(n.wa);ct(t,"RID","rpc"),ct(t,"SID",n.K),ct(t,"AID",n.V),ct(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ct(t,"TO",n.qa),ct(t,"TYPE","xmlhttp"),Vr(n,t),n.o&&n.s&&Mo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Xi(Ae(t)),e.s=null,e.S=!0,gc(e,n)}y.ib=function(){this.v!=null&&(this.v=null,Zi(this),Fo(this),Wt(19))};function yi(n){n.v!=null&&(M.clearTimeout(n.v),n.v=null)}function Uc(n,t){var e=null;if(n.g==t){yi(n),xo(n),n.g=null;var r=2}else if(zs(n.i,t))e=t.F,Sc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Gi(),Ot(r,new hc(r,e)),ts(n)}else xc(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Jg(n,t)||r==2&&Fo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Ge(n,5);break;case 4:Ge(n,10);break;case 3:Ge(n,6);break;default:Ge(n,2)}}}function qc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ge(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=xt(n.pb,n);e||(e=new Xe("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||mi(e,"https"),Xi(e)),Gg(e.toString(),r)}else Wt(2);n.H=0,n.h&&n.h.za(t),Bc(n),Lc(n)}y.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Wt(2)):(this.l.info("Failed to ping google.com"),Wt(1))};function Bc(n){if(n.H=0,n.ma=[],n.h){const t=Cc(n.i);(t.length!=0||n.j.length!=0)&&(rl(n.ma,t),rl(n.ma,n.j),n.i.i.length=0,vo(n.j),n.j.length=0),n.h.ya()}}function jc(n,t,e){var r=e instanceof Xe?Ae(e):new Xe(e);if(r.g!="")t&&(r.g=t+"."+r.g),_i(r,r.m);else{var i=M.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Xe(null);r&&mi(s,r),t&&(s.g=t),i&&_i(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&ct(r,e,t),ct(r,"VER",n.ra),Vr(n,r),r}function Kc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new vt(new Cr({ob:!0})):new vt(n.va),t.Oa(n.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function zc(){}y=zc.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function vi(){if(In&&!(10<=Number(hg)))throw Error("Environmental error: no available transport.")}vi.prototype.g=function(n,t){return new Zt(n,t)};function Zt(n,t){kt.call(this),this.g=new Mc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!er(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!er(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Dn(this)}Vt(Zt,kt);Zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Wt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=jc(n,null,n.Y),ts(n)};Zt.prototype.close=function(){Lo(this.g)};Zt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Po(n),n=e);t.j.push(new qg(t.fb++,n)),t.H==3&&ts(t)};Zt.prototype.N=function(){this.g.h=null,delete this.j,Lo(this.g),delete this.g,Zt.$.N.call(this)};function Gc(n){Do.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Vt(Gc,Do);function Wc(){No.call(this),this.status=1}Vt(Wc,No);function Dn(n){this.g=n}Vt(Dn,zc);Dn.prototype.Ba=function(){Ot(this.g,"a")};Dn.prototype.Aa=function(n){Ot(this.g,new Gc(n))};Dn.prototype.za=function(n){Ot(this.g,new Wc)};Dn.prototype.ya=function(){Ot(this.g,"b")};function Zg(){this.blockSize=-1}function re(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Vt(re,Zg);re.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ss(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}re.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Ss(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ss(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Ss(this,r),i=0;break}}this.h=i,this.i+=t};re.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function et(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var tm={};function $o(n){return-128<=n&&128>n?lg(n,function(t){return new et([t|0],0>t?-1:0)}):new et([n|0],0>n?-1:0)}function le(n){if(isNaN(n)||!isFinite(n))return mn;if(0>n)return bt(le(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Gs;return new et(t,0)}function Hc(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return bt(Hc(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=le(Math.pow(t,8)),r=mn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=le(Math.pow(t,s)),r=r.R(s).add(le(o))):(r=r.R(e),r=r.add(le(o)))}return r}var Gs=4294967296,mn=$o(0),Ws=$o(1),pl=$o(16777216);y=et.prototype;y.ea=function(){if(ee(this))return-bt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Gs+r)*t,t*=Gs}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ee(this))return"0";if(ee(this))return"-"+bt(this).toString(n);for(var t=le(Math.pow(n,6)),e=this,r="";;){var i=Ei(e,t).g;e=Ti(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Ee(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ee(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ee(n){return n.h==-1}y.X=function(n){return n=Ti(this,n),ee(n)?-1:Ee(n)?0:1};function bt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new et(e,~n.h).add(Ws)}y.abs=function(){return ee(this)?bt(this):this};y.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new et(e,e[e.length-1]&-2147483648?-1:0)};function Ti(n,t){return n.add(bt(t))}y.R=function(n){if(Ee(this)||Ee(n))return mn;if(ee(this))return ee(n)?bt(this).R(bt(n)):bt(bt(this).R(n));if(ee(n))return bt(this.R(bt(n)));if(0>this.X(pl)&&0>n.X(pl))return le(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;e[2*r+2*i]+=o*l,Gr(e,2*r+2*i),e[2*r+2*i+1]+=s*l,Gr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Gr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Gr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new et(e,0)};function Gr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function $n(n,t){this.g=n,this.h=t}function Ei(n,t){if(Ee(t))throw Error("division by zero");if(Ee(n))return new $n(mn,mn);if(ee(n))return t=Ei(bt(n),t),new $n(bt(t.g),bt(t.h));if(ee(t))return t=Ei(n,bt(t)),new $n(bt(t.g),t.h);if(30<n.g.length){if(ee(n)||ee(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Ws,r=t;0>=r.X(n);)e=gl(e),r=gl(r);var i=un(e,1),s=un(r,1);for(r=un(r,2),e=un(e,2);!Ee(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=un(r,1),e=un(e,1)}return t=Ti(n,i.R(t)),new $n(i,t)}for(i=mn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=le(e),o=s.R(t);ee(o)||0<o.X(n);)e-=r,s=le(e),o=s.R(t);Ee(s)&&(s=Ws),i=i.add(s),n=Ti(n,o)}return new $n(i,n)}y.gb=function(n){return Ei(this,n).h};y.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new et(e,this.h&n.h)};y.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new et(e,this.h|n.h)};y.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new et(e,this.h^n.h)};function gl(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new et(e,n.h)}function un(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new et(i,n.h)}vi.prototype.createWebChannel=vi.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;dc.COMPLETE="complete";fc.EventType=Rr;Rr.OPEN="a";Rr.CLOSE="b";Rr.ERROR="c";Rr.MESSAGE="d";kt.prototype.listen=kt.prototype.O;vt.prototype.listenOnce=vt.prototype.P;vt.prototype.getLastError=vt.prototype.Sa;vt.prototype.getLastErrorCode=vt.prototype.Ia;vt.prototype.getStatus=vt.prototype.da;vt.prototype.getResponseJson=vt.prototype.Wa;vt.prototype.getResponseText=vt.prototype.ja;vt.prototype.send=vt.prototype.ha;vt.prototype.setWithCredentials=vt.prototype.Oa;re.prototype.digest=re.prototype.l;re.prototype.reset=re.prototype.reset;re.prototype.update=re.prototype.j;et.prototype.add=et.prototype.add;et.prototype.multiply=et.prototype.R;et.prototype.modulo=et.prototype.gb;et.prototype.compare=et.prototype.X;et.prototype.toNumber=et.prototype.ea;et.prototype.toString=et.prototype.toString;et.prototype.getBits=et.prototype.D;et.fromNumber=le;et.fromString=Hc;var em=function(){return new vi},nm=function(){return Gi()},Cs=Wi,rm=dc,im=rn,ml={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},sm=Cr,Wr=fc,om=vt,am=re,_n=et;const _l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new cu("@firebase/firestore");function yl(){return Ze.logLevel}function R(n,...t){if(Ze.logLevel<=Ye.DEBUG){const e=t.map(Uo);Ze.debug(`Firestore (${Nn}): ${n}`,...e)}}function Re(n,...t){if(Ze.logLevel<=Ye.ERROR){const e=t.map(Uo);Ze.error(`Firestore (${Nn}): ${n}`,...e)}}function wn(n,...t){if(Ze.logLevel<=Ye.WARN){const e=t.map(Uo);Ze.warn(`Firestore (${Nn}): ${n}`,...e)}}function Uo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function D(n="Unexpected state"){const t=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: `+n;throw Re(t),new Error(t)}function tt(n,t){n||D()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Li{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Lt.UNAUTHENTICATED))}shutdown(){}}class um{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class cm{constructor(t){this.t=t,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let s=new he;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new he,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new he)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new Qc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new Lt(t)}}class hm{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new hm(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new fm(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=gm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function Z(n,t){return n<t?-1:n>t?1:0}function An(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Rt.fromMillis(Date.now())}static fromDate(t){return Rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Rt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new Rt(0,0))}static max(){return new b(new Rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,r){e===void 0?e=0:e>t.length&&D(),r===void 0?r=t.length-e:r>t.length-e&&D(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ur.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ur?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ht extends ur{construct(t,e,r){return new ht(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new T(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ht(e)}static emptyPath(){return new ht([])}}const mm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends ur{construct(t,e,r){return new Ft(t,e,r)}static isValidIdentifier(t){return mm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new T(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(e)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.path=t}static fromPath(t){return new P(ht.fromString(t))}static fromName(t){return new P(ht.fromString(t).popFirst(5))}static empty(){return new P(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ht.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ht.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new P(new ht(t.slice()))}}function _m(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new Rt(e+1,0):new Rt(e,r));return new Oe(i,P.empty(),t)}function ym(n){return new Oe(n.readTime,n.key,-1)}class Oe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Oe(b.min(),P.empty(),-1)}static max(){return new Oe(b.max(),P.empty(),-1)}}function vm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=P.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Em{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Tm)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},l=>r(l))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;e(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Nr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}qo.ae=-1;function br(n){return n==null}function Ii(n){return n===0&&1/n==-1/0}function Im(n){return typeof n=="number"&&Number.isInteger(n)&&!Ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function sn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Yc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||Nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hr(this.root,t,this.comparator,!0)}}class Hr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Nt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Nt.RED,this.left=i??Nt.EMPTY,this.right=s??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Nt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Tl(this.data.getIterator())}getIteratorFrom(t){return new Tl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ut(this.comparator);return e.data=t,e}}class Tl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.fields=t,t.sort(Ft.comparator)}static empty(){return new Yt([])}unionWith(t){let e=new Ut(Ft.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Yt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return An(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Jc("Invalid base64 string: "+s):s}}(t);return new qt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const wm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(n){if(tt(!!n),typeof n=="string"){let t=0;const e=wm.exec(n);if(tt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function jo(n){const t=n.mapValue.fields.__previous_value__;return Bo(t)?jo(t):t}function cr(n){const t=Me(n.mapValue.fields.__local_write_time__.timestampValue);return new Rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e,r,i,s,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class hr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof hr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bo(n)?4:Rm(n)?9007199254740991:10:D()}function pe(n,t){if(n===t)return!0;const e=en(n);if(e!==en(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return cr(n).isEqual(cr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Me(i.timestampValue),a=Me(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return tn(i.bytesValue).isEqual(tn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return wt(i.geoPointValue.latitude)===wt(s.geoPointValue.latitude)&&wt(i.geoPointValue.longitude)===wt(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return wt(i.integerValue)===wt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=wt(i.doubleValue),a=wt(s.doubleValue);return o===a?Ii(o)===Ii(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return An(n.arrayValue.values||[],t.arrayValue.values||[],pe);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(vl(o)!==vl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!pe(o[l],a[l])))return!1;return!0}(n,t);default:return D()}}function dr(n,t){return(n.values||[]).find(e=>pe(e,t))!==void 0}function Rn(n,t){if(n===t)return 0;const e=en(n),r=en(t);if(e!==r)return Z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=wt(s.integerValue||s.doubleValue),l=wt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return El(n.timestampValue,t.timestampValue);case 4:return El(cr(n),cr(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,o){const a=tn(s),l=tn(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=Z(wt(s.latitude),wt(o.latitude));return a!==0?a:Z(wt(s.longitude),wt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Rn(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Qr.mapValue&&o===Qr.mapValue)return 0;if(s===Qr.mapValue)return 1;if(o===Qr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Z(l[h],c[h]);if(d!==0)return d;const f=Rn(a[l[h]],u[c[h]]);if(f!==0)return f}return Z(l.length,c.length)}(n.mapValue,t.mapValue);default:throw D()}}function El(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=Me(n),r=Me(t),i=Z(e.seconds,r.seconds);return i!==0?i:Z(e.nanos,r.nanos)}function Pn(n){return Hs(n)}function Hs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return tn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return P.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Hs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hs(e.fields[o])}`;return i+"}"}(n.mapValue):D()}function Il(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Qs(n){return!!n&&"integerValue"in n}function Ko(n){return!!n&&"arrayValue"in n}function wl(n){return!!n&&"nullValue"in n}function Al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ri(n){return!!n&&"mapValue"in n}function Wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return sn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Wn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Wn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Rm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.value=t}static empty(){return new Kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ri(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wn(e)}setAll(t){let e=Ft.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Wn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ri(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return pe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ri(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){sn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Kt(Wn(this.value))}}function Zc(n){const t=[];return sn(n.fields,(e,r)=>{const i=new Ft([e]);if(ri(r)){const s=Zc(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Yt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new St(t,0,b.min(),b.min(),b.min(),Kt.empty(),0)}static newFoundDocument(t,e,r,i){return new St(t,1,e,b.min(),r,i,0)}static newNoDocument(t,e){return new St(t,2,e,b.min(),b.min(),Kt.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,b.min(),b.min(),Kt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wi{constructor(t,e){this.position=t,this.inclusive=e}}function Rl(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),e.key):r=Rn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!pe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Hn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class th{}class At extends th{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Cm(t,e,r):e==="array-contains"?new Dm(t,r):e==="in"?new Nm(t,r):e==="not-in"?new bm(t,r):e==="array-contains-any"?new Om(t,r):new At(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new km(t,r):new Vm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Rn(e,this.value)):e!==null&&en(this.value)===en(e)&&this.matchesComparison(Rn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ie extends th{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new ie(t,e)}matches(t){return eh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function eh(n){return n.op==="and"}function nh(n){return Sm(n)&&eh(n)}function Sm(n){for(const t of n.filters)if(t instanceof ie)return!1;return!0}function Xs(n){if(n instanceof At)return n.field.canonicalString()+n.op.toString()+Pn(n.value);if(nh(n))return n.filters.map(t=>Xs(t)).join(",");{const t=n.filters.map(e=>Xs(e)).join(",");return`${n.op}(${t})`}}function rh(n,t){return n instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.field.isEqual(i.field)&&pe(r.value,i.value)}(n,t):n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&rh(o,i.filters[a]),!0):!1}(n,t):void D()}function ih(n){return n instanceof At?function(e){return`${e.field.canonicalString()} ${e.op} ${Pn(e.value)}`}(n):n instanceof ie?function(e){return e.op.toString()+" {"+e.getFilters().map(ih).join(" ,")+"}"}(n):"Filter"}class Cm extends At{constructor(t,e,r){super(t,e,r),this.key=P.fromName(r.referenceValue)}matches(t){const e=P.comparator(t.key,this.key);return this.matchesComparison(e)}}class km extends At{constructor(t,e){super(t,"in",e),this.keys=sh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vm extends At{constructor(t,e){super(t,"not-in",e),this.keys=sh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function sh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>P.fromName(r.referenceValue))}class Dm extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ko(e)&&dr(e.arrayValue,this.value)}}class Nm extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&dr(this.value.arrayValue,e)}}class bm extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!dr(this.value.arrayValue,e)}}class Om extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ko(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>dr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Sl(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Mm(n,t,e,r,i,s,o)}function zo(n){const t=U(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),br(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Pn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Pn(r)).join(",")),t.he=e}return t.he}function Go(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Pm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!rh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Pl(n.startAt,t.startAt)&&Pl(n.endAt,t.endAt)}function Ys(n){return P.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Lm(n,t,e,r,i,s,o,a){return new Or(n,t,e,r,i,s,o,a)}function Wo(n){return new Or(n)}function Cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ho(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function ah(n){return n.collectionGroup!==null}function yn(n){const t=U(n);if(t.Pe===null){t.Pe=[];const e=Ho(t),r=oh(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new Hn(e)),t.Pe.push(new Hn(Ft.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Hn(Ft.keyField(),s))}}}return t.Pe}function Pe(n){const t=U(n);if(!t.Ie)if(t.limitType==="F")t.Ie=Sl(t.path,t.collectionGroup,yn(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of yn(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new Hn(s.field,o))}const r=t.endAt?new wi(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new wi(t.startAt.position,t.startAt.inclusive):null;t.Ie=Sl(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function Js(n,t){t.getFirstInequalityField(),Ho(n);const e=n.filters.concat([t]);return new Or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Zs(n,t,e){return new Or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function es(n,t){return Go(Pe(n),Pe(t))&&n.limitType===t.limitType}function lh(n){return`${zo(Pe(n))}|lt:${n.limitType}`}function to(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>ih(i)).join(", ")}]`),br(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Pn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Pn(i)).join(",")),`Target(${r})`}(Pe(n))}; limitType=${n.limitType})`}function ns(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):P.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of yn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Rl(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,yn(r),i)||r.endAt&&!function(o,a,l){const u=Rl(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,yn(r),i))}(n,t)}function Fm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uh(n){return(t,e)=>{let r=!1;for(const i of yn(n)){const s=xm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xm(n,t,e){const r=n.field.isKeyField()?P.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Rn(l,u):D()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return D()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Yc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new _t(P.comparator);function Se(){return $m}const ch=new _t(P.comparator);function jn(...n){let t=ch;for(const e of n)t=t.insert(e.key,e);return t}function hh(n){let t=ch;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function We(){return Qn()}function dh(){return Qn()}function Qn(){return new bn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Um=new _t(P.comparator),qm=new Ut(P.comparator);function G(...n){let t=qm;for(const e of n)t=t.add(e);return t}const Bm=new Ut(Z);function jm(){return Bm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(t)?"-0":t}}function ph(n){return{integerValue:""+n}}function Km(n,t){return Im(t)?ph(t):fh(n,t)}/**
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
 */class rs{constructor(){this._=void 0}}function zm(n,t,e){return n instanceof Ai?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bo(s)&&(s=jo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof fr?mh(n,t):n instanceof pr?_h(n,t):function(i,s){const o=gh(i,s),a=kl(o)+kl(i.Te);return Qs(o)&&Qs(i.Te)?ph(a):fh(i.serializer,a)}(n,t)}function Gm(n,t,e){return n instanceof fr?mh(n,t):n instanceof pr?_h(n,t):e}function gh(n,t){return n instanceof Ri?function(r){return Qs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Ai extends rs{}class fr extends rs{constructor(t){super(),this.elements=t}}function mh(n,t){const e=yh(t);for(const r of n.elements)e.some(i=>pe(i,r))||e.push(r);return{arrayValue:{values:e}}}class pr extends rs{constructor(t){super(),this.elements=t}}function _h(n,t){let e=yh(t);for(const r of n.elements)e=e.filter(i=>!pe(i,r));return{arrayValue:{values:e}}}class Ri extends rs{constructor(t,e){super(),this.serializer=t,this.Te=e}}function kl(n){return wt(n.integerValue||n.doubleValue)}function yh(n){return Ko(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof fr&&i instanceof fr||r instanceof pr&&i instanceof pr?An(r.elements,i.elements,pe):r instanceof Ri&&i instanceof Ri?pe(r.Te,i.Te):r instanceof Ai&&i instanceof Ai}(n.transform,t.transform)}class Hm{constructor(t,e){this.version=t,this.transformResults=e}}class Qt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qt}static exists(t){return new Qt(void 0,t)}static updateTime(t){return new Qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ii(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class is{}function vh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Qo(n.key,Qt.none()):new Mr(n.key,n.data,Qt.none());{const e=n.data,r=Kt.empty();let i=new Ut(Ft.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new qe(n.key,r,new Yt(i.toArray()),Qt.none())}}function Qm(n,t,e){n instanceof Mr?function(i,s,o){const a=i.value.clone(),l=Dl(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof qe?function(i,s,o){if(!ii(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dl(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Th(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Xn(n,t,e,r){return n instanceof Mr?function(s,o,a,l){if(!ii(s.precondition,o))return a;const u=s.value.clone(),c=Nl(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof qe?function(s,o,a,l){if(!ii(s.precondition,o))return a;const u=Nl(s.fieldTransforms,l,o),c=o.data;return c.setAll(Th(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return ii(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Xm(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=gh(r.transform,i||null);s!=null&&(e===null&&(e=Kt.empty()),e.set(r.field,s))}return e||null}function Vl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&An(r,i,(s,o)=>Wm(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Mr extends is{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qe extends is{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Th(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Dl(n,t,e){const r=new Map;tt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Gm(o,a,e[i]))}return r}function Nl(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,zm(s,o,t))}return r}class Qo extends is{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends is{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Qm(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=dh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const l=vh(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&An(this.mutations,t.mutations,(e,r)=>Vl(e,r))&&An(this.baseMutations,t.baseMutations,(e,r)=>Vl(e,r))}}class Xo{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){tt(t.mutations.length===r.length);let i=function(){return Um}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xo(t,e,r,i)}}/**
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
 */class Jm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Zm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,Q;function Ih(n){switch(n){default:return D();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function wh(n){if(n===void 0)return Re("GRPC error has no .code"),p.UNKNOWN;switch(n){case It.OK:return p.OK;case It.CANCELLED:return p.CANCELLED;case It.UNKNOWN:return p.UNKNOWN;case It.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case It.INTERNAL:return p.INTERNAL;case It.UNAVAILABLE:return p.UNAVAILABLE;case It.UNAUTHENTICATED:return p.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case It.NOT_FOUND:return p.NOT_FOUND;case It.ALREADY_EXISTS:return p.ALREADY_EXISTS;case It.PERMISSION_DENIED:return p.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case It.ABORTED:return p.ABORTED;case It.OUT_OF_RANGE:return p.OUT_OF_RANGE;case It.UNIMPLEMENTED:return p.UNIMPLEMENTED;case It.DATA_LOSS:return p.DATA_LOSS;default:return D()}}(Q=It||(It={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Xr}static getOrCreateInstance(){return Xr===null&&(Xr=new Yo),Xr}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let Xr=null;/**
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
 */function t_(){return new TextEncoder}/**
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
 */const e_=new _n([4294967295,4294967295],0);function bl(n){const t=t_().encode(n),e=new am;return e.update(t),new Uint8Array(e.digest())}function Ol(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new _n([e,r],0),new _n([i,s],0)]}class Jo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Kn(`Invalid padding: ${e}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=_n.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(_n.fromNumber(r)));return i.compare(e_)===1&&(i=new _n([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=bl(t),[r,i]=Ol(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Jo(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=bl(t),[r,i]=Ol(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Lr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ss(b.min(),i,new _t(Z),Se(),G())}}class Lr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Lr(r,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class Ah{constructor(t,e){this.targetId=t,this.pe=e}}class Rh{constructor(t,e,r=qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ml{constructor(){this.ye=0,this.we=Fl(),this.Se=qt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=G(),e=G(),r=G();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:D()}}),new Lr(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=Fl()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class n_{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Se(),this.$e=Ll(),this.Ue=new _t(Z)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:D()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Ys(a))if(s===0){const l=new P(a.path);this.ze(i,l,St.newNoDocument(l,b.min()))}else tt(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(t,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(e=Yo.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,f,I){var _,w,k,W,B,L;const j={localCacheCount:f,existenceFilterCount:I.count},K=I.unchangedNames;return K&&(j.bloomFilter={applied:h===0,hashCount:(_=K==null?void 0:K.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(W=(k=(w=K==null?void 0:K.bits)===null||w===void 0?void 0:w.bitmap)===null||k===void 0?void 0:k.length)!==null&&W!==void 0?W:0,padding:(L=(B=K==null?void 0:K.bits)===null||B===void 0?void 0:B.padding)!==null&&L!==void 0?L:0},d&&(j.bloomFilter.mightContain=d)),j}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=tn(s).toUint8Array()}catch(h){if(h instanceof Jc)return wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Jo(l,o,a)}catch(h){return wn(h instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,c)?0:2,nt:c}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Ys(a.target)){const l=new P(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,St.newNoDocument(l,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=G();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new ss(t,e,this.Ue,this.Ke,r);return this.Ke=Se(),this.$e=Ll(),this.Ue=new _t(Z),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Ml,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Ut(Z),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||R("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Ml),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Ll(){return new _t(P.comparator)}function Fl(){return new _t(P.comparator)}const r_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),i_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),s_=(()=>({and:"AND",or:"OR"}))();class o_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function eo(n,t){return n.useProto3Json||br(t)?t:{value:t}}function Pi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ph(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function a_(n,t){return Pi(n,t.toTimestamp())}function Jt(n){return tt(!!n),b.fromTimestamp(function(e){const r=Me(e);return new Rt(r.seconds,r.nanos)}(n))}function Zo(n,t){return function(r){return new ht(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Sh(n){const t=ht.fromString(n);return tt(Nh(t)),t}function Si(n,t){return Zo(n.databaseId,t.path)}function Yn(n,t){const e=Sh(t);if(e.get(1)!==n.databaseId.projectId)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new T(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new P(Ch(e))}function no(n,t){return Zo(n.databaseId,t)}function l_(n){const t=Sh(n);return t.length===4?ht.emptyPath():Ch(t)}function gr(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xl(n,t,e){return{name:Si(n,t),fields:e.value.mapValue.fields}}function u_(n,t){return"found"in t?function(r,i){tt(!!i.found),i.found.name,i.found.updateTime;const s=Yn(r,i.found.name),o=Jt(i.found.updateTime),a=i.found.createTime?Jt(i.found.createTime):b.min(),l=new Kt({mapValue:{fields:i.found.fields}});return St.newFoundDocument(s,o,a,l)}(n,t):"missing"in t?function(r,i){tt(!!i.missing),tt(!!i.readTime);const s=Yn(r,i.missing),o=Jt(i.readTime);return St.newNoDocument(s,o)}(n,t):D()}function c_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:D()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(tt(c===void 0||typeof c=="string"),qt.fromBase64String(c||"")):(tt(c===void 0||c instanceof Uint8Array),qt.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:wh(u.code);return new T(c,u.message||"")}(o);e=new Rh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yn(n,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):b.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];e=new si(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Yn(n,r.document),s=r.readTime?Jt(r.readTime):b.min(),o=St.newNoDocument(i,s),a=r.removedTargetIds||[];e=new si([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Yn(n,r.document),s=r.removedTargetIds||[];e=new si([],s,i,null)}else{if(!("filter"in t))return D();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Zm(i,s),a=r.targetId;e=new Ah(a,o)}}return e}function kh(n,t){let e;if(t instanceof Mr)e={update:xl(n,t.key,t.value)};else if(t instanceof Qo)e={delete:Si(n,t.key)};else if(t instanceof qe)e={update:xl(n,t.key,t.data),updateMask:v_(t.fieldMask)};else{if(!(t instanceof Eh))return D();e={verify:Si(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ai)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ri)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw D()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:a_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:D()}(n,t.precondition)),e}function h_(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual(b.min())&&(o=Jt(s)),new Hm(o,i.transformResults||[])}(e,t))):[]}function d_(n,t){return{documents:[no(n,t.path)]}}function f_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=no(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=no(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Dh(ie.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:cn(h.field),direction:m_(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=eo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),e}function p_(n){let t=l_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){tt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(h){const d=Vh(h);return d instanceof ie&&nh(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(I){return new Hn(hn(I.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,br(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new wi(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new wi(f,d)}(e.endAt)),Lm(t,i,o,s,a,"F",l,u)}function g_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return D()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=hn(e.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hn(e.unaryFilter.field);return At.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hn(e.unaryFilter.field);return At.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hn(e.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(n):n.fieldFilter!==void 0?function(e){return At.create(hn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ie.create(e.compositeFilter.filters.map(r=>Vh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return D()}}(e.compositeFilter.op))}(n):D()}function m_(n){return r_[n]}function __(n){return i_[n]}function y_(n){return s_[n]}function cn(n){return{fieldPath:n.canonicalString()}}function hn(n){return Ft.fromServerFormat(n.fieldPath)}function Dh(n){return n instanceof At?function(e){if(e.op==="=="){if(Al(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NAN"}};if(wl(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Al(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NOT_NAN"}};if(wl(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(e.field),op:__(e.op),value:e.value}}}(n):n instanceof ie?function(e){const r=e.getFilters().map(i=>Dh(i));return r.length===1?r[0]:{compositeFilter:{op:y_(e.op),filters:r}}}(n):D()}function v_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e,r,i,s=b.min(),o=b.min(),a=qt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Ne(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.ct=t}}function E_(n){const t=p_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.sn=new w_}addToCollectionParentIndex(t,e){return this.sn.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(Oe.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(Oe.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class w_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Ut(ht.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Ut(ht.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Sn(0)}static On(){return new Sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.changes=new bn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Xn(r.mutation,i,Yt.empty(),Rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,e,r=G()){const i=We();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=jn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=We();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,G()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Se();const o=Qn(),a=function(){return Qn()}();return e.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof qe)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Xn(c.mutation,u,c.mutation.getFieldMask(),Rt.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),e.forEach((u,c)=>{var h;return a.set(u,new R_(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Qn();let i=new _t((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let c=r.get(l)||Yt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=dh();c.forEach(d=>{if(!s.has(d)){const f=vh(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return P.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ah(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(We());let a=-1,l=s;return o.next(u=>m.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?m.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,G())).next(c=>({batchId:a,changes:hh(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new P(e)).next(r=>{let i=jn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=jn();return this.indexManager.getCollectionParents(t,i).next(o=>m.forEach(o,a=>{const l=function(c,h){return new Or(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,St.newInvalidDocument(u)))});let o=jn();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Xn(u.mutation,l,Yt.empty(),Rt.now()),ns(e,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return m.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:E_(i.bundledQuery),readTime:Jt(i.readTime)}}(e)),m.resolve()}}/**
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
 */class C_{constructor(){this.overlays=new _t(P.comparator),this.cr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=We();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=We(),s=e.length+1,o=new P(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new _t((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=We(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=We(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jm(e,r));let s=this.cr.get(e);s===void 0&&(s=G(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.lr=new Ut(Pt.hr),this.Pr=new Ut(Pt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new Pt(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new Pt(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new P(new ht([])),r=new Pt(e,t),i=new Pt(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new P(new ht([])),r=new Pt(e,t),i=new Pt(e,t+1);let s=G();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new Pt(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Pt{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return P.comparator(t.key,e.key)||Z(t.mr,e.mr)}static Ir(t,e){return Z(t.mr,e.mr)||P.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Ut(Pt.hr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ym(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Pt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Pt(e,0),i=new Pt(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ut(Z);return e.forEach(i=>{const s=new Pt(i,0),o=new Pt(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new Pt(new P(s),0);let a=new Ut(Z);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){tt(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(e.mutations,i=>{const s=new Pt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new Pt(e,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.Dr=t,this.docs=function(){return new _t(P.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=Se();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Se();const o=e.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vm(ym(c),r)<=0||(i.has(c.key)||ns(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){D()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new D_(this)}getSize(t){return m.resolve(this.size)}}class D_ extends A_{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.persistence=t,this.Cr=new bn(e=>zo(e),Go),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ta,this.targetCount=0,this.Or=Sn.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),m.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Sn(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.Ln(e),m.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Mr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,e){this.Nr={},this.overlays={},this.Br=new qo(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new N_(this),this.indexManager=new I_,this.remoteDocumentCache=function(i){return new V_(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new T_(e),this.Qr=new S_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new C_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new k_(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const i=new O_(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class O_ extends Em{constructor(t){super(),this.currentSequenceNumber=t}}class ea{constructor(t){this.persistence=t,this.Wr=new ta,this.Gr=null}static zr(t){return new ea(t)}get jr(){if(this.Gr)return this.Gr;throw D()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=P.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,b.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return m.or([()=>m.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Li=r,this.ki=i}static qi(t,e){let r=G(),i=G();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new na(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(Cl(e))return m.resolve(null);let r=Pe(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Zs(e,null,"F"),r=Pe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=G(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(e,a);return this.zi(e,u,o,l.readTime)?this.$i(t,Zs(e,null,"F")):this.ji(t,u,e,l)}))})))}Ui(t,e,r,i){return Cl(e)||i.isEqual(b.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(yl()<=Ye.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),to(e)),this.ji(t,o,e,_m(i,-1)))})}Gi(t,e){let r=new Ut(uh(t));return e.forEach((i,s)=>{ns(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return yl()<=Ye.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",to(e)),this.Ki.getDocumentsMatchingQuery(t,e,Oe.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new _t(Z),this.Yi=new bn(s=>zo(s),Go),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new P_(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function F_(n,t,e,r){return new L_(n,t,e,r)}async function bh(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return e.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function x_(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>c.getEntry(l,I)).next(_=>{const w=u.docVersions.get(I);tt(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=G();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Oh(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function $_(n,t){const e=U(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(qt.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,w,k){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,c)&&a.push(e.kr.updateTargetData(s,f))});let l=Se(),u=G();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(U_(s,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(b.min())){const c=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(e.Ji=i,s))}function U_(n,t,e){let r=G(),i=G();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Se();return e.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(b.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function q_(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function B_(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new Ne(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function ro(n,t,e){const r=U(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Nr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function $l(n,t,e){const r=U(n);let i=b.min(),s=G();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=U(l),d=h.Yi.get(c);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,Pe(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:b.min(),e?s:G())).next(a=>(j_(r,Fm(t),a),{documents:a,ss:s})))}function j_(n,t,e){let r=n.Zi.get(t)||b.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}class Ul{constructor(){this.activeTargetIds=jm()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class K_{constructor(){this.Hs=new Ul,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Ul,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yr=null;function ks(){return Yr===null?Yr=function(){return 268435456+Math.round(2147483648*Math.random())}():Yr++,"0x"+Yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class H_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.To=r+"://"+e.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(e,r,i,s,o){const a=ks(),l=this.Vo(e,r);R("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={};return this.mo(u,s,o),this.fo(e,l,u,i).then(c=>(R("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw wn("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}po(e,r,i,s,o,a){return this.Ro(e,r,i,s,o)}mo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}Vo(e,r){const i=G_[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}fo(t,e,r,i){const s=ks();return new Promise((o,a)=>{const l=new om;l.setWithCredentials(!0),l.listenOnce(rm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Cs.NO_ERROR:const c=l.getResponseJson();R(Mt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Cs.TIMEOUT:R(Mt,`RPC '${t}' ${s} timed out`),a(new T(p.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const h=l.getStatus();if(R(Mt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(w){const k=w.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(k)>=0?k:p.UNKNOWN}(f.status);a(new T(I,f.message))}else a(new T(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(p.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{R(Mt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);R(Mt,`RPC '${t}' ${s} sending request:`,i),l.send(e,"POST",u,r,15)})}yo(t,e,r){const i=ks(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=em(),a=nm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new sm({})),this.mo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(Mt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const I=new W_({so:w=>{f?R(Mt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(d||(R(Mt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),R(Mt,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,k,W)=>{w.listen(k,B=>{try{W(B)}catch(L){setTimeout(()=>{throw L},0)}})};return _(h,Wr.EventType.OPEN,()=>{f||R(Mt,`RPC '${t}' stream ${i} transport opened.`)}),_(h,Wr.EventType.CLOSE,()=>{f||(f=!0,R(Mt,`RPC '${t}' stream ${i} transport closed`),I.Po())}),_(h,Wr.EventType.ERROR,w=>{f||(f=!0,wn(Mt,`RPC '${t}' stream ${i} transport errored:`,w),I.Po(new T(p.UNAVAILABLE,"The operation could not be completed")))}),_(h,Wr.EventType.MESSAGE,w=>{var k;if(!f){const W=w.data[0];tt(!!W);const B=W,L=B.error||((k=B[0])===null||k===void 0?void 0:k.error);if(L){R(Mt,`RPC '${t}' stream ${i} received error:`,L);const j=L.status;let K=function(pt){const nt=It[pt];if(nt!==void 0)return wh(nt)}(j),it=L.message;K===void 0&&(K=p.INTERNAL,it="Unknown error status: "+j+" with message "+L.message),f=!0,I.Po(new T(K,it)),h.close()}else R(Mt,`RPC '${t}' stream ${i} received:`,W),I.Io(W)}}),_(a,im.STAT_EVENT,w=>{w.stat===ml.PROXY?R(Mt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===ml.NOPROXY&&R(Mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.ho()},0),I}}function Vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){return new o_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const e=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,r,i,s,o,a,l){this.ii=t,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new ra(t,e)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(t,e){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,t!==4?this.Qo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(Re(e.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Yo(){}auth(){this.state=1;const t=this.Zo(this.Lo),e=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===e&&this.Xo(r,i)},r=>{t(()=>{const i=new T(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(t,e){const r=this.Zo(this.Lo);this.stream=this.t_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Zo(t){return e=>{this.ii.enqueueAndForget(()=>this.Lo===t?e():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q_ extends Mh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}t_(t,e){return this.connection.yo("Listen",t,e)}onMessage(t){this.Qo.reset();const e=c_(this.serializer,t),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?Jt(o.readTime):b.min()}(t);return this.listener.n_(e,r)}r_(t){const e={};e.database=gr(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=Ys(l)?{documents:d_(s,l)}:{query:f_(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ph(s,o.resumeToken);const u=eo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Pi(s,o.snapshotVersion.toTimestamp());const u=eo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=g_(this.serializer,t);r&&(e.labels=r),this.jo(e)}i_(t){const e={};e.database=gr(this.serializer),e.removeTarget=t,this.jo(e)}}class X_ extends Mh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if(tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.s_){this.Qo.reset();const e=h_(t.writeResults,t.commitTime),r=Jt(t.commitTime);return this.listener.a_(r,e)}return tt(!t.writeResults||t.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const t={};t.database=gr(this.serializer),this.jo(t)}__(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>kh(this.serializer,r))};this.jo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(t,e,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(p.UNKNOWN,i.toString())})}po(t,e,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(p.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class J_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(t){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.A_("Offline")))}set(t){this.m_(),this.I_=0,t==="Online"&&(this.E_=!1),this.A_(t)}A_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}R_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(Re(e),this.E_=!1):R("OnlineStateTracker",e)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{on(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=U(l);u.p_.add(4),await Fr(u),u.S_.set("Unknown"),u.p_.delete(4),await as(u)}(this))})}),this.S_=new J_(r,i)}}async function as(n){if(on(n))for(const t of n.y_)await t(!0)}async function Fr(n){for(const t of n.y_)await t(!1)}function Lh(n,t){const e=U(n);e.g_.has(t.targetId)||(e.g_.set(t.targetId,t),oa(e)?sa(e):On(e).$o()&&ia(e,t))}function Fh(n,t){const e=U(n),r=On(e);e.g_.delete(t),r.$o()&&xh(e,t),e.g_.size===0&&(r.$o()?r.Go():on(e)&&e.S_.set("Unknown"))}function ia(n,t){if(n.b_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(b.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}On(n).r_(t)}function xh(n,t){n.b_.Be(t),On(n).i_(t)}function sa(n){n.b_=new n_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.g_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),On(n).start(),n.S_.d_()}function oa(n){return on(n)&&!On(n).Ko()&&n.g_.size>0}function on(n){return U(n).p_.size===0}function $h(n){n.b_=void 0}async function ty(n){n.g_.forEach((t,e)=>{ia(n,t)})}async function ey(n,t){$h(n),oa(n)?(n.S_.V_(t),sa(n)):n.S_.set("Unknown")}async function ny(n,t,e){if(n.S_.set("Online"),t instanceof Rh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ci(n,r)}else if(t instanceof si?n.b_.We(t):t instanceof Ah?n.b_.Ze(t):n.b_.je(t),!e.isEqual(b.min()))try{const r=await Oh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.g_.get(u);c&&s.g_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.g_.get(l);if(!c)return;s.g_.set(l,c.withResumeToken(qt.EMPTY_BYTE_STRING,c.snapshotVersion)),xh(s,l);const h=new Ne(c.target,l,u,c.sequenceNumber);ia(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Ci(n,r)}}async function Ci(n,t,e){if(!Nr(t))throw t;n.p_.add(1),await Fr(n),n.S_.set("Offline"),e||(e=()=>Oh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await e(),n.p_.delete(1),await as(n)})}function Uh(n,t){return t().catch(e=>Ci(n,e,t))}async function ls(n){const t=U(n),e=Le(t);let r=t.f_.length>0?t.f_[t.f_.length-1].batchId:-1;for(;ry(t);)try{const i=await q_(t.localStore,r);if(i===null){t.f_.length===0&&e.Go();break}r=i.batchId,iy(t,i)}catch(i){await Ci(t,i)}qh(t)&&Bh(t)}function ry(n){return on(n)&&n.f_.length<10}function iy(n,t){n.f_.push(t);const e=Le(n);e.$o()&&e.o_&&e.__(t.mutations)}function qh(n){return on(n)&&!Le(n).Ko()&&n.f_.length>0}function Bh(n){Le(n).start()}async function sy(n){Le(n).c_()}async function oy(n){const t=Le(n);for(const e of n.f_)t.__(e.mutations)}async function ay(n,t,e){const r=n.f_.shift(),i=Xo.from(r,t,e);await Uh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ls(n)}async function ly(n,t){t&&Le(n).o_&&await async function(r,i){if(function(o){return Ih(o)&&o!==p.ABORTED}(i.code)){const s=r.f_.shift();Le(r).Wo(),await Uh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ls(r)}}(n,t),qh(n)&&Bh(n)}async function Bl(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=on(e);e.p_.add(3),await Fr(e),r&&e.S_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.p_.delete(3),await as(e)}async function uy(n,t){const e=U(n);t?(e.p_.delete(2),await as(e)):t||(e.p_.add(2),await Fr(e),e.S_.set("Unknown"))}function On(n){return n.D_||(n.D_=function(e,r,i){const s=U(e);return s.h_(),new Q_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:ty.bind(null,n),uo:ey.bind(null,n),n_:ny.bind(null,n)}),n.y_.push(async t=>{t?(n.D_.Wo(),oa(n)?sa(n):n.S_.set("Unknown")):(await n.D_.stop(),$h(n))})),n.D_}function Le(n){return n.v_||(n.v_=function(e,r,i){const s=U(e);return s.h_(),new X_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:sy.bind(null,n),uo:ly.bind(null,n),u_:oy.bind(null,n),a_:ay.bind(null,n)}),n.y_.push(async t=>{t?(n.v_.Wo(),await ls(n)):(await n.v_.stop(),n.f_.length>0&&(R("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new aa(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(n,t){if(Re("AsyncQueue",`${t}: ${n}`),Nr(n))return new T(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||P.comparator(e.key,r.key):(e,r)=>P.comparator(e.key,r.key),this.keyedMap=jn(),this.sortedSet=new _t(this.comparator)}static emptySet(t){return new vn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof vn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new vn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.C_=new _t(P.comparator)}track(t){const e=t.doc.key,r=this.C_.get(e);r?t.type!==0&&r.type===3?this.C_=this.C_.insert(e,t):t.type===3&&r.type!==1?this.C_=this.C_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.C_=this.C_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.C_=this.C_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.C_=this.C_.remove(e):t.type===1&&r.type===2?this.C_=this.C_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.C_=this.C_.insert(e,{type:2,doc:t.doc}):D():this.C_=this.C_.insert(e,t)}F_(){const t=[];return this.C_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Cn{constructor(t,e,r,i,s,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Cn(t,e,vn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&es(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.M_=void 0,this.listeners=[]}}class hy{constructor(){this.queries=new bn(t=>lh(t),es),this.onlineState="Unknown",this.x_=new Set}}async function jh(n,t){const e=U(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new cy),i)try{s.M_=await e.onListen(r)}catch(o){const a=la(o,`Initialization of query '${to(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.O_(e.onlineState),s.M_&&t.N_(s.M_)&&ua(e)}async function Kh(n,t){const e=U(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function dy(n,t){const e=U(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&ua(e)}function fy(n,t,e){const r=U(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function ua(n){n.x_.forEach(t=>{t.next()})}class zh{constructor(t,e,r){this.query=t,this.B_=e,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Cn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.L_?this.q_(t)&&(this.B_.next(t),e=!0):this.Q_(t,this.onlineState)&&(this.K_(t),e=!0),this.k_=t,e}onError(t){this.B_.error(t)}O_(t){this.onlineState=t;let e=!1;return this.k_&&!this.L_&&this.Q_(this.k_,t)&&(this.K_(this.k_),e=!0),e}Q_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.U_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}q_(t){if(t.docChanges.length>0)return!0;const e=this.k_&&this.k_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}K_(t){t=Cn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.L_=!0,this.B_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.key=t}}class Wh{constructor(t){this.key=t}}class py{constructor(t,e){this.query=t,this.Z_=e,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=G(),this.mutatedKeys=G(),this.ta=uh(t),this.na=new vn(this.ta)}get ra(){return this.Z_}ia(t,e){const r=e?e.sa:new jl,i=e?e.na:this.na;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=ns(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?I!==_&&(r.track({type:3,doc:f}),w=!0):this.oa(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.ta(f,l)>0||u&&this.ta(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.na;this.na=t.na,this.mutatedKeys=t.mutatedKeys;const s=t.sa.F_();s.sort((u,c)=>function(d,f){const I=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return I(d)-I(f)}(u.type,c.type)||this.ta(u.doc,c.doc)),this._a(r);const o=e?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new Cn(this.query,t.na,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new jl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(t){return!this.Z_.has(t)&&!!this.na.has(t)&&!this.na.get(t).hasLocalMutations}_a(t){t&&(t.addedDocuments.forEach(e=>this.Z_=this.Z_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Z_=this.Z_.delete(e)),this.current=t.current)}aa(){if(!this.current)return[];const t=this.ea;this.ea=G(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const e=[];return t.forEach(r=>{this.ea.has(r)||e.push(new Wh(r))}),this.ea.forEach(r=>{t.has(r)||e.push(new Gh(r))}),e}la(t){this.Z_=t.ss,this.ea=G();const e=this.ia(t.documents);return this.applyChanges(e,!0)}ha(){return Cn.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class gy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class my{constructor(t){this.key=t,this.Pa=!1}}class _y{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new bn(a=>lh(a),es),this.Ea=new Map,this.da=new Set,this.Aa=new _t(P.comparator),this.Ra=new Map,this.Va=new ta,this.ma={},this.fa=new Map,this.ga=Sn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function yy(n,t){const e=Cy(n);let r,i;const s=e.Ta.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await B_(e.localStore,Pe(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await vy(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Lh(e.remoteStore,o)}return i}async function vy(n,t,e,r,i){n.ya=(h,d,f)=>async function(_,w,k,W){let B=w.view.ia(k);B.zi&&(B=await $l(_.localStore,w.query,!1).then(({documents:K})=>w.view.ia(K,B)));const L=W&&W.targetChanges.get(w.targetId),j=w.view.applyChanges(B,_.isPrimaryClient,L);return zl(_,w.targetId,j.ua),j.snapshot}(n,h,d,f);const s=await $l(n.localStore,t,!0),o=new py(t,s.ss),a=o.ia(s.documents),l=Lr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);zl(n,e,u.ua);const c=new gy(t,e,o);return n.Ta.set(t,c),n.Ea.has(e)?n.Ea.get(e).push(t):n.Ea.set(e,[t]),u.snapshot}async function Ty(n,t){const e=U(n),r=e.Ta.get(t),i=e.Ea.get(r.targetId);if(i.length>1)return e.Ea.set(r.targetId,i.filter(s=>!es(s,t))),void e.Ta.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ro(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Fh(e.remoteStore,r.targetId),io(e,r.targetId)}).catch(Dr)):(io(e,r.targetId),await ro(e.localStore,r.targetId,!0))}async function Ey(n,t,e){const r=ky(n);try{const i=await function(o,a){const l=U(o),u=Rt.now(),c=a.reduce((f,I)=>f.add(I.key),G());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Se(),_=G();return l.Xi.getEntries(f,c).next(w=>{I=w,I.forEach((k,W)=>{W.isValidDocument()||(_=_.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,I)).next(w=>{h=w;const k=[];for(const W of a){const B=Xm(W,h.get(W.key).overlayedDocument);B!=null&&k.push(new qe(W.key,B,Zc(B.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,k,a)}).next(w=>{d=w;const k=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,w.batchId,k)})}).then(()=>({batchId:d.batchId,changes:hh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ma[o.currentUser.toKey()];u||(u=new _t(Z)),u=u.insert(a,l),o.ma[o.currentUser.toKey()]=u}(r,i.batchId,e),await xr(r,i.changes),await ls(r.remoteStore)}catch(i){const s=la(i,"Failed to persist write");e.reject(s)}}async function Hh(n,t){const e=U(n);try{const r=await $_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Ra.get(s);o&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?tt(o.Pa):i.removedDocuments.size>0&&(tt(o.Pa),o.Pa=!1))}),await xr(e,r,t)}catch(r){await Dr(r)}}function Kl(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=U(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.O_(a)&&(u=!0)}),u&&ua(l)}(r.eventManager,t),i.length&&r.Ia.n_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Iy(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ra.get(t),s=i&&i.key;if(s){let o=new _t(P.comparator);o=o.insert(s,St.newNoDocument(s,b.min()));const a=G().add(s),l=new ss(b.min(),new Map,new _t(Z),o,a);await Hh(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(t),ca(r)}else await ro(r.localStore,t,!1).then(()=>io(r,t,e)).catch(Dr)}async function wy(n,t){const e=U(n),r=t.batch.batchId;try{const i=await x_(e.localStore,t);Xh(e,r,null),Qh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await xr(e,i)}catch(i){await Dr(i)}}async function Ay(n,t,e){const r=U(n);try{const i=await function(o,a){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(tt(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);Xh(r,t,e),Qh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await xr(r,i)}catch(i){await Dr(i)}}function Qh(n,t){(n.fa.get(t)||[]).forEach(e=>{e.resolve()}),n.fa.delete(t)}function Xh(n,t,e){const r=U(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.ma[r.currentUser.toKey()]=i}}function io(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ea.get(t))n.Ta.delete(r),e&&n.Ia.wa(r,e);n.Ea.delete(t),n.isPrimaryClient&&n.Va.Ar(t).forEach(r=>{n.Va.containsKey(r)||Yh(n,r)})}function Yh(n,t){n.da.delete(t.path.canonicalString());const e=n.Aa.get(t);e!==null&&(Fh(n.remoteStore,e),n.Aa=n.Aa.remove(t),n.Ra.delete(e),ca(n))}function zl(n,t,e){for(const r of e)r instanceof Gh?(n.Va.addReference(r.key,t),Ry(n,r)):r instanceof Wh?(R("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,t),n.Va.containsKey(r.key)||Yh(n,r.key)):D()}function Ry(n,t){const e=t.key,r=e.path.canonicalString();n.Aa.get(e)||n.da.has(r)||(R("SyncEngine","New document in limbo: "+e),n.da.add(r),ca(n))}function ca(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const t=n.da.values().next().value;n.da.delete(t);const e=new P(ht.fromString(t)),r=n.ga.next();n.Ra.set(r,new my(e)),n.Aa=n.Aa.insert(e,r),Lh(n.remoteStore,new Ne(Pe(Wo(e.path)),r,"TargetPurposeLimboResolution",qo.ae))}}async function xr(n,t,e){const r=U(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=na.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,u){const c=U(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Nr(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.Ji.get(d),I=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(I);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function Py(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await bh(e.localStore,t);e.currentUser=t,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new T(p.CANCELLED,o))})}),s.fa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xr(e,r.ts)}}function Sy(n,t){const e=U(n),r=e.Ra.get(t);if(r&&r.Pa)return G().add(r.key);{let i=G();const s=e.Ea.get(t);if(!s)return i;for(const o of s){const a=e.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function Cy(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Iy.bind(null,t),t.Ia.n_=dy.bind(null,t.eventManager),t.Ia.wa=fy.bind(null,t.eventManager),t}function ky(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ay.bind(null,t),t}class Gl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=os(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return F_(this.persistence,new M_,t.initialUser,this.serializer)}createPersistence(t){return new b_(ea.zr,this.serializer)}createSharedClientState(t){return new K_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Py.bind(null,this.syncEngine),await uy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hy}()}createDatastore(t){const e=os(t.databaseInfo.databaseId),r=function(s){return new H_(s)}(t.databaseInfo);return function(s,o,a,l){return new Y_(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Z_(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Kl(this.syncEngine,e,0),function(){return ql.v()?new ql:new z_}())}createSyncEngine(t,e){return function(i,s,o,a,l,u,c){const h=new _y(i,s,o,a,l,u);return c&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=U(e);R("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Fr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Da(this.observer.next,t)}error(t){this.observer.error?this.Da(this.observer.error,t):Re("Uncaught Error in snapshot listener:",t.toString())}va(){this.muted=!0}Da(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=U(i),a=gr(o.serializer)+"/documents",l={documents:s.map(d=>Si(o.serializer,d))},u=await o.po("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=u_(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());tt(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Qo(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=P.fromPath(r);this.mutations.push(new Eh(i,this.precondition(i)))}),await async function(r,i){const s=U(r),o=gr(s.serializer)+"/documents",a={writes:i.map(l=>kh(s.serializer,l))};await s.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw D();e=b.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new T(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(b.min())?Qt.exists(!1):Qt.updateTime(e):Qt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(b.min()))throw new T(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Qt.updateTime(e)}return Qt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.ka=r.maxAttempts,this.Qo=new ra(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const t=new Dy(this.datastore),e=this.Qa(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ka(i)}))}).catch(r=>{this.Ka(r)})})}Qa(t){try{const e=this.updateFunction(t);return!br(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ka(t){this.ka>0&&this.$a(t)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(t)}$a(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Ih(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=Xc.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=la(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ds(n,t){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Wl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await My(n);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Bl(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Bl(t.remoteStore,s)),n._onlineComponents=t}function Oy(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function My(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ds(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Oy(e))throw e;wn("Error using user provided cache. Falling back to memory cache: "+e),await Ds(n,new Gl)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Ds(n,new Gl);return n._offlineComponents}async function ha(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Wl(n,n._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Wl(n,new Vy))),n._onlineComponents}function Ly(n){return ha(n).then(t=>t.syncEngine)}function Fy(n){return ha(n).then(t=>t.datastore)}async function Zh(n){const t=await ha(n),e=t.eventManager;return e.onListen=yy.bind(null,t.syncEngine),e.onUnlisten=Ty.bind(null,t.syncEngine),e}function xy(n,t,e={}){const r=new he;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Jh({next:d=>{o.enqueueAndForget(()=>Kh(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new zh(Wo(a.path),c,{includeMetadataChanges:!0,U_:!0});return jh(s,h)}(await Zh(n),n.asyncQueue,t,e,r)),r.promise}function $y(n,t,e={}){const r=new he;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Jh({next:d=>{o.enqueueAndForget(()=>Kh(s,h)),d.fromCache&&l.source==="server"?u.reject(new T(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new zh(a,c,{includeMetadataChanges:!0,U_:!0});return jh(s,h)}(await Zh(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */const Hl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,t,e){if(!e)throw new T(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Uy(n,t,e,r){if(t===!0&&r===!0)throw new T(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ql(n){if(!P.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xl(n){if(P.isDocumentKey(n))throw new T(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function us(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":D()}function Fe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new T(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=us(n);throw new T(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new T(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Uy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=td((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new T(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cs{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lm;switch(r.type){case"firstParty":return new dm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Hl.get(e);r&&(R("ComponentProvider","Removing Datastore"),Hl.delete(e),r.terminate())}(this),Promise.resolve()}}function qy(n,t,e,r={}){var i;const s=(n=Fe(n,cs))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Lt.MOCK_USER;else{a=bd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Lt(u)}n._authCredentials=new um(new Qc(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Mn(this.firestore,t,this._query)}}class Ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new be(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ht(this.firestore,t,this._key)}}class be extends Mn{constructor(t,e,r){super(t,e,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ht(this.firestore,null,new P(t))}withConverter(t){return new be(this.firestore,t,this._path)}}function nd(n,t,...e){if(n=Ct(n),ed("collection","path",t),n instanceof cs){const r=ht.fromString(t,...e);return Xl(r),new be(n,null,r)}{if(!(n instanceof Ht||n instanceof be))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return Xl(r),new be(n.firestore,null,r)}}function ki(n,t,...e){if(n=Ct(n),arguments.length===1&&(t=Xc.V()),ed("doc","path",t),n instanceof cs){const r=ht.fromString(t,...e);return Ql(r),new Ht(n,null,new P(r))}{if(!(n instanceof Ht||n instanceof be))throw new T(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return Ql(r),new Ht(n.firestore,n instanceof be?n.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new ra(this,"async_queue_retry"),this.Za=()=>{const e=Vs();e&&R("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Qo.Oo()};const t=Vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const e=Vs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const e=new he;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!Nr(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const e=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=e,e}enqueueAfterDelay(t,e,r){this.Xa(),this.Ya.indexOf(t)>-1&&(e=0);const i=aa.createAndSchedule(this,t,e,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&D()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const e of this.za)if(e.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.za)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const e=this.za.indexOf(t);this.za.splice(e,1)}}class $r extends cs{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new By}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rd(this),this._firestoreClient.terminate()}}function He(n,t){const e=typeof n=="object"?n:uu(),r=typeof n=="string"?n:t||"(default)",i=ao(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Nd("firestore");s&&qy(i,...s)}return i}function hs(n){return n._firestoreClient||rd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function rd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,l,u,c){return new Am(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,td(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new by(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new nn(qt.fromBase64String(t))}catch(e){throw new T(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new nn(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new T(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/^__.*__$/;class Ky{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new qe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mr(t,this.data,e,this.fieldTransforms)}}class id{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new qe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function sd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class pa{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(t){return new pa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.uu({path:r,lu:!1});return i.hu(t),i}Pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(t){return this.uu({path:void 0,lu:!0})}Tu(t){return Vi(t,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_u(){if(this.path)for(let t=0;t<this.path.length;t++)this.hu(this.path.get(t))}hu(t){if(t.length===0)throw this.Tu("Document fields must not be empty");if(sd(this.au)&&jy.test(t))throw this.Tu('Document fields cannot begin and end with "__"')}}class zy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||os(t)}Au(t,e,r,i=!1){return new pa({au:t,methodName:e,du:r,path:Ft.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ga(n){const t=n._freezeSettings(),e=os(n._databaseId);return new zy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function od(n,t,e,r,i,s={}){const o=n.Au(s.merge||s.mergeFields?2:0,t,e,i);ma("Data must be an object, but it was:",o,r);const a=ad(r,o);let l,u;if(s.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=so(t,h,e);if(!o.contains(d))throw new T(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ud(c,d)||c.push(d)}l=new Yt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Ky(new Kt(a),l,u)}class fs extends da{_toFieldTransform(t){if(t.au!==2)throw t.au===1?t.Tu(`${this._methodName}() can only appear at the top level of your update data`):t.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fs}}function Gy(n,t,e,r){const i=n.Au(1,t,e);ma("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();sn(r,(l,u)=>{const c=_a(t,l,e);u=Ct(u);const h=i.Pu(c);if(u instanceof fs)s.push(c);else{const d=Ur(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Yt(s);return new id(o,a,i.fieldTransforms)}function Wy(n,t,e,r,i,s){const o=n.Au(1,t,e),a=[so(t,r,e)],l=[i];if(s.length%2!=0)throw new T(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(so(t,s[d])),l.push(s[d+1]);const u=[],c=Kt.empty();for(let d=a.length-1;d>=0;--d)if(!ud(u,a[d])){const f=a[d];let I=l[d];I=Ct(I);const _=o.Pu(f);if(I instanceof fs)u.push(f);else{const w=Ur(I,_);w!=null&&(u.push(f),c.set(f,w))}}const h=new Yt(u);return new id(c,h,o.fieldTransforms)}function Hy(n,t,e,r=!1){return Ur(e,n.Au(r?4:3,t))}function Ur(n,t){if(ld(n=Ct(n)))return ma("Unsupported field value:",t,n),ad(n,t);if(n instanceof da)return function(r,i){if(!sd(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.lu&&t.au!==4)throw t.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ur(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Km(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Rt.fromDate(r);return{timestampValue:Pi(i.serializer,s)}}if(r instanceof Rt){const s=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pi(i.serializer,s)}}if(r instanceof fa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:Ph(i.serializer,r._byteString)};if(r instanceof Ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${us(r)}`)}(n,t)}function ad(n,t){const e={};return Yc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(n,(r,i)=>{const s=Ur(i,t.cu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Rt||n instanceof fa||n instanceof nn||n instanceof Ht||n instanceof da)}function ma(n,t,e){if(!ld(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=us(e);throw r==="an object"?t.Tu(n+" a custom object"):t.Tu(n+" "+r)}}function so(n,t,e){if((t=Ct(t))instanceof ds)return t._internalPath;if(typeof t=="string")return _a(n,t);throw Vi("Field path arguments must be of type string or ",n,!1,void 0,e)}const Qy=new RegExp("[~\\*/\\[\\]]");function _a(n,t,e){if(t.search(Qy)>=0)throw Vi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ds(...t.split("."))._internalPath}catch{throw Vi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Vi(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new T(p.INVALID_ARGUMENT,a+n+l)}function ud(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Xy extends Di{data(){return super.data()}}function cd(n,t){return typeof t=="string"?_a(n,t):t instanceof ds?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ya{}class Jy extends ya{}function hd(n,t,...e){let r=[];t instanceof ya&&r.push(t),r=r.concat(e),function(s){const o=s.filter(l=>l instanceof Ta).length,a=s.filter(l=>l instanceof va).length;if(o>1||o>0&&a>0)throw new T(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class va extends Jy{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new va(t,e,r)}_apply(t){const e=this._parse(t);return dd(t._query,e),new Mn(t.firestore,t.converter,Js(t._query,e))}_parse(t){const e=ga(t.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Zl(h,c);const f=[];for(const I of h)f.push(Jl(l,s,I));d={arrayValue:{values:f}}}else d=Jl(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Zl(h,c),d=Hy(a,o,h,c==="in"||c==="not-in");return At.create(u,c,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ta extends ya{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ta(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ie.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)dd(o,l),o=Js(o,l)}(t._query,e),new Mn(t.firestore,t.converter,Js(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jl(n,t,e){if(typeof(e=Ct(e))=="string"){if(e==="")throw new T(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ah(t)&&e.indexOf("/")!==-1)throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ht.fromString(e));if(!P.isDocumentKey(r))throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Il(n,new P(r))}if(e instanceof Ht)return Il(n,e._key);throw new T(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${us(e)}.`)}function Zl(n,t){if(!Array.isArray(n)||n.length===0)throw new T(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dd(n,t){if(t.isInequality()){const r=Ho(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new T(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=oh(n);s!==null&&Zy(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Zy(n,t,e){if(!e.isEqual(t))throw new T(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}class fd{convertValue(t,e="none"){switch(en(t)){case 0:return null;case 1:return t.booleanValue;case 2:return wt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw D()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return sn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new fa(wt(t.latitude),wt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=jo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(cr(t));default:return null}}convertTimestamp(t){const e=Me(t);return new Rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ht.fromString(t);tt(Nh(r));const i=new hr(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(e)||Re(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class tv extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new nn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ht(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ea extends Di{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(cd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class oi extends Ea{data(t={}){return super.data(t)}}class ev{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new fn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new oi(this._firestore,this._userDataWriter,r.key,r,new fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new oi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new oi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:nv(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){n=Fe(n,Ht);const t=Fe(n.firestore,$r);return xy(hs(t),n._key).then(e=>ov(t,n,e))}class Ia extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new nn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ht(this.firestore,null,e)}}function gd(n){n=Fe(n,Mn);const t=Fe(n.firestore,$r),e=hs(t),r=new Ia(t);return Yy(n._query),$y(e,n._query).then(i=>new ev(t,r,n,i))}function iv(n,t,e){n=Fe(n,Ht);const r=Fe(n.firestore,$r),i=pd(n.converter,t,e);return sv(r,[od(ga(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Qt.none())])}function sv(n,t){return function(r,i){const s=new he;return r.asyncQueue.enqueueAndForget(async()=>Ey(await Ly(r),i,s)),s.promise}(hs(n),t)}function ov(n,t,e){const r=e.docs.get(t._key),i=new Ia(n);return new Ea(n,i,t._key,r,new fn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const av={maxAttempts:5};function Un(n,t){if((n=Ct(n)).firestore!==t)throw new T(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lv extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=ga(e)}get(e){const r=Un(e,this._firestore),i=new tv(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return D();const o=s[0];if(o.isFoundDocument())return new Di(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Di(this._firestore,i,r._key,null,r.converter);throw D()})}set(e,r,i){const s=Un(e,this._firestore),o=pd(s.converter,r,i),a=od(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=Un(e,this._firestore);let a;return a=typeof(r=Ct(r))=="string"||r instanceof ds?Wy(this._dataReader,"Transaction.update",o._key,r,i,s):Gy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Un(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Un(t,this._firestore),r=new Ia(this._firestore);return super.get(t).then(i=>new Ea(this._firestore,r,e._key,i._document,new fn(!1,!1),e.converter))}}function uv(n,t,e){n=Fe(n,$r);const r=Object.assign(Object.assign({},av),e);return function(s){if(s.maxAttempts<1)throw new T(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new he;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Fy(s);new Ny(s.asyncQueue,u,a,o,l).run()}),l.promise}(hs(n),i=>t(new lv(n,i)),r)}(function(t,e=!0){(function(i){Nn=i})(kn),Ns(new bs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $r(new cm(r.getProvider("auth-internal")),new pm(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Jn(_l,"4.0.0",t),Jn(_l,"4.0.0","esm2017")})();const cv=async()=>{const n=await hv(),t=await fv();return{settings:n,supertags:t}},hv=async()=>{var n;try{const{currentUser:t}=xe();if(t)return(n=(await rv(ki(He(),"users",t.uid))).data())==null?void 0:n.preferences}catch(t){console.warn("Failed to get user document:",t);return}},dv=async n=>{try{const{currentUser:t}=xe();t&&await iv(ki(He(),"users",t.uid),n,{merge:!0})}catch(t){console.warn("Failed to save user document:",t)}},fv=async()=>{try{const{currentUser:n}=xe();if(n){const t=await gd(hd(nd(He(),`users/${n.uid}/supertags`))),e=[];return t.forEach(r=>{const i=r.data();e.push(Od(r.id,i.description,Object.entries(i.tags).map(s=>Md(s[1],s[0]))))}),e}}catch(n){console.warn("Failed to get user document:",n);return}},pv=async n=>{try{const{currentUser:t}=xe();t&&await uv(He(),async e=>{(await gd(hd(nd(He(),`users/${t.uid}/supertags`)))).forEach(async i=>e.delete(ki(He(),`users/${t.uid}/supertags/${i.id}`))),n.map(i=>e.set(ki(He(),`users/${t.uid}/supertags`,i.name),{description:i.description,tags:Object.fromEntries(i.tags.map(s=>[s.name,s.modifier]))}))})}catch(t){console.warn("Failed to save user document:",t)}},gv=async(n,t)=>{await dv(n),await pv(t)},mv=()=>{const n=Ld(!1);return xe().onAuthStateChanged(t=>{n.set(t!==null)}),n},_v=mv();function tu(n,t,e){const r=n.slice();return r[25]=t[e],r}function yv(n){let t;return{c(){t=zt("Account")},l(e){t=Gt(e,"Account")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function vv(n){let t;return{c(){t=zt("Supertags")},l(e){t=Gt(e,"Supertags")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function eu(n){let t,e=`You don't have any supertags yet. You can create them when you have more than one tag
				active.`;return{c(){t=dt("span"),t.textContent=e},l(r){t=ft(r,"SPAN",{["data-svelte-h"]:!0}),ye(t)!=="svelte-skkb3i"&&(t.textContent=e)},m(r,i){rt(r,t,i)},d(r){r&&q(t)}}}function nu(n){let t,e;return t=new Wd({props:{supertag:n[25]}}),t.$on("remove",n[13]),t.$on("edit",n[14]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p(r,i){const s={};i&8&&(s.supertag=r[25]),t.$set(s)},i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function Tv(n){let t;return{c(){t=zt("Import/Export Data")},l(e){t=Gt(e,"Import/Export Data")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function Ev(n){let t,e="Download Config File";return{c(){t=dt("span"),t.textContent=e,this.h()},l(r){t=ft(r,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(t)!=="svelte-wwbsqq"&&(t.textContent=e),this.h()},h(){yt(t,"class","codicon codicon-file svelte-1ceto93")},m(r,i){rt(r,t,i)},p:de,d(r){r&&q(t)}}}function Iv(n){let t,e="Load Config File";return{c(){t=dt("span"),t.textContent=e,this.h()},l(r){t=ft(r,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(t)!=="svelte-1ld4bre"&&(t.textContent=e),this.h()},h(){yt(t,"class","codicon codicon-file svelte-1ceto93")},m(r,i){rt(r,t,i)},p:de,d(r){r&&q(t)}}}function wv(n){let t;return{c(){t=zt("Google Account Syncing")},l(e){t=Gt(e,"Google Account Syncing")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function Av(n){let t,e;return t=new Ie({props:{title:"Sign in with google to backup data",$$slots:{default:[Pv]},$$scope:{ctx:n}}}),t.$on("click",n[18]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p(r,i){const s={};i&268435456&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function Rv(n){let t,e,r,i,s,o;return t=new Ie({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Sv]},$$scope:{ctx:n}}}),t.$on("click",n[15]),r=new Ie({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Cv]},$$scope:{ctx:n}}}),r.$on("click",n[16]),s=new Ie({props:{title:"Sign out",$$slots:{default:[kv]},$$scope:{ctx:n}}}),s.$on("click",n[17]),{c(){ot(t.$$.fragment),e=Y(),ot(r.$$.fragment),i=Y(),ot(s.$$.fragment)},l(a){at(t.$$.fragment,a),e=J(a),at(r.$$.fragment,a),i=J(a),at(s.$$.fragment,a)},m(a,l){lt(t,a,l),rt(a,e,l),lt(r,a,l),rt(a,i,l),lt(s,a,l),o=!0},p(a,l){const u={};l&268435456&&(u.$$scope={dirty:l,ctx:a}),t.$set(u);const c={};l&268435456&&(c.$$scope={dirty:l,ctx:a}),r.$set(c);const h={};l&268435456&&(h.$$scope={dirty:l,ctx:a}),s.$set(h)},i(a){o||(C(t.$$.fragment,a),C(r.$$.fragment,a),C(s.$$.fragment,a),o=!0)},o(a){F(t.$$.fragment,a),F(r.$$.fragment,a),F(s.$$.fragment,a),o=!1},d(a){a&&(q(e),q(i)),ut(t,a),ut(r,a),ut(s,a)}}}function Pv(n){let t;return{c(){t=zt("Connect Google User")},l(e){t=Gt(e,"Connect Google User")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function Sv(n){let t,e="Load Config";return{c(){t=dt("span"),t.textContent=e,this.h()},l(r){t=ft(r,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(t)!=="svelte-g2l2uz"&&(t.textContent=e),this.h()},h(){yt(t,"class","codicon codicon-cloud svelte-1ceto93")},m(r,i){rt(r,t,i)},p:de,d(r){r&&q(t)}}}function Cv(n){let t,e="Save config";return{c(){t=dt("span"),t.textContent=e,this.h()},l(r){t=ft(r,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(t)!=="svelte-kmcvvq"&&(t.textContent=e),this.h()},h(){yt(t,"class","codicon codicon-cloud svelte-1ceto93")},m(r,i){rt(r,t,i)},p:de,d(r){r&&q(t)}}}function kv(n){let t;return{c(){t=zt("Sign Out")},l(e){t=Gt(e,"Sign Out")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function Vv(n){let t;return{c(){t=zt("Delete Data")},l(e){t=Gt(e,"Delete Data")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function Dv(n){let t;return{c(){t=zt("Delete Data")},l(e){t=Gt(e,"Delete Data")},m(e,r){rt(e,t,r)},d(e){e&&q(t)}}}function ru(n){let t,e;return t=new Mi({props:{title:"Load Data",warning:"This will replace all your current settings with settings save online. Are you sure you want to do that?",labelConfirm:"Yes, load settings.",labelCancel:"Cancel"}}),t.$on("confirm",n[20]),t.$on("close",n[21]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p:de,i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function iu(n){let t,e;return t=new Mi({props:{title:"Save data online",warning:"This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?",labelConfirm:"Yes, backup online",labelCancel:"Cancel"}}),t.$on("confirm",n[22]),t.$on("close",n[23]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p:de,i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function su(n){let t,e;return t=new Mi({props:{title:"Delete Data",warning:"This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?",labelConfirm:"Yes, delete it.",labelCancel:"Cancel"}}),t.$on("confirm",n[9]),t.$on("close",n[24]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){lt(t,r,i),e=!0},p:de,i(r){e||(C(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function Nv(n){let t,e,r,i,s,o,a,l,u,c,h,d,f,I,_,w,k,W,B,L,j,K,it,Tt,pt,nt,z,N,H,X;e=new Ed({props:{$$slots:{default:[yv]},$$scope:{ctx:n}}}),i=new qr({props:{$$slots:{default:[vv]},$$scope:{ctx:n}}});let E=n[3].items.length===0&&eu(),S=Tn(n[3].items),v=[];for(let g=0;g<S.length;g+=1)v[g]=nu(tu(n,S,g));const se=g=>F(v[g],1,1,()=>{v[g]=null});c=new qr({props:{$$slots:{default:[Tv]},$$scope:{ctx:n}}}),f=new Ie({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Ev]},$$scope:{ctx:n}}}),f.$on("click",n[11]),_=new Ie({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Iv]},$$scope:{ctx:n}}}),_.$on("click",n[12]),k=new qr({props:{$$slots:{default:[wv]},$$scope:{ctx:n}}});const O=[Rv,Av],V=[];function Dt(g,A){return g[8]?0:1}L=Dt(n),j=V[L]=O[L](n),it=new qr({props:{$$slots:{default:[Vv]},$$scope:{ctx:n}}}),pt=new Ie({props:{title:"Delete all your data.",$$slots:{default:[Dv]},$$scope:{ctx:n}}}),pt.$on("click",n[19]);let st=n[1]&&ru(n),gt=n[2]&&iu(n),mt=n[0]&&su(n);return{c(){t=dt("section"),ot(e.$$.fragment),r=Y(),ot(i.$$.fragment),s=Y(),o=dt("div"),E&&E.c(),a=Y(),l=dt("ul");for(let g=0;g<v.length;g+=1)v[g].c();u=Y(),ot(c.$$.fragment),h=Y(),d=dt("div"),ot(f.$$.fragment),I=Y(),ot(_.$$.fragment),w=Y(),ot(k.$$.fragment),W=Y(),B=dt("div"),j.c(),K=Y(),ot(it.$$.fragment),Tt=Y(),ot(pt.$$.fragment),nt=Y(),st&&st.c(),z=Y(),gt&&gt.c(),N=Y(),mt&&mt.c(),H=ui(),this.h()},l(g){t=ft(g,"SECTION",{class:!0});var A=jt(t);at(e.$$.fragment,A),r=J(A),at(i.$$.fragment,A),s=J(A),o=ft(A,"DIV",{class:!0});var te=jt(o);E&&E.l(te),a=J(te),l=ft(te,"UL",{});var Ln=jt(l);for(let an=0;an<v.length;an+=1)v[an].l(Ln);Ln.forEach(q),te.forEach(q),u=J(A),at(c.$$.fragment,A),h=J(A),d=ft(A,"DIV",{class:!0});var Be=jt(d);at(f.$$.fragment,Be),I=J(Be),at(_.$$.fragment,Be),Be.forEach(q),w=J(A),at(k.$$.fragment,A),W=J(A),B=ft(A,"DIV",{class:!0});var Fn=jt(B);j.l(Fn),Fn.forEach(q),K=J(A),at(it.$$.fragment,A),Tt=J(A),at(pt.$$.fragment,A),A.forEach(q),nt=J(g),st&&st.l(g),z=J(g),gt&&gt.l(g),N=J(g),mt&&mt.l(g),H=ui(),this.h()},h(){yt(o,"class","supertags"),yt(d,"class","button-row svelte-1ceto93"),yt(B,"class","button-row svelte-1ceto93"),yt(t,"class","svelte-1ceto93")},m(g,A){rt(g,t,A),lt(e,t,null),x(t,r),lt(i,t,null),x(t,s),x(t,o),E&&E.m(o,null),x(o,a),x(o,l);for(let te=0;te<v.length;te+=1)v[te]&&v[te].m(l,null);x(t,u),lt(c,t,null),x(t,h),x(t,d),lt(f,d,null),x(d,I),lt(_,d,null),x(t,w),lt(k,t,null),x(t,W),x(t,B),V[L].m(B,null),x(t,K),lt(it,t,null),x(t,Tt),lt(pt,t,null),rt(g,nt,A),st&&st.m(g,A),rt(g,z,A),gt&&gt.m(g,A),rt(g,N,A),mt&&mt.m(g,A),rt(g,H,A),X=!0},p(g,[A]){const te={};A&268435456&&(te.$$scope={dirty:A,ctx:g}),e.$set(te);const Ln={};if(A&268435456&&(Ln.$$scope={dirty:A,ctx:g}),i.$set(Ln),g[3].items.length===0?E||(E=eu(),E.c(),E.m(o,a)):E&&(E.d(1),E=null),A&8){S=Tn(g[3].items);let Bt;for(Bt=0;Bt<S.length;Bt+=1){const Pa=tu(g,S,Bt);v[Bt]?(v[Bt].p(Pa,A),C(v[Bt],1)):(v[Bt]=nu(Pa),v[Bt].c(),C(v[Bt],1),v[Bt].m(l,null))}for(ge(),Bt=S.length;Bt<v.length;Bt+=1)se(Bt);me()}const Be={};A&268435456&&(Be.$$scope={dirty:A,ctx:g}),c.$set(Be);const Fn={};A&268435456&&(Fn.$$scope={dirty:A,ctx:g}),f.$set(Fn);const an={};A&268435456&&(an.$$scope={dirty:A,ctx:g}),_.$set(an);const wa={};A&268435456&&(wa.$$scope={dirty:A,ctx:g}),k.$set(wa);let ps=L;L=Dt(g),L===ps?V[L].p(g,A):(ge(),F(V[ps],1,1,()=>{V[ps]=null}),me(),j=V[L],j?j.p(g,A):(j=V[L]=O[L](g),j.c()),C(j,1),j.m(B,null));const Aa={};A&268435456&&(Aa.$$scope={dirty:A,ctx:g}),it.$set(Aa);const Ra={};A&268435456&&(Ra.$$scope={dirty:A,ctx:g}),pt.$set(Ra),g[1]?st?(st.p(g,A),A&2&&C(st,1)):(st=ru(g),st.c(),C(st,1),st.m(z.parentNode,z)):st&&(ge(),F(st,1,1,()=>{st=null}),me()),g[2]?gt?(gt.p(g,A),A&4&&C(gt,1)):(gt=iu(g),gt.c(),C(gt,1),gt.m(N.parentNode,N)):gt&&(ge(),F(gt,1,1,()=>{gt=null}),me()),g[0]?mt?(mt.p(g,A),A&1&&C(mt,1)):(mt=su(g),mt.c(),C(mt,1),mt.m(H.parentNode,H)):mt&&(ge(),F(mt,1,1,()=>{mt=null}),me())},i(g){if(!X){C(e.$$.fragment,g),C(i.$$.fragment,g);for(let A=0;A<S.length;A+=1)C(v[A]);C(c.$$.fragment,g),C(f.$$.fragment,g),C(_.$$.fragment,g),C(k.$$.fragment,g),C(j),C(it.$$.fragment,g),C(pt.$$.fragment,g),C(st),C(gt),C(mt),X=!0}},o(g){F(e.$$.fragment,g),F(i.$$.fragment,g),v=v.filter(Boolean);for(let A=0;A<v.length;A+=1)F(v[A]);F(c.$$.fragment,g),F(f.$$.fragment,g),F(_.$$.fragment,g),F(k.$$.fragment,g),F(j),F(it.$$.fragment,g),F(pt.$$.fragment,g),F(st),F(gt),F(mt),X=!1},d(g){g&&(q(t),q(nt),q(z),q(N),q(H)),ut(e),ut(i),E&&E.d(),oo(v,g),ut(c),ut(f),ut(_),ut(k),V[L].d(),ut(it),ut(pt),st&&st.d(g),gt&&gt.d(g),mt&&mt.d(g)}}}function bv(n,t,e){let r,i,s,o,a,l;ln(n,je,N=>e(3,r=N)),ln(n,ms,N=>e(4,i=N)),ln(n,_s,N=>e(5,s=N)),ln(n,ys,N=>e(6,o=N)),ln(n,gs,N=>e(7,a=N)),ln(n,_v,N=>e(8,l=N));let u=!1,c=!1,h=!1;const d=()=>{je.reset()},f=()=>({[Et.LocalstorageEnabled]:a,[Et.Theme]:o,[Et.BlockedContent]:s,[Et.ResultColumns]:i,[Et.Supertags]:r});return[u,c,h,r,i,s,o,a,l,d,f,async()=>{const N=f();try{const X=await(await showSaveFilePicker({suggestedName:"kurosearch-config.json"})).createWritable(),E=JSON.stringify(N,void 0,2);await X.write(E),await X.close();return}catch(H){console.error(H)}},async()=>{try{const[N]=await showOpenFilePicker(),X=await(await N.getFile()).text(),E=JSON.parse(X);ne(gs,a=E[Et.LocalstorageEnabled],a),ne(ys,o=E[Et.Theme],o),ne(_s,s=E[Et.BlockedContent],s),ne(ms,i=E[Et.ResultColumns],i),ne(je,r=E[Et.Supertags],r)}catch(N){console.error(N)}},N=>je.remove(N.detail),N=>{console.log(N),je.update(N.detail.oldName,N.detail.newSupertag)},()=>e(1,c=!0),()=>e(2,h=!0),()=>tg(),()=>Zp(),()=>e(0,u=!0),async()=>{const N=await cv();N.settings&&(N.settings[Et.LocalstorageEnabled]&&ne(gs,a=N.settings[Et.LocalstorageEnabled],a),N.settings[Et.Theme]&&ne(ys,o=N.settings[Et.Theme],o),N.settings[Et.BlockedContent]&&ne(_s,s=N.settings[Et.BlockedContent],s),N.settings[Et.ResultColumns]&&ne(ms,i=N.settings[Et.ResultColumns],i),N.settings[Et.Supertags]&&ne(je,r=N.settings[Et.Supertags],r)),N.supertags&&ne(je,r.items=N.supertags,r)},()=>e(1,c=!1),async()=>{await gv(f(),r.items)},()=>e(2,h=!1),()=>e(0,u=!1)]}class nT extends bi{constructor(t){super(),Oi(this,t,bv,Nv,Ni,{})}}export{nT as component};
